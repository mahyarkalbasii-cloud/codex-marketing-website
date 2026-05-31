import { CATEGORIES } from "./categories";
import { STAGES } from "./stages";
import type { SalesType, Stage, StageId, SubCategory } from "./types";

export const SALES_TYPE_LABELS: Record<SalesType, string> = {
  fast: "سریع/تراکنشی",
  consultative: "مشاوره‌ای",
  custom: "سفارشی",
  barter: "تهاتری",
  rental: "اجاره‌ای",
  engineering: "مهندسی",
};

export const stageById = new Map(STAGES.map((stage) => [stage.id, stage]));

export function getAllSubcategories() {
  return CATEGORIES.flatMap((category) =>
    category.subcategories.map((subcategory) => ({ category, subcategory })),
  );
}

export function getSubcategoryByRoute(categorySlug: string, childSlug: string) {
  const category = CATEGORIES.find((item) => item.slug === categorySlug);
  const subcategory = category?.subcategories.find(
    (item) => item.slug === childSlug,
  );

  return { category, subcategory };
}

export function formatStageIds(stageIds: StageId[]) {
  return stageIds
    .map((stageId) => stageById.get(stageId)?.faLabel)
    .filter((label): label is string => Boolean(label))
    .join("، ");
}

export function stageLinks(stageIds: StageId[]) {
  return stageIds
    .map((stageId) => stageById.get(stageId))
    .filter((stage): stage is Stage => Boolean(stage));
}

export function getSchemaTypeForSubcategory(subcategory: SubCategory) {
  return subcategory.salesTypes.some((type) =>
    ["consultative", "engineering", "rental"].includes(type),
  )
    ? "Service"
    : "Product";
}

export function shortText(text: string, limit = 155) {
  return text.length <= limit ? text : `${text.slice(0, limit - 1).trim()}…`;
}
