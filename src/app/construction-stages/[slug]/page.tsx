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
import { absoluteUrl, stages, suppliers } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return stages.map((stage) => ({ slug: stage.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const stage = stages.find((item) => item.slug === slug);

  if (!stage) {
    return {};
  }

  return {
    title: stage.title,
    description: stage.description,
    alternates: {
      canonical: `/construction-stages/${stage.slug}`,
    },
    openGraph: {
      title: stage.title,
      description: stage.description,
      url: absoluteUrl(`/construction-stages/${stage.slug}`),
      locale: "fa_IR",
      type: "article",
    },
  };
}

export default async function StagePage({ params }: PageProps) {
  const { slug } = await params;
  const stage = stages.find((item) => item.slug === slug);

  if (!stage) {
    notFound();
  }

  const relatedSuppliers = suppliers.filter((supplier) =>
    supplier.stages.includes(stage.name),
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: stage.title,
    description: stage.description,
    url: absoluteUrl(`/construction-stages/${stage.slug}`),
    inLanguage: "fa-IR",
  };

  return (
    <main>
      <StructuredData data={schema} />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <Badge variant="signal">صفحه مرحله ساخت</Badge>
        <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
          {stage.title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-9 text-muted-foreground">
          {stage.description}
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
            مشاهده قیمت‌ها
          </Link>
        </div>
        <div className="mt-10">
          <AnswerBox>
            مرحله {stage.name} یک سیگنال فروش است. ارزش آن برای هر تأمین‌کننده
            فرق می‌کند: بعضی باید همین حالا اقدام کنند، بعضی باید پروژه را
            ذخیره و برای زمان مناسب‌تر پیگیری کنند.
          </AnswerBox>
        </div>
      </section>

      <section className="border-y border-border bg-muted/35">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <SectionHeader
            eyebrow="پنجره فروش"
            title="مرحله ساخت باید به اقدام فروش وصل شود."
            description="دیدن مرحله کافی نیست. تیم فروش باید بداند تماس بگیرد، پیامک بفرستد، رصد کند یا پیگیری بعدی بگذارد."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "رصد",
                text: "اگر هنوز برای خرید زود است، پروژه را ذخیره کنید و زمان پیگیری بعدی بسازید.",
                icon: Clock3,
              },
              {
                title: "مذاکره",
                text: "اگر پروژه به تصمیم نزدیک است، ارتباط اولیه باید با زمینه مرحله ساخت شروع شود.",
                icon: Building2,
              },
              {
                title: "اقدام فوری",
                text: "اگر نیاز خرید فعال شده، سرعت تماس و پیشنهاد مرتبط اهمیت بالایی دارد.",
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
          eyebrow="دسته‌های مرتبط"
          title="چه تأمین‌کنندگانی باید این مرحله را جدی بگیرند؟"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {(relatedSuppliers.length ? relatedSuppliers : suppliers.slice(0, 3)).map(
            (supplier) => (
              <Link
                key={supplier.slug}
                href={`/suppliers/${supplier.slug}`}
                className="rounded-3xl border border-zinc-200 bg-white/80 p-5 transition hover:-translate-y-0.5 hover:bg-white dark:border-zinc-800 dark:bg-zinc-900/80"
              >
                <h3 className="font-bold">{supplier.name}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {supplier.products}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  مشاهده جزئیات <ArrowLeft className="h-4 w-4" />
                </span>
              </Link>
            ),
          )}
        </div>
      </section>
    </main>
  );
}
