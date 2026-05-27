import { CategorySection } from "@/components/category/CategorySection";
import type { Category, Stage } from "@/data/types";

interface TimingInsightProps {
  category: Category;
  stage?: Stage;
  override?: string;
}

export function TimingInsight({ category, stage, override }: TimingInsightProps) {
  const fallback = stage
    ? `در داده این دسته، بیشترین تمرکز خرید روی مرحله «${stage.faLabel}» دیده می‌شود. برای فروشندگان ${category.faTitle} یعنی پیگیری باید قبل از رسیدن پروژه به این نقطه گرم شده باشد، نه وقتی تصمیم خرید عملاً گرفته شده است.`
    : `برای ${category.faTitle} باید زمان خرید هر زیرگروه جداگانه بررسی شود؛ همه فرصت‌ها با یک تقویم فروش یکسان جلو نمی‌روند.`;

  return (
    <CategorySection>
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.4fr] lg:items-center">
        <div>
          <span className="category-badge mb-3">
            زمان‌بندی
          </span>
          <h2 className="text-2xl font-black md:text-3xl">
            بینش زمان‌بندی این دسته
          </h2>
        </div>
        <div className="category-card p-5">
          <h3 className="font-black">
            {stage ? stage.faLabel : "زمان خرید وابسته به زیرگروه"}
          </h3>
          <p className="mt-2 leading-8 text-muted-foreground">
            {override ?? fallback}
          </p>
        </div>
      </div>
    </CategorySection>
  );
}
