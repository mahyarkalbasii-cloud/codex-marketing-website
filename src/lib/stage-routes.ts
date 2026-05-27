import type { Stage } from "@/data/types";

export function getStageHref(stage: Stage) {
  return `/stages/${stage.slug}/`;
}
