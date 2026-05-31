import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { CategorySection } from "@/components/category/CategorySection";
import { RoutePageVisual } from "@/components/marketing/route-page-visual";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero({
  categoryCount,
  stageCount,
  subcategoryCount,
}: {
  categoryCount: string;
  stageCount: string;
  subcategoryCount: string;
}) {
  return (
    <CategorySection>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(18rem,0.92fr)] lg:items-center">
        <div>
          <span className="category-badge mb-5">زمینه‌های کاری</span>
          <h1 className="max-w-5xl text-4xl font-black leading-tight md:text-6xl">
            همه زمینه‌های کاری در پرشین‌سازه
          </h1>
          <p className="mt-5 max-w-4xl leading-8 text-muted-foreground">
            {categoryCount} دسته اصلی، {subcategoryCount} زمینه کاری، و {stageCount} مرحله
            ساخت؛ نقشه کامل آنچه که در پرشین‌سازه برای فروش پروژه‌محور پوشش داده
            می‌شود.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link className={cn(buttonVariants({ size: "lg" }))} href="/#demo">
              درخواست دمو
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <Link
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              href="/subscriptions/"
            >
              مشاهده پلن‌ها
            </Link>
          </div>
        </div>
        <RoutePageVisual
          alt="نمای نقشه پروژه‌های ساختمانی و دسته‌های فروش قابل پوشش در پرشین‌سازه"
          caption="تصویر نمونه از هاب دسته‌های کاری و سیگنال‌های پروژه‌محور"
          priority
        />
      </div>
    </CategorySection>
  );
}
