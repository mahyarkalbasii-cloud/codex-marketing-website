import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { Building2, Clock3, Target } from "lucide-react";

import { ActiveSubcategoriesInStage } from "@/components/stage/ActiveSubcategoriesInStage";
import { DominantSaleStyle } from "@/components/stage/DominantSaleStyle";
import { RelatedStagesNav } from "@/components/stage/RelatedStagesNav";
import { RelevantCategories } from "@/components/stage/RelevantCategories";
import { AnswerBox } from "@/components/marketing/answer-box";
import { Breadcrumbs } from "@/components/marketing/breadcrumbs";
import { StructuredData } from "@/components/marketing/structured-data";
import {
  FinalCTA,
  GradientSection,
  SupplierFAQ,
} from "@/components/marketing/suppliers/shared";
import { buttonVariants } from "@/components/ui/button";
import { STAGE_COPY, getStageMetaDescription } from "@/data/stage-copy";
import {
  getActiveParentGroupsForStage,
  getActiveSubcategoriesForStage,
  getDominantSaleStyleForStage,
  getRelatedStages,
  getStageByRouteSlug,
  getStageStaticParams,
  type MainStageId,
} from "@/data/stage-insights";
import { absoluteUrl } from "@/lib/site-data";
import { getStageHref } from "@/lib/stage-routes";
import { cn } from "@/lib/utils";

type PageProps = {
  params: Promise<{ stageSlug: string }>;
};

const actionIcons = {
  immediate: Target,
  monitoring: Clock3,
  negotiation: Building2,
};

export function generateStaticParams() {
  return getStageStaticParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { stageSlug } = await params;
  const { stage } = getStageByRouteSlug(stageSlug);

  if (!stage) {
    return {};
  }

  const copy = STAGE_COPY[stage.id];

  return {
    title: { absolute: `${stage.faLabel} | مرحله ساخت در پرشین‌سازه` },
    description: getStageMetaDescription(stage.id),
    alternates: { canonical: getStageHref(stage) },
    openGraph: {
      title: copy.heroTitle,
      description: copy.heroSubtitle,
      url: absoluteUrl(getStageHref(stage)),
      locale: "fa_IR",
      type: "article",
    },
  };
}

export default async function StagePage({ params }: PageProps) {
  const { stageSlug } = await params;
  const { isAlias, stage } = getStageByRouteSlug(stageSlug);

  if (!stage) {
    notFound();
  }

  if (isAlias) {
    permanentRedirect(getStageHref(stage));
  }

  const copy = STAGE_COPY[stage.id];
  const activeSubcategories = getActiveSubcategoriesForStage(stage.id);
  const activeGroups = getActiveParentGroupsForStage(stage.id);
  const dominantSaleStyle = getDominantSaleStyleForStage(activeSubcategories);
  const relatedStages = getRelatedStages(stage.id as MainStageId);
  const canonicalUrl = absoluteUrl(getStageHref(stage));
  const faqItems = copy.faqItems.map((item) => ({
    answer: item.a,
    question: item.q,
  }));
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: copy.heroTitle,
    url: canonicalUrl,
    inLanguage: "fa-IR",
    about: {
      "@type": "Thing",
      name: stage.faLabel,
    },
  };
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `چطور در مرحله ${stage.faLabel} فروش را پیگیری کنیم؟`,
    step: [
      {
        "@type": "HowToStep",
        name: copy.threeActions.monitoring.title,
        text: copy.threeActions.monitoring.body,
      },
      {
        "@type": "HowToStep",
        name: copy.threeActions.negotiation.title,
        text: copy.threeActions.negotiation.body,
      },
      {
        "@type": "HowToStep",
        name: copy.threeActions.immediate.title,
        text: copy.threeActions.immediate.body,
      },
    ],
  };

  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 py-10 md:px-6 md:py-16">
      <StructuredData data={[faqSchema, webPageSchema, howToSchema]} />
      <Breadcrumbs
        items={[
          { label: "خانه", href: "/" },
          { label: "مراحل ساخت", href: "/stages/foundation/" },
          { label: stage.faLabel, href: getStageHref(stage) },
        ]}
      />

      <GradientSection>
        <p className="text-sm font-bold text-muted-foreground">صفحه مرحله ساخت</p>
        <h1 className="mt-3 text-4xl font-black md:text-6xl">
          {copy.heroTitle}
        </h1>
        <p className="mt-4 max-w-4xl leading-8 text-muted-foreground">
          {copy.heroSubtitle}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/#demo" className={cn(buttonVariants({ size: "lg" }))}>
            درخواست دمو
          </Link>
          <Link
            href="/pricing/"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            مشاهده پلن‌ها
          </Link>
        </div>
        <div
          className="mt-7"
          itemScope
          itemType="https://schema.org/Question"
        >
          <meta
            itemProp="name"
            content={`در مرحله ${stage.faLabel} چه اقدام فروشی باید انجام شود؟`}
          />
          <div
            itemProp="acceptedAnswer"
            itemScope
            itemType="https://schema.org/Answer"
          >
            <AnswerBox>
              <span itemProp="text">{copy.shortAnswer}</span>
            </AnswerBox>
          </div>
        </div>
      </GradientSection>

      <GradientSection>
        <h2 className="text-2xl font-black">تعریف مرحله</h2>
        <p className="mt-3 leading-8 text-muted-foreground">{copy.definition}</p>
      </GradientSection>

      <GradientSection>
        <h2 className="text-2xl font-black">پنجره فروش در این مرحله</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
          دیدن مرحله کافی نیست. تیم فروش باید بداند تماس بگیرد، پیامک بفرستد،
          رصد کند یا پیگیری بعدی بگذارد.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {(["monitoring", "negotiation", "immediate"] as const).map((key) => {
            const Icon = actionIcons[key];
            const action = copy.threeActions[key];

            return (
              <div
                key={key}
                className="rounded-3xl border border-white/70 bg-white/76 p-5 dark:border-zinc-800 dark:bg-zinc-900/76"
              >
                <Icon className="h-6 w-6 text-[#7a4a22] dark:text-zinc-200" />
                <h3 className="mt-5 text-xl font-bold">{action.title}</h3>
                <p className="mt-3 text-sm leading-8 text-muted-foreground">
                  {action.body}
                </p>
              </div>
            );
          })}
        </div>
      </GradientSection>

      <GradientSection>
        <h2 className="text-2xl font-black">زمان‌بندی مذاکره / خرید / اجرا</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            ["مذاکره", copy.timing.negotiation],
            ["خرید", copy.timing.purchase],
            ["اجرا", copy.timing.execution],
          ].map(([title, body]) => (
            <div
              key={title}
              className="rounded-3xl border border-white/70 bg-white/76 p-5 dark:border-zinc-800 dark:bg-zinc-900/76"
            >
              <h3 className="font-extrabold">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {body}
              </p>
            </div>
          ))}
        </div>
      </GradientSection>

      <ActiveSubcategoriesInStage
        groups={activeGroups}
        stageLabel={stage.faLabel}
        totalActive={activeSubcategories.length}
      />
      <DominantSaleStyle
        consultativeCount={dominantSaleStyle.consultativeCount}
        copy={copy}
        fastCount={dominantSaleStyle.fastCount}
        style={dominantSaleStyle.style}
      />
      <RelevantCategories groups={activeGroups} />
      <RelatedStagesNav stages={relatedStages} />

      <GradientSection>
        <h2 className="text-2xl font-black">پرشین‌سازه در این مرحله</h2>
        <ul className="mt-4 list-disc space-y-2 pr-6 leading-8 text-muted-foreground">
          <li>نمایش پروژه‌های فعال در همین مرحله ساخت</li>
          <li>فیلتر کردن پروژه‌ها بر اساس شهر، مرحله و تناسب دسته فروش</li>
          <li>ثبت نتیجه تماس و تعریف پیگیری بعدی در CRM</li>
        </ul>
      </GradientSection>

      <SupplierFAQ title={`FAQ مرحله ${stage.faLabel}`} items={faqItems} />
      <FinalCTA title={copy.ctaTitle} description={copy.ctaDescription} />
    </main>
  );
}
