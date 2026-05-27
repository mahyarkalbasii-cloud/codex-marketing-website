import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AnswerBox } from "@/components/marketing/answer-box";
import { RelatedLinks, SummaryCard } from "@/components/marketing/suppliers/shared";
import { getConstructionStages, getParentCategories } from "@/lib/supplier-pages-data";

type Props={params:Promise<{stageSlug:string}>}
export function generateStaticParams(){return getConstructionStages().map(s=>({stageSlug:s.slug}))}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {stageSlug}=await params; const s=getConstructionStages().find(x=>x.slug===stageSlug); if(!s)return {}; return {title:s.title,description:s.description,alternates:{canonical:`/stages/${s.slug}`},openGraph:{title:s.title,description:s.description,url:`https://persiansaze.com/stages/${s.slug}`,locale:"fa_IR"}}}
export default async function StagePage({params}:Props){const {stageSlug}=await params; const stages=getConstructionStages(); const s=stages.find(x=>x.slug===stageSlug); if(!s)notFound(); const idx=stages.findIndex(x=>x.slug===s.slug); const prev=stages[idx-1], next=stages[idx+1]; const relatedParents=getParentCategories().filter(p=>p.stageSlugs.includes(s.slug)).slice(0,6);
return <main className="mx-auto max-w-6xl space-y-8 px-4 py-12"><h1 className="text-4xl font-black">{s.title}</h1><SummaryCard title="تعریف مرحله" text={s.definition}/><AnswerBox>{s.description}</AnswerBox><SummaryCard title="مذاکره / خرید / اجرا" text={s.timing}/><RelatedLinks title="دسته‌های مرتبط" links={relatedParents.map(p=>({href:`/suppliers/${p.slug}`,label:p.name}))}/><RelatedLinks title="مراحل اطراف" links={[prev&&{href:`/stages/${prev.slug}`,label:`مرحله قبل: ${prev.name}`},next&&{href:`/stages/${next.slug}`,label:`مرحله بعد: ${next.name}`},].filter(Boolean) as {href:string;label:string}[]}/><SummaryCard title="نقش پرشین‌سازه" text="پایش مرحله، اولویت‌بندی فرصت و پیگیری CRM در این مرحله."/><section><h2 className="text-2xl font-bold">FAQ</h2></section><section><h2 className="text-2xl font-bold">CTA</h2></section></main>}
