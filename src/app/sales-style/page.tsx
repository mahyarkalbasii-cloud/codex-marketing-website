import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/marketing/breadcrumbs";
import { StructuredData } from "@/components/marketing/structured-data";
import {
  FinalCTA,
  GradientSection,
} from "@/components/marketing/suppliers/shared";
import { SALES_STYLE_COPY } from "@/data/sales-style-copy";
import { CategoryLayout } from "@/layouts/CategoryLayout";
import { absoluteUrl } from "@/lib/site-data";

const styles = [
  SALES_STYLE_COPY.fast,
  SALES_STYLE_COPY.consultative,
  SALES_STYLE_COPY.barter,
];

export const metadata: Metadata = {
  title: { absolute: "انواع فروش ساختمانی | پرشین‌سازه" },
  description:
    "سه مدل اصلی فروش در بازار پروژه‌های ساختمانی: فروش سریع، فروش مشاوره‌ای و تهاتر مصالح یا خدمات با ملک.",
  alternates: { canonical: "/sales-style/" },
  openGraph: {
    title: "انواع فروش ساختمانی | پرشین‌سازه",
    description:
      "هاب مدل‌های فروش برای تامین‌کنندگان ساختمانی، بر اساس دیتاست جامع محصولات و خدمات ساختمانی.",
    url: absoluteUrl("/sales-style/"),
    locale: "fa_IR",
    type: "website",
  },
};

export default function SalesStyleIndexPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: styles.map((style, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: style.h1,
      url: absoluteUrl(style.path),
    })),
  };

  return (
    <CategoryLayout>
      <StructuredData data={itemListSchema} />
      <Breadcrumbs
        items={[
          { label: "خانه", href: "/" },
          { label: "نوع فروش", href: "/sales-style/" },
        ]}
      />
      <GradientSection>
        <p className="text-sm font-bold text-muted-foreground">هاب نوع فروش</p>
        <h1 className="mt-3 text-4xl font-black md:text-6xl">
          مدل‌های فروش در بازار ساختمان
        </h1>
        <p className="mt-4 max-w-4xl leading-8 text-muted-foreground">
          دیتاست جدید سه مسیر اصلی را جدا می‌کند: فروش سریع، فروش مشاوره‌ای و
          تهاتر. نوع‌های ریزتر مثل مهندسی، سفارشی و اجاره‌ای به‌عنوان برچسب
          زیرگروه‌ها استفاده می‌شوند، نه صفحه مستقل.
        </p>
      </GradientSection>
      <section className="grid gap-4 md:grid-cols-3">
        {styles.map((style) => (
          <Link
            key={style.path}
            href={style.path}
            className="category-card p-6 transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <span className="category-badge mb-4">{style.eyebrow}</span>
            <h2 className="text-2xl font-black">{style.h1}</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {style.shortAnswer}
            </p>
            <span className="mt-5 inline-flex text-sm font-bold">
              مشاهده صفحه
              <span aria-hidden="true">←</span>
            </span>
          </Link>
        ))}
      </section>
      <FinalCTA
        title="نوع فروش را با مرحله ساخت یکی کنید"
        description="در دمو، دسته محصول، مرحله ورود و مدل پیگیری را با بازار واقعی شما تنظیم می‌کنیم."
      />
    </CategoryLayout>
  );
}
