import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Bot,
  ClipboardList,
  Filter,
  GraduationCap,
  MapPinned,
} from "lucide-react";

import { AnswerBox } from "@/components/marketing/answer-box";
import { SectionHeader } from "@/components/marketing/section-header";
import { StructuredData } from "@/components/marketing/structured-data";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { absoluteUrl, site } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const canonicalPath = "/features/";
const pageTitle = "ویژگی‌های پرشین‌سازه";
const pageDescription =
  "نقشه پروژه‌ها، فیلتر مرحله ساخت، CRM فروش پروژه‌ای، پیامک هدفمند و AI تصمیم‌یار در پرشین‌سازه.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: canonicalPath,
    languages: {
      fa: canonicalPath,
      en: "/en/features/",
    },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: absoluteUrl(canonicalPath),
    siteName: site.name,
    locale: "fa_IR",
    type: "website",
  },
};

const features = [
  {
    id: "map",
    title: "نقشه پروژه‌ها",
    description:
      "پروژه‌های ساختمانی را به‌جای فایل‌های پراکنده روی یک نمای مکانی ببینید و مناطق فروش خود را دقیق‌تر انتخاب کنید.",
    icon: MapPinned,
    points: ["نمای شهری پروژه‌ها", "کمک به برنامه‌ریزی فروش", "تمرکز روی محدوده‌های هدف"],
  },
  {
    id: "filters",
    title: "فیلتر مرحله ساخت",
    description:
      "پروژه‌ها را بر اساس مرحله ساخت، متراژ، شهر و تناسب با محصول یا خدمت خود محدود کنید.",
    icon: Filter,
    points: ["مرحله ساخت به‌عنوان سیگنال فروش", "کاهش اتلاف وقت", "پیدا کردن پروژه مرتبط‌تر"],
  },
  {
    id: "crm",
    title: "CRM فروش پروژه‌ای",
    description:
      "پروژه انتخاب‌شده را به فرصت فروش تبدیل کنید: تماس، پیامک، نتیجه، وضعیت و پیگیری بعدی.",
    icon: ClipboardList,
    points: ["ثبت فعالیت فروش", "یادآوری پیگیری", "خروج فروش از حافظه فردی"],
  },
  {
    id: "ai",
    title: "AI تصمیم‌یار",
    description:
      "لایه هوشمند به کاربر کمک می‌کند پروژه را سریع‌تر بفهمد، اولویت فرصت را بسنجد و اقدام بعدی را انتخاب کند.",
    icon: Bot,
    points: ["خلاصه پروژه", "پیشنهاد اقدام بعدی", "اولویت‌بندی فرصت‌ها"],
  },
  {
    id: "training",
    title: "آموزش فروش پروژه‌محور",
    description:
      "تیم فروش با متن تماس، سناریوی پیگیری و روش استفاده از داده‌ها، زمان درست اقدام را روشن‌تر می‌بیند.",
    icon: GraduationCap,
    points: ["متن تماس", "تمرین تیمی", "چک‌لیست پیگیری"],
  },
];

export default function FeaturesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "ویژگی‌های پرشین‌سازه",
    itemListElement: features.map((feature, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: feature.title,
      url: absoluteUrl(`/features#${feature.id}`),
    })),
  };

  return (
    <main>
      <StructuredData data={schema} />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <SectionHeader
          eyebrow="ویژگی‌ها"
          title="ابزارهایی که داده پروژه را به اقدام فروش وصل می‌کنند."
          description="پرشین‌سازه قرار نیست فقط اطلاعات بیشتری نشان بدهد؛ هر ویژگی باید فاصله دیدن فرصت تا اقدام فروش را کم کند."
        />
        <div className="mt-8">
          <AnswerBox>
            ویژگی‌های اصلی پرشین‌سازه شامل نقشه پروژه‌ها، فیلترهای فروش،
            CRM سبک، پیامک هدفمند و AI تصمیم‌یار است. این ترکیب باعث می‌شود
            پروژه ساختمانی از یک رکورد خام به فرصت قابل پیگیری تبدیل شود.
          </AnswerBox>
        </div>
      </section>

      <section className="border-y border-border bg-muted/35">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <Card
                id={feature.id}
                key={feature.id}
                className={cn(
                  "grid gap-8 p-6 md:grid-cols-[0.8fr_1.2fr] md:p-8",
                  index % 2 === 1 && "md:grid-cols-[1.2fr_0.8fr]",
                )}
              >
                <div className={cn(index % 2 === 1 && "md:order-2")}>
                  <Badge variant="outline">ویژگی {index + 1}</Badge>
                  <feature.icon className="mt-5 h-8 w-8 text-zinc-900 dark:text-zinc-100" />
                  <h2 className="mt-5 text-2xl font-bold md:text-3xl">
                    {feature.title}
                  </h2>
                  <p className="mt-4 text-sm leading-8 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
                <div className="grid content-center gap-3">
                  {feature.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-md border border-border bg-background px-4 py-3 text-sm font-medium"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <Card className="flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">بعد از ویژگی‌ها، مسیر قیمت‌گذاری را ببینید.</h2>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              پلن‌ها بر اساس میدان فروش، متراژ پروژه، مراحل ساخت و مدت دسترسی تعریف شده‌اند.
            </p>
          </div>
          <Link href="/pricing" className={cn(buttonVariants())}>
            مشاهده قیمت‌ها
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Card>
      </section>
    </main>
  );
}
