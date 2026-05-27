import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { CategorySection } from "@/components/category/CategorySection";
import type { ActiveStageParentGroup } from "@/data/stage-insights";

export function RelevantCategories({ groups }: { groups: ActiveStageParentGroup[] }) {
  const visibleGroups = groups.slice(0, 8);

  return (
    <CategorySection>
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="category-badge mb-3">دسته‌های مرتبط</span>
          <h2 className="text-2xl font-black md:text-3xl">
            چه تأمین‌کنندگانی باید این مرحله را جدی بگیرند؟
          </h2>
        </div>
        {groups.length > visibleGroups.length ? (
          <p className="text-sm leading-7 text-muted-foreground">
            {visibleGroups.length} دسته اول از {groups.length} دسته مرتبط نمایش داده شده است.
          </p>
        ) : null}
      </div>

      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {visibleGroups.map((group) => (
          <Link
            key={group.parent.id}
            href={`/suppliers/${group.parent.slug}/`}
            className="category-card"
          >
            <span className="category-badge mb-4">
              {group.subcategories.length} زیرگروه فعال
            </span>
            <h3 className="text-lg font-black leading-8">{group.parent.faTitle}</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              این دسته در این مرحله با مذاکره، خرید یا اجرای زیرگروه‌های مرتبط فعال می‌شود.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#7a4a22] dark:text-zinc-200">
              مشاهده دسته
              <ArrowLeft className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>
    </CategorySection>
  );
}
