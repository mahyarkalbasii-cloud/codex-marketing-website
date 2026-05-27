import { CategorySection } from "@/components/category/CategorySection";

interface FAQProps {
  items: { q: string; a: string }[];
}

export function FAQ({ items }: FAQProps) {
  return (
    <CategorySection>
      <span className="category-badge mb-3">
        سوالات پرتکرار
      </span>
      <h2 className="text-2xl font-black md:text-3xl">FAQ</h2>
      <div className="mt-6 grid gap-3">
        {items.map((item) => (
          <details
            key={item.q}
            className="category-card group p-5"
          >
            <summary className="cursor-pointer list-none font-black leading-8 marker:hidden">
              <span>{item.q}</span>
            </summary>
            <p className="mt-3 leading-8 text-muted-foreground">{item.a}</p>
          </details>
        ))}
      </div>
    </CategorySection>
  );
}
