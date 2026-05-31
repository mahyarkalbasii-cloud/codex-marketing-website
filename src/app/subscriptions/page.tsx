import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { StructuredData } from "@/components/marketing/structured-data";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  subscriptionFeatureRows,
  subscriptions,
} from "@/data/subscriptions";
import { routeOgImage } from "@/lib/og-metadata";
import { absoluteUrl, site } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const canonicalPath = "/subscriptions/";
const pageTitle = "اشتراک‌های پروژه‌های ساختمانی";
const pageDescription =
  "اشتراک‌های بنیان، رویان، تابان و تابان پلاس را از نظر پوشش پروژه، شهرهای حومه، پیامک، CRM و آموزش فروش مقایسه کنید و مسیر مناسب تیم فروش را انتخاب کنید.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: canonicalPath,
    languages: {
      fa: canonicalPath,
    },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: absoluteUrl(canonicalPath),
    siteName: site.name,
    locale: "fa_IR",
    type: "website",
    images: routeOgImage(canonicalPath, pageTitle),
  },
};

const metricRows = [
  { key: "projectsToAban", label: "پروژه تا آبان" },
  { key: "exclusiveProjects", label: "پروژه‌های انحصاری" },
] as const;

export default function SubscriptionsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "اشتراک‌های پرشین‌سازه",
    description: pageDescription,
    url: absoluteUrl(canonicalPath),
    itemListElement: subscriptions.map((subscription, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: subscription.name,
      url: absoluteUrl(`/subscriptions/${subscription.slug}/`),
    })),
  };

  return (
    <main>
      <StructuredData data={schema} />
      <section className="border-b border-[#e4d8c8] bg-[var(--page-bg)]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="signal">اشتراک‌ها</Badge>
            <h1 className="mt-5 text-3xl font-black leading-[1.35] tracking-normal text-[#171512] md:text-5xl">
              اشتراک‌های پرشین‌سازه
            </h1>
            <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg md:leading-9">
              چهار مسیر دسترسی به پروژه‌های ساختمانی را کنار هم ببینید؛ از
              شروع اقتصادی تا پوشش کامل بازار برای تیم‌های فروش پروژه‌محور.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {subscriptions.map((subscription) => (
              <Card key={subscription.slug} className="flex flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-black leading-8 text-[#171512]">
                      {subscription.name}
                    </h2>
                    <p className="mt-1 text-sm font-semibold leading-6 text-[#6f6254]">
                      {subscription.tagline}
                    </p>
                  </div>
                  <span className="rounded-full border border-[#d8c7b2] px-2.5 py-1 text-xs font-black text-[#5f5348]">
                    {subscription.metrics.projectsToAban}
                  </span>
                </div>
                <p className="mt-4 line-clamp-4 text-sm leading-7 text-muted-foreground">
                  {subscription.idealFor}
                </p>
                <Link
                  href={`/subscriptions/${subscription.slug}/`}
                  className={cn(buttonVariants({ variant: "outline" }), "mt-5 w-full")}
                >
                  جزئیات
                  <ArrowLeft aria-hidden="true" className="h-4 w-4" />
                </Link>
              </Card>
            ))}
          </div>

          <div className="mt-12 overflow-hidden rounded-[1.25rem] border border-[#e4d8c8] bg-[#fffaf1]/72 shadow-sm shadow-[#2a241d]/[0.035]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[58rem] border-collapse text-right">
                <caption className="sr-only">
                  مقایسه اشتراک‌های پرشین‌سازه
                </caption>
                <thead>
                  <tr className="border-b border-[#e4d8c8] bg-[#f5eadb]/72">
                    <th className="w-56 px-5 py-4 text-sm font-black text-[#2a241d]">
                      قابلیت
                    </th>
                    {subscriptions.map((subscription) => (
                      <th
                        key={subscription.slug}
                        className="px-5 py-4 align-top text-sm font-black text-[#2a241d]"
                      >
                        <span className="block text-lg">{subscription.name}</span>
                        <span className="mt-1 block text-xs font-semibold leading-5 text-[#6f6254]">
                          {subscription.tagline}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {metricRows.map((row) => (
                    <tr key={row.key} className="border-b border-[#e4d8c8]">
                      <th className="px-5 py-4 text-sm font-bold text-[#2a241d]">
                        {row.label}
                      </th>
                      {subscriptions.map((subscription) => (
                        <td
                          key={`${subscription.slug}-${row.key}`}
                          className="px-5 py-4 text-sm font-semibold text-[#3d332a]"
                        >
                          {subscription.metrics[row.key]}
                        </td>
                      ))}
                    </tr>
                  ))}
                  {subscriptionFeatureRows.map((row) => (
                    <tr key={row.key} className="border-b border-[#e4d8c8] last:border-0">
                      <th className="px-5 py-4 text-sm font-bold text-[#2a241d]">
                        {row.label}
                      </th>
                      {subscriptions.map((subscription) => {
                        const feature = subscription.features[row.key];

                        return (
                          <td
                            key={`${subscription.slug}-${row.key}`}
                            className="px-5 py-4 text-sm font-semibold leading-7 text-[#3d332a]"
                          >
                            <span
                              className={cn(
                                "ml-2 inline-grid h-5 w-5 place-items-center rounded-full text-xs font-black",
                                feature.included
                                  ? "bg-[#C16B4E] text-[#FFF7EF]"
                                  : "bg-[#e8dfd2] text-[#6f6254]",
                              )}
                              aria-hidden="true"
                            >
                              {feature.included ? "✓" : "✗"}
                            </span>
                            {feature.value}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                  <tr>
                    <th className="px-5 py-4 text-sm font-bold text-[#2a241d]">
                      صفحه اختصاصی
                    </th>
                    {subscriptions.map((subscription) => (
                      <td key={`${subscription.slug}-link`} className="px-5 py-4">
                        <Link
                          href={`/subscriptions/${subscription.slug}/`}
                          className="inline-flex items-center gap-2 text-sm font-black text-[#A8573D] transition hover:text-[#783824]"
                        >
                          جزئیات
                          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
