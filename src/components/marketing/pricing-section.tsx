"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { ArrowLeft, BarChart3, Check } from "lucide-react";

import { SectionHeader } from "@/components/marketing/section-header";
import { buttonVariants } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type Duration = "3" | "6" | "12";
type PlanId = "bonyan" | "royan" | "taban" | "taban-plus";

type PricingPlan = {
  id: PlanId;
  name: string;
  sliderLabel: string;
  sliderInsight: string;
  selectorMotto: string;
  highlights: string[];
  prices: Record<Duration, string>;
  addon: string;
  coverage: 1 | 2 | 3 | 4;
  cta: string;
  featured?: boolean;
};

const durations: Array<{
  id: Duration;
  label: string;
  months: string;
  note: string;
}> = [
  {
    id: "3",
    label: "۳ ماهه",
    months: "۳ ماه",
    note: "بدون تخفیف بلندمدت",
  },
  {
    id: "6",
    label: "۶ ماهه",
    months: "۶ ماه",
    note: "تخفیف کمتر نسبت به ۱۲ ماهه",
  },
  {
    id: "12",
    label: "۱۲ ماهه",
    months: "۱۲ ماه",
    note: "بیشترین صرفه‌جویی",
  },
];

const durationsEn: typeof durations = [
  {
    id: "3",
    label: "3 months",
    months: "3 months",
    note: "No long-term discount",
  },
  {
    id: "6",
    label: "6 months",
    months: "6 months",
    note: "Less discount than 12 months",
  },
  {
    id: "12",
    label: "12 months",
    months: "12 months",
    note: "Highest savings",
  },
];

const pricingPlans: PricingPlan[] = [
  {
    id: "bonyan",
    name: "بنیان",
    sliderLabel: "زمین تا ۳۰۰ متر",
    sliderInsight: "تا ۱۸٬۰۰۰ پروژه در ۸ مرحله ساخت",
    selectorMotto: "شروع سبک برای تست بازار و ساختن ریتم پیگیری",
    highlights: [
      "شروع سبک برای تیم‌های فروش کوچک",
      "تمرکز روی فرصت‌های نزدیک‌تر و قابل پیگیری",
      "مناسب برای تست بازار بدون هزینه سنگین",
    ],
    prices: {
      "3": "۹,۰۰۰,۰۰۰",
      "6": "۱۳,۵۰۰,۰۰۰",
      "12": "۱۸,۰۰۰,۰۰۰",
    },
    addon: "هر مرحله اضافه: ۳,۰۰۰,۰۰۰ تومان",
    coverage: 1,
    cta: "ویژگی‌های بنیان",
  },
  {
    id: "royan",
    name: "رویان",
    sliderLabel: "زمین تا ۵۰۰ متر",
    sliderInsight: "تا ۲۰٬۰۰۰ پروژه در ۸ مرحله ساخت",
    selectorMotto: "پوشش متعادل برای تیمی که تماس منظم‌تر می‌خواهد",
    highlights: [
      "برای تیمی که تماس‌های منظم‌تری می‌سازد",
      "دامنه بهتر برای کشف پروژه‌های در حال رشد",
      "مناسب برای تبدیل پیگیری پراکنده به برنامه فروش",
    ],
    prices: {
      "3": "۱۲,۰۰۰,۰۰۰",
      "6": "۱۸,۰۰۰,۰۰۰",
      "12": "۲۴,۰۰۰,۰۰۰",
    },
    addon: "هر مرحله اضافه: ۴,۰۰۰,۰۰۰ تومان",
    coverage: 2,
    cta: "ویژگی‌های رویان",
  },
  {
    id: "taban",
    name: "تابان",
    sliderLabel: "زمین تا ۷۰۰ متر",
    sliderInsight: "تا ۲۳٬۰۰۰ پروژه در ۸ مرحله ساخت",
    selectorMotto: "پیشنهاد اصلی برای فروش جدی‌تر و پوشش مؤثر بازار",
    highlights: [
      "برای فروش جدی‌تر با پوشش میدانی گسترده‌تر",
      "اولویت‌دهی بهتر بین پروژه‌های داغ و قابل مذاکره",
      "انتخاب مناسب برای تیم‌هایی که سهم بیشتری می‌خواهند",
    ],
    prices: {
      "3": "۱۵,۰۰۰,۰۰۰",
      "6": "۲۲,۵۰۰,۰۰۰",
      "12": "۳۰,۰۰۰,۰۰۰",
    },
    addon: "هر مرحله اضافه: ۵,۰۰۰,۰۰۰ تومان",
    coverage: 3,
    cta: "ویژگی‌های تابان",
    featured: true,
  },
  {
    id: "taban-plus",
    name: "تابان پلاس",
    sliderLabel: "زمین بزرگ‌تر",
    sliderInsight: "تا ۲۵٬۰۰۰ پروژه در ۸ مرحله ساخت",
    selectorMotto: "پوشش گسترده برای تیم‌های چندمنطقه‌ای و فروش سنگین‌تر",
    highlights: [
      "برای تیم‌هایی که چند منطقه را هم‌زمان پوشش می‌دهند",
      "دید وسیع‌تر روی پروژه‌های بزرگ و تصمیم‌ساز",
      "مناسب برای ساختن قیف فروش سنگین‌تر و پایدارتر",
    ],
    prices: {
      "3": "۱۸,۰۰۰,۰۰۰",
      "6": "۲۷,۰۰۰,۰۰۰",
      "12": "۳۶,۰۰۰,۰۰۰",
    },
    addon: "هر مرحله اضافه: ۶,۰۰۰,۰۰۰ تومان",
    coverage: 4,
    cta: "ویژگی‌های تابان پلاس",
  },
];

const pricingPlansEn: PricingPlan[] = [
  {
    id: "bonyan",
    name: "Bonyan",
    sliderLabel: "Land up to 300 m2",
    sliderInsight: "Up to 18,000 projects across 8 stages",
    selectorMotto: "A lighter start for testing the market and building follow-up rhythm",
    highlights: [
      "A lighter start for smaller sales teams",
      "Focus on closer and easier-to-follow opportunities",
      "Good for market testing without a heavy upfront cost",
    ],
    prices: {
      "3": "9,000,000",
      "6": "13,500,000",
      "12": "18,000,000",
    },
    addon: "Each additional stage: 3,000,000 toman",
    coverage: 1,
    cta: "Bonyan features",
  },
  {
    id: "royan",
    name: "Royan",
    sliderLabel: "Land up to 500 m2",
    sliderInsight: "Up to 20,000 projects across 8 stages",
    selectorMotto: "Balanced coverage for teams that want more consistent calls",
    highlights: [
      "For teams building more consistent sales calls",
      "A wider range for discovering growing projects",
      "Good for turning scattered follow-up into a sales plan",
    ],
    prices: {
      "3": "12,000,000",
      "6": "18,000,000",
      "12": "24,000,000",
    },
    addon: "Each additional stage: 4,000,000 toman",
    coverage: 2,
    cta: "Royan features",
  },
  {
    id: "taban",
    name: "Taban",
    sliderLabel: "Land up to 700 m2",
    sliderInsight: "Up to 23,000 projects across 8 stages",
    selectorMotto: "The core recommendation for serious sales and meaningful coverage",
    highlights: [
      "For serious sales with wider field coverage",
      "Better prioritization between hot and negotiable projects",
      "A strong fit for teams that want more market share",
    ],
    prices: {
      "3": "15,000,000",
      "6": "22,500,000",
      "12": "30,000,000",
    },
    addon: "Each additional stage: 5,000,000 toman",
    coverage: 3,
    cta: "Taban features",
    featured: true,
  },
  {
    id: "taban-plus",
    name: "Taban Plus",
    sliderLabel: "Larger land",
    sliderInsight: "Up to 25,000 projects across 8 stages",
    selectorMotto: "Wide coverage for multi-area teams and heavier sales motions",
    highlights: [
      "For teams covering several areas at once",
      "Wider visibility into large decision-shaping projects",
      "Good for building a heavier and more durable sales funnel",
    ],
    prices: {
      "3": "18,000,000",
      "6": "27,000,000",
      "12": "36,000,000",
    },
    addon: "Each additional stage: 6,000,000 toman",
    coverage: 4,
    cta: "Taban Plus features",
  },
];

const pricingCopy = {
  fa: {
    eyebrow: "پلن‌ها",
    title: "زمین بازی خود را انتخاب کنید",
    description:
      "در بازار داده، قیمت ارزان یعنی دسترسی همگانی، یعنی رقابت شلوغ و سوختن فرصت‌ها. تفکیک ساختاریافته‌ی اشتراک‌ها در پرشین‌سازه، رقابت را متعادل و سودآور نگه می‌دارد",
    axisLabel: "متراژ زمین پروژه",
    sliderPrompt: "یکی از بازه‌های متراژ را انتخاب کنید",
    sliderAria: "انتخاب مقیاس زمین پروژه",
    recommended: "پیشنهاد اصلی",
    bestValue: "ارزش پیشنهادی",
    stagesIncluded: "۳ مرحله ساخت",
    coverage: "پوشش بازار",
    from: "از",
    currency: "تومان",
    whatsappMessage: (plan: string, duration: string) =>
      `علاقمندم به پلن ${plan} (${duration}) پرشین‌سازه`,
  },
  en: {
    eyebrow: "Plans",
    title: "Choose your playing field",
    description:
      "In a data market, cheap access often means crowded competition and burned opportunities. PersianSaze keeps subscriptions structured so competition stays more balanced and profitable.",
    axisLabel: "Project land size",
    sliderPrompt: "Choose a land-size segment",
    sliderAria: "Choose project land-size segment",
    recommended: "Recommended",
    bestValue: "Best value",
    stagesIncluded: "3 construction stages",
    coverage: "Market coverage",
    from: "of",
    currency: "toman",
    whatsappMessage: (plan: string, duration: string) =>
      `I am interested in the ${plan} plan (${duration}) on PersianSaze`,
  },
} as const;

const FALLBACK_PLAN_INDEX = 2;
const axisTickLabels: Record<PlanId, string> = {
  bonyan: "۳۰۰",
  royan: "۵۰۰",
  taban: "۷۰۰",
  "taban-plus": "+۷۰۰",
};
const axisTickLabelsEn: Record<PlanId, string> = {
  bonyan: "300",
  royan: "500",
  taban: "700",
  "taban-plus": "+700",
};
// TODO: Replace 98TODO with PersianSaze WhatsApp Business number before launch.
const WHATSAPP_NUMBER = "98TODO";

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return prefersReducedMotion;
}

function clampPlanIndex(index: number, planCount: number) {
  return Math.min(Math.max(index, 0), planCount - 1);
}

function getAxisItemTransform(index: number, planCount: number) {
  if (index === 0) {
    return "translateX(0)";
  }

  if (index === planCount - 1) {
    return "translateX(100%)";
  }

  return "translateX(50%)";
}

function getWhatsappHref(
  plan: PricingPlan,
  duration: Duration,
  durationById: Record<Duration, (typeof durations)[number]>,
  locale: Locale,
) {
  const message = pricingCopy[locale].whatsappMessage(
    plan.name,
    durationById[duration].label,
  );

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function PricingCoverage({
  coverage,
  featured,
  locale,
}: {
  coverage: PricingPlan["coverage"];
  featured?: boolean;
  locale: Locale;
}) {
  const copy = pricingCopy[locale];
  const formatter = locale === "fa" ? "fa-IR" : "en-US";

  return (
    <div
      className={cn(
        "rounded-2xl border p-3",
        featured
          ? "border-white/10 bg-white/10 text-[#fffaf1]"
          : "border-[#e4d8c8] bg-[#fbf6ed]/78 text-[#2a241d]",
      )}
    >
      <div
        className={cn(
          "mb-3 flex items-center justify-between text-[11px] font-semibold",
          featured ? "text-[#efe2d2]" : "text-[#6f6254]",
        )}
      >
        <span>{copy.coverage}</span>
        <span className="flex items-center gap-1">
          {coverage.toLocaleString(formatter)} {copy.from} {Number(4).toLocaleString(formatter)}
          <BarChart3 className="h-3.5 w-3.5" />
        </span>
      </div>
      <div
        className="grid gap-1.5"
        aria-label={`${copy.coverage} ${coverage.toLocaleString(formatter)} ${copy.from} ${Number(4).toLocaleString(formatter)}`}
      >
        {[1, 2, 3, 4].map((item) => {
          const filled = item <= coverage;

          return (
            <span
              key={item}
              className={cn(
                "h-1.5 rounded-full transition-colors",
                filled
                  ? featured
                    ? "bg-[#f5c842]"
                    : "bg-[#CC785C]"
                  : featured
                    ? "bg-white/20"
                    : "bg-[#e8dfd2]",
              )}
            />
          );
        })}
      </div>
    </div>
  );
}

function PricingPlanCard({
  plan,
  duration,
  durationById,
  isActive,
  isPulsing,
  cardDelay,
  locale,
}: {
  plan: PricingPlan;
  duration: Duration;
  durationById: Record<Duration, (typeof durations)[number]>;
  isActive: boolean;
  isPulsing: boolean;
  cardDelay: string;
  locale: Locale;
}) {
  const featured = isActive;
  const recommended = Boolean(plan.featured);
  const copy = pricingCopy[locale];

  return (
    <article
      data-plan-card={plan.id}
      data-active-plan={isActive ? "true" : "false"}
      style={{ "--pricing-delay": cardDelay } as CSSProperties}
      className={cn(
        "pricing-card relative flex min-h-[34rem] w-full max-w-[22.5rem] flex-col overflow-hidden rounded-[1.6rem] border p-5 text-center transition duration-200 md:w-auto md:max-w-none md:p-6 motion-safe:hover:-translate-y-0.5",
        featured
          ? "pricing-card-featured border-[#2a241d] bg-[#2a241d] text-[#fffaf1] shadow-xl shadow-[#2a241d]/10"
          : "border-[#e4d8c8] bg-[#fffaf1]/86 text-[#2a241d] shadow-sm shadow-[#2a241d]/[0.035]",
        isPulsing && "pricing-card-pulse",
      )}
    >
      <div className="relative">
        <div
          className={cn(
            "absolute -left-12 -top-12 h-28 w-28 rounded-full blur-2xl",
            featured ? "bg-[#CC785C]/20" : "bg-[#CC785C]/10",
          )}
          aria-hidden="true"
        />
        {recommended ? (
          <span
            className={cn(
              "pricing-recommended-badge absolute right-0 top-0 z-10 rounded-full border border-[#d97757] bg-[#d97757] px-3 py-1 text-xs font-bold text-[#131314] shadow-sm shadow-[#d97757]/15",
            )}
          >
            {copy.recommended}
          </span>
        ) : null}
        <h3 className="relative text-2xl font-bold">
          {plan.name}
        </h3>
      </div>

      <div className="mt-5">
        <div
          key={`${plan.id}-${duration}`}
          className={cn(
            "pricing-price-change text-3xl font-black leading-tight tracking-normal md:text-[2rem]",
            featured ? "text-white" : "text-[#2a241d]",
          )}
        >
          {plan.prices[duration]} {copy.currency}
        </div>
        <div
          className={cn(
            "mt-2 text-xs font-semibold",
            featured ? "text-[#efe2d2]" : "text-[#75695d]",
          )}
        >
          {copy.stagesIncluded}
        </div>
      </div>

      <div
        className={cn(
          "my-5 h-px",
          featured ? "bg-white/12" : "bg-[#e4d8c8]",
        )}
      />

      <div
        className={cn(
          "pricing-highlights space-y-3 text-sm font-semibold leading-7 lg:min-h-[12rem]",
          locale === "fa" ? "text-right" : "text-left",
        )}
      >
        {plan.highlights.map((feature) => (
          <div key={feature} className="flex items-center gap-2">
            <span
              className={cn(
                "grid h-5 w-5 shrink-0 place-items-center rounded-full",
                featured ? "bg-white/10" : "bg-[#f5eadb]",
              )}
            >
              <Check className="h-3.5 w-3.5" />
            </span>
            {feature}
          </div>
        ))}
      </div>

      <div className="mt-5">
        <PricingCoverage coverage={plan.coverage} featured={featured} locale={locale} />
      </div>

      <div
        className={cn(
          "mt-5 border-t pt-4 text-xs font-semibold leading-6",
          featured
            ? "border-white/12 text-[#efe2d2]"
            : "border-[#e4d8c8] text-[#6f6254]",
        )}
      >
        {plan.addon}
      </div>

      <Link
        href={getWhatsappHref(plan, duration, durationById, locale)}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          buttonVariants({ variant: featured ? "secondary" : "default" }),
          "pricing-plan-cta mt-auto w-full",
          featured &&
            "border-white bg-[#fffaf1] text-[#2a241d] hover:bg-[#f5eadb]",
        )}
      >
        {plan.cta}
        <ArrowLeft className="h-4 w-4" />
      </Link>
    </article>
  );
}

export function PricingSection({ locale = "fa" }: { locale?: Locale }) {
  const plans = locale === "fa" ? pricingPlans : pricingPlansEn;
  const durationOptions = locale === "fa" ? durations : durationsEn;
  const tickLabels = locale === "fa" ? axisTickLabels : axisTickLabelsEn;
  const durationById = useMemo(
    () =>
      durationOptions.reduce(
        (result, item) => ({ ...result, [item.id]: item }),
        {} as Record<Duration, (typeof durations)[number]>,
      ),
    [durationOptions],
  );
  const copy = pricingCopy[locale];
  const [duration, setDuration] = useState<Duration>("12");
  const [activePlanIndex, setActivePlanIndex] = useState<number | null>(null);
  const [pulsingPlan, setPulsingPlan] = useState<PlanId | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const railRef = useRef<HTMLDivElement | null>(null);
  const pulseTimeoutRef = useRef<number | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const activePlan = activePlanIndex === null ? null : plans[activePlanIndex];
  const activeDuration = useMemo(() => durationById[duration], [duration, durationById]);
  const activePercent =
    activePlanIndex === null ? 0 : (activePlanIndex / (plans.length - 1)) * 100;

  useEffect(() => {
    setIsReady(true);

    if (prefersReducedMotion) {
      setIsRevealed(true);
      return;
    }

    const section = sectionRef.current;

    if (!section) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  useEffect(() => {
    return () => {
      if (pulseTimeoutRef.current) {
        window.clearTimeout(pulseTimeoutRef.current);
      }
    };
  }, []);

  const selectPlan = useCallback(
    (nextIndex: number) => {
      const clampedIndex = clampPlanIndex(nextIndex, plans.length);
      const nextPlan = plans[clampedIndex];

      setActivePlanIndex(clampedIndex);

      if (prefersReducedMotion) {
        return;
      }

      setPulsingPlan(nextPlan.id);

      if (pulseTimeoutRef.current) {
        window.clearTimeout(pulseTimeoutRef.current);
      }

      pulseTimeoutRef.current = window.setTimeout(() => {
        setPulsingPlan(null);
      }, 1500);
    },
    [plans, prefersReducedMotion],
  );

  const getIndexFromPointer = useCallback((clientX: number) => {
    const rail = railRef.current;

    if (!rail) {
      return activePlanIndex ?? FALLBACK_PLAN_INDEX;
    }

    const rect = rail.getBoundingClientRect();
    const ratio = Math.min(Math.max((rect.right - clientX) / rect.width, 0), 1);

    return Math.round(ratio * (plans.length - 1));
  }, [activePlanIndex, plans.length]);

  const handleRailPointer = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    selectPlan(getIndexFromPointer(event.clientX));
  };

  const handleRailMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.buttons !== 1) {
      return;
    }

    selectPlan(getIndexFromPointer(event.clientX));
  };

  const handleSliderKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const currentIndex = activePlanIndex ?? FALLBACK_PLAN_INDEX;

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      selectPlan(currentIndex + 1);
    }

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      selectPlan(currentIndex - 1);
    }

    if (event.key === "Home") {
      event.preventDefault();
      selectPlan(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      selectPlan(plans.length - 1);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="plans"
      dir={locale === "fa" ? "rtl" : "ltr"}
      data-pricing-ready={isReady ? "true" : undefined}
      data-pricing-revealed={isRevealed || prefersReducedMotion ? "true" : "false"}
      className="section-gradient section-gradient-pricing relative overflow-hidden border-b border-[#e4d8c8] dark:border-zinc-800"
    >
      <div className="mx-auto max-w-7xl px-4 pb-28 pt-14 md:px-6 md:py-20">
        <div className="pricing-reveal-header">
          <SectionHeader
            eyebrow={copy.eyebrow}
            title={copy.title}
            description={copy.description}
          />
        </div>

        <div className="pricing-slider pricing-slider-labs mt-8 rounded-[1.4rem] border border-[#e4d8c8] bg-[#fffaf1]/70 px-3 py-5 shadow-sm shadow-[#2a241d]/[0.03] md:mx-auto md:mt-12 md:max-w-4xl md:px-8 md:py-7">
          <div className="pricing-axis-copy mx-auto max-w-3xl text-center">
            <span className="pricing-axis-label block text-lg font-black leading-7 text-[#2a241d] md:text-2xl md:leading-8">
              {copy.axisLabel}
            </span>
            <span
              className={cn(
                "pricing-axis-insight mx-auto mt-2 block min-h-6 max-w-2xl rounded-full px-3 py-1 text-xs font-bold leading-5 transition duration-200 md:text-sm",
                activePlan
                  ? "bg-[#CC785C] text-white shadow-sm shadow-[#CC785C]/15 dark:bg-amber-300 dark:text-zinc-950"
                  : "bg-[#f5eadb]/78 text-[#75695d]",
              )}
            >
              {activePlan ? activePlan.sliderInsight : copy.sliderPrompt}
            </span>
          </div>
          <div
            ref={railRef}
            className="relative mx-2 mt-5 h-24 max-w-3xl touch-none md:mx-auto md:h-20"
            onPointerDown={handleRailPointer}
            onPointerMove={handleRailMove}
          >
            <div className="absolute left-0 right-0 top-8 h-px -translate-y-1/2 overflow-hidden rounded-full bg-[#d8c7b2]">
              <span
                className="pricing-slider-rail block h-full origin-right bg-[#CC785C] transition-[width] duration-200"
                style={{ width: activePlanIndex === null ? "0%" : `${activePercent}%` }}
              />
            </div>
            <ArrowLeft
              aria-hidden="true"
              className="pointer-events-none absolute left-[-0.8rem] top-8 z-30 h-5 w-5 -translate-y-1/2 text-[#CC785C] drop-shadow-[0_1px_0_rgba(255,250,241,0.95)]"
              strokeWidth={3}
            />
            {activePlan ? (
              <button
                type="button"
                data-plan-slider-handle
                role="slider"
                aria-label={copy.sliderAria}
                aria-valuemin={0}
                aria-valuemax={plans.length - 1}
                aria-valuenow={activePlanIndex ?? 0}
                aria-valuetext={`${activePlan.name}, ${activePlan.sliderInsight}`}
                onKeyDown={handleSliderKeyDown}
                onPointerDown={(event) => {
                  event.stopPropagation();
                  event.currentTarget.setPointerCapture(event.pointerId);
                  selectPlan(getIndexFromPointer(event.clientX));
                }}
                onPointerMove={(event) => {
                  if (event.buttons === 1) {
                    selectPlan(getIndexFromPointer(event.clientX));
                  }
                }}
                className="absolute top-8 z-20 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full border-2 border-[#fffaf1] bg-[#CC785C] shadow-lg shadow-[#CC785C]/20 transition-[right,transform] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CC785C]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbf6ed]"
                style={{ right: `${activePercent}%`, transform: "translate(50%, -50%)" }}
              >
                <span className="h-2.5 w-2.5 rounded-full bg-white" />
              </button>
            ) : null}
            {plans.map((plan, index) => {
              const tickPercent = (index / (plans.length - 1)) * 100;

              return (
                <div key={plan.id}>
                  <span
                    aria-hidden="true"
                    data-plan-stopper={plan.id}
                    style={{
                      right: `${tickPercent}%`,
                      transform: "translate(50%, -50%)",
                    }}
                    className={cn(
                      "absolute top-8 z-10 block h-3 w-3 rounded-full border border-[#d8c7b2] bg-[#fffaf1]",
                      activePlanIndex === index && "border-[#CC785C] bg-[#CC785C]",
                    )}
                  />
                  <button
                    type="button"
                    data-plan-tick={plan.id}
                    onClick={() => selectPlan(index)}
                    style={{
                      right: `${tickPercent}%`,
                      transform: getAxisItemTransform(index, plans.length),
                    }}
                    className={cn(
                      "absolute top-8 z-10 h-16 w-16 rounded-2xl text-center text-[10.5px] font-bold leading-5 text-[#75695d] transition hover:text-[#2a241d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CC785C]/30 md:h-14 md:w-20 md:text-xs",
                      activePlanIndex === index && "text-[#2a241d]",
                    )}
                  >
                    <span dir="ltr" className="absolute left-1/2 top-5 w-full -translate-x-1/2">
                      {tickLabels[plan.id]}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          <p className="mx-auto min-h-6 max-w-xl text-center text-xs font-bold leading-6 text-[#6f6254]">
            {activePlan ? activePlan.selectorMotto : ""}
          </p>
        </div>

        <div className="pricing-duration mt-6 flex flex-col items-center gap-2">
          <div className="grid w-full max-w-xl grid-cols-3 gap-2 rounded-[1.3rem] border border-[#e4d8c8] bg-[#fffaf1]/70 p-2 pt-8 shadow-sm shadow-[#2a241d]/[0.025] md:rounded-[1.5rem]">
            {durationOptions.map((item) => {
              const active = item.id === duration;

              return (
                <button
                  key={item.id}
                  type="button"
                  data-duration-option={item.id}
                  onClick={() => setDuration(item.id)}
                  className={cn(
                    "relative h-12 rounded-xl border text-sm font-bold shadow-sm transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2a241d]/25 md:h-[3.25rem] md:rounded-2xl",
                    active
                      ? "border-[#2a241d] bg-[#2a241d] text-[#fffaf1] shadow-[#2a241d]/15"
                      : "border-[#e4d8c8] bg-[#fffaf1] text-[#2a241d] shadow-[#2a241d]/[0.025] hover:bg-[#f5eadb]",
                  )}
                >
                  {item.id === "12" ? (
                    <span
                      className={cn(
                        "pricing-best-value-badge absolute -top-8 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full border px-2.5 py-0.5 text-[10px] font-bold leading-4 transition duration-200",
                        active
                          ? "border-[#2a241d] bg-[#fffaf1] text-[#2a241d]"
                          : "border-[#e4d8c8] bg-[#fffaf1] text-[#CC785C]",
                      )}
                    >
                      {copy.bestValue}
                    </span>
                  ) : null}
                  <span className="block">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
          <p
            key={duration}
            className="pricing-price-change text-center text-xs font-semibold text-[#75695d]"
          >
            {activeDuration.note}
          </p>
        </div>

        <div className="pricing-cards mt-8 grid justify-items-center gap-4 md:grid-cols-2 md:justify-items-stretch lg:grid-cols-4">
          {plans.map((plan, index) => (
            <PricingPlanCard
              key={plan.id}
              plan={plan}
              duration={duration}
              durationById={durationById}
              isActive={activePlanIndex === index}
              isPulsing={pulsingPlan === plan.id}
              cardDelay={plan.featured ? "1120ms" : `${760 + index * 120}ms`}
              locale={locale}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
