"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { LogIn, Menu, PhoneCall, UserPlus, X } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { HeaderPreferencesMenu } from "@/components/marketing/header-preferences-menu";
import { getDirection, getLocaleFromPathname, getSiteContent, localizeHref } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPathname(pathname);
  const direction = getDirection(locale);
  const { authLinks, navItems, site } = getSiteContent(locale);
  const labels = locale === "fa"
    ? {
        open: "باز کردن منوی موبایل",
        close: "بستن منوی موبایل",
        title: "منوی موبایل",
        tagline: "زیرساخت فروش پروژه‌محور برای بازار ساختمان",
        login: "ورود",
        signup: "ثبت‌نام",
        demo: "درخواست دمو",
      }
    : {
        open: "Open mobile menu",
        close: "Close mobile menu",
        title: "Mobile menu",
        tagline: "Project-based sales infrastructure for construction suppliers",
        login: "Login",
        signup: "Sign up",
        demo: "Request demo",
      };
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);
  const closeAndFocusTrigger = useCallback(() => {
    setOpen(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeAndFocusTrigger();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (!focusableElements?.length) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeAndFocusTrigger, open]);

  return (
    <div className="relative xl:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-label={open ? labels.close : labels.open}
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        onClick={() => setOpen((current) => !current)}
        className="site-header-mobile-trigger grid h-10 w-10 place-items-center rounded-2xl border border-[#e4d8c8] bg-[#fffaf1] text-[#2a241d] shadow-sm shadow-[#2a241d]/[0.04] transition hover:border-[#d2bca2] hover:bg-[#f8efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CC785C]/35 active:translate-y-px dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && typeof document !== "undefined"
        ? createPortal(
        <div
          ref={panelRef}
          id="mobile-menu-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
          dir={direction}
          className="fixed inset-0 z-[80] overflow-y-auto bg-[#fbf6ed] text-[#2a241d] dark:bg-zinc-950 dark:text-white xl:hidden"
        >
          <div className="absolute inset-0 map-parcel-pattern opacity-25 dark:opacity-10" aria-hidden="true" />
          <div className="relative mx-auto flex min-h-dvh max-w-md flex-col px-4 pb-[calc(env(safe-area-inset-bottom)+1.25rem)] pt-[calc(env(safe-area-inset-top)+1rem)]">
            <div className="flex items-start justify-between gap-4 border-b border-[#e4d8c8] pb-5 dark:border-zinc-800">
              <div className="min-w-0">
                <div id="mobile-menu-title" className="text-lg font-bold">
                  {site.name}
                </div>
                <div className="mt-1 text-sm leading-6 text-[#6f6254] dark:text-zinc-400">
                  {labels.tagline}
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <HeaderPreferencesMenu compact />
                <button
                  ref={closeButtonRef}
                  type="button"
                  aria-label={labels.close}
                  onClick={closeAndFocusTrigger}
                  className="grid h-11 w-11 place-items-center rounded-2xl border border-[#e4d8c8] bg-[#fffaf1] text-[#2a241d] shadow-sm shadow-[#2a241d]/[0.04] transition hover:bg-[#f5eadb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CC785C]/35 active:translate-y-px dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <nav className="grid gap-2 py-5" aria-label={labels.title}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={localizeHref(item.href, locale)}
                  onClick={close}
                  className="rounded-[1.15rem] border border-[#eadfce] bg-[#fffaf1] px-4 py-3.5 text-base font-semibold text-[#4b4036] shadow-sm shadow-[#2a241d]/[0.025] transition hover:border-[#d2bca2] hover:bg-[#f5eadb] hover:text-[#2a241d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CC785C]/35 active:translate-y-px dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto grid gap-3 border-t border-[#e4d8c8] pt-5 dark:border-zinc-800">
              <a
                href="tel:+982175425000"
                dir="ltr"
                onClick={close}
                className="flex min-h-12 items-center justify-between gap-3 rounded-[1.15rem] border border-[#eadfce] bg-[#fffaf1] px-4 py-3 text-right text-sm font-bold text-[#2a241d] shadow-sm shadow-[#2a241d]/[0.025] transition hover:bg-[#f5eadb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CC785C]/35 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
              >
                <span>{site.phones[0]}</span>
                <PhoneCall className="h-4 w-4 text-[#CC785C] dark:text-[#CC785C]" aria-hidden="true" />
              </a>

              <div className="grid grid-cols-2 gap-2">
                <Link
                  href={localizeHref(authLinks.login, locale)}
                  onClick={close}
                  className="flex h-12 items-center justify-center gap-2 rounded-[1.15rem] border border-[#eadfce] bg-[#fffaf1] px-3 text-sm font-semibold text-[#5f5348] transition hover:bg-[#f5eadb] hover:text-[#2a241d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CC785C]/35 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-white"
                >
                  <LogIn className="h-4 w-4" aria-hidden="true" />
                  {labels.login}
                </Link>
                <Link
                  href={localizeHref(authLinks.signup, locale)}
                  onClick={close}
                  className="flex h-12 items-center justify-center gap-2 rounded-[1.15rem] border border-[#d2bca2] bg-[#f5eadb] px-3 text-sm font-bold text-[#2a241d] shadow-sm shadow-[#2a241d]/[0.035] transition hover:bg-[#f0dfca] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CC785C]/35 dark:!border-white dark:!bg-white dark:!text-zinc-950"
                >
                  <UserPlus className="h-4 w-4" aria-hidden="true" />
                  {labels.signup}
                </Link>
              </div>

              <Link
                href={localizeHref("/#demo", locale)}
                onClick={close}
                className={cn(buttonVariants({ size: "lg" }), "w-full")}
              >
                {labels.demo}
              </Link>
            </div>
          </div>
        </div>,
          document.body,
        )
        : null}
    </div>
  );
}
