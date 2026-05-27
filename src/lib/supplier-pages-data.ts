import parentCategoriesData from "@/data/supplier-parent-categories.json";
import constructionStagesData from "@/data/supplier-construction-stages.json";

export const dataSource = "json" as const;

export type SaleType = "fast-sales" | "consultative-sales" | "hybrid-sales";

export type ParentCategory = {
  slug: string;
  name: string;
  title: string;
  saleType: SaleType;
  description: string;
  answer: string;
  timingHint: string;
  examples: string[];
  stageSlugs: string[];
};

export type ConstructionStage = {
  slug: string;
  name: string;
  title: string;
  description: string;
  definition: string;
  timing: {
    negotiation: string;
    purchase: string;
    execution: string;
  };
};

const parentCategories = parentCategoriesData as ParentCategory[];
const constructionStages = constructionStagesData as ConstructionStage[];

const parentCategorySlugAliases: Record<string, string> = {
  "cement-and-basic-materials": "building-materials",
  elevator: "elevators-escalators",
  facade: "doors-windows-facade",
  "doors-windows": "doors-windows-facade",
  "mechanical-electrical": "mechanical-installations",
  "interior-finishing": "interior-decoration",
};

export function getParentCategoryStaticSlugs() {
  return Array.from(
    new Set([
      ...parentCategories.map((category) => category.slug),
      ...Object.keys(parentCategorySlugAliases),
    ]),
  );
}

export function getParentCategories() {
  return parentCategories;
}

export function getParentCategoryBySlug(slug: string) {
  const normalizedSlug = parentCategorySlugAliases[slug] ?? slug;

  return parentCategories.find((category) => category.slug === normalizedSlug);
}

export function getConstructionStages() {
  return constructionStages;
}

export function getConstructionStageBySlug(slug: string) {
  return constructionStages.find((stage) => stage.slug === slug);
}

export function getCategoriesBySaleType(saleType: SaleType) {
  return parentCategories.filter((category) => category.saleType === saleType);
}

export function getCategoriesByStageSlug(stageSlug: string) {
  return parentCategories.filter((category) => category.stageSlugs.includes(stageSlug));
}

export const salesMotions: Record<
  SaleType,
  { name: string; title: string; description: string }
> = {
  "fast-sales": {
    name: "فروش سریع",
    title: "فروش سریع و تراکنشی برای تأمین‌کنندگان ساختمانی",
    description:
      "برای محصولاتی که فاصله نیاز تا خرید کوتاه است و سرعت شناسایی پروژه، قیمت‌گذاری و پیگیری اهمیت مستقیم دارد.",
  },
  "consultative-sales": {
    name: "فروش مشاوره‌ای",
    title: "فروش مشاوره‌ای و تصمیم‌ساز برای تأمین‌کنندگان ساختمانی",
    description:
      "برای محصولاتی که تصمیم خریدشان پیش از زمان اجرا شکل می‌گیرد و نیازمند ورود زودتر، مذاکره و اعتمادسازی‌اند.",
  },
  "hybrid-sales": {
    name: "فروش ترکیبی",
    title: "فروش ترکیبی برای تأمین‌کنندگان ساختمانی",
    description:
      "برای تیم‌هایی که هم فرصت‌های سریع و هم پیگیری‌های بلندمدت پروژه‌ای را در یک مسیر فروش مدیریت می‌کنند.",
  },
};
