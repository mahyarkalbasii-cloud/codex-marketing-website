import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnswerBox } from "@/components/marketing/answer-box";
import { StructuredData } from "@/components/marketing/structured-data";
import { FinalCTA, GradientSection, SupplierFAQ } from "@/components/marketing/suppliers/shared";
import { absoluteUrl, stages, suppliers } from "@/lib/site-data";

export function generateStaticParams(){return stages.map((s)=>({stageSlug:s.slug}));}
export async function generateMetadata({params}:{params:Promise<{stageSlug:string}>}):Promise<Metadata>{const {stageSlug}=await params; const s=stages.find(x=>x.slug===stageSlug); if(!s)return{}; return{title:`${s.name} | مرحله ساخت`,description:s.description,alternates:{canonical:`/stages/${s.slug}`},openGraph:{title:s.title,description:s.description,url:absoluteUrl(`/stages/${s.slug}`),locale:"fa_IR",type:"article"}}}
export default async function Page({params}:{params:Promise<{stageSlug:string}>}){const {stageSlug}=await params; const s=stages.find(x=>x.slug===stageSlug); if(!s)notFound(); const idx=stages.findIndex(x=>x.slug===s.slug); const related=suppliers.filter(sp=>sp.stages.includes(s.name)); const faqs=[{question:"در این مرحله باید مذاکره کنیم یا فقط رصد؟",answer:"بسته به دسته محصول، یا باید وارد مذاکره شوید یا پروژه را برای زمان خرید واقعی رصد کنید."},{question:"خرید در این مرحله رخ می‌دهد؟",answer:"در برخی دسته‌ها بله، اما در بسیاری موارد این مرحله نقطه آماده‌سازی تصمیم خرید است."}];
return <main className="mx-auto max-w-7xl space-y-8 px-4 py-10 md:px-6 md:py-16"><StructuredData data={{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"خانه",item:absoluteUrl("/")},{"@type":"ListItem",position:2,name:"مراحل ساخت",item:absoluteUrl("/suppliers")},{"@type":"ListItem",position:3,name:s.name,item:absoluteUrl(`/stages/${s.slug}`)}]}}/><StructuredData data={{"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))}}/>
<GradientSection><h1 className="text-4xl font-black md:text-6xl">{s.title}</h1><p className="mt-4 text-muted-foreground">{s.description}</p><AnswerBox>مرحله {s.name} باید به یک اقدام فروش روشن تبدیل شود: مذاکره، خرید یا اجرای پیگیری.</AnswerBox></GradientSection>
<GradientSection><h2 className="text-2xl font-black">تعریف مرحله</h2><p className="mt-3 text-muted-foreground">این مرحله یک سیگنال زمانی است که نشان می‌دهد نیاز پروژه به چه نوع تامین‌کننده‌ای نزدیک شده است.</p></GradientSection>
<GradientSection><h2 className="text-2xl font-black">زمان‌بندی مذاکره / خرید / اجرا</h2><p className="mt-3 text-muted-foreground">در این مرحله، تیم فروش باید بین گفت‌وگوی اولیه، ارسال پیشنهاد و پیگیری اجرا تصمیم بگیرد.</p></GradientSection>
<GradientSection><h2 className="text-2xl font-black">دسته‌های مرتبط</h2><div className="mt-3 grid gap-3 md:grid-cols-3">{related.map(r=><Link key={r.slug} href={`/suppliers/${r.slug}`} className="rounded-3xl border p-4">{r.name}</Link>)}</div></GradientSection>
<GradientSection><h2 className="text-2xl font-black">مرحله قبل / بعد</h2><div className="mt-3 flex gap-3">{idx>0 && <Link href={`/stages/${stages[idx-1].slug}`}>← {stages[idx-1].name}</Link>}{idx<stages.length-1 && <Link href={`/stages/${stages[idx+1].slug}`}>{stages[idx+1].name} →</Link>}</div></GradientSection>
<GradientSection><h2 className="text-2xl font-black">پرشین‌سازه در این مرحله</h2><ul className="mt-3 list-disc space-y-2 pr-6 text-muted-foreground"><li>هشدار به‌موقع برای پروژه‌های هم‌مرحله</li><li>ثبت وضعیت مذاکرات</li><li>تعریف پیگیری بعدی بر اساس ظرفیت تیم</li></ul></GradientSection>
<SupplierFAQ title="FAQ مرحله" items={faqs}/><FinalCTA title="این مرحله را به فروش تبدیل کنید" description="با داده به‌روز پروژه و پیگیری ساخت‌یافته، تصمیم‌گیری تیم فروش را سریع‌تر کنید."/>
</main>}
