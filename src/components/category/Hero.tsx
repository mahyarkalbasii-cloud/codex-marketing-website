import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { CategorySection } from "@/components/category/CategorySection";
import { buttonVariants } from "@/components/ui/button";
import type { SaleMotionSummary } from "@/data/category-insights";
import type { Category } from "@/data/types";
import { cn } from "@/lib/utils";

interface HeroProps {
  category: Category;
  saleMotion: SaleMotionSummary;
  subtitle: string;
}

export function Hero({ category, saleMotion, subtitle }: HeroProps) {
  return (
    <CategorySection>
      <div className="max-w-5xl">
        <span className="category-badge mb-5">
          {saleMotion.label}
        </span>
        <h1 className="text-4xl font-black leading-tight text-[#2a241d] md:text-6xl dark:text-white">
          {category.faTitle} برای پروژه‌های در حال ساخت
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
          {subtitle}
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link className={cn(buttonVariants({ size: "lg" }))} href="/#demo">
            درخواست دمو
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <Link
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            href="/pricing"
          >
            مشاهده پلن‌ها
          </Link>
        </div>
      </div>
    </CategorySection>
  );
}
