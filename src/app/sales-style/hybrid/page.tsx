import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Breadcrumbs } from "@/components/marketing/breadcrumbs";
import { StructuredData } from "@/components/marketing/structured-data";
import {
  FinalCTA,
  GradientSection,
  SupplierFAQ,
} from "@/components/marketing/suppliers/shared";
import { Card } from "@/components/ui/card";
import { getCategoriesBySaleType, salesMotions } from "@/lib/supplier-pages-data";
import { routeOgImage } from "@/lib/og-metadata";
import { absoluteUrl } from "@/lib/site-data";

const canonicalPath = "/sales-style/hybrid/";
const motion = salesMotions["hybrid-sales"];
const pageDescription =
  "فروش ترکیبی برای تیم‌هایی است که هم فرصت‌های سریع و هم پیگیری‌های بلندمدت پروژه‌ای را در یک مسیر فروش ساختمانی مدیریت می‌کنند.";

export const metadata: Metadata = {
  title: { absolute: "فروش ترکیبی در ساختمان | پرشین‌سازه" },
  description: pageDescription,
  alternates: {
    canonical: canonicalPath,
    types: {
      "text/html": [
        { url: "/sales-style/fast/", title: "فروش سریع و تراکنشی" },
        { url: "/sales-style/consultative/", title: "فروش مشاوره‌ای" },
      ],
    },
  },
  openGraph: {
    title: "فروش ترکیبی در ساختمان | پرشین‌سازه",
    description: pageDescription,
    url: absoluteUrl(canonicalPath),
    locale: "fa_IR",
    type: "article",
    images: routeOgImage(canonicalPath, motion.title),
  },
};

const playbook = [
  {
    title: "تفکیک فرصت‌ها در CRM",
    description:
      "هر فرصت را از همان ابتدا با cadence سریع یا مشاوره‌ای ثبت کنید تا تیم فروش بداند کجا باید فوری تماس بگیرد و کجا رابطه را مرحله‌ای جلو ببرد.",
  },
  {
    title: "پیام فروش دوحالته",
    description:
      "برای خریدهای نزدیک، پیام کوتاه و قابل اقدام لازم است؛ برای تصمیم‌های فنی‌تر، شواهد، نمونه‌کار و گفت‌وگوی مشاوره‌ای وزن بیشتری دارد.",
  },
  {
    title: "KPI جدا برای هر مسیر",
    description:
      "سرعت تماس و پیگیری ۴۸ ساعته را برای فرصت‌های سریع بسنجید؛ پیشرفت مرحله، جلسه موثر و نرخ بازگشت فرصت را برای فروش مشاوره‌ای دنبال کنید.",
  },
];

const faqs = [
  {
    question: "فروش ترکیبی در پروژه ساختمانی یعنی چه؟",
    answer:
      "یعنی تیم فروش برای بخشی از فرصت‌ها سریع و تراکنشی عمل می‌کند و برای بخشی دیگر، رابطه، اعتمادسازی و پیگیری بلندمدت را مدیریت می‌کند.",
  },
  {
    question: "چه تیم‌هایی به فروش ترکیبی نیاز دارند؟",
    answer:
      "تیم‌هایی که سبد محصول متنوع دارند؛ مثلا هم کالای مصرفی یا قابل قیمت‌دهی سریع می‌فروشند، هم محصول یا خدمت فنی‌تر که به مذاکره و اعتمادسازی نیاز دارد.",
  },
  {
    question: "چطور پرشین‌سازه به فروش ترکیبی کمک می‌کند؟",
    answer:
      "با داده پروژه، مرحله ساخت، دسته‌بندی فرصت و CRM کمک می‌کند مسیر هر فرصت مشخص شود و پیگیری سریع یا مشاوره‌ای در همان چارچوب ثبت شود.",
  },
];

export default function HybridSalesStylePage() {
  const categories = getCategoriesBySaleType("hybrid-sales");
  const canonicalUrl = absoluteUrl(canonicalPath);
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "دسته‌های مرتبط با فروش ترکیبی",
    itemListElement: categories.map((category, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: category.name,
      url: `${canonicalUrl}#cat-${category.slug}`,
    })),
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: motion.title,
    url: canonicalUrl,
    inLanguage: "fa-IR",
    about: {
      "@type": "Thing",
      name: motion.name,
    },
  };

  return (
    <main className="mx-auto max-w-6xl space-y-8 px-4 py-12 md:px-6">
      <StructuredData data={[faqSchema, webPageSchema, itemListSchema]} />
      <Breadcrumbs
        items={[
          { label: "خانه", href: "/" },
          { label: "نوع فروش", href: "/sales-style/fast/" },
          { label: motion.name, href: canonicalPath },
        ]}
      />

      <GradientSection>
        <p className="text-sm font-bold text-muted-foreground">نوع فروش</p>
        <h1 className="mt-3 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
          {motion.title}
        </h1>
        <p className="mt-5 max-w-4xl leading-8 text-muted-foreground md:text-lg">
          {motion.description}
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link href="/contact/" className="inline-flex items-center gap-2 text-sm font-bold">
            درخواست دمو
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <Link
            href="#hybrid-categories"
            className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground"
          >
            دیدن دسته‌های مرتبط
          </Link>
        </div>
      </GradientSection>

      <GradientSection>
        <h2 className="text-2xl font-black">فروش ترکیبی در عمل</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {playbook.map((item) => (
            <Card key={item.title} className="rounded-3xl bg-white/80 p-5">
              <h3 className="text-lg font-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </GradientSection>

      <GradientSection id="hybrid-categories">
        <h2 className="text-2xl font-black">دسته‌های مرتبط با فروش ترکیبی</h2>
        <p className="mt-3 max-w-3xl text-sm leading-8 text-muted-foreground">
          این دسته‌ها معمولاً هم فرصت‌های نزدیک به خرید دارند و هم فرصت‌هایی که
          به مذاکره، اعتمادسازی یا پیگیری مرحله‌ای نیاز پیدا می‌کنند.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {categories.map((category) => (
            <Link
              id={`cat-${category.slug}`}
              key={category.slug}
              href={`/suppliers/${category.slug}/`}
              className="rounded-3xl border bg-white/70 p-4 transition hover:-translate-y-0.5 hover:bg-white"
            >
              <h3 className="font-bold">{category.name}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </GradientSection>

      <SupplierFAQ title="سوالات پرتکرار فروش ترکیبی" items={faqs} />
      <FinalCTA
        title="مسیر فروش ترکیبی را از حالت حدسی خارج کنید"
        description="در دمو ببینید چطور فرصت‌های سریع و مشاوره‌ای را با داده پروژه، مرحله ساخت و CRM در یک مسیر فروش مدیریت می‌کنید."
        primaryHref="/contact/"
      />
    </main>
  );
}
