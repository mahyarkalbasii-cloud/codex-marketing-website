import type { Metadata } from "next";

import { FaqList } from "@/components/marketing/faq-list";
import { SectionHeader } from "@/components/marketing/section-header";
import { StructuredData } from "@/components/marketing/structured-data";
import { routeOgImage } from "@/lib/og-metadata";
import { absoluteUrl, faqs, site } from "@/lib/site-data";

const canonicalPath = "/faq/";
const pageTitle = "سوالات متداول فروش پروژه‌های ساختمانی";
const pageDescription =
  "پاسخ به سوالات رایج درباره پرشین‌سازه، تفاوت با بانک شماره، به‌روزرسانی داده، انتخاب پلن، AI و پوشش تهران، کرج و لواسان.";

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

export default function FaqPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: absoluteUrl(canonicalPath),
    mainEntity: faqs.map((item) => ({
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
          title="سوالات متداول پرشین‌سازه برای فروش پروژه‌های ساختمانی"
          titleAs="h1"
          description="این صفحه برای تصمیم خرید و برای پاسخ‌پذیری در موتورهای جست‌وجو و پاسخ‌گو طراحی شده است."
        />
        <div className="mt-10">
          <FaqList questionHeadingLevel="h2" />
        </div>
      </section>
    </main>
  );
}
