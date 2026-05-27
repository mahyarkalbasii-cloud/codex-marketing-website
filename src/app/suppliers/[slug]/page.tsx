import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AnswerBox } from "@/components/marketing/answer-box";
import { StructuredData } from "@/components/marketing/structured-data";
import {
  FinalCTA,
  GradientSection,
  SupplierFAQ,
} from "@/components/marketing/suppliers/shared";
import { absoluteUrl } from "@/lib/site-data";
import {
  getConstructionStages,
  getParentCategories,
  getParentCategoryBySlug,
  salesMotions,
} from "@/lib/supplier-pages-data";

export function generateStaticParams() {
  return getParentCategories().map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getParentCategoryBySlug(slug);

  if (!category) {
    return {};
  }

  return {
    title: `${category.name} | تأمین‌کنندگان ساختمانی`,
    description: category.description,
    alternates: { canonical: `/suppliers/${category.slug}` },
    openGraph: {
      title: category.title,
      description: category.description,
      url: absoluteUrl(`/suppliers/${category.slug}`),
      locale: "fa_IR",
      type: "article",
    },
  };
}

export default async function SupplierCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getParentCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const relatedStages = getConstructionStages().filter((stage) =>
    category.stageSlugs.includes(stage.slug),
  );
  const motion = salesMotions[category.saleType];
  const faqs = [
    {
      question: `بهترین زمان تماس برای ${category.name} چه زمانی است؟`,
      answer: category.timingHint,
    },
    {
      question: "اولویت‌بندی پروژه‌ها چگونه انجام شود؟",
      answer:
        "پروژه‌ها را با سه شاخص مرحله ساخت، مقیاس پروژه و کیفیت مسیر ارتباطی امتیازدهی کنید و پیگیری بعدی را در CRM ثبت کنید.",
    },
    {
      question: "پرشین‌سازه برای این دسته فقط شماره تماس می‌دهد؟",
      answer:
        "خیر. ارزش اصلی در ترکیب داده پروژه، مرحله ساخت، موقعیت، فیلتر، CRM و پیگیری زمان‌مند است؛ شماره تماس فقط بخشی از مسیر اقدام است.",
    },
  ];
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "خانه", item: absoluteUrl("/") },
      {
        "@type": "ListItem",
        position: 2,
        name: "تأمین‌کنندگان",
        item: absoluteUrl("/suppliers"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: category.name,
        item: absoluteUrl(`/suppliers/${category.slug}`),
      },
    ],
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

  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 py-10 md:px-6 md:py-16">
      <StructuredData data={breadcrumb} />
      <StructuredData data={faqSchema} />

      <GradientSection>
        <p className="text-sm font-bold text-muted-foreground">{motion.name}</p>
        <h1 className="mt-3 text-4xl font-black md:text-6xl">{category.title}</h1>
        <p className="mt-4 max-w-4xl leading-8 text-muted-foreground">
          {category.description}
        </p>
        <div className="mt-6">
          <AnswerBox>{category.answer}</AnswerBox>
        </div>
      </GradientSection>

      <GradientSection>
        <h2 className="text-2xl font-black">نمونه محصولات و کاربردها</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {category.examples.map((example) => (
            <span
              key={example}
              className="rounded-full border border-white/70 bg-white/75 px-4 py-2 text-sm font-semibold"
            >
              {example}
            </span>
          ))}
        </div>
      </GradientSection>

      <GradientSection>
        <h2 className="text-2xl font-black">بینش زمان‌بندی این دسته</h2>
        <p className="mt-3 leading-8 text-muted-foreground">{category.timingHint}</p>
      </GradientSection>

      <GradientSection>
        <h2 className="text-2xl font-black">پرشین‌سازه چطور کمک می‌کند؟</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {[
            "شناسایی پروژه‌های فعال و مرتبط",
            "اولویت‌بندی بر اساس مرحله ساخت",
            "ثبت تاریخچه تماس و پیامک در CRM",
            "تعریف پیگیری بعدی تا زمان مناسب خرید",
          ].map((item) => (
            <div key={item} className="rounded-3xl border bg-white/70 p-4">
              {item}
            </div>
          ))}
        </div>
      </GradientSection>

      <GradientSection>
        <h2 className="text-2xl font-black">مسیر فروش مرتبط</h2>
        <p className="mt-2 text-sm leading-7 text-muted-foreground">
          {motion.description}
        </p>
        <Link
          href={`/suppliers/motions/${category.saleType}`}
          className="mt-4 inline-flex items-center gap-2 text-sm font-bold"
        >
          مشاهده مسیر فروش این دسته
        </Link>
      </GradientSection>

      <GradientSection>
        <h2 className="text-2xl font-black">مراحل ساخت مرتبط</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {relatedStages.map((stage) => (
            <Link
              className="rounded-full border border-white/70 bg-white/70 px-3 py-2 text-sm"
              key={stage.slug}
              href={`/stages/${stage.slug}`}
            >
              {stage.name}
            </Link>
          ))}
        </div>
      </GradientSection>

      <SupplierFAQ items={faqs} />
      <FinalCTA
        title={`برای رشد فروش ${category.name} آماده‌اید؟`}
        description="با یک جلسه دمو، پنجره زمانی و مسیر پیگیری اختصاصی همین دسته را طراحی کنید."
      />
    </main>
  );
}
