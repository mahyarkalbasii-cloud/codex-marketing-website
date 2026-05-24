import { execFileSync } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const handoffDir = path.join(rootDir, "handoff");
const packageJsonPath = path.join(rootDir, "package.json");

const screenshotRecords = [];
const consoleErrors = [];
const consoleWarnings = [];
const networkIssues = [];
const requestFailures = [];
const performanceStats = {
  requestCount: 0,
  totalTransferredBytes: 0,
  domContentLoadedMs: null,
  loadMs: null,
};

const sectionQueries = [
  { key: "hero", selector: "#hero" },
  { key: "problem", selector: "#problem" },
  { key: "solution", selector: "#solution" },
  { key: "how-it-works", selector: "#how-it-works" },
  { key: "product", selector: "#product" },
  { key: "sales-flow", selector: "#sales-flow" },
  { key: "audiences", selector: "#audiences" },
  { key: "plans", selector: "#plans" },
  { key: "faq", selector: "#faq" },
  { key: "demo", selector: "#demo" },
  { key: "footer", selector: "footer" },
];

const desktopSections = [
  ["02-hero-desktop.png", "#hero", "hero"],
  ["03-problem-desktop.png", "#problem", "problem"],
  ["04-solution-desktop.png", "#solution", "solution"],
  ["05-how-it-works-desktop.png", "#how-it-works", "how it works"],
  ["06-product-desktop.png", "#product", "product"],
  ["07-sales-flow-desktop.png", "#sales-flow", "sales flow"],
  ["08-audiences-desktop.png", "#audiences", "audiences"],
  ["09-plans-desktop.png", "#plans", "plans"],
  ["10-faq-desktop.png", "#faq", "faq"],
  ["11-footer-desktop.png", "footer", "footer"],
];

const mobileSections = [
  ["21-hero-mobile.png", "#hero", "mobile hero"],
  ["22-problem-mobile.png", "#problem", "mobile problem"],
  ["23-solution-mobile.png", "#solution", "mobile solution"],
  ["24-how-it-works-mobile.png", "#how-it-works", "mobile how it works"],
  ["25-product-mobile.png", "#product", "mobile product"],
  ["26-sales-flow-mobile.png", "#sales-flow", "mobile sales flow"],
  ["27-audiences-mobile.png", "#audiences", "mobile audiences"],
  ["28-plans-mobile.png", "#plans", "mobile plans"],
  ["29-faq-mobile.png", "#faq", "mobile faq"],
  ["30-footer-mobile.png", "footer", "mobile footer"],
];

const transitionShots = [
  ["12a-trans-solution-howitworks.png", "#solution", "#how-it-works", "solution to how it works"],
  ["12b-trans-howitworks-product.png", "#how-it-works", "#product", "how it works to product"],
  ["12c-trans-product-salesflow.png", "#product", "#sales-flow", "product to sales flow"],
];

let progressCurrent = 0;
let progressTotal = 1 + desktopSections.length + transitionShots.length + 1 + mobileSections.length + 1 + 1;

async function main() {
  await fs.rm(handoffDir, { recursive: true, force: true });
  await fs.mkdir(handoffDir, { recursive: true });

  const baseUrl = await resolveBaseUrl();
  const gitInfo = getGitInfo();
  const browser = await chromium.launch({ headless: true });

  try {
    const desktop = await newPage(browser, {
      baseUrl,
      viewport: { width: 1440, height: 900 },
      collectPerformance: true,
    });

    await preparePage(desktop.page, baseUrl);
    await triggerAllReveals(desktop.page);
    await capture(desktop.page, "01-full-page-desktop.png", "full page desktop", { fullPage: true });

    for (const [fileName, selector, label] of desktopSections) {
      const found = await scrollToSection(desktop.page, selector);
      if (!found) {
        logSkip(label, selector);
        continue;
      }
      await settle(desktop.page, 1500);
      await capture(desktop.page, fileName, label, { fullPage: false });
    }

    for (const [fileName, fromSelector, toSelector, label] of transitionShots) {
      const found = await scrollToTransition(desktop.page, fromSelector, toSelector);
      if (!found) {
        logSkip(label, `${fromSelector} -> ${toSelector}`);
        continue;
      }
      await settle(desktop.page, 1500);
      await capture(desktop.page, fileName, label, { fullPage: false });
    }

    const desktopLayout = await collectLayout(desktop.page, "Desktop", 1440);
    const desktopPerf = await collectPerformance(desktop.page);
    await desktop.context.close();

    const mobile = await newPage(browser, {
      baseUrl,
      viewport: { width: 390, height: 844 },
      collectPerformance: false,
      isMobile: true,
    });

    await preparePage(mobile.page, baseUrl);
    await triggerAllReveals(mobile.page);
    await capture(mobile.page, "20-full-page-mobile.png", "full page mobile", { fullPage: true });

    for (const [fileName, selector, label] of mobileSections) {
      const found = await scrollToSection(mobile.page, selector);
      if (!found) {
        logSkip(label, selector);
        continue;
      }
      await settle(mobile.page, 1500);
      await capture(mobile.page, fileName, label, { fullPage: false });
    }

    const mobileLayout = await collectLayout(mobile.page, "Mobile", 390);
    await mobile.context.close();

    const tablet = await newPage(browser, {
      baseUrl,
      viewport: { width: 820, height: 1180 },
      collectPerformance: false,
    });

    await preparePage(tablet.page, baseUrl);
    await triggerAllReveals(tablet.page);
    await capture(tablet.page, "40-full-page-tablet.png", "full page tablet", { fullPage: true });
    const tabletLayout = await collectLayout(tablet.page, "Tablet", 820);
    await tablet.context.close();

    const reduced = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 1,
      reducedMotion: "reduce",
    });
    const reducedPage = await reduced.newPage();
    attachObservers(reducedPage, false);
    await preparePage(reducedPage, baseUrl);
    await triggerAllReveals(reducedPage);
    await capture(
      reducedPage,
      "50-full-page-desktop-reduced-motion.png",
      "reduced motion full page desktop",
      { fullPage: true },
    );
    await reduced.close();

    await writeAudit({
      baseUrl,
      gitInfo,
      layouts: { desktop: desktopLayout, tablet: tabletLayout, mobile: mobileLayout },
      performance: { ...performanceStats, ...desktopPerf },
    });

    console.log("");
    console.log("Handoff capture complete.");
    console.log(`- ${screenshotRecords.length} screenshots in handoff/`);
    console.log("- Audit report: handoff/AUDIT.md");
    console.log("- Send all files in handoff/ to design review.");
  } finally {
    await browser.close();
  }
}

async function resolveBaseUrl() {
  const envUrl = process.env.BASE_URL?.trim();
  if (envUrl) {
    await assertReachable(envUrl);
    return stripTrailingSlash(envUrl);
  }

  const pkg = JSON.parse(await fs.readFile(packageJsonPath, "utf8"));
  const scriptPorts = Object.values(pkg.scripts || {})
    .flatMap((script) => {
      const matches = [...String(script).matchAll(/(?:-p|--port)\s+(\d+)/g)];
      return matches.map((match) => Number(match[1]));
    })
    .filter(Boolean);

  const candidates = [...new Set([3000, ...scriptPorts, 3006, 3005, 3004])].map(
    (port) => `http://localhost:${port}`,
  );

  for (const candidate of candidates) {
    if (await isReachable(candidate)) {
      return candidate;
    }
  }

  throw new Error(
    `Could not connect to a local server. Tried: ${candidates.join(", ")}. Start the app first or pass BASE_URL=http://localhost:<port>.`,
  );
}

async function assertReachable(url) {
  if (!(await isReachable(url))) {
    throw new Error(`Could not connect to ${url}. Start the app first or pass a valid BASE_URL.`);
  }
}

async function isReachable(url) {
  try {
    const response = await fetch(url, { method: "GET" });
    return response.ok;
  } catch {
    return false;
  }
}

function stripTrailingSlash(url) {
  return url.replace(/\/$/, "");
}

async function newPage(browser, options) {
  const context = await browser.newContext({
    viewport: options.viewport,
    deviceScaleFactor: 1,
    isMobile: Boolean(options.isMobile),
    locale: "fa-IR",
  });
  const page = await context.newPage();
  attachObservers(page, options.collectPerformance);
  return { context, page };
}

function attachObservers(page, collectPerformance) {
  page.on("console", (message) => {
    const type = message.type();
    if (type === "error") {
      consoleErrors.push(message.text());
    }
    if (type === "warning" || type === "warn") {
      consoleWarnings.push(message.text());
    }
  });

  page.on("pageerror", (error) => {
    consoleErrors.push(error.message);
  });

  page.on("requestfailed", (request) => {
    requestFailures.push(`${request.url()} - ${request.failure()?.errorText || "request failed"}`);
  });

  page.on("response", async (response) => {
    const status = response.status();
    if (collectPerformance) {
      performanceStats.requestCount += 1;
      const contentLength = Number(response.headers()["content-length"] || 0);
      if (Number.isFinite(contentLength)) {
        performanceStats.totalTransferredBytes += contentLength;
      }
    }

    if (status !== 200 && status !== 304) {
      networkIssues.push(`${status} ${response.url()}`);
    }
  });
}

async function preparePage(page, baseUrl) {
  await page.goto(baseUrl, { waitUntil: "domcontentloaded", timeout: 45000 });
  await page.waitForLoadState("load", { timeout: 45000 });
  await page.evaluate(async () => {
    if ("fonts" in document) {
      await document.fonts.ready;
    }
  });
  await settle(page, 500);
}

async function triggerAllReveals(page) {
  await page.evaluate(async () => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const max = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    const step = Math.max(420, Math.floor(window.innerHeight * 0.7));

    for (let y = 0; y <= max; y += step) {
      window.scrollTo({ top: y, behavior: "instant" });
      await sleep(160);
    }

    window.scrollTo({ top: max, behavior: "instant" });
    await sleep(250);
    window.scrollTo({ top: 0, behavior: "instant" });
  });
  await settle(page, 1500);
}

async function scrollToSection(page, selector) {
  return page.evaluate((targetSelector) => {
    const element = document.querySelector(targetSelector);
    if (!element) return false;

    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const absoluteTop = rect.top + window.scrollY;
    const targetTop =
      rect.height <= viewportHeight * 0.82
        ? absoluteTop - (viewportHeight - rect.height) / 2
        : absoluteTop - viewportHeight * 0.1;

    window.scrollTo({
      top: Math.max(0, Math.min(targetTop, document.documentElement.scrollHeight - viewportHeight)),
      behavior: "instant",
    });
    return true;
  }, selector);
}

async function scrollToTransition(page, fromSelector, toSelector) {
  return page.evaluate(
    ({ fromSelector: from, toSelector: to }) => {
      const fromElement = document.querySelector(from);
      const toElement = document.querySelector(to);
      if (!fromElement || !toElement) return false;

      const fromRect = fromElement.getBoundingClientRect();
      const toRect = toElement.getBoundingClientRect();
      const fromTop = fromRect.top + window.scrollY;
      const fromBottom = fromTop + fromRect.height;
      const toTop = toRect.top + window.scrollY;
      const boundary = fromBottom <= toTop ? fromBottom : Math.min(fromBottom, toTop);
      const targetTop = Math.max(
        0,
        Math.min(boundary - 260, document.documentElement.scrollHeight - window.innerHeight),
      );

      window.scrollTo({ top: targetTop, behavior: "instant" });
      return true;
    },
    { fromSelector, toSelector },
  );
}

async function settle(page, ms) {
  await page.waitForTimeout(ms);
}

async function capture(page, fileName, label, options) {
  progressCurrent += 1;
  console.log(`[${progressCurrent}/${progressTotal}] Capturing ${label}...`);
  const outputPath = path.join(handoffDir, fileName);
  await page.screenshot({ path: outputPath, fullPage: Boolean(options.fullPage), animations: "disabled" });
  screenshotRecords.push(fileName);
}

async function collectLayout(page, label, width) {
  return page.evaluate(
    ({ sectionQueries: queries, label: viewportLabel, width: viewportWidth }) => {
      const sectionRects = {};

      for (const section of queries) {
        const element = document.querySelector(section.selector);
        if (!element) {
          sectionRects[section.key] = null;
          continue;
        }

        const rect = element.getBoundingClientRect();
        sectionRects[section.key] = {
          width: Math.round(rect.width),
          height: Math.round(rect.height),
          top: Math.round(rect.top + window.scrollY),
        };
      }

      const outOfBounds = [];
      const elements = [...document.querySelectorAll("body *")];
      for (const element of elements) {
        const style = window.getComputedStyle(element);
        if (style.position !== "fixed" && style.position !== "absolute") continue;

        const rect = element.getBoundingClientRect();
        if (rect.width < 2 || rect.height < 2) continue;

        const intersectsViewport =
          rect.bottom > -1 &&
          rect.top < window.innerHeight + 1 &&
          rect.right > -1 &&
          rect.left < window.innerWidth + 1;
        if (!intersectsViewport) continue;

        const horizontalOutside = rect.left < -1 || rect.right > window.innerWidth + 1;
        const fixedVerticalOutside =
          style.position === "fixed" && (rect.top < -1 || rect.bottom > window.innerHeight + 1);
        const outside = horizontalOutside || fixedVerticalOutside;

        if (!outside) continue;

        const text = (element.textContent || "").replace(/\s+/g, " ").trim().slice(0, 80);
        outOfBounds.push({
          tag: element.tagName.toLowerCase(),
          id: element.id || null,
          className: String(element.className || "").slice(0, 100) || null,
          text: text || null,
          rect: {
            left: Math.round(rect.left),
            top: Math.round(rect.top),
            right: Math.round(rect.right),
            bottom: Math.round(rect.bottom),
            width: Math.round(rect.width),
            height: Math.round(rect.height),
          },
        });
      }

      return {
        label: viewportLabel,
        viewportWidth,
        innerWidth: window.innerWidth,
        scrollWidth: document.documentElement.scrollWidth,
        horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth,
        sectionRects,
        outOfBoundsCount: outOfBounds.length,
        outOfBounds: outOfBounds.slice(0, 40),
      };
    },
    { sectionQueries, label, width },
  );
}

async function collectPerformance(page) {
  const navigation = await page.evaluate(() => {
    const [entry] = performance.getEntriesByType("navigation");
    if (!entry) return { domContentLoadedMs: null, loadMs: null };
    return {
      domContentLoadedMs: Math.round(entry.domContentLoadedEventEnd),
      loadMs: Math.round(entry.loadEventEnd),
    };
  });

  return navigation;
}

function getGitInfo() {
  try {
    const branch = execFileSync("git", ["branch", "--show-current"], {
      cwd: rootDir,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    const lastCommit = execFileSync("git", ["log", "-1", "--pretty=format:%h %s"], {
      cwd: rootDir,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    return { branch: branch || "unknown", lastCommit: lastCommit || "unknown" };
  } catch {
    return {
      branch: "not available (no git repository detected)",
      lastCommit: "not available (no git repository detected)",
    };
  }
}

async function writeAudit({ baseUrl, gitInfo, layouts, performance }) {
  const generated = new Date().toISOString();
  const files = [...screenshotRecords, "AUDIT.md"].sort();
  const reactWarnings = consoleWarnings.filter((warning) => /react|hydration/i.test(warning));
  const runtimeErrors = consoleErrors.filter((error) => !/react|hydration/i.test(error));
  const failedNetwork = [...networkIssues, ...requestFailures];
  const overflowSummary = [
    `Desktop: ${layouts.desktop.horizontalOverflow ? "yes" : "no"}`,
    `Tablet: ${layouts.tablet.horizontalOverflow ? "yes" : "no"}`,
    `Mobile: ${layouts.mobile.horizontalOverflow ? "yes" : "no"}`,
  ].join(", ");

  const markdown = [
    "# PersianSaze Homepage — Visual Handoff Audit",
    `Generated: ${generated}`,
    `Dev server: ${baseUrl}`,
    `Branch: ${gitInfo.branch}`,
    `Last commit: ${gitInfo.lastCommit}`,
    "",
    "## Summary",
    `- Total screenshots captured: ${screenshotRecords.length}`,
    `- Console errors: ${consoleErrors.length}`,
    `- Console warnings: ${consoleWarnings.length}`,
    `- Failed network requests: ${failedNetwork.length}`,
    `- Horizontal overflow detected: ${overflowSummary}`,
    "",
    "## Console Output",
    "### Errors",
    listOrNone(consoleErrors),
    "",
    "### Runtime Errors",
    listOrNone(runtimeErrors),
    "",
    "### Warnings",
    listOrNone(consoleWarnings),
    "",
    "### React Warnings",
    listOrNone(reactWarnings),
    "",
    "## Network Issues",
    listOrNone(failedNetwork),
    "",
    "## Layout Sanity",
    layoutMarkdown("Desktop (1440)", layouts.desktop),
    "",
    layoutMarkdown("Tablet (820)", layouts.tablet),
    "",
    layoutMarkdown("Mobile (390)", layouts.mobile),
    "",
    "## Performance (Desktop)",
    `- DOMContentLoaded: ${formatMs(performance.domContentLoadedMs)}`,
    `- Load: ${formatMs(performance.loadMs)}`,
    `- Total transferred: ${Math.round(performance.totalTransferredBytes / 1024)} KB`,
    `- Request count: ${performance.requestCount}`,
    "",
    "## Reduced Motion",
    `- Screenshot captured: ${screenshotRecords.includes("50-full-page-desktop-reduced-motion.png") ? "yes" : "no"}`,
    "- Visual state: Captured after full-page reveal scroll with reduced motion emulated.",
    "",
    "## Files",
    ...files.map((file) => `- ${file}`),
    "",
  ].join("\n");

  await fs.writeFile(path.join(handoffDir, "AUDIT.md"), markdown, "utf8");
}

function layoutMarkdown(title, layout) {
  const rects = Object.entries(layout.sectionRects)
    .map(([key, rect]) => {
      if (!rect) return `  - ${key}: section not found`;
      return `  - ${key}: ${rect.width}×${rect.height} (top ${rect.top})`;
    })
    .join("\n");

  const outOfBounds =
    layout.outOfBounds.length === 0
      ? "- Out-of-bounds fixed/absolute elements: none"
      : [
          `- Out-of-bounds fixed/absolute elements: ${layout.outOfBoundsCount} detected; first ${layout.outOfBounds.length}:`,
          ...layout.outOfBounds.map(
            (item) =>
              `  - ${item.tag}${item.id ? `#${item.id}` : ""} ${item.rect.width}×${item.rect.height} at (${item.rect.left}, ${item.rect.top})${item.text ? ` — ${item.text}` : ""}`,
          ),
        ].join("\n");

  return [
    `### ${title}`,
    `- Horizontal overflow: ${layout.horizontalOverflow ? "yes" : "no"} (${layout.scrollWidth}/${layout.innerWidth})`,
    "- Section bounding rects:",
    rects,
    outOfBounds,
  ].join("\n");
}

function listOrNone(items) {
  if (!items.length) return "- None";
  return items.map((item) => `- ${item}`).join("\n");
}

function formatMs(value) {
  return Number.isFinite(value) ? `${value} ms` : "not available";
}

function logSkip(label, selector) {
  console.log(`[skip] ${label}: ${selector} not found`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
