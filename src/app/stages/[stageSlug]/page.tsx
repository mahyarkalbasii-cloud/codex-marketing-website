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
  getCategoriesByStageSlug,
  getConstructionStageBySlug,
  getConstructionStages,
} from "@/lib/supplier-pages-data";

export function generateStaticParams() {
  return getConstructionStages().map((stage) => ({ stageSlug: stage.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ stageSlug: string }>;
}): Promise<Metadata> {
  const { stageSlug } = await params;
  const stage = getConstructionStageBySlug(stageSlug);

  if (!stage) {
    return {};
  }

  return {
    title: `${stage.name} | مرحله ساخت`,
    description: stage.description,
    alternates: { canonical: `/stages/${stage.slug}` },
    openGraph: {
      title: stage.title,
      description: stage.description,
      url: absoluteUrl(`/stages/${stage.slug}`),
      locale: "fa_IR",
      type: "article",
    },
  };
}

export default async function StagePage({
  params,
}: {
  params: Promise<{ stageSlug: string }>;
}) {
  const { stageSlug } = await params;
  const stages = getConstructionStages();
  const stage = getConstructionStageBySlug(stageSlug);

  if (!stage) {
    notFound();
  }

  const index = stages.findIndex((item) => item.slug === stage.slug);
  const previousStage = stages[index - 1];
  const nextStage = stages[index + 1];
  const relatedCategories = getCategoriesByStageSlug(stage.slug).slice(0, 6);
  const faqs = [
    {
      question: "در این مرحله باید مذاکره کنیم یا فقط رصد؟",
      answer:
        "بسته به دسته محصول، این مرحله می‌تواند زمان مذاکره، خرید یا اجرای پیگیری باشد. مهم این است که مرحله ساخت را به اقدام فروش مشخص تبدیل کنید.",
    },
    {
      question: "خرید در این مرحله رخ می‌دهد؟",
      answer:
        "برای برخی دسته‌ها بله، اما برای بسیاری از فروشندگان این مرحله بیشتر نقطه آماده‌سازی تصمیم خرید یا پیگیری جدی است.",
    },
    {
      question: "پرشین‌سازه در این مرحله چه کمکی می‌کند؟",
      answer:
        "پرشین‌سازه با نمایش پروژه‌های هم‌مرحله، فیلتر، ثبت فرصت و یادآوری پیگیری کمک می‌کند تیم فروش دیر یا زود وارد نشود.",
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
        name: stage.name,
        item: absoluteUrl(`/stages/${stage.slug}`),
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
        <p className="text-sm font-bold text-muted-foreground">مرحله ساخت</p>
        <h1 className="mt-3 text-4xl font-black md:text-6xl">{stage.title}</h1>
        <p className="mt-4 max-w-4xl leading-8 text-muted-foreground">
          {stage.description}
        </p>
        <div className="mt-6">
          <AnswerBox>
            مرحله {stage.name} باید به یک اقدام فروش روشن تبدیل شود: مذاکره، خرید
            یا اجرای پیگیری.
          </AnswerBox>
        </div>
      </GradientSection>

      <GradientSection>
        <h2 className="text-2xl font-black">تعریف مرحله</h2>
        <p className="mt-3 leading-8 text-muted-foreground">{stage.definition}</p>
      </GradientSection>

      <GradientSection>
        <h2 className="text-2xl font-black">زمان‌بندی مذاکره / خرید / اجرا</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border bg-white/70 p-4">
            <h3 className="font-extrabold">مذاکره</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              {stage.timing.negotiation}
            </p>
          </div>
          <div className="rounded-3xl border bg-white/70 p-4">
            <h3 className="font-extrabold">خرید</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              {stage.timing.purchase}
            </p>
          </div>
          <div className="rounded-3xl border bg-white/70 p-4">
            <h3 className="font-extrabold">اجرا</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              {stage.timing.execution}
            </p>
          </div>
        </div>
      </GradientSection>

      <GradientSection>
        <h2 className="text-2xl font-black">دسته‌های مرتبط</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {relatedCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/suppliers/${category.slug}`}
              className="rounded-3xl border bg-white/70 p-4"
            >
              <h3 className="font-bold">{category.name}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </GradientSection>

      <GradientSection>
        <h2 className="text-2xl font-black">مرحله قبل / بعد</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {previousStage ? (
            <Link href={`/stages/${previousStage.slug}`} className="rounded-full border px-4 py-2 text-sm">
              مرحله قبل: {previousStage.name}
            </Link>
          ) : null}
          {nextStage ? (
            <Link href={`/stages/${nextStage.slug}`} className="rounded-full border px-4 py-2 text-sm">
              مرحله بعد: {nextStage.name}
            </Link>
          ) : null}
        </div>
      </GradientSection>

      <GradientSection>
        <h2 className="text-2xl font-black">پرشین‌سازه در این مرحله</h2>
        <ul className="mt-4 list-disc space-y-2 pr-6 leading-8 text-muted-foreground">
          <li>نمایش پروژه‌های فعال در همین مرحله ساخت</li>
          <li>فیلتر کردن پروژه‌ها بر اساس شهر، مرحله و تناسب دسته فروش</li>
          <li>ثبت نتیجه تماس و تعریف پیگیری بعدی در CRM</li>
        </ul>
      </GradientSection>

      <SupplierFAQ title="FAQ مرحله" items={faqs} />
      <FinalCTA
        title="این مرحله را به فروش تبدیل کنید"
        description="با داده به‌روز پروژه و پیگیری ساخت‌یافته، تصمیم‌گیری تیم فروش را سریع‌تر کنید."
      />
    </main>
  );
}
