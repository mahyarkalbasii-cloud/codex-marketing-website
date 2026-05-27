import type { SalesStyleCategory } from "@/data/sales-style";
import type { SalesStyleCopy } from "@/data/sales-style-copy";

export function StickyTOC({
  copy,
  categories,
}: {
  copy: SalesStyleCopy;
  categories: SalesStyleCategory[];
}) {
  return (
    <nav id="sales-style-categories" className="sales-style-toc p-3">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        <div className="shrink-0 px-2">
          <h2 className="text-sm font-black">{copy.tocTitle}</h2>
          <p className="mt-1 max-w-xl text-xs leading-6 text-muted-foreground">
            {copy.tocDescription}
          </p>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 lg:pb-0">
          {categories.map(({ category, relevantSubs }) => (
            <a
              key={category.id}
              href={`#cat-${category.id}`}
              className="category-badge shrink-0 whitespace-nowrap"
            >
              {category.faTitle}
              <span className="text-[10px] text-muted-foreground">
                {relevantSubs.length}
              </span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
