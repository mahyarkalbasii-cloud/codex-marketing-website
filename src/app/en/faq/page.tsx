import type { Metadata } from "next";

import { FaqList } from "@/components/marketing/faq-list";
import { SectionHeader } from "@/components/marketing/section-header";
import { StructuredData } from "@/components/marketing/structured-data";
import { faqsEn, siteEn } from "@/lib/site-data.en";

const canonicalPath = "/en/faq/";
const pageTitle = "PersianSaze FAQ";
const pageDescription =
  "Answers to common questions about PersianSaze, project data, plan selection, AI, and current coverage in Tehran, Karaj, and Lavasan.";

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: canonicalPath,
    languages: {
      fa: "/faq/",
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

export default function EnglishFaqPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: `${siteEn.url}${canonicalPath}`,
    mainEntity: faqsEn.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main>
      <StructuredData data={schema} />
      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked questions about PersianSaze"
          description="This page is designed to clarify the buying decision and answer common search and AI-answer questions."
        />
        <div className="mt-10">
          <FaqList items={faqsEn} />
        </div>
      </section>
    </main>
  );
}
