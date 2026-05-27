import { CategorySection } from "@/components/category/CategorySection";
import type { SubCategory } from "@/data/types";

interface StrategicAdviceProps {
  items: SubCategory[];
}

export function StrategicAdvice({ items }: StrategicAdviceProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <CategorySection>
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="category-badge mb-3">
            بینش فروش
          </span>
          <h2 className="text-2xl font-black md:text-3xl">
            نکات کلیدی برای فروشندگان این دسته
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
          چند نکته عملی برای اینکه گفتگو با سازنده دقیق‌تر و قانع‌کننده‌تر شروع شود.
        </p>
      </div>

      <div className="mt-7 flex snap-x gap-4 overflow-x-auto pb-2">
        {items.map((item) => (
          <article
            key={item.id}
            className="category-card min-w-[min(21rem,85vw)] snap-start p-5 md:min-w-[24rem]"
          >
            <h3 className="font-black leading-8">{item.faTitle}</h3>
            <p className="mt-3 text-sm leading-8 text-muted-foreground">
              {item.strategicAdvice}
            </p>
          </article>
        ))}
      </div>
    </CategorySection>
  );
}
