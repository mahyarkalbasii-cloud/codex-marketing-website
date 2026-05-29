import Link from "next/link";
import { ArrowLeft, Building2, Target } from "lucide-react";

import { SectionHeader } from "@/components/marketing/section-header";
import { Card } from "@/components/ui/card";
import type { CityFaqItem } from "@/data/city-insights";
import type { Category } from "@/data/types";

export function CityInternalLinks({
  categories,
  cityName,
  faqItems,
  reasonByCategorySlug,
}: {
  categories: Category[];
  cityName: string;
  faqItems: CityFaqItem[];
  reasonByCategorySlug: Record<string, string>;
}) {
  return (
    <section className="border-y border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <SectionHeader
          eyebrow={`فروش در ${cityName}`}
          title="مسیرهای فروش مرتبط با این شهر"
          description="دسته‌ها، مرحله‌ها و پرسش‌هایی که باید با محدوده‌های همین شهر خوانده شوند."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Card className="p-6">
            <Building2 className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />
            <h3 className="mt-5 text-xl font-bold">دسته‌های پرارزش برای این شهر</h3>
            <div className="mt-5 grid gap-3">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/suppliers/${category.slug}/`}
                  className="group rounded-md border border-border bg-background px-4 py-3 text-sm hover:bg-muted"
                >
                  <span className="flex items-center justify-between gap-3 font-bold">
                    {category.faTitle}
                    <ArrowLeft className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-x-1" />
                  </span>
                  {reasonByCategorySlug[category.slug] ? (
                    <span className="mt-2 block leading-7 text-muted-foreground">
                      {reasonByCategorySlug[category.slug]}
                    </span>
                  ) : null}
                </Link>
              ))}
            </div>
          </Card>
          <Card className="p-6">
            <Target className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />
            <h3 className="mt-5 text-xl font-bold">مراحل ساخت</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              در {cityName}، مرحله ساخت باید کنار محدوده پروژه و نوع محصول خوانده شود؛
              یک مرحله برای مصالح، تأسیسات، نما یا دکوراسیون معنای فروش یکسانی ندارد.
            </p>
            <Link
              href="/stages/"
              className="mt-5 flex items-center justify-between rounded-md border border-border bg-background px-4 py-3 text-sm font-bold hover:bg-muted"
            >
              مشاهده همه مراحل ساخت
              <ArrowLeft className="h-4 w-4 text-muted-foreground" />
            </Link>
          </Card>
        </div>
        {faqItems.length > 0 ? (
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {faqItems.map((item) => (
              <Card key={item.q} className="p-5">
                <h3 className="text-base font-bold leading-7">{item.q}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.a}
                </p>
              </Card>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
