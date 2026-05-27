import { CategorySection } from "@/components/category/CategorySection";

export interface SuppliersFAQItem {
  q: string;
  a: string;
}

export function FAQ({ items }: { items: SuppliersFAQItem[] }) {
  return (
    <CategorySection>
      <span className="category-badge mb-3">FAQ</span>
      <h2 className="text-2xl font-black md:text-3xl">سوالات پرتکرار</h2>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {items.map((item) => (
          <article key={item.q} className="category-card p-5">
            <h3 className="font-black leading-8">{item.q}</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.a}</p>
          </article>
        ))}
      </div>
    </CategorySection>
  );
}
