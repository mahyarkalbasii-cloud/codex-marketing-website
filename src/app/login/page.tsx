import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Building2, PhoneCall } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { absoluteUrl, site } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "ورود به سامانه",
  description: "ورود کاربران پرشین‌سازه به سامانه فروش پروژه‌محور.",
  alternates: {
    canonical: "/login/",
  },
  openGraph: {
    title: "ورود به سامانه پرشین‌سازه",
    description: "ورود کاربران پرشین‌سازه به سامانه فروش پروژه‌محور.",
    url: absoluteUrl("/login/"),
    siteName: site.name,
    locale: "fa_IR",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginPage() {
  return (
    <main className="min-h-[calc(100dvh-5rem)] px-4 py-10 text-zinc-950">
      <section className="mx-auto grid max-w-5xl items-center gap-6 md:grid-cols-[1fr_.85fr] md:px-6 md:py-12">
        <div>
          <Badge>
            <Building2 className="h-3.5 w-3.5" />
            ورود کاربران
          </Badge>
          <h1 className="mt-5 text-4xl font-bold leading-[1.2] tracking-tight md:text-5xl">
            ورود به سامانه پرشین‌سازه
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-600 md:text-lg">
            اگر دسترسی شما فعال شده است، از همین مسیر وارد سامانه شوید. اگر هنوز
            حساب کاربری ندارید، درخواست دسترسی را ثبت کنید تا تیم فروش وضعیت
            اشتراک و دسترسی شما را بررسی کند.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/#demo" className={cn(buttonVariants({ size: "lg" }))}>
              درخواست دسترسی
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <a
              href="tel:+982175425000"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              تماس با فروش
            </a>
          </div>
        </div>
        <Card className="p-6 md:p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 text-white">
            <PhoneCall className="h-5 w-5" />
          </div>
          <h2 className="mt-5 text-2xl font-semibold">دسترسی فعال ندارید؟</h2>
          <p className="mt-3 text-sm leading-8 text-zinc-600">
            برای فعال‌سازی دسترسی یا بازیابی مسیر ورود، با تیم فروش تماس بگیرید.
          </p>
          <div className="mt-5 text-2xl font-bold" dir="ltr">
            {site.phones[0]}
          </div>
        </Card>
      </section>
    </main>
  );
}
