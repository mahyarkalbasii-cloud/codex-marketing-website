import { CategorySection } from "@/components/category/CategorySection";
import type { SalesStyleCopy } from "@/data/sales-style-copy";

export function PlaybookCards({ copy }: { copy: SalesStyleCopy }) {
  return (
    <CategorySection>
      <h2 className="text-2xl font-black md:text-3xl">{copy.playbookTitle}</h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
        {copy.playbookDescription}
      </p>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {copy.playbookCards.map((card) => (
          <article key={card.title} className="category-card p-5">
            <h3 className="font-black leading-8">{card.title}</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              {card.hook}
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-muted-foreground">
              {card.tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </CategorySection>
  );
}
