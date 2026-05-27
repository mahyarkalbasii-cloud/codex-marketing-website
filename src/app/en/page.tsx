import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  CheckCircle2,
  Clock3,
  Database,
  Layers,
  MapPin,
  MessageSquareText,
  Search,
  Sparkles,
} from "lucide-react";

import { HeroMapVisual } from "@/components/hero/HeroMapVisual";
import { AudienceStageGuide } from "@/components/marketing/audience-stage-guide";
import { DemoRequestForm } from "@/components/marketing/demo-request-form";
import { FaqList } from "@/components/marketing/faq-list";
import { PricingSection } from "@/components/marketing/pricing-section";
import { SectionHeader } from "@/components/marketing/section-header";
import { StructuredData } from "@/components/marketing/structured-data";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { faqsEn, siteEn } from "@/lib/site-data.en";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    absolute: "PersianSaze | Find active construction projects earlier",
  },
  description:
    "PersianSaze helps construction suppliers discover active projects, filter by construction stage, and follow up through a project-based sales workflow.",
  alternates: {
    canonical: "/en/",
    languages: {
      fa: "/",
      en: "/en/",
    },
  },
  openGraph: {
    title: "PersianSaze | Project-based sales for construction suppliers",
    description:
      "Project map, construction-stage filters, and sales follow-up for construction suppliers.",
    url: `${siteEn.url}/en`,
    siteName: siteEn.name,
    locale: "en_US",
    type: "website",
  },
};

const heroProofCards = [
  {
    value: "3 cities",
    label: "Tehran, Karaj, and Lavasan",
    icon: MapPin,
  },
  {
    value: "8 stages",
    label: "From excavation to handover",
    icon: Layers,
  },
  {
    value: "Follow-up",
    label: "Calls, messages, and reminders",
    icon: MessageSquareText,
  },
] as const;

const problemRows = [
  ["Scattered projects", "Finding the right opportunity takes too long.", Search],
  ["Unclear timing", "The stage and contact window are hard to judge.", Clock3],
  ["Loose follow-up", "Opportunities get lost after the first call.", BarChart3],
] as const;

const solutionCards = [
  {
    title: "Updated construction-project data",
    body: "Field-collected project records give sales teams a clearer view of location, construction stage, activity status, imagery, and contact context.",
    icon: Database,
  },
  {
    title: "Sales tools built around projects",
    body: "Map, filters, saved opportunities, CRM status, and messaging turn raw project data into a repeatable sales workflow.",
    icon: MessageSquareText,
  },
  {
    title: "AI-assisted prioritization",
    body: "The AI layer helps summarize projects, rank opportunities, and suggest the next sales action without replacing sales judgment.",
    icon: Sparkles,
  },
] as const;

const salesFlow = [
  {
    title: "Discover",
    body: "Find projects that match your area, construction stage, scale, and sales category.",
  },
  {
    title: "Prioritize",
    body: "Separate active, relevant, near-window opportunities from raw leads.",
  },
  {
    title: "Contact",
    body: "Start the conversation with project context instead of a generic pitch.",
  },
  {
    title: "Follow up",
    body: "Keep next actions, reminders, and outcomes visible until conversion.",
  },
] as const;

function ProblemSection() {
  return (
    <section
      id="problem"
      className="section-gradient section-gradient-problem border-b border-[#e4d8c8] dark:border-zinc-800"
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-[.9fr_1.1fr] md:items-center md:px-6 md:py-20">
        <div>
          <h2 className="text-3xl font-bold leading-tight md:text-5xl">
            Construction sales is not just about having a good product.
          </h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg md:leading-9">
            Projects are scattered, market information ages quickly, and the
            right contact window is easy to miss. PersianSaze gives sales teams
            the project context they need before calling.
          </p>
        </div>
        <Card className="grid gap-3 p-4 md:grid-cols-3">
          {problemRows.map(([title, body, Icon]) => (
            <div
              key={title}
              className="rounded-2xl border border-[#e4d8c8] bg-[#fbf6ed] p-4 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#2a241d] text-[#fffaf1] dark:bg-white dark:text-zinc-950">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {body}
              </p>
            </div>
          ))}
        </Card>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section
      id="solution"
      className="section-gradient section-gradient-solution border-b border-[#e4d8c8] dark:border-zinc-800"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
        <SectionHeader
          eyebrow="Solution"
          title="A single workflow from project discovery to sales follow-up."
          description="PersianSaze connects field data, project context, and sales operations so suppliers can act before the opportunity cools down."
        />
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {solutionCards.map((card) => (
            <Card key={card.title} className="p-6">
              <card.icon className="h-7 w-7 text-[#cc785c]" />
              <h3 className="mt-5 text-xl font-bold">{card.title}</h3>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">
                {card.body}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductSection() {
  return (
    <section
      id="product"
      className="section-gradient section-gradient-product border-b border-[#e4d8c8] dark:border-zinc-800"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
        <SectionHeader
          eyebrow="Product"
          title="See projects on a map, filter the right stage, and keep the next action alive."
          description="The product is designed for repeated sales use, not for passive browsing."
        />
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {[
            ["Map view", "Understand where active opportunities are concentrated."],
            ["Stage filters", "Use construction stage as a practical sales signal."],
            ["Project CRM", "Track calls, messages, status, and next follow-up."],
          ].map(([title, body]) => (
            <Card key={title} className="p-6">
              <CheckCircle2 className="h-6 w-6 text-[#cc785c]" />
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">
                {body}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="section-gradient section-gradient-how border-b border-[#e4d8c8] dark:border-zinc-800"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
        <SectionHeader
          eyebrow="How it works"
          title="Project-based sales has a clear four-step path."
          description="From finding the opportunity to keeping the follow-up rhythm visible."
        />
        <ol className="mt-9 grid gap-4 md:grid-cols-4">
          {salesFlow.map((step, index) => (
            <li
              key={step.title}
              className="rounded-[1.35rem] border border-[#e4d8c8] bg-[#fffaf1]/82 p-5 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#2a241d] text-sm font-black text-[#fffaf1] dark:bg-white dark:text-zinc-950">
                {index + 1}
              </span>
              <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function DemoSection() {
  return (
    <section id="demo" className="section-gradient section-gradient-demo relative overflow-hidden border-t border-[#e4d8c8] dark:border-zinc-800">
      <div className="absolute inset-0 map-parcel-pattern opacity-10" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 pb-32 pt-12 md:px-6 md:py-16">
        <div className="overflow-hidden rounded-[1.6rem] border border-[#e4d8c8] bg-[#fffaf1]/90 shadow-xl shadow-[#2a241d]/[0.07] dark:border-zinc-800 dark:bg-zinc-900/90">
          <div className="grid gap-8 p-7 md:grid-cols-[1fr_.72fr] md:p-10">
            <div>
              <h2 className="text-3xl font-semibold md:text-5xl">
                Request a demo to see sample project data.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-600 md:text-lg dark:text-zinc-400">
                In the demo, we walk through project discovery, filters,
                construction-stage signals, and the follow-up workflow.
              </p>
            </div>
            <div className="rounded-[1.4rem] border border-[#e4d8c8] bg-[#fbf6ed] p-6 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="text-sm text-zinc-500">Sales call</div>
              <div className="mt-3 text-2xl font-bold" dir="ltr">
                {siteEn.phones[0]}
              </div>
              <div className="mt-2 text-sm text-zinc-500">
                {siteEn.salesExpert} | ext. {siteEn.extension}
              </div>
              <DemoRequestForm locale="en" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function EnglishHome() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsEn.slice(0, 6).map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="behance-background home-sections min-h-screen text-[#2a241d] antialiased dark:bg-zinc-950 dark:text-white">
      <StructuredData data={faqSchema} />

      <section id="hero" className="hero-surface relative overflow-hidden border-b border-[#e4d8c8] dark:border-zinc-800">
        <div className="pointer-events-none absolute inset-0 map-parcel-pattern opacity-30" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-5 pb-12 pt-10 md:px-6 md:pb-14 md:pt-12 lg:pb-16">
          <div className="grid gap-8 lg:grid-cols-[.96fr_1.04fr] lg:items-center">
            <div className="relative hidden md:block">
              <HeroMapVisual locale="en" />
            </div>

            <div className="relative max-w-4xl space-y-5 text-center lg:ml-auto lg:text-left">
              <h1 className="hero-title mx-auto max-w-3xl text-[2rem] font-bold leading-[1.18] text-zinc-950 sm:text-4xl md:text-5xl xl:text-[3.45rem] dark:text-white">
                Find active construction projects earlier.
              </h1>
              <p className="mx-auto max-w-2xl text-base leading-9 text-zinc-600 md:text-lg lg:mx-0 dark:text-zinc-400">
                In construction products and services, successful B2B sales
                start with reaching the right project at the right time.
                PersianSaze collects and structures active projects so suppliers
                can evaluate and follow up with more clarity.
              </p>
              <div className="mx-auto flex w-full max-w-[21rem] flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center lg:mx-0 lg:justify-start">
                <Link href="#demo" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}>
                  View product
                  <ArrowLeft className="h-4 w-4" />
                </Link>
                <Link
                  href="#solution"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto")}
                >
                  Why PersianSaze?
                </Link>
              </div>
              <div className="mx-auto hidden w-full max-w-xl grid-cols-1 gap-3 pt-2 sm:grid sm:grid-cols-3 lg:mx-0">
                {heroProofCards.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-[#D8C9B6] bg-[#FFFAF1]/95 p-4 text-center shadow-sm shadow-[#2A241D]/[0.05] dark:border-zinc-800 dark:bg-zinc-900"
                  >
                    <span className="mx-auto mb-2 grid h-11 w-11 place-items-center rounded-[14px] bg-[#1B1916] text-[#CC785C]">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <div className="font-bold">{item.value}</div>
                    <div className="mt-1 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="md:hidden">
                <HeroMapVisual compact locale="en" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProblemSection />
      <SolutionSection />
      <ProductSection />
      <HowItWorksSection />

      <section id="audiences" className="section-gradient section-gradient-audience relative overflow-hidden border-y border-[#e4d8c8] dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
          <SectionHeader
            eyebrow="Audience"
            title="Which construction suppliers is this built for?"
            description="PersianSaze is for suppliers whose project-based sales depend on construction-stage awareness, timing, and consistent follow-up."
          />
          <AudienceStageGuide locale="en" />
        </div>
      </section>

      <PricingSection locale="en" />

      <section id="faq" className="section-gradient section-gradient-faq relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
          <SectionHeader
            eyebrow="FAQ"
            title="Questions that should be clear before buying."
            description="Short answers to the questions suppliers usually ask before choosing a PersianSaze plan."
            className="mx-auto max-w-2xl text-center"
          />
          <div className="mx-auto mt-8 max-w-4xl">
            <FaqList items={faqsEn} limit={6} />
          </div>
        </div>
      </section>

      <DemoSection />
    </main>
  );
}
