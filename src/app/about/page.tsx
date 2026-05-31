import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Building2,
  Database,
  MapPinned,
  ShieldCheck,
  Users,
} from "lucide-react";

import { StructuredData } from "@/components/marketing/structured-data";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { routeOgImage } from "@/lib/og-metadata";
import { getOrganizationSchema } from "@/lib/schema";
import { absoluteUrl, site } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const canonicalPath = "/about/";
const pageTitle = "درباره تیم فروش پروژه‌محور";
const pageDescription =
  "پرشین‌سازه زیرساخت فروش پروژه‌محور برای تأمین‌کنندگان صنعت ساختمان است؛ از جمع‌آوری میدانی داده تا CRM، آموزش و تصمیم‌یار AI.";

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

const storyBlocks = [
  {
    title: "مسئله از بازار واقعی شروع شد",
    description:
      "فروش در صنعت ساختمان معمولاً با داده‌های پراکنده، تماس‌های دیرهنگام و پیگیری‌های وابسته به حافظه جلو می‌رود. پرشین‌سازه برای همین گره ساخته شد: تبدیل پروژه‌های در حال ساخت به فرصت‌های قابل ارزیابی و قابل پیگیری.",
    icon: Building2,
  },
  {
    title: "داده فقط وقتی ارزش دارد که قابل اقدام باشد",
    description:
      "تیم میدانی، وضعیت پروژه‌ها را به‌روز می‌کند و محصول، داده را به نقشه، فیلتر، CRM، پیامک و گزارش قابل تصمیم تبدیل می‌کند. هدف ما فروش اطلاعات خام نیست؛ ساختن مسیر فروش منظم‌تر است.",
    icon: Database,
  },
  {
    title: "اعتماد از کیفیت فرایند می‌آید",
    description:
      "کیفیت داده، آموزش فروش و پشتیبانی کنار هم قرار می‌گیرند تا تأمین‌کننده بداند کدام پروژه برای محصولش مهم‌تر است، چه زمانی باید تماس بگیرد و پیگیری بعدی را چطور جلو ببرد.",
    icon: ShieldCheck,
  },
];

const teamAreas = [
  {
    title: "عملیات و داده میدانی",
    description:
      "ثبت، کنترل و به‌روزرسانی پروژه‌های فعال تهران، کرج و لواسان با تمرکز روی نشانه‌های قابل اتکا برای فروش.",
  },
  {
    title: "محصول، CRM و AI",
    description:
      "تبدیل داده ساختمانی به تجربه‌ای قابل استفاده برای نقشه، فیلتر، اولویت‌بندی فرصت و تصمیم‌گیری سریع‌تر.",
  },
  {
    title: "فروش و موفقیت مشتری",
    description:
      "کمک به تیم‌های B2B برای انتخاب اشتراک درست، طراحی ریتم پیگیری و استفاده بهتر از داده در مذاکره.",
  },
];

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${absoluteUrl(canonicalPath)}#about`,
    name: "درباره پرشین‌سازه",
    description: pageDescription,
    url: absoluteUrl(canonicalPath),
    inLanguage: "fa-IR",
    isPartOf: {
      "@type": "WebSite",
      name: site.name,
      url: site.url,
    },
    mainEntity: getOrganizationSchema({ withContext: false }),
  };

  return (
    <main>
      <StructuredData data={schema} />
      <section className="border-b border-[#e4d8c8] bg-[var(--page-bg)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <Badge variant="signal">درباره ما</Badge>
            <h1 className="mt-5 max-w-4xl text-3xl font-black leading-[1.35] tracking-normal text-[#171512] md:text-5xl md:leading-[1.25]">
              درباره پرشین‌سازه؛ زیرساخت فروش پروژه‌محور ساختمان
            </h1>
            <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg md:leading-9">
              ما پرشین‌سازه را برای یک هدف روشن ساخته‌ایم: تأمین‌کننده
              ساختمانی، پروژه مناسب را زودتر ببیند، بهتر ارزیابی کند و با
              فرایند فروش منظم‌تر جلو برود.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact/" className={cn(buttonVariants({ size: "lg" }))}>
                تماس با تیم فروش
                <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              </Link>
              <Link
                href="/subscriptions/"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              >
                مشاهده اشتراک‌ها
              </Link>
            </div>
          </div>
          <Card className="p-6">
            <Users className="h-8 w-8 text-[#A8573D]" aria-hidden="true" />
            <h2 className="mt-5 text-2xl font-black leading-9 text-[#171512]">
              تیم ما
            </h2>
            <p className="mt-4 text-sm leading-8 text-muted-foreground">
              تیم پرشین‌سازه ترکیبی از عملیات میدانی، محصول، فروش و موفقیت
              مشتری است؛ تیمی که بازار ساخت‌وساز را هم از خیابان می‌فهمد، هم
              از زاویه داده و فرایند فروش.
            </p>
          </Card>
        </div>
      </section>

      <section className="border-b border-[#e4d8c8] bg-[#f5f0e6]">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
          <div className="grid gap-4 md:grid-cols-3">
            {storyBlocks.map((block) => (
              <Card key={block.title} className="p-6">
                <block.icon className="h-7 w-7 text-[#A8573D]" aria-hidden="true" />
                <h2 className="mt-5 text-xl font-black leading-8 text-[#171512]">
                  {block.title}
                </h2>
                <p className="mt-3 text-sm leading-8 text-muted-foreground">
                  {block.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#e4d8c8] bg-[var(--page-bg)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:px-6 md:py-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Badge variant="outline">ساختار تیم</Badge>
            <h2 className="mt-4 text-2xl font-black leading-9 text-[#171512] md:text-3xl">
              تیمی برای داده، محصول و اجرا
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              پرشین‌سازه وقتی درست کار می‌کند که داده میدانی، ابزار نرم‌افزاری
              و آموزش فروش هم‌زمان جلو بروند. برای همین تیم ما حول همین سه
              جریان سازمان‌دهی شده است.
            </p>
          </div>
          <div className="grid gap-3">
            {teamAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-[1.25rem] border border-[#e4d8c8] bg-[#fffaf1]/74 p-5 shadow-sm shadow-[#2a241d]/[0.025]"
              >
                <h3 className="text-lg font-black leading-8 text-[#171512]">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f0e6]">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
          <Card className="grid gap-6 p-6 md:grid-cols-[0.8fr_1.2fr] md:p-8">
            <div>
              <MapPinned className="h-8 w-8 text-[#A8573D]" aria-hidden="true" />
              <h2 className="mt-5 text-2xl font-black leading-9 text-[#171512]">
                آدرس دفتر
              </h2>
            </div>
            <div className="text-sm leading-8 text-muted-foreground">
              <p className="font-bold text-[#2a241d]">{site.address}</p>
              <p className="mt-2">
                برای هماهنگی جلسه، دمو یا گفت‌وگوی فروش، از صفحه تماس پیام
                بگذارید یا با شماره‌های فروش تماس بگیرید.
              </p>
              <Link
                href="/contact/"
                className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#A8573D] transition hover:text-[#783824]"
              >
                رفتن به صفحه تماس
                <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
