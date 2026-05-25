import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Building2, PhoneCall } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteEn } from "@/lib/site-data.en";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    absolute: "Login | PersianSaze",
  },
  description: "Login page for PersianSaze project-based sales users.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function EnglishLoginPage() {
  return (
    <main className="min-h-[calc(100dvh-5rem)] bg-[#faf9f6] px-4 py-10 text-zinc-950 dark:bg-zinc-950 dark:text-white">
      <section className="mx-auto grid max-w-5xl items-center gap-6 md:grid-cols-[1fr_.85fr] md:px-6 md:py-12">
        <div>
          <Badge>
            <Building2 className="h-3.5 w-3.5" />
            User login
          </Badge>
          <h1 className="mt-5 text-4xl font-bold leading-[1.2] tracking-tight md:text-5xl">
            Log in to PersianSaze
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-600 md:text-lg dark:text-zinc-400">
            If your access is active, use this path to enter the platform. If
            you do not have an account yet, request access so sales can review
            your subscription and access path.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/en/#demo" className={cn(buttonVariants({ size: "lg" }))}>
              Request access
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <a
              href="tel:+982175425000"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Call sales
            </a>
          </div>
        </div>
        <Card className="p-6 md:p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
            <PhoneCall className="h-5 w-5" />
          </div>
          <h2 className="mt-5 text-2xl font-semibold">No active access?</h2>
          <p className="mt-3 text-sm leading-8 text-zinc-600 dark:text-zinc-400">
            Contact sales to activate access or recover your login path.
          </p>
          <div className="mt-5 text-2xl font-bold" dir="ltr">
            {siteEn.phones[0]}
          </div>
        </Card>
      </section>
    </main>
  );
}
