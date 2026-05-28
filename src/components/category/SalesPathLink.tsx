import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { CategorySection } from "@/components/category/CategorySection";
import {
  SALE_PATHS,
  type SaleTypeSplit,
  type CategorySaleMotion,
} from "@/data/category-insights";
import type { Category, SubCategory } from "@/data/types";

interface SalesPathLinkProps {
  category: Category;
  motion: CategorySaleMotion;
  split: SaleTypeSplit;
}

const pathOrder = ["fast", "consultative"] as const;

function formatNames(items: SubCategory[], fallback: string) {
  const names = items.slice(0, 6).map((item) => item.faTitle);

  return names.length > 0 ? names.join("، ") : fallback;
}

function getPathDescription(
  category: Category,
  split: SaleTypeSplit,
  path: (typeof pathOrder)[number],
) {
  if (path === "fast") {
    return `در ${category.faTitle}، این مسیر برای ${formatNames(
      split.fast,
      "زیرگروه‌های سریع همین دسته",
    )} مهم است؛ تماس، قیمت‌دهی و ثبت پیگیری باید به زمان خرید همان زیرگروه وصل شود.`;
  }

  return `در ${category.faTitle}، این مسیر برای ${formatNames(
    split.consultative,
    "زیرگروه‌های مشاوره‌ای همین دسته",
  )} مهم است؛ فروشنده باید با زمینه فنی، نمونه‌کار و قدم بعدی روشن وارد مذاکره شود.`;
}

export function SalesPathLink({ category, motion, split }: SalesPathLinkProps) {
  const paths = motion === "mixed" ? pathOrder : [motion];

  return (
    <CategorySection>
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-bold text-muted-foreground">مسیر فروش</p>
          <h2 className="mt-2 text-2xl font-black md:text-3xl">مسیر فروش مرتبط</h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
          مسیر فروش این دسته از saleType زیرگروه‌ها ساخته شده و باید با همان
          زیرگروه‌ها در CRM پیگیری شود.
        </p>
      </div>

      <div className="mt-7 grid gap-4 md:grid-cols-2">
        {paths.map((path) => {
          const item = SALE_PATHS[path];

          return (
            <Link key={path} href={item.href}>
              <div className="category-card h-full p-5 transition hover:-translate-y-0.5 hover:bg-white dark:hover:bg-zinc-900">
                <h3 className="font-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {getPathDescription(category, split, path)}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#7a4a22] dark:text-zinc-200">
                  مشاهده مسیر
                  <ArrowLeft className="h-4 w-4" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </CategorySection>
  );
}
