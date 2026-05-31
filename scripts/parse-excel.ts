import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import type {
  Category,
  SaleType,
  SalesType,
  StageId,
  SubCategory,
} from "../src/data/types";

type CellValue = string | number | boolean | null | undefined;
type RawRow = Record<string, CellValue>;

const SHEET_NAME = "PersianSaze_1405";
const EXPECTED_SUBCATEGORY_COUNT = 151;

const REQUIRED_HEADERS = [
  "ParentID",
  "ParentTitle",
  "childid",
  "ChildTitle",
  "نوع فروش",
  "مرحله مناسب مذاکره",
  "مرحله مناسب خرید",
  "مرحله مناسب اجرا",
  "عوامل کلیدی خرید برای سازنده و توصیه‌های استراتژیک",
] as const;

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const DEFAULT_INPUTS = [
  path.join(repoRoot, "data", "taxonomy", "categories_1405.xlsx"),
  path.join(repoRoot, "data", "taxonomy", "categories 1405.xlsx"),
  "C:\\Users\\mahya\\Desktop\\Files\\New Desktop\\Persiansaze\\405\\Docs\\categories 1405.xlsx",
];

const OUTPUT_PATH = path.join(repoRoot, "src", "data", "categories.ts");

const PARENT_SLUGS: Record<number, string> = {
  1: "engineering-and-consulting",
  2: "it-and-software",
  3: "business-services-and-consulting",
  4: "general-services-and-support",
  5: "contracting-and-execution",
  6: "building-materials",
  7: "steel-and-metals",
  8: "machinery-tools-and-equipment",
  9: "mechanical-installations",
  10: "electrical-installations",
  11: "doors-windows-and-facade",
  12: "interior-and-exterior-finishes",
  13: "interior-architecture-and-decoration",
  14: "landscaping-and-green-space",
  15: "lobby-and-common-area-equipment",
  16: "real-estate",
  17: "other",
};

const EXCLUDED_PARENT_IDS = new Set([16, 17]);

const STAGE_TOKEN_MAP: Record<string, StageId[]> = {
  "": ["pre-construction"],
  "-": ["pre-construction"],
  "بر اساس نیاز": ["pre-construction"],
  "بر اساس نوع سازه": ["pre-construction"],
  "بر اساس محصول": ["pre-construction"],
  "تجهیز کارگاه": ["pre-construction"],
  "در صورت بروز خطای کارگاهی": ["pre-construction"],
  "در طول پروژه": ["pre-construction"],
  "در طول کل پروژه": ["pre-construction"],
  "در طول کل پروژه تا پایانکار": ["pre-construction", "completion"],
  "جواز": ["pre-construction"],
  "حین بازسازی": ["pre-construction"],
  "زمان اخذ دستور نقشه": ["pre-construction"],
  "زمان تنظیم قرارداد مشارکت": ["pre-construction"],
  "زمان طراحی فاز 2": ["pre-construction"],
  "زمان صدور پروانه ساختمان": ["pre-construction"],
  "قبل از جواز": ["pre-construction"],
  "قبل از خرید زمین": ["pre-construction"],
  "قبل از رویداد": ["pre-construction"],
  "قبل از شروع": ["pre-construction"],
  "قبل از شروع اجرا": ["pre-construction"],
  "قبل از شروع پروژه": ["pre-construction"],
  "کل دوره بازسازی": ["pre-construction"],
  "فاز صفر": ["pre-construction"],

  "تخریب": ["demolition"],
  "تخریب و گودبرداری": ["demolition"],
  "فونداسیون": ["foundation"],
  "اسکلت": ["structure"],
  "اسکلت بتنی": ["structure"],
  "اسکلتبندی": ["structure"],
  "حین اجرای اسکلت": ["structure"],
  "دیوارچینی": ["wall-building"],
  "سفتکاری": ["wall-building"],
  "گچ و خاک": ["plaster"],
  "ابتدای نازککاری": ["early-finishing"],
  "ناککاری": ["finishing"],
  "نازککاری": ["finishing"],
  "بعد از پایان کار": ["completion"],
  "پایان کار": ["completion"],
  "پایانکار": ["completion"],
  "ظریفاتکاری": ["completion"],
  "ظریفککاری": ["completion"],
  "ظریفکاری": ["completion"],
};

const SALE_TYPE_MAP: Record<string, SaleType | null> = {
  "": null,
  "-": null,
  "سریع (نوع 1)": "fast",
  "مشاورهای (نوع 2)": "consultative",
  "هر دو": "both",
};

function normalizeLookupKey(value: CellValue): string {
  if (value === null || value === undefined) {
    return "";
  }

  return String(value)
    .normalize("NFC")
    .replace(/ي/g, "ی")
    .replace(/ك/g, "ک")
    .replace(/[۰-۹]/g, (digit) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)))
    .replace(/\u200c/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeText(value: CellValue): string {
  if (value === null || value === undefined) {
    return "";
  }

  return String(value).normalize("NFC").replace(/\s+/g, " ").trim();
}

function uniqueStageIds(stageIds: StageId[]): StageId[] {
  return Array.from(new Set(stageIds));
}

function normalizeStageList(value: CellValue, context: string): StageId[] {
  const key = normalizeLookupKey(value);

  if (Object.prototype.hasOwnProperty.call(STAGE_TOKEN_MAP, key)) {
    return uniqueStageIds(STAGE_TOKEN_MAP[key]);
  }

  const tokens = key.split("/").map((token) => token.trim()).filter(Boolean);
  if (tokens.length === 0) {
    return ["pre-construction"];
  }

  return uniqueStageIds(
    tokens.flatMap((token) => {
      const stageIds = STAGE_TOKEN_MAP[token];

      if (!stageIds) {
        throw new Error(
          `Unmapped stage token "${token}" in ${context}. Raw value: "${String(
            value ?? "",
          )}"`,
        );
      }

      return stageIds;
    }),
  );
}

function normalizeSaleType(value: CellValue, context: string): SaleType | null {
  const key = normalizeLookupKey(value);

  if (!Object.prototype.hasOwnProperty.call(SALE_TYPE_MAP, key)) {
    throw new Error(
      `Unmapped sale type "${String(value ?? "")}" in ${context}. Normalized: "${key}"`,
    );
  }

  return SALE_TYPE_MAP[key];
}

function readInteger(value: CellValue, context: string): number {
  const numberValue = typeof value === "number" ? value : Number(String(value ?? ""));

  if (!Number.isInteger(numberValue)) {
    throw new Error(`Invalid integer in ${context}: "${String(value ?? "")}"`);
  }

  return numberValue;
}

function validateHeaders(row: RawRow) {
  const missingHeaders = REQUIRED_HEADERS.filter(
    (header) => !Object.prototype.hasOwnProperty.call(row, header),
  );

  if (missingHeaders.length > 0) {
    throw new Error(`Missing required Excel headers: ${missingHeaders.join(", ")}`);
  }
}

async function tryReadRowsWithXlsx(inputPath: string): Promise<RawRow[] | null> {
  try {
    const xlsx = await import("xlsx");
    const workbook = xlsx.readFile(inputPath, { cellDates: false, raw: true });
    const sheet = workbook.Sheets[SHEET_NAME];

    if (!sheet) {
      throw new Error(`Sheet "${SHEET_NAME}" not found. Found: ${workbook.SheetNames.join(", ")}`);
    }

    return xlsx.utils.sheet_to_json<RawRow>(sheet, { defval: null, raw: true });
  } catch (error) {
    const code = (error as { code?: string }).code;

    if (code === "ERR_MODULE_NOT_FOUND" || code === "MODULE_NOT_FOUND") {
      return null;
    }

    throw error;
  }
}

function pythonCandidates(): string[] {
  const candidates = [
    process.env.PYTHON,
    process.env.USERPROFILE
      ? path.join(
          process.env.USERPROFILE,
          ".cache",
          "codex-runtimes",
          "codex-primary-runtime",
          "dependencies",
          "python",
          "python.exe",
        )
      : undefined,
    "python",
    "python3",
  ];

  return candidates.filter((candidate): candidate is string => Boolean(candidate));
}

function readRowsWithPython(inputPath: string): RawRow[] {
  const script = String.raw`
import json
import sys

import openpyxl

input_path = sys.argv[1]
sheet_name = sys.argv[2]
workbook = openpyxl.load_workbook(input_path, data_only=True, read_only=True)

if sheet_name not in workbook.sheetnames:
    raise SystemExit(f'Sheet "{sheet_name}" not found. Found: {", ".join(workbook.sheetnames)}')

worksheet = workbook[sheet_name]
rows = worksheet.iter_rows(values_only=True)
headers = [str(value) if value is not None else "" for value in next(rows)]
records = []

for values in rows:
    if not any(value is not None for value in values):
        continue

    record = {}
    for index, header in enumerate(headers):
        record[header] = values[index] if index < len(values) else None
    records.append(record)

print(json.dumps(records, ensure_ascii=False))
`;

  const errors: string[] = [];

  for (const python of pythonCandidates()) {
    const result = spawnSync(python, ["-c", script, inputPath, SHEET_NAME], {
      encoding: "utf8",
      env: { ...process.env, PYTHONIOENCODING: "utf-8" },
      maxBuffer: 1024 * 1024 * 20,
    });

    if (result.status === 0) {
      return JSON.parse(result.stdout) as RawRow[];
    }

    errors.push(`${python}: ${result.stderr || result.error?.message || "failed"}`);
  }

  throw new Error(
    [
      "Could not read Excel file. Install the dev dependency `xlsx`, or set PYTHON to a Python executable with openpyxl installed.",
      ...errors,
    ].join("\n"),
  );
}

async function readRows(inputPath: string): Promise<RawRow[]> {
  const rows = await tryReadRowsWithXlsx(inputPath);

  return rows ?? readRowsWithPython(inputPath);
}

function buildCategories(rows: RawRow[]): Category[] {
  if (rows.length !== EXPECTED_SUBCATEGORY_COUNT) {
    throw new Error(
      `Expected ${EXPECTED_SUBCATEGORY_COUNT} subcategory rows, received ${rows.length}`,
    );
  }

  if (rows[0]) {
    validateHeaders(rows[0]);
  }

  const categoriesById = new Map<number, Category>();
  const childIds = new Set<number>();

  rows.forEach((row, index) => {
    const rowNumber = index + 2;
    const parentId = readInteger(row.ParentID, `row ${rowNumber} ParentID`);
    const childId = readInteger(row.childid, `row ${rowNumber} childid`);
    const parentSlug = PARENT_SLUGS[parentId];

    if (!parentSlug) {
      throw new Error(`Missing manual parent slug for ParentID ${parentId}`);
    }

    if (childIds.has(childId)) {
      throw new Error(`Duplicate childid ${childId} at row ${rowNumber}`);
    }
    childIds.add(childId);

    const parentTitle = normalizeText(row.ParentTitle);
    const category =
      categoriesById.get(parentId) ??
      ({
        id: parentId,
        faTitle: parentTitle,
        slug: parentSlug,
        intro: `دسته ${parentTitle} از فایل اکسل قدیمی تولید شده است.`,
        excludeFromPages: EXCLUDED_PARENT_IDS.has(parentId),
        subcategories: [],
      } satisfies Category);

    if (category.faTitle !== parentTitle) {
      throw new Error(
        `ParentID ${parentId} has conflicting titles: "${category.faTitle}" / "${parentTitle}"`,
      );
    }

    const saleType = normalizeSaleType(row["نوع فروش"], `row ${rowNumber}`);
    const negotiationStages = normalizeStageList(
      row["مرحله مناسب مذاکره"],
      `row ${rowNumber} negotiation stage`,
    );
    const buyStages = normalizeStageList(
      row["مرحله مناسب خرید"],
      `row ${rowNumber} buy stage`,
    );
    const executionStages = normalizeStageList(
      row["مرحله مناسب اجرا"],
      `row ${rowNumber} execution stage`,
    );
    const strategicAdvice = normalizeText(
      row["عوامل کلیدی خرید برای سازنده و توصیه‌های استراتژیک"],
    );
    const salesTypes: SalesType[] =
      saleType === "both" ? ["fast", "consultative"] : saleType ? [saleType] : [];

    const subcategory: SubCategory = {
      id: String(childId),
      faTitle: normalizeText(row.ChildTitle),
      slug: `c-${childId}`,
      parentId,
      saleType,
      salesTypes,
      salesTypeRaw: normalizeText(row["نوع فروش"]),
      negotiationStages,
      buyStages,
      executionStages,
      stageTiming: {
        negotiate: negotiationStages,
        buy: buyStages,
        execute: executionStages,
      },
      description: strategicAdvice,
      strategicAdvice,
      builderValues: strategicAdvice,
      trustCriteria: strategicAdvice,
    };

    category.subcategories.push(subcategory);
    categoriesById.set(parentId, category);
  });

  const categories = Array.from(categoriesById.values()).sort((a, b) => a.id - b.id);

  if (categories.length !== 17) {
    throw new Error(`Expected 17 parent categories, received ${categories.length}`);
  }

  return categories;
}

async function writeCategories(categories: Category[]) {
  const content = [
    'import type { Category } from "./types";',
    "",
    `export const CATEGORIES: Category[] = ${JSON.stringify(categories, null, 2)};`,
    "",
  ].join("\n");

  await fs.writeFile(OUTPUT_PATH, content, "utf8");
}

function resolveInputPath(): string {
  const argPath = process.argv[2];

  if (argPath) {
    return path.resolve(process.cwd(), argPath);
  }

  const defaultInput = DEFAULT_INPUTS.find((candidate) => existsSync(candidate));

  if (!defaultInput) {
    throw new Error(
      [
        "No Excel input path provided.",
        "Usage: npm run generate:categories -- <path-to-categories-1405.xlsx>",
      ].join("\n"),
    );
  }

  return defaultInput;
}

async function main() {
  const inputPath = resolveInputPath();
  const rows = await readRows(inputPath);
  const categories = buildCategories(rows);
  const subcategoryCount = categories.reduce(
    (sum, category) => sum + category.subcategories.length,
    0,
  );

  await writeCategories(categories);

  console.log(
    `Generated ${path.relative(repoRoot, OUTPUT_PATH)} from ${inputPath} (${categories.length} parents, ${subcategoryCount} subcategories).`,
  );
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
