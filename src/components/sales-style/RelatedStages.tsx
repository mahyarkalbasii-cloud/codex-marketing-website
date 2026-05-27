import { CategorySection } from "@/components/category/CategorySection";
import type { Stage } from "@/data/types";
import { getStageHref } from "@/lib/stage-routes";
import type { SalesStyleCopy } from "@/data/sales-style-copy";

export function RelatedStages({
  copy,
  stages,
}: {
  copy: SalesStyleCopy;
  stages: Stage[];
}) {
  if (stages.length === 0) {
    return null;
  }

  return (
    <CategorySection>
      <h2 className="text-2xl font-black md:text-3xl">
        {copy.relatedStagesTitle}
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
        {copy.relatedStagesDescription}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        {stages.map((stage) => (
          <a key={stage.id} href={getStageHref(stage)} className="category-badge">
            {stage.faLabel}
          </a>
        ))}
      </div>
    </CategorySection>
  );
}
