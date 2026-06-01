import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/marketing/breadcrumbs";
import { StructuredData } from "@/components/marketing/structured-data";
import {
  FinalCTA,
  GradientSection,
} from "@/components/marketing/suppliers/shared";
import { buttonVariants } from "@/components/ui/button";
import {
  SALES_TYPE_LABELS,
  formatStageIds,
  getAllSubcategories,
  getSchemaTypeForSubcategory,
  getSubcategoryByRoute,
  shortText,
  stageLinks,
} from "@/data/taxonomy-helpers";
import { CategoryLayout } from "@/layouts/CategoryLayout";
import { routeOgImage } from "@/lib/og-metadata";
import { absoluteUrl } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string; childSlug: string }>;
};

const timingRows = [
  ["مذاکره", "negotiate"],
  ["خرید", "buy"],
  ["اجرا", "execute"],
] as const;

export function generateStaticParams() {
  return getAllSubcategories().map(({ category, subcategory }) => ({
    slug: category.slug,
    childSlug: subcategory.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, childSlug } = await params;
  const { category, subcategory } = getSubcategoryByRoute(slug, childSlug);

  if (!category || !subcategory) {
    return {};
  }

  const canonicalPath = `/suppliers/${category.slug}/${subcategory.slug}/`;
  const description = shortText(
    `${subcategory.description} زمان مذاکره: ${formatStageIds(
      subcategory.negotiationStages,
    )}. زمان خرید: ${formatStageIds(subcategory.buyStages)}.`,
  );

  return {
    title: { absolute: `${subcategory.faTitle} | ${category.faTitle}` },
    description,
    alternates: { canonical: canonicalPath },
    openGraph: {
      title: `${subcategory.faTitle} برای پروژه‌های ساختمانی`,
      description,
      url: absoluteUrl(canonicalPath),
      locale: "fa_IR",
      type: "article",
      images: routeOgImage(`/suppliers/${category.slug}/`),
    },
  };
}

export default async function SubcategoryPage({ params }: PageProps) {
  const { slug, childSlug } = await params;
  const { category, subcategory } = getSubcategoryByRoute(slug, childSlug);

  if (!category || !subcategory) {
    notFound();
  }

  const canonicalUrl = absoluteUrl(
    `/suppliers/${category.slug}/${subcategory.slug}/`,
  );
  const schemaType = getSchemaTypeForSubcategory(subcategory);
  const relatedStages = Array.from(
    new Map(
      [
        ...stageLinks(subcategory.negotiationStages),
        ...stageLinks(subcategory.buyStages),
        ...stageLinks(subcategory.executionStages),
      ].map((stage) => [stage.id, stage]),
    ).values(),
  );
  const siblingSubcategories = category.subcategories
    .filter((item) => item.id !== subcategory.id)
    .slice(0, 6);
  const productOrServiceSchema = {
    "@context": "https://schema.org",
    "@type": schemaType,
    name: subcategory.faTitle,
    description: subcategory.description,
    category: category.faTitle,
    url: canonicalUrl,
    brand: {
      "@type": "Brand",
      name: "پرشین‌سازه",
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "خانه", item: absoluteUrl("/") },
      {
        "@type": "ListItem",
        position: 2,
        name: "زمینه‌های کاری",
        item: absoluteUrl("/suppliers/"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: category.faTitle,
        item: absoluteUrl(`/suppliers/${category.slug}/`),
      },
      {
        "@type": "ListItem",
        position: 4,
        name: subcategory.faTitle,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <CategoryLayout>
      <StructuredData data={[productOrServiceSchema, breadcrumbSchema]} />
      <Breadcrumbs
        items={[
          { label: "خانه", href: "/" },
          { label: "زمینه‌های کاری", href: "/suppliers/" },
          { label: category.faTitle, href: `/suppliers/${category.slug}/` },
          {
            label: subcategory.faTitle,
            href: `/suppliers/${category.slug}/${subcategory.slug}/`,
          },
        ]}
      />

      <GradientSection>
        <p className="text-sm font-bold text-muted-foreground">
          {category.faTitle}
        </p>
        <h1 className="mt-3 text-4xl font-black md:text-6xl">
          {subcategory.faTitle}
        </h1>
        <p className="mt-4 max-w-4xl leading-8 text-muted-foreground">
          {subcategory.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {subcategory.salesTypes.map((type) => (
            <Link
              key={type}
              href={type === "barter" ? "/sales-style/barter/" : `/sales-style/${type === "fast" ? "fast" : "consultative"}/`}
              className="category-badge"
            >
              {SALES_TYPE_LABELS[type]}
            </Link>
          ))}
        </div>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link
            href={`/?category=${category.slug}&subcategory=${subcategory.slug}#demo`}
            className={cn(buttonVariants({ size: "lg" }))}
          >
            درخواست دمو با همین زمینه
          </Link>
          <Link
            href={`/suppliers/${category.slug}/`}
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            بازگشت به دسته
          </Link>
        </div>
      </GradientSection>

      <GradientSection>
        <h2 className="text-2xl font-black">چه زمانی وارد پروژه می‌شود؟</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {timingRows.map(([title, key]) => (
            <div
              key={key}
              className="rounded-3xl border border-white/70 bg-white/76 p-5"
            >
              <h3 className="font-extrabold">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {formatStageIds(subcategory.stageTiming[key]) ||
                  "وابسته به پروژه"}
              </p>
            </div>
          ))}
        </div>
      </GradientSection>

      <section className="grid gap-4 lg:grid-cols-2">
        <GradientSection>
          <h2 className="text-2xl font-black">ارزش برای سازنده</h2>
          <p className="mt-3 leading-8 text-muted-foreground">
            {subcategory.builderValues}
          </p>
        </GradientSection>
        <GradientSection>
          <h2 className="text-2xl font-black">
            معیار انتخاب تأمین‌کننده قابل اعتماد
          </h2>
          <p className="mt-3 leading-8 text-muted-foreground">
            {subcategory.trustCriteria}
          </p>
        </GradientSection>
      </section>

      <GradientSection>
        <h2 className="text-2xl font-black">لینک‌های مرتبط</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="font-extrabold">مرحله‌های مرتبط</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {relatedStages.map((stage) => (
                <Link
                  key={stage.id}
                  href={`/stages/${stage.slug}/`}
                  className="category-badge"
                >
                  {stage.faLabel}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-extrabold">زیرگروه‌های نزدیک</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {siblingSubcategories.map((item) => (
                <Link
                  key={item.id}
                  href={`/suppliers/${category.slug}/${item.slug}/`}
                  className="category-badge"
                >
                  {item.faTitle}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </GradientSection>

      <FinalCTA
        title={`فروش ${subcategory.faTitle} را زمان‌بندی کنید`}
        description="در دمو، همین زیرگروه را با پروژه‌های فعال، مرحله ساخت و مسیر پیگیری CRM تطبیق می‌دهیم."
      />
    </CategoryLayout>
  );
}
