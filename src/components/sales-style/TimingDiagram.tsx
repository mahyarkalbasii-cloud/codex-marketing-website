import { CategorySection } from "@/components/category/CategorySection";
import type { SalesStyleCopy } from "@/data/sales-style-copy";

export function TimingDiagram({ copy }: { copy: SalesStyleCopy }) {
  return (
    <CategorySection>
      <h2 className="text-2xl font-black md:text-3xl">
        {copy.timingDiagram.title}
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
        {copy.timingDiagram.description}
      </p>
      <div className="mt-7 grid gap-3 md:grid-cols-4">
        {copy.timingDiagram.steps.map((step, index) => (
          <article key={step.label} className="category-card p-5">
            <span className="text-xs font-black text-muted-foreground">
              {index + 1}
            </span>
            <h3 className="mt-2 font-black leading-8">{step.label}</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              {step.text}
            </p>
          </article>
        ))}
      </div>
    </CategorySection>
  );
}
