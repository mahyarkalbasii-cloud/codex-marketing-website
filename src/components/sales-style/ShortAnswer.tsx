import { CategorySection } from "@/components/category/CategorySection";
import { SALES_STYLE_LABELS, type SalesStyleCopy } from "@/data/sales-style-copy";

export function ShortAnswer({ copy }: { copy: SalesStyleCopy }) {
  return (
    <CategorySection>
      <section itemScope itemType="https://schema.org/Question">
        <span className="category-badge mb-4">
          {SALES_STYLE_LABELS.shortAnswerBadge}
        </span>
        <h2 itemProp="name" className="text-2xl font-black leading-10 md:text-3xl">
          {copy.shortQuestion}
        </h2>
        <div
          itemProp="acceptedAnswer"
          itemScope
          itemType="https://schema.org/Answer"
          className="category-card mt-5 p-5"
        >
          <p itemProp="text" className="max-w-4xl leading-8 text-muted-foreground">
            {copy.shortAnswer}
          </p>
        </div>
      </section>
    </CategorySection>
  );
}
