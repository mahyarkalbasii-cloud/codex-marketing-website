import Link from "next/link";

import { CategorySection } from "@/components/category/CategorySection";
import type { Stage } from "@/data/types";
import { getStageHref } from "@/lib/stage-routes";

export function RelatedStages({ stages }: { stages: Stage[] }) {
  if (stages.length === 0) {
    return null;
  }

  return (
    <CategorySection>
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="category-badge mb-3">
            مراحل ساخت
          </span>
          <h2 className="text-2xl font-black md:text-3xl">مراحل ساخت مرتبط</h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
          این مرحله‌ها از زمان خرید زیرگروه‌های همین دسته استخراج شده‌اند.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {stages.map((stage) => (
          <Link
            key={stage.id}
            href={getStageHref(stage)}
            className="category-badge transition hover:bg-white"
          >
            {stage.faLabel}
          </Link>
        ))}
      </div>
    </CategorySection>
  );
}
