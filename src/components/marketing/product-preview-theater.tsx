"use client";

import { useMemo, useState, type CSSProperties } from "react";
import {
  ArrowLeft,
  Building2,
  Check,
  Clock3,
  ListFilter,
  MapPinned,
  MessageSquareText,
  PhoneCall,
  Search,
  SlidersHorizontal,
} from "lucide-react";

import { cn } from "@/lib/utils";

type ProductViewId = "map" | "filters" | "followup";

type SampleProject = {
  id: string;
  title: string;
  stage: string;
  neighborhood: string;
  city: string;
  district: string;
  landArea: string;
  floors: string;
  updatedAt: string;
  need: string;
  nextAction: string;
  fit: string;
  x: number;
  y: number;
  filters: string[];
};

const productViews: Array<{
  id: ProductViewId;
  label: string;
  description: string;
}> = [
  {
    id: "map",
    label: "نقشه",
    description: "دید مکانی پروژه‌ها",
  },
  {
    id: "filters",
    label: "فیلترها",
    description: "محدود کردن فرصت‌ها",
  },
  {
    id: "followup",
    label: "پیگیری",
    description: "اقدام فروش بعدی",
  },
];

const quickFilters = [
  "نازک‌کاری",
  "اسکلت",
  "ولنجک",
  "زعفرانیه",
  "۴۰۰ تا ۶۰۰ متر",
  "۶۰۰ متر به بالا",
];

const sampleProjects: SampleProject[] = [
  {
    id: "velenjak-finishing",
    title: "پروژه نازک‌کاری ولنجک",
    stage: "نازک‌کاری",
    neighborhood: "ولنجک",
    city: "تهران",
    district: "منطقه ۱",
    landArea: "۴۲۰ متر",
    floors: "۷ طبقه",
    updatedAt: "۲ روز پیش",
    need: "کاشی، شیرآلات، درب داخلی",
    nextAction: "تماس معرفی + ارسال کاتالوگ",
    fit: "آماده تماس",
    x: 32,
    y: 36,
    filters: ["نازک‌کاری", "ولنجک", "۴۰۰ تا ۶۰۰ متر"],
  },
  {
    id: "zaferanieh-structure",
    title: "پروژه اسکلت زعفرانیه",
    stage: "اسکلت",
    neighborhood: "زعفرانیه",
    city: "تهران",
    district: "منطقه ۱",
    landArea: "۶۸۰ متر",
    floors: "۹ طبقه",
    updatedAt: "۴ روز پیش",
    need: "آسانسور، سقف، اتصالات تخصصی",
    nextAction: "ثبت یادآوری مذاکره فنی",
    fit: "نیاز نزدیک",
    x: 62,
    y: 28,
    filters: ["اسکلت", "زعفرانیه", "۶۰۰ متر به بالا"],
  },
  {
    id: "niavaran-finishing",
    title: "پروژه نازک‌کاری نیاوران",
    stage: "نازک‌کاری",
    neighborhood: "نیاوران",
    city: "تهران",
    district: "منطقه ۱",
    landArea: "۵۲۰ متر",
    floors: "۸ طبقه",
    updatedAt: "امروز",
    need: "نما، پنجره، تجهیزات داخلی",
    nextAction: "ارسال پیام هدفمند",
    fit: "فرصت داغ",
    x: 76,
    y: 58,
    filters: ["نازک‌کاری", "۴۰۰ تا ۶۰۰ متر"],
  },
  {
    id: "pasdaran-plaster",
    title: "پروژه گچ و خاک پاسداران",
    stage: "گچ و خاک",
    neighborhood: "پاسداران",
    city: "تهران",
    district: "منطقه ۴",
    landArea: "۳۸۰ متر",
    floors: "۶ طبقه",
    updatedAt: "۶ روز پیش",
    need: "برق، مکانیک، سقف کاذب",
    nextAction: "بررسی نیاز قبل از نازک‌کاری",
    fit: "در حال شکل‌گیری",
    x: 44,
    y: 68,
    filters: ["۴۰۰ تا ۶۰۰ متر"],
  },
];

function projectMatches(project: SampleProject, query: string, filter: string | null) {
  const normalizedQuery = query.trim();
  const matchesFilter = !filter || project.filters.includes(filter) || project.stage === filter;

  if (!normalizedQuery) {
    return matchesFilter;
  }

  const searchable = [
    project.title,
    project.stage,
    project.neighborhood,
    project.city,
    project.need,
  ].join(" ");

  return matchesFilter && searchable.includes(normalizedQuery);
}

export function ProductPreviewTheater() {
  const [activeView, setActiveView] = useState<ProductViewId>("map");
  const [selectedId, setSelectedId] = useState(sampleProjects[0].id);
  const [activeFilter, setActiveFilter] = useState<string | null>("نازک‌کاری");
  const [query, setQuery] = useState("");

  const matchingProjects = useMemo(
    () =>
      sampleProjects.filter((project) =>
        projectMatches(project, query, activeFilter),
      ),
    [activeFilter, query],
  );

  const selectedProject = useMemo(
    () =>
      matchingProjects.find((project) => project.id === selectedId) ??
      matchingProjects[0] ??
      sampleProjects[0],
    [matchingProjects, selectedId],
  );

  const selectProject = (project: SampleProject) => {
    setSelectedId(project.id);
    setActiveView("followup");
  };

  const visibleProjects = matchingProjects.length > 0 ? matchingProjects : sampleProjects.slice(0, 2);

  return (
    <div
      className="relative mt-6 overflow-hidden rounded-[1.45rem] border border-[#d8c9b6] bg-[#fffaf1]/88 p-3 shadow-[0_18px_44px_rgba(42,36,29,0.07)] md:p-4"
      role="region"
      aria-label="نمای محصول پرشین‌سازه برای جست‌وجو، فیلتر و پیگیری پروژه‌ها"
    >
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <section className="min-w-0 overflow-hidden rounded-[1.25rem] border border-[#e4d8c8] bg-[#fbf6ed]">
          <div className="border-b border-[#e4d8c8] bg-[#fffaf1] p-3 md:p-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <label className="relative block min-w-0 flex-1">
                <span className="sr-only">جست‌وجوی پروژه</span>
                <Search className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8a7b6c]" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="جست‌وجوی پروژه، محله یا مرحله ساخت"
                  className="h-11 w-full rounded-2xl border border-[#e4d8c8] bg-[#fbf6ed] pr-10 pl-3 text-sm font-semibold text-[#2a241d] outline-none transition focus:border-[#c9792b] focus:ring-2 focus:ring-[#c9792b]/18"
                />
              </label>

              <div
                className="grid grid-cols-3 rounded-2xl border border-[#e4d8c8] bg-[#fbf6ed] p-1"
                role="tablist"
                aria-label="نمای محصول"
              >
                {productViews.map((view) => (
                  <button
                    key={view.id}
                    type="button"
                    role="tab"
                    aria-selected={activeView === view.id}
                    onClick={() => setActiveView(view.id)}
                    className={cn(
                      "min-h-10 rounded-xl px-3 text-xs font-bold leading-5 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9792b]/25 active:translate-y-px",
                      activeView === view.id
                        ? "bg-[#2a241d] text-[#fffaf1] shadow-sm shadow-[#2a241d]/10"
                        : "text-[#6f6254] hover:bg-[#fffaf1]",
                    )}
                  >
                    {view.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-3 p-3 md:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] md:p-4">
            <div className="order-2 grid gap-3 md:order-none">
              <div className="rounded-[1.15rem] border border-[#e4d8c8] bg-[#fffaf1]/86 p-3">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-sm font-black text-[#2a241d]">
                    <ListFilter className="h-4 w-4 text-[#c9792b]" />
                    فیلتر سریع
                  </div>
                  <span className="text-[11px] font-bold text-[#8a7b6c]">
                    {matchingProjects.length.toLocaleString("fa-IR")} پروژه منطبق
                  </span>
                </div>

                <div className="flex snap-x gap-2 overflow-x-auto pb-1 md:flex-wrap md:overflow-visible">
                  {quickFilters.map((filter) => {
                    const active = activeFilter === filter;

                    return (
                      <button
                        key={filter}
                        type="button"
                        onClick={() => {
                          setActiveFilter(active ? null : filter);
                          setActiveView("filters");
                        }}
                        className={cn(
                          "snap-start whitespace-nowrap rounded-full border px-3 py-2 text-[11px] font-bold leading-none transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9792b]/25 active:translate-y-px",
                          active
                            ? "border-[#2a241d] bg-[#2a241d] text-[#fffaf1]"
                            : "border-[#e4d8c8] bg-[#fbf6ed] text-[#6f6254] hover:bg-[#fffaf1]",
                        )}
                      >
                        {filter}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="overflow-hidden rounded-[1.15rem] border border-[#e4d8c8] bg-[#fffaf1]">
                <div className="flex items-center justify-between gap-3 border-b border-[#e4d8c8] px-3 py-3">
                  <div>
                    <h3 className="text-sm font-black text-[#2a241d]">
                      پروژه‌های پیشنهادی
                    </h3>
                    <p className="mt-1 text-[11px] font-semibold leading-5 text-[#7a6a59]">
                      پروژه‌هایی که با مرحله و محدوده انتخابی هم‌خوانی دارند.
                    </p>
                  </div>
                  <SlidersHorizontal className="h-4 w-4 text-[#8a7b6c]" />
                </div>

                {matchingProjects.length === 0 ? (
                  <div className="p-4 text-center">
                    <p className="text-sm font-bold text-[#2a241d]">
                      نتیجه‌ای برای این ترکیب پیدا نشد.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveFilter(null);
                        setQuery("");
                      }}
                      className="mt-3 rounded-xl border border-[#e4d8c8] px-3 py-2 text-xs font-bold text-[#6f6254] transition hover:bg-[#fbf6ed]"
                    >
                      پاک کردن فیلترها
                    </button>
                  </div>
                ) : (
                  <ul className="max-h-[11.75rem] divide-y divide-[#eadfce] overflow-y-auto md:max-h-[20rem]">
                    {visibleProjects.map((project) => {
                      const selected = project.id === selectedProject.id;

                      return (
                        <li key={project.id}>
                          <button
                            type="button"
                            data-product-row={project.id}
                            onClick={() => selectProject(project)}
                            className={cn(
                              "grid w-full gap-2 px-3 py-3 text-right transition hover:bg-[#fbf6ed] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#c9792b]/25 active:translate-y-px",
                              selected && "bg-[#f6d6a8]/34",
                            )}
                          >
                            <span className="flex items-start justify-between gap-3">
                              <span className="min-w-0">
                                <span className="block truncate text-sm font-black text-[#2a241d]">
                                  {project.title}
                                </span>
                                <span className="mt-1 block text-[11px] font-semibold leading-5 text-[#7a6a59]">
                                  {project.neighborhood}، {project.district} · {project.landArea}
                                </span>
                              </span>
                              <span
                                className={cn(
                                  "shrink-0 rounded-full border px-2.5 py-1 text-[10.5px] font-black",
                                  selected
                                    ? "border-[#c9792b]/35 bg-[#fffaf1] text-[#5a3515]"
                                    : "border-[#e4d8c8] bg-[#fbf6ed] text-[#6f6254]",
                                )}
                              >
                                {project.fit}
                              </span>
                            </span>
                            <span className="text-[11px] font-semibold leading-5 text-[#6f6254]">
                              نیاز محتمل: {project.need}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>

            <div className="relative order-1 min-h-[16rem] overflow-hidden rounded-[1.15rem] border border-[#e4d8c8] bg-[#e8dfd2] sm:min-h-[20rem] md:order-none md:min-h-[31rem]">
              <div className="absolute inset-0 map-parcel-pattern opacity-65" aria-hidden="true" />
              <div className="absolute inset-x-4 top-4 z-[1] flex items-center justify-between rounded-2xl border border-[#e4d8c8] bg-[#fffaf1]/92 px-3 py-2 shadow-sm backdrop-blur">
                <span className="inline-flex items-center gap-2 text-xs font-black text-[#2a241d]">
                  <MapPinned className="h-4 w-4 text-[#c9792b]" />
                  نمای پروژه‌ها
                </span>
                <span className="rounded-full bg-[#2a241d] px-2.5 py-1 text-[10.5px] font-black text-[#fffaf1]">
                  زنده
                </span>
              </div>

              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 640 520"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <g fill="none" strokeLinecap="round">
                  <path d="M-40 146 C132 108 264 138 398 112 S552 94 684 124" stroke="#d1bfaa" strokeWidth="22" />
                  <path d="M-46 304 C130 278 278 316 418 286 S548 246 690 264" stroke="#d1bfaa" strokeWidth="22" />
                  <path d="M80 560 C114 370 156 196 232 -42" stroke="#fffaf1" strokeWidth="13" />
                  <path d="M522 560 C500 374 526 174 608 -42" stroke="#fffaf1" strokeWidth="13" />
                  <path d="M-40 222 C132 244 270 230 402 194 S560 148 682 174" stroke="#fffaf1" strokeWidth="15" />
                </g>
              </svg>

              {sampleProjects.map((project, index) => {
                const selected = project.id === selectedProject.id;

                return (
                  <button
                    key={project.id}
                    type="button"
                    data-product-pin={project.id}
                    onClick={() => selectProject(project)}
                    style={
                      {
                        right: `${project.x}%`,
                        top: `${project.y}%`,
                        "--pin-delay": `${index * 80}ms`,
                      } as CSSProperties & Record<"--pin-delay", string>
                    }
                    aria-label={`انتخاب ${project.title}`}
                    aria-pressed={selected}
                    className={cn(
                      "absolute z-[2] grid h-9 w-9 -translate-y-1/2 translate-x-1/2 place-items-center rounded-full border-2 border-[#fffaf1] shadow-md shadow-[#2a241d]/18 transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9792b]/35",
                      selected
                        ? "scale-110 bg-[#c9792b] text-[#fffaf1]"
                        : "bg-[#24384a] text-[#fffaf1] hover:scale-105",
                    )}
                  >
                    {selected ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Building2 className="h-4 w-4" />
                    )}
                  </button>
                );
              })}

              <article className="absolute inset-x-3 bottom-3 z-[3] rounded-[1.05rem] border border-[#e4d8c8] bg-[#fffaf1]/95 p-3 text-right shadow-lg shadow-[#2a241d]/10 backdrop-blur">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-black text-[#2a241d]">
                      {selectedProject.title}
                    </p>
                    <p className="mt-1 text-[11px] font-semibold leading-5 text-[#7a6a59]">
                      {selectedProject.city}، {selectedProject.neighborhood} · {selectedProject.floors}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-[#c9792b]/30 bg-[#f6d6a8]/54 px-2.5 py-1 text-[10.5px] font-black text-[#5a3515]">
                    {selectedProject.stage}
                  </span>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                  {[
                    ["زمین", selectedProject.landArea],
                    ["به‌روزرسانی", selectedProject.updatedAt],
                    ["اقدام", selectedProject.fit],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-xl border border-[#eadfce] bg-[#fbf6ed] px-2 py-2">
                      <span className="block text-[10px] font-semibold text-[#8a7b6c]">
                        {label}
                      </span>
                      <span className="mt-1 block truncate text-[11px] font-black text-[#2a241d]">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <aside className="hidden min-w-0 rounded-[1.25rem] border border-[#e4d8c8] bg-[#fffaf1] p-4 lg:block">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold text-[#8a7b6c]">مسیر فروش</p>
              <h3 className="mt-1 text-xl font-black text-[#2a241d]">
                از انتخاب تا پیگیری
              </h3>
            </div>
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#2a241d] text-[#fffaf1]">
              <MessageSquareText className="h-5 w-5" />
            </span>
          </div>

          <div className="mt-5 rounded-[1.05rem] border border-[#e4d8c8] bg-[#fbf6ed] p-3">
            <p className="text-sm font-black leading-6 text-[#2a241d]">
              {selectedProject.nextAction}
            </p>
            <p className="mt-2 text-xs font-semibold leading-6 text-[#6f6254]">
              برای {selectedProject.need}، تماس باید با اشاره به مرحله ساخت و نیاز محتمل شروع شود.
            </p>
          </div>

          <div className="mt-5 grid gap-3">
            {[
              ["انتخاب پروژه", selectedProject.fit, Check],
              ["تماس هدفمند", selectedProject.stage, PhoneCall],
              ["یادآوری بعدی", "۴۸ ساعت آینده", Clock3],
            ].map(([title, value, Icon]) => (
              <div key={title as string} className="flex items-center gap-3 rounded-2xl border border-[#eadfce] bg-[#fbf6ed]/72 p-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#fffaf1] text-[#c9792b]">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-black text-[#2a241d]">
                    {title as string}
                  </span>
                  <span className="mt-1 block truncate text-[11px] font-semibold text-[#7a6a59]">
                    {value as string}
                  </span>
                </span>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-2xl bg-[#2a241d] px-4 text-sm font-bold text-[#fffaf1] transition hover:bg-[#3a3027] active:translate-y-px"
          >
            شروع پیگیری
            <ArrowLeft className="h-4 w-4" />
          </button>
        </aside>
      </div>
    </div>
  );
}
