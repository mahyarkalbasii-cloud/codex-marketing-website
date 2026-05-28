import { CategorySection } from "@/components/category/CategorySection";
import type { SaleTypeSplit } from "@/data/category-insights";
import { STAGES } from "@/data/stages";
import type { Category, SubCategory } from "@/data/types";
import { cn } from "@/lib/utils";

interface SubcategoryGridProps {
  category: Category;
  split: SaleTypeSplit;
}

const stageById = new Map(STAGES.map((stage) => [stage.id, stage.faLabel]));

function formatStages(stageIds: SubCategory["buyStages"], fallback: string) {
  const labels = stageIds
    .map((stageId) => stageById.get(stageId))
    .filter((label): label is string => Boolean(label));

  return labels.length > 0 ? labels.join("، ") : fallback;
}

function SubcategoryPill({
  subcategory,
  withAnchor,
}: {
  subcategory: SubCategory;
  withAnchor: boolean;
}) {
  const advice =
    subcategory.strategicAdvice.length > 360
      ? `${subcategory.strategicAdvice.slice(0, 359).trim()}…`
      : subcategory.strategicAdvice;

  return (
    <li
      id={withAnchor ? `sub-${subcategory.id}` : undefined}
      className="category-pill flex-col items-start justify-start"
    >
      <div className="flex w-full min-w-0 items-start justify-between gap-3">
        <span className="min-w-0 break-words">{subcategory.faTitle}</span>
        {subcategory.saleType === "both" ? (
          <span className="shrink-0 rounded-full bg-[#f3e7d8] px-2 py-0.5 text-[11px] font-bold text-[#7a5b38] dark:bg-white/10 dark:text-zinc-200">
            دوگانه
          </span>
        ) : null}
      </div>
      <p className="text-xs font-medium leading-6 text-muted-foreground">
        {advice}
      </p>
      <p className="text-xs leading-6 text-muted-foreground">
        <span className="font-bold text-foreground">
          نقشه مرحله {subcategory.faTitle}:
        </span>{" "}
        مذاکره در {formatStages(subcategory.negotiationStages, "مرحله وابسته به پروژه")}؛
        خرید در {formatStages(subcategory.buyStages, "مرحله وابسته به پروژه")}؛
        اجرا در {formatStages(subcategory.executionStages, "مرحله وابسته به پروژه")}.
      </p>
    </li>
  );
}

function SaleColumn({
  category,
  title,
  description,
  items,
  anchorFor,
  className,
}: {
  category: Category;
  title: string;
  description: string;
  items: SubCategory[];
  anchorFor: "fast" | "consultative";
  className?: string;
}) {
  return (
    <div className={cn("category-card p-5", className)}>
      <h3 className="text-lg font-black">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-muted-foreground">
        {description} این ستون از زیرگروه‌های واقعی {category.faTitle} ساخته شده
        است.
      </p>
      <ul className="mt-5 grid gap-3">
        {items.map((subcategory) => (
          <SubcategoryPill
            key={`${title}-${subcategory.id}`}
            subcategory={subcategory}
            withAnchor={
              subcategory.saleType === anchorFor ||
              (anchorFor === "fast" && subcategory.saleType === "both")
            }
          />
        ))}
      </ul>
    </div>
  );
}

export function SubcategoryGrid({ category, split }: SubcategoryGridProps) {
  const hasFast = split.fast.length > 0;
  const hasConsultative = split.consultative.length > 0;

  return (
    <CategorySection>
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="category-badge mb-3">زیرگروه‌ها</span>
          <h2 className="text-2xl font-black md:text-3xl">
            نمونه محصولات و کاربردهای {category.faTitle}
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
          این گروه‌بندی از saleType، مرحله‌های مذاکره، خرید و اجرای{" "}
          {category.subcategories.length} زیرگروه {category.faTitle} ساخته شده
          است.
        </p>
      </div>

      <div
        className={cn(
          "mt-7 grid gap-4",
          hasFast && hasConsultative ? "lg:grid-cols-2" : "max-w-3xl",
        )}
      >
        {hasFast ? (
          <SaleColumn
            category={category}
            title="فروش سریع و تراکنشی"
            description="برای نیازهایی که باید سریع شناسایی، قیمت‌دهی و پیگیری شوند."
            items={split.fast}
            anchorFor="fast"
          />
        ) : null}
        {hasConsultative ? (
          <SaleColumn
            category={category}
            title="فروش مشاوره‌ای"
            description="برای خریدهایی که به اعتبار، مذاکره فنی و ورود زودتر نیاز دارند."
            items={split.consultative}
            anchorFor="consultative"
          />
        ) : null}
      </div>
    </CategorySection>
  );
}
