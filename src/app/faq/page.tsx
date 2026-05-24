import type { Metadata } from "next";

import { FaqList } from "@/components/marketing/faq-list";
import { SectionHeader } from "@/components/marketing/section-header";
import { StructuredData } from "@/components/marketing/structured-data";
import { absoluteUrl, faqs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "سوالات متداول پرشین‌سازه",
  description:
    "پاسخ به سوالات رایج درباره پرشین‌سازه، تفاوت با بانک شماره، به‌روزرسانی داده، انتخاب پلن، AI و پوشش تهران، کرج و لواسان.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FaqPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: absoluteUrl("/faq"),
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
          title="سوالات متداول درباره پرشین‌سازه"
          description="این صفحه برای تصمیم خرید و برای پاسخ‌پذیری در موتورهای جست‌وجو و پاسخ‌گو طراحی شده است."
        />
        <div className="mt-10">
          <FaqList />
        </div>
      </section>
    </main>
  );
}
