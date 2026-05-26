import { notFound } from "next/navigation";
import { FinalCTA, ParentGrid, SEOAnswerBlock, SupplierFAQ, SupplierHero } from "@/components/marketing/suppliers/shared";
import { getChildItemsByParentSlug, getParentCategories, getParentCategoryBySlug, getStages } from "@/lib/supplier-pages-data";

export function generateStaticParams(){return getParentCategories().map(c=>({parentSlug:c.slug}));}
export default async function ParentPage({params}:{params:Promise<{parentSlug:string}>}){const {parentSlug}=await params; const p=getParentCategoryBySlug(parentSlug); if(!p) notFound(); const childs=getChildItemsByParentSlug(parentSlug); const stages=getStages().slice(0,6);
return <main><SupplierHero title={`پرشین‌سازه برای تأمین‌کنندگان ${p.title}`} description={p.description}/><SEOAnswerBlock text={`بله، برای ${p.title} ارزش اصلی پرشین‌سازه در تشخیص زمان مناسب اقدام و پیگیری ساختاریافته است.`}/><ParentGrid items={(childs.length?childs.map(c=>({title:c.childTitle,desc:"جزئیات فروش این محصول",href:`/suppliers/${c.parentSlug}/${c.childSlug}`})):stages.map(s=>({title:s.title,desc:"مشاهده فرصت این مرحله",href:`/stages/${s.slug}`})))}/><SupplierFAQ/><FinalCTA/></main>;}
