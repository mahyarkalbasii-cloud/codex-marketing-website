"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { ArrowLeft, BarChart3, Check } from "lucide-react";

import bonyanPlanIcon from "@/assets/images/pricing-plan-bonyan-icon.webp";
import rouyanPlanIcon from "@/assets/images/pricing-plan-rouyan-icon.webp";
import tabanPlanIcon from "@/assets/images/pricing-plan-taban-icon.webp";
import tabanPlusPlanIcon from "@/assets/images/pricing-plan-taban-plus-icon.webp";
import pricingLandSizeTierLarge from "@/assets/images/pricing-land-size-tier-large.webp";
import pricingLandSizeTierSmall from "@/assets/images/pricing-land-size-tier-small.webp";
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

const pricingPlanIcons: Record<PlanId, typeof bonyanPlanIcon> = {
  bonyan: bonyanPlanIcon,
  royan: rouyanPlanIcon,
  taban: tabanPlanIcon,
  "taban-plus": tabanPlusPlanIcon,
};

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

const pricingCopy = {
  fa: {
    eyebrow: "پلن‌ها",
    title: "زمین بازی خود را انتخاب کنید",
    description:
      "در بازار داده، قیمت ارزان یعنی دسترسی همگانی، یعنی رقابت شلوغ و سوختن فرصت‌ها. تفکیک ساختاریافته‌ی اشتراک‌ها در پرشین‌سازه، رقابت را متعادل و سودآور نگه می‌دارد",
    axisLabel: "متراژ زمین پروژه",
    sliderPrompt: "یکی از بازه‌های متراژ را انتخاب کنید",
    sliderAria: "انتخاب مقیاس زمین پروژه",
    suggestedPlanText: (name: string) => `پلن پیشنهادی برای شما: ${name}`,
    recommended: "پیشنهاد اصلی",
    bestValue: "ارزش پیشنهادی",
    stagesIncluded: "۳ مرحله ساخت",
    coverage: "پوشش بازار",
    from: "از",
    currency: "تومان",
  },
} as const;

const FALLBACK_PLAN_INDEX = 2;
const axisTickLabels: Record<PlanId, string> = {
  bonyan: "تا ۳۰۰ متر",
  royan: "تا ۵۰۰ متر",
  taban: "تا ۷۰۰ متر",
  "taban-plus": "+۷۰۰ متر",
};
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

function getVerticalAxisPosition(ratio: number) {
  const insetRem = 1.35;
  const offset = (1 - 2 * ratio) * insetRem;
  const operator = offset < 0 ? "-" : "+";

  return `calc(${ratio * 100}% ${operator} ${Math.abs(offset).toFixed(3)}rem)`;
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
  const formatter = "fa-IR";

  return (
    <div
      className={cn(
        "pricing-coverage rounded-2xl border p-3",
        featured
          ? "border-white/10 bg-white/10 text-[#fffaf1]"
          : "border-[#e4d8c8] bg-[#fbf6ed]/78 text-[#2a241d]",
      )}
      data-featured-coverage={featured ? "true" : "false"}
      aria-label={`${copy.coverage} ${coverage.toLocaleString(formatter)} ${copy.from} ${Number(4).toLocaleString(formatter)}`}
    >
      <div
        className={cn(
          "pricing-coverage-header mb-3 flex items-center justify-between text-[11px] font-semibold",
          featured ? "text-[#efe2d2]" : "text-[#6f6254]",
        )}
      >
        <span className="pricing-coverage-label">{copy.coverage}</span>
        <span className="pricing-coverage-value flex items-center gap-1">
          {coverage.toLocaleString(formatter)} {copy.from} {Number(4).toLocaleString(formatter)}
          <BarChart3 aria-hidden="true" className="h-3.5 w-3.5" />
        </span>
      </div>
      <div
        className="pricing-coverage-meter grid gap-1.5"
        aria-hidden="true"
      >
        {[1, 2, 3, 4].map((item) => {
          const filled = item <= coverage;

          return (
            <span
              key={item}
              data-filled-segment={filled ? "true" : "false"}
              className={cn(
                "pricing-coverage-segment h-1.5 rounded-full transition-colors",
                filled
                  ? featured
                    ? "bg-[#CC785C]"
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
  isActive,
  isPulsing,
  cardDelay,
  locale,
}: {
  plan: PricingPlan;
  duration: Duration;
  isActive: boolean;
  isPulsing: boolean;
  cardDelay: string;
  locale: Locale;
}) {
  const recommended = Boolean(plan.featured);
  const planIcon = pricingPlanIcons[plan.id];
  const copy = pricingCopy[locale];

  return (
    <article
      data-plan-card={plan.id}
      data-active-plan={isActive ? "true" : "false"}
      data-recommended-plan={recommended ? "true" : "false"}
      style={{ "--pricing-delay": cardDelay } as CSSProperties}
      className={cn(
        "pricing-card relative flex min-h-[34rem] w-full max-w-[22.5rem] flex-col overflow-hidden rounded-[1.6rem] border p-5 text-center transition duration-200 md:w-auto md:max-w-none md:p-6 motion-safe:hover:-translate-y-0.5",
        "border-[var(--line)] bg-[var(--surface-2)] text-[var(--ink-900)] shadow-sm shadow-[#2a241d]/[0.035]",
        recommended && "border-[var(--clay-400)] bg-[var(--surface-2)] shadow-lg shadow-[#C16B4E]/10 ring-2 ring-[var(--clay-400)] lg:scale-[1.03]",
        isActive && "ring-1 ring-[#CC785C] shadow-md shadow-[#CC785C]/15 motion-safe:-translate-y-1",
        recommended && "pricing-card-recommended",
        isPulsing && "pricing-card-pulse",
      )}
    >
      <div className="pricing-card-head relative">
        <span className="pricing-plan-icon">
          <img
            src={planIcon.src}
            alt=""
            width={planIcon.width}
            height={planIcon.height}
            loading="lazy"
            decoding="async"
            className="pricing-plan-icon-image"
          />
        </span>
        <h3 className="pricing-plan-title relative text-2xl font-bold">
          {plan.name}
        </h3>
      </div>

      <div className="pricing-plan-price-group mt-5">
        <div
          key={`${plan.id}-${duration}`}
          className="pricing-plan-price pricing-price-change text-3xl font-black leading-tight tracking-normal text-[#2a241d] md:text-[2rem]"
        >
          {plan.prices[duration]}{" "}
          <span className="pricing-plan-currency">{copy.currency}</span>
        </div>
        <div className="pricing-plan-stages mt-2 text-xs font-semibold text-[#75695d]">
          {copy.stagesIncluded}
        </div>
      </div>

      <div className="pricing-card-divider my-5 h-px bg-[#e4d8c8]" />

      <div
        className={cn(
          "pricing-highlights space-y-3 text-right text-sm font-semibold leading-7 lg:min-h-[12rem]",
        )}
      >
        {plan.highlights.map((feature) => (
          <div key={feature} className="pricing-highlight-item flex items-center gap-2">
            <span
              className="pricing-highlight-icon grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#f5eadb]"
              aria-hidden="true"
            >
              <Check aria-hidden="true" className="h-3.5 w-3.5" />
            </span>
            {feature}
          </div>
        ))}
      </div>

      <div className="pricing-coverage-wrap mt-5">
        <PricingCoverage coverage={plan.coverage} featured={false} locale={locale} />
      </div>

      <div className="pricing-addon mt-5 border-t border-[#e4d8c8] pt-4 text-xs font-semibold leading-6 text-[#6f6254]">
        {plan.addon}
      </div>

      <Link
        href={`/subscriptions/${plan.id}/`}
        className={cn(
          buttonVariants({ variant: "strong" }),
          "pricing-plan-cta mt-auto w-full",
        )}
      >
        {plan.cta}
        <ArrowLeft aria-hidden="true" className="h-4 w-4" />
      </Link>
    </article>
  );
}

export function PricingSection({ locale = "fa" }: { locale?: Locale }) {
  const plans = pricingPlans;
  const durationOptions = durations;
  const tickLabels = axisTickLabels;
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
  const activeRatio = activePlanIndex === null ? 0 : activePlanIndex / (plans.length - 1);
  const activePercent =
    activePlanIndex === null ? 0 : activeRatio * 100;
  const activeVerticalPosition = getVerticalAxisPosition(activeRatio);

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

  useEffect(() => {
    if (activePlanIndex === null) return;
    const plan = plans[activePlanIndex];
    const card = document.querySelector<HTMLElement>(`[data-plan-card="${plan.id}"]`);
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [activePlanIndex, plans]);

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

  const getIndexFromPointer = useCallback((clientX: number, clientY: number) => {
    const rail = railRef.current;

    if (!rail) {
      return activePlanIndex ?? FALLBACK_PLAN_INDEX;
    }

    const rect = rail.getBoundingClientRect();
    const isVertical = window.matchMedia("(max-width: 640px)").matches;
    const ratio = isVertical
      ? Math.min(Math.max((clientY - rect.top) / rect.height, 0), 1)
      : Math.min(Math.max((rect.right - clientX) / rect.width, 0), 1);

    return Math.round(ratio * (plans.length - 1));
  }, [activePlanIndex, plans.length]);

  const handleRailPointer = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    selectPlan(getIndexFromPointer(event.clientX, event.clientY));
  };

  const handleRailMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.buttons !== 1) {
      return;
    }

    selectPlan(getIndexFromPointer(event.clientX, event.clientY));
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

  const handleDurationKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const tabs = durationOptions.map((d) => d.id);
      const currentIndex = tabs.indexOf(duration);
      const isRTL = true;
      let newIndex: number;

      if (event.key === "ArrowLeft") {
        newIndex = isRTL ? currentIndex + 1 : currentIndex - 1;
      } else if (event.key === "ArrowRight") {
        newIndex = isRTL ? currentIndex - 1 : currentIndex + 1;
      } else {
        return;
      }

      event.preventDefault();
      const clamped = Math.min(Math.max(newIndex, 0), tabs.length - 1);
      setDuration(tabs[clamped] as Duration);
    },
    [durationOptions, duration],
  );

  return (
    <section
      ref={sectionRef}
      id="plans"
      dir="rtl"
      data-pricing-ready={isReady ? "true" : undefined}
      data-pricing-revealed={isRevealed || prefersReducedMotion ? "true" : "false"}
      data-active-plan-id={activePlan?.id ?? ""}
      className="section-gradient section-gradient-pricing relative overflow-hidden border-b border-[#e4d8c8]"
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
          <div className="pricing-axis-stage">
            <span className="pricing-land-art pricing-land-art--large" aria-hidden="true">
              <img
                src={pricingLandSizeTierLarge.src}
                alt=""
                width="824"
                height="475"
                loading="lazy"
                decoding="async"
                className="pricing-land-art-image"
              />
            </span>
            <div className="pricing-axis-copy mx-auto max-w-3xl text-center">
              <span className="pricing-axis-label block text-lg font-black leading-7 text-[#2a241d] md:text-2xl md:leading-8">
                {copy.axisLabel}
              </span>
            </div>
            <span className="pricing-land-art pricing-land-art--small" aria-hidden="true">
              <img
                src={pricingLandSizeTierSmall.src}
                alt=""
                width="320"
                height="230"
                loading="lazy"
                decoding="async"
                className="pricing-land-art-image"
              />
            </span>
          </div>
          <div
            ref={railRef}
            className="pricing-slider-control relative mx-2 mt-5 h-24 max-w-3xl touch-none md:mx-auto md:h-20"
            onPointerDown={handleRailPointer}
            onPointerMove={handleRailMove}
          >
            <div className="pricing-slider-track absolute left-0 right-0 top-8 h-px -translate-y-1/2 overflow-hidden rounded-full bg-[#d8c7b2]">
              <span
                className="pricing-slider-rail block h-full origin-right bg-[#CC785C] transition-[width] duration-200"
                style={{
                  width: activePlanIndex === null ? "0%" : `${activePercent}%`,
                  "--pricing-active-percent": `${activePercent}%`,
                  "--pricing-active-ratio": activeRatio,
                  "--pricing-active-y": activeVerticalPosition,
                } as CSSProperties}
              />
            </div>
            <ArrowLeft
              aria-hidden="true"
              className="pricing-slider-arrow pointer-events-none absolute left-[-0.8rem] top-8 z-30 h-5 w-5 -translate-y-1/2 text-[#CC785C] drop-shadow-[0_1px_0_rgba(255,250,241,0.95)]"
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
                  selectPlan(getIndexFromPointer(event.clientX, event.clientY));
                }}
                onPointerMove={(event) => {
                  if (event.buttons === 1) {
                    selectPlan(getIndexFromPointer(event.clientX, event.clientY));
                  }
                }}
                className="pricing-slider-handle absolute top-8 z-20 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full border-2 border-[#fffaf1] bg-[#CC785C] shadow-lg shadow-[#CC785C]/20 transition-[right,transform] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CC785C]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbf6ed]"
                style={{
                  right: `${activePercent}%`,
                  transform: "translate(50%, -50%)",
                  "--pricing-active-percent": `${activePercent}%`,
                  "--pricing-active-ratio": activeRatio,
                  "--pricing-active-y": activeVerticalPosition,
                } as CSSProperties}
              >
                <span aria-hidden="true" className="pricing-slider-handle-dot h-2.5 w-2.5 rounded-full bg-white" />
              </button>
            ) : null}
            {plans.map((plan, index) => {
              const tickRatio = index / (plans.length - 1);
              const tickPercent = (index / (plans.length - 1)) * 100;
              const tickVerticalPosition = getVerticalAxisPosition(tickRatio);

              return (
                <div key={plan.id}>
                  <span
                    aria-hidden="true"
                    data-plan-stopper={plan.id}
                    data-active-stopper={activePlanIndex === index ? "true" : "false"}
                    style={{
                      right: `${tickPercent}%`,
                      transform: "translate(50%, -50%)",
                      "--pricing-tick-percent": `${tickPercent}%`,
                      "--pricing-tick-ratio": tickRatio,
                      "--pricing-tick-y": tickVerticalPosition,
                    } as CSSProperties}
                    className={cn(
                      "pricing-slider-stopper absolute top-8 z-10 block h-3 w-3 rounded-full border border-[#d8c7b2] bg-[#fffaf1]",
                      activePlanIndex === index && "border-[#CC785C] bg-[#CC785C]",
                    )}
                  />
                  <button
                    type="button"
                    data-plan-tick={plan.id}
                    data-active-tick={activePlanIndex === index ? "true" : "false"}
                    aria-label={tickLabels[plan.id]}
                    aria-pressed={activePlanIndex === index}
                    onClick={() => selectPlan(index)}
                    style={{
                      right: `${tickPercent}%`,
                      transform: getAxisItemTransform(index, plans.length),
                      "--pricing-tick-percent": `${tickPercent}%`,
                      "--pricing-tick-ratio": tickRatio,
                      "--pricing-tick-y": tickVerticalPosition,
                    } as CSSProperties}
                    className={cn(
                      "pricing-slider-tick absolute top-8 z-10 h-[4.5rem] w-16 rounded-2xl text-center text-[10.5px] font-bold leading-snug transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CC785C]/35 md:h-16 md:w-20 md:text-xs",
                      activePlanIndex === index
                        ? "text-[#2a241d]"
                        : "text-[#75695d] hover:text-[#2a241d]",
                    )}
                  >
                    <span className="pricing-slider-tick-label absolute left-1/2 top-5 flex w-full -translate-x-1/2 flex-col items-center gap-0.5">
                      <span className={activePlanIndex === index ? "text-[#2a241d]" : "text-[#75695d]"}>
                        {tickLabels[plan.id]}
                      </span>
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

        </div>

        <div
          className="pricing-duration mt-6 flex flex-col items-center gap-2"
          data-selected-duration={duration}
        >
          <div className="relative w-full max-w-xs md:max-w-sm">
            <div
              role="tablist"
              aria-label="دوره اشتراک"
              onKeyDown={handleDurationKeyDown}
              className="pricing-duration-group flex w-full rounded-2xl border border-[#E4D8C8] bg-[#FBF6ED] p-1 shadow-sm shadow-[#2a241d]/[0.025]"
            >
              {durationOptions.map((item) => {
                const active = item.id === duration;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    tabIndex={active ? 0 : -1}
                    data-duration-option={item.id}
                    data-active-duration={active ? "true" : "false"}
                    onClick={() => setDuration(item.id)}
                    className={cn(
                      "pricing-duration-option flex h-12 flex-1 items-center justify-center rounded-[9px] text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CC785C]/35 focus-visible:ring-inset",
                      active
                        ? "bg-[#CC785C] text-[#FFF7EF] shadow-sm shadow-[#CC785C]/20"
                        : "text-[#2A241D] hover:bg-[rgba(204,120,92,0.08)]",
                    )}
                  >
                    <span className="block">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pricing-cards mt-8 grid justify-items-center gap-4 md:grid-cols-2 md:justify-items-stretch lg:grid-cols-4">
          {plans.map((plan, index) => (
            <PricingPlanCard
              key={plan.id}
              plan={plan}
              duration={duration}
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
