import { STAGES } from "./stages";
import { getAllSubcategories } from "./taxonomy-helpers";

export type Guide = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  sections: { title: string; body: string }[];
  relatedLinks: { label: string; href: string }[];
};

const barterItems = getAllSubcategories()
  .filter(({ subcategory }) => subcategory.salesTypes.includes("barter"))
  .slice(0, 8);

const trustExamples = getAllSubcategories()
  .filter(({ subcategory }) => subcategory.trustCriteria.length > 0)
  .slice(0, 8);

const timingExamples = getAllSubcategories()
  .filter(({ subcategory }) => subcategory.buyStages.length > 0)
  .slice(0, 8);

function exampleList(
  items: ReturnType<typeof getAllSubcategories>,
  selector: (item: (typeof items)[number]) => string,
) {
  return items.map((item) => `${item.subcategory.faTitle}: ${selector(item)}`).join("؛ ");
}

export const GUIDES: Guide[] = [
  {
    slug: "reliable-construction-supplier-checklist",
    datePublished: "2026-05-31",
    title: "چطور یک تأمین‌کننده ساختمانی قابل اعتماد انتخاب کنیم؟",
    description:
      "راهنمای کوتاه برای ارزیابی تأمین‌کننده بر اساس استاندارد، تحویل به‌موقع، انعطاف مالی و خدمات پس از فروش.",
    sections: [
      {
        title: "چهار ستون اعتماد",
        body: "در داده سند، معیار اعتماد فقط قیمت نیست. تطابق با استاندارد، تحویل منظم، شفافیت مالی یا امکان تهاتر، و پشتیبانی بعد از فروش چهار محور تکرارشونده‌اند.",
      },
      {
        title: "نمونه‌های واقعی از دیتاست",
        body: exampleList(trustExamples, (item) => item.subcategory.trustCriteria),
      },
      {
        title: "کاربرد در فروش",
        body: "فروشنده باید قبل از تماس بداند کدام معیار برای ردیف خودش مهم‌تر است؛ برای آسانسور سابقه و گارانتی مهم‌تر است، برای سیمان سرعت تامین و اصالت بار.",
      },
    ],
    relatedLinks: [
      { label: "همه دسته‌های تأمین‌کنندگان", href: "/suppliers/" },
      { label: "فروش مشاوره‌ای", href: "/sales-style/consultative/" },
    ],
  },
  {
    slug: "barter-construction-materials-property",
    datePublished: "2026-05-31",
    title: "تهاتر مصالح ساختمانی با ملک: راهنمای کامل",
    description:
      "تهاتر مصالح یا خدمات با ملک در پروژه‌های ساختمانی کجا معنا دارد و چطور باید ریسک آن را کنترل کرد؟",
    sections: [
      {
        title: "تهاتر برای چه ردیف‌هایی پررنگ است؟",
        body: barterItems.length
          ? exampleList(barterItems, (item) => item.category.faTitle)
          : "در دیتاست، تهاتر برای اقلام سرمایه‌بر و خریدهای حجیم پررنگ‌تر است.",
      },
      {
        title: "مزیت تجاری",
        body: "برای سازنده، تهاتر فشار نقدینگی را کم می‌کند. برای تأمین‌کننده، اگر قیمت‌گذاری، زمان تحویل و ضمانت حقوقی روشن باشد، می‌تواند مسیر ورود به پروژه‌های بزرگ‌تر باشد.",
      },
      {
        title: "ریسک‌های اجرایی",
        body: "ارزش ملک، زمان انتقال، کیفیت سند، زمان‌بندی تحویل کالا و تکلیف کسری نقدی باید قبل از شروع تأمین روشن شود.",
      },
    ],
    relatedLinks: [
      { label: "صفحه تهاتر", href: "/sales-style/barter/" },
      { label: "دسته‌های ساختمانی", href: "/suppliers/" },
    ],
  },
  {
    slug: "when-to-buy-construction-materials",
    datePublished: "2026-05-31",
    title: "چه زمانی هر مصالح در پروژه خریداری می‌شود؟",
    description:
      "مدل زمان‌بندی پرشین‌سازه نشان می‌دهد هر محصول در چه فازی مذاکره، خرید یا اجرا می‌شود.",
    sections: [
      {
        title: "تفاوت مذاکره، خرید و اجرا",
        body: "یک محصول ممکن است در طراحی مذاکره شود، در گودبرداری خرید شود و در فونداسیون اجرا شود. همین تفکیک، زمان درست تماس فروش را تعیین می‌کند.",
      },
      {
        title: "نمونه‌های زمان خرید",
        body: exampleList(timingExamples, (item) =>
          item.subcategory.buyStages
            .map((stageId) => STAGES.find((stage) => stage.id === stageId)?.faLabel)
            .filter(Boolean)
            .join("، "),
        ),
      },
      {
        title: "کاربرد برای تیم فروش",
        body: "به جای ارسال پیام عمومی، تیم فروش باید پروژه‌هایی را که به مرحله خرید ردیف خودش نزدیک شده‌اند جدا کند و پیگیری بعدی را در CRM ثبت کند.",
      },
    ],
    relatedLinks: [
      { label: "مراحل ساخت", href: "/stages/" },
      { label: "فروش سریع", href: "/sales-style/fast/" },
    ],
  },
];

export function getGuideBySlug(slug: string) {
  return GUIDES.find((guide) => guide.slug === slug);
}
