import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { CategorySection } from "@/components/category/CategorySection";
import type { DominantSaleStyle as DominantSaleStyleKind } from "@/data/stage-insights";
import type { StageCopy } from "@/data/stage-copy";

const salesStyles = {
  consultative: {
    href: "/sales-style/consultative/",
    label: "فروش مشاوره‌ای",
  },
  fast: {
    href: "/sales-style/fast/",
    label: "فروش سریع و تراکنشی",
  },
};

function StyleCard({
  count,
  description,
  href,
  label,
}: {
  count: number;
  description: string;
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-3xl border border-[#e4d8c8] bg-white/68 p-5 transition hover:-translate-y-0.5 hover:bg-white dark:border-zinc-800 dark:bg-zinc-900/68"
    >
      <span className="category-badge mb-4">{count} زیرگروه مرتبط</span>
      <h3 className="text-xl font-black">{label}</h3>
      <p className="mt-3 text-sm leading-8 text-muted-foreground">{description}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#7a4a22] dark:text-zinc-200">
        مشاهده مسیر فروش
        <ArrowLeft className="h-4 w-4" />
      </span>
    </Link>
  );
}

export function DominantSaleStyle({
  consultativeCount,
  copy,
  fastCount,
  style,
}: {
  consultativeCount: number;
  copy: StageCopy;
  fastCount: number;
  style: DominantSaleStyleKind;
}) {
  return (
    <CategorySection>
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="category-badge mb-3">نوع فروش</span>
          <h2 className="text-2xl font-black md:text-3xl">نوع فروش در این مرحله</h2>
        </div>
      </div>

      {style === "mixed" ? (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <StyleCard
            count={fastCount}
            description={copy.dominantSaleStyleParagraph.mixed}
            href={salesStyles.fast.href}
            label={salesStyles.fast.label}
          />
          <StyleCard
            count={consultativeCount}
            description={copy.dominantSaleStyleParagraph.mixed}
            href={salesStyles.consultative.href}
            label={salesStyles.consultative.label}
          />
        </div>
      ) : (
        <div className="mt-6">
          <StyleCard
            count={style === "fast" ? fastCount : consultativeCount}
            description={copy.dominantSaleStyleParagraph[style]}
            href={salesStyles[style].href}
            label={salesStyles[style].label}
          />
        </div>
      )}
    </CategorySection>
  );
}
