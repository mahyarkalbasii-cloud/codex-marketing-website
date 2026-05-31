import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { SectionHeader } from "@/components/marketing/section-header";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type FAQItem = { question: string; answer: string };

export function GradientSection({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "rounded-[2rem] border border-[#CC785C]/25 bg-gradient-to-br from-[rgba(204,120,92,0.12)] via-white to-[#fbf6ed]/80 p-6 shadow-xl shadow-[#CC785C]/10 md:p-10 dark:border-zinc-800 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function SupplierFAQ({
  title = "سوالات پرتکرار",
  items,
}: {
  title?: string;
  items: FAQItem[];
}) {
  return (
    <GradientSection>
      <SectionHeader
        eyebrow="FAQ"
        title={title}
        description="پاسخ‌های کوتاه و شفاف برای تصمیم‌گیری سریع‌تر تیم فروش."
      />
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <Card
            key={item.question}
            className="rounded-3xl border-white/70 bg-white/80 p-5 backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/70"
          >
            <h3 className="text-base font-extrabold leading-8">{item.question}</h3>
            <p className="mt-2 text-sm leading-8 text-muted-foreground">
              {item.answer}
            </p>
          </Card>
        ))}
      </div>
    </GradientSection>
  );
}

export function FinalCTA({
  title,
  description,
  primaryHref = "/#demo",
}: {
  title: string;
  description: string;
  primaryHref?: string;
}) {
  return (
    <GradientSection className="text-center">
      <h2 className="text-2xl font-black md:text-3xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-muted-foreground md:text-base">
        {description}
      </p>
      <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
        <Link href={primaryHref} className={cn(buttonVariants({ size: "lg" }))}>
          درخواست دمو
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <Link
          href="/subscriptions/"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          مشاهده پلن‌ها
        </Link>
      </div>
    </GradientSection>
  );
}
