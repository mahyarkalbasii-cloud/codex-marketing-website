import { ParentGrid, SEOAnswerBlock, SupplierFAQ, SupplierHero, FinalCTA } from "@/components/marketing/suppliers/shared";
import { getCategoriesBySaleType, type SalesMotion } from "@/lib/supplier-pages-data";

const msgs={fast:"حتی فروش سریع و قیمت‌محور هم به دید پروژه، مرحله ساخت، تمرکز جغرافیایی و اقدام به‌موقع نیاز دارد.",consultative:"در فروش مشاوره‌ای، اجرا ممکن است دیرتر اتفاق بیفتد، اما فرصت واقعی فروش معمولاً زودتر شروع می‌شود.",hybrid:"بعضی تأمین‌کنندگان هم به فرصت‌های فوری نیاز دارند، هم به پیگیری بلندمدت تا زمان خرید."} as const;
export function motionPage(m: Exclude<SalesMotion, "unknown">) { return function Page() { const cats = getCategoriesBySaleType(m); const text = msgs[m]; return <main><SupplierHero title="راهنمای نوع فروش تأمین‌کننده" description={text}/><SEOAnswerBlock text={text}/><ParentGrid items={cats.map(c=>({title:c.title,desc:c.description,href:`/suppliers/${c.slug}`}))}/><SupplierFAQ/><FinalCTA/></main>; }; }
