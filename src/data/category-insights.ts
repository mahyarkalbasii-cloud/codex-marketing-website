import { STAGES } from "./stages";
import type { Category, SaleType, Stage, StageId, SubCategory } from "./types";

export type CategorySaleMotion = "fast" | "consultative" | "mixed";

export interface SaleMotionSummary {
  motion: CategorySaleMotion;
  label: string;
  description: string;
  fastScore: number;
  consultativeScore: number;
}

export interface SaleTypeSplit {
  fast: SubCategory[];
  consultative: SubCategory[];
}

const stageOrder = new Map(STAGES.map((stage, index) => [stage.id, index]));

export const SALE_PATHS: Record<
  Exclude<CategorySaleMotion, "mixed">,
  { label: string; title: string; description: string; href: string }
> = {
  fast: {
    label: "فروش سریع",
    title: "فروش سریع و تراکنشی",
    description:
      "برای زیرگروه‌هایی که فاصله نیاز تا خرید کوتاه‌تر است و سرعت تماس، قیمت‌دهی و پیگیری مستقیم اهمیت بیشتری دارد.",
    href: "/sales-style/fast/",
  },
  consultative: {
    label: "فروش مشاوره‌ای",
    title: "فروش مشاوره‌ای",
    description:
      "برای زیرگروه‌هایی که تصمیم خرید زودتر شکل می‌گیرد و فروشنده باید اعتماد، شواهد فنی و رابطه حرفه‌ای بسازد.",
    href: "/sales-style/consultative/",
  },
};

export function getVisibleCategories(categories: Category[] = []): Category[] {
  return categories.filter((category) => !category.excludeFromPages);
}

export function getSaleTypeSplit(category: Category): SaleTypeSplit {
  return {
    fast: category.subcategories.filter(
      (subcategory) =>
        subcategory.saleType === "fast" || subcategory.saleType === "both",
    ),
    consultative: category.subcategories.filter(
      (subcategory) =>
        subcategory.saleType === "consultative" ||
        subcategory.saleType === "both",
    ),
  };
}

export function getSaleMotionSummary(category: Category): SaleMotionSummary {
  let fastScore = 0;
  let consultativeScore = 0;

  for (const subcategory of category.subcategories) {
    if (subcategory.saleType === "fast") {
      fastScore += 1;
    }

    if (subcategory.saleType === "consultative") {
      consultativeScore += 1;
    }

    if (subcategory.saleType === "both") {
      fastScore += 0.5;
      consultativeScore += 0.5;
    }
  }

  const total = fastScore + consultativeScore;
  const leadingScore = Math.max(fastScore, consultativeScore);
  const motion: CategorySaleMotion =
    total === 0 || leadingScore / total < 0.65
      ? "mixed"
      : fastScore > consultativeScore
        ? "fast"
        : "consultative";

  if (motion === "fast") {
    return {
      motion,
      label: "فروش سریع",
      description: "غلبه با فرصت‌هایی است که نیازمند تماس و پیگیری سریع‌اند.",
      fastScore,
      consultativeScore,
    };
  }

  if (motion === "consultative") {
    return {
      motion,
      label: "فروش مشاوره‌ای",
      description: "غلبه با فرصت‌هایی است که قبل از خرید به مذاکره و اعتمادسازی نیاز دارند.",
      fastScore,
      consultativeScore,
    };
  }

  return {
    motion,
    label: "فروش ترکیبی",
    description: "این دسته هم فرصت‌های سریع دارد و هم مسیرهای مشاوره‌ای بلندمدت.",
    fastScore,
    consultativeScore,
  };
}

export function getMostCommonBuyStage(category: Category): Stage | undefined {
  const counts = new Map<StageId, number>();

  for (const subcategory of category.subcategories) {
    for (const stageId of subcategory.buyStages) {
      counts.set(stageId, (counts.get(stageId) ?? 0) + 1);
    }
  }

  const [stageId] =
    [...counts.entries()].sort(([leftId, leftCount], [rightId, rightCount]) => {
      if (rightCount !== leftCount) {
        return rightCount - leftCount;
      }

      return (stageOrder.get(leftId) ?? 999) - (stageOrder.get(rightId) ?? 999);
    })[0] ?? [];

  return STAGES.find((stage) => stage.id === stageId);
}

export function getRelatedBuyStages(category: Category): Stage[] {
  const stageIds = new Set<StageId>();

  for (const subcategory of category.subcategories) {
    for (const stageId of subcategory.buyStages) {
      if (stageId !== "pre-construction") {
        stageIds.add(stageId);
      }
    }
  }

  return STAGES.filter((stage) => stageIds.has(stage.id));
}

export function getStrategicAdviceHighlights(
  category: Category,
  limit = 5,
): SubCategory[] {
  return [...category.subcategories]
    .filter((subcategory) => subcategory.strategicAdvice.trim().length > 0)
    .sort(
      (left, right) =>
        right.strategicAdvice.length - left.strategicAdvice.length ||
        left.id - right.id,
    )
    .slice(0, limit);
}

export function getGenericFaqItems(category: Category): { q: string; a: string }[] {
  return [
    {
      q: `پرشین‌سازه برای فروشندگان ${category.faTitle} چه کمکی می‌کند؟`,
      a: `کمک می‌کند پروژه‌های فعال را بر اساس مرحله ساخت، تناسب با زیرگروه‌های ${category.faTitle} و زمان مناسب پیگیری پیدا و اولویت‌بندی کنید.`,
    },
    {
      q: `آیا داده مرحله ساخت برای فروش ${category.faTitle} کافی است؟`,
      a: "مرحله ساخت نقطه شروع تصمیم‌گیری است؛ نتیجه بهتر وقتی ساخته می‌شود که مرحله پروژه با نوع محصول، کیفیت تماس، سابقه برند و پیگیری منظم در CRM ترکیب شود.",
    },
  ];
}

export function getFaqItemsForCategory(
  category: Category,
  categorySpecificItems: { q: string; a: string }[],
) {
  return [...getGenericFaqItems(category), ...categorySpecificItems].slice(0, 6);
}

export function getSaleTypeLabel(saleType: SaleType | null) {
  if (saleType === "fast") {
    return "سریع";
  }

  if (saleType === "consultative") {
    return "مشاوره‌ای";
  }

  if (saleType === "both") {
    return "دوگانه";
  }

  return "بدون دسته فروش";
}
