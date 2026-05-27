import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { getSaleMotionSummary } from "@/data/category-insights";
import type { Category } from "@/data/types";

export function CategoryCard({ category }: { category: Category }) {
  const motion = getSaleMotionSummary(category);
  const representativeSubs = category.subcategories.slice(0, 4);

  return (
    <Link
      href={`/suppliers/${category.slug}/`}
      aria-label={`مشاهده دسته ${category.faTitle}`}
      className="block h-full"
    >
      <article
        data-category-card
        className="category-card flex h-full flex-col p-5 transition hover:-translate-y-0.5 hover:border-[#c58a52] hover:bg-white"
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3 className="text-lg font-black leading-8">{category.faTitle}</h3>
          <span className="category-badge text-xs">{motion.label}</span>
        </div>
        <p className="mt-3 text-sm font-bold text-muted-foreground">
          {category.subcategories.length} زمینه کاری
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {representativeSubs.map((subcategory) => (
            <span
              key={subcategory.id}
              className="rounded-full border border-[#e4d8c8] bg-white/55 px-3 py-1 text-xs leading-6 text-muted-foreground"
            >
              {subcategory.faTitle}
            </span>
          ))}
        </div>
        <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-[#7a4a22]">
          مشاهده دسته
          <ArrowLeft className="h-4 w-4" />
        </span>
      </article>
    </Link>
  );
}
