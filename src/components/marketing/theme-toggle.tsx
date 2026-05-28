"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";

import { getLocaleFromPathname } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark" | "a";

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

export function ThemeToggle({ className }: { className?: string }) {
  const locale = getLocaleFromPathname(usePathname() || "/");
  const [theme, setTheme] = useState<Theme>("a");

  useEffect(() => {
    const nextTheme = getPreferredTheme();
    setTheme(nextTheme);
    applyTheme(nextTheme);
  }, []);

  function selectTheme(nextTheme: Theme) {
    setTheme(nextTheme);
    applyTheme(nextTheme);
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  }

  const labels = locale === "fa"
    ? {
        light: "تم روشن",
        dark: "تم تاریک",
        a: "تم A",
        lightTitle: "تم روشن",
        darkTitle: "تم تاریک",
        aTitle: "تم A",
        group: "انتخاب تم",
      }
    : {
        light: "Light theme",
        dark: "Dark theme",
        a: "Theme A",
        lightTitle: "Light theme",
        darkTitle: "Dark theme",
        aTitle: "Theme A",
        group: "Theme selector",
      };

  return (
    <div
      role="group"
      aria-label={labels.group}
      className={cn(
        "theme-toggle-root inline-flex h-9 items-center gap-0.5 rounded-xl border border-zinc-200 bg-white p-0.5 text-zinc-950 shadow-sm shadow-[#2a241d]/[0.035] transition dark:border-zinc-800 dark:bg-zinc-950 dark:text-white",
        className,
      )}
    >
      {themes.map((item) => {
        const isSelected = theme === item;
        const title = item === "light"
          ? labels.lightTitle
          : item === "dark"
            ? labels.darkTitle
            : labels.aTitle;
        const ariaLabel = item === "light"
          ? labels.light
          : item === "dark"
            ? labels.dark
            : labels.a;

        return (
          <button
            key={item}
            type="button"
            onClick={() => selectTheme(item)}
            aria-label={ariaLabel}
            aria-pressed={isSelected}
            title={title}
            data-active={isSelected}
            className="theme-toggle-button inline-flex h-8 w-8 items-center justify-center rounded-[0.75rem] text-[#6f6254] transition hover:bg-[#f5eadb] hover:text-[#2a241d] active:translate-y-px data-[active=true]:bg-[#2a241d] data-[active=true]:text-[#fffaf1] dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white dark:data-[active=true]:bg-white dark:data-[active=true]:text-zinc-950"
          >
            {item === "light" ? (
              <Sun className="h-4 w-4" aria-hidden="true" />
            ) : item === "dark" ? (
              <Moon className="h-4 w-4" aria-hidden="true" />
            ) : (
              <span className="theme-toggle-letter text-[13px] font-black leading-none">
                A
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
