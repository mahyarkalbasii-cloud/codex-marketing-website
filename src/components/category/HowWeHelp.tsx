import { CategorySection } from "@/components/category/CategorySection";
import type {
  SaleMotionSummary,
  SaleTypeSplit,
} from "@/data/category-insights";
import type { Category, Stage, SubCategory } from "@/data/types";

function formatNames(items: SubCategory[], fallback: string) {
  const names = items.slice(0, 6).map((item) => item.faTitle);

  return names.length > 0 ? names.join("، ") : fallback;
}

function truncateText(text: string, limit = 145) {
  const normalized = text.trim().replace(/\s+/g, " ");

  if (normalized.length <= limit) {
    return normalized;
  }

  return `${normalized.slice(0, limit - 1).trim()}…`;
}

function getMotionDetail(saleMotion: SaleMotionSummary, split: SaleTypeSplit) {
  if (saleMotion.motion === "fast") {
    return `مسیر سریع با ${formatNames(split.fast, saleMotion.label)} باید به قیمت، موجودی، تماس و پیگیری کوتاه‌چرخه وصل شود.`;
  }

  if (saleMotion.motion === "consultative") {
    return `مسیر مشاوره‌ای با ${formatNames(split.consultative, saleMotion.label)} باید با توضیح فنی، اعتمادسازی و قدم بعدی روشن جلو برود.`;
  }

  return `مسیر ترکیبی یعنی ${formatNames(split.fast, "زیرگروه‌های سریع")} و ${formatNames(split.consultative, "زیرگروه‌های مشاوره‌ای")} باید با منطق فروش متفاوت پیگیری شوند.`;
}

export function HowWeHelp({
  category,
  saleMotion,
  split,
  stage,
}: {
  category: Category;
  saleMotion: SaleMotionSummary;
  split: SaleTypeSplit;
  stage?: Stage;
}) {
  const sampleSubcategories = formatNames(category.subcategories, category.faTitle);
  const stageLabel = stage?.faLabel ?? "مرحله خرید پرتکرار همین دسته";
  const adviceSource = category.subcategories.find((item) =>
    item.strategicAdvice.trim(),
  );
  const adviceSnippet = adviceSource
    ? `${adviceSource.faTitle}: ${truncateText(adviceSource.strategicAdvice)}`
    : `${category.faTitle} باید با مرحله ساخت، نوع محصول و وضعیت پیگیری خوانده شود.`;

  const items = [
    {
      title: `شناسایی پروژه برای ${category.faTitle}`,
      description: `پروژه‌هایی ارزش بررسی دارند که با زیرگروه‌هایی مثل ${sampleSubcategories} و نقش واقعی آن‌ها در پروژه هماهنگ باشند.`,
    },
    {
      title: `اولویت‌بندی در ${stageLabel}`,
      description: `وقتی ${stageLabel} در داده این دسته پررنگ است، تیم فروش باید قبل از رسیدن پروژه به این نقطه مسیر تماس و پیگیری را آماده کند.`,
    },
    {
      title: `پیگیری متناسب با ${saleMotion.label}`,
      description: getMotionDetail(saleMotion, split),
    },
    {
      title: `پیام و CRM برای ${adviceSource?.faTitle ?? category.faTitle}`,
      description: `متن تماس و قدم بعدی باید از خود زیرگروه بیاید؛ نمونه داده این صفحه: ${adviceSnippet}`,
    },
  ];

  return (
    <CategorySection>
      <h2 className="text-2xl font-black md:text-3xl">
        پرشین‌سازه چطور کمک می‌کند
      </h2>
      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <div key={item.title} className="category-card p-5">
            <span className="text-xs font-black text-muted-foreground">
              گام {index + 1}
            </span>
            <h3 className="mt-3 font-black leading-8">{item.title}</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </CategorySection>
  );
}
