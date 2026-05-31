import { CATEGORIES } from "@/data/categories";
import { STAGES } from "@/data/stages";

export const dataSource = "taxonomy" as const;

export type SaleType = "fast-sales" | "consultative-sales" | "hybrid-sales";

export function getParentCategoryStaticSlugs() {
  return CATEGORIES.map((category) => category.slug);
}

export function getParentCategories() {
  return CATEGORIES.map((category) => ({
    slug: category.slug,
    name: category.faTitle,
    title: category.faTitle,
    saleType: "consultative-sales" as SaleType,
    description: category.intro,
    answer: category.intro,
    timingHint: "زمان‌بندی از دیتاست taxonomy استخراج می‌شود.",
    examples: category.subcategories.slice(0, 4).map((item) => item.faTitle),
    stageSlugs: Array.from(
      new Set(category.subcategories.flatMap((item) => item.buyStages)),
    ).map(String),
  }));
}

export function getParentCategoryBySlug(slug: string) {
  return getParentCategories().find((category) => category.slug === slug);
}

export function getConstructionStages() {
  return STAGES.map((stage) => ({
    slug: stage.slug,
    name: stage.faLabel,
    title: stage.faLabel,
    description: `مرحله ${stage.faLabel} در دیتاست جدید پرشین‌سازه.`,
    definition: `این مرحله از روی taxonomy و ردیف‌های مذاکره، خرید و اجرا ساخته می‌شود.`,
    timing: {
      negotiation: "بر اساس زیرگروه‌های دارای نقش مذاکره.",
      purchase: "بر اساس زیرگروه‌های دارای نقش خرید.",
      execution: "بر اساس زیرگروه‌های دارای نقش اجرا.",
    },
  }));
}

export function getConstructionStageBySlug(slug: string) {
  return getConstructionStages().find((stage) => stage.slug === slug);
}

export function getCategoriesBySaleType(saleType: SaleType) {
  const style =
    saleType === "fast-sales"
      ? "fast"
      : saleType === "consultative-sales"
        ? "consultative"
        : "barter";

  return getParentCategories().filter((category) => {
    const source = CATEGORIES.find((item) => item.slug === category.slug);

    return source?.subcategories.some((subcategory) =>
      subcategory.salesTypes.includes(style),
    );
  });
}

export function getCategoriesByStageSlug(stageSlug: string) {
  return getParentCategories().filter((category) =>
    category.stageSlugs.includes(stageSlug),
  );
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
      "مسیر قدیمی فروش ترکیبی اکنون در هاب نوع فروش و برچسب‌های taxonomy پوشش داده می‌شود.",
  },
};
