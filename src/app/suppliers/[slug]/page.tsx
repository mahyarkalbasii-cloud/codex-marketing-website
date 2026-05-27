import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AnswerBox } from "@/components/marketing/answer-box";
import { RelatedLinks, SummaryCard } from "@/components/marketing/suppliers/shared";
import { StructuredData } from "@/components/marketing/structured-data";
import { getConstructionStages, getParentCategories } from "@/lib/supplier-pages-data";

type Props={params:Promise<{slug:string}>}
export function generateStaticParams(){return getParentCategories().map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const item=getParentCategories().find(p=>p.slug===slug);if(!item)return {}; return {title:item.title,description:item.description,alternates:{canonical:`/suppliers/${slug}`},openGraph:{title:item.title,description:item.description,url:`https://persiansaze.com/suppliers/${slug}`,locale:"fa_IR"}}}
export default async function Page({params}:Props){const {slug}=await params; const p=getParentCategories().find(x=>x.slug===slug); if(!p)notFound(); const stages=getConstructionStages().filter(s=>p.stageSlugs.includes(s.slug)); const faq=[{"@type":"Question",name:`بهترین زمان اقدام برای ${p.name} چیست؟`,acceptedAnswer:{"@type":"Answer",text:p.timingHint}}];
return <main className="mx-auto max-w-6xl space-y-8 px-4 py-12"><StructuredData data={{"@context":"https://schema.org","@type":"FAQPage",mainEntity:faq}} /><h1 className="text-4xl font-black">{p.title}</h1><AnswerBox>{p.answer}</AnswerBox><SummaryCard title="خلاصه دسته" text={p.description}/><SummaryCard title="نمونه محصولات" text={p.examples.join("، ")}/><SummaryCard title="Timing insight" text={p.timingHint}/><SummaryCard title="پرشین‌سازه چطور کمک می‌کند" text="با دیتای پروژه، فیلتر مرحله، CRM و پیگیری ساختاریافته."/><RelatedLinks title="مسیر فروش مرتبط" links={[{href:`/suppliers/motions/${p.relatedMotionSlug}`,label:"مشاهده sales motion مرتبط"}]}/><RelatedLinks title="مراحل ساخت مرتبط" links={stages.map(s=>({href:`/stages/${s.slug}`,label:s.name}))}/><section><h2 className="text-2xl font-bold">FAQ</h2></section><section><h2 className="text-2xl font-bold">CTA</h2></section></main>}
