import { STAGES } from "./stages";
import {
  STAGE_ROLE_LABELS,
  getActiveSubcategoriesForStage,
  getDominantSaleStyleForStage,
  type ActiveStageSubcategory,
  type DominantSaleStyle,
} from "./stage-insights";
import type { Stage, StageId, SubCategory } from "./types";

type StageActionCopy = {
  title: string;
  body: string;
};

export interface StageCopy {
  heroTitle: string;
  heroSubtitle: string;
  shortAnswer: string;
  definition: string;
  timing: {
    negotiation: string;
    purchase: string;
    execution: string;
  };
  threeActions: {
    immediate: StageActionCopy;
    negotiation: StageActionCopy;
    monitoring: StageActionCopy;
  };
  dominantSaleStyleParagraph: {
    fast: string;
    consultative: string;
    mixed: string;
  };
  faqItems: { q: string; a: string }[];
  ctaTitle: string;
  ctaDescription: string;
  marketStat?: string;
}

export interface StageMarketStatSlot {
  marketStat?: string;
}

// TODO: Fill these slots only with verified PersianSaze database facts.
export const STAGE_MARKET_STATS = Object.fromEntries(
  STAGES.map((stage) => [stage.id, {}]),
) as Record<StageId, StageMarketStatSlot>;

const stageById = new Map(STAGES.map((stage) => [stage.id, stage]));

function uniqueItems<T>(items: T[]): T[] {
  return Array.from(new Set(items));
}

function formatList(items: string[], fallback: string) {
  const cleanItems = uniqueItems(items.filter(Boolean));

  if (cleanItems.length === 0) {
    return fallback;
  }

  return cleanItems.join("، ");
}

function namesFromItems(items: ActiveStageSubcategory[], limit = 5) {
  return uniqueItems(items.map((item) => item.subcategory.faTitle)).slice(0, limit);
}

function parentNamesFromItems(items: ActiveStageSubcategory[], limit = 4) {
  return uniqueItems(items.map((item) => item.parent.faTitle)).slice(0, limit);
}

function itemsByRole(items: ActiveStageSubcategory[], role: keyof typeof STAGE_ROLE_LABELS) {
  return items.filter((item) => item.roles.includes(role));
}

function itemsBySaleType(items: ActiveStageSubcategory[], saleType: DominantSaleStyle) {
  if (saleType === "mixed") {
    return items;
  }

  return items.filter(
    (item) =>
      item.subcategory.saleType === saleType ||
      item.subcategory.saleType === "both" ||
      (saleType === "consultative" &&
        item.subcategory.salesTypes.some((type) =>
          ["engineering", "custom", "rental", "barter"].includes(type),
        )),
  );
}

function getDecisionItems(items: ActiveStageSubcategory[]) {
  const decisionItems = items.filter(
    (item) => item.roles.includes("buy") || item.roles.includes("negotiation"),
  );

  return decisionItems.length > 0 ? decisionItems : items;
}

function getRoleSentence(
  roleLabel: string,
  items: ActiveStageSubcategory[],
  fallback: string,
) {
  const names = namesFromItems(items, 5);

  if (names.length === 0) {
    return fallback;
  }

  return `برای ${formatList(names, "")}، نقش این مرحله بیشتر در ${roleLabel} دیده می‌شود.`;
}

function getTopStrategicAdvice(items: ActiveStageSubcategory[]): SubCategory | undefined {
  return [...items]
    .map((item) => item.subcategory)
    .filter((subcategory) => subcategory.strategicAdvice.trim().length > 0)
    .sort(
      (left, right) =>
        right.strategicAdvice.length - left.strategicAdvice.length ||
        left.id.localeCompare(right.id, "en", { numeric: true }),
    )[0];
}

function getStyleLabel(style: DominantSaleStyle) {
  if (style === "fast") {
    return "فروش سریع";
  }

  if (style === "consultative") {
    return "فروش مشاوره‌ای";
  }

  return "فروش ترکیبی";
}

export function getStagePageContent(
  stage: Stage,
  activeItems = getActiveSubcategoriesForStage(stage.id),
  dominant = getDominantSaleStyleForStage(activeItems),
): StageCopy {
  const decisionItems = getDecisionItems(activeItems);
  const buyItems = itemsByRole(activeItems, "buy");
  const negotiationItems = itemsByRole(activeItems, "negotiation");
  const executionItems = itemsByRole(activeItems, "execution");
  const fastItems = itemsBySaleType(activeItems, "fast");
  const consultativeItems = itemsBySaleType(activeItems, "consultative");
  const activeNames = namesFromItems(activeItems, 6);
  const decisionNames = namesFromItems(decisionItems, 6);
  const buyNames = namesFromItems(buyItems, 5);
  const negotiationNames = namesFromItems(negotiationItems, 5);
  const executionNames = namesFromItems(executionItems, 5);
  const parentNames = parentNamesFromItems(activeItems);
  const fastNames = namesFromItems(fastItems, 4);
  const consultativeNames = namesFromItems(consultativeItems, 4);
  const adviceExample = getTopStrategicAdvice(activeItems);
  const marketStat = STAGE_MARKET_STATS[stage.id]?.marketStat;
  const styleLabel = getStyleLabel(dominant.style);

  const activeFieldsText = formatList(activeNames, "زیرگروه‌های فعال همین مرحله");
  const decisionFieldsText = formatList(decisionNames, activeFieldsText);
  const parentText = formatList(parentNames, "دسته‌های مرتبط");
  const buyText = formatList(buyNames, "زیرگروه‌های نزدیک به خرید");
  const negotiationText = formatList(
    negotiationNames,
    "زیرگروه‌های نیازمند مذاکره",
  );
  const executionText = formatList(executionNames, "زیرگروه‌های اجرایی");
  const fastText = formatList(fastNames, "زیرگروه‌های سریع");
  const consultativeText = formatList(
    consultativeNames,
    "زیرگروه‌های مشاوره‌ای",
  );

  return {
    heroTitle: `فرصت‌های فروش در مرحله ${stage.faLabel}`,
    heroSubtitle: `در مرحله ${stage.faLabel}، داده واقعی زیرگروه‌ها نشان می‌دهد ${decisionFieldsText} وارد خرید، مذاکره یا پیگیری جدی می‌شوند. این صفحه از ردیف‌های فعال در ${parentText} ساخته شده است، نه از توضیح عمومی درباره چرخه ساخت.`,
    shortAnswer: `در ${stage.faLabel}، زیرگروه‌هایی مثل ${decisionFieldsText} باید از زاویه نقش واقعی‌شان در پروژه بررسی شوند. وزن فروش این مرحله ${styleLabel} است؛ سمت سریع با ${fastText} و سمت مشاوره‌ای با ${consultativeText} خوانده می‌شود. برای فروش، تفاوت بین خرید، مذاکره و اجرا در همین مرحله مهم‌تر از خود نام مرحله است.`,
    definition: `این صفحه مرحله ${stage.faLabel} را از زاویه زیرگروه‌های فعال می‌خواند: ${buyText} در خرید، ${negotiationText} در مذاکره و ${executionText} در اجرا. بنابراین یک فروشنده باید اول بداند محصول یا خدمتش در کدام نقش ظاهر می‌شود و بعد زمان پیگیری را تنظیم کند.`,
    timing: {
      negotiation: getRoleSentence(
        "مذاکره",
        negotiationItems,
        `در ${stage.faLabel} مذاکره برای همه زیرگروه‌ها فعال نیست، اما رصد پروژه برای تشخیص زمان ورود بعدی لازم است.`,
      ),
      purchase: getRoleSentence(
        "خرید",
        buyItems,
        `در ${stage.faLabel} خرید مستقیم برای همه زیرگروه‌ها دیده نمی‌شود؛ نقش هر محصول باید جداگانه بررسی شود.`,
      ),
      execution: getRoleSentence(
        "اجرا",
        executionItems,
        `در ${stage.faLabel} اجرای مستقیم برای همه زیرگروه‌ها فعال نیست، اما وضعیت پروژه به تصمیم‌های بعدی جهت می‌دهد.`,
      ),
    },
    threeActions: {
      immediate: {
        title: "اقدام فوری",
        body: `اگر محصول شما در این مرحله در خرید دیده می‌شود، مثل ${buyText}، پاسخ سریع، قیمت‌دهی روشن و ثبت نتیجه تماس در CRM باید بدون فاصله انجام شود.`,
      },
      negotiation: {
        title: "مذاکره",
        body: `برای مسیرهای مشاوره‌ای مثل ${consultativeText}، تماس باید با زمینه مرحله ${stage.faLabel} شروع شود و به نمونه‌کار، توضیح فنی یا جلسه بعدی وصل بماند.`,
      },
      monitoring: {
        title: "رصد",
        body: `اگر زیرگروه شما هنوز در خرید نیست اما در اجرا یا مذاکره دیده می‌شود، مثل ${executionText}، پروژه را ذخیره کنید و پیگیری بعدی را با نقش واقعی همان زیرگروه بسازید.`,
      },
    },
    dominantSaleStyleParagraph: {
      fast: `در داده این مرحله، فروش سریع با زیرگروه‌هایی مثل ${fastText} معنا پیدا می‌کند؛ یعنی زمان پاسخ، موجودی، قیمت و پیگیری کوتاه‌چرخه نقش پررنگ‌تری دارند.`,
      consultative: `در داده این مرحله، فروش مشاوره‌ای با زیرگروه‌هایی مثل ${consultativeText} پررنگ‌تر است؛ یعنی تیم فروش باید زودتر وارد گفت‌وگوی فنی، اعتمادسازی و پیگیری مرحله‌ای شود.`,
      mixed: `در ${stage.faLabel} هر دو مسیر دیده می‌شود: سمت سریع با ${fastText} و سمت مشاوره‌ای با ${consultativeText}. به همین دلیل تیم فروش باید هر زیرگروه را جدا از نام کلی مرحله بخواند.`,
    },
    faqItems: [
      {
        q: `در مرحله ${stage.faLabel} کدام زیرگروه‌ها وارد خرید یا مذاکره می‌شوند؟`,
        a: `در داده این مرحله، ${decisionFieldsText} در نقش خرید یا مذاکره دیده می‌شوند. این‌ها باید در اولویت بررسی تیم فروش قرار بگیرند.`,
      },
      {
        q: `در ${stage.faLabel} فروش سریع پررنگ‌تر است یا فروش مشاوره‌ای؟`,
        a: `ترکیب saleType این مرحله به ${styleLabel} نزدیک است. نمونه‌های سریع شامل ${fastText} و نمونه‌های مشاوره‌ای شامل ${consultativeText} هستند.`,
      },
      {
        q: `برای دسته‌هایی مثل ${parentText} در این مرحله چه کاری باید انجام داد؟`,
        a: `باید نقش هر زیرگروه مشخص شود: خرید برای ${buyText}، مذاکره برای ${negotiationText} و اجرا برای ${executionText}. سپس پیگیری در CRM بر اساس همان نقش تنظیم می‌شود.`,
      },
      {
        q: `کدام توصیه واقعی داده در صفحه ${stage.faLabel} مهم است؟`,
        a: adviceExample
          ? `${adviceExample.faTitle}: ${adviceExample.strategicAdvice}`
          : `برای این مرحله، saleType و نقش‌های خرید، مذاکره و اجرا مبنای تصمیم فروش هستند.`,
      },
    ],
    ctaTitle: `مرحله ${stage.faLabel} را به مسیر فروش قابل پیگیری تبدیل کنید`,
    ctaDescription: `در دمو، همین زیرگروه‌ها و نقش‌های خرید، مذاکره و اجرا را روی پروژه‌های واقعی‌تر بررسی می‌کنیم تا تیم فروش بداند چه چیزی را پیگیری کند.`,
    marketStat,
  };
}

export function getStagePageContentById(stageId: StageId) {
  const stage = stageById.get(stageId);

  if (!stage) {
    return undefined;
  }

  return getStagePageContent(stage);
}

export function getStageMetaDescription(stageId: StageId) {
  const answer = getStagePageContentById(stageId)?.shortAnswer ?? "";

  return answer.length <= 155 ? answer : `${answer.slice(0, 154).trim()}…`;
}
