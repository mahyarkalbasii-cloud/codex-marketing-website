import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ClipboardList, PhoneCall } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { absoluteUrl, site } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "ثبت‌نام و درخواست دسترسی",
  description:
    "ثبت درخواست دسترسی به پرشین‌سازه برای تأمین‌کنندگان محصولات و خدمات ساختمانی.",
  alternates: {
    canonical: "/signup/",
  },
  openGraph: {
    title: "ثبت‌نام و درخواست دسترسی پرشین‌سازه",
    description:
      "ثبت درخواست دسترسی به پرشین‌سازه برای تأمین‌کنندگان محصولات و خدمات ساختمانی.",
    url: absoluteUrl("/signup/"),
    siteName: site.name,
    locale: "fa_IR",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function SignupPage() {
  return (
    <main className="min-h-[calc(100dvh-5rem)] bg-[#faf9f6] px-4 py-10 text-zinc-950 dark:bg-zinc-950 dark:text-white">
      <section className="mx-auto grid max-w-5xl items-center gap-6 md:grid-cols-[1fr_.85fr] md:px-6 md:py-12">
        <div>
          <Badge>
            <ClipboardList className="h-3.5 w-3.5" />
            ثبت‌نام
          </Badge>
          <h1 className="mt-5 text-4xl font-bold leading-[1.2] tracking-tight md:text-5xl">
            درخواست دسترسی به پرشین‌سازه
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-600 md:text-lg dark:text-zinc-400">
            برای شروع، نوع محصول، شهر هدف، مراحل ساخت مهم و مدل فروش شما باید
            مشخص شود. بعد از ثبت درخواست، تیم فروش مناسب‌ترین مسیر دسترسی را با
            شما هماهنگ می‌کند.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/#demo" className={cn(buttonVariants({ size: "lg" }))}>
              شروع درخواست
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              دیدن پلن‌ها
            </Link>
          </div>
        </div>
        <Card className="p-6 md:p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
            <PhoneCall className="h-5 w-5" />
          </div>
          <h2 className="mt-5 text-2xl font-semibold">ثبت‌نام تلفنی</h2>
          <p className="mt-3 text-sm leading-8 text-zinc-600 dark:text-zinc-400">
            اگر می‌خواهید سریع‌تر مسیر دسترسی را مشخص کنید، با تیم فروش تماس
            بگیرید.
          </p>
          <a
            href="tel:+982175425000"
            className="mt-5 block text-2xl font-bold"
            dir="ltr"
          >
            {site.phones[0]}
          </a>
        </Card>
      </section>
    </main>
  );
}
