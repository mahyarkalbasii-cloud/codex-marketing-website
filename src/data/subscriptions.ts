export const subscriptionFeatureRows = [
  { key: "landArea", label: "متراژ زمین" },
  { key: "projectVisits", label: "بازدید پروژه‌ها" },
  { key: "suburbanCities", label: "شهرهای حومه" },
  { key: "smsPanel", label: "پنل تبلیغات و پیامک" },
  { key: "serviceLine", label: "سرشماره‌ی خدماتی پنل پیامک" },
  { key: "crm", label: "CRM فرایندهای فروش" },
  { key: "workshops", label: "کارگاه‌های آموزشی" },
] as const;

export type SubscriptionSlug = "bonyan" | "royan" | "taban" | "taban-plus";

export type SubscriptionFeatureKey =
  (typeof subscriptionFeatureRows)[number]["key"];

export type SubscriptionFeature = {
  key: SubscriptionFeatureKey;
  label: string;
  value: string;
  included: boolean;
};

type SubscriptionFeatureValue = {
  value: string;
  included: boolean;
};

export type Subscription = {
  slug: SubscriptionSlug;
  name: string;
  h1: string;
  tagline: string;
  description: string;
  idealFor: string;
  metaTitle: string;
  metaDescription: string;
  metrics: {
    projectsToAban: string;
    exclusiveProjects: string;
  };
  features: Record<SubscriptionFeatureKey, SubscriptionFeatureValue>;
};

export const subscriptions: Subscription[] = [
  {
    slug: "bonyan",
    name: "بنیان",
    h1: "اشتراک بنیان: پایه‌ی به‌صرفه برای شروع فروش",
    tagline: "پایه‌ی کار، به‌صرفه",
    description:
      "بنیان یعنی پایه؛ این اشتراک پایه‌ی حضور و فروش شما در بازار پروژه‌های ساختمانی است. در بنیان به پروژه‌های کمتری دسترسی دارید، اما کیفیت داده، CRM متصل به بانک اطلاعات، پنل پیامک و کارگاه‌های آموزشی فروش و مارکتینگ سر جای خودشان هستند. اگر تازه وارد بازار می‌شوید یا بودجه‌ی محدودتری دارید، بنیان نقطه‌ی شروع حرفه‌ای شما برای ساختن یک مسیر فروش منظم است.",
    idealFor:
      "بنیان برای تیم‌هایی مناسب است که می‌خواهند با هزینه‌ی کنترل‌شده وارد فروش پروژه‌محور شوند، فرایند پیگیری را بسازند و قبل از بزرگ کردن پوشش بازار، ریتم تماس و ارزیابی فرصت را یاد بگیرند.",
    metaTitle: "اشتراک بنیان برای شروع فروش پروژه‌محور",
    metaDescription:
      "اشتراک بنیان برای شروع اقتصادی فروش پروژه‌محور است؛ دسترسی پایه به پروژه‌ها، CRM، پیامک و آموزش فروش را در یک مسیر منظم می‌دهد.",
    metrics: {
      projectsToAban: "+۱۶٬۵۰۰",
      exclusiveProjects: "ندارد",
    },
    features: {
      landArea: { value: "تا ۳۰۰ متر", included: true },
      projectVisits: { value: "روزانه ۵۰ پروژه", included: true },
      suburbanCities: { value: "ندارد", included: false },
      smsPanel: {
        value: "بدون شارژ اولیه؛ شارژ جداگانه",
        included: true,
      },
      serviceLine: { value: "باید خریداری شود", included: false },
      crm: { value: "دارد", included: true },
      workshops: { value: "۲ بار، ۱۶ ساعت", included: true },
    },
  },
  {
    slug: "royan",
    name: "رویان",
    h1: "اشتراک رویان: دسترسی حرفه‌ای و به‌صرفه",
    tagline: "حرفه‌ای و به‌صرفه",
    description:
      "رویان از روییدن می‌آید؛ اشتراک رشد و پویایی برای تیمی که نمی‌خواهد از رقبا عقب بماند. با رویان، پروژه‌ها با پوشش گسترده‌تر و فرصت‌های انحصاری بیشتر در اختیار شماست. علاوه بر امکانات بنیان، سرشماره‌ی خدماتی، شارژ رایگان و کارگاه‌های آموزشی فروش کمک می‌کنند فرصت‌ها را سریع‌تر پیگیری کنید و همیشه یک قدم جلوتر بمانید.",
    idealFor:
      "رویان برای کسب‌وکارهایی مناسب است که از مرحله‌ی تست بازار عبور کرده‌اند و حالا می‌خواهند با هزینه‌ی منطقی، پروژه‌های بیشتری ببینند و پیگیری فروش را جدی‌تر کنند.",
    metaTitle: "اشتراک رویان برای رشد فروش ساختمانی",
    metaDescription:
      "اشتراک رویان برای تیم‌هایی است که رشد سریع‌تر می‌خواهند؛ پروژه‌های بیشتر، سرشماره خدماتی رایگان و CRM فروش را کنار هم می‌گذارد.",
    metrics: {
      projectsToAban: "+۲۴٬۵۰۰",
      exclusiveProjects: "+۷٬۵۰۰",
    },
    features: {
      landArea: { value: "تا ۵۰۰ متر", included: true },
      projectVisits: { value: "هفتگی ۵۰۰ پروژه", included: true },
      suburbanCities: { value: "ندارد", included: false },
      smsPanel: {
        value: "بدون شارژ اولیه؛ شارژ جداگانه",
        included: true,
      },
      serviceLine: {
        value: "۱۰ روز رایگان در اشتراک یک‌ساله",
        included: true,
      },
      crm: { value: "دارد", included: true },
      workshops: { value: "۲ بار، ۱۶ ساعت", included: true },
    },
  },
  {
    slug: "taban",
    name: "تابان",
    h1: "اشتراک تابان: پروژه‌های خاص و انحصاری",
    tagline: "برگ برنده: پروژه‌های خاص و بیشتر",
    description:
      "پیشرو که باشید، تابان می‌شوید؛ می‌درخشید و مسیر را برای دیگران هم روشن می‌کنید. تابان همه‌ی امکانات اشتراک‌های قبلی را دارد و یک مزیت جدی اضافه می‌کند: دسترسی به پروژه‌های خاص و انحصاری. پوشش شهرهای حومه، اطلاعات بیشتر و کارگاه‌های آموزشی گسترده‌تر به تیم فروش کمک می‌کند با دردسر کمتر، فرصت‌های بزرگ‌تری را پیگیری کند.",
    idealFor:
      "تابان برای تیم‌هایی مناسب است که بازار اصلی‌شان پروژه‌های بزرگ‌تر و خاص‌تر است و می‌خواهند علاوه بر تهران، فرصت‌های حومه را هم وارد مسیر فروش کنند.",
    metaTitle: "اشتراک تابان برای پروژه‌های خاص",
    metaDescription:
      "اشتراک تابان برای فروش جدی‌تر در پروژه‌های خاص است؛ پوشش حومه، شارژ پیامک رایگان و کارگاه‌های بیشتر را یکجا فراهم می‌کند.",
    metrics: {
      projectsToAban: "+۲۶٬۵۰۰",
      exclusiveProjects: "+۲٬۰۰۰",
    },
    features: {
      landArea: { value: "تا ۷۰۰ متر", included: true },
      projectVisits: { value: "هفتگی ۵۰۰ پروژه", included: true },
      suburbanCities: { value: "دارد", included: true },
      smsPanel: {
        value: "۱۵۰۰ شارژ رایگان در اشتراک یک‌ساله",
        included: true,
      },
      serviceLine: {
        value: "۲۰ روز رایگان در اشتراک یک‌ساله",
        included: true,
      },
      crm: { value: "دارد", included: true },
      workshops: { value: "۴ بار، ۳۲ ساعت", included: true },
    },
  },
  {
    slug: "taban-plus",
    name: "تابان پلاس",
    h1: "اشتراک تابان پلاس: بازار در دستان شما",
    tagline: "بازار در دستان شما",
    description:
      "تابان پلاس یعنی دسترسی بی‌مرز و نهایت تسلط برای تیم‌هایی که می‌خواهند نبض بازار را در دست بگیرند. این اشتراک بیشترین تعداد پروژه، بالاترین متراژها، فرصت‌های خاص‌تر و مشاوره‌ی اختصاصی فروش و مارکتینگ را کنار هم می‌گذارد. با تابان پلاس می‌توانید فروشنده‌ای به وسعت تهران و حومه باشید و مشتری‌های بزرگ را هدفمندتر جذب کنید.",
    idealFor:
      "تابان پلاس برای تیم‌های فروش جاه‌طلب، چندمنطقه‌ای و جدی مناسب است؛ تیم‌هایی که محدودیت متراژ و پوشش برایشان مانع رشد است و می‌خواهند بازار را فعالانه بسازند.",
    metaTitle: "اشتراک تابان پلاس برای تسلط بر بازار",
    metaDescription:
      "اشتراک تابان پلاس بیشترین پوشش پروژه و دسترسی بدون محدودیت متراژ را برای تیم‌های فروش جاه‌طلب و چندمنطقه‌ای فراهم می‌کند.",
    metrics: {
      projectsToAban: "+۳۰٬۰۰۰",
      exclusiveProjects: "+۲٬۵۰۰",
    },
    features: {
      landArea: { value: "بدون محدودیت", included: true },
      projectVisits: { value: "هفتگی ۵۰۰ پروژه", included: true },
      suburbanCities: { value: "دارد", included: true },
      smsPanel: {
        value: "۳۰۰۰ شارژ رایگان در اشتراک یک‌ساله",
        included: true,
      },
      serviceLine: {
        value: "۳۰ روز رایگان در اشتراک یک‌ساله",
        included: true,
      },
      crm: { value: "دارد", included: true },
      workshops: { value: "۸ بار، ۶۴ ساعت", included: true },
    },
  },
];

export const subscriptionPlanOptions = subscriptions.map(({ name, slug }) => ({
  name,
  slug,
}));

export function getSubscriptionBySlug(slug: string) {
  return subscriptions.find((subscription) => subscription.slug === slug);
}

export function getSubscriptionFeatures(
  subscription: Subscription,
): SubscriptionFeature[] {
  return subscriptionFeatureRows.map((row) => ({
    ...row,
    ...subscription.features[row.key],
  }));
}
