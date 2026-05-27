import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { SectionHeader } from "@/components/marketing/section-header";
import { StructuredData } from "@/components/marketing/structured-data";
import {
  FinalCTA,
  GradientSection,
  SupplierFAQ,
} from "@/components/marketing/suppliers/shared";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { absoluteUrl } from "@/lib/site-data";
import {
  getConstructionStages,
  getParentCategories,
  salesMotions,
} from "@/lib/supplier-pages-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "دسته‌بندی تأمین‌کنندگان ساختمانی | پرشین‌سازه",
  description:
    "راهنمای کامل دسته‌های فروش ساختمانی، زمان طلایی اقدام، و مسیر پیگیری پروژه‌محور برای تیم‌های فروش.",
  alternates: { canonical: "/suppliers" },
  openGraph: {
    title: "دسته‌بندی تأمین‌کنندگان ساختمانی | پرشین‌سازه",
    description:
      "نقشه مسیر فروش پروژه‌ای از انتخاب دسته تا زمان مناسب مذاکره و خرید.",
    url: absoluteUrl("/suppliers"),
    locale: "fa_IR",
    type: "website",
  },
};

const faqs = [
  {
    question: "این صفحه برای چه تیم‌هایی مفید است؟",
    answer:
      "برای تیم‌های فروش مصالح، تأسیسات، نما، آسانسور، دکوراسیون، خدمات اجرایی و هر کسب‌وکاری که فروشش به پروژه ساختمانی و مرحله ساخت وابسته است.",
  },
  {
    question: "اگر چند دسته محصول داشته باشیم چه کنیم؟",
    answer:
      "برای هر دسته محصول باید پنجره زمانی مستقل تعریف شود؛ ممکن است یک محصول در اسکلت‌بندی نیاز به مذاکره داشته باشد و محصول دیگر در نازک‌کاری به خرید نزدیک شود.",
  },
  {
    question: "آیا زمان‌بندی برای همه پروژه‌ها یکسان است؟",
    answer:
      "خیر. موقعیت پروژه، مقیاس ساخت، مدل تصمیم‌گیری سازنده و نوع محصول روی زمان مناسب تماس، پیشنهاد و پیگیری اثر می‌گذارد.",
  },
  {
    question: "خروجی عملی این صفحه چیست؟",
    answer:
      "کاربر باید بتواند دسته مناسب، نوع فروش، مراحل کلیدی و مسیر پیگیری را تشخیص دهد و برای دیدن دمو یا بررسی پلن اقدام کند.",
  },
];

export default function SuppliersIndexPage() {
  const categories = getParentCategories();
  const stages = getConstructionStages();
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "خانه", item: absoluteUrl("/") },
      {
        "@type": "ListItem",
        position: 2,
        name: "تأمین‌کنندگان",
        item: absoluteUrl("/suppliers"),
      },
    ],
  };
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
    <main className="mx-auto max-w-7xl space-y-8 px-4 py-10 md:px-6 md:py-16">
      <StructuredData data={schema} />
      <StructuredData data={faqSchema} />

      <GradientSection>
        <p className="text-sm font-bold text-muted-foreground">
          برای تأمین‌کنندگان صنعت ساختمان
        </p>
        <h1 className="mt-3 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
          پرشین‌سازه برای چه تأمین‌کنندگانی مناسب است؟
        </h1>
        <p className="mt-5 max-w-4xl leading-8 text-muted-foreground">
          اگر فروش شما به پروژه‌های ساختمانی فعال، مرحله ساخت، زمان تماس و پیگیری
          منظم وابسته است، این صفحه کمک می‌کند مسیر فروش مناسب خود را پیدا کنید.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link className={cn(buttonVariants({ size: "lg" }))} href="/#demo">
            شروع با دمو
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <Link
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            href="#categories"
          >
            مشاهده دسته‌ها
          </Link>
        </div>
      </GradientSection>

      <GradientSection>
        <SectionHeader
          eyebrow="مدل فروش"
          title="ابتدا مدل فروش خود را تشخیص دهید."
          description="پرشین‌سازه برای فروش سریع، فروش مشاوره‌ای و مسیرهای ترکیبی ارزش متفاوتی می‌سازد."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {Object.entries(salesMotions).map(([slug, motion]) => (
            <Card key={slug} className="rounded-3xl border-white/70 bg-white/80 p-5">
              <h3 className="text-lg font-extrabold">{motion.name}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {motion.description}
              </p>
              <Link
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold"
                href={`/suppliers/motions/${slug}`}
              >
                مشاهده مسیر
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Card>
          ))}
        </div>
      </GradientSection>

      <GradientSection id="categories">
        <SectionHeader
          eyebrow="دسته‌ها"
          title="۱۷ دسته اصلی تأمین‌کنندگان"
          description="هر دسته، نمونه محصول، نوع فروش و مراحل ساخت مرتبط خودش را دارد."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/suppliers/${category.slug}`}
              className="rounded-3xl border border-white/70 bg-white/75 p-5 transition hover:-translate-y-0.5 hover:bg-white dark:border-zinc-800 dark:bg-zinc-900/70"
            >
              <p className="text-xs font-bold text-muted-foreground">
                {salesMotions[category.saleType].name}
              </p>
              <h3 className="mt-2 font-extrabold">{category.name}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {category.description}
              </p>
              <p className="mt-3 text-xs leading-6 text-muted-foreground">
                نمونه‌ها: {category.examples.join("، ")}
              </p>
            </Link>
          ))}
        </div>
      </GradientSection>

      <GradientSection>
        <SectionHeader
          eyebrow="زمان طلایی"
          title="هر تأمین‌کننده سه زمان متفاوت دارد."
          description="زمان مذاکره، زمان خرید و زمان اجرا همیشه یکی نیستند. همین تفاوت، ارزش داده مرحله ساخت را می‌سازد."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["زمان مذاکره", "وقتی باید وارد گفت‌وگو شوید، حتی اگر خرید هنوز قطعی نشده باشد."],
            ["زمان خرید", "وقتی پروژه به انتخاب تأمین‌کننده و قیمت‌گیری نزدیک می‌شود."],
            ["زمان اجرا", "وقتی محصول یا خدمت واقعاً وارد پروژه می‌شود."],
          ].map(([title, text]) => (
            <Card key={title} className="rounded-3xl border-white/70 bg-white/80 p-5">
              <h3 className="font-extrabold">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{text}</p>
            </Card>
          ))}
        </div>
      </GradientSection>

      <GradientSection>
        <SectionHeader eyebrow="مراحل ساخت" title="تایم‌لاین تصمیم فروش" />
        <div className="mt-6 flex flex-wrap gap-3">
          {stages.map((stage, index) => (
            <Link
              key={stage.slug}
              href={`/stages/${stage.slug}`}
              className="rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm font-semibold"
            >
              {index + 1}. {stage.name}
            </Link>
          ))}
        </div>
      </GradientSection>

      <GradientSection>
        <SectionHeader
          eyebrow="جریان کار"
          title="داده پروژه باید به اقدام فروش تبدیل شود."
          description="مسیر پیشنهادی: کشف پروژه ← انتخاب مرحله ← تماس هدفمند ← ثبت در CRM ← پیگیری منظم"
        />
        <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {[
            "مشاهده پروژه‌های فعال روی نقشه",
            "فیلتر بر اساس مرحله ساخت",
            "بررسی جزئیات پروژه",
            "ذخیره فرصت مناسب",
            "تماس یا پیامک هدفمند",
            "ثبت فعالیت در CRM",
            "تعریف پیگیری بعدی",
            "حرکت تا زمان خرید",
          ].map((step, index) => (
            <Card key={step} className="rounded-3xl border-white/70 bg-white/80 p-4">
              <p className="text-xs text-muted-foreground">گام {index + 1}</p>
              <p className="mt-2 text-sm font-bold leading-7">{step}</p>
            </Card>
          ))}
        </div>
      </GradientSection>

      <SupplierFAQ items={faqs} />
      <FinalCTA
        title="برای رشد پایدار فروش پروژه‌ای آماده‌اید؟"
        description="با یک دمو کوتاه، دسته مناسب، زمان اقدام و مسیر پیگیری تیم خود را شفاف کنید."
      />
    </main>
  );
}
