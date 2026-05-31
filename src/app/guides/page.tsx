import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/marketing/breadcrumbs";
import { StructuredData } from "@/components/marketing/structured-data";
import {
  FinalCTA,
  GradientSection,
} from "@/components/marketing/suppliers/shared";
import { GUIDES } from "@/data/guides";
import { CategoryLayout } from "@/layouts/CategoryLayout";
import { routeOgImage } from "@/lib/og-metadata";
import { absoluteUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  title: { absolute: "راهنماهای فروش و تأمین ساختمان | پرشین‌سازه" },
  description:
    "راهنماهای کاربردی درباره اعتماد به تأمین‌کننده، تهاتر مصالح ساختمانی و زمان خرید مصالح در چرخه پروژه.",
  alternates: { canonical: "/guides/" },
  openGraph: {
    title: "راهنماهای فروش و تأمین ساختمان | پرشین‌سازه",
    description:
      "هاب مقاله‌های seed ساخته‌شده از سند جامع محصولات و خدمات ساختمانی.",
    url: absoluteUrl("/guides/"),
    locale: "fa_IR",
    type: "website",
    images: routeOgImage("/guides/"),
  },
};

export default function GuidesPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: GUIDES.map((guide, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: guide.title,
      url: absoluteUrl(`/guides/${guide.slug}/`),
    })),
  };

  return (
    <CategoryLayout>
      <StructuredData data={itemListSchema} />
      <Breadcrumbs
        items={[
          { label: "خانه", href: "/" },
          { label: "راهنماها", href: "/guides/" },
        ]}
      />
      <GradientSection>
        <p className="text-sm font-bold text-muted-foreground">
          هاب راهنما
        </p>
        <h1 className="mt-3 text-4xl font-black md:text-6xl">
          راهنماهای فروش و تأمین ساختمان
        </h1>
        <p className="mt-4 max-w-4xl leading-8 text-muted-foreground">
          این راهنماها از ستون‌های زمان‌بندی، نوع فروش و اعتماد در سند جامع
          ساخته شده‌اند و برای پاسخ‌گویی مستقیم به سوالات جست‌وجویی بازار
          ساختمان طراحی شده‌اند.
        </p>
      </GradientSection>
      <section className="grid gap-4 md:grid-cols-3">
        {GUIDES.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}/`}
            className="category-card p-6 transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <h2 className="text-2xl font-black">{guide.title}</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {guide.description}
            </p>
            <span className="mt-5 inline-flex text-sm font-bold">
              خواندن راهنما
              <span aria-hidden="true">←</span>
            </span>
          </Link>
        ))}
      </section>
      <FinalCTA
        title="راهنما را به مسیر فروش تبدیل کنید"
        description="در دمو، همین منطق زمان‌بندی و اعتماد را روی دسته محصول شما اجرا می‌کنیم."
      />
    </CategoryLayout>
  );
}
