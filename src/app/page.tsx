import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  AlertCircle,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Clock3,
  ClipboardList,
  Database,
  Filter,
  ListChecks,
  MapPin,
  MapPinned,
  MessageSquareText,
  Play,
  Route,
  Search,
  Send,
  Target,
  Timer,
} from "lucide-react";

import { HeroMapVisual } from "@/components/hero/HeroMapVisual";
import { FaqList } from "@/components/marketing/faq-list";
import { MarketProblemPresentationVisual } from "@/components/marketing/market-problem-presentation-visual";
import { PricingSection } from "@/components/marketing/pricing-section";
import { ProductPreviewTheater } from "@/components/marketing/product-preview-theater";
import { SalesFlowRevealController } from "@/components/marketing/sales-flow-reveal-controller";
import { SectionHeader } from "@/components/marketing/section-header";
import { SolutionRevealController } from "@/components/marketing/solution-reveal-controller";
import { StructuredData } from "@/components/marketing/structured-data";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { faqs, site } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "پرشین‌سازه | پروژه‌های ساختمانی فعال را زودتر پیدا کنید",
  description:
    "پرشین‌سازه پروژه‌های در حال ساخت در تهران، کرج و لواسان را جمع‌آوری و دسته‌بندی می‌کند تا تأمین‌کنندگان محصولات و خدمات ساختمانی سریع‌تر پروژه‌های مرتبط را بررسی و پیگیری کنند.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "پرشین‌سازه | فروش پروژه‌محور برای بازار ساختمان",
    description:
      "نقشه پروژه‌ها، فیلتر مرحله ساخت و پیگیری فروش برای تأمین‌کنندگان محصولات و خدمات ساختمانی.",
    url: site.url,
    siteName: site.name,
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "پرشین‌سازه | پروژه‌های ساختمانی فعال را زودتر پیدا کنید",
    description:
      "پرشین‌سازه به تأمین‌کنندگان ساختمانی کمک می‌کند پروژه‌های در حال ساخت را روی نقشه ببینند، بررسی کنند و پیگیری فروش را منظم کنند.",
  },
};

const customerTypes = [
  {
    label: "سرعت رسیدن مهم‌تر است",
    title: "فروش سریع و تراکنشی",
    text: "برای کالاهایی که فاصله نیاز تا خرید کوتاه است، ارزش اصلی در شناسایی زودتر پروژه‌های فعال و آماده خرید ساخته می‌شود.",
    tags: ["سیمان", "آجر", "گچ", "آهن‌آلات", "بتن", "مصالح پایه"],
    icon: Timer,
    motif: "fast",
  },
  {
    label: "زودتر وارد مذاکره شدن مهم‌تر است",
    title: "فروش مشاوره‌ای و تصمیم‌ساز",
    text: "برای فروش‌هایی که نیازمند اعتمادسازی، بررسی فنی یا تصمیم‌سازی طولانی‌ترند، ورود زودتر به گفت‌وگو تعیین‌کننده است.",
    tags: ["آسانسور", "تأسیسات", "نما", "درب و پنجره", "کابینت", "خدمات مهندسی"],
    icon: Target,
    motif: "consultative",
  },
];

const marketProblemRows = [
  ["پروژه‌های پراکنده", "پیدا کردن فرصت مرتبط زمان‌بر است", AlertCircle],
  ["اطلاعات نامطمئن", "مرحله ساخت و وضعیت فعالیت روشن نیست", Database],
  ["زمان تماس نامناسب", "تماس زود یا دیر فرصت را فرسوده می‌کند", Clock3],
] as const;

const solutionCards = [
  {
    title: "اطلاعات به‌روز پروژه‌ها",
    body: "آدرس پروژه، مرحله ساخت، تصاویر واقعی و اطلاعات تماس، در یک مسیر مشخص جمع‌آوری و به‌روزرسانی می‌شود تا بتوانید دقیق‌تر پروژه مناسب را پیدا کنید.",
    icon: Database,
    tag: "اطلاعات به‌روز پروژه‌ها",
    motif: "data",
  },
  {
    title: "ابزارهای اجرایی فروش",
    body: "با ابزارهایی مثل نقشه، فیلترها، CRM و پیامک هوشمند، پیدا کردن، پیگیری و جلو بردن فرصت‌های فروش ساده‌تر و منظم‌تر می‌شود.",
    icon: Filter,
    tag: "ابزارهای اجرایی فروش",
    motif: "workflow",
  },
  {
    title: "آموزش برای استفاده بهتر",
    body: "تیم شما فقط به اطلاعات دسترسی ندارد، یاد می‌گیرد چگونه بهتر جست‌وجو کند، درست‌تر پیگیری کند و هدفمندتر جلو برود.",
    icon: BookOpen,
    tag: "آموزش فروش",
    motif: "training",
  },
] as const;

const heroProofCards = [
  {
    value: "داده پروژه",
    label: "پروژه، مرحله ساخت، موقعیت",
    icon: Database,
    accent: "bg-amber-300",
  },
  {
    value: "ابزار پیگیری",
    label: "CRM، پیامک، یادآوری",
    icon: ListChecks,
    accent: "bg-[#6f765f]",
  },
  {
    value: "آموزش فروش",
    label: "متن تماس، روش پیگیری، نکات کاربردی",
    icon: BookOpen,
    accent: "bg-[#2a241d]",
  },
] as const;

const howItWorksLayers = [
  {
    title: "لایه جمع‌آوری و به‌روزرسانی اطلاعات",
    tag: "داده زنده، کنترل‌شده",
    body: "اطلاعات پروژه‌های در حال ساخت به‌صورت میدانی جمع‌آوری می‌شود و به‌طور مستمر به‌روزرسانی می‌ماند تا شما به یک تصویر زنده و قابل اعتماد از بازار دسترسی داشته باشید.",
    icon: Database,
    steps: [
      "پروژه‌های در حال ساخت",
      "بازدید میدانی",
      "جمع‌آوری مستمر",
      "به‌روزرسانی مستمر",
      "دقت و اعتبار",
      "تصویر زنده از بازار",
    ],
  },
  {
    title: "لایه هوش مصنوعی و اقدام فروش",
    tag: "فروش پروژه‌محور",
    body: "هوش مصنوعی پرشین‌سازه به شما کمک می‌کند پروژه‌ها را بهتر ارزیابی کنید، فرصت‌های مناسب را سریع‌تر ببینید و تصمیم دقیق‌تری برای اقدام بگیرید.",
    icon: ClipboardList,
    steps: [
      "تحلیل و تفسیر اطلاعات",
      "شناسایی فرصت‌های مناسب",
      "امتیازدهی و اولویت‌بندی",
      "پیشنهاد اقدام هوشمند",
      "تصمیم دقیق‌تر، فروش بیشتر",
    ],
  },
] as const;

const salesFlowSteps = [
  {
    title: "شناسایی فرصت",
    body: "پروژه‌هایی را پیدا کنید که از نظر موقعیت، مرحله ساخت، مقیاس و نوع نیاز به محصول یا خدمت شما هم‌خوانی دارند.",
    icon: Search,
    outcome: "نتیجه: لیست کوتاه پروژه‌های هم‌خوان",
  },
  {
    title: "ارزیابی و اولویت‌بندی",
    body: "همه پروژه‌ها ارزش یکسان ندارند. باید بتوان تشخیص داد کدام پروژه زنده‌تر است، کدام متوقف نیست و کدام به زمان مناسب اقدام نزدیک‌تر است.",
    icon: BarChart3,
    outcome: "نتیجه: اولویت‌بندی فرصت‌ها بر اساس آمادگی",
  },
  {
    title: "ارتباط و مذاکره",
    body: "پس از انتخاب فرصت مناسب، ارتباط اولیه باید نه تصادفی و بی‌ربط باشد، نه تهاجمی و بدون زمینه. کیفیت و زمان تماس تعیین‌کننده است.",
    icon: MessageSquareText,
    outcome: "نتیجه: تماس و مذاکره با زمینه روشن",
  },
  {
    title: "پیگیری و تبدیل",
    body: "بخش مهمی از ارزش فروش، نه در تماس اول، بلکه در پیگیری منظم و شبکه‌ای ساخته می‌شود. اینجاست که فرصت به قرارداد نزدیک می‌شود.",
    icon: CheckCircle2,
    outcome: "نتیجه: قرارداد و رابطه پایدار",
  },
] as const;

function SolutionCardMotif({ motif }: { motif: (typeof solutionCards)[number]["motif"] }) {
  if (motif === "data") {
    return (
      <div
        className="solution-card-illustration solution-illustration-grid mt-6 h-[120px] rounded-[1.25rem] border border-[#eadfce] bg-[#fbf6ed]/70 p-3"
        aria-hidden="true"
      >
        <div className="grid h-full content-center gap-2">
          {[
            { status: "به‌روز", tone: "clay", width: "w-32" },
            { status: "تأیید شده", tone: "dark", width: "w-24" },
            { status: "در حال بررسی", tone: "live", width: "w-28" },
          ].map((row) => (
            <div
              key={row.status}
              className="flex min-w-0 items-center gap-2 rounded-2xl border border-[#eadfce] bg-[#fffaf1]/88 px-3 py-2"
            >
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[#e4d8c8] bg-[#fbf6ed] text-[#7a6a59]">
                <MapPin className="h-3.5 w-3.5" />
              </span>
              <span className={cn("h-2 rounded-full bg-[#d8c9b6]", row.width)} />
              <span
                className={cn(
                  "ms-auto inline-flex h-7 shrink-0 items-center rounded-full border px-2.5 text-[11px] font-bold",
                  row.tone === "clay" &&
                    "border-[#c9792b]/35 bg-[#f6d6a8]/70 text-[#6f3e18]",
                  row.tone === "dark" &&
                    "border-[#2a241d]/10 bg-[#2a241d] text-[#fffaf1]",
                  row.tone === "live" &&
                    "solution-data-live border-[#e4d8c8] bg-[#fffaf1] text-[#6f6254]",
                )}
              >
                {row.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (motif === "workflow") {
    return (
      <div
        className="solution-card-illustration mt-6 h-[120px] rounded-[1.25rem] border border-[#eadfce] bg-[#fbf6ed]/72 p-3"
        aria-hidden="true"
      >
        <div className="relative h-full">
          <div className="absolute right-1 top-0 w-[82%] rounded-2xl border border-[#eadfce] bg-[#fffaf1] p-2 shadow-sm shadow-[#2a241d]/[0.025]">
            <div className="flex gap-1.5 text-[10px] font-bold text-[#6f6254]">
              {["مرحله", "منطقه", "فروش"].map((chip, index) => (
                <span
                  key={chip}
                  className={cn(
                    "rounded-full border px-2 py-1",
                    index === 1
                      ? "solution-tool-highlight border-[#d99a35]/45 bg-amber-300/70 text-[#4b2c12]"
                      : "border-[#eadfce] bg-[#fbf6ed] text-[#7a6a59]",
                  )}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="solution-illustration-grid absolute left-5 top-[34px] h-12 w-[78%] rounded-2xl border border-[#e4d8c8] bg-[#ece3d5]/78">
            <span className="absolute right-[30%] top-4 h-3 w-3 rounded-full bg-[#2a241d] ring-4 ring-[#fffaf1]/75" />
            <span className="absolute left-[22%] top-6 h-3 w-3 rounded-full bg-[#c9792b] ring-4 ring-[#fffaf1]/75" />
            <span className="absolute right-6 top-7 h-px w-20 rotate-[-10deg] border-t border-dashed border-[#8a6a41]/35" />
          </div>

          <div className="absolute bottom-0 right-8 flex w-[76%] items-center gap-2 rounded-2xl border border-[#eadfce] bg-[#fffaf1] px-3 py-2 shadow-sm shadow-[#2a241d]/[0.025]">
            <MessageSquareText className="h-4 w-4 text-[#7a6a59]" />
            <span className="h-2 flex-1 rounded-full bg-[#d8c9b6]" />
            <span className="inline-flex items-center gap-1 rounded-full border border-[#c9792b]/30 bg-[#f6d6a8]/55 px-2 py-1 text-[10px] font-bold text-[#6f3e18]">
              <Send className="h-3 w-3" />
              ارسال شد
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="solution-card-illustration mt-6 h-[120px] rounded-[1.25rem] border border-[#eadfce] bg-[#fbf6ed]/70 p-3"
      aria-hidden="true"
    >
      <div className="grid h-full content-center gap-2">
        {[
          { duration: "۸ دقیقه", progress: true, done: false, width: "w-28" },
          { duration: "۱۲ دقیقه", progress: false, done: true, width: "w-24" },
          { duration: "۶ دقیقه", progress: false, done: false, width: "w-32" },
        ].map((lesson) => (
          <div
            key={lesson.duration}
            className="rounded-2xl border border-[#eadfce] bg-[#fffaf1]/88 px-3 py-2"
          >
            <div className="flex min-w-0 items-center gap-2">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[#e4d8c8] bg-[#fbf6ed] text-[#7a6a59]">
                {lesson.done ? (
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#2a241d]" />
                ) : (
                  <Play className="h-3.5 w-3.5" />
                )}
              </span>
              <span className={cn("h-2 rounded-full bg-[#d8c9b6]", lesson.width)} />
              <span className="ms-auto shrink-0 text-[10px] font-bold text-[#7a6a59]">
                {lesson.duration}
              </span>
            </div>
            {lesson.progress ? (
              <span className="solution-lesson-progress mt-2 block h-1.5 overflow-hidden rounded-full bg-[#eadfce]">
                <span className="block h-full w-[58%] origin-right rounded-full bg-[#c9792b]" />
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function AudienceCardMotif({ motif }: { motif: string }) {
  return (
    <div className="mt-6 rounded-2xl border border-zinc-200 bg-[#faf9f6] p-4 dark:border-zinc-800 dark:bg-zinc-950">
      {motif === "fast" ? (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span>اولویت امروز</span>
            <span className="rounded-full bg-amber-100 px-2 py-1 text-amber-800 dark:bg-amber-300 dark:text-zinc-950">
              تماس سریع
            </span>
          </div>
          <div className="relative h-2 rounded-full bg-zinc-200 dark:bg-zinc-800">
            <span className="absolute right-0 top-0 h-2 w-3/4 rounded-full bg-[#6f765f]" />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-semibold text-zinc-500">
          {["شناخت", "مذاکره", "اعتماد"].map((item, index) => (
            <div key={item} className="rounded-xl border border-zinc-200 bg-white p-2 dark:border-zinc-800 dark:bg-zinc-900">
              <span className={cn("mx-auto mb-1 block h-2 w-2 rounded-full", index === 1 ? "bg-[#d99a35]" : "bg-[#2f332d] dark:bg-zinc-300")} />
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function DemoClosingVisual() {
  return (
    <div className="relative overflow-hidden rounded-[1.4rem] border border-[#e4d8c8] bg-[#fbf6ed] p-5 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="absolute inset-0 map-parcel-pattern opacity-70" />
      <div className="relative rounded-[1.2rem] border border-[#e4d8c8] bg-[#fffaf1]/90 p-4 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/90">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-xs text-zinc-500">نمونه مسیر دمو</div>
            <div className="mt-1 text-base font-bold">نقشه پروژه‌ها تا پیگیری فروش</div>
          </div>
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
            <Route className="h-5 w-5" />
          </span>
        </div>
        <div className="mt-5 grid gap-3">
          {["مشاهده مسیر پیدا کردن پروژه", "بررسی فیلترها و مرحله ساخت", "مرور پیگیری فروش"].map((item, index) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl border border-[#e4d8c8] bg-[#fbf6ed] p-3 dark:border-zinc-800 dark:bg-zinc-950">
              <span className={cn("h-2.5 w-2.5 rounded-full", index === 1 ? "bg-[#d99a35]" : "bg-[#6f765f]")} />
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MarketProblemSection() {
  return (
    <section
      id="problem"
      className="relative overflow-hidden border-b border-[#e4d8c8] bg-[radial-gradient(circle_at_18%_20%,rgba(201,121,43,0.10),transparent_30%)] dark:border-zinc-800 dark:bg-none"
      aria-labelledby="market-problem-title"
    >
      <div className="absolute inset-0 map-parcel-pattern opacity-35" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-[.9fr_1.1fr] md:items-center md:gap-10 md:px-6 md:py-20">
        <div className="relative order-2 max-w-3xl text-center md:order-none md:text-right">
          <h2
            id="market-problem-title"
            className="text-3xl font-bold leading-[1.3] text-foreground md:text-[2.85rem] md:leading-[1.24] lg:text-5xl"
          >
            فروش در بازار ساختمان، فقط به داشتن محصول خوب بستگی ندارد
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg md:leading-9">
            پروژه‌ها پراکنده‌اند، اطلاعات بازار همیشه دقیق و به‌روز نیست و اگر
            تماس زود یا دیر انجام شود، فرصت فروش از بین می‌رود. برای همین پیدا
            کردن پروژه مناسب، هنوز برای خیلی از تأمین‌کنندگان محصولات و خدمات
            ساختمانی کاری زمان‌بر، پرهزینه و فرسایشی است.
          </p>
          <Link
            href="#solution"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "mt-6 h-11 rounded-xl bg-white/80 px-5 shadow-sm dark:bg-zinc-900/80",
            )}
          >
            آشنایی با راه‌حل پرشین‌سازه
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>

        <Card className="relative order-1 overflow-hidden p-0 shadow-lg shadow-[#2a241d]/[0.045] md:order-none">
          <article aria-label="نمای انتزاعی مشکل فروش در بازار ساختمان">
            <MarketProblemPresentationVisual />

            <div className="grid gap-3 p-4 md:grid-cols-3">
              {marketProblemRows.map(([project, problem, Icon]) => (
                <div
                  key={project}
                  className="group flex items-center gap-3 rounded-2xl border border-zinc-200 bg-[#faf9f6] p-3 transition duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-white dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-zinc-500 shadow-sm dark:bg-zinc-900">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      {project}
                    </div>
                    <div className="text-xs leading-5 text-zinc-500">
                      {problem}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </Card>
      </div>
    </section>
  );
}

function SolutionOverviewSection() {
  return (
    <section
      id="solution"
      className="relative overflow-hidden border-b border-[#e4d8c8] bg-[#fffaf1]/42 dark:border-zinc-800 dark:bg-zinc-950"
      aria-labelledby="solution-title"
    >
      <SolutionRevealController />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#faf9f6] to-transparent dark:from-zinc-950" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
        <header className="solution-reveal-header relative mx-auto max-w-3xl text-center">
          <h2
            id="solution-title"
            className="text-3xl font-bold leading-[1.3] text-foreground md:text-[2.85rem] md:leading-[1.24] lg:text-5xl"
          >
            پرشین‌سازه پیدا کردن پروژه مناسب را ساده‌تر می‌کند.
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg md:leading-9">
            پرشین‌سازه با داده‌های زنده پروژه‌های در حال ساخت، ابزارهای اجرایی
            مثل CRM و پیامک هوشمند، و آموزش استفاده درست از این ابزارها، به شما
            کمک می‌کند فرصت‌های مناسب را زودتر ببینید و مسیر فروش را هدفمندتر
            پیش ببرید.
          </p>
        </header>

        <div className="relative mt-10 grid gap-5 md:mt-12 md:grid-cols-3 md:gap-4 lg:gap-6">
          <div className="solution-progress-line pointer-events-none absolute left-[12%] right-[12%] top-[4.15rem] hidden border-t border-dashed border-[#c9792b]/28 md:block" aria-hidden="true" />
          <div className="solution-progress-line-mobile pointer-events-none absolute bottom-12 left-10 top-12 border-l border-dashed border-[#c9792b]/28 md:hidden" aria-hidden="true" />
          {solutionCards.map((card, index) => (
            <article
              key={card.title}
              style={
                {
                  "--solution-delay": `${index * 120}ms`,
                } as CSSProperties & Record<"--solution-delay", string>
              }
              className={cn(
                "solution-card group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border bg-[#fffaf1]/86 p-5 shadow-sm shadow-[#2a241d]/[0.025] md:p-5 lg:p-6 dark:bg-zinc-900/82",
                index === 1
                  ? "border-[#c9792b]/25"
                  : "border-[#e4d8c8] dark:border-zinc-800",
              )}
            >
              <div className="relative flex items-center justify-between gap-3">
                <div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-2xl border text-[#2a241d] shadow-sm dark:text-white",
                    index === 1
                      ? "border-[#c9792b]/40 bg-[#f6d6a8]/78 dark:border-[#c9792b]/35 dark:bg-[#c9792b]/16"
                      : "border-[#e4d8c8] bg-[#fbf6ed] dark:border-zinc-800 dark:bg-zinc-950",
                  )}
                >
                  <card.icon className="h-5 w-5" />
                </div>
                <span className="solution-number-badge grid h-8 w-8 place-items-center rounded-full border border-[#e4d8c8] bg-[#f6ecde] text-sm font-bold text-[#2a241d] shadow-sm shadow-[#2a241d]/[0.025]">
                  {(index + 1).toLocaleString("fa-IR")}
                </span>
              </div>
              <span className="mt-5 inline-flex w-fit max-w-full rounded-full border border-[#eadfce] bg-[#fbf6ed] px-3 py-1 text-[11px] font-semibold leading-5 text-[#6f6254]">
                {card.tag}
              </span>
              <h3 className="mt-3 text-xl font-bold leading-8 text-[#2a241d]">
                {card.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-8 text-zinc-600 lg:leading-9 dark:text-zinc-400">
                {card.body}
              </p>
              <SolutionCardMotif motif={card.motif} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductPreviewSection() {
  return (
    <section
      id="product"
      className="relative overflow-hidden border-b border-[#e4d8c8] bg-[radial-gradient(circle_at_82%_12%,rgba(201,121,43,0.10),transparent_28%),radial-gradient(circle_at_18%_40%,rgba(93,105,83,0.08),transparent_32%)] dark:border-zinc-800 dark:bg-zinc-950"
      aria-labelledby="product-title"
    >
      <div className="absolute inset-0 map-parcel-pattern opacity-30" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-12 md:px-6 md:py-16">
        <header className="relative grid gap-4 text-center md:grid-cols-[1fr_.85fr] md:items-end md:text-right">
          <div>
            <h2
              id="product-title"
              className="text-2xl font-bold leading-[1.32] text-foreground md:text-4xl md:leading-[1.28] lg:text-[2.35rem]"
            >
              نقشه، فیلتر و کارت پروژه — همه روی یک صفحه
            </h2>
          </div>
          <p className="mx-auto max-w-3xl text-base leading-8 text-muted-foreground md:mx-0 md:text-lg md:leading-9">
            این نمای واقعی محصول است: پروژه‌ها را با فیلترهای کاربردی محدود
            می‌کنید، روی نقشه می‌بینید، اطلاعات نمونه را بررسی می‌کنید و مسیر
            اقدام را برای تیم فروش روشن نگه می‌دارید. در نسخه واقعی، داده‌ها
            زنده و کنترل‌شده هستند.
          </p>
        </header>

        <div className="mt-8 flex justify-center">
          <span className="rounded-full border border-[#e4d8c8] bg-[#fbf6ed]/84 px-3 py-1 text-xs font-semibold leading-5 text-[#7a6a59]">
            نمایش نمونه، بدون داده واقعی · تهران، کرج، لواسان
          </span>
        </div>

        <ProductPreviewTheater />

        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-7 text-[#7a6a59]">
          این نمایی نمونه است. در نسخه واقعی، داده‌ها زنده و کنترل‌شده هستند.
        </p>

        <div className="mt-7 flex justify-center">
          <Link
            href="#demo"
            className={cn(
              buttonVariants(),
              "h-11 rounded-2xl px-6 shadow-sm",
            )}
          >
            درخواست دمو
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden border-b border-[#e4d8c8] bg-[#fffaf1]/48 dark:border-zinc-800 dark:bg-zinc-950"
      aria-labelledby="how-it-works-title"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(201,121,43,0.09),transparent_28%)]" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
        <header className="relative mx-auto max-w-4xl text-center">
          <h2
            id="how-it-works-title"
            className="text-2xl font-bold leading-[1.32] text-foreground md:text-4xl md:leading-[1.28] lg:text-[2.35rem]"
          >
            از داده زنده تا تصمیم فروش، در یک مسیر روشن
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg md:leading-9">
            پرشین‌سازه دو لایه را به هم وصل می‌کند: جمع‌آوری مستمر اطلاعات پروژه‌ها در میدان، و هوش مصنوعی که این داده‌ها را به فرصت قابل اقدام برای تیم فروش تبدیل می‌کند.
          </p>
        </header>

        <div className="relative mt-8 grid gap-5 md:mt-10 lg:grid-cols-2">
          {howItWorksLayers.map((layer) => (
            <article
              key={layer.title}
              className="min-w-0 overflow-hidden rounded-[1.5rem] border border-[#e4d8c8] bg-[#fffaf1]/84 p-5 shadow-md shadow-[#2a241d]/[0.04] md:p-7 dark:border-zinc-800 dark:bg-zinc-900/82"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#e4d8c8] bg-[#fbf6ed] text-[#2a241d] dark:border-zinc-800 dark:bg-zinc-950 dark:text-white">
                  <layer.icon className="h-5 w-5" />
                </div>
                <Badge className="border-[#e4d8c8] bg-[#fbf6ed] text-[#5f5348] dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
                  {layer.tag}
                </Badge>
              </div>
              <h3 className="mt-5 break-words text-2xl font-semibold">
                {layer.title}
              </h3>
              <p className="mt-3 text-sm leading-8 text-zinc-600 dark:text-zinc-400">
                {layer.body}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                {layer.steps.map((step, index) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="rounded-full border border-[#e4d8c8] bg-[#fbf6ed] px-3 py-1.5 text-xs font-semibold leading-5 text-[#5f5348] dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
                      {step}
                    </span>
                    {index < layer.steps.length - 1 ? (
                      <ArrowLeft className="h-3.5 w-3.5 text-[#8a6a41]" aria-hidden="true" />
                    ) : null}
                  </div>
                ))}
              </div>

              <Link
                href="#product"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "mt-6 h-11 rounded-xl bg-white/80 px-5 shadow-sm dark:bg-zinc-950/80",
                )}
              >
                بیشتر بدانید
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SalesFlowSection() {
  return (
    <section
      id="sales-flow"
      className="relative overflow-hidden border-b border-[#e4d8c8] bg-[#fbf6ed] dark:border-zinc-800 dark:bg-zinc-950"
      aria-labelledby="sales-flow-title"
    >
      <SalesFlowRevealController />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(201,121,43,0.09),transparent_28%)]" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
        <header className="sales-flow-reveal-header relative mx-auto max-w-5xl text-center">
          <div>
            <h2
              id="sales-flow-title"
              className="mx-auto max-w-4xl text-2xl font-bold leading-[1.32] text-foreground md:text-4xl md:leading-[1.28] lg:text-[2.35rem]"
            >
              فروش در بازار ساختمان، فقط به قیمت و کیفیت محصول بستگی ندارد؛ به دید بهتر، زمان‌بندی بهتر و پیگیری بهتر هم وابسته است.
            </h2>
          </div>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg md:leading-9">
            پرشین‌سازه به شما کمک می‌کند پروژه مناسب را پیدا کنید، فرصت‌ها را
            بهتر بسنجید، ارتباط مؤثرتری شروع کنید و پیگیری فروش را منظم‌تر جلو
            ببرید.
          </p>
        </header>

        <ol className="sales-flow-journey relative mt-10 grid gap-5 md:mt-12 md:grid-cols-4 md:gap-4">
          <li className="sales-flow-connector pointer-events-none hidden md:flex" aria-hidden="true">
            <span className="sales-flow-connector-segment" />
            <span className="sales-flow-connector-segment" />
            <span className="sales-flow-connector-segment sales-flow-connector-final" />
          </li>
          {salesFlowSteps.map((step, index) => (
            <li
              key={step.title}
              style={
                { "--sales-flow-delay": `${index * 150}ms` } as CSSProperties
              }
              className={cn(
                "sales-flow-card relative z-[1] flex h-full min-h-[260px] flex-col overflow-hidden rounded-[1.35rem] border bg-[#fffaf1]/56 p-5 pt-14 shadow-sm shadow-[#2a241d]/[0.03] transition duration-200 md:min-h-[318px] md:pt-16 dark:border-zinc-800 dark:bg-zinc-900/82",
                index === 0 && "sales-flow-card-neutral border-[#e4d8c8]",
                index === 1 && "sales-flow-card-soft border-[#e4d8c8]",
                index === 2 && "sales-flow-card-warm border-[#e0c7ad]",
                index === 3 &&
                  "sales-flow-card-destination border-[#c9792b]/30 bg-[#fffaf1]/68",
              )}
            >
              <span
                className={cn(
                  "sales-flow-station absolute right-0 top-0 z-[2] grid h-11 w-11 place-items-center rounded-full border border-[#e4d8c8] bg-[#fbf6ed] text-sm font-bold text-[#2a241d] md:right-1/2 md:h-12 md:w-12 md:translate-x-1/2",
                  index === 3 && "border-[#c9792b]/35 text-[#5a3515]",
                )}
              >
                {(index + 1).toLocaleString("fa-IR")}
              </span>

              <div className="flex items-center justify-between gap-3">
                <span
                  className={cn(
                    "grid h-11 w-11 place-items-center rounded-2xl border text-[#2a241d]",
                    index === 0 &&
                      "border-[#e4d8c8] bg-[#fbf6ed] text-[#5f5348]",
                    index === 1 &&
                      "border-[#e4d8c8] bg-[#f6d6a8]/20 text-[#5f5348]",
                    index === 2 &&
                      "border-[#d99a35]/28 bg-[#f6d6a8]/52 text-[#6f3e18]",
                    index === 3 &&
                      "border-[#c9792b] bg-[#c9792b] text-[#fffaf1]",
                  )}
                >
                  <step.icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
              </div>
              <h3
                className={cn(
                  "mt-4 text-lg font-bold leading-8 text-[#2a241d]",
                  index >= 2 && "text-[#4b2c12]",
                )}
              >
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-[#6f6254]">
                {step.body}
              </p>
              <p className="sales-flow-outcome mt-auto border-t border-[#eadfce] pt-3 text-xs font-medium leading-6 text-[#7a6a59]">
                {step.outcome}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex justify-center md:mt-14">
          <Link
            href="#demo"
            className={cn(
              buttonVariants(),
              "h-11 rounded-2xl px-6 shadow-sm",
            )}
          >
            شروع جست‌وجوی پروژه‌ها
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function DemoRequestSection() {
  return (
    <section id="demo" className="relative overflow-hidden border-t border-[#e4d8c8] dark:border-zinc-800">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(201,121,43,0.14),transparent_30%),radial-gradient(circle_at_72%_70%,rgba(93,105,83,0.07),transparent_28%)]" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 pb-32 pt-12 md:px-6 md:py-16">
        <div className="relative overflow-hidden rounded-[1.6rem] border border-[#e4d8c8] bg-[#fffaf1]/90 shadow-xl shadow-[#2a241d]/[0.07] dark:border-zinc-800 dark:bg-zinc-900/90">
          <div className="relative grid gap-8 p-7 md:grid-cols-[1fr_.72fr] md:p-10">
            <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-amber-200/40 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl font-semibold md:text-5xl">
                برای دیدن نمونه اطلاعات پروژه‌ها، دمو بگیرید
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-600 md:text-lg dark:text-zinc-400">
                در دمو، مسیر پیدا کردن پروژه، بررسی فیلترها و مرحله ساخت و
                مرور پیگیری فروش را با هم جلو می‌بریم.
              </p>
              <div className="mt-6 hidden max-w-lg grid-cols-3 gap-3 md:grid">
                {[
                  { label: "مشاهده مسیر پیدا کردن پروژه", icon: MapPinned },
                  { label: "بررسی فیلترها و مرحله ساخت", icon: Filter },
                  { label: "مرور پیگیری فروش", icon: ClipboardList },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                  <div key={item.label} className="rounded-2xl border border-[#e4d8c8] bg-[#fbf6ed] p-3 text-sm font-semibold dark:border-zinc-800 dark:bg-zinc-950">
                    <Icon className="mb-2 h-4 w-4 text-zinc-500" />
                    {item.label}
                  </div>
                  );
                })}
              </div>
            </div>
            <div className="relative grid gap-4">
              <DemoClosingVisual />
              <div className="rounded-[1.4rem] border border-[#e4d8c8] bg-[#fbf6ed] p-6 dark:border-zinc-800 dark:bg-zinc-950">
                <div className="text-sm text-zinc-500">تماس فروش</div>
                <div className="mt-3 text-2xl font-bold">{site.phones[0]}</div>
                <div className="mt-2 text-sm text-zinc-500">
                  {site.salesExpert} | داخلی {site.extension}
                </div>
                <div className="mt-6 grid gap-3">
                  <a
                    href="tel:+982175425000"
                    className={cn(buttonVariants(), "w-full")}
                  >
                    تماس با فروش
                  </a>
                  <Link
                    href="#product"
                    className={cn(buttonVariants({ variant: "outline" }), "w-full")}
                  >
                    مشاهده نمونه محصول
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.slice(0, 6).map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: site.url,
    inLanguage: "fa-IR",
    description: site.description,
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "پرشین‌سازه | فروش پروژه‌محور برای تأمین‌کنندگان ساختمانی",
    url: site.url,
    inLanguage: "fa-IR",
    description:
      "پرشین‌سازه به تأمین‌کنندگان محصولات و خدمات ساختمانی کمک می‌کند پروژه‌های در حال ساخت را روی نقشه ببینند، فیلتر کنند و پیگیری فروش را منظم کنند.",
    about: [
      "پروژه‌های ساختمانی",
      "نقشه پروژه‌ها",
      "مرحله ساخت",
      "فروش پروژه‌محور",
      "پیگیری فروش",
    ],
  };

  return (
    <main className="home-sections min-h-screen overflow-hidden bg-[#fbf6ed] text-[#2a241d] antialiased dark:bg-zinc-950 dark:text-white">
      <StructuredData data={[faqSchema, softwareSchema, webPageSchema]} />

      <section id="hero" className="hero-surface relative overflow-hidden border-b border-[#e4d8c8] dark:border-zinc-800">
        <div className="absolute inset-0 map-parcel-pattern opacity-30" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-4 pb-10 pt-8 md:px-6 md:pb-12 md:pt-10 lg:pb-14 lg:pt-8">
          <div className="grid gap-8 lg:grid-cols-[.96fr_1.04fr] lg:[direction:ltr] lg:items-center">
            <div className="relative hidden md:order-2 md:block lg:order-1 lg:[direction:rtl]">
              <HeroMapVisual />
            </div>

            <div className="relative max-w-4xl space-y-4 text-center md:space-y-6 lg:order-2 lg:mr-auto lg:text-right lg:[direction:rtl]">
              <div className="space-y-5">
                <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-[1.22] text-zinc-950 md:text-5xl md:leading-[1.18] lg:mx-0 xl:text-[3.45rem] dark:text-white">
                  پروژه‌های ساختمانی فعال را زودتر پیدا کنید
                </h1>
                <p className="mx-auto max-w-2xl text-base leading-9 text-zinc-600 md:text-lg lg:mx-0 dark:text-zinc-400">
                  در بازار محصولات و خدمات ساختمانی، فروش موفق از رسیدن به پروژه
                  مناسب در زمان درست شروع می‌شود. پرشین‌سازه پروژه‌های در
                  حال ساخت در تهران، کرج و لواسان را جمع‌آوری و دسته‌بندی می‌کند
                  تا تأمین‌کنندگان بتوانند با دید روشن‌تر، پروژه‌های مرتبط را
                  سریع‌تر بررسی و پیگیری کنند.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Link href="#product" className={cn(buttonVariants({ size: "lg" }))}>
                  مشاهده دمو
                  <ArrowLeft className="h-4 w-4" />
                </Link>
                <Link
                  href="#solution"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
                >
                  دیدن قابلیت‌ها
                </Link>
              </div>
              <div className="mx-auto grid max-w-xl grid-cols-3 gap-3 pt-2 lg:mx-0">
                {heroProofCards.map((item) => (
                  <div
                    key={item.label}
                    className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white/82 p-3 text-center shadow-sm shadow-zinc-950/[0.03] transition duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md hover:shadow-zinc-950/[0.05] md:p-4 dark:border-zinc-800 dark:bg-zinc-900"
                  >
                    <span className={cn("mx-auto mb-2 grid h-8 w-8 place-items-center rounded-xl text-white shadow-sm", item.accent)}>
                      <item.icon className="h-4 w-4" />
                    </span>
                    <div className="text-center text-sm font-bold leading-6 md:text-base">
                      {item.value}
                    </div>
                    <div className="mt-1 text-center text-[11px] leading-5 text-zinc-500 md:text-xs dark:text-zinc-400">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="md:hidden">
                <HeroMapVisual compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      <MarketProblemSection />

      <SolutionOverviewSection />

      <HowItWorksSection />

      <ProductPreviewSection />

      <SalesFlowSection />

      <section id="audiences" className="relative overflow-hidden border-y border-zinc-200 bg-white/35 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(242,182,49,0.10),transparent_28%)]" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
          <SectionHeader
            eyebrow="مخاطبان"
            title="برای چه نوع تأمین‌کنندگانی مناسب است؟"
            description="پرشین‌سازه برای تأمین‌کنندگان محصولات و خدمات ساختمانی مناسب است که فروش پروژه‌محورشان به شناخت پروژه‌های ساختمانی، زمان مناسب تماس و پیگیری منظم وابسته است."
          />
          <div className="relative mt-8 grid gap-5 md:mt-10 md:grid-cols-2">
            {customerTypes.map((type) => (
              <Card key={type.title} className="group relative overflow-hidden p-6 transition duration-200 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-950/[0.06] md:p-8 dark:hover:border-zinc-700">
                <div className="absolute -left-12 -top-12 h-32 w-32 rounded-full bg-amber-100/50 blur-2xl dark:bg-amber-300/10" />
                <div className="relative flex items-center justify-between gap-3">
                  <Badge>{type.label}</Badge>
                  <span className="grid h-11 w-11 place-items-center rounded-2xl border border-zinc-200 bg-[#faf9f6] text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white">
                    <type.icon className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="relative mt-5 text-2xl font-semibold">{type.title}</h3>
                <p className="mt-3 text-sm leading-8 text-zinc-600 dark:text-zinc-400">
                  {type.text}
                </p>
                <AudienceCardMotif motif={type.motif} />
                <div className="mt-5 flex flex-wrap gap-2">
                  {type.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <PricingSection />

      <section id="faq">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-[.8fr_1.2fr] md:items-start md:gap-10 md:px-6 md:py-16">
          <SectionHeader
            eyebrow="سوالات رایج"
            title="پرسش‌هایی که قبل از خرید باید شفاف شوند."
            description="پاسخ به پرسش‌هایی که معمولاً قبل از خرید اشتراک پرشین‌سازه مطرح می‌شود."
            className="md:mx-0 md:text-right"
          />
          <FaqList limit={6} />
        </div>
      </section>

      <DemoRequestSection />
    </main>
  );
}

