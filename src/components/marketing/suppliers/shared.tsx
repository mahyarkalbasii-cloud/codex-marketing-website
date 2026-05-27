import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SectionHeader } from "@/components/marketing/section-header";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type FAQItem = { question: string; answer: string };

export function GradientSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={cn("rounded-[2rem] border border-amber-200/60 bg-gradient-to-br from-amber-50/90 via-white to-orange-50/80 p-6 shadow-xl shadow-amber-100/40 md:p-10 dark:border-zinc-800 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800", className)}>{children}</section>;
}

export function SupplierFAQ({ title = "سوالات پرتکرار", items }: { title?: string; items: FAQItem[] }) {
  return (
    <GradientSection>
      <SectionHeader eyebrow="FAQ" title={title} description="پاسخ‌های کوتاه و شفاف برای تصمیم‌گیری سریع‌تر تیم فروش." />
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <Card key={item.question} className="rounded-3xl border-white/70 bg-white/80 p-5 backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/70">
            <h3 className="text-base font-extrabold leading-8">{item.question}</h3>
            <p className="mt-2 text-sm leading-8 text-muted-foreground">{item.answer}</p>
          </Card>
        ))}
      </div>
    </GradientSection>
  );
}

export function FinalCTA({ title, description, primaryHref = "/#demo" }: { title: string; description: string; primaryHref?: string }) {
  return (
    <GradientSection className="text-center">
      <h2 className="text-2xl font-black md:text-3xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-muted-foreground md:text-base">{description}</p>
      <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
        <Link href={primaryHref} className={cn(buttonVariants({ size: "lg" }))}>درخواست دمو <ArrowLeft className="h-4 w-4" /></Link>
        <Link href="/pricing" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>مشاهده پلن‌ها</Link>
      </div>
    </GradientSection>
  );
}
