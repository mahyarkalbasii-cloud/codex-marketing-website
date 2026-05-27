import { CategorySection } from "@/components/category/CategorySection";
import type { Category } from "@/data/types";

import { CategoryCard } from "./CategoryCard";

export function CategoryGrid({ categories }: { categories: Category[] }) {
  return (
    <CategorySection id="categories">
      <span className="category-badge mb-3">دسته‌ها</span>
      <h2 className="text-2xl font-black md:text-3xl">زمینه‌های کاری اصلی</h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
        هر کارت به صفحه تخصصی همان دسته وصل است؛ صفحه‌ای که زیرگروه‌ها، زمان
        مناسب خرید و مسیر فروش مرتبط را از data layer واحد می‌خواند.
      </p>
      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </CategorySection>
  );
}
