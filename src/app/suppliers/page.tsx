import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/marketing/breadcrumbs";
import { StructuredData } from "@/components/marketing/structured-data";
import { FinalCTA } from "@/components/marketing/suppliers/shared";
import { CategoryGrid } from "@/components/suppliers-index/CategoryGrid";
import { FAQ, type SuppliersFAQItem } from "@/components/suppliers-index/FAQ";
import { Hero } from "@/components/suppliers-index/Hero";
import { SaleStyleSplit } from "@/components/suppliers-index/SaleStyleSplit";
import { StatsBar } from "@/components/suppliers-index/StatsBar";
import {
  getMainStages,
  getOrderedVisibleCategories,
  getVisibleSubcategoryCount,
} from "@/data/navigation";
import { CategoryLayout } from "@/layouts/CategoryLayout";
import { routeOgImage } from "@/lib/og-metadata";
import { absoluteUrl } from "@/lib/site-data";

const faNumber = new Intl.NumberFormat("fa-IR");
const categories = getOrderedVisibleCategories();
const mainStages = getMainStages();
const categoryCount = categories.length;
const subcategoryCount = getVisibleSubcategoryCount();
const stageCount = mainStages.length;
const fastCount = categories.reduce(
  (sum, category) =>
    sum +
    category.subcategories.filter(
      (subcategory) =>
        subcategory.saleType === "fast" || subcategory.saleType === "both",
    ).length,
  0,
);
const consultativeCount = categories.reduce(
  (sum, category) =>
    sum +
    category.subcategories.filter(
      (subcategory) =>
        subcategory.saleType === "consultative" ||
        subcategory.saleType === "both",
    ).length,
  0,
);
const pageTitle = "همه زمینه‌های کاری ساختمانی";

const faqItems: SuppliersFAQItem[] = [
  {
    q: "پرشین‌سازه چند دسته فروش را پوشش می‌دهد؟",
    a: `در نسخه فعلی، ${faNumber.format(categoryCount)} دسته اصلی و ${faNumber.format(subcategoryCount)} زمینه کاری قابل استفاده برای تامین‌کنندگان صنعت ساختمان پوشش داده می‌شود.`,
  },
  {
    q: "تفاوت فروش سریع و فروش مشاوره‌ای چیست؟",
    a: "فروش سریع برای نیازهایی است که فاصله نیاز تا خرید کوتاه‌تر است؛ فروش مشاوره‌ای برای تصمیم‌هایی است که به اعتمادسازی، مذاکره فنی و پیگیری طولانی‌تر نیاز دارند.",
  },
  {
    q: "چطور دسته مناسب کسب‌وکار خودم را پیدا کنم؟",
    a: "از دسته اصلی شروع کنید، زیرگروه‌های نزدیک به محصول یا خدمت خود را ببینید و بعد مرحله ساخت و نوع فروش غالب را با چرخه فروش واقعی تیم خود مقایسه کنید.",
  },
  {
    q: "آیا همه ۱۵ دسته در همه ۸ مرحله ساخت فعال هستند؟",
    a: "خیر. بعضی دسته‌ها مثل خدمات مهندسی قبل از شروع ساخت فعال‌ترند و بعضی دیگر مثل تجهیزات تکمیلی در نازک‌کاری و پایان کار ارزش بیشتری پیدا می‌کنند.",
  },
  {
    q: "اگر دسته من در لیست نیست چه کنم؟",
    a: "اگر محصول یا خدمت شما به پروژه ساختمانی وابسته است، معمولاً می‌توان آن را زیر یکی از دسته‌های نزدیک قرار داد. در دمو، تناسب دسته و زمان پیگیری دقیق‌تر بررسی می‌شود.",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description:
    "۱۵ دسته اصلی شامل مصالح ساختمانی، پیمانکاری، آهن‌آلات، تاسیسات مکانیکی و الکتریکی، در/پنجره/نما، و ۹ دسته دیگر. ۱۴۹ زمینه کاری در ۸ مرحله ساخت.",
  alternates: { canonical: "/suppliers/" },
  openGraph: {
    title: pageTitle,
    description:
      "هاب دسته‌بندی تامین‌کنندگان ساختمانی، زمینه‌های فروش در ساختمان و مسیرهای فروش پروژه‌محور در پرشین‌سازه.",
    url: absoluteUrl("/suppliers/"),
    locale: "fa_IR",
    type: "website",
    images: routeOgImage("/suppliers/", pageTitle),
  },
};

export default function SuppliersIndexPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: pageTitle,
    url: absoluteUrl("/suppliers/"),
    inLanguage: "fa-IR",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: categories.map((category, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: category.faTitle,
        url: absoluteUrl(`/suppliers/${category.slug}/`),
      })),
    },
  };

  return (
    <CategoryLayout>
      <StructuredData data={[faqSchema, collectionPageSchema]} />
      <Breadcrumbs
        items={[
          { label: "خانه", href: "/" },
          { label: "زمینه‌های کاری", href: "/suppliers/" },
        ]}
      />
      <Hero
        categoryCount={faNumber.format(categoryCount)}
        stageCount={faNumber.format(stageCount)}
        subcategoryCount={faNumber.format(subcategoryCount)}
      />
      <StatsBar
        categoryCount={faNumber.format(categoryCount)}
        stageCount={faNumber.format(stageCount)}
        subcategoryCount={faNumber.format(subcategoryCount)}
      />
      <SaleStyleSplit
        consultativeCount={faNumber.format(consultativeCount)}
        fastCount={faNumber.format(fastCount)}
      />
      <CategoryGrid categories={categories} />
      <FAQ items={faqItems} />
      <FinalCTA
        title="زمینه فروش خود را به مسیر عملی تبدیل کنید"
        description="در دمو، دسته مناسب، مرحله‌های فعال و سبک فروش تیم شما روی داده واقعی پروژه‌های ساختمانی بررسی می‌شود."
      />
    </CategoryLayout>
  );
}
