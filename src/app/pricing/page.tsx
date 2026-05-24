import type { Metadata } from "next";

import { AnswerBox } from "@/components/marketing/answer-box";
import { PricingTabs } from "@/components/marketing/pricing-tabs";
import { SectionHeader } from "@/components/marketing/section-header";
import { StructuredData } from "@/components/marketing/structured-data";
import { absoluteUrl, pricingGroups } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "قیمت‌گذاری پرشین‌سازه",
  description:
    "پلن‌های بنیان، رویان، تابان و تابان پلاس برای دسترسی به پروژه‌های ساختمانی بر اساس متراژ، مراحل ساخت و مدت اشتراک.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "اشتراک پرشین‌سازه",
    description:
      "اشتراک اطلاعات به‌روز پروژه‌های ساختمانی، نقشه، فیلتر، CRM، پیامک و AI تصمیم‌یار برای تأمین‌کنندگان صنعت ساختمان.",
    url: absoluteUrl("/pricing"),
    offers: pricingGroups.flatMap((group) =>
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
          eyebrow="قیمت‌گذاری"
          title="پلن مناسب را بر اساس میدان فروش انتخاب کنید."
          description="برای انتخاب پلن، فقط قیمت مهم نیست؛ متراژ پروژه، مراحل ساخت، مدت اشتراک و پوشش جغرافیایی تعیین می‌کند کدام پلن برای تیم فروش شما منطقی‌تر است."
        />
        <div className="mt-8">
          <AnswerBox>
            پرشین‌سازه پلن‌ها را بر اساس میدان فروش تعریف می‌کند. بنیان و رویان
            برای پروژه‌های کوچک تا متوسط مناسب‌اند؛ تابان و تابان پلاس برای
            پروژه‌های بزرگ‌تر و پوشش حرفه‌ای‌تر طراحی شده‌اند.
          </AnswerBox>
        </div>
        <div className="mt-10">
          <PricingTabs />
        </div>
      </section>
    </main>
  );
}
