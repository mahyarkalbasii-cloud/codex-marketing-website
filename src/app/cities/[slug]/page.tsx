import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPinned } from "lucide-react";

import { CityInternalLinks } from "@/components/city/CityInternalLinks";
import { AnswerBox } from "@/components/marketing/answer-box";
import { StructuredData } from "@/components/marketing/structured-data";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getHighValueCategoriesForCity } from "@/data/category-insights";
import { getCityInsight } from "@/data/city-insights";
import { absoluteUrl, cities } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = cities.find((item) => item.slug === slug);

  if (!city) {
    return {};
  }

  return {
    title: city.title,
    description: city.description,
    alternates: {
      canonical: `/cities/${city.slug}`,
    },
    openGraph: {
      title: city.title,
      description: city.description,
      url: absoluteUrl(`/cities/${city.slug}`),
      locale: "fa_IR",
      type: "article",
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { slug } = await params;
  const city = cities.find((item) => item.slug === slug);

  if (!city) {
    notFound();
  }

  const cityInsight = getCityInsight(city.slug);
  const highValueCategories = getHighValueCategoriesForCity(city.slug);

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: city.title,
    description: city.description,
    url: absoluteUrl(`/cities/${city.slug}`),
    inLanguage: "fa-IR",
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
            <Badge variant="signal">صفحه محلی</Badge>
            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight md:text-6xl">
              {city.title}
            </h1>
            <p className="mt-5 text-lg leading-9 text-muted-foreground">
              {city.description}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/#demo" className={cn(buttonVariants({ size: "lg" }))}>
                درخواست دمو
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <Link
                href="/pricing"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              >
                مشاهده پلن‌ها
              </Link>
            </div>
          </div>
          <Card className="p-6">
            <MapPinned className="h-7 w-7 text-zinc-900 dark:text-zinc-100" />
            <h2 className="mt-5 text-2xl font-bold">محدوده‌های قابل هدف‌گیری</h2>
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
          <AnswerBox>{city.answer}</AnswerBox>
        </div>
      </section>

      <CityInternalLinks
        categories={highValueCategories}
        cityName={city.name}
        faqItems={cityInsight.faqItems}
        reasonByCategorySlug={cityInsight.categoryReasons}
      />
    </main>
  );
}
