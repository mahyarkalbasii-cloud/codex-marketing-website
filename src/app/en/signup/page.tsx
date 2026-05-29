import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ClipboardList, PhoneCall } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteEn } from "@/lib/site-data.en";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    absolute: "Sign up and request access | PersianSaze",
  },
  description:
    "Request PersianSaze access for suppliers of construction products and services.",
  alternates: {
    canonical: "/en/signup/",
  },
  openGraph: {
    title: "Sign up and request access | PersianSaze",
    description:
      "Request PersianSaze access for suppliers of construction products and services.",
    url: `${siteEn.url}/en/signup/`,
    siteName: siteEn.name,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function EnglishSignupPage() {
  return (
    <main className="min-h-[calc(100dvh-5rem)] px-4 py-10 text-zinc-950 dark:bg-zinc-950 dark:text-white">
      <section className="mx-auto grid max-w-5xl items-center gap-6 md:grid-cols-[1fr_.85fr] md:px-6 md:py-12">
        <div>
          <Badge>
            <ClipboardList className="h-3.5 w-3.5" />
            Sign up
          </Badge>
          <h1 className="mt-5 text-4xl font-bold leading-[1.2] tracking-tight md:text-5xl">
            Request access to PersianSaze
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-600 md:text-lg dark:text-zinc-400">
            To start, we need to understand your product category, target city,
            important construction stages, and sales model. After the request,
            sales will coordinate the right access path with you.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/en/#demo" className={cn(buttonVariants({ size: "lg" }))}>
              Start request
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <Link
              href="/en/pricing"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              View plans
            </Link>
          </div>
        </div>
        <Card className="p-6 md:p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
            <PhoneCall className="h-5 w-5" />
          </div>
          <h2 className="mt-5 text-2xl font-semibold">Sign up by phone</h2>
          <p className="mt-3 text-sm leading-8 text-zinc-600 dark:text-zinc-400">
            If you want to clarify your access path faster, call the sales team.
          </p>
          <a
            href="tel:+982175425000"
            className="mt-5 block text-2xl font-bold"
            dir="ltr"
          >
            {siteEn.phones[0]}
          </a>
        </Card>
      </section>
    </main>
  );
}
