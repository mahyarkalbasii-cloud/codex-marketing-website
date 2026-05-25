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
  region: string;
  landArea: string;
  floors: string;
  updatedAt: string;
  need: string;
  nextAction: string;
  fit: string;
  crmStatus: string;
  owner: string;
  x: number;
  y: number;
};

const productViews: Array<{
  id: ProductViewId;
  label: string;
  description: string;
}> = [
  {
    id: "map",
    label: "نقشه",
    description: "نمای مکانی پروژه‌ها",
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

const filterSummary = [
  {
    label: "مرحله ساخت",
    value: "نازک‌کاری",
    helper: "زمان مناسب برای پیشنهاد متریال داخلی",
  },
  {
    label: "منطقه",
    value: "شمال تهران",
    helper: "ولنجک، نیاوران، زعفرانیه و اطراف",
  },
];

const sampleProjects: SampleProject[] = [
  {
    id: "velenjak-finishing",
    title: "پروژه نازک‌کاری ولنجک",
    stage: "نازک‌کاری",
    neighborhood: "ولنجک",
    city: "تهران",
    district: "منطقه ۱",
    region: "شمال تهران",
    landArea: "۴۲۰ متر",
    floors: "۷ طبقه",
    updatedAt: "۲ روز پیش",
    need: "کاشی، شیرآلات، درب داخلی",
    nextAction: "تماس معرفی + ارسال کاتالوگ",
    fit: "آماده تماس",
    crmStatus: "تماس اول",
    owner: "کارشناس فروش",
    x: 31,
    y: 35,
  },
  {
    id: "zaferanieh-structure",
    title: "پروژه اسکلت زعفرانیه",
    stage: "اسکلت",
    neighborhood: "زعفرانیه",
    city: "تهران",
    district: "منطقه ۱",
    region: "شمال تهران",
    landArea: "۶۸۰ متر",
    floors: "۹ طبقه",
    updatedAt: "۴ روز پیش",
    need: "آسانسور، سقف، اتصالات تخصصی",
    nextAction: "ثبت یادآوری مذاکره فنی",
    fit: "نیاز نزدیک",
    crmStatus: "بررسی فنی",
    owner: "مدیر حساب",
    x: 62,
    y: 28,
  },
  {
    id: "niavaran-finishing",
    title: "پروژه نازک‌کاری نیاوران",
    stage: "نازک‌کاری",
    neighborhood: "نیاوران",
    city: "تهران",
    district: "منطقه ۱",
    region: "شمال تهران",
    landArea: "۵۲۰ متر",
    floors: "۸ طبقه",
    updatedAt: "امروز",
    need: "نما، پنجره، تجهیزات داخلی",
    nextAction: "ارسال پیام هدفمند",
    fit: "فرصت داغ",
    crmStatus: "ارسال پیشنهاد",
    owner: "کارشناس فروش",
    x: 76,
    y: 58,
  },
  {
    id: "pasdaran-plaster",
    title: "پروژه گچ و خاک پاسداران",
    stage: "گچ و خاک",
    neighborhood: "پاسداران",
    city: "تهران",
    district: "منطقه ۴",
    region: "شمال شرق تهران",
    landArea: "۳۸۰ متر",
    floors: "۶ طبقه",
    updatedAt: "۶ روز پیش",
    need: "برق، مکانیک، سقف کاذب",
    nextAction: "بررسی نیاز قبل از نازک‌کاری",
    fit: "در حال شکل‌گیری",
    crmStatus: "رصد",
    owner: "توسعه بازار",
    x: 44,
    y: 68,
  },
  {
    id: "kamraniyeh-finishing",
    title: "پروژه نازک‌کاری کامرانیه",
    stage: "نازک‌کاری",
    neighborhood: "کامرانیه",
    city: "تهران",
    district: "منطقه ۱",
    region: "شمال تهران",
    landArea: "۴۹۰ متر",
    floors: "۸ طبقه",
    updatedAt: "امروز",
    need: "سرامیک، چوب، نورپردازی",
    nextAction: "هماهنگی جلسه با سازنده",
    fit: "پوشش بالا",
    crmStatus: "جلسه",
    owner: "کارشناس فروش",
    x: 53,
    y: 46,
  },
  {
    id: "saadatabad-facade",
    title: "پروژه نمای سعادت‌آباد",
    stage: "نما",
    neighborhood: "سعادت‌آباد",
    city: "تهران",
    district: "منطقه ۲",
    region: "غرب تهران",
    landArea: "۶۱۰ متر",
    floors: "۱۰ طبقه",
    updatedAt: "۳ روز پیش",
    need: "سنگ، شیشه، زیرسازی نما",
    nextAction: "پیگیری تامین‌کننده نما",
    fit: "مذاکره باز",
    crmStatus: "تماس دوم",
    owner: "مدیر حساب",
    x: 20,
    y: 61,
  },
  {
    id: "lavasan-villa",
    title: "پروژه ویلایی لواسان",
    stage: "نازک‌کاری",
    neighborhood: "لواسان",
    city: "لواسان",
    district: "بلوار اصلی",
    region: "لواسان",
    landArea: "۹۲۰ متر",
    floors: "۳ طبقه",
    updatedAt: "۵ روز پیش",
    need: "محوطه، نور، شیرآلات لوکس",
    nextAction: "ارسال پیشنهاد محصول ممتاز",
    fit: "ارزش بالا",
    crmStatus: "پیشنهاد قیمت",
    owner: "مدیر فروش",
    x: 85,
    y: 38,
  },
  {
    id: "karaj-tower",
    title: "پروژه برج کرج",
    stage: "اسکلت",
    neighborhood: "عظیمیه",
    city: "کرج",
    district: "عظیمیه",
    region: "کرج",
    landArea: "۱۲۰۰ متر",
    floors: "۱۴ طبقه",
    updatedAt: "هفته قبل",
    need: "سقف، تاسیسات، آسانسور",
    nextAction: "تماس اولیه با دفتر فنی",
    fit: "در صف بررسی",
    crmStatus: "رصد",
    owner: "توسعه بازار",
    x: 14,
    y: 40,
  },
];

function projectMatches(project: SampleProject, query: string) {
  const normalizedQuery = query.trim();

  if (!normalizedQuery) {
    return true;
  }

  const searchable = [
    project.title,
    project.stage,
    project.neighborhood,
    project.city,
    project.region,
    project.need,
  ].join(" ");

  return searchable.includes(normalizedQuery);
}

function MetricPill({
  label,
  value,
  tone = "light",
}: {
  label: string;
  value: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border px-3 py-2",
        tone === "dark"
          ? "border-[#3c332a] bg-[#2a241d] text-[#fffaf1]"
          : "border-[#eadfce] bg-[#fffaf1] text-[#2a241d]",
      )}
    >
      <span
        className={cn(
          "block text-[10px] font-semibold",
          tone === "dark" ? "text-[#d9c7ae]" : "text-[#8a7b6c]",
        )}
      >
        {label}
      </span>
      <span className="mt-1 block truncate text-xs font-black">{value}</span>
    </div>
  );
}

function StaticFilterSummary({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={cn(
        "grid gap-2",
        compact ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-1",
      )}
    >
      {filterSummary.map((filter) => (
        <div
          key={filter.label}
          className="rounded-2xl border border-[#e4d8c8] bg-[#fffaf1]/88 px-3 py-3"
        >
          <span className="block text-[10px] font-bold text-[#8a7b6c]">
            {filter.label}
          </span>
          <span className="mt-1 block text-sm font-black text-[#2a241d]">
            {filter.value}
          </span>
          {!compact && (
            <span className="mt-1 block text-[11px] font-semibold leading-5 text-[#7a6a59]">
              {filter.helper}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function ProductMapPanel({
  selectedProject,
  onSelectProject,
  onOpenFilters,
}: {
  selectedProject: SampleProject;
  onSelectProject: (project: SampleProject) => void;
  onOpenFilters: () => void;
}) {
  return (
    <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_16rem]">
      <div className="relative min-h-[17rem] overflow-hidden rounded-[1.15rem] border border-[#e4d8c8] bg-[#e8dfd2] sm:min-h-[21rem] lg:min-h-[31rem]">
        <div className="absolute inset-0 map-parcel-pattern opacity-65" aria-hidden="true" />
        <div className="absolute inset-x-4 top-4 z-[1] flex items-center justify-between rounded-2xl border border-[#e4d8c8] bg-[#fffaf1]/92 px-3 py-2 shadow-sm backdrop-blur">
          <span className="inline-flex items-center gap-2 text-xs font-black text-[#2a241d]">
            <MapPinned className="h-4 w-4 text-[#c9792b]" />
            نقشه پروژه‌ها
          </span>
          <span className="rounded-full bg-[#2a241d] px-2.5 py-1 text-[10.5px] font-black text-[#fffaf1]">
            {sampleProjects.length.toLocaleString("fa-IR")} پین فعال
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
            <path d="M-30 396 C130 370 244 390 390 350 S572 326 692 350" stroke="#fffaf1" strokeWidth="12" opacity=".84" />
          </g>
        </svg>

        {sampleProjects.map((project, index) => {
          const selected = project.id === selectedProject.id;

          return (
            <button
              key={project.id}
              type="button"
              data-product-pin={project.id}
              onClick={() => onSelectProject(project)}
              style={
                {
                  right: `${project.x}%`,
                  top: `${project.y}%`,
                  "--pin-delay": `${index * 70}ms`,
                } as CSSProperties & Record<"--pin-delay", string>
              }
              aria-label={`انتخاب ${project.title}`}
              aria-pressed={selected}
              className={cn(
                "absolute z-[2] grid h-8 w-8 -translate-y-1/2 translate-x-1/2 place-items-center rounded-full border-2 border-[#fffaf1] shadow-md shadow-[#2a241d]/18 transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9792b]/35 sm:h-9 sm:w-9",
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
      </div>

      <aside className="grid gap-3 lg:content-start">
        <div className="rounded-[1.15rem] border border-[#e4d8c8] bg-[#fbf6ed] p-3">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm font-black text-[#2a241d]">
              <ListFilter className="h-4 w-4 text-[#c9792b]" />
              فیلتر سریع
            </div>
            <span className="text-[11px] font-bold text-[#8a7b6c]">
              نمای نمونه
            </span>
          </div>
          <StaticFilterSummary compact />
        </div>

        <div className="rounded-[1.15rem] border border-[#e4d8c8] bg-[#fffaf1] p-3">
          <p className="text-sm font-black leading-6 text-[#2a241d]">
            نقشه فقط محل فرصت‌ها را نشان می‌دهد؛ تصمیم فروش در فیلترها دقیق‌تر می‌شود.
          </p>
          <button
            type="button"
            onClick={onOpenFilters}
            className="mt-3 flex h-10 w-full items-center justify-center gap-2 rounded-2xl bg-[#2a241d] px-3 text-xs font-bold text-[#fffaf1] transition hover:bg-[#3a3027] active:translate-y-px"
          >
            دیدن فیلترها
            <ArrowLeft className="h-4 w-4" />
          </button>
        </div>
      </aside>
    </div>
  );
}

function ProductFiltersPanel({
  projects,
  onSelectProject,
}: {
  projects: SampleProject[];
  onSelectProject: (project: SampleProject) => void;
}) {
  const visibleProjects = projects.length > 0 ? projects : sampleProjects.slice(0, 4);

  return (
    <div className="grid gap-3 lg:grid-cols-[17rem_minmax(0,1fr)]">
      <aside className="rounded-[1.15rem] border border-[#e4d8c8] bg-[#fbf6ed] p-3">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-bold text-[#8a7b6c]">فیلتر فعال</p>
            <h3 className="mt-1 text-sm font-black text-[#2a241d]">
              محدودسازی فرصت‌ها
            </h3>
          </div>
          <SlidersHorizontal className="h-4 w-4 text-[#c9792b]" />
        </div>
        <StaticFilterSummary compact />
        <div className="mt-2 grid grid-cols-2 gap-2">
          <MetricPill label="نتیجه" value={`${visibleProjects.length.toLocaleString("fa-IR")} پروژه`} />
          <MetricPill label="اولویت" value="تماس فروش" tone="dark" />
        </div>
      </aside>

      <section className="overflow-hidden rounded-[1.15rem] border border-[#e4d8c8] bg-[#fffaf1]">
        <div className="flex items-center justify-between gap-3 border-b border-[#e4d8c8] px-3 py-3">
          <div>
            <h3 className="text-sm font-black text-[#2a241d]">
              پروژه‌های پیشنهادی
            </h3>
            <p className="mt-1 text-[11px] font-semibold leading-5 text-[#7a6a59]">
              فهرست کوتاه پروژه‌هایی که با مرحله و منطقه انتخابی هم‌خوانی دارند.
            </p>
          </div>
          <span className="rounded-full border border-[#e4d8c8] bg-[#fbf6ed] px-2.5 py-1 text-[10.5px] font-black text-[#6f6254]">
            به‌روزرسانی زنده
          </span>
        </div>

        {projects.length === 0 ? (
          <div className="p-4 text-center">
            <p className="text-sm font-bold text-[#2a241d]">
              نتیجه‌ای برای این جست‌وجو پیدا نشد.
            </p>
            <p className="mt-1 text-[11px] font-semibold leading-5 text-[#7a6a59]">
              متن جست‌وجو را کوتاه‌تر کنید یا تب نقشه را ببینید.
            </p>
          </div>
        ) : (
          <ul className="max-h-[20rem] divide-y divide-[#eadfce] overflow-y-auto">
            {visibleProjects.map((project) => (
              <li key={project.id}>
                <button
                  type="button"
                  data-product-row={project.id}
                  onClick={() => onSelectProject(project)}
                  className="grid w-full gap-2 px-3 py-3 text-right transition hover:bg-[#fbf6ed] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#c9792b]/25 active:translate-y-px"
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
                    <span className="shrink-0 rounded-full border border-[#e4d8c8] bg-[#fbf6ed] px-2.5 py-1 text-[10.5px] font-black text-[#6f6254]">
                      {project.fit}
                    </span>
                  </span>
                  <span className="text-[11px] font-semibold leading-5 text-[#6f6254]">
                    نیاز احتمالی: {project.need}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

function ProductFollowupPanel({ project }: { project: SampleProject }) {
  const crmSteps = [
    {
      title: "تماس اول",
      value: project.crmStatus === "تماس اول" ? "در جریان" : "ثبت شده",
      active: project.crmStatus === "تماس اول",
    },
    {
      title: "ارسال پیشنهاد",
      value: project.crmStatus === "ارسال پیشنهاد" ? "فعال" : "مرحله بعد",
      active: project.crmStatus === "ارسال پیشنهاد" || project.crmStatus === "پیشنهاد قیمت",
    },
    {
      title: "یادآوری",
      value: "۴۸ ساعت آینده",
      active: project.crmStatus === "جلسه",
    },
  ];

  return (
    <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_17rem]">
      <section className="overflow-hidden rounded-[1.15rem] border border-[#e4d8c8] bg-[#fffaf1]">
        <div className="border-b border-[#e4d8c8] bg-[#fbf6ed] p-3">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[11px] font-bold text-[#8a7b6c]">CRM فروش پروژه</p>
              <h3 className="mt-1 truncate text-lg font-black text-[#2a241d]">
                {project.title}
              </h3>
            </div>
            <span className="shrink-0 rounded-full bg-[#2a241d] px-3 py-1.5 text-[11px] font-black text-[#fffaf1]">
              {project.crmStatus}
            </span>
          </div>
        </div>

        <div className="grid gap-3 p-3 md:grid-cols-3">
          {crmSteps.map((step, index) => (
            <div
              key={step.title}
              className={cn(
                "rounded-[1rem] border p-3",
                step.active
                  ? "border-[#c9792b]/35 bg-[#f6d6a8]/42"
                  : "border-[#eadfce] bg-[#fbf6ed]/72",
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-xl bg-[#fffaf1] text-xs font-black text-[#2a241d]">
                  {(index + 1).toLocaleString("fa-IR")}
                </span>
                <span
                  className={cn(
                    "rounded-full px-2 py-1 text-[10px] font-black",
                    step.active
                      ? "bg-[#2a241d] text-[#fffaf1]"
                      : "bg-[#fffaf1] text-[#8a7b6c]",
                  )}
                >
                  {step.value}
                </span>
              </div>
              <p className="mt-3 text-sm font-black text-[#2a241d]">
                {step.title}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-3 border-t border-[#eadfce] p-3 md:grid-cols-[minmax(0,1fr)_14rem]">
          <div className="rounded-[1rem] border border-[#eadfce] bg-[#fbf6ed] p-3">
            <p className="text-xs font-black text-[#2a241d]">اقدام پیشنهادی</p>
            <p className="mt-2 text-sm font-black leading-7 text-[#2a241d]">
              {project.nextAction}
            </p>
            <p className="mt-2 text-[11px] font-semibold leading-5 text-[#6f6254]">
              تماس با اشاره به مرحله ساخت، محله، و نیاز احتمالی پروژه شروع می‌شود.
            </p>
          </div>

          <div className="grid gap-2">
            <MetricPill label="مسئول" value={project.owner} />
            <MetricPill label="به‌روزرسانی" value={project.updatedAt} />
            <MetricPill label="تناسب" value={project.fit} tone="dark" />
          </div>
        </div>
      </section>

      <aside className="rounded-[1.15rem] border border-[#e4d8c8] bg-[#fbf6ed] p-3">
        <p className="text-[11px] font-bold text-[#8a7b6c]">پرونده پروژه</p>
        <div className="mt-3 grid gap-2">
          {[
            ["محله", `${project.city}، ${project.neighborhood}`],
            ["مرحله", project.stage],
            ["ابعاد", `${project.landArea} · ${project.floors}`],
            ["نیاز", project.need],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-[#e4d8c8] bg-[#fffaf1] px-3 py-2"
            >
              <span className="block text-[10px] font-semibold text-[#8a7b6c]">
                {label}
              </span>
              <span className="mt-1 block text-xs font-black leading-5 text-[#2a241d]">
                {value}
              </span>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}

export function ProductPreviewTheater() {
  const [activeView, setActiveView] = useState<ProductViewId>("map");
  const [selectedId, setSelectedId] = useState(sampleProjects[0].id);
  const [query, setQuery] = useState("");

  const matchingProjects = useMemo(
    () => sampleProjects.filter((project) => projectMatches(project, query)),
    [query],
  );

  const suggestedProjects = useMemo(() => {
    const filtered = matchingProjects.filter(
      (project) =>
        project.stage === "نازک‌کاری" || project.region === "شمال تهران",
    );

    return filtered.length > 0 ? filtered : matchingProjects;
  }, [matchingProjects]);

  const selectedProject = useMemo(
    () =>
      sampleProjects.find((project) => project.id === selectedId) ??
      sampleProjects[0],
    [selectedId],
  );

  const selectProject = (project: SampleProject) => {
    setSelectedId(project.id);
    setActiveView("followup");
  };

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
                    <span className="block">{view.label}</span>
                    <span className="hidden text-[10px] font-semibold opacity-70 lg:block">
                      {view.description}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="p-3 md:p-4">
            {activeView === "map" && (
              <ProductMapPanel
                selectedProject={selectedProject}
                onSelectProject={(project) => {
                  setSelectedId(project.id);
                }}
                onOpenFilters={() => setActiveView("filters")}
              />
            )}

            {activeView === "filters" && (
              <ProductFiltersPanel
                projects={suggestedProjects}
                onSelectProject={selectProject}
              />
            )}

            {activeView === "followup" && (
              <ProductFollowupPanel project={selectedProject} />
            )}
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
              برای {selectedProject.need}، تماس باید با اشاره به مرحله ساخت و نیاز احتمالی شروع شود.
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
            onClick={() => setActiveView("followup")}
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
