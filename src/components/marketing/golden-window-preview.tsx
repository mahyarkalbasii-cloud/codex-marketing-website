"use client";

import { useMemo, useState } from "react";
import { Clock3, Target } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const stageInsights = [
  {
    stage: "تخریب",
    categories: ["خدمات اجرایی", "ماشین‌آلات", "ایمنی کارگاه"],
    insight: "زمان مناسب بیشتر برای شناسایی و بررسی اولیه است، نه وعده فروش قطعی.",
  },
  {
    stage: "فونداسیون",
    categories: ["بتن", "آهن‌آلات", "مواد افزودنی"],
    insight: "برای مصالح پایه، تماس سریع‌تر می‌تواند پیگیری فروش را منظم‌تر کند.",
  },
  {
    stage: "اسکلت",
    categories: ["تأسیسات اولیه", "آسانسور", "سازه فلزی"],
    insight: "مرحله ساخت به تیم فروش کمک می‌کند زمان بررسی فنی را بهتر تشخیص دهد.",
  },
  {
    stage: "سفت‌کاری",
    categories: ["بلوک سبک", "وال‌پست", "ملات آماده"],
    insight: "برخی تأمین‌کنندگان در این مرحله فرصت تماس و پیگیری دقیق‌تری دارند.",
  },
  {
    stage: "تأسیسات",
    categories: ["لوله و کابل", "موتورخانه", "برق ساختمان"],
    insight: "تماس باید با نیاز فنی پروژه هماهنگ باشد تا مذاکره هدفمندتر شروع شود.",
  },
  {
    stage: "نازک‌کاری",
    categories: ["کابینت", "کفپوش", "رنگ", "نورپردازی"],
    insight: "در این مرحله، پیگیری منظم‌تر مهم است چون تصمیم‌ها به خرید نزدیک‌تر می‌شوند.",
  },
  {
    stage: "ظریف‌کاری",
    categories: ["تجهیزات نهایی", "خدمات تکمیلی", "تحویل پروژه"],
    insight: "فرصت‌ها کوتاه‌ترند و یادآوری پیگیری بعدی اهمیت بیشتری پیدا می‌کند.",
  },
] as const;

export function GoldenWindowPreview() {
  const [activeStage, setActiveStage] = useState("سفت‌کاری");
  const active = useMemo(
    () =>
      stageInsights.find((item) => item.stage === activeStage) ??
      stageInsights[3],
    [activeStage],
  );

  return (
    <div className="mt-6 rounded-[1.35rem] border border-[#e4d8c8] bg-[#fbf6ed] p-4 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h4 className="text-lg font-bold">پنجره طلایی فروش</h4>
          <p className="mt-2 text-sm leading-7 text-[#6f6254] dark:text-zinc-400">
            مرحله ساخت به زمان مناسب بررسی، تماس و پیگیری وصل می‌شود؛ این فقط
            یک راهنمای تصمیم است، نه تضمین فروش.
          </p>
        </div>
        <Badge className="shrink-0 border-[#d99a35]/55 bg-[#f6d6a8] text-[#5a3515] dark:border-amber-300/30 dark:bg-amber-300 dark:text-zinc-950">
          مرحله ساخت → زمان اقدام
        </Badge>
      </div>

      <div className="mt-5 pb-1" aria-label="انتخاب مرحله ساخت">
        <div className="flex flex-wrap gap-2">
          {stageInsights.map((item) => {
            const activeItem = item.stage === active.stage;

            return (
              <button
                key={item.stage}
                type="button"
                aria-pressed={activeItem}
                onClick={() => setActiveStage(item.stage)}
                className={cn(
                  "relative shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9792b]/30 active:translate-y-px",
                  activeItem
                    ? "border-[#d99a35]/60 bg-[#f6d6a8] text-[#2a241d] shadow-sm dark:border-amber-300/30 dark:bg-amber-300 dark:text-zinc-950"
                    : "border-[#e4d8c8] bg-[#fffaf1] text-[#6f6254] dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300",
                )}
              >
                {item.stage}
                {activeItem ? (
                  <span className="absolute -bottom-1 left-3 right-3 h-0.5 rounded-full bg-[#c9792b]" />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-4 rounded-[1.2rem] border border-[#e4d8c8] bg-[#fffaf1] p-4 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex items-center justify-between gap-3">
          <div className="text-sm font-bold">مرحله فعلی: {active.stage}</div>
          <Clock3 className="h-4 w-4 text-[#c9792b]" />
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {active.categories.map((category) => (
            <Badge
              key={category}
              className="border-[#e4d8c8] bg-[#fbf6ed] text-xs text-[#5f5348] dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
            >
              {category}
            </Badge>
          ))}
        </div>
        <div className="mt-4 rounded-[1.1rem] border border-[#d99a35]/55 bg-[#f6d6a8]/72 p-3 text-sm leading-7 text-[#2a241d] dark:border-amber-300/30 dark:bg-amber-300 dark:text-zinc-950">
          <div className="mb-1 flex items-center gap-2 font-bold">
            <Target className="h-4 w-4" />
            زمان مناسب بررسی/تماس/پیگیری
          </div>
          {active.insight}
        </div>
      </div>
    </div>
  );
}
