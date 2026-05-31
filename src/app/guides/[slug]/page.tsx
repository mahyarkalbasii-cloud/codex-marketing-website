import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/marketing/breadcrumbs";
import { StructuredData } from "@/components/marketing/structured-data";
import {
  FinalCTA,
  GradientSection,
} from "@/components/marketing/suppliers/shared";
import { GUIDES, getGuideBySlug } from "@/data/guides";
import { CategoryLayout } from "@/layouts/CategoryLayout";
import { routeOgImage } from "@/lib/og-metadata";
import { absoluteUrl, site } from "@/lib/site-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return GUIDES.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {};
  }

  return {
    title: { absolute: `${guide.title} | پرشین‌سازه` },
    description: guide.description,
    alternates: { canonical: `/guides/${guide.slug}/` },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: absoluteUrl(`/guides/${guide.slug}/`),
      locale: "fa_IR",
      type: "article",
      images: routeOgImage(`/guides/${guide.slug}/`, guide.title),
    },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    inLanguage: "fa-IR",
    mainEntityOfPage: absoluteUrl(`/guides/${guide.slug}/`),
    image: absoluteUrl(`/guides/${guide.slug}/opengraph-image`),
    datePublished: guide.datePublished,
    dateModified: guide.dateModified ?? guide.datePublished,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: {
      "@type": "Organization",
      logo: { "@type": "ImageObject", url: absoluteUrl(site.logoPath) },
      name: "پرشین‌سازه",
    },
  };

  return (
    <CategoryLayout>
      <StructuredData data={articleSchema} />
      <Breadcrumbs
        items={[
          { label: "خانه", href: "/" },
          { label: "راهنماها", href: "/guides/" },
          { label: guide.title, href: `/guides/${guide.slug}/` },
        ]}
      />
      <GradientSection>
        <p className="text-sm font-bold text-muted-foreground">
          راهنمای کاربردی
        </p>
        <h1 className="mt-3 text-4xl font-black md:text-6xl">
          {guide.title}
        </h1>
        <p className="mt-4 max-w-4xl leading-8 text-muted-foreground">
          {guide.description}
        </p>
      </GradientSection>
      <article className="space-y-5">
        {guide.sections.map((section) => (
          <GradientSection key={section.title}>
            <h2 className="text-2xl font-black">{section.title}</h2>
            <p className="mt-3 leading-8 text-muted-foreground">
              {section.body}
            </p>
          </GradientSection>
        ))}
      </article>
      <GradientSection>
        <h2 className="text-2xl font-black">لینک‌های مرتبط</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {guide.relatedLinks.map((link) => (
            <Link key={link.href} href={link.href} className="category-badge">
              {link.label}
            </Link>
          ))}
        </div>
      </GradientSection>
      <FinalCTA
        title="این راهنما را روی بازار خودتان اجرا کنید"
        description="در دمو، دسته محصول، مرحله ساخت و معیارهای اعتماد را برای فروش واقعی شما تنظیم می‌کنیم."
      />
    </CategoryLayout>
  );
}
