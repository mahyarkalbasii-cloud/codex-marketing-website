import type { Metadata } from "next";

import { AnswerBox } from "@/components/marketing/answer-box";
import { PricingTabs } from "@/components/marketing/pricing-tabs";
import { SectionHeader } from "@/components/marketing/section-header";
import { StructuredData } from "@/components/marketing/structured-data";
import { pricingGroupsEn, siteEn } from "@/lib/site-data.en";

const canonicalPath = "/en/pricing/";
const pageTitle = "PersianSaze pricing";
const pageDescription =
  "Bonyan, Royan, Taban, and Taban Plus plans for accessing construction projects by land size, construction stages, and subscription duration.";

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: canonicalPath,
    languages: {
      fa: "/pricing/",
      en: canonicalPath,
    },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteEn.url}${canonicalPath}`,
    siteName: siteEn.name,
    locale: "en_US",
    type: "website",
  },
};

export default function EnglishPricingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "PersianSaze subscription",
    description:
      "Updated construction-project data, map, filters, CRM, messaging, and AI-assisted sales decisions for construction suppliers.",
    url: `${siteEn.url}${canonicalPath}`,
    offers: pricingGroupsEn.flatMap((group) =>
      group.plans.map((plan) => ({
        "@type": "Offer",
        name: plan.name,
        priceCurrency: "IRR",
        availability: "https://schema.org/InStock",
      })),
    ),
  };

  return (
    <main>
      <StructuredData data={schema} />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <SectionHeader
          eyebrow="Pricing"
          title="Choose the right plan based on your sales field."
          description="Price alone is not the decision. Project size, construction stages, subscription duration, and geographic coverage determine which plan makes sense for your sales team."
        />
        <div className="mt-8">
          <AnswerBox title="Short answer">
            PersianSaze plans are defined by sales field. Bonyan and Royan fit
            small to mid-size projects; Taban and Taban Plus are designed for
            larger projects and more professional coverage.
          </AnswerBox>
        </div>
        <div className="mt-10">
          <PricingTabs locale="en" />
        </div>
      </section>
    </main>
  );
}
