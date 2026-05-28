import { CategorySection } from "@/components/category/CategorySection";
import type { Category, Stage } from "@/data/types";

interface TimingInsightProps {
  category: Category;
  marketStat?: string;
  stage?: Stage;
  override?: string;
}

export function TimingInsight({
  category,
  marketStat,
  stage,
  override,
}: TimingInsightProps) {
  const fallback = stage
    ? `در داده این دسته، بیشترین تمرکز خرید روی مرحله «${stage.faLabel}» دیده می‌شود. برای فروشندگان ${category.faTitle} یعنی پیگیری باید قبل از رسیدن پروژه به این نقطه گرم شده باشد، نه وقتی تصمیم خرید عملاً گرفته شده است.`
    : `برای ${category.faTitle} باید زمان خرید هر زیرگروه جداگانه بررسی شود؛ همه فرصت‌ها با یک تقویم فروش یکسان جلو نمی‌روند.`;

  return (
    <CategorySection>
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.4fr] lg:items-center">
        <div>
          <span className="category-badge mb-3">
            زمان‌بندی {stage ? stage.faLabel : category.faTitle}
          </span>
          <h2 className="text-2xl font-black md:text-3xl">
            بینش زمان‌بندی {category.faTitle}
          </h2>
        </div>
        <div className="category-card p-5">
          <h3 className="font-black">
            {stage ? stage.faLabel : "زمان خرید وابسته به زیرگروه"}
          </h3>
          <p className="mt-2 leading-8 text-muted-foreground">
            {override ?? fallback}
          </p>
          {marketStat ? (
            <p className="mt-4 rounded-2xl border border-[#e4d8c8] bg-white/60 px-4 py-3 text-sm font-bold leading-7 text-[#6f4a28] dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-200">
              {marketStat}
            </p>
          ) : null}
        </div>
      </div>
    </CategorySection>
  );
}
