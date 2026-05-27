import { CategorySection } from "@/components/category/CategorySection";
import { getStageSummary, type SalesStyleCategory } from "@/data/sales-style";
import { SALES_STYLE_LABELS, type SalesStyleCopy } from "@/data/sales-style-copy";

interface CategoryAccordionProps {
  copy: SalesStyleCopy;
  categories: SalesStyleCategory[];
}

export function CategoryAccordion({ copy, categories }: CategoryAccordionProps) {
  return (
    <div className="space-y-8">
      {categories.map(({ category, relevantSubs }, index) => (
        <CategorySection
          key={category.id}
          id={`cat-${category.id}`}
          className={index % 2 === 1 ? "bg-white/72" : undefined}
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="category-badge mb-3">
                {relevantSubs.length} {SALES_STYLE_LABELS.subcategoryCountSuffix}
              </span>
              <h2 className="text-2xl font-black md:text-3xl">
                {category.faTitle}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
                {copy.categoryDescriptions[category.slug]}
              </p>
            </div>
            <a
              href={`/suppliers/${category.slug}/`}
              className="category-badge shrink-0"
            >
              {SALES_STYLE_LABELS.categoryPageLink}
              <span aria-hidden="true">←</span>
            </a>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {relevantSubs.map((sub) => (
              <a
                key={sub.id}
                href={`/suppliers/${category.slug}/#sub-${sub.id}`}
                className="sales-style-sub-card"
              >
                <div className="ssc-head">
                  <h3 className="ssc-title">{sub.faTitle}</h3>
                  {sub.saleType === "both" ? (
                    <span className="ssc-badge">
                      {copy.subcategoryCardLabels.dual}
                    </span>
                  ) : null}
                </div>
                <p className="ssc-stage">{getStageSummary(sub.buyStages, 1)}</p>
                <span className="ssc-link">
                  {copy.subcategoryCardLabels.parentLink}
                  <span aria-hidden="true">←</span>
                </span>
              </a>
            ))}
          </div>
        </CategorySection>
      ))}
    </div>
  );
}
