import { CategorySection } from "@/components/category/CategorySection";
import type { SaleTypeSplit } from "@/data/category-insights";
import type { SubCategory } from "@/data/types";
import { cn } from "@/lib/utils";

interface SubcategoryGridProps {
  split: SaleTypeSplit;
}

function SubcategoryPill({
  subcategory,
  withAnchor,
}: {
  subcategory: SubCategory;
  withAnchor: boolean;
}) {
  return (
    <li id={withAnchor ? `sub-${subcategory.id}` : undefined} className="category-pill">
      <span className="min-w-0 break-words">{subcategory.faTitle}</span>
      {subcategory.saleType === "both" ? (
        <span className="shrink-0 rounded-full bg-[#f3e7d8] px-2 py-0.5 text-[11px] font-bold text-[#7a5b38] dark:bg-white/10 dark:text-zinc-200">
          دوگانه
        </span>
      ) : null}
    </li>
  );
}

function SaleColumn({
  title,
  description,
  items,
  anchorFor,
  className,
}: {
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
        {description}
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

export function SubcategoryGrid({ split }: SubcategoryGridProps) {
  const hasFast = split.fast.length > 0;
  const hasConsultative = split.consultative.length > 0;

  return (
    <CategorySection>
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="category-badge mb-3">زیرگروه‌ها</span>
          <h2 className="text-2xl font-black md:text-3xl">
            نمونه محصولات و کاربردها
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
          هر زیرگروه بر اساس رفتار خرید سازنده در یکی از دو مسیر فروش قرار گرفته
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
            title="فروش سریع و تراکنشی"
            description="برای نیازهایی که باید سریع شناسایی، قیمت‌دهی و پیگیری شوند."
            items={split.fast}
            anchorFor="fast"
          />
        ) : null}
        {hasConsultative ? (
          <SaleColumn
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
