import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { CategorySection } from "@/components/category/CategorySection";
import { Breadcrumbs } from "@/components/marketing/breadcrumbs";
import { StructuredData } from "@/components/marketing/structured-data";
import { cities, absoluteUrl } from "@/lib/site-data";

const canonicalPath = "/cities/";
const pageTitle = "شهرهای تحت پوشش پرشین‌سازه";
const pageDescription =
  "فهرست شهرهایی که پرشین‌سازه برای بررسی پروژه‌های ساختمانی فعال پوشش می‌دهد.";

export function generateMetadata(): Metadata {
  return {
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical: canonicalPath },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: absoluteUrl(canonicalPath),
      locale: "fa_IR",
      type: "website",
    },
  };
}

export default function CitiesIndexPage() {
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: pageTitle,
    description: pageDescription,
    url: absoluteUrl(canonicalPath),
    inLanguage: "fa-IR",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: cities.map((city, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: city.name,
        url: absoluteUrl(`/cities/${city.slug}/`),
      })),
    },
  };

  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 py-10 md:px-6 md:py-16">
      <StructuredData data={collectionPageSchema} />
      <Breadcrumbs
        items={[
          { label: "خانه", href: "/" },
          { label: "شهرها", href: canonicalPath },
        ]}
      />
      <CategorySection>
        <span className="category-badge mb-3">شهرها</span>
        <h1 className="text-3xl font-black md:text-5xl">{pageTitle}</h1>
        <p className="mt-4 max-w-3xl text-sm leading-8 text-muted-foreground md:text-base">
          {pageDescription}
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/cities/${city.slug}/`}
              className="category-card flex h-full flex-col p-5 transition hover:-translate-y-0.5 hover:bg-white"
            >
              <h2 className="text-xl font-black">{city.name}</h2>
              <p className="mt-3 line-clamp-2 text-sm leading-7 text-muted-foreground">
                {city.description}
              </p>
              <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-[#7a4a22] dark:text-zinc-200">
                مشاهده شهر
                <ArrowLeft className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </CategorySection>
    </main>
  );
}
