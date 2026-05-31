import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { CategorySection } from "@/components/category/CategorySection";
import { getSaleMotionSummary } from "@/data/category-insights";
import type { Category } from "@/data/types";

export function RelatedCategories({ categories }: { categories: Category[] }) {
  if (categories.length === 0) {
    return null;
  }

  return (
    <CategorySection>
      <span className="category-badge mb-3">زمینه‌های کاری مرتبط</span>
      <h2 className="text-2xl font-black md:text-3xl">
        دسته‌های نزدیک از نظر مرحله ساخت
      </h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {categories.map((category) => {
          const motion = getSaleMotionSummary(category);

          return (
            <Link
              key={category.id}
              href={`/suppliers/${category.slug}/`}
              className="category-card p-5 transition hover:-translate-y-0.5 hover:bg-white"
            >
              <span className="category-badge mb-4">{motion.label}</span>
              <h3 className="text-lg font-black leading-8">{category.faTitle}</h3>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#7a4a22]">
                مشاهده دسته
                <ArrowLeft className="h-4 w-4" />
              </span>
            </Link>
          );
        })}
      </div>
    </CategorySection>
  );
}
