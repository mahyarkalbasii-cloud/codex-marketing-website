import Link from "next/link";

import { CategorySection } from "@/components/category/CategorySection";
import type { Stage } from "@/data/types";
import { getStageHref } from "@/lib/stage-routes";

export function RelatedStagesNav({ stages }: { stages: Stage[] }) {
  if (stages.length === 0) {
    return null;
  }

  return (
    <CategorySection>
      <span className="category-badge mb-3">مسیر ساخت</span>
      <h2 className="text-2xl font-black md:text-3xl">مرحله‌های نزدیک در چرخه ساخت</h2>
      <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {stages.map((stage) => (
          <Link key={stage.id} href={getStageHref(stage)} className="category-card">
            <h3 className="text-lg font-black">{stage.faLabel}</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              برای بررسی فرصت‌های قبل و بعد از این مرحله وارد صفحه مرتبط شوید.
            </p>
          </Link>
        ))}
      </div>
    </CategorySection>
  );
}
