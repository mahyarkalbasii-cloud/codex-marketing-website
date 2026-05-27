import { CategorySection } from "@/components/category/CategorySection";
import type { SalesStyleCopy } from "@/data/sales-style-copy";

export function WhatThisMeans({ copy }: { copy: SalesStyleCopy }) {
  return (
    <CategorySection>
      <h2 className="text-2xl font-black md:text-3xl">{copy.whatThisMeansTitle}</h2>
      <div className="mt-7 grid gap-4 md:grid-cols-3">
        {copy.whatThisMeans.map((column) => (
          <article key={column.title} className="category-card p-5">
            <h3 className="font-black leading-8">{column.title}</h3>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-muted-foreground">
              {column.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </CategorySection>
  );
}
