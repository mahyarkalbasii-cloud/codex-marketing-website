import type { Metadata } from "next";
import { StructuredData } from "@/components/marketing/structured-data";
import { FinalCTA, ParentGrid, SEOAnswerBlock, SupplierFAQ, SupplierHero } from "@/components/marketing/suppliers/shared";
import { site } from "@/lib/site-data";
import { getParentCategories } from "@/lib/supplier-pages-data";

export const metadata: Metadata = { title: "پرشین‌سازه برای چه تأمین‌کنندگانی مناسب است؟", description: "راهنمای تناسب پرشین‌سازه برای تأمین‌کنندگان، دسته‌های محصول و زمان درست اقدام فروش.", alternates: { canonical: "/suppliers" }, openGraph: { title: "تناسب پرشین‌سازه برای تأمین‌کنندگان", description: "ببینید برای کدام دسته‌ها و در چه زمان‌هایی پرشین‌سازه بیشترین ارزش را دارد." } };

export default function SuppliersPage() {
  const categories = getParentCategories();
  return <main><StructuredData data={{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{ "@type": "ListItem", position:1,name:"خانه",item:site.url},{ "@type": "ListItem",position:2,name:"تأمین‌کنندگان",item:`${site.url}/suppliers`}]}} /><SupplierHero title="پرشین‌سازه برای چه تأمین‌کنندگانی مناسب است؟" description="اگر فروش شما به مرحله ساخت، زمان تماس و پیگیری منظم وابسته است، این صفحه به شما کمک می‌کند تناسب واقعی را سریع تشخیص دهید." /><SEOAnswerBlock text="بله، پرشین‌سازه برای تأمین‌کنندگانی مناسب است که فروش پروژه‌محور دارند و باید در زمان درست وارد مذاکره شوند." /><ParentGrid items={categories.map(c=>({title:c.title,desc:c.description,href:`/suppliers/${c.slug}`}))} /><SupplierFAQ /><FinalCTA /></main>;
}
