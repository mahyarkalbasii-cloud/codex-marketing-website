import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Building2, MapPinned, Target } from "lucide-react";

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
  return citiesEn.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = citiesEn.find((item) => item.slug === slug);

  if (!city) {
    return {};
  }

  return {
    title: {
      absolute: city.title,
    },
    description: city.description,
    alternates: {
      canonical: `/en/cities/${city.slug}`,
      languages: {
        fa: `/cities/${city.slug}`,
        en: `/en/cities/${city.slug}`,
      },
    },
    openGraph: {
      title: city.title,
      description: city.description,
      url: `${siteEn.url}/en/cities/${city.slug}`,
      locale: "en_US",
      type: "article",
    },
  };
}

export default async function EnglishCityPage({ params }: PageProps) {
  const { slug } = await params;
  const city = citiesEn.find((item) => item.slug === slug);

  if (!city) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: city.title,
    description: city.description,
    url: `${siteEn.url}/en/cities/${city.slug}`,
    inLanguage: "en-US",
    about: {
      "@type": "Place",
      name: city.name,
    },
  };

  return (
    <main>
      <StructuredData data={schema} />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <Badge variant="signal">Local page</Badge>
            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight md:text-6xl">
              {city.title}
            </h1>
            <p className="mt-5 text-lg leading-9 text-muted-foreground">
              {city.description}
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
                View plans
              </Link>
            </div>
          </div>
          <Card className="p-6">
            <MapPinned className="h-7 w-7 text-zinc-900 dark:text-zinc-100" />
            <h2 className="mt-5 text-2xl font-bold">Targetable areas</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {city.areas.map((area) => (
                <Badge key={area} variant="secondary">
                  {area}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
        <div className="mt-10">
          <AnswerBox title="Short answer">{city.answer}</AnswerBox>
        </div>
      </section>

      <section className="border-y border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <SectionHeader
            eyebrow={`Sales in ${city.name}`}
            title="In this market, construction stage and entry timing are decisive."
            description="For every construction product, project value becomes active inside a specific time window. These pages help your team understand that window more clearly."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Card className="p-6">
              <Building2 className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />
              <h3 className="mt-5 text-xl font-bold">Relevant sales categories</h3>
              <div className="mt-5 grid gap-3">
                {suppliersEn.slice(0, 4).map((supplier) => (
                  <Link
                    key={supplier.slug}
                    href={`/en/suppliers/${supplier.slug}`}
                    className="flex items-center justify-between rounded-md border border-border bg-background px-4 py-3 text-sm hover:bg-muted"
                  >
                    {supplier.name}
                    <ArrowLeft className="h-4 w-4 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            </Card>
            <Card className="p-6">
              <Target className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />
              <h3 className="mt-5 text-xl font-bold">Important construction stages</h3>
              <div className="mt-5 grid gap-3">
                {stagesEn.slice(1, 5).map((stage) => (
                  <Link
                    key={stage.slug}
                    href={`/en/construction-stages/${stage.slug}`}
                    className="flex items-center justify-between rounded-md border border-border bg-background px-4 py-3 text-sm hover:bg-muted"
                  >
                    {stage.name}
                    <ArrowLeft className="h-4 w-4 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
