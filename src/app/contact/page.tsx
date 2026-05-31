import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Mail, MapPinned, PhoneCall, Send } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { routeOgImage } from "@/lib/og-metadata";
import { absoluteUrl, site } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const canonicalPath = "/contact/";
const pageTitle = "تماس فروش و پشتیبانی";
const pageDescription =
  "برای درخواست دمو، انتخاب اشتراک یا هماهنگی جلسه فروش با تیم پرشین‌سازه تماس بگیرید؛ تلفن، ایمیل، آدرس و ساعات کاری اینجاست.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: canonicalPath,
    languages: {
      fa: canonicalPath,
    },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: absoluteUrl(canonicalPath),
    siteName: site.name,
    locale: "fa_IR",
    type: "website",
    images: routeOgImage(canonicalPath, pageTitle),
  },
};

const contactItems = [
  ...site.contacts.map((contact) => ({
    title: contact.label,
    value: contact.phone,
    href: contact.href,
    icon: PhoneCall,
  })),
  {
    title: "ایمیل",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
  },
  {
    title: "آدرس",
    value: site.address,
    href: null,
    icon: MapPinned,
  },
  {
    title: "ساعات کاری",
    value: "شنبه تا پنجشنبه، ۹ تا ۱۸",
    href: null,
    icon: Clock,
  },
] as const;

export default function ContactPage() {
  return (
    <main>
      <section className="border-b border-[#e4d8c8] bg-[var(--page-bg)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <Badge variant="signal">تماس با ما</Badge>
            <h1 className="mt-5 max-w-4xl text-3xl font-black leading-[1.35] tracking-normal text-[#171512] md:text-5xl md:leading-[1.25]">
              تماس با پرشین‌سازه
            </h1>
            <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg md:leading-9">
              برای درخواست دمو، انتخاب اشتراک، یا بررسی اینکه داده پروژه‌های
              ساختمانی چطور وارد فرایند فروش شما می‌شود، پیام بگذارید یا مستقیم
              با تیم فروش تماس بگیرید.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {contactItems.map((item) => (
                <Card key={item.title} className="p-5">
                  <item.icon className="h-6 w-6 text-[#A8573D]" aria-hidden="true" />
                  <h2 className="mt-4 text-base font-black leading-7 text-[#171512]">
                    {item.title}
                  </h2>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-2 block text-sm font-semibold leading-7 text-muted-foreground transition hover:text-[#A8573D]"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-sm font-semibold leading-7 text-muted-foreground">
                      {item.value}
                    </p>
                  )}
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-6 md:p-8">
            <h2 className="text-2xl font-black leading-9 text-[#171512]">
              فرم تماس
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              چند خط درباره نیازتان بنویسید تا تیم فروش با زمینه درست برگردد.
            </p>
            <form
              action={`mailto:${site.email}`}
              method="post"
              encType="text/plain"
              className="mt-6 grid gap-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5 text-sm font-bold text-[#2a241d]">
                  نام و نام خانوادگی
                  <input
                    name="name"
                    autoComplete="name"
                    className="h-11 rounded-2xl border border-[#e4d8c8] bg-[#fffaf1] px-3 text-sm font-medium outline-none transition focus:border-[#CC785C] focus:ring-2 focus:ring-[#CC785C]/35"
                  />
                </label>
                <label className="grid gap-1.5 text-sm font-bold text-[#2a241d]">
                  تلفن
                  <input
                    name="phone"
                    autoComplete="tel"
                    inputMode="tel"
                    dir="ltr"
                    className="h-11 rounded-2xl border border-[#e4d8c8] bg-[#fffaf1] px-3 text-left text-sm font-medium outline-none transition focus:border-[#CC785C] focus:ring-2 focus:ring-[#CC785C]/35"
                  />
                </label>
              </div>
              <label className="grid gap-1.5 text-sm font-bold text-[#2a241d]">
                نام شرکت
                <input
                  name="company"
                  autoComplete="organization"
                  className="h-11 rounded-2xl border border-[#e4d8c8] bg-[#fffaf1] px-3 text-sm font-medium outline-none transition focus:border-[#CC785C] focus:ring-2 focus:ring-[#CC785C]/35"
                />
              </label>
              <label className="grid gap-1.5 text-sm font-bold text-[#2a241d]">
                پیام
                <textarea
                  name="message"
                  rows={5}
                  className="min-h-32 rounded-2xl border border-[#e4d8c8] bg-[#fffaf1] px-3 py-3 text-sm font-medium leading-7 outline-none transition focus:border-[#CC785C] focus:ring-2 focus:ring-[#CC785C]/35"
                />
              </label>
              <button type="submit" className={cn(buttonVariants(), "w-full")}>
                ارسال پیام
                <Send aria-hidden="true" className="h-4 w-4" />
              </button>
            </form>
          </Card>
        </div>
      </section>

      <section className="bg-[#f5f0e6]">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
          <Card className="flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-black leading-9 text-[#171512]">
                هنوز نمی‌دانید کدام اشتراک مناسب است؟
              </h2>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                اشتراک‌ها را کنار هم ببینید و بعد برای دمو یا مشاوره تماس
                بگیرید.
              </p>
            </div>
            <Link href="/subscriptions/" className={cn(buttonVariants({ size: "lg" }))}>
              مقایسه اشتراک‌ها
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            </Link>
          </Card>
        </div>
      </section>
    </main>
  );
}
