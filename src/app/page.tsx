import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Fragment } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Database,
  GraduationCap,
  Layers,
  MapPin,
  MapPinned,
  MessageSquareText,
  Route,
  Send,
  Sparkles,
} from "lucide-react";

import { HeroMapVisual } from "@/components/hero/HeroMapVisual";
import { DemoRequestForm } from "@/components/marketing/demo-request-form";
import { HowItWorksRevealController } from "@/components/marketing/how-it-works-reveal-controller";
import { AudienceStageGuide } from "@/components/marketing/audience-stage-guide";
import { FaqList } from "@/components/marketing/faq-list";
import { MarketProblemPresentationVisual } from "@/components/marketing/market-problem-presentation-visual";
import { PricingSection } from "@/components/marketing/pricing-section";
import { SalesFlowRevealController } from "@/components/marketing/sales-flow-reveal-controller";
import { SectionHeader } from "@/components/marketing/section-header";
import { SolutionRevealController } from "@/components/marketing/solution-reveal-controller";
import { StructuredData } from "@/components/marketing/structured-data";
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
    languages: {
      fa: "/",
      en: "/en/",
    },
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

const solutionCards = [
  {
    title: "ابزار فروش و پیگیری پروژه‌محور",
    body: "نقشه، فیلتر، CRM و پیامک هوشمند کمک می‌کند تیم فروش فرصت‌ها را منظم‌تر ببیند، اولویت‌بندی کند و پیگیری را از دست ندهد.",
    href: "/features/#crm",
    motif: "workflow",
    chips: [
      { label: "فیلتر مرحله", icon: Layers },
      { label: "CRM", icon: MessageSquareText },
      { label: "پیگیری", icon: Send },
    ],
  },
  {
    title: "داده زنده پروژه‌های ساختمانی",
    body: "پروژه‌های فعال تهران، کرج و لواسان با آدرس، مرحله ساخت، تصویر و سرنخ تماس در یک نمای قابل بررسی جمع می‌شوند.",
    href: "/features/#map",
    motif: "data",
    chips: [
      { label: "به‌روزرسانی", icon: CheckCircle2 },
      { label: "موقعیت پروژه", icon: MapPin },
      { label: "مرحله ساخت", icon: Database },
    ],
  },
  {
    title: "آموزش فروش پروژه‌محور",
    body: "تیم شما با متن تماس، سناریوی پیگیری و روش استفاده از داده‌ها یاد می‌گیرد در زمان درست و با زمینه روشن اقدام کند.",
    href: "/features/#training",
    motif: "training",
    chips: [
      { label: "متن تماس", icon: MessageSquareText },
      { label: "تمرین تیمی", icon: GraduationCap },
      { label: "چک‌لیست", icon: CheckCircle2 },
    ],
  },
] as const;

const howItWorksLayers = [
  {
    title: "جمع‌آوری و به‌روزرسانی میدانی پروژه‌های ساختمانی",
    eyebrow: "لایه ۱ · داده",
    body: "اطلاعات پروژه‌های در حال ساخت به‌صورت میدانی جمع‌آوری و راستی‌آزمایی می‌شود تا تصویری زنده و قابل اعتماد از بازار در دسترس باشد.",
    icon: MapPinned,
    eyebrowIcon: Layers,
    steps: [
      "بازدید میدانی",
      "جمع‌آوری مستمر",
      "تأیید و راستی‌آزمایی",
      "تصویر زنده از بازار",
    ],
  },
  {
    title: "تحلیل، امتیازدهی و پیشنهاد اقدام برای تیم فروش",
    eyebrow: "لایه ۲ · تصمیم",
    body: "هوش مصنوعی داده‌های میدانی را تحلیل می‌کند، فرصت‌های مناسب را شناسایی و امتیازدهی می‌کند و پیشنهاد اقدام مشخص برای تیم فروش ارائه می‌دهد.",
    icon: Sparkles,
    eyebrowIcon: Sparkles,
    steps: [
      "تحلیل اطلاعات",
      "شناسایی فرصت",
      "امتیازدهی پروژه",
      "پیشنهاد اقدام",
    ],
  },
] as const;

const salesFlowSteps = [
  {
    title: "شناسایی فرصت",
    body: "پروژه‌هایی را پیدا کنید که از نظر موقعیت، مرحله ساخت، مقیاس و نوع نیاز به محصول یا خدمت شما هم‌خوانی دارند.",
    outcome: "نتیجه: لیست کوتاه پروژه‌های هم‌خوان",
  },
  {
    title: "ارزیابی و اولویت‌بندی",
    body: "همه پروژه‌ها ارزش یکسان ندارند. باید بتوان تشخیص داد کدام پروژه زنده‌تر است، کدام متوقف نیست و کدام به زمان مناسب اقدام نزدیک‌تر است.",
    outcome: "نتیجه: اولویت‌بندی فرصت‌ها بر اساس آمادگی",
  },
  {
    title: "ارتباط و مذاکره",
    body: "پس از انتخاب فرصت مناسب، ارتباط اولیه باید نه تصادفی و بی‌ربط باشد، نه تهاجمی و بدون زمینه. کیفیت و زمان تماس تعیین‌کننده است.",
    outcome: "نتیجه: تماس و مذاکره با زمینه روشن",
  },
  {
    title: "پیگیری و تبدیل",
    body: "بخش مهمی از ارزش فروش، نه در تماس اول، بلکه در پیگیری منظم و شبکه‌ای ساخته می‌شود. اینجاست که فرصت به قرارداد نزدیک می‌شود.",
    outcome: "نتیجه: قرارداد و رابطه پایدار",
  },
] as const;

function SolutionCardMotif({
  card,
}: {
  card: (typeof solutionCards)[number];
}) {
  return (
    <div className="solution-card-visual-frame solution-card-placeholder relative overflow-hidden rounded-[1.15rem] p-4">
      <div className="solution-card-placeholder-mark" aria-hidden="true" />
      <div className="relative z-[1] flex h-full min-h-[15.5rem] flex-col justify-between">
        <div className="relative my-auto min-h-[11rem]">
          {card.chips.map((chip, chipIndex) => {
            const ChipIcon = chip.icon;

            return (
              <span
                key={chip.label}
                className="solution-card-chip solution-card-floating-chip"
                data-chip-position={chipIndex}
              >
                <ChipIcon className="h-3.5 w-3.5" />
                {chip.label}
              </span>
            );
          })}

          <h3 className="solution-card-title absolute inset-x-2 top-1/2 text-center text-[1.58rem] font-semibold leading-[1.14] text-[#171716] md:text-[1.72rem]">
            {card.title}
          </h3>
        </div>

        <div
          className={cn(
            "solution-card-diagram",
            card.motif === "data" && "solution-card-diagram-data",
            card.motif === "workflow" && "solution-card-diagram-workflow",
            card.motif === "training" && "solution-card-diagram-training",
          )}
        >
          {card.motif === "data" ? (
            <>
              <span className="w-[78%]" />
              <span className="w-[58%]" />
              <span className="w-[68%]" />
            </>
          ) : null}
          {card.motif === "workflow" ? (
            <>
              <span />
              <span />
              <span />
            </>
          ) : null}
          {card.motif === "training" ? (
            <>
              <span className="solution-card-check" />
              <span className="solution-card-check" />
              <span className="solution-card-check" />
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function DemoClosingVisual() {
  return (
    <div className="demo-path-card relative overflow-hidden rounded-[1.4rem] border border-[#e4d8c8] bg-[#fbf6ed] p-5 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="absolute inset-0 demo-path-placeholder-pattern" aria-hidden="true" />
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
      className="section-gradient section-gradient-problem relative overflow-hidden border-b border-[#e4d8c8] dark:border-zinc-800"
      aria-labelledby="market-problem-title"
    >
      <div className="absolute inset-0 map-parcel-pattern opacity-20" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:px-6 md:py-14 lg:grid-cols-2 lg:[direction:ltr] lg:items-center lg:gap-8 lg:py-16">
        <div className="relative order-1 mx-auto min-w-0 max-w-3xl text-center lg:order-2 lg:ml-auto lg:mr-0 lg:max-w-[38rem] lg:text-right lg:[direction:rtl]">
          <h2
            id="market-problem-title"
            className="mx-auto max-w-[23rem] text-3xl font-bold leading-[1.3] text-foreground md:max-w-3xl md:text-[2.85rem] md:leading-[1.24] lg:mx-0 lg:max-w-full lg:text-5xl"
          >
            فروش در بازار ساختمان، فقط به داشتن محصول خوب بستگی ندارد
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg md:leading-9 lg:mx-0 lg:max-w-full">
            پروژه‌ها پراکنده‌اند، اطلاعات بازار همیشه دقیق و به‌روز نیست و اگر
            تماس زود یا دیر انجام شود، فرصت فروش از بین می‌رود. برای همین پیدا
            کردن پروژه مناسب، هنوز برای خیلی از تأمین‌کنندگان محصولات و خدمات
            ساختمانی کاری زمان‌بر، پرهزینه و فرسایشی است.
          </p>
          <Link
            href="#solution"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "mt-6 hidden h-11 rounded-xl bg-white/80 px-5 shadow-sm md:inline-flex dark:bg-zinc-900/80",
            )}
          >
            آشنایی با راه‌حل پرشین‌سازه
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>

        <Card className="relative order-2 mx-auto flex w-full max-w-[576px] overflow-hidden border-[#f5dfc7] bg-[#FFF4E7]/90 p-0 shadow-lg shadow-[#2a241d]/[0.04] md:order-none lg:order-1 lg:aspect-[16/15] lg:max-h-[540px] lg:self-center">
          <article className="flex min-h-0 w-full flex-col" aria-label="نمای لیست پروژه‌های ساختمانی در پنل پرشین‌سازه">
            <MarketProblemPresentationVisual />
          </article>
        </Card>

        <Link
          href="#solution"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "order-3 h-11 rounded-xl bg-white/80 px-5 shadow-sm md:hidden dark:bg-zinc-900/80",
          )}
        >
          آشنایی با راه‌حل پرشین‌سازه
          <ArrowLeft className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function SolutionOverviewSection() {
  return (
    <section
      id="solution"
      className="section-gradient section-gradient-solution relative overflow-hidden border-b border-[#e4d8c8] dark:border-zinc-800"
      aria-labelledby="solution-title"
    >
      <SolutionRevealController />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#f8f8f4] to-transparent dark:from-zinc-950" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
        <header className="solution-reveal-header relative mx-auto max-w-3xl text-center">
          <h2
            id="solution-title"
            className="text-3xl font-bold leading-[1.3] text-foreground md:text-[2.85rem] md:leading-[1.24] lg:text-5xl"
          >
            پرشین‌سازه پیدا کردن پروژه ساختمانی مناسب را ساده‌تر می‌کند.
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg md:leading-9">
            پرشین‌سازه با داده‌های زنده پروژه‌های ساختمانی تهران، کرج و لواسان،
            ابزارهای اجرایی مثل CRM و پیامک هوشمند، و آموزش فروش پروژه‌محور، به
            شما کمک می‌کند فرصت‌های مناسب را زودتر ببینید و مسیر فروش را
            هدفمندتر پیش ببرید.
          </p>
        </header>

        <div className="solution-card-strip mt-10 grid grid-cols-1 gap-4 pb-5 pt-2 md:mt-12 md:grid-cols-3 md:items-start md:gap-5 md:pb-8 lg:gap-6">
          {solutionCards.map((card, index) => (
            <article
              key={card.title}
              style={
                {
                  "--solution-delay": `${[200, 350, 500][index]}ms`,
                } as CSSProperties & Record<"--solution-delay", string>
              }
              className={cn(
                "solution-card group relative flex min-h-[30rem] flex-col gap-3 overflow-hidden rounded-[1.45rem] border p-3 shadow-sm md:min-h-[34rem] md:p-3.5",
                card.motif === "data" && "solution-card-data",
                card.motif === "workflow" && "solution-card-workflow",
                card.motif === "training" && "solution-card-training",
                index === 0 && "md:mt-8 md:-rotate-2",
                index === 1 && "md:scale-[1.03]",
                index === 2 && "md:mt-8 md:rotate-2",
              )}
            >
              <SolutionCardMotif card={card} />
              <div className="solution-card-copy-frame flex flex-1 flex-col justify-between rounded-[1.05rem] border p-4 text-right">
                <p className="text-sm leading-7 text-[#4d4c49] md:text-[15px] md:leading-8">
                {card.body}
                </p>
                <Link
                  href={card.href}
                  className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#242321] transition hover:gap-3"
                >
                  جزئیات بیشتر
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="section-gradient section-gradient-how relative overflow-hidden border-b border-[#e4d8c8] dark:border-zinc-800"
      aria-labelledby="how-it-works-title"
    >
      <HowItWorksRevealController />
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
        <header className="how-works-reveal-header relative mx-auto max-w-4xl text-center">
          <h2
            id="how-it-works-title"
            className="text-2xl font-bold leading-[1.32] text-foreground md:text-4xl md:leading-[1.28] lg:text-[2.35rem]"
          >
            پرشین‌سازه چطور پروژه‌های ساختمانی را به فرصت فروش تبدیل می‌کند
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg md:leading-9">
            دو لایه به هم وصل می‌شوند: جمع‌آوری میدانی پروژه‌ها در تهران، کرج و لواسان، و هوش مصنوعی که این داده‌ها را به فرصت قابل اقدام برای تیم فروش تبدیل می‌کند.
          </p>
        </header>

        <div className="relative mx-auto mt-8 flex max-w-[880px] flex-col items-stretch md:mt-10">
          {howItWorksLayers.map((layer, index) => (
            <Fragment key={layer.title}>
              <article
                style={
                  {
                    "--how-delay": `${index === 0 ? 200 : 500}ms`,
                  } as CSSProperties & Record<"--how-delay", string>
                }
                className={cn(
                  "how-layer-card min-w-0 overflow-hidden rounded-[1.5rem] border p-5 shadow-md shadow-[#2a241d]/[0.04] md:p-7 dark:border-zinc-800 dark:bg-zinc-900/82",
                  index === 0
                    ? "how-layer-card-data border-[#F4DDC6] bg-[#FFF4EA]"
                    : "how-layer-card-decision border-[#D9EAF8] bg-[#EEF7FF]",
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#1B1916] text-[#CC785C]">
                    <layer.icon className="h-5 w-5" />
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#E4D8C8] bg-[#FBF9F3] px-4 py-2 text-sm font-bold leading-6 text-[#2A241D] shadow-sm shadow-[#2A241D]/[0.025]">
                    <layer.eyebrowIcon className="h-4 w-4 text-[#CC785C]" />
                    {layer.eyebrow}
                  </span>
                </div>
                <h3 className="mt-5 break-words text-2xl font-semibold">
                  {layer.title}
                </h3>
                <p className="mt-3 text-sm leading-8 text-zinc-600 dark:text-zinc-400">
                  {layer.body}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                  {layer.steps.map((step, stepIndex) => (
                    <div key={step} className="flex items-center gap-2">
                      <span className="rounded-full border border-[#E4D8C8] bg-[#FBF9F3] px-3 py-1.5 text-xs font-semibold leading-5 text-[#6F6254] dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
                        {step}
                      </span>
                      {stepIndex < layer.steps.length - 1 ? (
                        <span
                          className="text-sm font-bold leading-none text-[#CC785C]/50"
                          aria-hidden="true"
                        >
                          ←
                        </span>
                      ) : null}
                    </div>
                  ))}
                </div>
              </article>

              {index === 0 ? (
                <div
                  className="how-layer-arrow my-6 flex flex-col items-center justify-center gap-2 text-center text-sm leading-6 text-[#6F6254] md:flex-row md:gap-3 md:text-right"
                  style={
                    {
                      "--how-delay": "350ms",
                    } as CSSProperties & Record<"--how-delay", string>
                  }
                >
                  <svg
                    className="h-14 w-5 shrink-0 text-[#CC785C]"
                    viewBox="0 0 20 56"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M10 4V46"
                      stroke="currentColor"
                      strokeOpacity="0.4"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path d="M5 43L10 52L15 43H5Z" fill="currentColor" />
                  </svg>
                  <span>داده میدانی به فرصت قابل اقدام تبدیل می‌شود</span>
                </div>
              ) : null}
            </Fragment>
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
      className="section-gradient section-gradient-sales relative overflow-hidden border-b border-[#e4d8c8] dark:border-zinc-800"
      aria-labelledby="sales-flow-title"
    >
      <SalesFlowRevealController />
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
        <header className="sales-flow-reveal-header relative mx-auto max-w-5xl text-center">
          <div>
            <h2
              id="sales-flow-title"
              className="mx-auto max-w-4xl text-2xl font-bold leading-[1.32] text-foreground md:text-4xl md:leading-[1.28] lg:text-[2.35rem]"
            >
              فروش پروژه‌محور یک مسیر چهارمرحله‌ای دارد
            </h2>
          </div>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg md:leading-9">
            از شناسایی فرصت تا قرارداد، در یک مسیر مشخص و قابل پیگیری.
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
                "sales-flow-card relative z-[1] isolate flex h-full min-h-[250px] flex-col overflow-hidden rounded-[1.6rem] border p-5 shadow-sm shadow-[#2a241d]/[0.03] transition duration-200 md:min-h-[292px] md:p-6 dark:border-zinc-800",
                index === 0 && "sales-flow-card-neutral border-[#e4d8c8]",
                index === 1 && "sales-flow-card-soft border-[#e4d8c8]",
                index === 2 && "sales-flow-card-warm border-[#e0c7ad]",
                index === 3 &&
                  "sales-flow-card-destination border-[#c9792b]/30",
              )}
            >
              <span className="sales-flow-step-rail" aria-hidden="true">
                <span className="sales-flow-step-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </span>
              <h3
                className={cn(
                  "sales-flow-title text-xl font-bold leading-9 text-[#2a241d] dark:text-white",
                  index >= 2 && "text-[#4b2c12] dark:text-white",
                )}
              >
                {step.title}
              </h3>
              <p className="sales-flow-body mt-3 text-[15px] leading-8 text-[#6f6254]">
                {step.body}
              </p>
              <p className="sales-flow-outcome mt-auto border-t border-[#eadfce] pt-4 text-sm font-semibold leading-7 text-[#7a6a59]">
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
    <section id="demo" className="section-gradient section-gradient-demo relative overflow-hidden border-t border-[#e4d8c8] dark:border-zinc-800">
      <div className="absolute inset-0 map-parcel-pattern opacity-10" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 pb-32 pt-12 md:px-6 md:py-16">
        <div className="demo-cta-surface relative overflow-hidden rounded-[1.6rem] border border-[#e4d8c8] bg-[#fffaf1]/90 shadow-xl shadow-[#2a241d]/[0.07] dark:border-zinc-800 dark:bg-zinc-900/90">
          <div className="relative grid gap-8 p-7 md:grid-cols-[1fr_.72fr] md:p-10">
            <div className="absolute inset-0 demo-section-flat-wash" aria-hidden="true" />
            <div className="relative">
              <h2 className="text-3xl font-semibold md:text-5xl">
                برای دیدن نمونه اطلاعات پروژه‌ها، دمو بگیرید
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-600 md:text-lg dark:text-zinc-400">
                در دمو، مسیر پیدا کردن پروژه، بررسی فیلترها و مرحله ساخت و
                مرور پیگیری فروش را با هم جلو می‌بریم.
              </p>
              <div className="mt-6">
                <DemoClosingVisual />
              </div>
            </div>
            <div className="relative grid gap-4">
              <div className="demo-form-card rounded-[1.4rem] border border-[#e4d8c8] bg-[#fbf6ed] p-6 dark:border-zinc-800 dark:bg-zinc-950">
                <div className="text-sm text-zinc-500">تماس فروش</div>
                <div className="mt-3 text-2xl font-bold">{site.phones[0]}</div>
                <div className="mt-2 text-sm text-zinc-500">
                  {site.salesExpert} | داخلی {site.extension}
                </div>
                <DemoRequestForm />
                <div className="mt-5 grid gap-3">
                  <a
                    href="tel:+982175425000"
                    className={cn(buttonVariants({ variant: "outline" }), "w-full")}
                  >
                    تماس با فروش
                  </a>
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
    <main className="behance-background home-sections min-h-screen text-[#2a241d] antialiased dark:bg-zinc-950 dark:text-white">
      <StructuredData data={[faqSchema, softwareSchema, webPageSchema]} />

      <section id="hero" className="hero-surface relative overflow-hidden border-b border-[#e4d8c8] dark:border-zinc-800">
        <div className="pointer-events-none absolute inset-0 map-parcel-pattern opacity-30" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-5 pb-12 pt-10 md:px-6 md:pb-14 md:pt-12 lg:pb-16 lg:pt-12">
          <div className="grid gap-8 lg:grid-cols-[.96fr_1.04fr] lg:[direction:ltr] lg:items-center">
            <div className="relative hidden md:order-2 md:block lg:order-1 lg:[direction:rtl]">
              <HeroMapVisual />
            </div>

            <div className="relative max-w-4xl space-y-4 text-center md:space-y-6 lg:order-2 lg:mr-auto lg:text-right lg:[direction:rtl]">
              <div className="space-y-5">
                <h1 className="hero-title mx-auto max-w-[22rem] text-[2rem] font-bold leading-[1.34] text-zinc-950 sm:max-w-3xl sm:text-4xl sm:leading-[1.22] md:text-5xl md:leading-[1.18] lg:mx-0 xl:text-[3.45rem] dark:text-white">
                  <span className="block sm:inline">پروژه‌های ساختمانی فعال</span>{" "}
                  <span className="block sm:inline">را زودتر پیدا کنید</span>
                </h1>
                <p className="mx-auto max-w-2xl text-base leading-9 text-zinc-600 md:text-lg lg:mx-0 dark:text-zinc-400">
                  در بازار محصولات و خدمات ساختمانی، فروش موفق از رسیدن به پروژه
                  مناسب در زمان درست شروع می‌شود. پرشین‌سازه پروژه‌های در
                  حال ساخت در تهران، کرج و لواسان را جمع‌آوری و دسته‌بندی می‌کند
                  تا تأمین‌کنندگان بتوانند با دید روشن‌تر، پروژه‌های مرتبط را
                  سریع‌تر بررسی و پیگیری کنند.
                </p>
              </div>
              <div className="mx-auto flex w-full max-w-[24rem] flex-col gap-3.5 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4 lg:mx-0 lg:justify-start">
                <Link
                  href="#demo"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-14 w-full rounded-[1.15rem] bg-[#2A211B] px-8 text-base text-[#FFF9F0] shadow-[0_10px_26px_rgba(204,120,92,0.18),inset_0_1px_0_rgba(255,255,255,0.08)] hover:bg-[#3A2C24] sm:w-auto sm:min-w-[10.75rem] [&_svg]:h-5 [&_svg]:w-5 [&_svg]:text-[#E6A38B]",
                  )}
                >
                  مشاهده دمو
                  <ArrowLeft className="h-4 w-4" />
                </Link>
                <Link
                  href="#solution"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-14 w-full rounded-[1.15rem] border-[rgba(42,33,27,0.14)] bg-[rgba(255,252,246,0.58)] px-8 text-base text-[#2A211B] shadow-sm shadow-[#2A211B]/[0.04] hover:border-[rgba(204,120,92,0.34)] hover:bg-[rgba(255,252,246,0.86)] sm:w-auto sm:min-w-[10.75rem]",
                  )}
                >
                  چرا پرشین‌سازه؟
                </Link>
              </div>
              <div className="mx-auto flex max-w-[22rem] flex-wrap items-center justify-center gap-x-2 gap-y-1 px-2 pt-1 text-center text-xs font-medium leading-6 text-[#6c6258] sm:hidden">
                <span className="after:mr-2 after:text-[#c27a61] after:content-['•']">
                  تهران، کرج و لواسان
                </span>
                <span className="after:mr-2 after:text-[#c27a61] after:content-['•']">
                  هزاران پروژه فعال
                </span>
                <span>۸ مرحله ساخت</span>
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

      <section id="audiences" className="section-gradient section-gradient-audience relative overflow-hidden border-y border-[#e4d8c8] dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
          <SectionHeader
            eyebrow="مخاطبان"
            title="برای چه نوع تأمین‌کنندگانی مناسب است؟"
            description="پرشین‌سازه برای تأمین‌کنندگان محصولات و خدمات ساختمانی مناسب است که فروش پروژه‌محورشان به شناخت پروژه‌های ساختمانی، زمان مناسب تماس و پیگیری منظم وابسته است."
          />
          <AudienceStageGuide />
        </div>
      </section>

      <SalesFlowSection />

      <PricingSection />

      <section id="faq" className="section-gradient section-gradient-faq relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
          <SectionHeader
            eyebrow="سوالات رایج"
            title="پرسش‌هایی که قبل از خرید باید شفاف شوند."
            description="پاسخ به پرسش‌هایی که معمولاً قبل از خرید اشتراک پرشین‌سازه مطرح می‌شود."
            className="mx-auto max-w-2xl text-center"
          />
          <div className="mx-auto mt-8 max-w-4xl">
            <FaqList limit={6} />
          </div>
        </div>
      </section>

      <DemoRequestSection />
    </main>
  );
}

