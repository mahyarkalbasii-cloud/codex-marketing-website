"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogIn, PhoneCall, UserPlus } from "lucide-react";

import { getDirection, getLocaleFromPathname, getSiteContent, localizeHref } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const actionStyles = {
  call: "mobile-action-bar__item--call",
  login: "mobile-action-bar__item--login",
  signup: "mobile-action-bar__item--signup",
} as const;

export function MobileActionBar() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPathname(pathname);
  const direction = getDirection(locale);
  const { authLinks } = getSiteContent(locale);
  const actions = [
    {
      id: "call",
      label: "تماس",
      href: "tel:+982175425000",
      icon: PhoneCall,
    },
    {
      id: "signup",
      label: "ثبت‌نام",
      href: localizeHref(authLinks.signup, locale),
      icon: UserPlus,
    },
    {
      id: "login",
      label: "ورود",
      href: localizeHref(authLinks.login, locale),
      icon: LogIn,
    },
  ] as const;

  return (
    <nav
      dir={direction}
      aria-label="اقدام‌های سریع موبایل"
      className="mobile-action-bar fixed inset-x-0 bottom-0 z-40 lg:hidden"
    >
      <div className="mobile-action-bar__shell">
        {actions.map((action) => (
          <Link
            key={action.id}
            href={action.href}
            className={cn("mobile-action-bar__item", actionStyles[action.id])}
          >
            <action.icon className="h-4 w-4" aria-hidden="true" />
            <span>{action.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
