import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/marketing/breadcrumbs";
import { StructuredData } from "@/components/marketing/structured-data";
import {
  FinalCTA,
  GradientSection,
  SupplierFAQ,
} from "@/components/marketing/suppliers/shared";
import { absoluteUrl } from "@/lib/site-data";
import {
  getCategoriesBySaleType,
  salesMotions,
  type SaleType,
} from "@/lib/supplier-pages-data";

export function generateStaticParams() {
  return Object.keys(salesMotions).map((motionSlug) => ({ motionSlug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ motionSlug: string }>;
}): Promise<Metadata> {
  const { motionSlug } = await params;
  const motion = salesMotions[motionSlug as SaleType];

  if (!motion) {
    return {};
  }

  return {
    title: `${motion.name} | پرشین‌سازه`,
    description: motion.description,
    alternates: { canonical: `/suppliers/motions/${motionSlug}` },
    openGraph: {
      title: motion.title,
      description: motion.description,
      url: absoluteUrl(`/suppliers/motions/${motionSlug}`),
      locale: "fa_IR",
      type: "article",
    },
  };
}

export default async function SalesMotionPage({
  params,
}: {
  params: Promise<{ motionSlug: string }>;
}) {
  const { motionSlug } = await params;
  const motion = salesMotions[motionSlug as SaleType];

  if (!motion) {
    notFound();
  }

  const categories = getCategoriesBySaleType(motionSlug as SaleType);
  const faqs = [
    {
      question: "این مدل فروش برای چه تیمی مناسب است؟",
      answer: motion.description,
    },
    {
      question: "گام بعدی بعد از تشخیص مدل فروش چیست؟",
      answer:
        "باید مراحل ساخت مرتبط با دسته محصول را مشخص کنید و پروژه‌ها را بر اساس همان مرحله در CRM پیگیری کنید.",
    },
    {
      question: "آیا همه دسته‌های یک مدل فروش زمان‌بندی یکسان دارند؟",
      answer:
        "خیر. مدل فروش جهت کلی را مشخص می‌کند، اما مرحله مذاکره، خرید و اجرا برای هر دسته محصول باید جداگانه بررسی شود.",
    },
  ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  return (
    <main className="mx-auto max-w-6xl space-y-8 px-4 py-12 md:px-6">
      <StructuredData data={faqSchema} />
      <Breadcrumbs
        items={[
          { label: "خانه", href: "/" },
          { label: "زمینه‌های کاری", href: "/suppliers/" },
          { label: motion.name, href: `/suppliers/motions/${motionSlug}/` },
        ]}
      />

      <GradientSection>
        <p className="text-sm font-bold text-muted-foreground">مدل فروش</p>
        <h1 className="mt-3 text-4xl font-black md:text-6xl">{motion.title}</h1>
        <p className="mt-4 max-w-3xl leading-8 text-muted-foreground">
          {motion.description}
        </p>
        <Link href="/suppliers" className="mt-5 inline-block text-sm font-bold">
          بازگشت به دسته‌بندی‌ها
        </Link>
      </GradientSection>

      <GradientSection>
        <h2 className="text-2xl font-black">دسته‌های مرتبط</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/suppliers/${category.slug}`}
              className="rounded-3xl border bg-white/70 p-4"
            >
              <h3 className="font-bold">{category.name}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </GradientSection>

      <GradientSection>
        <h2 className="text-2xl font-black">چطور از این مدل فروش استفاده کنیم؟</h2>
        <p className="mt-3 leading-8 text-muted-foreground">
          مدل فروش کمک می‌کند بدانید پروژه را باید برای اقدام فوری، مذاکره
          زودهنگام یا پیگیری طولانی‌تر وارد CRM کنید. بعد از انتخاب مدل، دسته
          محصول و مرحله ساخت را با هم بررسی کنید.
        </p>
      </GradientSection>

      <SupplierFAQ items={faqs} />
      <FinalCTA
        title="مود فروش تیم خود را نهایی کنید"
        description="با دمو، تنظیمات مدل فروش و KPI پیگیری را متناسب با بازار خود دریافت کنید."
      />
    </main>
  );
}
