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
import { getStageByRouteSlug } from "@/data/stage-insights";
import { absoluteUrl, cities, stages, suppliers } from "@/lib/site-data";
import { getStageHref } from "@/lib/stage-routes";
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

  const importantStages = stages.slice(1, 5).map((stage) => {
    const canonicalStage = getStageByRouteSlug(stage.slug).stage;

    return {
      ...stage,
      href: canonicalStage ? getStageHref(canonicalStage) : `/stages/${stage.slug}/`,
    };
  });

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

      <section className="border-y border-border bg-muted/35">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <SectionHeader
            eyebrow={`فروش در ${city.name}`}
            title="در این بازار، مرحله ساخت و زمان ورود تعیین‌کننده است."
            description="برای هر محصول ساختمانی، ارزش پروژه در یک پنجره زمانی مشخص فعال می‌شود. صفحه‌های زیر کمک می‌کنند این پنجره را دقیق‌تر بفهمید."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Card className="p-6">
              <Building2 className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />
              <h3 className="mt-5 text-xl font-bold">دسته‌های مناسب فروش</h3>
              <div className="mt-5 grid gap-3">
                {suppliers.slice(0, 4).map((supplier) => (
                  <Link
                    key={supplier.slug}
                    href={`/suppliers/${supplier.slug}`}
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
              <h3 className="mt-5 text-xl font-bold">مراحل ساخت مهم</h3>
              <div className="mt-5 grid gap-3">
                {importantStages.map((stage) => (
                  <Link
                    key={stage.slug}
                    href={stage.href}
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
