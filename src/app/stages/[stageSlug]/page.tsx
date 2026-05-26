import { notFound } from "next/navigation";
import { FinalCTA, ParentGrid, SEOAnswerBlock, SupplierFAQ, SupplierHero } from "@/components/marketing/suppliers/shared";
import { getParentCategories, getStageBySlug, getStages } from "@/lib/supplier-pages-data";

export function generateStaticParams(){return getStages().map(s=>({stageSlug:s.slug}));}
export default async function StagePage({params}:{params:Promise<{stageSlug:string}>}){const {stageSlug}=await params; const s=getStageBySlug(stageSlug); if(!s) notFound(); const all=getStages(); const idx=all.findIndex(x=>x.slug===stageSlug); const neighbors=[all[idx-1],all[idx+1]].filter(Boolean) as typeof all;
return <main><SupplierHero title={`فرصت‌های فروش در مرحله ${s.title}`} description="این صفحه پنجره‌های مذاکره، خرید و اجرا را برای تصمیم فروش شفاف می‌کند."/><SEOAnswerBlock text="اگر داده child کامل نباشد، این صفحه با توضیح آموزشی و لینک دسته‌های اصلی مسیر تصمیم را روشن می‌کند."/><ParentGrid items={[...neighbors.map(n=>({title:`مرحله ${n.title}`,desc:"مرحله قبلی/بعدی",href:`/stages/${n.slug}`})),...getParentCategories().slice(0,4).map(c=>({title:c.title,desc:c.description,href:`/suppliers/${c.slug}`}))]}/><SupplierFAQ/><FinalCTA/></main>;}
