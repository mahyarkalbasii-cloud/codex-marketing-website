"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import {
  Building2,
  Check,
  ChevronDown,
  Filter,
  Radar,
} from "lucide-react";

import { cn } from "@/lib/utils";

type FilterGroupId = "stage" | "region" | "land";

type SampleProject = {
  id: string;
  title: string;
  stage: string;
  subline: string;
  neighborhood: string;
  city: string;
  landArea: string;
  floors: string;
  usage: string;
  updatedAt: string;
  pinPosition: string;
  showLabel?: boolean;
  filters: string[];
};

const constructionStageOptions = [
  "گودبرداری",
  "اسکلت",
  "گچ و خاک",
  "نازک‌کاری",
  "پایان کار",
];

const regionOptions = [
  "ولنجک",
  "زعفرانیه",
  "اقدسیه",
  "سعادت‌آباد",
  "فرمانیه",
  "پاسداران",
  "نیاوران",
  "شهرک غرب",
  "کرج",
  "لواسان",
];

const landAreaOptions = [
  "تا ۴۰۰ متر",
  "۴۰۰ تا ۶۰۰ متر",
  "۶۰۰ متر به بالا",
];

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
    id: "land",
    label: "متراژ زمین",
    allLabel: "همه متراژها",
    options: landAreaOptions,
  },
];

const defaultFilterState: Record<FilterGroupId, string> = {
  stage: "",
  region: "",
  land: "",
};

const sampleProjects: SampleProject[] = [
  {
    id: "velenjak-finishing",
    title: "پروژه‌ی نازک‌کاری · ولنجک",
    stage: "نازک‌کاری",
    subline: "۴۲۰ متر زمین · ۷ طبقه",
    neighborhood: "ولنجک",
    city: "تهران",
    landArea: "۴۲۰ متر",
    floors: "۷ طبقه",
    usage: "مسکونی",
    updatedAt: "۲ روز پیش",
    pinPosition: "right-[36%] top-[34%]",
    showLabel: true,
    filters: ["نازک‌کاری", "ولنجک", "۴۰۰ تا ۶۰۰ متر"],
  },
  {
    id: "zaferanieh-structure",
    title: "پروژه‌ی اسکلت · زعفرانیه",
    stage: "اسکلت",
    subline: "۶۸۰ متر زمین · ۹ طبقه",
    neighborhood: "زعفرانیه",
    city: "تهران",
    landArea: "۶۸۰ متر",
    floors: "۹ طبقه",
    usage: "مسکونی",
    updatedAt: "۴ روز پیش",
    pinPosition: "right-[23%] top-[24%]",
    filters: ["اسکلت", "زعفرانیه", "۶۰۰ متر به بالا"],
  },
  {
    id: "aghdasieh-excavation",
    title: "پروژه‌ی گودبرداری · اقدسیه",
    stage: "گودبرداری",
    subline: "۳۲۰ متر زمین · ۵ طبقه",
    neighborhood: "اقدسیه",
    city: "تهران",
    landArea: "۳۲۰ متر",
    floors: "۵ طبقه",
    usage: "مسکونی",
    updatedAt: "امروز",
    pinPosition: "right-[68%] top-[28%]",
    filters: ["گودبرداری", "اقدسیه", "تا ۴۰۰ متر"],
  },
  {
    id: "saadatabad-finishing",
    title: "پروژه‌ی نازک‌کاری · سعادت‌آباد",
    stage: "نازک‌کاری",
    subline: "۴۸۰ متر زمین · ۸ طبقه",
    neighborhood: "سعادت‌آباد",
    city: "تهران",
    landArea: "۴۸۰ متر",
    floors: "۸ طبقه",
    usage: "مسکونی",
    updatedAt: "۳ روز پیش",
    pinPosition: "right-[48%] top-[58%]",
    showLabel: true,
    filters: ["نازک‌کاری", "سعادت‌آباد", "۴۰۰ تا ۶۰۰ متر"],
  },
  {
    id: "farmanieh-structure",
    title: "پروژه‌ی اسکلت · فرمانیه",
    stage: "اسکلت",
    subline: "۷۵۰ متر زمین · ۱۰ طبقه",
    neighborhood: "فرمانیه",
    city: "تهران",
    landArea: "۷۵۰ متر",
    floors: "۱۰ طبقه",
    usage: "مسکونی",
    updatedAt: "۵ روز پیش",
    pinPosition: "right-[78%] top-[18%]",
    filters: ["اسکلت", "فرمانیه", "۶۰۰ متر به بالا"],
  },
  {
    id: "pasdaran-plaster",
    title: "پروژه‌ی گچ و خاک · پاسداران",
    stage: "گچ و خاک",
    subline: "۳۸۰ متر زمین · ۶ طبقه",
    neighborhood: "پاسداران",
    city: "تهران",
    landArea: "۳۸۰ متر",
    floors: "۶ طبقه",
    usage: "مسکونی",
    updatedAt: "۶ روز پیش",
    pinPosition: "right-[12%] top-[46%]",
    filters: ["گچ و خاک", "پاسداران", "تا ۴۰۰ متر"],
  },
  {
    id: "niavaran-finishing",
    title: "پروژه‌ی نازک‌کاری · نیاوران",
    stage: "نازک‌کاری",
    subline: "۵۲۰ متر زمین · ۸ طبقه",
    neighborhood: "نیاوران",
    city: "تهران",
    landArea: "۵۲۰ متر",
    floors: "۸ طبقه",
    usage: "مسکونی",
    updatedAt: "۲ روز پیش",
    pinPosition: "right-[64%] top-[70%]",
    showLabel: true,
    filters: ["نازک‌کاری", "نیاوران", "۴۰۰ تا ۶۰۰ متر"],
  },
  {
    id: "shahrakgharb-handover",
    title: "پروژه‌ی پایان کار · شهرک غرب",
    stage: "پایان کار",
    subline: "۴۴۰ متر زمین · ۷ طبقه",
    neighborhood: "شهرک غرب",
    city: "تهران",
    landArea: "۴۴۰ متر",
    floors: "۷ طبقه",
    usage: "مسکونی",
    updatedAt: "۱ روز پیش",
    pinPosition: "right-[30%] top-[76%]",
    filters: ["پایان کار", "شهرک غرب", "۴۰۰ تا ۶۰۰ متر"],
  },
];

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

  return (
    <div className="min-w-0 overflow-hidden rounded-2xl border border-[#E4D8C8] bg-[#FBF9F3]/88 p-2">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`product-filter-${group.id}`}
        onClick={onToggle}
        className="flex w-full min-w-0 items-center justify-between gap-3 rounded-xl px-2 py-1.5 text-right transition hover:bg-[#EDE6D7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CC785C]/30 active:translate-y-px"
      >
        <span className="min-w-0 flex-1">
          <span className="block text-[11px] font-medium text-[#7A6A59]">
            {group.label}
          </span>
          <span className="mt-0.5 block truncate text-sm font-bold text-[#2A241D]">
            {selectedLabel}
          </span>
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-[#7A6A59] transition duration-200",
            open ? "rotate-180" : "",
          )}
        />
      </button>

      {open ? (
        <div
          id={`product-filter-${group.id}`}
          className="mt-2 grid max-h-44 gap-1 overflow-y-auto rounded-xl border border-[#E4D8C8] bg-[#FFFAF1]/95 p-1.5"
        >
          {[group.allLabel, ...group.options].map((optionLabel, index) => {
            const optionValue = index === 0 ? "" : optionLabel;
            const selected = optionValue === value;

            return (
              <button
                key={optionLabel}
                type="button"
                aria-pressed={selected}
                onClick={() => onSelect(optionValue)}
                className={cn(
                  "flex min-w-0 items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-right text-xs font-semibold transition hover:bg-[#EDE6D7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CC785C]/30",
                  selected ? "bg-[#F6D6A8] text-[#5A3515]" : "text-[#6F6254]",
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

function ProjectDetailCard({
  project,
  className,
}: {
  project: SampleProject;
  className?: string;
}) {
  const metadata = [
    ["متراژ زمین", project.landArea],
    ["تعداد طبقه", project.floors],
    ["نوع کاربری", project.usage],
    ["آخرین به‌روزرسانی", project.updatedAt],
  ] as const;

  return (
    <article
      className={cn(
        "product-demo-card rounded-2xl border border-[#E4D8C8] bg-[#FFFAF1] px-5 py-[18px] shadow-sm shadow-[#2A241D]/[0.055]",
        className,
      )}
      aria-label={`کارت اطلاعات نمونه ${project.title}`}
    >
      <div className="text-xs font-semibold leading-5 text-[#6F6254]">
        نمونه · {project.neighborhood}، {project.city}
      </div>
      <h3 className="mt-1 text-base font-bold leading-7 text-[#2A241D] md:text-xl">
        پروژه‌ی {project.stage}
      </h3>
      <span className="mt-2 inline-flex rounded-full border border-[#C9792B]/35 bg-[#F6D6A8] px-3 py-1 text-xs font-bold leading-5 text-[#5A3515]">
        مرحله: {project.stage}
      </span>

      <dl className="mt-4 grid grid-cols-2 gap-2">
        {metadata.map(([label, value]) => (
          <div
            key={label}
            className="rounded-2xl border border-[#E4D8C8] bg-[#FBF9F3] p-3"
          >
            <dt className="text-[10.5px] font-medium leading-5 text-[#7A6A59]">
              {label}
            </dt>
            <dd className="mt-1 flex items-center gap-1.5 text-xs font-bold leading-6 text-[#2A241D]">
              {label === "آخرین به‌روزرسانی" ? (
                <span
                  className="product-timestamp-dot h-2 w-2 shrink-0 rounded-full bg-[#C9792B]"
                  aria-hidden="true"
                />
              ) : null}
              {value}
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-3 text-xs leading-6 text-[#6F6254]">
        اطلاعات تماس فقط در نسخه‌ی واقعی نمایش داده می‌شود
      </p>
    </article>
  );
}

export function ProductPreviewTheater() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [selectedId, setSelectedId] = useState(sampleProjects[0].id);
  const [openFilter, setOpenFilter] = useState<FilterGroupId | null>(null);
  const [selectedFilters, setSelectedFilters] =
    useState<Record<FilterGroupId, string>>(defaultFilterState);

  const selectedProject = useMemo(
    () =>
      sampleProjects.find((project) => project.id === selectedId) ??
      sampleProjects[0],
    [selectedId],
  );

  const activeFilterValues = useMemo(
    () => Object.values(selectedFilters).filter(Boolean),
    [selectedFilters],
  );

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

  const selectFilter = (filterId: FilterGroupId, value: string) => {
    setSelectedFilters((current) => ({ ...current, [filterId]: value }));
    setOpenFilter(null);
  };

  const resetFilters = () => {
    setSelectedFilters(defaultFilterState);
    setOpenFilter(null);
  };

  return (
    <div
      ref={rootRef}
      data-product-revealed={revealed ? "true" : "false"}
      className="product-demo-root relative mt-4 overflow-hidden rounded-[1.6rem] border border-[#D8C9B6]/80 bg-[#FBF9F3]/92 p-3 shadow-[0_8px_24px_rgba(42,36,29,0.04)] md:p-4"
      role="region"
      aria-label="پیش‌نمایش نقشه و فیلتر پروژه‌های پرشین‌سازه"
    >
      <div className="relative grid min-w-0 gap-4 xl:grid-cols-[minmax(0,1fr)_380px] xl:[direction:ltr]">
        <aside className="contents min-w-0 content-start gap-4 overflow-hidden xl:col-start-2 xl:row-start-1 xl:grid xl:[direction:rtl]">
          <article className="product-demo-filter order-1 min-w-0 overflow-hidden rounded-[1.35rem] border border-[#E4D8C8] bg-[#FFFAF1]/88 p-3 shadow-sm shadow-[#2A241D]/[0.03] md:p-4 xl:order-none">
            <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap text-[11px] font-bold text-[#6F6254] [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden">
              {filterGroups.map((group) => (
                <span
                  key={group.id}
                  className="shrink-0 rounded-full border border-[#E4D8C8] bg-[#FBF9F3]/84 px-3 py-1.5"
                >
                  {group.label}
                </span>
              ))}
            </div>

            <div className="hidden items-start justify-between gap-3 md:flex">
              <div className="min-w-0">
                <h3 className="text-base font-bold text-[#2A241D]">
                  فیلتر پروژه‌ها
                </h3>
                <p className="mt-1 text-xs leading-6 text-[#6F6254]">
                  مرحله ساخت، منطقه و متراژ زمین را برای محدود کردن پروژه‌های نمونه بررسی کنید.
                </p>
              </div>
              <Filter className="h-5 w-5 text-[#7A6A59]" />
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

            <div className="mt-3 hidden min-w-0 flex-wrap gap-2 text-[11px] font-semibold text-[#6F6254] md:flex">
              {activeFilterValues.length > 0 ? (
                activeFilterValues.map((filter) => (
                  <span
                    key={filter}
                    className="max-w-full truncate rounded-full border border-[#E4D8C8] bg-[#FFFAF1]/84 px-2.5 py-1"
                  >
                    {filter}
                  </span>
                ))
              ) : (
                <span className="max-w-full truncate rounded-full border border-[#E4D8C8] bg-[#FBF9F3]/72 px-2.5 py-1">
                  همه پروژه‌های نمونه
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={resetFilters}
              className="mt-4 hidden h-10 w-full items-center justify-center rounded-2xl border border-[#E4D8C8] bg-[#FFFAF1] px-3 text-xs font-bold text-[#2A241D] transition hover:bg-[#EDE6D7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CC785C]/30 md:flex"
            >
              همه پروژه‌های نمونه
            </button>
          </article>

          <article className="product-demo-list order-3 min-w-0 overflow-hidden rounded-[1.35rem] border border-[#E4D8C8] bg-[#FFFAF1]/90 p-4 shadow-sm shadow-[#2A241D]/[0.03] xl:order-none">
            <div className="flex items-center justify-between gap-3">
              <h3 className="min-w-0 text-base font-bold text-[#2A241D]">
                پروژه‌های منطبق
              </h3>
              <span className="shrink-0 text-xs font-medium text-[#7A6A59]">
                {sampleProjects.length.toLocaleString("fa-IR")} مورد نمونه
              </span>
            </div>
            <ul className="mt-3 max-h-none space-y-2.5 overflow-visible pr-0 md:max-h-[330px] md:overflow-y-auto md:pr-1">
              {sampleProjects.map((project, index) => {
                const selected = project.id === selectedProject.id;

                return (
                  <li key={project.id}>
                    <button
                      type="button"
                      data-product-row={project.id}
                      aria-label={`انتخاب ${project.title}`}
                      aria-pressed={selected}
                      onClick={() => setSelectedId(project.id)}
                      style={
                        { "--product-row-delay": `${1500 + index * 60}ms` } as CSSProperties
                      }
                      className={cn(
                        "product-demo-list-row flex w-full min-w-0 items-center gap-3 overflow-hidden rounded-[1.15rem] border p-3 text-right transition duration-200 hover:bg-[#FBF9F3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CC785C]/30 active:translate-y-px",
                        selected
                          ? "border-[#CC785C]/65 bg-[#F6D6A8]/58 shadow-sm shadow-[#2A241D]/[0.06]"
                          : "border-[#E4D8C8] bg-[#FBF9F3]/88",
                      )}
                    >
                      <span
                        className={cn(
                          "h-2.5 w-2.5 shrink-0 rounded-full",
                          selected ? "bg-[#CC785C]" : "bg-[#D8C9B6]",
                        )}
                      />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-bold text-[#2A241D]">
                          {project.title}
                        </span>
                        <span className="block truncate text-xs leading-5 text-[#7A6A59]">
                          {project.subline}
                        </span>
                      </span>
                      <span
                        className={cn(
                          "max-w-[104px] shrink-0 truncate whitespace-nowrap rounded-full border px-2.5 py-1 text-[11px] font-semibold",
                          selected
                            ? "border-[#C9792B]/35 bg-[#FFFAF1] text-[#5A3515]"
                            : "border-[#E4D8C8] bg-[#FFFAF1] text-[#6F6254]",
                        )}
                      >
                        {project.stage}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </article>
        </aside>

        <section className="product-demo-map-shell order-2 flex min-w-0 flex-col overflow-hidden rounded-[1.45rem] border border-[#E4D8C8] bg-[#FFFAF1]/92 shadow-sm shadow-[#2A241D]/[0.03] xl:col-start-1 xl:row-start-1 xl:order-none xl:[direction:rtl]">
          <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#E4D8C8] px-4 py-4">
            <div>
              <h3 className="text-base font-bold text-[#2A241D] md:text-lg">
                نقشه پروژه‌های ساختمانی تهران
              </h3>
              <p className="mt-1 text-xs leading-5 text-[#6F6254] md:text-sm">
                پروژه‌های نمونه بر اساس محله، مرحله ساخت و متراژ زمین
              </p>
            </div>
          </div>

          <div className="product-demo-map-bg relative min-h-[520px] flex-1 overflow-hidden bg-[#EDE6D7] md:min-h-[500px]">
            <div className="absolute inset-0 map-parcel-pattern opacity-90" />
            <div className="absolute right-[5%] top-[10%] h-20 w-32 rotate-[-4deg] rounded-[1.1rem] bg-[#D8C9B6]/42 ring-1 ring-[#E4D8C8]" />
            <div className="absolute right-[30%] top-[12%] h-24 w-36 rotate-[3deg] rounded-[1.1rem] bg-[#FBF9F3]/62 ring-1 ring-[#E4D8C8]" />
            <div className="absolute right-[58%] top-[15%] h-20 w-32 rotate-[-3deg] rounded-[1.1rem] bg-[#D8C9B6]/38 ring-1 ring-[#E4D8C8]" />
            <div className="absolute right-[8%] top-[68%] h-20 w-36 rotate-[3deg] rounded-[1.1rem] bg-[#FBF9F3]/64 ring-1 ring-[#E4D8C8]" />
            <div className="absolute right-[42%] top-[70%] h-16 w-28 rotate-[-2deg] rounded-[1.1rem] bg-[#D8C9B6]/36 ring-1 ring-[#E4D8C8]" />
            <div className="absolute right-[70%] top-[61%] h-20 w-32 rotate-[-4deg] rounded-[1.1rem] bg-[#FBF9F3]/64 ring-1 ring-[#E4D8C8]" />

            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 760 460"
              aria-hidden="true"
            >
              <g fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M-34 126 C168 92 320 116 492 92 S650 72 812 102" stroke="#D8C9B6" strokeWidth="18" />
                <path d="M-28 330 C180 302 330 332 504 302 S648 272 810 290" stroke="#D8C9B6" strokeWidth="18" />
                <path d="M-20 218 C152 240 282 228 408 196 S610 150 806 174" stroke="#D8C9B6" strokeWidth="24" />
                <path d="M-20 218 C152 240 282 228 408 196 S610 150 806 174" stroke="#FFFAF1" strokeWidth="16" />
                <path d="M116 482 C152 330 188 202 262 -28" stroke="#D8C9B6" strokeWidth="20" />
                <path d="M116 482 C152 330 188 202 262 -28" stroke="#FFFAF1" strokeWidth="13" />
                <path d="M626 482 C596 324 630 164 720 -34" stroke="#D8C9B6" strokeWidth="20" />
                <path d="M626 482 C596 324 630 164 720 -34" stroke="#FFFAF1" strokeWidth="13" />
              </g>
            </svg>

            {sampleProjects.map((project, index) => {
              const selected = project.id === selectedProject.id;

              return (
                <button
                  key={project.id}
                  type="button"
                  data-product-pin={project.id}
                  aria-label={`انتخاب ${project.title}`}
                  aria-pressed={selected}
                  onClick={() => setSelectedId(project.id)}
                  style={
                    {
                      "--product-pin-delay": `${560 + index * 80}ms`,
                    } as CSSProperties
                  }
                  className={cn(
                    "product-demo-pin absolute z-20 flex -translate-x-1/2 -translate-y-full items-center justify-center transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CC785C]/40",
                    project.pinPosition,
                    selected ? "scale-[1.12]" : "opacity-78 hover:opacity-100",
                  )}
                >
                  <span
                    className={cn(
                      "relative grid h-8 w-8 place-items-center rounded-full shadow-md shadow-[#2A241D]/20 transition",
                      selected
                        ? "product-demo-selected-pin h-9 w-9 bg-[#CC785C] text-[#FFFAF1] ring-4 ring-[#CC785C]/25"
                        : "bg-[#1B1916] text-[#7A6A59] ring-2 ring-[#FFFAF1]/65 hover:ring-[#CC785C]/30",
                    )}
                  >
                    {selected ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Building2 className="h-3.5 w-3.5" />
                    )}
                    <span className="absolute -bottom-1.5 h-3 w-3 rotate-45 rounded-[0.18rem] bg-inherit" />
                  </span>
                  {project.showLabel ? (
                    <span className="pointer-events-none absolute start-[calc(100%+6px)] top-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-semibold leading-none text-[#7A6A59]/70">
                      {project.neighborhood}
                    </span>
                  ) : null}
                </button>
              );
            })}

            <div className="absolute left-4 top-4 hidden items-center gap-2 rounded-2xl border border-[#E4D8C8] bg-[#FFFAF1]/92 px-3 py-2 text-xs font-bold text-[#6F6254] shadow-sm backdrop-blur md:flex">
              <Radar className="h-3.5 w-3.5 text-[#7A6A59]" />
              {selectedFilters.region || "همه مناطق"} ·{" "}
              {selectedFilters.stage || "همه مراحل"}
            </div>

            <ProjectDetailCard
              project={selectedProject}
              className="absolute right-4 top-4 z-30 w-[calc(100%-2rem)] max-w-none md:left-auto md:max-w-[320px]"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
