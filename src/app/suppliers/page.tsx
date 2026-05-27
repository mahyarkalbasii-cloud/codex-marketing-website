import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { StructuredData } from "@/components/marketing/structured-data";
import { FinalCTA, SupplierFAQ, GradientSection } from "@/components/marketing/suppliers/shared";
import { SectionHeader } from "@/components/marketing/section-header";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { absoluteUrl, stages, suppliers } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "دسته‌بندی تأمین‌کنندگان ساختمانی | پرشین‌سازه", description: "راهنمای کامل دسته‌های فروش ساختمانی، زمان طلایی اقدام، و مسیر پیگیری پروژه‌محور برای تیم‌های فروش.", alternates: { canonical: "/suppliers" }, openGraph: { title: "دسته‌بندی تأمین‌کنندگان ساختمانی | پرشین‌سازه", description: "نقشه مسیر فروش پروژه‌ای از انتخاب دسته تا زمان مناسب مذاکره و خرید.", url: absoluteUrl("/suppliers"), locale: "fa_IR", type: "website" } };

const faqs=[{question:"این صفحه برای چه تیم‌هایی مفید است؟",answer:"برای تیم‌های فروش مصالح، تاسیسات، نما، آسانسور و دکوراسیون که می‌خواهند پروژه‌های فعال را هدفمندتر پیگیری کنند."},{question:"اگر چند دسته محصول داشته باشیم چه کنیم؟",answer:"می‌توانید برای هر دسته پنجره زمانی مستقل تعریف کنید و در CRM بر اساس مرحله ساخت پیگیری جداگانه بچینید."},{question:"آیا زمان‌بندی برای همه پروژه‌ها یکسان است؟",answer:"خیر. موقعیت پروژه، مقیاس ساخت و مدل تصمیم‌گیری کارفرما روی زمان مناسب تماس و پیشنهاد اثر می‌گذارد."},{question:"خروجی عملی این صفحه چیست؟",answer:"دسته مناسب، زمان طلایی اقدام، مرحله‌های کلیدی و یک مسیر عملیاتی برای تبدیل داده پروژه به قرارداد فروش."}];

export default function SuppliersIndexPage(){
const schema={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{ "@type":"ListItem",position:1,name:"خانه",item:absoluteUrl("/")},{"@type":"ListItem",position:2,name:"تامین‌کنندگان",item:absoluteUrl("/suppliers")}]};
const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map((f)=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))};
return <main className="mx-auto max-w-7xl space-y-8 px-4 py-10 md:px-6 md:py-16"><StructuredData data={schema}/><StructuredData data={faqSchema}/>
<GradientSection><h1 className="text-4xl font-black leading-tight md:text-6xl">راهنمای کامل فروش تأمین‌کنندگان ساختمانی</h1><p className="mt-4 max-w-4xl leading-8 text-muted-foreground">از انتخاب دسته محصول تا تشخیص زمان طلایی تماس، مذاکره و خرید. این صفحه برای تصمیم‌گیری سریع‌تر و پیگیری منظم‌تر فرصت‌های واقعی طراحی شده است.</p><div className="mt-6 flex flex-col gap-3 sm:flex-row"><Link className={cn(buttonVariants({size:"lg"}))} href="/#demo">شروع با دمو <ArrowLeft className="h-4 w-4"/></Link><Link className={cn(buttonVariants({variant:"outline",size:"lg"}))} href="/features">مشاهده امکانات</Link></div></GradientSection>
<GradientSection><SectionHeader eyebrow="راهنما" title="مودهای فروش" description="مدل فروش خود را بشناسید تا اولویت‌بندی پروژه‌ها دقیق‌تر شود."/><div className="mt-6 grid gap-4 md:grid-cols-3">{[{slug:"fast-sales",name:"فروش سریع",text:"برای محصولاتی با فاصله کم بین نیاز تا خرید."},{slug:"consultative-sales",name:"فروش مشاوره‌ای",text:"برای دسته‌هایی که نیازمند ورود زودتر و اعتمادسازی هستند."},{slug:"hybrid-sales",name:"فروش ترکیبی",text:"برای تیم‌هایی که هم فرصت سریع و هم مذاکره‌ای دارند."}].map(m=><Card key={m.slug} className="rounded-3xl p-5"><h3 className="font-extrabold">{m.name}</h3><p className="mt-2 text-sm text-muted-foreground">{m.text}</p><Link className="mt-4 inline-flex items-center gap-2 text-sm font-bold" href={`/suppliers/motions/${m.slug}`}>مشاهده مسیر <ArrowLeft className="h-4 w-4"/></Link></Card>)}</div></GradientSection>
<GradientSection><SectionHeader eyebrow="دسته‌ها" title="۱۷ دسته والد" description="برای هر دسته، توضیح کوتاه و نمونه محصول ثبت شده است."/><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{suppliers.map(s=><Link key={s.slug} href={`/suppliers/${s.slug}`} className="rounded-3xl border bg-white/70 p-4"><h3 className="font-bold">{s.name}</h3><p className="mt-1 text-sm text-muted-foreground">{s.products}</p></Link>)}</div></GradientSection>
<GradientSection><SectionHeader eyebrow="تایمینگ" title="زمان طلایی اقدام" description="در هر پروژه، بین «دیدن فرصت» تا «از دست رفتن فرصت» پنجره محدودی وجود دارد."/><p className="mt-4 leading-8 text-muted-foreground">برای فروش سریع، سرعت پاسخ و قیمت‌گذاری مهم‌تر است. برای فروش مشاوره‌ای، ورود زودهنگام و تعریف رابطه با تصمیم‌گیرنده اهمیت بیشتری دارد.</p></GradientSection>
<GradientSection><SectionHeader eyebrow="مراحل" title="تایم‌لاین مراحل ساخت" /><div className="mt-5 flex flex-wrap gap-3">{stages.map((s,i)=><Link key={s.slug} href={`/stages/${s.slug}`} className="rounded-full border px-4 py-2 text-sm">{i+1}. {s.name}</Link>)}</div></GradientSection>
<GradientSection><SectionHeader eyebrow="جریان کار" title="ورک‌فلو اجرایی" description="کشف پروژه ← انتخاب مرحله ← تماس هدفمند ← ثبت در CRM ← پیگیری منظم"/></GradientSection>
<SupplierFAQ items={faqs}/>
<FinalCTA title="برای رشد پایدار فروش پروژه‌ای آماده‌اید؟" description="با یک دمو کوتاه، دسته مناسب، زمان اقدام و مسیر پیگیری تیم خود را شفاف کنید."/>
</main>}
