"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, LogIn, PhoneCall } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/marketing/language-switcher";
import { MobileMenu } from "@/components/marketing/mobile-menu";
import { ThemeToggle } from "@/components/marketing/theme-toggle";
import { getDirection, getLocaleFromPathname, getSiteContent, localizeHref } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPathname(pathname);
  const direction = getDirection(locale);
  const { authLinks, navItems, site } = getSiteContent(locale);
  const labels = locale === "fa"
    ? {
        tagline: "زیرساخت فروش پروژه‌محور",
        salesCall: "تماس فروش",
        login: "ورود",
        demo: "درخواست دمو",
      }
    : {
        tagline: "Project-based sales infrastructure",
        salesCall: "Sales",
        login: "Login",
        demo: "Request demo",
      };

  return (
    <header dir={direction} className="sticky top-0 z-[60] border-b border-[#e4d8c8]/80 bg-[#fbf6ed]/96 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/92">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between pl-4 pr-5 md:h-[68px] md:px-6">
        <Link href={localizeHref("/", locale)} className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#2a241d] text-[#fffaf1] shadow-sm shadow-[#2a241d]/10 dark:bg-white dark:text-zinc-950">
            <Building2 className="h-[18px] w-[18px]" />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-bold">
              {site.name}
            </span>
            <span className="hidden text-[11px] text-zinc-500 sm:block dark:text-zinc-300">
              {labels.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 min-[1120px]:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={localizeHref(item.href, locale)}
              className="rounded-2xl px-2.5 py-2 text-[12.5px] font-semibold text-[#65594e] transition hover:bg-white/72 hover:text-[#2a241d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9792b]/30 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 min-[1120px]:flex">
          <LanguageSwitcher />
          <ThemeToggle className="h-10 w-10 rounded-2xl" />
          <a
            href="tel:+982175425000"
            className="inline-flex h-10 items-center gap-2 rounded-2xl border border-[#e4d8c8] bg-white/72 px-3 text-xs font-bold text-[#2a241d] shadow-sm shadow-[#2a241d]/[0.035] transition hover:border-[#d8c9b6] hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9792b]/30 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
          >
            <PhoneCall className="h-4 w-4 text-[#cc785c]" aria-hidden="true" />
            <span className="text-[11px] font-semibold text-[#7a6a59] dark:text-zinc-400">
              {labels.salesCall}
            </span>
            <span dir="ltr">{site.phones[0]}</span>
          </a>
          <Link
            href={localizeHref(authLinks.login, locale)}
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "h-10 px-3.5 text-[13px]",
            )}
          >
            <LogIn className="h-4 w-4" aria-hidden="true" />
            {labels.login}
          </Link>
          <Link
            href={localizeHref("/#demo", locale)}
            className={cn(buttonVariants({ size: "sm" }), "h-10 px-4")}
          >
            {labels.demo}
          </Link>
        </div>

        <div className="flex items-center gap-2 min-[1120px]:hidden">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <ThemeToggle className="h-10 w-10 rounded-2xl" />
          <a
            href="tel:+982175425000"
            dir="ltr"
            className="rounded-2xl border border-[#e4d8c8] bg-white/76 px-3 py-2 text-xs font-semibold text-[#4b4036] shadow-sm shadow-[#2a241d]/[0.04] dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
          >
            {site.phones[0]}
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
