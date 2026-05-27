import { CategorySection } from "@/components/category/CategorySection";
import { SALES_STYLE_LABELS, type SalesStyleCopy } from "@/data/sales-style-copy";

export function FAQ({ copy }: { copy: SalesStyleCopy }) {
  return (
    <CategorySection>
      <span className="category-badge mb-3">{SALES_STYLE_LABELS.faqBadge}</span>
      <h2 className="text-2xl font-black md:text-3xl">{copy.faqTitle}</h2>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {copy.faqItems.map((item) => (
          <details key={item.q} className="category-card p-5">
            <summary className="cursor-pointer list-none font-black leading-8">
              {item.q}
            </summary>
            <p className="mt-3 text-sm leading-8 text-muted-foreground">{item.a}</p>
          </details>
        ))}
      </div>
    </CategorySection>
  );
}
