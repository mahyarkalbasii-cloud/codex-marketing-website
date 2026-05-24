"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import {
  Building2,
  Check,
  ChevronDown,
  Filter,
  MessageSquareText,
  Radar,
  Route,
  TrendingUp,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type FilterGroupId = "stage" | "region" | "subscription";

const constructionStageOptions = [
  "تخریب و گودبرداری",
  "فونداسیون",
  "اسکلت بندی",
  "دیوارچینی",
  "گچ و خاک",
  "ابتدای نازک کاری",
  "نازک کاری",
  "ظریف کاری",
  "پایان کار",
];

const regionOptions = Array.from(
  { length: 22 },
  (_, index) => `منطقه ${(index + 1).toLocaleString("fa-IR")}`,
);

const subscriptionOptions = ["بنیان", "رویان", "تابان", "تابان پلاس"];

const filterGroups: {
  id: FilterGroupId;
  label: string;
  allLabel: string;
  options: string[];
}[] = [
  {
    id: "stage",
    label: "مرحله ساخت",
    allLabel: "همه مراحل",
    options: constructionStageOptions,
  },
  {
    id: "region",
    label: "منطقه",
    allLabel: "همه مناطق",
    options: regionOptions,
  },
  {
    id: "subscription",
    label: "نوع اشتراک",
    allLabel: "همه پلن‌ها",
    options: subscriptionOptions,
  },
];

const defaultFilterState: Record<FilterGroupId, string> = {
  stage: "",
  region: "",
  subscription: "",
};

const projectFields = [
  "موقعیت پروژه",
  "مرحله ساخت",
  "نوع کاربری",
  "متراژ زمین",
  "وضعیت فعالیت",
  "آخرین به‌روزرسانی",
];

const productPathSteps = [
  "فیلتر",
  "نقشه",
  "انتخاب پروژه",
  "بررسی نمونه امن",
  "پیشنهاد اقدام",
  "پیگیری",
] as const;

type SampleProject = {
  id: string;
  title: string;
  line: string;
  stage: string;
  pinPosition: string;
  connectorPath: string;
  pinTone: "clay" | "sage" | "dusk" | "gold" | "stone";
  status: string;
  action: string;
  followUp: string;
  fieldWidths: string[];
  filters: string[];
};

const sampleProjects: SampleProject[] = [
  {
    id: "selected-project",
    title: "پروژه منتخب برای ورود فروش",
    line:
      "فرصت نزدیک به زمان تصمیم‌گیری؛ اطلاعات تماس در نسخه نمایشی نمایش داده نمی‌شود.",
    stage: "نازک کاری",
    pinPosition: "right-[38%] top-[42%]",
    connectorPath: "M472 194 C414 232 352 286 274 328",
    pinTone: "clay",
    status: "اولویت گرم",
    action:
      "این پروژه در مرحله‌ای است که پیام فروش باید روی سرعت تامین، نمونه‌کار و آماده‌بودن تیم اجرا متمرکز شود.",
    followUp:
      "برای پیگیری بعدی، پیام معرفی محصول و پیشنهاد بررسی نیاز پروژه آماده می‌شود.",
    fieldWidths: ["w-20", "w-16", "w-24", "w-14", "w-20", "w-16"],
    filters: [
      "ابتدای نازک کاری",
      "نازک کاری",
      "ظریف کاری",
      "پایان کار",
      "منطقه ۵",
      "منطقه ۶",
      "منطقه ۷",
      "منطقه ۸",
      "رویان",
      "تابان",
    ],
  },
  {
    id: "related-opportunity",
    title: "فرصت مرتبط با تیم فروش",
    line:
      "پروژه نمونه با ظرفیت بررسی؛ نشانی و مالک پروژه نمایش داده نمی‌شود.",
    stage: "ابتدای نازک کاری",
    pinPosition: "right-[27%] top-[28%]",
    connectorPath: "M555 132 C486 182 386 258 208 338",
    pinTone: "sage",
    status: "نیازمند تماس هدفمند",
    action:
      "برای این فرصت، پیشنهاد پیام باید روی آماده‌بودن محصول، زمان تحویل و سابقه تامین پروژه‌های مشابه بنشیند.",
    followUp:
      "یادآوری فروش برای مرور نیازهای مرحله نازک کاری و زمان تماس مناسب ثبت می‌شود.",
    fieldWidths: ["w-16", "w-20", "w-16", "w-24", "w-14", "w-20"],
    filters: [
      "گچ و خاک",
      "ابتدای نازک کاری",
      "نازک کاری",
      "منطقه ۹",
      "منطقه ۱۰",
      "منطقه ۱۱",
      "منطقه ۱۲",
      "تابان",
      "تابان پلاس",
    ],
  },
  {
    id: "trackable-project",
    title: "پروژه قابل پیگیری",
    line: "فرصت نمونه برای برنامه‌ریزی تماس؛ شماره تماس واقعی نمایش داده نمی‌شود.",
    stage: "گچ و خاک",
    pinPosition: "right-[74%] top-[23%]",
    connectorPath: "M198 106 C218 174 230 252 236 336",
    pinTone: "dusk",
    status: "در صف پرورش فروش",
    action:
      "این پروژه هنوز برای پیشنهاد مستقیم زود است؛ بهتر است در مسیر پرورش فروش و رصد تغییر مرحله بماند.",
    followUp:
      "پیگیری بعدی روی تغییر مرحله ساخت و آماده‌شدن فرصت برای معرفی محصول تنظیم می‌شود.",
    fieldWidths: ["w-24", "w-14", "w-20", "w-16", "w-24", "w-14"],
    filters: [
      "اسکلت بندی",
      "دیوارچینی",
      "گچ و خاک",
      "منطقه ۱۷",
      "منطقه ۱۸",
      "منطقه ۱۹",
      "منطقه ۲۰",
      "بنیان",
      "رویان",
    ],
  },
  {
    id: "foundation-lead",
    title: "فرصت تازه در حال شکل‌گیری",
    line: "پروژه نمونه در ابتدای چرخه؛ مناسب برای ساختن رابطه قبل از رقبا.",
    stage: "فونداسیون",
    pinPosition: "right-[84%] top-[18%]",
    connectorPath: "M122 82 C156 150 204 258 238 338",
    pinTone: "gold",
    status: "رصد اولیه",
    action:
      "در این مرحله پیام فروش باید سبک و آموزشی باشد؛ هدف، معرفی برند و ساختن مسیر ارتباطی است.",
    followUp:
      "یادآوری آینده برای بررسی عبور پروژه از فونداسیون به اسکلت بندی ثبت می‌شود.",
    fieldWidths: ["w-16", "w-20", "w-24", "w-14", "w-16", "w-20"],
    filters: [
      "تخریب و گودبرداری",
      "فونداسیون",
      "منطقه ۱",
      "منطقه ۲",
      "منطقه ۳",
      "بنیان",
      "تابان پلاس",
    ],
  },
  {
    id: "structure-lead",
    title: "پروژه در مسیر تصمیم‌سازی",
    line: "نمونه‌ای از پروژه‌های میانی بازار؛ مناسب برای دسته‌بندی نیازهای آینده.",
    stage: "اسکلت بندی",
    pinPosition: "right-[58%] top-[18%]",
    connectorPath: "M320 82 C292 156 264 262 244 338",
    pinTone: "stone",
    status: "آماده رصد",
    action:
      "برای این پروژه، پیام باید روی شناخت نیازهای چند هفته آینده و معرفی مسیر تامین متمرکز باشد.",
    followUp:
      "پیگیری بعدی برای نزدیک‌شدن به مرحله دیوارچینی و گچ و خاک زمان‌بندی می‌شود.",
    fieldWidths: ["w-20", "w-14", "w-16", "w-24", "w-20", "w-14"],
    filters: [
      "فونداسیون",
      "اسکلت بندی",
      "دیوارچینی",
      "منطقه ۴",
      "منطقه ۵",
      "منطقه ۶",
      "تابان",
      "تابان پلاس",
    ],
  },
  {
    id: "plaster-lead",
    title: "فرصت نزدیک به خرید",
    line: "پروژه نمونه با نیاز احتمالی به تامین سریع و مشاوره محصول.",
    stage: "گچ و خاک",
    pinPosition: "right-[8%] top-[44%]",
    connectorPath: "M700 202 C568 232 422 288 278 340",
    pinTone: "sage",
    status: "اولویت بررسی",
    action:
      "پیام پیشنهادی باید واضح، کوتاه و متناسب با زمان خرید باشد؛ تمرکز روی موجودی، تحویل و نمونه اجرا.",
    followUp:
      "برای تیم فروش، پیگیری کوتاه با تاکید بر آماده‌بودن پیشنهاد و هماهنگی بازدید ثبت می‌شود.",
    fieldWidths: ["w-14", "w-24", "w-20", "w-16", "w-14", "w-20"],
    filters: [
      "دیوارچینی",
      "گچ و خاک",
      "ابتدای نازک کاری",
      "منطقه ۱۳",
      "منطقه ۱۴",
      "منطقه ۱۵",
      "تابان",
      "رویان",
    ],
  },
  {
    id: "delicate-work",
    title: "پروژه در مرحله ظریف کاری",
    line: "فرصت نمونه برای محصولات تکمیلی و خدمات اجرایی نزدیک به پایان پروژه.",
    stage: "ظریف کاری",
    pinPosition: "right-[18%] top-[66%]",
    connectorPath: "M624 304 C510 316 388 332 276 342",
    pinTone: "clay",
    status: "تماس سریع",
    action:
      "این فرصت به پیام مستقیم‌تر نیاز دارد؛ مزیت رقابتی باید در کیفیت اجرا، سرعت تامین و اعتمادسازی بیان شود.",
    followUp:
      "پیگیری بعدی برای پیشنهاد محصول تکمیلی و هماهنگی تصمیم نهایی فروش ثبت می‌شود.",
    fieldWidths: ["w-24", "w-16", "w-14", "w-20", "w-24", "w-16"],
    filters: [
      "نازک کاری",
      "ظریف کاری",
      "پایان کار",
      "منطقه ۱۶",
      "منطقه ۱۷",
      "منطقه ۱۸",
      "تابان پلاس",
    ],
  },
  {
    id: "handover-stage",
    title: "فرصت پایان کار",
    line: "پروژه نمونه برای پیشنهاد خدمات تکمیلی، نگهداری و خریدهای آخر پروژه.",
    stage: "پایان کار",
    pinPosition: "right-[31%] top-[76%]",
    connectorPath: "M524 350 C440 348 344 344 276 342",
    pinTone: "gold",
    status: "فرصت تکمیلی",
    action:
      "پیام فروش این مرحله باید روی تکمیل سریع، خدمات پس از فروش و جمع‌بندی نیازهای باقی‌مانده تمرکز کند.",
    followUp:
      "پیگیری بعدی برای مرور نیازهای پایان کار و معرفی بسته تکمیلی فروش ثبت می‌شود.",
    fieldWidths: ["w-24", "w-14", "w-20", "w-16", "w-24", "w-14"],
    filters: [
      "ظریف کاری",
      "پایان کار",
      "منطقه ۱۹",
      "منطقه ۲۰",
      "منطقه ۲۱",
      "منطقه ۲۲",
      "تابان",
      "تابان پلاس",
    ],
  },
];

const inactivePins = [
  "right-[12%] top-[24%]",
  "right-[46%] top-[28%]",
  "right-[28%] top-[58%]",
  "right-[78%] top-[14%]",
] as const;

const pinToneClasses: Record<SampleProject["pinTone"], string> = {
  clay: "bg-[#b96f35] text-[#fffaf1]",
  sage: "bg-[#6f765f] text-[#fffaf1]",
  dusk: "bg-[#526674] text-[#fffaf1]",
  gold: "bg-[#d39a35] text-[#2a241d]",
  stone: "bg-[#7d756a] text-[#fffaf1]",
};

function SkeletonValue({ width }: { width: string }) {
  return (
    <span
      className={cn(
        "block h-2.5 rounded-full bg-[#d8c9b6] dark:bg-zinc-700",
        width,
      )}
    />
  );
}

function ProjectDetailCard({
  project,
  className,
}: {
  project: SampleProject;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "product-demo-card overflow-hidden rounded-[1.4rem] border border-[#d99a35]/60 bg-[#fffaf1] shadow-lg shadow-[#2a241d]/[0.06]",
        className,
      )}
      aria-label="کارت اطلاعات نمونه پروژه منتخب"
    >
      <div className="relative hidden min-h-28 overflow-hidden border-b border-[#eadfce] bg-[#f4eadc] md:block">
        <div className="absolute inset-0 product-grid opacity-70" />
        <div className="absolute inset-x-5 bottom-4 top-5 overflow-hidden rounded-[1.2rem] border border-[#d6c7b5] bg-[#e7dac8] shadow-inner">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,250,241,.75),transparent_42%),radial-gradient(circle_at_74%_22%,rgba(201,121,43,.18),transparent_24%)]" />
          <div className="absolute bottom-0 right-6 h-14 w-20 rounded-t-[1rem] bg-[#c8b8a4]" />
          <div className="absolute bottom-0 right-20 h-20 w-24 rounded-t-[1rem] bg-[#bba893]" />
          <div className="absolute right-24 top-5 grid grid-cols-3 gap-1.5">
            {Array.from({ length: 9 }).map((_, index) => (
              <span
                key={index}
                className="h-2.5 w-3 rounded-sm bg-[#fffaf1]/90"
              />
            ))}
          </div>
          <div className="absolute left-0 top-9 h-10 w-32 -rotate-12 rounded-full bg-[#fffaf1]/60" />
        </div>
        <div className="absolute left-4 top-4 rounded-full border border-[#e1d2bf] bg-[#fffaf1]/90 px-3 py-1 text-[11px] font-semibold text-[#6b5a4a]">
          تصویر نمونه پروژه
        </div>
      </div>

      <div className="p-3 md:p-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="text-xs font-medium text-[#8a6a41]">
              اطلاعات نمونه
            </div>
            <h3 className="mt-1 text-base font-bold leading-7 text-[#2a241d] md:text-xl">
              {project.title}
            </h3>
            <p className="mt-1 hidden text-xs leading-6 text-[#6f6254] md:block">
              {project.line}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge className="border-[#d99a35]/50 bg-[#f4d29f]/75 text-[#5a3515]">
              {project.stage}
            </Badge>
            <Badge className="border-[#d8c7b2] bg-[#f6ecde] text-[#5f5348]">
              {project.status}
            </Badge>
          </div>
        </div>

        <dl className="mt-3 grid grid-cols-2 gap-2">
          {projectFields.map((field, index) => {
            const isTimestamp = index === projectFields.length - 1;

            return (
              <div
                key={field}
                  className="rounded-2xl border border-[#eadfce] bg-[#fbf6ed] p-2.5 md:p-3"
              >
                <dt className="text-[10.5px] font-medium leading-5 text-[#8d7d6a]">
                  {field}
                </dt>
                <dd
                  className="mt-2 flex items-center gap-2"
                  aria-label={`${field} نمونه`}
                >
                  {isTimestamp ? (
                    <span
                      className="product-timestamp-dot h-2 w-2 shrink-0 rounded-full bg-[#c9792b]"
                      aria-hidden="true"
                    />
                  ) : null}
                  <SkeletonValue width={project.fieldWidths[index]} />
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </article>
  );
}

function ActionCards({ project }: { project: SampleProject }) {
  return (
    <div className="product-demo-actions grid min-w-0 gap-2.5 md:grid-cols-2 md:gap-3">
      <article className="min-w-0 overflow-hidden rounded-[1.25rem] border border-[#d99a35]/45 bg-[#fffaf1]/86 p-3 text-[#2a241d] shadow-sm shadow-[#2a241d]/[0.03] md:p-4">
        <div className="flex min-w-0 items-center gap-2 text-sm font-bold">
          <TrendingUp className="h-4 w-4 text-[#c9792b]" />
          پیشنهاد اقدام فروش
        </div>
        <p className="mt-2 break-words text-xs leading-6 md:text-sm md:leading-7">{project.action}</p>
      </article>

      <article className="min-w-0 overflow-hidden rounded-[1.25rem] border border-[#e4d8c8] bg-[#fffaf1]/86 p-3 shadow-sm shadow-[#2a241d]/[0.03] md:p-4">
        <div className="flex min-w-0 items-center gap-2 text-sm font-bold text-[#2a241d]">
          <MessageSquareText className="h-4 w-4 text-[#6f6254]" />
          پیگیری فروش بعدی
        </div>
        <p className="mt-2 break-words text-xs leading-6 text-[#6f6254] md:text-sm md:leading-7">
          {project.followUp}
        </p>
      </article>
    </div>
  );
}

function FilterDropdown({
  group,
  value,
  open,
  onToggle,
  onSelect,
}: {
  group: (typeof filterGroups)[number];
  value: string;
  open: boolean;
  onToggle: () => void;
  onSelect: (value: string) => void;
}) {
  const selectedLabel = value || group.allLabel;

  const selectOption = (option: string) => {
    onSelect(option);
  };

  return (
    <div className="min-w-0 overflow-hidden rounded-2xl border border-[#eadfce] bg-[#fbf6ed]/88 p-2">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`product-filter-${group.id}`}
        onClick={onToggle}
        className="flex w-full min-w-0 items-center justify-between gap-3 rounded-xl px-2 py-1.5 text-right transition hover:bg-[#f3e7d8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9792b]/30 active:translate-y-px"
      >
        <span className="min-w-0 flex-1">
          <span className="block text-[11px] font-medium text-[#7a6a59]">
            {group.label}
          </span>
          <span className="mt-0.5 block truncate text-sm font-bold text-[#2a241d]">
            {selectedLabel}
          </span>
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-[#8a6a41] transition duration-200",
            open ? "rotate-180" : "",
          )}
        />
      </button>

      {open ? (
        <div
          id={`product-filter-${group.id}`}
          className="mt-2 grid max-h-44 gap-1 overflow-y-auto rounded-xl border border-[#eadfce] bg-[#fffaf1]/95 p-1.5"
        >
          {[group.allLabel, ...group.options].map((optionLabel, index) => {
            const optionValue = index === 0 ? "" : optionLabel;
            const selected = optionValue === value;

            return (
              <button
                key={optionLabel}
                type="button"
                aria-pressed={selected}
                onClick={() => selectOption(optionValue)}
                className={cn(
                  "flex min-w-0 items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-right text-xs font-semibold transition hover:bg-[#f3e7d8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9792b]/30",
                  selected ? "bg-[#f4d29f] text-[#4b2c12]" : "text-[#6f6254]",
                )}
              >
                <span className="min-w-0 truncate">{optionLabel}</span>
                {selected ? <Check className="h-3.5 w-3.5" /> : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export function ProductPreviewTheater() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [selectedId, setSelectedId] = useState(sampleProjects[0].id);
  const [openFilter, setOpenFilter] = useState<FilterGroupId | null>(null);
  const [selectedFilters, setSelectedFilters] =
    useState<Record<FilterGroupId, string>>(defaultFilterState);

  const activeFilterValues = useMemo(
    () => Object.values(selectedFilters).filter(Boolean),
    [selectedFilters],
  );

  const visibleProjects = useMemo(() => {
    if (activeFilterValues.length === 0) {
      return sampleProjects;
    }

    return sampleProjects.filter((project) =>
      activeFilterValues.every((filter) => project.filters.includes(filter)),
    );
  }, [activeFilterValues]);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setRevealed(true);
        observer.disconnect();
      },
      { threshold: 0.06 },
    );

    observer.observe(root);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visibleProjects.some((project) => project.id === selectedId)) {
      setSelectedId(visibleProjects[0]?.id ?? sampleProjects[0].id);
    }
  }, [selectedId, visibleProjects]);

  useEffect(() => {
    if (!openFilter) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenFilter(null);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [openFilter]);

  const selectedProject = useMemo(
    () =>
      sampleProjects.find((project) => project.id === selectedId) ??
      sampleProjects[0],
    [selectedId],
  );

  const selectFilter = (filterId: FilterGroupId, value: string) => {
    setSelectedFilters((current) => ({ ...current, [filterId]: value }));
    setOpenFilter(null);
  };

  return (
    <div
      ref={rootRef}
      data-product-revealed={revealed ? "true" : "false"}
      className="product-demo-root relative mt-4 overflow-hidden rounded-[1.6rem] border border-[#ded0bd]/80 bg-[#fbf6ed]/92 p-3 shadow-[0_8px_24px_rgba(42,36,29,0.04)] md:p-4"
      role="region"
      aria-label="پیش‌نمایش نقشه و فیلتر پروژه‌های پرشین‌سازه"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_8%,rgba(201,121,43,0.13),transparent_28%),radial-gradient(circle_at_88%_52%,rgba(93,105,83,0.10),transparent_34%)]" />

      <div className="relative grid min-w-0 gap-4 xl:grid-cols-[minmax(0,1fr)_380px] xl:[direction:ltr]">
        <aside className="contents min-w-0 content-start gap-4 overflow-hidden xl:col-start-2 xl:row-start-1 xl:grid xl:[direction:rtl]">
          <article className="product-demo-filter order-1 min-w-0 overflow-hidden rounded-[1.35rem] border border-[#e4d8c8] bg-[#fffaf1]/88 p-3 shadow-sm shadow-[#2a241d]/[0.03] md:p-4 xl:order-none">
            <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap text-[11px] font-bold text-[#6f6254] [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden">
              {["مرحله ساخت", "منطقه", "نوع اشتراک"].map((label) => (
                <span
                  key={label}
                  className="shrink-0 rounded-full border border-[#eadfce] bg-[#fbf6ed]/84 px-3 py-1.5"
                >
                  {label}
                </span>
              ))}
            </div>

            <div className="hidden items-start justify-between gap-3 md:flex">
              <div className="min-w-0">
                <h3 className="text-base font-bold text-[#2a241d]">
                  فیلتر پروژه ها
                </h3>
                <p className="mt-1 text-xs leading-6 text-[#6f6254]">
                  فیلترهای نمونه برای محدود کردن پروژه‌های قابل بررسی
                </p>
              </div>
              <Filter className="h-5 w-5 text-[#8a6a41]" />
            </div>

            <div className="mt-5 hidden gap-3 md:grid" aria-label="فیلترهای نمونه">
              {filterGroups.map((group) => (
                <FilterDropdown
                  key={group.id}
                  group={group}
                  value={selectedFilters[group.id]}
                  open={openFilter === group.id}
                  onToggle={() =>
                    setOpenFilter((current) =>
                      current === group.id ? null : group.id,
                    )
                  }
                  onSelect={(value) => selectFilter(group.id, value)}
                />
              ))}
            </div>

            <div className="mt-3 hidden min-w-0 flex-wrap gap-2 text-[11px] font-semibold text-[#6f6254] md:flex">
              {activeFilterValues.length > 0 ? (
                activeFilterValues.map((filter) => (
                  <span
                    key={filter}
                    className="max-w-full truncate rounded-full border border-[#eadfce] bg-[#fffaf1]/84 px-2.5 py-1"
                  >
                    {filter}
                  </span>
                ))
              ) : (
                <span className="max-w-full truncate rounded-full border border-[#eadfce] bg-[#fbf6ed]/72 px-2.5 py-1">
                  همه پروژه‌های نمونه
                </span>
              )}
            </div>
          </article>

          <article className="product-demo-list order-3 min-w-0 overflow-hidden rounded-[1.35rem] border border-[#e4d8c8] bg-[#fffaf1]/90 p-4 shadow-sm shadow-[#2a241d]/[0.03] xl:order-none">
            <div className="flex items-center justify-between gap-3">
              <h3 className="min-w-0 text-base font-bold text-[#2a241d]">
                پروژه‌های منطبق
              </h3>
              <span className="shrink-0 text-xs font-medium text-[#7a6a59]">
                {visibleProjects.length.toLocaleString("fa-IR")} مورد نمونه
              </span>
            </div>
            <div className="mt-3 max-h-none space-y-2.5 overflow-visible pr-0 md:max-h-[260px] md:overflow-y-auto md:pr-1">
              {visibleProjects.length > 0 ? (
                visibleProjects.map((project, index) => {
                  const selected = project.id === selectedProject.id;

                  return (
                    <button
                      key={project.id}
                      type="button"
                      aria-label={`انتخاب ردیف ${project.title}`}
                      aria-pressed={selected}
                      onClick={() => setSelectedId(project.id)}
                      style={
                        { "--product-row-delay": `${1500 + index * 60}ms` } as CSSProperties
                      }
                      className={cn(
                        "product-demo-list-row flex w-full min-w-0 items-center gap-3 overflow-hidden rounded-[1.15rem] border p-3 text-right transition duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9792b]/30 active:translate-y-px",
                        index >= 3 && "hidden md:flex",
                        selected
                          ? "border-[#d99a35] bg-[#f6d6a8]/58 shadow-sm shadow-[#8a4f1b]/[0.08]"
                          : "border-[#eadfce] bg-[#fbf6ed]/88 opacity-75 hover:opacity-100",
                      )}
                    >
                      <span
                        className={cn(
                          "h-2.5 w-2.5 shrink-0 rounded-full",
                          pinToneClasses[project.pinTone],
                          selected ? "" : "opacity-65",
                        )}
                      />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-bold text-[#2a241d]">
                          {project.title}
                        </span>
                        <span className="hidden truncate text-xs leading-5 text-[#7a6a59] md:block">
                          {project.line}
                        </span>
                      </span>
                      <span
                        className={cn(
                          "max-w-[104px] shrink-0 truncate whitespace-nowrap rounded-full border px-2.5 py-1 text-[11px] font-semibold",
                          selected
                            ? "border-[#d99a35]/55 bg-[#fffaf1] text-[#5a3515]"
                            : "border-[#e4d8c8] bg-[#fffaf1] text-[#6f6254]",
                        )}
                      >
                        {project.stage}
                      </span>
                    </button>
                  );
                })
              ) : (
                <div className="rounded-[1.15rem] border border-dashed border-[#e4d8c8] bg-[#fbf6ed]/78 p-4 text-sm leading-7 text-[#7a6a59]">
                  برای این ترکیب فیلتر، پروژه نمونه‌ای نمایش داده نشده است.
                </div>
              )}
              {visibleProjects.length > 3 ? (
                <div className="rounded-full border border-[#eadfce] bg-[#fbf6ed]/72 px-3 py-2 text-center text-xs font-semibold text-[#7a6a59] md:hidden">
                  +{(visibleProjects.length - 3).toLocaleString("fa-IR")} مورد دیگر
                </div>
              ) : null}
            </div>
          </article>
        </aside>

        <section className="product-demo-map-shell order-2 flex min-w-0 flex-col overflow-hidden rounded-[1.45rem] border border-[#e4d8c8] bg-[#fffaf1]/92 shadow-sm shadow-[#2a241d]/[0.03] xl:col-start-1 xl:row-start-1 xl:order-none xl:[direction:rtl]">
          <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#eadfce] px-4 py-4">
            <div>
              <h3 className="text-base font-bold text-[#2a241d] md:text-lg">
                نقشه پروژه‌ها و فرصت‌های فعال
              </h3>
              <p className="mt-1 text-xs leading-5 text-[#6f6254] md:text-sm">
                پروژه‌های ساختمانی در حال ساخت روی نقشه
              </p>
            </div>
          </div>

          <div className="product-demo-map-bg relative min-h-[190px] flex-1 overflow-hidden bg-[#ece3d5] md:min-h-[420px] xl:min-h-[500px]">
            <div className="absolute inset-0 map-parcel-pattern opacity-90" />
            <div className="absolute right-[5%] top-[10%] h-20 w-32 rotate-[-4deg] rounded-[1.1rem] bg-[#dfe7d8]/68 ring-1 ring-[#c8d5bd]" />
            <div className="absolute right-[30%] top-[12%] h-24 w-36 rotate-[3deg] rounded-[1.1rem] bg-[#dfe7d8]/62 ring-1 ring-[#c8d5bd]" />
            <div className="absolute right-[58%] top-[15%] h-20 w-32 rotate-[-3deg] rounded-[1.1rem] bg-[#dfe7d8]/62 ring-1 ring-[#c8d5bd]" />
            <div className="absolute right-[8%] top-[68%] h-20 w-36 rotate-[3deg] rounded-[1.1rem] bg-[#dfe7d8]/68 ring-1 ring-[#c8d5bd]" />
            <div className="absolute right-[42%] top-[70%] h-16 w-28 rotate-[-2deg] rounded-[1.1rem] bg-[#dfe7d8]/62 ring-1 ring-[#c8d5bd]" />
            <div className="absolute right-[70%] top-[61%] h-20 w-32 rotate-[-4deg] rounded-[1.1rem] bg-[#dfe7d8]/68 ring-1 ring-[#c8d5bd]" />

            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 760 460"
              aria-hidden="true"
            >
              <g fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M-34 126 C168 92 320 116 492 92 S650 72 812 102" stroke="#d6a04a" strokeWidth="18" />
                <path d="M-28 330 C180 302 330 332 504 302 S648 272 810 290" stroke="#d6a04a" strokeWidth="18" />
                <path d="M-20 218 C152 240 282 228 408 196 S610 150 806 174" stroke="#d5c8b8" strokeWidth="24" />
                <path d="M-20 218 C152 240 282 228 408 196 S610 150 806 174" stroke="#fbf6ed" strokeWidth="16" />
                <path d="M116 482 C152 330 188 202 262 -28" stroke="#d5c8b8" strokeWidth="20" />
                <path d="M116 482 C152 330 188 202 262 -28" stroke="#fbf6ed" strokeWidth="13" />
                <path d="M626 482 C596 324 630 164 720 -34" stroke="#d5c8b8" strokeWidth="20" />
                <path d="M626 482 C596 324 630 164 720 -34" stroke="#fbf6ed" strokeWidth="13" />
              </g>
              <path
                d={selectedProject.connectorPath}
                fill="none"
                stroke="#c9792b"
                strokeDasharray="6 10"
                strokeWidth="2.5"
                className="product-route-path"
              />
            </svg>

            {inactivePins.map((position, index) => (
              <span
                key={position}
                style={
                  { "--product-pin-delay": `${560 + index * 80}ms` } as CSSProperties
                }
                className={cn(
                  "product-demo-pin absolute z-10 flex -translate-x-1/2 -translate-y-full items-center justify-center opacity-45",
                  position,
                )}
                aria-hidden="true"
              >
                <span className="relative grid h-7 w-7 place-items-center rounded-full bg-[#7d756a] text-[#fffaf1] shadow-sm shadow-[#2a241d]/20 md:h-8 md:w-8">
                  <Building2 className="h-3.5 w-3.5" />
                  <span className="absolute -bottom-1.5 h-3 w-3 rotate-45 rounded-[0.18rem] bg-inherit" />
                </span>
              </span>
            ))}

            {visibleProjects.map((project, index) => {
              const selected = project.id === selectedProject.id;

              return (
                <button
                  key={project.id}
                  type="button"
                  aria-label={`انتخاب ${project.title}`}
                  aria-pressed={selected}
                  onClick={() => setSelectedId(project.id)}
                  style={
                    {
                      "--product-pin-delay": `${
                        560 + (index + inactivePins.length) * 80
                      }ms`,
                    } as CSSProperties
                  }
                  className={cn(
                    "product-demo-pin absolute z-20 flex -translate-x-1/2 -translate-y-full items-center justify-center transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9792b]/40",
                    project.pinPosition,
                    selected ? "scale-[1.15]" : "opacity-55 hover:opacity-90",
                  )}
                >
                  <span
                    className={cn(
                      "relative grid h-8 w-8 place-items-center rounded-full shadow-md shadow-[#2a241d]/20",
                      selected
                        ? "product-demo-selected-pin h-9 w-9 bg-[#c9792b] text-[#fffaf1] ring-4 ring-[#c9792b]/35"
                        : "bg-[#7d756a] text-[#fffaf1] ring-2 ring-[#fffaf1]/65",
                    )}
                  >
                    {selected ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Building2 className="h-3.5 w-3.5" />
                    )}
                    <span className="absolute -bottom-1.5 h-3 w-3 rotate-45 rounded-[0.18rem] bg-inherit" />
                  </span>
                </button>
              );
            })}

            <div className="absolute left-4 top-4 hidden items-center gap-2 rounded-2xl border border-[#e4d8c8] bg-[#fffaf1]/92 px-3 py-2 text-xs font-bold text-[#5f5348] shadow-sm backdrop-blur md:flex">
              <Radar className="h-3.5 w-3.5 text-[#8a6a41]" />
              {selectedFilters.region || "همه مناطق"} ·{" "}
              {selectedFilters.stage || "همه مراحل"}
            </div>

            <div className="product-demo-breadcrumb absolute bottom-4 right-4 hidden max-w-[72%] items-center gap-2 overflow-x-auto rounded-2xl border border-[#e4d8c8] bg-[#fffaf1]/94 px-3 py-2 text-xs font-bold leading-5 text-[#5f5348] shadow-sm [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:flex xl:hidden">
              <Route className="h-3.5 w-3.5 shrink-0 text-[#7a6a59]" />
              <div className="flex min-w-max items-center gap-1.5">
                {productPathSteps.map((step, index) => (
                  <div
                    key={step}
                    className="flex shrink-0 items-center gap-1.5"
                    style={
                      { "--product-step-delay": `${1780 + index * 100}ms` } as CSSProperties
                    }
                  >
                    <span
                      className={cn(
                        "product-demo-breadcrumb-step rounded-full border border-[#eadfce] bg-[#fbf6ed]/78 px-2 py-1",
                        index === 4
                          ? "border-[#c9792b]/35 bg-[#f6d6a8]/62 text-[#5a3515]"
                          : "text-[#6f6254]",
                      )}
                    >
                      {step}
                    </span>
                    {index < productPathSteps.length - 1 ? (
                      <span className="text-[#b7a48f]" aria-hidden="true">
                        ←
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <ProjectDetailCard
              project={selectedProject}
              className="absolute bottom-4 left-4 hidden max-w-[340px] xl:block"
            />
          </div>

          <div className="product-demo-breadcrumb mx-3 mt-3 hidden items-center gap-2 overflow-x-auto rounded-2xl border border-[#e4d8c8] bg-[#fffaf1]/94 px-3 py-2 text-xs font-bold leading-5 text-[#5f5348] shadow-sm [scrollbar-width:none] [&::-webkit-scrollbar]:hidden xl:flex">
            <Route className="h-3.5 w-3.5 shrink-0 text-[#7a6a59]" />
            <div className="flex min-w-max items-center gap-1.5">
              {productPathSteps.map((step, index) => (
                <div
                  key={step}
                  className="flex shrink-0 items-center gap-1.5"
                  style={
                    { "--product-step-delay": `${1780 + index * 100}ms` } as CSSProperties
                  }
                >
                  <span
                    className={cn(
                      "product-demo-breadcrumb-step rounded-full border border-[#eadfce] bg-[#fbf6ed]/78 px-2 py-1",
                      index === 4
                        ? "border-[#c9792b]/35 bg-[#f6d6a8]/62 text-[#5a3515]"
                        : "text-[#6f6254]",
                    )}
                  >
                    {step}
                  </span>
                  {index < productPathSteps.length - 1 ? (
                    <span className="text-[#b7a48f]" aria-hidden="true">
                      ←
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          <ProjectDetailCard project={selectedProject} className="m-3 xl:hidden" />
          <div className="hidden">
            <Route className="h-3.5 w-3.5 shrink-0 text-[#7a6a59]" />
            <div className="flex min-w-max items-center gap-1.5">
              {productPathSteps.map((step, index) => (
                <div
                  key={step}
                  className="flex shrink-0 items-center gap-1.5"
                  style={
                    { "--product-step-delay": `${1780 + index * 100}ms` } as CSSProperties
                  }
                >
                  <span
                    className={cn(
                      "product-demo-breadcrumb-step rounded-full border border-[#eadfce] bg-[#fbf6ed]/78 px-2 py-1",
                      index === 4
                        ? "border-[#c9792b]/35 bg-[#f6d6a8]/62 text-[#5a3515]"
                        : "text-[#6f6254]",
                    )}
                  >
                    {step}
                  </span>
                  {index < productPathSteps.length - 1 ? (
                    <span className="text-[#b7a48f]" aria-hidden="true">
                      ←
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden border-t border-[#eadfce] p-3 md:block">
            <ActionCards project={selectedProject} />
          </div>
        </section>

        <div className="product-demo-breadcrumb order-4 flex items-center gap-2 overflow-x-auto rounded-2xl border border-[#e4d8c8] bg-[#fffaf1]/94 px-3 py-2 text-xs font-bold leading-5 text-[#5f5348] shadow-sm [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:hidden">
          <Route className="h-3.5 w-3.5 shrink-0 text-[#7a6a59]" />
          <div className="flex min-w-max items-center gap-1.5">
            {productPathSteps.map((step, index) => (
              <div
                key={step}
                className="flex shrink-0 items-center gap-1.5"
                style={
                  { "--product-step-delay": `${1780 + index * 100}ms` } as CSSProperties
                }
              >
                <span
                  className={cn(
                    "product-demo-breadcrumb-step rounded-full border border-[#eadfce] bg-[#fbf6ed]/78 px-2 py-1",
                    index === 4
                      ? "border-[#c9792b]/35 bg-[#f6d6a8]/62 text-[#5a3515]"
                      : "text-[#6f6254]",
                  )}
                >
                  {step}
                </span>
                {index < productPathSteps.length - 1 ? (
                  <span className="text-[#b7a48f]" aria-hidden="true">
                    ←
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="order-5 md:hidden">
          <ActionCards project={selectedProject} />
        </div>
      </div>

    </div>
  );
}
