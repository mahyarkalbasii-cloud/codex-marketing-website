import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { Breadcrumbs } from "@/components/marketing/breadcrumbs";
import { StructuredData } from "@/components/marketing/structured-data";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  getSubscriptionBySlug,
  getSubscriptionFeatures,
  subscriptions,
} from "@/data/subscriptions";
import { routeOgImage } from "@/lib/og-metadata";
import { organizationId } from "@/lib/schema";
import { absoluteUrl, site } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const metricLabels = {
  projectsToAban: "پروژه تا آبان",
  exclusiveProjects: "پروژه‌های انحصاری",
} as const;

export function generateStaticParams() {
  return subscriptions.map((subscription) => ({ slug: subscription.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const subscription = getSubscriptionBySlug(slug);

  if (!subscription) {
    return {};
  }

  const canonicalPath = `/subscriptions/${subscription.slug}/`;

  return {
    title: subscription.metaTitle,
    description: subscription.metaDescription,
    alternates: {
      canonical: canonicalPath,
      languages: {
        fa: canonicalPath,
      },
    },
    openGraph: {
      title: subscription.metaTitle,
      description: subscription.metaDescription,
      url: absoluteUrl(canonicalPath),
      siteName: site.name,
      locale: "fa_IR",
      type: "website",
      images: routeOgImage(canonicalPath, subscription.metaTitle),
    },
  };
}

export default async function SubscriptionPage({ params }: PageProps) {
  const { slug } = await params;
  const subscription = getSubscriptionBySlug(slug);

  if (!subscription) {
    notFound();
  }

  const canonicalPath = `/subscriptions/${subscription.slug}/`;
  const canonicalUrl = absoluteUrl(canonicalPath);
  const features = getSubscriptionFeatures(subscription);
  const demoHref = `/?plan=${subscription.slug}#demo`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonicalUrl}#service`,
    serviceType: "اشتراک داده پروژه‌های ساختمانی",
    name: `اشتراک ${subscription.name}`,
    description: subscription.metaDescription,
    url: canonicalUrl,
    provider: { "@id": organizationId },
    areaServed: site.areaServed.map((city) => ({
      "@type": "City",
      name: city,
    })),
    inLanguage: "fa-IR",
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: metricLabels.projectsToAban,
        value: subscription.metrics.projectsToAban,
      },
      {
        "@type": "PropertyValue",
        name: metricLabels.exclusiveProjects,
        value: subscription.metrics.exclusiveProjects,
      },
      ...features.map((feature) => ({
        "@type": "PropertyValue",
        name: feature.label,
        value: feature.value,
      })),
    ],
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "IRR",
      url: canonicalUrl,
    },
  };

  return (
    <main>
      <StructuredData data={serviceSchema} />
      <section className="border-b border-[#e4d8c8] bg-[var(--page-bg)]">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
          <Breadcrumbs
            items={[
              { label: "خانه", href: "/" },
              { label: "اشتراک‌ها", href: "/subscriptions/" },
              {
                label: subscription.name,
                href: canonicalPath,
              },
            ]}
          />
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <Badge variant="signal">اشتراک {subscription.name}</Badge>
              <h1 className="mt-5 max-w-4xl text-3xl font-black leading-[1.35] tracking-normal text-[#171512] md:text-5xl md:leading-[1.25]">
                {subscription.h1}
              </h1>
              <p className="mt-4 text-xl font-black leading-8 text-[#A8573D]">
                {subscription.tagline}
              </p>
              <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg md:leading-9">
                {subscription.description}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href={demoHref} className={cn(buttonVariants({ size: "lg" }))}>
                  درخواست دمو و مشاوره
                  <ArrowLeft aria-hidden="true" className="h-4 w-4" />
                </Link>
                <Link
                  href="/subscriptions/"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
                >
                  مقایسه اشتراک‌ها
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <Card className="p-6">
                <dl>
                  <dt className="text-sm font-bold leading-6 text-muted-foreground">
                    {metricLabels.projectsToAban}
                  </dt>
                  <dd className="mt-2 text-4xl font-black leading-none text-[#171512]">
                    {subscription.metrics.projectsToAban}
                  </dd>
                </dl>
              </Card>
              <Card className="p-6">
                <dl>
                  <dt className="text-sm font-bold leading-6 text-muted-foreground">
                    {metricLabels.exclusiveProjects}
                  </dt>
                  <dd className="mt-2 text-4xl font-black leading-none text-[#171512]">
                    {subscription.metrics.exclusiveProjects}
                  </dd>
                </dl>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e4d8c8] bg-[#f5f0e6]">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 md:px-6 md:py-16 lg:grid-cols-[0.85fr_1.15fr]">
          <Card className="p-6">
            <h2 className="text-2xl font-black leading-9 text-[#171512]">
              مناسب چه کسی است
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              {subscription.idealFor}
            </p>
          </Card>

          <div className="rounded-[1.25rem] border border-[#e4d8c8] bg-[#fffaf1]/74 p-6 shadow-sm shadow-[#2a241d]/[0.035]">
            <h2 className="text-2xl font-black leading-9 text-[#171512]">
              جزئیات اشتراک {subscription.name}
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <li
                  key={feature.key}
                  className="flex min-h-20 items-start gap-3 rounded-2xl border border-[#e4d8c8] bg-[#fbf6ed] p-4"
                >
                  <span
                    className={cn(
                      "mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full text-sm font-black",
                      feature.included
                        ? "bg-[#C16B4E] text-[#FFF7EF]"
                        : "bg-[#e8dfd2] text-[#6f6254]",
                    )}
                    aria-hidden="true"
                  >
                    {feature.included ? "✓" : "✗"}
                  </span>
                  <span>
                    <span className="block text-sm font-black leading-6 text-[#2a241d]">
                      {feature.label}
                    </span>
                    <span className="mt-1 block text-sm font-semibold leading-6 text-muted-foreground">
                      {feature.value}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
