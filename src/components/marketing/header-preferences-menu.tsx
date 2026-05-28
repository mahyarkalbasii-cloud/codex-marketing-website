"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check, Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import {
  getLocaleFromPathname,
  switchLocalePath,
  type Locale,
} from "@/lib/i18n";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark" | "a";

type HeaderPreferencesMenuProps = {
  className?: string;
  compact?: boolean;
};

const THEME_STORAGE_KEY = "persiansaze-theme";
const themes: Theme[] = ["light", "dark", "a"];

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "a";
  }

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

  if (savedTheme === "dark" || savedTheme === "light" || savedTheme === "a") {
    return savedTheme;
  }

  return "a";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;

  root.classList.toggle("dark", theme === "dark");
  root.classList.toggle("theme-a", theme === "a");
  root.dataset.theme = theme;
  root.style.colorScheme = theme === "dark" ? "dark" : "light";
}

function themeIcon(theme: Theme) {
  if (theme === "light") {
    return <Sun className="h-4 w-4" aria-hidden="true" />;
  }

  if (theme === "dark") {
    return <Moon className="h-4 w-4" aria-hidden="true" />;
  }

  return <span className="text-[13px] font-black leading-none">A</span>;
}

const copy: Record<
  Locale,
  {
    close: string;
    currentLanguage: string;
    language: string;
    open: string;
    switchLanguage: string;
    targetLanguage: string;
    theme: string;
    themes: Record<Theme, string>;
  }
> = {
  fa: {
    close: "\u0628\u0633\u062a\u0646 \u062a\u0646\u0638\u06cc\u0645\u0627\u062a",
    currentLanguage: "\u0641\u0627\u0631\u0633\u06cc",
    language: "\u0632\u0628\u0627\u0646",
    open: "\u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u0646\u0645\u0627\u06cc\u0634",
    switchLanguage: "\u062a\u063a\u06cc\u06cc\u0631 \u0628\u0647 \u0627\u0646\u06af\u0644\u06cc\u0633\u06cc",
    targetLanguage: "English",
    theme: "\u062a\u0645",
    themes: {
      light: "\u0631\u0648\u0634\u0646",
      dark: "\u062a\u0627\u0631\u06cc\u06a9",
      a: "\u062a\u0645 A",
    },
  },
  en: {
    close: "Close preferences",
    currentLanguage: "English",
    language: "Language",
    open: "Display preferences",
    switchLanguage: "Switch to Persian",
    targetLanguage: "\u0641\u0627\u0631\u0633\u06cc",
    theme: "Theme",
    themes: {
      light: "Light",
      dark: "Dark",
      a: "Theme A",
    },
  },
};

export function HeaderPreferencesMenu({
  className,
  compact = false,
}: HeaderPreferencesMenuProps) {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPathname(pathname);
  const targetLocale: Locale = locale === "fa" ? "en" : "fa";
  const labels = copy[locale];
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("a");
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nextTheme = getPreferredTheme();
    setTheme(nextTheme);
    applyTheme(nextTheme);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !rootRef.current?.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function selectTheme(nextTheme: Theme) {
    setTheme(nextTheme);
    applyTheme(nextTheme);
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    setOpen(false);
  }

  return (
    <div
      ref={rootRef}
      data-compact={compact ? "true" : undefined}
      className={cn("relative", className)}
    >
      <button
        type="button"
        aria-label={open ? labels.close : labels.open}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((current) => !current)}
        className="header-preferences-trigger inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[#e4d8c8] bg-[#fffaf1]/82 text-[#2a241d] shadow-sm shadow-[#2a241d]/[0.035] transition hover:border-[#d8c9b6] hover:bg-[#fffaf1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9792b]/30 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900"
      >
        <Sun className="h-[18px] w-[18px] text-[#cc785c]" aria-hidden="true" />
      </button>

      {open ? (
        <div
          role="menu"
          className={cn(
            "absolute top-full z-[90] mt-2 w-56 rounded-[1.15rem] border border-[#d8c7b2] bg-[#fffaf1] p-2 text-[#2a241d] shadow-xl shadow-[#2a241d]/10 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white",
            locale === "fa" ? "left-0" : "right-0",
          )}
        >
          <div className="px-2 pb-1 text-[11px] font-bold text-[#75695d] dark:text-zinc-400">
            {labels.language}
          </div>
          <Link
            href={switchLocalePath(pathname, targetLocale)}
            role="menuitem"
            aria-label={labels.switchLanguage}
            onClick={() => setOpen(false)}
            className="flex h-10 items-center justify-between gap-3 rounded-xl px-2.5 text-sm font-bold transition hover:bg-[#f5eadb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9792b]/30 dark:hover:bg-zinc-900"
          >
            <span>{labels.targetLanguage}</span>
            <span className="text-[11px] font-black text-[#cc785c]">
              {locale === "fa" ? "EN" : "FA"}
            </span>
          </Link>

          <div className="my-2 h-px bg-[#e4d8c8] dark:bg-zinc-800" />

          <div className="px-2 pb-1 text-[11px] font-bold text-[#75695d] dark:text-zinc-400">
            {labels.theme}
          </div>
          <div className="grid gap-1">
            {themes.map((item) => {
              const selected = item === theme;

              return (
                <button
                  key={item}
                  type="button"
                  role="menuitemradio"
                  aria-checked={selected}
                  onClick={() => selectTheme(item)}
                  className="flex h-10 items-center justify-between gap-3 rounded-xl px-2.5 text-sm font-bold transition hover:bg-[#f5eadb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9792b]/30 dark:hover:bg-zinc-900"
                >
                  <span className="flex items-center gap-2">
                    <span className="grid h-7 w-7 place-items-center rounded-xl bg-[#f5eadb] text-[#2a241d] dark:bg-zinc-900 dark:text-white">
                      {themeIcon(item)}
                    </span>
                    {labels.themes[item]}
                  </span>
                  {selected ? (
                    <Check className="h-4 w-4 text-[#cc785c]" aria-hidden="true" />
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
