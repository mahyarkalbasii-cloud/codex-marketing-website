import { CATEGORIES } from "./categories";
import type { Category } from "./types";

export interface CategoryCopy {
  heroSubtitle: string;
  shortAnswer: string;
  timingInsight?: string;
  faqItems: { q: string; a: string }[];
}

function makeCopy(category: Category): CategoryCopy {
  const name = category.faTitle;

  return {
    heroSubtitle: `پرشین‌سازه به فروشندگان ${name} کمک می‌کند پروژه‌های فعال را بر اساس مرحله ساخت، نیاز خرید و مسیر پیگیری دقیق‌تر پیدا و اولویت‌بندی کنند.`,
    shortAnswer: `پرشین‌سازه زمانی برای فروشندگان ${name} ارزشمند است که تصمیم خرید سازنده به مرحله ساخت، زمان ورود فروشنده و پیگیری منظم وابسته باشد. این صفحه نشان می‌دهد کدام زیرگروه‌ها فروش سریع‌تری دارند، کدام‌ها نیازمند مذاکره مشاوره‌ای‌اند و تیم فروش باید روی چه مرحله‌هایی تمرکز کند.`,
    faqItems: [
      {
        q: `پرشین‌سازه برای فروشندگان ${name} چه نوع پروژه‌هایی را برجسته می‌کند؟`,
        a: `پروژه‌هایی که از نظر مرحله ساخت، موقعیت و احتمال نیاز به ${name} با بازار هدف فروشنده هم‌خوانی بیشتری دارند، در اولویت بررسی و پیگیری قرار می‌گیرند.`,
      },
      {
        q: `بهترین زمان ورود فروشندگان ${name} به پروژه چه زمانی است؟`,
        a: `زمان دقیق به زیرگروه محصول یا خدمت بستگی دارد؛ بعضی نیازها در خرید فوری دیده می‌شوند و بعضی باید چند مرحله زودتر وارد مذاکره شوند تا در تصمیم سازنده اثر بگذارند.`,
      },
      {
        q: `آیا همه زیرگروه‌های ${name} یک مسیر فروش دارند؟`,
        a: `خیر. بخشی از بازار با فروش سریع و تراکنشی جلو می‌رود و بخشی به اعتمادسازی، نمونه‌کار، مذاکره فنی و پیگیری طولانی‌تر نیاز دارد.`,
      },
    ],
  };
}

export const CATEGORY_COPY = Object.fromEntries(
  CATEGORIES.filter((category) => !category.excludeFromPages).map((category) => [
    category.slug,
    makeCopy(category),
  ]),
) as Record<string, CategoryCopy>;
