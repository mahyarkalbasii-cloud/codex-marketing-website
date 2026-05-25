"use client";

import { useState, type CSSProperties } from "react";
import {
  CircleDot,
  Compass,
  Handshake,
  Layers3,
  Timer,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
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

const salesTypes = [
  {
    id: "fast",
    label: "نیاز نزدیک به خرید",
    title: "فروش سریع و تراکنشی",
    text: "برای کالاها و خدماتی که باید سریع به پروژه فعال و آماده خرید برسند.",
    Icon: Timer,
  },
  {
    id: "consultative",
    label: "ورود زودتر به تصمیم",
    title: "فروش مشاوره‌ای و تصمیم‌ساز",
    text: "برای فروش‌هایی که اعتمادسازی، بررسی فنی یا مذاکره قبل از خرید لازم دارند.",
    Icon: Handshake,
  },
] as const;

function SalesTypeCard({
  activeStage,
  type,
}: {
  activeStage: Stage;
  type: (typeof salesTypes)[number];
}) {
  const focus = activeStage.sales[type.id];
  const fitLabel =
    focus.score >= 82
      ? "تناسب بالا"
      : focus.score >= 68
        ? "تناسب متوسط"
        : "تناسب محدود";

  return (
    <Card className="group relative overflow-hidden p-4 transition duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-950/[0.06] md:p-5 dark:hover:border-zinc-700">
      <div
        className="absolute -left-14 -top-14 h-32 w-32 rounded-full blur-2xl"
        style={{ backgroundColor: activeStage.soft, opacity: 0.58 }}
        aria-hidden="true"
      />
      <div className="relative flex items-center justify-between gap-3">
        <Badge className="bg-[#fffaf1]/86">{type.label}</Badge>
        <span
          className="grid h-11 w-11 place-items-center rounded-2xl border bg-[#faf9f6] dark:border-zinc-800 dark:bg-zinc-950"
          style={
            {
              borderColor: `${activeStage.color}55`,
              color: activeStage.color,
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

      <div className="relative mt-3 rounded-2xl border border-[#e4d8c8] bg-[#faf9f6] p-3 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mb-2 flex items-center justify-between gap-3 text-[11px] font-bold text-[#6f6254] dark:text-zinc-300">
          <span>تناسب با {activeStage.label}</span>
          <span>{fitLabel}</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-[#e4d8c8] dark:bg-zinc-800">
          <span
            className="block h-full rounded-full transition-[width,background-color] duration-300"
            style={{ width: `${focus.score}%`, backgroundColor: activeStage.color }}
          />
        </div>
        <p className="mt-3 text-xs font-semibold leading-6 text-[#6f6254] dark:text-zinc-300">
          {focus.note}
        </p>
      </div>

      <div className="relative mt-3 flex flex-wrap gap-2">
        {focus.products.map((product, index) => (
          <Badge
            key={product}
            variant="secondary"
            className="bg-[#f5eadb]/82"
            style={
              {
                borderColor: index === 0 ? `${activeStage.color}55` : undefined,
                color: index === 0 ? activeStage.color : undefined,
              } as CSSProperties
            }
          >
            {product}
          </Badge>
        ))}
      </div>
    </Card>
  );
}

export function AudienceStageGuide() {
  const [activeIndex, setActiveIndex] = useState(6);
  const activeStage = stages[activeIndex];

  return (
    <div className="relative mt-8 grid gap-5 lg:mt-10 lg:grid-cols-[1.08fr_.92fr] lg:[direction:ltr]">
      <Card className="relative h-full overflow-hidden p-4 md:p-5 lg:min-h-[33rem] lg:[direction:rtl]">
        <div
          className="absolute -right-16 top-10 h-40 w-40 rounded-full blur-3xl"
          style={{ backgroundColor: activeStage.soft, opacity: 0.54 }}
          aria-hidden="true"
        />
        <div className="relative grid gap-5 md:grid-cols-[11.5rem_minmax(0,1fr)] md:[direction:ltr]">
          <div className="relative rounded-[1.25rem] border border-[#e4d8c8] bg-[#faf9f6]/78 px-3 py-3 dark:border-zinc-800 dark:bg-zinc-950 md:min-h-[24.5rem] md:[direction:ltr]">
            <div className="absolute bottom-8 left-5 top-8 w-px rounded-full bg-[#d8c9b6]" aria-hidden="true" />
            <div className="relative z-10 grid h-full gap-1">
              {stages.map((stage, index) => {
                const active = index === activeIndex;

                return (
                  <button
                    key={stage.label}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    onPointerEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    aria-pressed={active}
                    className={cn(
                      "grid h-10 grid-cols-[2rem_1fr] items-center gap-2 rounded-2xl px-1.5 py-0.5 text-right transition-[background-color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CC785C]/30",
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
                      dir="rtl"
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

          <div className="relative rounded-[1.35rem] border border-[#e4d8c8] bg-[#faf9f6]/78 p-5 dark:border-zinc-800 dark:bg-zinc-950 md:[direction:rtl]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span
                className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold"
                style={{
                  borderColor: `${activeStage.color}55`,
                  backgroundColor: activeStage.soft,
                  color: activeStage.color,
                }}
              >
                <CircleDot className="h-3.5 w-3.5" strokeWidth={2} />
                {activeStage.cue}
              </span>
              <span className="text-xs font-bold text-[#7a6a59] dark:text-zinc-400">
                مرحله انتخاب‌شده
              </span>
            </div>

            <h3 className="mt-4 text-2xl font-bold text-[#2a241d] dark:text-white">
              {activeStage.label}
            </h3>
            <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              وقتی پروژه در این مرحله است، این زمینه‌های کاری زودتر معنا پیدا
              می‌کنند و بهتر می‌شود تماس فروش را به نیاز واقعی پروژه وصل کرد.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {activeStage.fields.map((field, index) => (
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

            <div className="mt-4 grid auto-rows-fr gap-3 sm:grid-cols-2">
              {activeStage.signals.map((signal, index) => (
                <div
                  key={signal}
                  className="flex gap-3 rounded-2xl border border-[#e4d8c8] bg-[#fffaf1]/72 p-3 text-xs font-semibold leading-6 text-[#6f6254] md:min-h-[7.625rem] dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: index % 2 === 0 ? activeStage.soft : "#F6D6A8",
                      color: index % 2 === 0 ? activeStage.color : "#C9792B",
                    }}
                  >
                    {index % 2 === 0 ? (
                      <Compass className="h-4 w-4" />
                    ) : (
                      <Layers3 className="h-4 w-4" />
                    )}
                  </span>
                  <span>{signal}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <div className="grid gap-4 lg:[direction:rtl]">
        {salesTypes.map((type) => (
          <SalesTypeCard key={type.id} type={type} activeStage={activeStage} />
        ))}
      </div>
    </div>
  );
}
