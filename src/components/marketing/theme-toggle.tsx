"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";

import { getLocaleFromPathname } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem("theme");

  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
}

export function ThemeToggle({ className }: { className?: string }) {
  const locale = getLocaleFromPathname(usePathname() || "/");
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const nextTheme = getPreferredTheme();
    setTheme(nextTheme);
    applyTheme(nextTheme);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
    window.localStorage.setItem("theme", nextTheme);
  }

  const isDark = theme === "dark";
  const labels = locale === "fa"
    ? {
        light: "فعال‌سازی تم روشن",
        dark: "فعال‌سازی تم تاریک",
        lightTitle: "تم روشن",
        darkTitle: "تم تاریک",
      }
    : {
        light: "Switch to light theme",
        dark: "Switch to dark theme",
        lightTitle: "Light theme",
        darkTitle: "Dark theme",
      };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? labels.light : labels.dark}
      aria-pressed={isDark}
      title={isDark ? labels.lightTitle : labels.darkTitle}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-950 transition hover:bg-zinc-50 active:translate-y-px dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900",
        className,
      )}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
