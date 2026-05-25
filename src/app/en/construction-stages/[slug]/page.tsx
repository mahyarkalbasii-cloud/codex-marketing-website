import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Building2, Clock3, Target } from "lucide-react";

import { AnswerBox } from "@/components/marketing/answer-box";
import { SectionHeader } from "@/components/marketing/section-header";
import { StructuredData } from "@/components/marketing/structured-data";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteEn, stagesEn, suppliersEn } from "@/lib/site-data.en";
import { cn } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return stagesEn.map((stage) => ({ slug: stage.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const stage = stagesEn.find((item) => item.slug === slug);

  if (!stage) {
    return {};
  }

  return {
    title: {
      absolute: stage.title,
    },
    description: stage.description,
    alternates: {
      canonical: `/en/construction-stages/${stage.slug}`,
      languages: {
        fa: `/construction-stages/${stage.slug}`,
        en: `/en/construction-stages/${stage.slug}`,
      },
    },
    openGraph: {
      title: stage.title,
      description: stage.description,
      url: `${siteEn.url}/en/construction-stages/${stage.slug}`,
      locale: "en_US",
      type: "article",
    },
  };
}

export default async function EnglishStagePage({ params }: PageProps) {
  const { slug } = await params;
  const stage = stagesEn.find((item) => item.slug === slug);

  if (!stage) {
    notFound();
  }

  const relatedSuppliers = suppliersEn.filter((supplier) =>
    supplier.stages.includes(stage.name),
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: stage.title,
    description: stage.description,
    url: `${siteEn.url}/en/construction-stages/${stage.slug}`,
    inLanguage: "en-US",
  };

  return (
    <main>
      <StructuredData data={schema} />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <Badge variant="signal">Construction-stage page</Badge>
        <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
          {stage.title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-9 text-muted-foreground">
          {stage.description}
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link href="/en/#demo" className={cn(buttonVariants({ size: "lg" }))}>
            Request demo
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <Link
            href="/en/pricing"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            View pricing
          </Link>
        </div>
        <div className="mt-10">
          <AnswerBox title="Short answer">
            The {stage.name.toLowerCase()} stage is a sales signal. Its value
            differs by supplier: some teams should act now, while others should
            save the project and follow up at a better time.
          </AnswerBox>
        </div>
      </section>

      <section className="border-y border-border bg-muted/35">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <SectionHeader
            eyebrow="Sales window"
            title="Construction stage should connect to a sales action."
            description="Seeing the stage is not enough. The sales team should know whether to call, send a message, monitor, or schedule the next follow-up."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Monitor",
                text: "If it is still too early to buy, save the project and create a future follow-up.",
                icon: Clock3,
              },
              {
                title: "Negotiate",
                text: "If the project is close to decision, the first contact should start with construction-stage context.",
                icon: Building2,
              },
              {
                title: "Act now",
                text: "If the purchase need is active, fast contact and a relevant offer matter.",
                icon: Target,
              },
            ].map((item) => (
              <Card key={item.title} className="p-6">
                <item.icon className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />
                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-8 text-muted-foreground">
                  {item.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <SectionHeader
          eyebrow="Related categories"
          title="Which suppliers should take this stage seriously?"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {(relatedSuppliers.length ? relatedSuppliers : suppliersEn.slice(0, 3)).map(
            (supplier) => (
              <Link
                key={supplier.slug}
                href={`/en/suppliers/${supplier.slug}`}
                className="rounded-3xl border border-zinc-200 bg-white/80 p-5 transition hover:-translate-y-0.5 hover:bg-white dark:border-zinc-800 dark:bg-zinc-900/80"
              >
                <h3 className="font-bold">{supplier.name}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {supplier.products}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  View details <ArrowLeft className="h-4 w-4" />
                </span>
              </Link>
            ),
          )}
        </div>
      </section>
    </main>
  );
}
