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
import { absoluteUrl, cities, stages, suppliers } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return suppliers.map((supplier) => ({ slug: supplier.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const supplier = suppliers.find((item) => item.slug === slug);

  if (!supplier) {
    return {};
  }

  return {
    title: supplier.title,
    description: supplier.description,
    alternates: {
      canonical: `/suppliers/${supplier.slug}`,
    },
    openGraph: {
      title: supplier.title,
      description: supplier.description,
      url: absoluteUrl(`/suppliers/${supplier.slug}`),
      locale: "fa_IR",
      type: "article",
    },
  };
}

export default async function SupplierPage({ params }: PageProps) {
  const { slug } = await params;
  const supplier = suppliers.find((item) => item.slug === slug);

  if (!supplier) {
    notFound();
  }

  const relatedStages = stages.filter((stage) => supplier.stages.includes(stage.name));
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: supplier.title,
    description: supplier.description,
    url: absoluteUrl(`/suppliers/${supplier.slug}`),
    inLanguage: "fa-IR",
  };

  return (
    <main>
      <StructuredData data={schema} />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <Badge variant="signal">صفحه دسته فروش</Badge>
        <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
          {supplier.title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-9 text-muted-foreground">
          {supplier.description}
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link href="/#demo" className={cn(buttonVariants({ size: "lg" }))}>
            درخواست دمو
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <Link
            href="/features"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            مشاهده ابزارها
          </Link>
        </div>
        <div className="mt-10">
          <AnswerBox>{supplier.answer}</AnswerBox>
        </div>
      </section>

      <section className="border-y border-border bg-muted/35">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <SectionHeader
            eyebrow={supplier.name}
            title="برای این دسته، زمان رسیدن و کیفیت پیگیری مهم است."
            description={`نمونه محصولات: ${supplier.products}`}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "مرحله مناسب را پیدا کنید",
                text: "پروژه باید در مرحله‌ای باشد که ارتباط فروش برای محصول شما معنا داشته باشد.",
                icon: Timer,
              },
              {
                title: "فرصت را در CRM نگه دارید",
                text: "نتیجه تماس، پیامک و پیگیری بعدی را ثبت کنید تا فرصت از بین نرود.",
                icon: ClipboardList,
              },
              {
                title: "ارتباط را با زمینه شروع کنید",
                text: "پیام یا تماس باید با مرحله ساخت و نیاز احتمالی پروژه مرتبط باشد.",
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
          <h2 className="text-xl font-bold">مراحل ساخت مرتبط</h2>
          <div className="mt-5 grid gap-3">
            {relatedStages.map((stage) => (
              <Link
                key={stage.slug}
                href={`/construction-stages/${stage.slug}`}
                className="flex items-center justify-between rounded-md border border-border px-4 py-3 text-sm hover:bg-muted"
              >
                {stage.name}
                <ArrowLeft className="h-4 w-4 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </Card>
        <Card className="p-6">
          <h2 className="text-xl font-bold">شهرهای قابل بررسی</h2>
          <div className="mt-5 grid gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/cities/${city.slug}`}
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
