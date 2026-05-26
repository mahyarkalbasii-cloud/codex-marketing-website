import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AnswerBox } from "@/components/marketing/answer-box";
import { FaqList } from "@/components/marketing/faq-list";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function SupplierHero({ title, description }: { title: string; description: string }) {
  return <section className="mx-auto max-w-7xl px-4 py-14 md:px-6"><h1 className="text-4xl font-black md:text-6xl">{title}</h1><p className="mt-4 max-w-3xl text-lg text-muted-foreground">{description}</p></section>;
}
export function SEOAnswerBlock({ text }: { text: string }) { return <div className="mx-auto max-w-7xl px-4 md:px-6"><AnswerBox>{text}</AnswerBox></div>; }
export function ParentGrid({ items }: { items: { title: string; desc: string; href: string }[] }) { return <section className="mx-auto grid max-w-7xl gap-4 px-4 py-12 md:grid-cols-3 md:px-6">{items.map(i => <Link key={i.href} href={i.href} className="rounded-3xl border p-5"><h3 className="font-bold">{i.title}</h3><p className="mt-2 text-sm text-muted-foreground">{i.desc}</p></Link>)}</section>; }
export function FinalCTA() { return <section className="mx-auto max-w-7xl px-4 py-12 md:px-6"><Card className="p-6"><h2 className="text-2xl font-bold">آماده ارزیابی تناسب فروش هستید؟</h2><p className="mt-3 text-muted-foreground">دموی پرشین‌سازه را ببینید و فرصت‌های مناسب را سریع‌تر پیدا کنید.</p><Link href="/#demo" className={cn(buttonVariants({ size: "lg" }), "mt-5")}>درخواست دمو <ArrowLeft className="h-4 w-4" /></Link></Card></section>; }
export function SupplierFAQ() { return <section className="mx-auto max-w-7xl px-4 py-12 md:px-6"><FaqList items={[{question:"آیا این صفحات با داده واقعی ساخته شده‌اند؟",answer:"بله، دسته‌ها و مراحل از داده‌های موجود سایت ساخته شده‌اند و برای child page داده جعلی تولید نشده است."},{question:"برای حوزه من مناسب است؟",answer:"صفحه دسته یا فروش‌موشن مرتبط را ببینید تا زمان‌بندی و نوع اقدام مناسب شما روشن شود."}]} /></section>; }
