import { CATEGORIES } from "./categories";
import { STAGES } from "./stages";
import type { Category, Stage, StageId, SubCategory } from "./types";

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((category) => category.slug === slug);
}

export function getSubcategoryBySlug(slug: string): SubCategory | undefined {
  for (const category of CATEGORIES) {
    const subcategory = category.subcategories.find((item) => item.slug === slug);

    if (subcategory) {
      return subcategory;
    }
  }

  return undefined;
}

export function getCategoriesByStage(stageId: StageId): Category[] {
  return CATEGORIES.filter((category) =>
    category.subcategories.some((subcategory) =>
      [
        ...subcategory.negotiationStages,
        ...subcategory.buyStages,
        ...subcategory.executionStages,
      ].includes(stageId),
    ),
  );
}

export function getSubcategoriesBySaleType(
  type: "fast" | "consultative",
): SubCategory[] {
  return CATEGORIES.flatMap((category) => category.subcategories).filter(
    (subcategory) =>
      subcategory.saleType === type || subcategory.saleType === "both",
  );
}

export function getStageBySlug(slug: string): Stage | undefined {
  return STAGES.find((stage) => stage.slug === slug);
}

export function getStagesForSubcategory(
  subcategory: SubCategory,
  kind: "negotiation" | "buy" | "execution",
): Stage[] {
  const stageIds =
    kind === "negotiation"
      ? subcategory.negotiationStages
      : kind === "buy"
        ? subcategory.buyStages
        : subcategory.executionStages;

  return stageIds
    .map((stageId) => STAGES.find((stage) => stage.id === stageId))
    .filter((stage): stage is Stage => Boolean(stage));
}
