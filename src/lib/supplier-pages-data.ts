import parentCategories from "@/data/supplier-parent-categories.json";
import constructionStages from "@/data/supplier-construction-stages.json";
import { suppliers, stages } from "@/lib/site-data";

export type ParentCategory = (typeof parentCategories)[number];
export type ConstructionStage = (typeof constructionStages)[number];

export const dataSource =
  parentCategories?.length && constructionStages?.length ? "json" : "site-data";

export function getParentCategories(): ParentCategory[] {
  if (parentCategories?.length) return parentCategories;
  return suppliers.map((s) => ({
    slug: s.slug,
    name: s.name,
    title: s.title,
    description: s.description,
    answer: s.answer,
    examples: s.products.split("،").slice(0, 3),
    timingHint: "مرحله ساخت را مبنای پیگیری قرار دهید.",
    relatedMotionSlug: "timing-based-followup",
    stageSlugs: stages.filter((st) => s.stages.includes(st.name)).map((st) => st.slug),
  }));
}

export function getConstructionStages(): ConstructionStage[] {
  if (constructionStages?.length) return constructionStages;
  return stages.map((s) => ({
    slug: s.slug,
    name: s.name,
    title: s.title,
    description: s.description,
    definition: s.description,
    timing: "مذاکره، خرید و اجرا را مرحله‌محور تنظیم کنید.",
    faq: [],
  }));
}
