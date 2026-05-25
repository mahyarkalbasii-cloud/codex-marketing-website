import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ClipboardList, MessageSquareText, Timer } from "lucide-react";

import { AnswerBox } from "@/components/marketing/answer-box";
import { SectionHeader } from "@/components/marketing/section-header";
import { StructuredData } from "@/components/marketing/structured-data";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { citiesEn, siteEn, stagesEn, suppliersEn } from "@/lib/site-data.en";
import { cn } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return suppliersEn.map((supplier) => ({ slug: supplier.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const supplier = suppliersEn.find((item) => item.slug === slug);

  if (!supplier) {
    return {};
  }

  return {
    title: {
      absolute: supplier.title,
    },
    description: supplier.description,
    alternates: {
      canonical: `/en/suppliers/${supplier.slug}`,
      languages: {
        fa: `/suppliers/${supplier.slug}`,
        en: `/en/suppliers/${supplier.slug}`,
      },
    },
    openGraph: {
      title: supplier.title,
      description: supplier.description,
      url: `${siteEn.url}/en/suppliers/${supplier.slug}`,
      locale: "en_US",
      type: "article",
    },
  };
}

export default async function EnglishSupplierPage({ params }: PageProps) {
  const { slug } = await params;
  const supplier = suppliersEn.find((item) => item.slug === slug);

  if (!supplier) {
    notFound();
  }

  const relatedStages = stagesEn.filter((stage) => supplier.stages.includes(stage.name));
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: supplier.title,
    description: supplier.description,
    url: `${siteEn.url}/en/suppliers/${supplier.slug}`,
    inLanguage: "en-US",
  };

  return (
    <main>
      <StructuredData data={schema} />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <Badge variant="signal">Sales category page</Badge>
        <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
          {supplier.title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-9 text-muted-foreground">
          {supplier.description}
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link href="/en/#demo" className={cn(buttonVariants({ size: "lg" }))}>
            Request demo
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <Link
            href="/en/features"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            View tools
          </Link>
        </div>
        <div className="mt-10">
          <AnswerBox title="Short answer">{supplier.answer}</AnswerBox>
        </div>
      </section>

      <section className="border-y border-border bg-muted/35">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <SectionHeader
            eyebrow={supplier.name}
            title="For this category, arrival timing and follow-up quality matter."
            description={`Example products: ${supplier.products}`}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Find the right stage",
                text: "The project should be in a stage where your sales conversation makes sense.",
                icon: Timer,
              },
              {
                title: "Keep the opportunity in CRM",
                text: "Record call outcomes, messages, and the next follow-up so the opportunity does not disappear.",
                icon: ClipboardList,
              },
              {
                title: "Start with context",
                text: "The first message or call should refer to the construction stage and likely project need.",
                icon: MessageSquareText,
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

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        <Card className="p-6">
          <h2 className="text-xl font-bold">Related construction stages</h2>
          <div className="mt-5 grid gap-3">
            {relatedStages.map((stage) => (
              <Link
                key={stage.slug}
                href={`/en/construction-stages/${stage.slug}`}
                className="flex items-center justify-between rounded-md border border-border px-4 py-3 text-sm hover:bg-muted"
              >
                {stage.name}
                <ArrowLeft className="h-4 w-4 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </Card>
        <Card className="p-6">
          <h2 className="text-xl font-bold">Cities to review</h2>
          <div className="mt-5 grid gap-3">
            {citiesEn.map((city) => (
              <Link
                key={city.slug}
                href={`/en/cities/${city.slug}`}
                className="flex items-center justify-between rounded-md border border-border px-4 py-3 text-sm hover:bg-muted"
              >
                {city.name}
                <ArrowLeft className="h-4 w-4 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </Card>
      </section>
    </main>
  );
}
