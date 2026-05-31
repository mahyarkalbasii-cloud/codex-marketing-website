import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { CategorySection } from "@/components/category/CategorySection";
import { Breadcrumbs } from "@/components/marketing/breadcrumbs";
import { StructuredData } from "@/components/marketing/structured-data";
import { STAGES } from "@/data/stages";
import { getStagePageContent } from "@/data/stage-copy";
import { absoluteUrl } from "@/lib/site-data";
import { getStageHref } from "@/lib/stage-routes";

const canonicalPath = "/stages/";
const pageTitle = "مراحل ساخت در پرشین‌سازه";
const faNumber = new Intl.NumberFormat("fa-IR");
const mainStages = STAGES.filter((stage) => stage.isMain);
const pageDescription = `فهرست ${faNumber.format(
  mainStages.length,
)} مرحله اصلی ساخت برای بررسی زمان مناسب مذاکره، خرید و اجرای هر زیرگروه ساختمانی.`;

export function generateMetadata(): Metadata {
  return {
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical: canonicalPath },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: absoluteUrl(canonicalPath),
      locale: "fa_IR",
      type: "website",
    },
  };
}

export default function StagesIndexPage() {
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: pageTitle,
    description: pageDescription,
    url: absoluteUrl(canonicalPath),
    inLanguage: "fa-IR",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: mainStages.map((stage, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: stage.faLabel,
        url: absoluteUrl(getStageHref(stage)),
      })),
    },
  };

  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 py-10 md:px-6 md:py-16">
      <StructuredData data={collectionPageSchema} />
      <Breadcrumbs
        items={[
          { label: "خانه", href: "/" },
          { label: "مراحل ساخت", href: canonicalPath },
        ]}
      />
      <CategorySection>
        <span className="category-badge mb-3">مراحل ساخت</span>
        <h1 className="text-3xl font-black md:text-5xl">{pageTitle}</h1>
        <p className="mt-4 max-w-3xl text-sm leading-8 text-muted-foreground md:text-base">
          {pageDescription}
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {mainStages.map((stage, index) => (
            <Link
              key={stage.id}
              href={getStageHref(stage)}
              className="category-card flex h-full flex-col p-5 transition hover:-translate-y-0.5 hover:bg-white"
            >
              <span className="category-badge mb-4">
                مرحله {faNumber.format(index + 1)}
              </span>
              <h2 className="text-xl font-black leading-8">{stage.faLabel}</h2>
              <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground">
                {getStagePageContent(stage).heroSubtitle}
              </p>
              <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-[#7a4a22] dark:text-zinc-200">
                مشاهده مرحله
                <ArrowLeft className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </CategorySection>
    </main>
  );
}
