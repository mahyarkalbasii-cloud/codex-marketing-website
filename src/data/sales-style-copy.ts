import { CATEGORIES } from "./categories";
import type { SalesStyleId } from "./sales-style";

type CopyList = {
  title: string;
  items: string[];
};

export interface SalesStyleCopy {
  path: string;
  alternatePath: string;
  metadataTitle: string;
  h1: string;
  eyebrow: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  shortQuestion: string;
  shortAnswer: string;
  whatThisMeansTitle: string;
  whatThisMeans: CopyList[];
  comparisonNote?: {
    title: string;
    description: string;
    href: string;
  };
  comparison?: {
    title: string;
    description: string;
    fastLabel: string;
    consultativeLabel: string;
    rows: { dimension: string; fast: string; consultative: string }[];
  };
  tocTitle: string;
  tocDescription: string;
  categorySectionTitle: string;
  subcategoryCardLabels: {
    buyTime: string;
    dual: string;
    parentLink: string;
  };
  playbookTitle: string;
  playbookDescription: string;
  playbookCards: {
    title: string;
    hook: string;
    tips: string[];
  }[];
  timingDiagram: {
    title: string;
    description: string;
    steps: { label: string; text: string }[];
  };
  relatedStagesTitle: string;
  relatedStagesDescription: string;
  faqTitle: string;
  faqItems: { q: string; a: string }[];
  ctaTitle: string;
  ctaDescription: string;
  categoryDescriptions: Record<string, string>;
}

export const SALES_STYLE_LABELS = {
  home: "خانه",
  suppliers: "تأمین‌کنندگان",
  shortAnswerBadge: "پاسخ کوتاه",
  subcategoryCountSuffix: "زیرگروه",
  categoryPageLink: "صفحه دسته",
  comparisonDimension: "بعد مقایسه",
  comparisonLink: "مشاهده مقایسه",
  faqBadge: "سوالات پرتکرار",
  pricingCta: "مشاهده پلن‌ها",
};

const styleMeta: Record<
  SalesStyleId,
  {
    label: string;
    path: string;
    h1: string;
    subtitle: string;
    shortAnswer: string;
    angle: string;
  }
> = {
  fast: {
    label: "فروش سریع و تراکنشی",
    path: "/sales-style/fast/",
    h1: "فروش سریع و تراکنشی در پروژه‌های ساختمانی",
    subtitle:
      "فروش سریع یعنی تیم فروش وقتی وارد پروژه می‌شود که نیاز خرید نزدیک، قابل تشخیص و قابل تبدیل است؛ ارزش اصلی این سبک در سرعت شناسایی، تماس، قیمت‌دهی و پیگیری کوتاه‌مدت ساخته می‌شود.",
    shortAnswer:
      "فروش سریع برای محصولاتی مناسب است که سازنده معمولاً در فاصله کوتاهی بین نیاز و خرید تصمیم می‌گیرد. در این سبک، موجودی، قیمت، زمان تحویل و پیگیری ۴۸ ساعته تعیین‌کننده‌اند.",
    angle: "سرعت پاسخ، موجودی و زمان تحویل",
  },
  consultative: {
    label: "فروش مشاوره‌ای و مهندسی",
    path: "/sales-style/consultative/",
    h1: "فروش مشاوره‌ای در پروژه‌های ساختمانی",
    subtitle:
      "فروش مشاوره‌ای یعنی ورود زودتر به تصمیم سازنده؛ جایی که محصول یا خدمت با اعتماد، شواهد فنی، رابطه حرفه‌ای و پیگیری چندمرحله‌ای فروخته می‌شود، نه فقط با قیمت لحظه‌ای.",
    shortAnswer:
      "فروش مشاوره‌ای زمانی لازم است که تصمیم خرید قبل از اجرا و طی چند گفت‌وگو شکل می‌گیرد. فروشنده باید زودتر وارد پروژه شود، ذی‌نفعان را بشناسد و اعتماد فنی بسازد.",
    angle: "اعتماد فنی، نمونه‌کار و ورود زودهنگام",
  },
  barter: {
    label: "تهاتر مصالح و خدمات",
    path: "/sales-style/barter/",
    h1: "تهاتر مصالح ساختمانی با ملک و پروژه",
    subtitle:
      "تهاتر در ساختمان فقط یک روش تسویه نیست؛ برای بسیاری از مصالح و خدمات پرهزینه، سازنده بخشی از تصمیم خرید را با انعطاف مالی، زمان تحویل و امکان معاوضه با ملک می‌سنجد.",
    shortAnswer:
      "تهاتر مصالح یا خدمات ساختمانی یعنی تأمین‌کننده بخشی از ارزش معامله را به جای نقد، با ملک، واحد، قدرالسهم یا توافق مالی مرحله‌ای دریافت می‌کند. این سبک در اقلام پرحجم و تصمیم‌های گران‌تر، مزیت رقابتی می‌سازد.",
    angle: "انعطاف مالی، کنترل ریسک و توافق قابل اجرا",
  },
};

function makeCategoryDescriptions(style: SalesStyleId) {
  return Object.fromEntries(
    CATEGORIES.filter((category) => !category.excludeFromPages).map((category) => {
      const description =
        style === "fast"
          ? `در ${category.faTitle}، فرصت‌های سریع وقتی ارزش دارند که نیاز پروژه روشن شده و تیم فروش باید زود تماس بگیرد، قیمت بدهد و پیگیری را از دست ندهد.`
          : style === "barter"
            ? `در ${category.faTitle}، ردیف‌های دارای تهاتر وقتی مهم‌اند که سازنده دنبال کاهش فشار نقدینگی یا توافق مالی منعطف باشد.`
            : `در ${category.faTitle}، فروش مشاوره‌ای زمانی مهم می‌شود که تصمیم خرید قبل از اجرا شکل می‌گیرد و فروشنده باید اعتماد، شواهد فنی و رابطه حرفه‌ای بسازد.`;

      return [category.slug, description];
    }),
  );
}

function makeStyleCopy(style: SalesStyleId): SalesStyleCopy {
  const meta = styleMeta[style];
  const alternatePath =
    style === "fast" ? "/sales-style/consultative/" : "/sales-style/fast/";

  return {
    path: meta.path,
    alternatePath,
    metadataTitle: `${meta.label} در ساختمان | پرشین‌سازه`,
    eyebrow: "نوع فروش",
    h1: meta.h1,
    subtitle: meta.subtitle,
    primaryCta: "درخواست دمو",
    secondaryCta: "پرش به دسته‌بندی‌ها",
    shortQuestion: `${meta.label} در پروژه‌های ساختمانی چیست؟`,
    shortAnswer: meta.shortAnswer,
    whatThisMeansTitle: `${meta.label} در عمل یعنی چه؟`,
    whatThisMeans: [
      {
        title: "ویژگی‌های این نوع فروش",
        items: [
          meta.angle,
          "زمان ورود فروشنده باید با مرحله ساخت هماهنگ باشد",
          "پیگیری در CRM باید بر اساس نقش مذاکره، خرید یا اجرا تنظیم شود",
        ],
      },
      {
        title: "خطای رایج",
        items: [
          "ارسال پیام عمومی بدون توجه به مرحله پروژه",
          "یکی فرض کردن زمان مذاکره و زمان خرید",
          "ثبت نکردن توافق و پیگیری بعدی بعد از تماس اول",
        ],
      },
    ],
    comparisonNote: {
      title: "مقایسه با سبک‌های دیگر",
      description:
        "نوع فروش را جدا از نام محصول ببینید؛ بعضی زیرگروه‌ها همزمان سریع، مشاوره‌ای یا تهاتری‌اند.",
      href: "/sales-style/",
    },
    tocTitle: `دسته‌های مرتبط با ${meta.label}`,
    tocDescription:
      "این فهرست از دیتاست سند جامع ساخته شده و فقط دسته‌هایی را نشان می‌دهد که حداقل یک زیرگروه مرتبط دارند.",
    categorySectionTitle: `زیرگروه‌های مناسب ${meta.label}`,
    subcategoryCardLabels: {
      buyTime: "زمان خرید",
      dual: "چندمدلی",
      parentLink: "صفحه زیرگروه",
    },
    playbookTitle: `پلی‌بوک اجرای ${meta.label}`,
    playbookDescription:
      "پلی‌بوک خوب، مرحله ساخت را به اقدام فروش تبدیل می‌کند؛ نه صرفاً به یک برچسب روی پروژه.",
    playbookCards: [
      {
        title: "تشخیص زمان ورود",
        hook: "اول مشخص کنید ردیف در مذاکره، خرید یا اجرا فعال است.",
        tips: [
          "مرحله فعلی پروژه را با stageTiming زیرگروه مقایسه کنید.",
          "برای خرید نزدیک، تماس کوتاه و پیشنهاد روشن بسازید.",
          "برای مذاکره زودهنگام، نمونه‌کار و شواهد اعتماد آماده کنید.",
        ],
      },
      {
        title: "پیگیری قابل گزارش",
        hook: "هر تماس باید به وضعیت بعدی در CRM وصل شود.",
        tips: [
          "دلیل تماس را با نام مرحله و زیرگروه ثبت کنید.",
          "زمان پیگیری بعدی را بعد از تماس اول مشخص کنید.",
          "اگر معامله تهاتری است، شرط مالی و ریسک اجرا را جدا بنویسید.",
        ],
      },
    ],
    timingDiagram: {
      title: `جایگاه ${meta.label} در چرخه پروژه`,
      description:
        "دیتاست جدید برای هر زیرگروه سه زمان جدا دارد: مذاکره، خرید و اجرا. این تفکیک همان لایه هوش زمانی پرشین‌سازه است.",
      steps: [
        { label: "مذاکره", text: "زمان ورود به گفت‌وگو، اعتمادسازی یا توافق مالی." },
        { label: "خرید", text: "زمان تصمیم تامین، قیمت‌دهی و بستن معامله." },
        { label: "اجرا", text: "زمان مصرف، نصب، تحویل یا کنترل کیفیت در پروژه." },
      ],
    },
    relatedStagesTitle: `مراحل ساخت مرتبط با ${meta.label}`,
    relatedStagesDescription:
      "این مرحله‌ها از زمان خرید زیرگروه‌های مرتبط استخراج شده‌اند.",
    faqTitle: `سوالات پرتکرار ${meta.label}`,
    faqItems: [
      {
        q: `چه زمانی ${meta.label} برای تیم فروش مهم می‌شود؟`,
        a: "وقتی مرحله پروژه با زمان مذاکره، خرید یا اجرای محصول شما هم‌پوشانی دارد و فروشنده می‌تواند اقدام مشخص انجام دهد.",
      },
      {
        q: "آیا یک زیرگروه می‌تواند چند نوع فروش داشته باشد؟",
        a: "بله. در دیتاست جدید هر زیرگروه می‌تواند چند برچسب مثل سریع، مشاوره‌ای، سفارشی، اجاره‌ای یا تهاتری داشته باشد.",
      },
      {
        q: "پرشین‌سازه این مدل را چطور عملی می‌کند؟",
        a: "با ترکیب دسته محصول، مرحله ساخت و مسیر پیگیری، پروژه مناسب‌تر را زودتر به تیم فروش نشان می‌دهد.",
      },
    ],
    ctaTitle: `${meta.label} را روی پروژه‌های واقعی تنظیم کنید`,
    ctaDescription:
      "در دمو، دسته، زیرگروه و زمان ورود تیم فروش را با بازار واقعی شما تطبیق می‌دهیم.",
    categoryDescriptions: makeCategoryDescriptions(style),
  };
}

export const SALES_STYLE_COPY: Record<SalesStyleId, SalesStyleCopy> = {
  fast: makeStyleCopy("fast"),
  consultative: makeStyleCopy("consultative"),
  barter: makeStyleCopy("barter"),
};

export function getSalesStyleMetaDescription(style: SalesStyleId) {
  const answer = SALES_STYLE_COPY[style].shortAnswer;

  return answer.length <= 155 ? answer : `${answer.slice(0, 154).trim()}…`;
}
