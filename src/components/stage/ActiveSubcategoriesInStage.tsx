import Link from "next/link";

import { CategorySection } from "@/components/category/CategorySection";
import {
  TOTAL_SUBCATEGORY_COUNT,
  formatStageRoles,
  type ActiveStageParentGroup,
} from "@/data/stage-insights";

export function ActiveSubcategoriesInStage({
  groups,
  stageLabel,
  totalActive,
}: {
  groups: ActiveStageParentGroup[];
  stageLabel: string;
  totalActive: number;
}) {
  return (
    <CategorySection id="active-subcategories">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="category-badge mb-3">زمینه‌های فعال</span>
          <h2 className="text-2xl font-black md:text-3xl">
            زمینه‌های کاری فعال در مرحله {stageLabel}
          </h2>
        </div>
        <p className="text-sm font-bold text-muted-foreground">
          {totalActive} ردیف مرتبط از {TOTAL_SUBCATEGORY_COUNT} زمینه کاری
        </p>
      </div>

      <div className="mt-7 space-y-5">
        {groups.map((group) => (
          <div
            key={group.parent.id}
            className="rounded-3xl border border-[#e4d8c8] bg-white/58 p-4 dark:border-zinc-800 dark:bg-zinc-900/58"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <Link
                href={`/suppliers/${group.parent.slug}/`}
                className="text-lg font-black transition hover:text-[#8a4f22]"
              >
                {group.parent.faTitle}
              </Link>
              <span className="category-badge w-fit">
                {group.subcategories.length} زیرگروه
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.subcategories.map((item) => {
                const roleLabel = formatStageRoles(item.roles);

                return (
                  <Link
                    key={item.subcategory.id}
                    href={`/suppliers/${group.parent.slug}/${item.subcategory.slug}/`}
                    title={roleLabel}
                    className="category-pill gap-2"
                  >
                    <span>{item.subcategory.faTitle}</span>
                    <span className="rounded-full bg-[#f1e4d3] px-2 py-0.5 text-[11px] font-black text-[#7a4a22] dark:bg-white/10 dark:text-zinc-200">
                      {roleLabel}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </CategorySection>
  );
}
