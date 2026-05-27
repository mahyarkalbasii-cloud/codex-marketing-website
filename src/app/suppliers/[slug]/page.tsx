import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CTABanner } from "@/components/category/CTABanner";
import { FAQ } from "@/components/category/FAQ";
import { Hero } from "@/components/category/Hero";
import { HowWeHelp } from "@/components/category/HowWeHelp";
import { RelatedStages } from "@/components/category/RelatedStages";
import { SalesPathLink } from "@/components/category/SalesPathLink";
import { ShortAnswer } from "@/components/category/ShortAnswer";
import { StrategicAdvice } from "@/components/category/StrategicAdvice";
import { SubcategoryGrid } from "@/components/category/SubcategoryGrid";
import { TimingInsight } from "@/components/category/TimingInsight";
import { Breadcrumbs } from "@/components/marketing/breadcrumbs";
import { StructuredData } from "@/components/marketing/structured-data";
import {
  getFaqItemsForCategory,
  getMostCommonBuyStage,
  getRelatedBuyStages,
  getSaleMotionSummary,
  getSaleTypeSplit,
  getStrategicAdviceHighlights,
} from "@/data/category-insights";
import { CATEGORY_COPY } from "@/data/category-copy";
import { CATEGORIES } from "@/data/categories";
import { getCategoryBySlug } from "@/data/queries";
import type { Category } from "@/data/types";
import { CategoryLayout } from "@/layouts/CategoryLayout";
import { absoluteUrl } from "@/lib/site-data";

function getVisibleCategory(slug: string): Category | undefined {
  const category = getCategoryBySlug(slug);

  if (!category || category.excludeFromPages) {
    return undefined;
  }

  return category;
}

function truncateDescription(text: string, limit = 155) {
  return text.length <= limit ? text : `${text.slice(0, limit - 1).trim()}…`;
}

export function generateStaticParams() {
  return CATEGORIES.filter((category) => !category.excludeFromPages).map(
    (category) => ({ slug: category.slug }),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getVisibleCategory(slug);

  if (!category) {
    return {};
  }

  const copy = CATEGORY_COPY[category.slug];
  const description = truncateDescription(copy.shortAnswer);
  const canonicalPath = `/suppliers/${category.slug}/`;

  return {
    title: `${category.faTitle} | فروش پروژه‌محور با پرشین‌سازه`,
    description,
    alternates: { canonical: canonicalPath },
    openGraph: {
      title: `${category.faTitle} برای پروژه‌های در حال ساخت`,
      description,
      url: absoluteUrl(canonicalPath),
      locale: "fa_IR",
      type: "article",
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getVisibleCategory(slug);

  if (!category) {
    notFound();
  }

  const copy = CATEGORY_COPY[category.slug];
  const saleMotion = getSaleMotionSummary(category);
  const split = getSaleTypeSplit(category);
  const timingStage = getMostCommonBuyStage(category);
  const relatedStages = getRelatedBuyStages(category);
  const adviceHighlights = getStrategicAdviceHighlights(category);
  const faqItems = getFaqItemsForCategory(category, copy.faqItems);
  const shortAnswerQuestion = `چه زمانی پرشین‌سازه برای فروشندگان ${category.faTitle} ارزشمند است؟`;
  const canonicalUrl = absoluteUrl(`/suppliers/${category.slug}/`);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${category.faTitle} برای پروژه‌های در حال ساخت`,
    url: canonicalUrl,
    inLanguage: "fa-IR",
    about: {
      "@type": "Thing",
      name: category.faTitle,
    },
  };

  return (
    <CategoryLayout>
      <StructuredData data={[faqSchema, webPageSchema]} />
      <Breadcrumbs
        items={[
          { label: "خانه", href: "/" },
          { label: "زمینه‌های کاری", href: "/suppliers/" },
          {
            label: category.faTitle,
            href: `/suppliers/${category.slug}/`,
          },
        ]}
      />
      <Hero category={category} saleMotion={saleMotion} subtitle={copy.heroSubtitle} />
      <ShortAnswer question={shortAnswerQuestion} answer={copy.shortAnswer} />
      <SubcategoryGrid split={split} />
      <TimingInsight
        category={category}
        stage={timingStage}
        override={copy.timingInsight}
      />
      <HowWeHelp />
      <SalesPathLink motion={saleMotion.motion} />
      <RelatedStages stages={relatedStages} />
      <StrategicAdvice items={adviceHighlights} />
      <FAQ items={faqItems} />
      <CTABanner category={category} />
    </CategoryLayout>
  );
}
