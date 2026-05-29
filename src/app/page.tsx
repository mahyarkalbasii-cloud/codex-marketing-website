import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Fragment } from "react";
import Link from "next/link";
import {
  Database,
  GraduationCap,
  Layers,
  MapPinned,
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
import { SectionHeader } from "@/components/marketing/section-header";
import { StructuredData } from "@/components/marketing/structured-data";
import { buttonVariants } from "@/components/ui/button";
import { getSalesStyleSubcategories } from "@/data/sales-style";
import { SALES_STYLE_COPY } from "@/data/sales-style-copy";
import { getStagePageContent } from "@/data/stage-copy";
import {
  TOTAL_SUBCATEGORY_COUNT,
  formatStageRoles,
  getActiveSubcategoriesForStage,
  getDominantSaleStyleForStage,
  getMainStages,
} from "@/data/stage-insights";
import { faqs, site } from "@/lib/site-data";
import { getStageHref } from "@/lib/stage-routes";
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
    title: "داده زنده پروژه‌های ساختمانی",
    body: "پروژه‌های فعال تهران، کرج و لواسان با آدرس، مرحله ساخت، تصویر و سرنخ تماس در یک نمای قابل بررسی جمع می‌شوند.",
    href: "/features/#map",
    motif: "data",
    icon: Database,
  },
  {
    title: "ابزار فروش و پیگیری پروژه‌محور",
    body: "نقشه، فیلتر، CRM و پیامک هوشمند کمک می‌کند تیم فروش فرصت‌ها را منظم‌تر ببیند، اولویت‌بندی کند و پیگیری را از دست ندهد.",
    href: "/features/#crm",
    motif: "workflow",
    icon: Send,
  },
  {
    title: "آموزش فروش پروژه‌محور",
    body: "تیم شما با متن تماس، سناریوی پیگیری و روش استفاده از داده‌ها یاد می‌گیرد در زمان درست و با زمینه روشن اقدام کند.",
    href: "/features/#training",
    motif: "training",
    icon: GraduationCap,
  },
] as const;

const SOLUTION_ILLUSTRATION_VIEW_BOX = "0 0 360 250";
const SOLUTION_PROJECT_ILLUSTRATION_VIEW_BOX = "0 0 360 286";

const solutionWorkflowSteps = ["فیلتر", "پروژه", "تماس / پیامک", "ثبت پیگیری"] as const;

const solutionTrainingCourses = [
  {
    label: "فروش پروژه‌محور در صنعت ساختمان",
    lessons: "۶ جلسه",
  },
  {
    label: "بازاریابی و مسیر تماس مؤثر",
    lessons: "۴ جلسه",
  },
  {
    label: "استفاده از داده برای زمان‌بندی فروش",
    lessons: "۵ جلسه",
  },
] as const;

const howItWorksLayers = [
  {
    title: "جمع‌آوری و به‌روزرسانی میدانی پروژه‌های ساختمانی",
    eyebrow: "لایه · داده",
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
    eyebrow: "لایه · تصمیم",
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

const faNumber = new Intl.NumberFormat("fa-IR");

function getDominantSaleStyleLabel(style: "fast" | "consultative" | "mixed") {
  if (style === "fast") {
    return "فروش سریع و تراکنشی";
  }

  if (style === "consultative") {
    return "فروش مشاوره‌ای";
  }

  return "ترکیبی";
}

function getRoleSubcategorySummary(
  items: ReturnType<typeof getActiveSubcategoriesForStage>,
  role: "negotiation" | "buy" | "execution",
) {
  const names = Array.from(
    new Set(
      items
        .filter((item) => item.roles.includes(role))
        .map((item) => item.subcategory.faTitle),
    ),
  );
  const visibleNames = names.slice(0, 2);

  if (visibleNames.length === 0) {
    return "نیازمند رصد مرحله";
  }

  return `${visibleNames.join("، ")}${names.length > visibleNames.length ? " و..." : ""}`;
}

const audienceStageGuideStages = getMainStages().map((stage) => {
  const activeItems = getActiveSubcategoriesForStage(stage.id);
  const dominantSaleStyle = getDominantSaleStyleForStage(activeItems);
  const copy = getStagePageContent(stage, activeItems, dominantSaleStyle);

  return {
    activeCategories: activeItems.slice(0, 12).map((item) => ({
      href: `/suppliers/${item.parent.slug}/#sub-${item.subcategory.id}`,
      label: item.subcategory.faTitle,
      parentLabel: item.parent.faTitle,
      roleLabel: formatStageRoles(item.roles),
    })),
    activeCategoryTotal: activeItems.length,
    countLine: `${faNumber.format(activeItems.length)} ردیف مرتبط از ${faNumber.format(TOTAL_SUBCATEGORY_COUNT)} زمینه کاری`,
    facts: [
      {
        label: "نوع فروش غالب",
        value: getDominantSaleStyleLabel(dominantSaleStyle.style),
      },
      {
        label: "مذاکره",
        value: getRoleSubcategorySummary(activeItems, "negotiation"),
      },
      {
        label: "خرید",
        value: getRoleSubcategorySummary(activeItems, "buy"),
      },
      {
        label: "اجرا",
        value: getRoleSubcategorySummary(activeItems, "execution"),
      },
    ],
    href: getStageHref(stage),
    id: stage.id,
    slug: stage.slug,
    timing: {
      execution: copy.timing.execution,
      negotiation: copy.timing.negotiation,
      purchase: copy.timing.purchase,
    },
    title: stage.faLabel,
  };
});

const audienceSaleTypeCards = (["fast", "consultative"] as const).map((style) => {
  const subcategories = getSalesStyleSubcategories(style);
  const copy = SALES_STYLE_COPY[style];
  const description =
    style === "fast"
      ? "فروش سریع برای محصولاتی مناسب است که سازنده معمولاً در فاصله کوتاهی بین نیاز و خرید تصمیم می‌گیرد."
      : "فروش مشاوره‌ای زمانی لازم است که تصمیم خرید سازنده قبل از لحظه اجرا و طی چند گفت‌وگو شکل می‌گیرد.";

  return {
    countLine: `${faNumber.format(subcategories.length)} زیرگروه مرتبط`,
    description,
    href: copy.path,
    id: style,
    sampleFields: subcategories
      .filter((subcategory) => subcategory.faTitle !== "جوشکاری و برشکاری")
      .slice(0, 6)
      .map((subcategory) => subcategory.faTitle),
    title: style === "fast" ? "فروش سریع و تراکنشی" : "فروش مشاوره‌ای",
  };
});

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

const salesFlowStepNumbers = ["۰۱", "۰۲", "۰۳", "۰۴"] as const;

function SolutionPillarIllustration({
  motif,
}: {
  motif: (typeof solutionCards)[number]["motif"];
}) {
  return (
    <div className="solution-pillar-illustration" aria-hidden="true">
      {motif === "data" ? (
        <svg className="solution-illustration-svg solution-project-card-view" viewBox={SOLUTION_PROJECT_ILLUSTRATION_VIEW_BOX} focusable="false" aria-hidden="true">
          <rect className="solution-project-panel" x="18" y="16" width="324" height="254" rx="24" />
          <path className="solution-project-map-grid" d="M48 88H312M48 138H312M48 188H312M112 46V198M180 46V198M248 46V198" />

          <path className="solution-project-pin" d="M294 44C284 44 276 52 276 62C276 75 294 91 294 91C294 91 312 75 312 62C312 52 304 44 294 44Z" />
          <circle className="solution-project-pin-core" cx="294" cy="62" r="5" />
          <text className="solution-project-text solution-project-text--strong" x="178" y="58" textAnchor="middle" direction="rtl">تهران، منطقه ۲</text>
          <path className="solution-project-address-line" d="M86 76H230" />

          <text className="solution-project-text solution-project-text--muted" x="248" y="118" textAnchor="middle" direction="rtl">مرحله ساخت</text>
          <text className="solution-project-text solution-project-text--strong" x="126" y="118" textAnchor="end" direction="rtl">اسکلت</text>
          <rect className="solution-project-stage" x="64" y="132" width="48" height="8" rx="4" />
          <rect className="solution-project-stage solution-project-stage--active" x="124" y="132" width="48" height="8" rx="4" />
          <rect className="solution-project-stage" x="184" y="132" width="48" height="8" rx="4" />
          <rect className="solution-project-stage" x="244" y="132" width="48" height="8" rx="4" />

          <rect className="solution-project-chip" x="196" y="166" width="102" height="30" rx="15" />
          <text className="solution-project-text solution-project-text--small" x="247" y="186" textAnchor="middle" direction="rtl">۲۲۰۰ متر</text>
          <rect className="solution-project-chip" x="82" y="166" width="96" height="30" rx="15" />
          <text className="solution-project-text solution-project-text--small" x="130" y="186" textAnchor="middle" direction="rtl">۸ طبقه</text>
          <circle className="solution-project-contact" cx="68" cy="181" r="10" />
          <path className="solution-project-phone" d="M64 177C68 185 72 187 76 183" />

          <path className="solution-project-info-divider" d="M62 208H298" />
          <rect className="solution-project-info-row" x="62" y="214" width="236" height="22" rx="8" />
          <text className="solution-project-info-label" x="286" y="225" dominantBaseline="middle" direction="rtl">آخرین به‌روزرسانی</text>
          <text className="solution-project-info-value" x="111" y="225" textAnchor="middle" dominantBaseline="middle" direction="rtl">۳ روز پیش</text>
          <rect className="solution-project-info-row" x="62" y="240" width="236" height="22" rx="8" />
          <text className="solution-project-info-label" x="286" y="250" dominantBaseline="middle" direction="rtl">سرنخ تماس</text>
          <rect className="solution-project-info-pill" x="84" y="243" width="54" height="16" rx="6" />
          <text className="solution-project-info-pill-text" x="111" y="251" textAnchor="middle" dominantBaseline="middle" direction="rtl">موجود</text>
        </svg>
      ) : null}

      {motif === "training" ? (
        <div className="solution-product-sim solution-course-sim" data-view-box={SOLUTION_ILLUSTRATION_VIEW_BOX}>
          <div className="solution-sim-caption">دوره‌های آموزش</div>
          <div className="solution-course-list">
            {solutionTrainingCourses.map((course) => (
              <div className="solution-course-row" key={course.label}>
                <span className="solution-course-label">{course.label}</span>
                <span className="solution-course-tag">{course.lessons}</span>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {motif === "workflow" ? (
        <div className="solution-product-sim solution-workflow-sim" data-view-box={SOLUTION_ILLUSTRATION_VIEW_BOX}>
          <div className="solution-sim-caption">از داده تا پیگیری</div>
          <div className="solution-workflow-stack">
            {solutionWorkflowSteps.map((step, index) => (
              <div className={cn("solution-workflow-row", index === solutionWorkflowSteps.length - 1 && "solution-workflow-row--active")} key={step}>
                <span className="solution-workflow-label">
                  {step}
                </span>
                <span className="solution-workflow-marker" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function SolutionPillarCard({
  card,
}: {
  card: (typeof solutionCards)[number];
}) {
  const PillarIcon = card.icon;

  return (
    <article
      className={cn(
        "solution-pillar-card",
        `solution-pillar-card--${card.motif}`,
        card.motif === "data" && "solution-pillar-card--featured",
      )}
    >
      <div className="solution-pillar-topline">
        <span className="solution-pillar-icon" aria-hidden="true">
          <PillarIcon focusable="false" />
        </span>
        <h3 className="solution-pillar-title">
          {card.title}
        </h3>
      </div>

      <SolutionPillarIllustration motif={card.motif} />

      <p className="solution-pillar-body">
        {card.body}
      </p>

      <Link
        href={card.href}
        className="solution-pillar-link"
      >
        جزئیات بیشتر
        <span className="solution-pillar-link-arrow" aria-hidden="true">←</span>
      </Link>
    </article>
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
              <span className={cn("h-2.5 w-2.5 rounded-full", index === 1 ? "bg-[#CC785C]" : "bg-[#d8c7b2]")} />
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
      className="section-gradient section-gradient-problem problem-section"
      aria-labelledby="market-problem-title"
    >
      <div className="problem-container">
        <div className="problem-copy">
          <h2 id="market-problem-title" className="problem-title">
            فروش در بازار ساختمان، فقط به داشتن محصول خوب بستگی ندارد
          </h2>
          <p className="problem-body">
            پروژه‌ها پراکنده‌اند، اطلاعات بازار همیشه دقیق و به‌روز نیست و اگر
            تماس زود یا دیر انجام شود، فرصت فروش از بین می‌رود. برای همین پیدا
            کردن پروژه مناسب، هنوز برای خیلی از تأمین‌کنندگان محصولات و خدمات
            ساختمانی کاری زمان‌بر، پرهزینه و فرسایشی است.
          </p>
          <Link href="#solution" className="marketing-cta marketing-cta--secondary problem-cta">
            آشنایی با راه‌حل پرشین‌سازه
            <span className="marketing-cta__arrow" aria-hidden="true">←</span>
          </Link>
        </div>

        <div className="problem-visual-card">
          <article className="problem-visual-frame">
            <MarketProblemPresentationVisual />
          </article>
        </div>
      </div>
    </section>
  );
}

function SolutionOverviewSection() {
  return (
    <section
      id="solution"
      className="section-gradient section-gradient-solution solution-section"
      aria-labelledby="solution-title"
    >
      <div className="solution-container">
        <div className="solution-header">
          <h2
            id="solution-title"
            className="solution-title"
          >
            <span className="solution-title-line">پرشین‌سازه پیدا کردن پروژه ساختمانی</span>{" "}
            <span className="solution-title-line">مناسب را ساده‌تر می‌کند.</span>
          </h2>
          <p className="solution-subline">
            پرشین‌سازه با داده‌های زنده پروژه‌های ساختمانی تهران، کرج و لواسان،
            ابزارهای اجرایی مثل CRM و پیامک هوشمند، و آموزش فروش پروژه‌محور، به
            شما کمک می‌کند فرصت‌های مناسب را زودتر ببینید و مسیر فروش را
            هدفمندتر پیش ببرید.
          </p>
        </div>

        <div className="solution-pillars-grid">
          {solutionCards.map((card) => (
            <SolutionPillarCard key={card.title} card={card} />
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

        <div className="how-layer-stack relative mx-auto mt-8 flex max-w-[880px] flex-col items-stretch md:mt-10">
          {howItWorksLayers.map((layer, index) => (
            <Fragment key={layer.title}>
              <article
                style={
                  {
                    "--how-delay": `${index === 0 ? 200 : 500}ms`,
                  } as CSSProperties & Record<"--how-delay", string>
                }
                className={cn(
                  "how-layer-card",
                  index === 0
                    ? "how-layer-card--data"
                    : "how-layer-card--decision",
                )}
              >
                <div className="how-layer-heading-row">
                  <span className="how-layer-icon" aria-hidden="true">
                    <layer.icon />
                  </span>
                  <span className="how-layer-badge">
                    <layer.eyebrowIcon aria-hidden="true" />
                    {layer.eyebrow}
                  </span>
                </div>
                <h3 className="how-layer-title">
                  {layer.title}
                </h3>
                <p className="how-layer-body">
                  {layer.body}
                </p>

                <div className="how-process-list" role="list">
                  {layer.steps.map((step, stepIndex) => (
                    <div key={step} className="how-process-item" role="listitem">
                      <span className="how-process-chip">
                        {step}
                      </span>
                      {stepIndex < layer.steps.length - 1 ? (
                        <span
                          className="how-process-arrow"
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
                  className="how-layer-arrow"
                  style={
                    {
                      "--how-delay": "350ms",
                    } as CSSProperties & Record<"--how-delay", string>
                  }
                >
                  <svg
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
                  <span className="how-layer-arrow-label">داده میدانی به فرصت قابل اقدام تبدیل می‌شود</span>
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

        <div className="sales-flow-path-shell">
          <div className="sales-flow-connector" aria-hidden="true">
            <span className="sales-flow-connector-segment" />
            <span className="sales-flow-connector-segment" />
            <span className="sales-flow-connector-segment" />
          </div>
          <ol className="sales-flow-journey">
            {salesFlowSteps.map((step, index) => (
              <li
                key={step.title}
                style={
                  {
                    "--sales-flow-progress": `${(index + 1) * 25}%`,
                  } as CSSProperties & Record<"--sales-flow-progress", string>
                }
                className={cn(
                  "sales-flow-card",
                  index === 0 && "sales-flow-card-neutral",
                  index === 1 && "sales-flow-card-soft",
                  index === 2 && "sales-flow-card-warm",
                  index === 3 && "sales-flow-card-destination",
                )}
              >
                <div className="sales-flow-card-top">
                  <span className="sales-flow-step-number" aria-hidden="true">
                    {salesFlowStepNumbers[index]}
                  </span>
                  <span className="sales-flow-step-node" aria-hidden="true" />
                </div>
                <span className="sales-flow-progress" aria-hidden="true">
                  <span className="sales-flow-progress-fill" />
                </span>
                <h3 className="sales-flow-title">
                  {step.title}
                </h3>
                <p className="sales-flow-body">
                  {step.body}
                </p>
                <p className="sales-flow-outcome">
                  <strong>نتیجه:</strong>
                  <span>{step.outcome.replace("نتیجه: ", "")}</span>
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 flex justify-center md:mt-14">
          <Link
            href="#demo"
            className="sales-flow-cta"
          >
            شروع جست‌وجوی پروژه‌ها
            <span aria-hidden="true">←</span>
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
        <div className="relative overflow-hidden rounded-[1.6rem] border border-[#e4d8c8] bg-[#fffaf1]/90 shadow-xl shadow-[#2a241d]/[0.07] dark:border-zinc-800 dark:bg-zinc-900/90">
          <div className="relative grid gap-8 p-7 md:grid-cols-[1fr_.72fr] md:p-10">
            <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(198,106,90,0.08),transparent_42%,rgba(47,111,103,0.08))]" aria-hidden="true" />
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
              <div className="rounded-[1.4rem] border border-[#e4d8c8] bg-[#fbf6ed] p-6 dark:border-zinc-800 dark:bg-zinc-950">
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

      <section id="hero" className="hero-surface hero-section">
        <div className="hero-container">
          <div className="hero-layout">
            <div className="hero-copy">
              <div className="hero-copy-inner">
                <h1 className="hero-title">
                  <span>پروژه‌های ساختمانی فعال</span>{" "}
                  <span>را زودتر پیدا کنید</span>
                </h1>
                <p className="hero-subline">
                  در بازار محصولات و خدمات ساختمانی، فروش موفق از رسیدن به پروژه
                  مناسب در زمان درست شروع می‌شود. پرشین‌سازه پروژه‌های در
                  حال ساخت در تهران، کرج و لواسان را جمع‌آوری و دسته‌بندی می‌کند
                  تا تأمین‌کنندگان بتوانند با دید روشن‌تر، پروژه‌های مرتبط را
                  سریع‌تر بررسی و پیگیری کنند.
                </p>
              </div>
              <div className="hero-actions">
                <Link href="#demo" className="marketing-cta marketing-cta--primary">
                  مشاهده دمو
                  <span className="marketing-cta__arrow" aria-hidden="true">←</span>
                </Link>
                <Link href="#solution" className="marketing-cta marketing-cta--secondary">
                  چرا پرشین‌سازه؟
                  <span className="marketing-cta__arrow" aria-hidden="true">←</span>
                </Link>
              </div>
            </div>

            <div className="hero-visual-slot">
              <HeroMapVisual />
            </div>
          </div>
        </div>
      </section>

      <MarketProblemSection />

      <SolutionOverviewSection />

      <HowItWorksSection />

      <section
        aria-labelledby="audiences-title"
        className="section-gradient section-gradient-audience audience-section"
        id="audiences"
      >
        <div className="audience-section-container">
          <header className="audience-section-header">
            <h2 className="audience-section-title" id="audiences-title">
              برای چه نوع تأمین‌کنندگانی مناسب است؟
            </h2>
            <p className="audience-section-description">
              پرشین‌سازه برای تأمین‌کنندگان محصولات و خدمات ساختمانی مناسب است که فروش پروژه‌محورشان به شناخت پروژه‌های ساختمانی، زمان مناسب تماس و پیگیری منظم وابسته است.
            </p>
          </header>
          <AudienceStageGuide
            defaultStageSlug="finishing"
            saleTypes={audienceSaleTypeCards}
            stages={audienceStageGuideStages}
          />
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

