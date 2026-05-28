import { CATEGORIES } from "./categories";
import { STAGES } from "./stages";
import {
  getMostCommonBuyStage,
  getSaleMotionSummary,
  getSaleTypeSplit,
} from "./category-insights";
import type { Category, Stage, StageId, SubCategory } from "./types";

export interface CategoryPageContent {
  heroSubtitle: string;
  shortAnswerQuestion: string;
  shortAnswer: string;
  timingInsight: string;
  faqItems: { q: string; a: string }[];
  marketStat?: string;
}

export interface CategoryMarketStatSlot {
  marketStat?: string;
}

// TODO: Fill these slots only with verified PersianSaze database facts.
export const CATEGORY_MARKET_STATS = Object.fromEntries(
  CATEGORIES.filter((category) => !category.excludeFromPages).map((category) => [
    category.slug,
    {},
  ]),
) as Record<string, CategoryMarketStatSlot>;

const stageById = new Map(STAGES.map((stage) => [stage.id, stage]));
const stageOrder = new Map(STAGES.map((stage, index) => [stage.id, index]));

function uniqueItems<T>(items: T[]): T[] {
  return Array.from(new Set(items));
}

function formatList(items: string[], fallback: string) {
  const cleanItems = uniqueItems(items.filter(Boolean));

  if (cleanItems.length === 0) {
    return fallback;
  }

  return cleanItems.join("، ");
}

function truncateText(text: string, limit = 185) {
  const normalized = text.trim().replace(/\s+/g, " ");

  if (normalized.length <= limit) {
    return normalized;
  }

  return `${normalized.slice(0, limit - 1).trim()}…`;
}

function getTopActiveStages(category: Category, limit = 2): Stage[] {
  const counts = new Map<StageId, number>();

  for (const subcategory of category.subcategories) {
    for (const stageId of [
      ...subcategory.negotiationStages,
      ...subcategory.buyStages,
      ...subcategory.executionStages,
    ]) {
      counts.set(stageId, (counts.get(stageId) ?? 0) + 1);
    }
  }

  return [...counts.entries()]
    .sort(([leftId, leftCount], [rightId, rightCount]) => {
      if (rightCount !== leftCount) {
        return rightCount - leftCount;
      }

      return (stageOrder.get(leftId) ?? 999) - (stageOrder.get(rightId) ?? 999);
    })
    .slice(0, limit)
    .map(([stageId]) => stageById.get(stageId))
    .filter((stage): stage is Stage => Boolean(stage));
}

function getBuyStageSubcategories(category: Category, stage?: Stage, limit = 4) {
  if (!stage) {
    return [];
  }

  return category.subcategories
    .filter((subcategory) => subcategory.buyStages.includes(stage.id))
    .slice(0, limit);
}

function getSubcategoryNames(items: SubCategory[], limit = 3) {
  return items.slice(0, limit).map((subcategory) => subcategory.faTitle);
}

function getMotionSentence(
  category: Category,
  split: ReturnType<typeof getSaleTypeSplit>,
  topStages: Stage[],
) {
  const saleMotion = getSaleMotionSummary(category);
  const fastNames = getSubcategoryNames(split.fast);
  const consultativeNames = getSubcategoryNames(split.consultative);
  const stageText = formatList(
    topStages.map((stage) => stage.faLabel),
    "مرحله‌های فعال همین دسته",
  );

  if (saleMotion.motion === "fast") {
    return `در ${category.faTitle}، زیرگروه‌هایی مثل ${formatList(
      fastNames,
      category.faTitle,
    )} به پاسخ سریع، قیمت روشن و پیگیری نزدیک به زمان اجرا وابسته‌اند؛ این رفتار بیشتر در ${stageText} دیده می‌شود.`;
  }

  if (saleMotion.motion === "consultative") {
    return `در ${category.faTitle}، تصمیم زیرگروه‌هایی مثل ${formatList(
      consultativeNames,
      category.faTitle,
    )} معمولاً پیش از خرید قطعی شکل می‌گیرد و فروشنده باید در ${stageText} با زمینه فنی وارد گفت‌وگو شود.`;
  }

  return `در ${category.faTitle}، ${formatList(
    fastNames,
    "زیرگروه‌های سریع",
  )} به اقدام نزدیک‌ترند و ${formatList(
    consultativeNames,
    "زیرگروه‌های مشاوره‌ای",
  )} به مذاکره مرحله‌ای نیاز دارند؛ این ترکیب باید در ${stageText} جداگانه خوانده شود.`;
}

export function getCategoryPageContent(category: Category): CategoryPageContent {
  const split = getSaleTypeSplit(category);
  const fastNames = getSubcategoryNames(split.fast);
  const consultativeNames = getSubcategoryNames(split.consultative);
  const topStages = getTopActiveStages(category);
  const topStageLabels = topStages.map((stage) => stage.faLabel);
  const mostCommonBuyStage = getMostCommonBuyStage(category);
  const allSubcategoryNames = getSubcategoryNames(
    category.subcategories,
    category.subcategories.length,
  );
  const buyStageSubcategories = getBuyStageSubcategories(
    category,
    mostCommonBuyStage,
  );
  const buyStageNames = getSubcategoryNames(buyStageSubcategories, 4);
  const adviceExamples = category.subcategories
    .filter((subcategory) => subcategory.strategicAdvice.trim().length > 0)
    .slice(0, 2)
    .map((subcategory) => `${subcategory.faTitle}: ${truncateText(subcategory.strategicAdvice, 120)}`);
  const marketStat = CATEGORY_MARKET_STATS[category.slug]?.marketStat;

  const fastPhrase =
    fastNames.length > 0
      ? `در مسیر سریع، زیرگروه‌هایی مثل ${formatList(fastNames, "")} زودتر به قیمت، موجودی یا اجرای فوری وابسته می‌شوند.`
      : "در این دسته، مسیر سریع سهم کمتری دارد و تصمیم‌ها بیشتر با بررسی و مذاکره جلو می‌روند.";
  const consultativePhrase =
    consultativeNames.length > 0
      ? `در مسیر مشاوره‌ای، ${formatList(consultativeNames, "")} به گفت‌وگوی فنی و اعتمادسازی پیش از خرید نیاز دارند.`
      : "زیرگروه‌های این دسته کمتر به مذاکره بلندتر وابسته‌اند و وزن تصمیم به سمت اقدام نزدیک‌تر به خرید می‌رود.";
  const stagePhrase =
    topStageLabels.length > 0
      ? `مرحله‌های پررنگ برای این دسته ${formatList(topStageLabels, "")} هستند.`
      : "زمان‌بندی این دسته باید در سطح هر زیرگروه جداگانه بررسی شود.";

  return {
    heroSubtitle: `${getMotionSentence(category, split, topStages)} نمونه‌های واقعی این صفحه از داده زیرگروه‌هایی مثل ${formatList(
      [...fastNames, ...consultativeNames].slice(0, 4),
      category.faTitle,
    )} ساخته شده است.`,
    shortAnswerQuestion: `چه زمانی پرشین‌سازه برای فروشندگان ${category.faTitle} مفید است؟`,
    shortAnswer: `${fastPhrase} ${consultativePhrase} ${stagePhrase} زیرگروه‌های مبنای این صفحه ${formatList(
      allSubcategoryNames,
      category.faTitle,
    )} هستند.`,
    timingInsight: mostCommonBuyStage
      ? `در داده زیرگروه‌های ${category.faTitle}، مرحله «${mostCommonBuyStage.faLabel}» پرتکرارترین نقطه خرید است. زیرگروه‌هایی مثل ${formatList(
          buyStageNames,
          category.faTitle,
        )} در این مرحله باید از قبل در مسیر پیگیری باشند، چون تصمیم فروش به نقش واقعی همان زیرگروه در پروژه وابسته است.`
      : `برای ${category.faTitle} باید زمان خرید هر زیرگروه جداگانه بررسی شود؛ همه فرصت‌ها با یک تقویم فروش جلو نمی‌روند.`,
    faqItems: [
      {
        q: `در ${category.faTitle} کدام زیرگروه‌ها سریع‌تر به اقدام فروش نزدیک می‌شوند؟`,
        a:
          fastNames.length > 0
            ? `زیرگروه‌هایی مثل ${formatList(fastNames, "")} معمولاً به پاسخ سریع‌تر تیم فروش، قیمت‌دهی روشن و پیگیری کوتاه‌چرخه حساس‌ترند.`
            : `در این دسته، زیرگروه سریع مشخصی غالب نیست و بیشتر مسیرها با بررسی فنی و مذاکره جلو می‌روند.`,
      },
      {
        q: `برای ${category.faTitle} کدام مرحله‌های ساخت باید بیشتر رصد شوند؟`,
        a:
          topStageLabels.length > 0
            ? `در داده این دسته، ${formatList(topStageLabels, "")} بیشتر تکرار می‌شوند. این یعنی تیم فروش باید قبل از رسیدن پروژه به این نقاط، زیرگروه مناسب خود را مشخص کرده باشد.`
            : `مرحله‌ها در این دسته پراکنده‌اند و باید بر اساس زیرگروه محصول یا خدمت بررسی شوند.`,
      },
      {
        q: `کدام بخش‌های ${category.faTitle} به فروش مشاوره‌ای نزدیک‌ترند؟`,
        a:
          consultativeNames.length > 0
            ? `مواردی مثل ${formatList(consultativeNames, "")} معمولاً به توضیح فنی، نمونه‌کار و پیگیری مرحله‌ای نیاز دارند.`
            : `در این دسته، وزن فروش مشاوره‌ای کمتر است و سرعت پاسخ و امکان تأمین نقش پررنگ‌تری دارد.`,
      },
      {
        q: `در صفحه ${category.faTitle} از چه داده‌ای برای تصمیم فروش استفاده شده است؟`,
        a:
          adviceExamples.length > 0
            ? `این صفحه از داده زیرگروه‌ها و توصیه‌های واقعی همان‌ها ساخته شده است؛ برای نمونه ${formatList(adviceExamples, "")}.`
            : `این صفحه از saleType و مرحله‌های مذاکره، خرید و اجرای زیرگروه‌های همین دسته ساخته شده است.`,
      },
    ],
    marketStat,
  };
}
