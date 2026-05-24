import Link from "next/link";
import { LogIn, PhoneCall, UserPlus } from "lucide-react";

import { authLinks } from "@/lib/site-data";

const actions = [
  {
    label: "تماس",
    href: "tel:+982175425000",
    icon: PhoneCall,
  },
  {
    label: "ثبت‌نام",
    href: authLinks.signup,
    icon: UserPlus,
    emphasized: true,
  },
  {
    label: "ورود",
    href: authLinks.login,
    icon: LogIn,
  },
];

export function MobileActionBar() {
  return (
    <nav
      aria-label="اقدام‌های سریع موبایل"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-[#e4d8c8]/80 bg-[#fbf6ed]/98 px-2.5 pb-[calc(env(safe-area-inset-bottom)+0.2rem)] pt-1 backdrop-blur-sm lg:hidden"
    >
      <div className="mx-auto grid max-w-sm grid-cols-3 gap-1 rounded-[0.9rem] border border-[#e4d8c8] bg-[#fffaf1] p-1 dark:border-zinc-800 dark:bg-zinc-950">
        {actions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className={
              action.emphasized
                ? "flex h-9 items-center justify-center gap-1 rounded-[0.75rem] border border-[#d2bca2] bg-[#f5eadb] px-1.5 text-[11px] font-bold text-[#2a241d] shadow-sm shadow-[#2a241d]/[0.02] transition active:translate-y-px dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                : "flex h-9 items-center justify-center gap-1 rounded-[0.75rem] px-1.5 text-[11px] font-semibold text-[#5f5348] transition hover:bg-[#f3e7d8] active:translate-y-px dark:text-zinc-300 dark:hover:bg-zinc-900"
            }
          >
            <action.icon className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{action.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
