import { CATEGORIES } from "./categories";
import { STAGES } from "./stages";
import type { Category, Stage, StageId, SubCategory } from "./types";

export type SalesStyleId = "fast" | "consultative";

export interface SalesStyleCategory {
  category: Category;
  relevantSubs: SubCategory[];
}

const stageOrder = new Map(STAGES.map((stage, index) => [stage.id, index]));

export function getSalesStyleCategories(style: SalesStyleId): SalesStyleCategory[] {
  return CATEGORIES.filter((category) => !category.excludeFromPages)
    .map((category) => ({
      category,
      relevantSubs: category.subcategories.filter(
        (subcategory) =>
          subcategory.saleType === style || subcategory.saleType === "both",
      ),
    }))
    .filter((item) => item.relevantSubs.length > 0);
}

export function getSalesStyleSubcategories(style: SalesStyleId): SubCategory[] {
  return getSalesStyleCategories(style).flatMap((item) => item.relevantSubs);
}

export function getSalesStyleRelatedStages(style: SalesStyleId): Stage[] {
  const stageIds = new Set<StageId>();

  for (const subcategory of getSalesStyleSubcategories(style)) {
    for (const stageId of subcategory.buyStages) {
      if (stageId !== "pre-construction") {
        stageIds.add(stageId);
      }
    }
  }

  return STAGES.filter((stage) => stageIds.has(stage.id)).sort(
    (left, right) =>
      (stageOrder.get(left.id) ?? 999) - (stageOrder.get(right.id) ?? 999),
  );
}

export function getStageSummary(stageIds: StageId[], maxVisible = 2) {
  const labels = stageIds
    .map((stageId) => STAGES.find((stage) => stage.id === stageId)?.faLabel)
    .filter((label): label is string => Boolean(label));

  if (labels.length <= maxVisible) {
    return labels.join("، ");
  }

  return `${labels.slice(0, maxVisible).join("، ")} +${labels.length - maxVisible}`;
}

export function truncateText(text: string, limit: number) {
  const normalized = text.trim().replace(/\s+/g, " ");

  if (normalized.length <= limit) {
    return normalized;
  }

  return `${normalized.slice(0, limit - 1).trim()}…`;
}
