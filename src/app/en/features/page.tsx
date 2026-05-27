import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Bot, ClipboardList, Filter, MapPinned } from "lucide-react";

import { AnswerBox } from "@/components/marketing/answer-box";
import { SectionHeader } from "@/components/marketing/section-header";
import { StructuredData } from "@/components/marketing/structured-data";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteEn } from "@/lib/site-data.en";
import { cn } from "@/lib/utils";

const canonicalPath = "/en/features/";
const pageTitle = "PersianSaze features";
const pageDescription =
  "Project map, construction-stage filters, project-sales CRM, targeted messaging, and AI-assisted sales decisions in PersianSaze.";

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: canonicalPath,
    languages: {
      fa: "/features/",
      en: canonicalPath,
    },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteEn.url}${canonicalPath}`,
    siteName: siteEn.name,
    locale: "en_US",
    type: "website",
  },
};

const features = [
  {
    id: "map",
    title: "Project map",
    description:
      "See construction projects on a spatial view instead of scattered files, and plan sales territories more clearly.",
    icon: MapPinned,
    points: ["City-level project view", "Sales territory planning", "Focus on target areas"],
  },
  {
    id: "filters",
    title: "Construction-stage filters",
    description:
      "Filter projects by construction stage, land size, city, and fit with your product or service.",
    icon: Filter,
    points: ["Stage as a sales signal", "Less wasted time", "More relevant projects"],
  },
  {
    id: "crm",
    title: "Project-sales CRM",
    description:
      "Turn selected projects into sales opportunities: calls, messages, outcomes, status, and next follow-up.",
    icon: ClipboardList,
    points: ["Record sales activity", "Follow-up reminders", "Sales beyond personal memory"],
  },
  {
    id: "ai",
    title: "AI sales assistant",
    description:
      "The AI layer helps users understand projects faster, assess opportunity priority, and choose the next action.",
    icon: Bot,
    points: ["Project summaries", "Suggested next action", "Opportunity prioritization"],
  },
];

export default function EnglishFeaturesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "PersianSaze features",
    itemListElement: features.map((feature, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: feature.title,
      url: `${siteEn.url}/en/features#${feature.id}`,
    })),
  };

  return (
    <main>
      <StructuredData data={schema} />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <SectionHeader
          eyebrow="Features"
          title="Tools that connect project data to sales action."
          description="PersianSaze is not meant to show more information for its own sake. Every feature should shorten the path from seeing an opportunity to acting on it."
        />
        <div className="mt-8">
          <AnswerBox title="Short answer">
            PersianSaze combines project mapping, sales filters, lightweight
            CRM, targeted messaging, and AI-assisted decision support so a
            construction project becomes a followable sales opportunity.
          </AnswerBox>
        </div>
      </section>

      <section className="border-y border-border bg-muted/35">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <Card
                id={feature.id}
                key={feature.id}
                className={cn(
                  "grid gap-8 p-6 md:grid-cols-[0.8fr_1.2fr] md:p-8",
                  index % 2 === 1 && "md:grid-cols-[1.2fr_0.8fr]",
                )}
              >
                <div className={cn(index % 2 === 1 && "md:order-2")}>
                  <Badge variant="outline">Feature {index + 1}</Badge>
                  <feature.icon className="mt-5 h-8 w-8 text-zinc-900 dark:text-zinc-100" />
                  <h2 className="mt-5 text-2xl font-bold md:text-3xl">
                    {feature.title}
                  </h2>
                  <p className="mt-4 text-sm leading-8 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
                <div className="grid content-center gap-3">
                  {feature.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-md border border-border bg-background px-4 py-3 text-sm font-medium"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <Card className="flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">After the features, review the pricing path.</h2>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              Plans are structured by sales field, project size, construction stages, and access duration.
            </p>
          </div>
          <Link href="/en/pricing" className={cn(buttonVariants())}>
            View pricing
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Card>
      </section>
    </main>
  );
}
