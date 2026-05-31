import { CATEGORIES } from "./categories";
import { STAGES } from "./stages";
import type { Category, Stage } from "./types";

export const FOOTER_CATEGORY_ORDER = [
  "building-materials",
  "steel-and-metals",
  "blocks-walls-and-roof-systems",
  "construction-chemicals-adhesives-sealants",
  "thermal-moisture-sound-insulation",
  "mechanical-piping",
  "hvac-heating-cooling",
  "electrical-lighting",
  "smart-building-and-safety-systems",
  "doors-windows-and-facade",
  "flooring-tiles-and-ceramics",
  "interior-and-exterior-finishes",
  "sanitary-fixtures-and-faucets",
  "kitchen-and-millwork",
  "vertical-transportation",
  "workshop-tools",
  "heavy-machinery-transport-concrete",
  "hse-safety-equipment",
  "engineering-and-consulting",
  "contracting-and-execution",
] as const;

export const SALE_STYLE_NAV_LINKS = [
  {
    title: "فروش سریع و تراکنشی",
    href: "/sales-style/fast/",
  },
  {
    title: "فروش مشاوره‌ای",
    href: "/sales-style/consultative/",
  },
  {
    title: "تهاتر مصالح و خدمات",
    href: "/sales-style/barter/",
  },
  {
    title: "فروش ترکیبی",
    href: "/sales-style/hybrid/",
  },
] as const;

export const CITY_NAV_LINKS = [
  {
    title: "پروژه‌های تهران",
    href: "/cities/tehran/",
  },
  {
    title: "پروژه‌های کرج",
    href: "/cities/karaj/",
  },
  {
    title: "پروژه‌های لواسان",
    href: "/cities/lavasan/",
  },
  {
    title: "همه شهرها ←",
    href: "/cities/",
  },
] as const;

export const FOOTER_MAIN_LINKS = [
  {
    title: "ویژگی‌ها",
    href: "/features/",
  },
  {
    title: "اشتراک‌ها",
    href: "/subscriptions/",
  },
  {
    title: "درباره ما",
    href: "/about/",
  },
  {
    title: "تماس با ما",
    href: "/contact/",
  },
  {
    title: "سوالات متداول",
    href: "/faq/",
  },
  {
    title: "آموزش",
    href: "/#how-it-works",
  },
  {
    title: "درخواست دمو",
    href: "/#demo",
  },
] as const;

const footerCategoryOrderIndex = new Map<string, number>(
  FOOTER_CATEGORY_ORDER.map((slug, index) => [slug, index]),
);

export function getOrderedVisibleCategories(
  categories: Category[] = CATEGORIES,
): Category[] {
  return categories
    .filter((category) => !category.excludeFromPages)
    .sort((left, right) => {
      const leftIndex = footerCategoryOrderIndex.get(left.slug) ?? 999;
      const rightIndex = footerCategoryOrderIndex.get(right.slug) ?? 999;

      if (leftIndex !== rightIndex) {
        return leftIndex - rightIndex;
      }

      return left.id - right.id;
    });
}

export function getVisibleSubcategoryCount(
  categories: Category[] = CATEGORIES,
): number {
  return categories
    .filter((category) => !category.excludeFromPages)
    .reduce((sum, category) => sum + category.subcategories.length, 0);
}

export function getMainStages(stages: Stage[] = STAGES): Stage[] {
  return stages.filter((stage) => stage.isMain);
}
