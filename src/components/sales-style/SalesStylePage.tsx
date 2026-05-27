import { Breadcrumbs } from "@/components/marketing/breadcrumbs";
import { StructuredData } from "@/components/marketing/structured-data";
import { CategoryLayout } from "@/layouts/CategoryLayout";
import { absoluteUrl } from "@/lib/site-data";
import { getSalesStyleRelatedStages, type SalesStyleId } from "@/data/sales-style";
import { SALES_STYLE_COPY, SALES_STYLE_LABELS } from "@/data/sales-style-copy";
import { getSalesStyleCategories } from "@/data/sales-style";

import { CategoryAccordion } from "./CategoryAccordion";
import { ComparisonTable } from "./ComparisonTable";
import { CTABanner } from "./CTABanner";
import { FAQ } from "./FAQ";
import { Hero } from "./Hero";
import { PlaybookCards } from "./PlaybookCards";
import { RelatedStages } from "./RelatedStages";
import { ShortAnswer } from "./ShortAnswer";
import { StickyTOC } from "./StickyTOC";
import { TimingDiagram } from "./TimingDiagram";
import { WhatThisMeans } from "./WhatThisMeans";

export function SalesStylePage({ style }: { style: SalesStyleId }) {
  const copy = SALES_STYLE_COPY[style];
  const categories = getSalesStyleCategories(style);
  const relatedStages = getSalesStyleRelatedStages(style);
  const canonicalUrl = absoluteUrl(copy.path);
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: copy.categorySectionTitle,
    itemListElement: categories.map(({ category }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: category.faTitle,
      url: `${canonicalUrl}#cat-${category.id}`,
    })),
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: copy.h1,
    url: canonicalUrl,
    inLanguage: "fa-IR",
    about: {
      "@type": "Thing",
      name: copy.h1,
    },
  };

  return (
    <CategoryLayout>
      <StructuredData data={[faqSchema, webPageSchema, itemListSchema]} />
      <Breadcrumbs
        items={[
          { label: SALES_STYLE_LABELS.home, href: "/" },
          { label: SALES_STYLE_LABELS.suppliers, href: "/suppliers/" },
          { label: copy.h1, href: copy.path },
        ]}
      />
      <Hero copy={copy} />
      <ShortAnswer copy={copy} />
      <WhatThisMeans copy={copy} />
      <ComparisonTable copy={copy} />
      <StickyTOC copy={copy} categories={categories} />
      <CategoryAccordion copy={copy} categories={categories} />
      <PlaybookCards copy={copy} />
      <TimingDiagram copy={copy} />
      <RelatedStages copy={copy} stages={relatedStages} />
      <FAQ copy={copy} />
      <CTABanner copy={copy} />
    </CategoryLayout>
  );
}
