import { TAXONOMY_CATEGORIES } from "./taxonomy";
import type { Category, SaleType, SalesType } from "./types";

function toPrimarySaleType(salesTypes: SalesType[]): SaleType | null {
  const hasFast = salesTypes.includes("fast");
  const hasConsultative =
    salesTypes.includes("consultative") ||
    salesTypes.includes("engineering") ||
    salesTypes.includes("custom") ||
    salesTypes.includes("rental");

  if (hasFast && hasConsultative) {
    return "both";
  }

  if (hasFast) {
    return "fast";
  }

  if (hasConsultative || salesTypes.includes("barter")) {
    return "consultative";
  }

  return null;
}

export const CATEGORIES: Category[] = TAXONOMY_CATEGORIES.map(
  (category, categoryIndex) => ({
    id: categoryIndex + 1,
    faTitle: category.faName,
    intro: category.intro,
    slug: category.slug,
    excludeFromPages: false,
    subcategories: category.subcategories.map((subcategory) => ({
      id: subcategory.id,
      faTitle: subcategory.faName,
      slug: subcategory.slug,
      parentId: categoryIndex + 1,
      saleType: toPrimarySaleType(subcategory.salesTypes),
      salesTypes: subcategory.salesTypes,
      salesTypeRaw: subcategory.salesTypeRaw,
      negotiationStages: subcategory.stageTiming.negotiate,
      buyStages: subcategory.stageTiming.buy,
      executionStages: subcategory.stageTiming.execute,
      stageTiming: subcategory.stageTiming,
      description: subcategory.description,
      strategicAdvice: subcategory.builderValues,
      builderValues: subcategory.builderValues,
      trustCriteria: subcategory.trustCriteria,
    })),
  }),
);
