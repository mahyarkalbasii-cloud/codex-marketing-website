"use client";

import { useState, type CSSProperties } from "react";
import {
  ArrowLeft,
  CircleDot,
  Compass,
  Handshake,
  Layers3,
  Timer,
  type LucideIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Locale } from "@/lib/i18n";
import { salesTaxonomyMeta, taxonomyStageInsights } from "@/lib/sales-taxonomy";
import { cn } from "@/lib/utils";

type SalesKind = "fast" | "consultative";

type SalesFocus = {
  note: string;
  products: string[];
  score: number;
};

type Stage = {
  label: string;
  cue: string;
  color: string;
  soft: string;
  fields: string[];
  signals: string[];
  sales: Record<SalesKind, SalesFocus>;
};

type SalesTypeCardData = {
  id: SalesKind;
  label: string;
  title: string;
  text: string;
  accent: string;
  soft: string;
  sampleFields: readonly string[];
  Icon: LucideIcon;
};

const stages: Stage[] = [
  {
    label: "تخریب و گودبرداری",
    cue: "ورود زودهنگام",
    color: "#CC785C",
    soft: "#F5EADB",
    fields: [
      "پیمانکار تخریب",
      "ماشین‌آلات خاک‌برداری",
      "پایدارسازی و نیلینگ",
      "ایمنی و تجهیز کارگاه",
      "حمل نخاله",
      "ژئوتکنیک و آزمایش خاک",
    ],
    signals: [
      "نیاز هنوز نهایی نیست",
      "فروش بیشتر مشاوره‌ای است",
      "تصمیم با مالک یا مهندس شکل می‌گیرد",
      "تماس باید مسئله‌محور باشد",
    ],
    sales: {
      fast: {
        note: "برای خدمات فوری کارگاه و عملیات خاکی که تصمیم خرید کوتاه‌تر دارند.",
        products: ["ماشین‌آلات", "حمل نخاله", "تجهیز کارگاه"],
        score: 42,
      },
      consultative: {
        note: "برای فروش‌هایی که باید قبل از شروع تصمیم فنی وارد گفت‌وگو شوند.",
        products: ["پایدارسازی", "ژئوتکنیک", "ایمنی"],
        score: 86,
      },
    },
  },
  {
    label: "فونداسیون",
    cue: "خرید سازه‌ای",
    color: "#D99A35",
    soft: "#F6D6A8",
    fields: [
      "بتن آماده",
      "میلگرد و آرماتور",
      "قالب‌بندی",
      "افزودنی بتن",
      "واتراستاپ و عایق رطوبتی",
      "آزمایش بتن",
    ],
    signals: [
      "نقشه سازه مبنای خرید است",
      "تأخیر تأمین پرهزینه است",
      "کنترل کیفیت مهم است",
      "اعتبار تأمین‌کننده اثرگذار است",
    ],
    sales: {
      fast: {
        note: "برای مصالحی که باید هم‌زمان با برنامه بتن‌ریزی و آرماتوربندی آماده باشند.",
        products: ["بتن", "میلگرد", "قالب"],
        score: 76,
      },
      consultative: {
        note: "برای محصولاتی که به تأیید فنی، تست یا هماهنگی مهندس نیاز دارند.",
        products: ["افزودنی", "عایق", "آزمایش"],
        score: 72,
      },
    },
  },
  {
    label: "اسکلت‌بندی",
    cue: "تصمیم‌های سنگین",
    color: "#8A6048",
    soft: "#EFE0D4",
    fields: [
      "آهن‌آلات و تیرآهن",
      "اتصالات و پیچ‌ومهره",
      "بتن سازه‌ای",
      "سقف و عرشه",
      "جرثقیل و تاور",
      "آسانسور: هماهنگی چاهک/قرارداد اولیه",
    ],
    signals: [
      "خریدهای سنگین فعال می‌شود",
      "هماهنگی اجرا مهم است",
      "آسانسور نصب نهایی نیست ولی تصمیم‌سازی زود شروع می‌شود",
      "ریسک تأخیر بالاست",
    ],
    sales: {
      fast: {
        note: "برای تأمین سازه‌ای و تجهیزات اجرا که توقف پروژه را پرهزینه می‌کنند.",
        products: ["فولاد", "بتن", "جرثقیل"],
        score: 82,
      },
      consultative: {
        note: "برای تصمیم‌هایی که باید قبل از نازک‌کاری در نقشه و قرارداد دیده شوند.",
        products: ["آسانسور", "سقف", "اتصالات تخصصی"],
        score: 78,
      },
    },
  },
  {
    label: "دیوارچینی",
    cue: "تثبیت فضاها",
    color: "#6F6254",
    soft: "#E8DFD2",
    fields: [
      "آجر و بلوک",
      "هبلکس و بلوک سبک",
      "ملات خشک و سیمان",
      "وال‌پست و اتصالات",
      "عایق صوتی/حرارتی",
      "اندازه‌گیری در و پنجره",
    ],
    signals: [
      "فضاها و بازشوها تثبیت می‌شوند",
      "خرید تکرارشونده زیاد است",
      "مسیر تأسیسات آماده می‌شود",
      "زمان خوبی برای پیش‌فاکتور است",
    ],
    sales: {
      fast: {
        note: "برای مصالحی که در جریان اجرای تیغه‌ها و دیوارها سریع مصرف می‌شوند.",
        products: ["بلوک", "ملات", "سیمان"],
        score: 80,
      },
      consultative: {
        note: "برای محصولاتی که بعد از تثبیت بازشوها و مسیرها بهتر پیشنهاد می‌شوند.",
        products: ["پنجره", "عایق", "وال‌پست"],
        score: 68,
      },
    },
  },
  {
    label: "گچ و خاک",
    cue: "بین سفت‌کاری و نازک‌کاری",
    color: "#9A6B7A",
    soft: "#F0DDE3",
    fields: [
      "برق توکار",
      "لوله‌کشی آب و فاضلاب",
      "قوطی کلید و پریز",
      "گچ و خاک",
      "رابیتس و زیرسازی سقف کاذب",
      "سیمانکاری سرویس",
    ],
    signals: [
      "این بازه بین دیوارچینی و نازک‌کاری است",
      "تأسیسات پنهان باید درست جانمایی شود",
      "خطا باعث دوباره‌کاری می‌شود",
      "پنجره تصمیم برای نما/داخلی نزدیک می‌شود",
    ],
    sales: {
      fast: {
        note: "برای اقلامی که در آماده‌سازی سطح و مسیرهای توکار سریع مصرف می‌شوند.",
        products: ["گچ", "سیمان", "قوطی و لوله"],
        score: 78,
      },
      consultative: {
        note: "برای کارهایی که هماهنگی نقشه، اجرا و زمان‌بندی دقیق می‌خواهند.",
        products: ["برق", "مکانیک", "سقف کاذب"],
        score: 82,
      },
    },
  },
  {
    label: "ابتدای نازک‌کاری",
    cue: "چند خرید هم‌زمان",
    color: "#4F6F8A",
    soft: "#DCE7ED",
    fields: [
      "زیرسازی نما",
      "پنجره UPVC/آلومینیوم",
      "عایق رطوبتی سرویس",
      "کف‌سازی و شیب‌بندی",
      "تجهیزات سرمایش/گرمایش",
      "آسانسور: ریل/درب/موتورخانه",
    ],
    signals: [
      "چند خرید هم‌زمان باز می‌شود",
      "کیفیت اجرا و زمان تحویل هر دو مهم‌اند",
      "نما طبق منابع بعد از سفت‌کاری شروع می‌شود",
      "مذاکره فنی باید جدی شود",
    ],
    sales: {
      fast: {
        note: "برای اقلامی که با آماده‌شدن سطح و سرویس‌ها سریع وارد اجرا می‌شوند.",
        products: ["عایق", "کف‌سازی", "پنجره"],
        score: 74,
      },
      consultative: {
        note: "برای فروش‌هایی که هنوز فرصت طراحی، نمونه و مذاکره فنی دارند.",
        products: ["نما", "آسانسور", "تأسیسات"],
        score: 90,
      },
    },
  },
  {
    label: "نازک‌کاری",
    cue: "فروش فعال",
    color: "#C9792B",
    soft: "#F2D4B7",
    fields: [
      "کاشی و سرامیک",
      "کفپوش و پارکت",
      "درب داخلی/ضدسرقت",
      "رنگ و سفیدکاری",
      "کابینت و کمد",
      "شیرآلات و چینی‌آلات",
    ],
    signals: [
      "نیازها مشخص‌ترند",
      "نمونه‌کار و موجودی مهم است",
      "تأخیر یعنی از دست رفتن خرید",
      "تصمیم‌گیر دنبال گزینه قابل اجراست",
    ],
    sales: {
      fast: {
        note: "برای محصولاتی که پروژه آماده انتخاب و خرید مستقیم آن‌هاست.",
        products: ["کاشی", "کفپوش", "رنگ", "شیرآلات"],
        score: 90,
      },
      consultative: {
        note: "برای گزینه‌هایی که نمونه‌کار، اندازه‌گیری یا طراحی روی تصمیم اثر دارد.",
        products: ["کابینت", "درب", "طراحی داخلی"],
        score: 74,
      },
    },
  },
  {
    label: "ظریف‌کاری و پایان کار",
    cue: "تحویل و رفع نقص",
    color: "#7B6BA8",
    soft: "#E5E0F0",
    fields: [
      "کلید و پریز نهایی",
      "چراغ و نورپردازی",
      "یراق‌آلات",
      "هوشمندسازی/آیفون/CCTV",
      "نظافت صنعتی و محوطه",
      "رفع نقص و خدمات تکمیلی",
    ],
    signals: [
      "این یک مرحله واحد باشد",
      "خریدها کوچک‌تر اما فوری‌ترند",
      "کیفیت جزئیات روی تحویل اثر دارد",
      "پیشنهاد باید آماده اجرا باشد",
    ],
    sales: {
      fast: {
        note: "برای خریدهای نهایی که باید سریع نصب، جایگزین یا تکمیل شوند.",
        products: ["کلید و پریز", "چراغ", "نظافت"],
        score: 76,
      },
      consultative: {
        note: "برای خدماتی که کیفیت نهایی، امنیت یا تجربه تحویل را بهتر می‌کنند.",
        products: ["هوشمندسازی", "نورپردازی", "خدمات تکمیلی"],
        score: 72,
      },
    },
  },
];

const salesTypes: readonly SalesTypeCardData[] = [
  {
    id: "fast",
    label: "نیاز نزدیک به خرید",
    title: "فروش سریع و تراکنشی",
    text: "برای کالاها و خدماتی که باید سریع به پروژه فعال و آماده خرید برسند.",
    accent: "#CC785C",
    soft: "#F5EADB",
    sampleFields: [
      "ماشین‌آلات",
      "حمل نخاله",
      "بتن آماده",
      "میلگرد و آرماتور",
      "بلوک سبک",
      "کلید و پریز",
      "شیرآلات",
      "نظافت کارگاهی",
    ],
    Icon: Timer,
  },
  {
    id: "consultative",
    label: "ورود زودتر به تصمیم",
    title: "فروش مشاوره‌ای",
    text: "برای فروش‌هایی که اعتمادسازی، بررسی فنی یا مذاکره قبل از خرید لازم دارند.",
    accent: "#7B6BA8",
    soft: "#E5E0F0",
    sampleFields: [
      "پایدارسازی گود",
      "ژئوتکنیک و آزمایش خاک",
      "طراحی نما",
      "هوشمندسازی",
      "نورپردازی",
      "آسانسور",
      "میکروسمنت و پوشش دکوراتیو",
      "خدمات پس از فروش",
    ],
    Icon: Handshake,
  },
] as const;

const stagesEn: Stage[] = [
  {
    label: "Demolition and excavation",
    cue: "Early entry",
    color: "#CC785C",
    soft: "#F5EADB",
    fields: [
      "Demolition contractor",
      "Earthmoving machinery",
      "Excavation stabilization",
      "Site safety and setup",
      "Debris removal",
      "Geotechnical testing",
    ],
    signals: [
      "Needs are still being shaped",
      "Sales are more consultative",
      "Owners and engineers influence the decision",
      "The first contact should be problem-led",
    ],
    sales: {
      fast: {
        note: "For urgent site services and earthwork operations with shorter purchase decisions.",
        products: ["Machinery", "Debris removal", "Site setup"],
        score: 42,
      },
      consultative: {
        note: "For sales that should enter the technical conversation before execution begins.",
        products: ["Stabilization", "Geotechnical", "Safety"],
        score: 86,
      },
    },
  },
  {
    label: "Foundation",
    cue: "Structural purchase",
    color: "#D99A35",
    soft: "#F6D6A8",
    fields: [
      "Ready-mix concrete",
      "Rebar and reinforcement",
      "Formwork",
      "Concrete additives",
      "Waterstop and waterproofing",
      "Concrete testing",
    ],
    signals: [
      "Structural drawings drive purchase",
      "Supply delays are expensive",
      "Quality control matters",
      "Supplier trust affects the decision",
    ],
    sales: {
      fast: {
        note: "For materials that must be ready alongside concrete pouring and reinforcement.",
        products: ["Concrete", "Rebar", "Formwork"],
        score: 76,
      },
      consultative: {
        note: "For products that require technical approval, tests, or engineer coordination.",
        products: ["Additives", "Waterproofing", "Testing"],
        score: 72,
      },
    },
  },
  {
    label: "Structure",
    cue: "Heavy decisions",
    color: "#8A6048",
    soft: "#EFE0D4",
    fields: [
      "Steel and beams",
      "Connections and bolts",
      "Structural concrete",
      "Roofing and deck",
      "Crane and tower crane",
      "Elevator early coordination",
    ],
    signals: [
      "Heavy purchases become active",
      "Execution coordination matters",
      "Elevator decisions start before final installation",
      "Delay risk is high",
    ],
    sales: {
      fast: {
        note: "For structural supply and execution equipment that can stop the project if delayed.",
        products: ["Steel", "Concrete", "Crane"],
        score: 82,
      },
      consultative: {
        note: "For decisions that must be reflected in drawings and contracts before finishing.",
        products: ["Elevator", "Deck", "Special connections"],
        score: 78,
      },
    },
  },
  {
    label: "Masonry",
    cue: "Spaces become fixed",
    color: "#6F6254",
    soft: "#E8DFD2",
    fields: [
      "Brick and blocks",
      "AAC and lightweight blocks",
      "Dry mortar and cement",
      "Wall posts and anchors",
      "Thermal and acoustic insulation",
      "Door and window measurement",
    ],
    signals: [
      "Spaces and openings become fixed",
      "Recurring purchases are common",
      "MEP routes are being prepared",
      "A strong time for quotations",
    ],
    sales: {
      fast: {
        note: "For materials consumed quickly during wall and partition execution.",
        products: ["Block", "Mortar", "Cement"],
        score: 80,
      },
      consultative: {
        note: "For products that fit better after openings and routes are fixed.",
        products: ["Windows", "Insulation", "Wall posts"],
        score: 68,
      },
    },
  },
  {
    label: "Plaster",
    cue: "Between shell and finishing",
    color: "#9A6B7A",
    soft: "#F0DDE3",
    fields: [
      "Concealed electrical work",
      "Plumbing",
      "Switch and outlet boxes",
      "Plaster",
      "False-ceiling substrate",
      "Bathroom cement work",
    ],
    signals: [
      "This is the bridge into finishing",
      "Hidden systems must be placed correctly",
      "Errors create rework",
      "Facade and interior decisions are getting closer",
    ],
    sales: {
      fast: {
        note: "For items consumed quickly in surface preparation and concealed routes.",
        products: ["Plaster", "Cement", "Boxes and pipes"],
        score: 78,
      },
      consultative: {
        note: "For work that needs drawing, execution, and timing coordination.",
        products: ["Electrical", "Mechanical", "False ceiling"],
        score: 82,
      },
    },
  },
  {
    label: "Early finishing",
    cue: "Several purchases open",
    color: "#4F6F8A",
    soft: "#DCE7ED",
    fields: [
      "Facade substrate",
      "UPVC/aluminum windows",
      "Bathroom waterproofing",
      "Floor leveling",
      "Cooling and heating equipment",
      "Elevator rail, door, and machine room",
    ],
    signals: [
      "Several purchases open at once",
      "Execution quality and delivery time both matter",
      "Facade work starts after shell work",
      "Technical negotiation becomes serious",
    ],
    sales: {
      fast: {
        note: "For items that enter execution as soon as surfaces and service areas are ready.",
        products: ["Waterproofing", "Flooring prep", "Windows"],
        score: 74,
      },
      consultative: {
        note: "For sales that still have room for design, samples, and technical negotiation.",
        products: ["Facade", "Elevator", "MEP"],
        score: 90,
      },
    },
  },
  {
    label: "Finishing",
    cue: "Active sales",
    color: "#C9792B",
    soft: "#F2D4B7",
    fields: [
      "Tile and ceramic",
      "Flooring and parquet",
      "Interior and security doors",
      "Paint and coating",
      "Cabinets and closets",
      "Faucets and sanitary ware",
    ],
    signals: [
      "Needs are clearer",
      "Samples and availability matter",
      "Delay can lose the purchase",
      "Decision-makers want executable options",
    ],
    sales: {
      fast: {
        note: "For products the project is ready to choose and buy directly.",
        products: ["Tile", "Flooring", "Paint", "Faucets"],
        score: 90,
      },
      consultative: {
        note: "For options where samples, measurement, or design affect the decision.",
        products: ["Cabinets", "Doors", "Interior design"],
        score: 74,
      },
    },
  },
  {
    label: "Final work",
    cue: "Handover and punch list",
    color: "#7B6BA8",
    soft: "#E5E0F0",
    fields: [
      "Final switches and outlets",
      "Lighting",
      "Hardware",
      "Smart systems/intercom/CCTV",
      "Industrial cleaning and landscape",
      "Punch-list and completion services",
    ],
    signals: [
      "Treat this as one combined stage",
      "Purchases are smaller but more urgent",
      "Detail quality affects handover",
      "The offer should be ready to execute",
    ],
    sales: {
      fast: {
        note: "For final purchases that must be installed, replaced, or completed quickly.",
        products: ["Switches", "Lighting", "Cleaning"],
        score: 76,
      },
      consultative: {
        note: "For services that improve final quality, security, or handover experience.",
        products: ["Smart systems", "Lighting design", "Completion services"],
        score: 72,
      },
    },
  },
];

const salesTypesEn: readonly SalesTypeCardData[] = [
  {
    id: "fast",
    label: "Near-purchase need",
    title: "Fast transactional sales",
    text: "For goods and services that need to reach active, purchase-ready projects quickly.",
    accent: "#CC785C",
    soft: "#F5EADB",
    sampleFields: [
      "Machinery",
      "Debris removal",
      "Ready-mix concrete",
      "Rebar",
      "Lightweight blocks",
      "Switches",
      "Faucets",
      "Site cleaning",
    ],
    Icon: Timer,
  },
  {
    id: "consultative",
    label: "Earlier decision entry",
    title: "Consultative sales",
    text: "For sales that require trust-building, technical review, or negotiation before purchase.",
    accent: "#7B6BA8",
    soft: "#E5E0F0",
    sampleFields: [
      "Excavation stabilization",
      "Geotechnical testing",
      "Facade design",
      "Smart building systems",
      "Lighting design",
      "Elevators",
      "Decorative coatings",
      "After-sales service",
    ],
    Icon: Handshake,
  },
] as const;

const audienceCopy = {
  fa: {
    sampleFields: "نمونه زمینه‌های کاری و محصولات",
    stageProductsLabel: "نمونه محصولات و خدمات در این مرحله",
    more: "توضیحات بیشتر",
    selectedStage: "مرحله انتخاب‌شده",
    matchedRows: (matched: string, total: string) =>
      `${matched} ردیف مرتبط از ${total} زمینه کاری`,
    stageBody:
      "وقتی پروژه در این مرحله است، این زمینه‌های کاری زودتر معنا پیدا می‌کنند و بهتر می‌شود تماس فروش را به نیاز واقعی پروژه وصل کرد.",
    dominantSaleType: "نوع فروش غالب",
    negotiation: "مرحله مناسب مذاکره",
    purchase: "مرحله مناسب خرید",
    execution: "مرحله مناسب اجرا",
    decisionSignal: "سیگنال تصمیم",
    followupNote: "نکته پیگیری",
    dir: "rtl" as const,
  },
  en: {
    sampleFields: "Sample work areas and products",
    stageProductsLabel: "Sample products and services at this stage",
    more: "More details",
    selectedStage: "Selected stage",
    matchedRows: (matched: string, total: string) =>
      `${matched} related rows from ${total} work areas`,
    stageBody:
      "When a project reaches this stage, these work areas become more relevant and the sales conversation can be tied to a real project need.",
    dominantSaleType: "Dominant sales type",
    negotiation: "Best negotiation stage",
    purchase: "Best purchase stage",
    execution: "Best execution stage",
    decisionSignal: "Decision signal",
    followupNote: "Follow-up note",
    dir: "ltr" as const,
  },
};

function SalesTypeCard({
  copy,
  type,
}: {
  copy: (typeof audienceCopy)[Locale];
  type: SalesTypeCardData;
}) {
  const cardTone =
    type.id === "fast" ? "audience-sales-card-fast" : "audience-sales-card-consultative";

  return (
    <Card
      className={cn(
        "audience-sales-card group relative overflow-hidden p-4 transition duration-200 hover:-translate-y-0.5 md:p-5",
        cardTone,
      )}
    >
      <div
        className="audience-sales-card-glow absolute -left-14 -top-14 h-32 w-32 rounded-full blur-2xl"
        aria-hidden="true"
      />
      <div className="relative flex items-center justify-between gap-3">
        <Badge className="bg-[#fffaf1]/86">{type.label}</Badge>
        <span
          className="grid h-11 w-11 place-items-center rounded-2xl border bg-[#faf9f6] dark:border-zinc-800 dark:bg-zinc-950"
          style={
            {
              borderColor: `${type.accent}55`,
              color: type.accent,
            } as CSSProperties
          }
        >
          <type.Icon className="h-5 w-5" strokeWidth={1.8} />
        </span>
      </div>

      <h3 className="relative mt-3 text-lg font-semibold md:text-xl">{type.title}</h3>
      <p className="relative mt-2 text-xs leading-6 text-zinc-600 md:text-sm dark:text-zinc-400">
        {type.text}
      </p>

      <div className="relative mt-4">
        <div className="mb-2 text-[11px] font-bold text-[#6f6254] dark:text-zinc-300">
          {copy.sampleFields}
        </div>
        <div className="flex flex-wrap gap-2">
          {type.sampleFields.map((product, index) => (
            <Badge
              key={product}
              variant="secondary"
              className="bg-[#f5eadb]/82"
              style={
                {
                  borderColor: index === 0 ? `${type.accent}55` : undefined,
                  color: index === 0 ? type.accent : undefined,
                } as CSSProperties
              }
            >
              {product}
            </Badge>
          ))}
        </div>
      </div>

      <div className="relative mt-4">
        <button
          type="button"
          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#2a241d] px-4 text-sm font-black text-white shadow-lg shadow-[#2a241d]/15 transition hover:bg-[#18130f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CC785C]/40"
        >
          {copy.more}
          <ArrowLeft className="h-4 w-4" strokeWidth={2} />
        </button>
      </div>
    </Card>
  );
}

export function AudienceStageGuide({ locale = "fa" }: { locale?: Locale }) {
  const localizedStages = locale === "fa" ? stages : stagesEn;
  const localizedSalesTypes = locale === "fa" ? salesTypes : salesTypesEn;
  const copy = audienceCopy[locale];
  const numberLocale = locale === "fa" ? "fa-IR" : "en-US";
  const [activeIndex, setActiveIndex] = useState(6);
  const activeStage = localizedStages[activeIndex];
  const activeTaxonomy =
    locale === "fa" ? taxonomyStageInsights[activeStage.label] : undefined;
  const matchedRowsLabel = activeTaxonomy?.matchedRows.toLocaleString(numberLocale);
  const totalRowsLabel = salesTaxonomyMeta.totalRows.toLocaleString(numberLocale);
  const activeFields = activeTaxonomy?.exampleFields ?? activeStage.fields;
  const signalCards = activeTaxonomy
    ? [
        {
          label: salesTaxonomyMeta.strategicColumnTitle,
          text: activeTaxonomy.strategicFactors,
          Icon: Layers3,
          color: activeStage.color,
          soft: activeStage.soft,
        },
      ]
    : activeStage.signals.map((signal, index) => ({
        label: index % 2 === 0 ? copy.decisionSignal : copy.followupNote,
        text: signal,
        Icon: index % 2 === 0 ? Compass : Layers3,
        color: index % 2 === 0 ? activeStage.color : "#C9792B",
        soft: index % 2 === 0 ? activeStage.soft : "#F6D6A8",
      }));

  return (
    <div className="relative mt-8 grid gap-5 lg:mt-10">
      <div
        className={cn(
          "grid gap-4 md:grid-cols-2",
          locale === "fa" ? "lg:[direction:rtl]" : "lg:[direction:ltr]",
        )}
      >
        {localizedSalesTypes.map((type) => (
          <SalesTypeCard key={type.id} copy={copy} type={type} />
        ))}
      </div>

      <Card
        dir={copy.dir}
        className={cn(
          "audience-stage-card relative h-full overflow-hidden p-4 md:p-5 lg:min-h-[33rem]",
          locale === "fa" ? "lg:[direction:rtl]" : "lg:[direction:ltr]",
        )}
      >
        <div
          className="pointer-events-none absolute -right-16 top-10 h-40 w-40 rounded-full blur-3xl"
          style={{ backgroundColor: activeStage.soft, opacity: 0.54 }}
          aria-hidden="true"
        />
        <div className="relative grid gap-5 md:grid-cols-[11.5rem_minmax(0,1fr)] md:[direction:ltr]">
          <div className="audience-stage-rail relative rounded-[1.25rem] border border-[#e4d8c8] bg-[#faf9f6]/78 px-3 py-3 dark:border-zinc-800 dark:bg-zinc-950 md:min-h-[24.5rem] md:[direction:ltr]">
            <div
              className="pointer-events-none absolute bottom-8 left-5 top-8 w-px rounded-full bg-[#d8c9b6]"
              aria-hidden="true"
            />
            <div className="relative z-10 grid h-full gap-1">
              {localizedStages.map((stage, index) => {
                const active = index === activeIndex;

                return (
                  <button
                    key={stage.label}
                    type="button"
                    data-stage-option={stage.label}
                    onClick={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    aria-pressed={active}
                    className={cn(
                      "grid h-10 grid-cols-[2rem_1fr] items-center gap-2 rounded-2xl px-1.5 py-0.5 transition-[background-color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CC785C]/30",
                      locale === "fa" ? "text-right" : "text-left",
                      active
                        ? "bg-white shadow-sm shadow-[#2a241d]/[0.04] dark:bg-zinc-900"
                        : "hover:bg-white/70 dark:hover:bg-zinc-900/70",
                    )}
                  >
                    <span className="relative mx-auto grid h-8 w-8 place-items-center">
                      <span
                        className={cn(
                          "absolute inset-0 rounded-full border transition-[background-color,border-color,box-shadow,transform] duration-200",
                          active
                            ? "scale-100 border-[#fffaf1] shadow-lg dark:border-zinc-950"
                            : "scale-[0.38] border-[#d8c9b6] shadow-none",
                        )}
                        style={{ backgroundColor: active ? stage.color : "#fffaf1" }}
                      />
                      <span
                        className={cn(
                          "relative h-2.5 w-2.5 rounded-full transition-[background-color,transform] duration-200",
                          active ? "scale-100 bg-white" : "scale-0 bg-transparent",
                        )}
                      />
                    </span>
                    <span
                      dir={copy.dir}
                      className={cn(
                        "text-[11px] font-bold leading-5 text-[#75695d] dark:text-zinc-300",
                        active && "text-[#2a241d] dark:text-white",
                      )}
                    >
                      {stage.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="audience-stage-detail relative rounded-[1.35rem] border border-[#e4d8c8] bg-[#faf9f6]/78 p-5 dark:border-zinc-800 dark:bg-zinc-950 md:[direction:rtl]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span
                className="inline-flex items-center gap-2 rounded-full border bg-[#fffaf1] px-3 py-1 text-xs font-bold text-[#2a241d] dark:bg-zinc-900 dark:text-white"
                style={{
                  borderColor: `${activeStage.color}55`,
                }}
              >
                <CircleDot
                  className="h-3.5 w-3.5"
                  style={{ color: activeStage.color }}
                  strokeWidth={2}
                />
                {activeStage.cue}
              </span>
              <span className="text-xs font-bold text-[#7a6a59] dark:text-zinc-400">
                {activeTaxonomy && matchedRowsLabel
                  ? copy.matchedRows(matchedRowsLabel, totalRowsLabel)
                  : copy.selectedStage}
              </span>
            </div>

            <h3 className="mt-4 text-2xl font-bold text-[#2a241d] dark:text-white">
              {activeStage.label}
            </h3>
            <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              {copy.stageBody}
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-[#7a6a59] dark:text-zinc-400">
              <span>{copy.stageProductsLabel}</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {activeFields.map((field, index) => (
                <span
                  key={field}
                  className="inline-flex min-h-9 items-center gap-2 rounded-full border border-[#e4d8c8] bg-[#fffaf1]/88 px-3 py-1.5 text-xs font-bold leading-5 text-[#2a241d] dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{
                      backgroundColor: index % 2 === 0 ? activeStage.color : "#D99A35",
                    }}
                  />
                  {field}
                </span>
              ))}
            </div>

            {activeTaxonomy ? (
              <div className="audience-stage-timing mt-4 rounded-2xl border border-[#e4d8c8] bg-white/66 p-3 dark:border-zinc-800 dark:bg-zinc-900/70">
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    [copy.dominantSaleType, activeTaxonomy.dominantSaleType],
                    [copy.negotiation, activeTaxonomy.timing.negotiation],
                    [copy.purchase, activeTaxonomy.timing.purchase],
                    [copy.execution, activeTaxonomy.timing.execution],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="audience-stage-timing-box rounded-2xl border border-[#e4d8c8] bg-[#fffaf1]/78 p-3 dark:border-zinc-800 dark:bg-zinc-950"
                    >
                      <div className="text-[10px] font-bold text-[#8a7a69] dark:text-zinc-500">
                        {label}
                      </div>
                      <div className="mt-1 text-xs font-black leading-6 text-[#2a241d] dark:text-white">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div
              className={cn(
                "mt-4 grid auto-rows-fr gap-3",
                signalCards.length > 1 && "sm:grid-cols-2",
              )}
            >
              {signalCards.map(({ label, text, Icon, color, soft }) => (
                <div
                  key={`${label}-${text}`}
                  className="audience-stage-signal-card flex min-w-0 gap-3 rounded-2xl border border-[#e4d8c8] bg-[#fffaf1]/72 p-3 text-[13px] font-semibold leading-7 text-[#6f6254] dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: soft,
                      color,
                    }}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[11px] font-black leading-5 text-[#2a241d] dark:text-white">
                      {label}
                    </span>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

    </div>
  );
}
