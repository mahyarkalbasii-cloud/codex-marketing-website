"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";

import {
  getLocaleFromPathname,
  switchLocalePath,
  type Locale,
} from "@/lib/i18n";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  className?: string;
};

const labels: Record<Locale, { target: string; aria: string }> = {
  fa: {
    target: "EN",
    aria: "تغییر زبان به انگلیسی",
  },
  en: {
    target: "FA",
    aria: "Switch to Persian",
  },
};

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPathname(pathname);
  const targetLocale: Locale = locale === "fa" ? "en" : "fa";
  const label = labels[locale];

  return (
    <Link
      href={switchLocalePath(pathname, targetLocale)}
      aria-label={label.aria}
      className={cn(
        "inline-flex h-10 min-w-10 items-center justify-center gap-1.5 rounded-2xl border border-[#e4d8c8] bg-[#fffaf1]/82 px-2.5 text-xs font-black text-[#2a241d] shadow-sm shadow-[#2a241d]/[0.035] transition hover:border-[#d8c9b6] hover:bg-[#fffaf1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9792b]/30 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900",
        className,
      )}
    >
      <Languages className="h-4 w-4 text-[#cc785c]" aria-hidden="true" />
      <span>{label.target}</span>
    </Link>
  );
}
