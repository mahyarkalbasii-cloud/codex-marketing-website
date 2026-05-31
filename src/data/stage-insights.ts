import { CATEGORIES } from "./categories";
import { STAGES } from "./stages";
import type { Category, Stage, StageId, SubCategory } from "./types";

export type MainStageId = StageId;
export type StageRole = "negotiation" | "buy" | "execution";
export type DominantSaleStyle = "fast" | "consultative" | "mixed";

export interface ActiveStageSubcategory {
  subcategory: SubCategory;
  parent: Category;
  roles: StageRole[];
}

export interface ActiveStageParentGroup {
  parent: Category;
  subcategories: ActiveStageSubcategory[];
}

const rolePriority: Record<StageRole, number> = {
  buy: 0,
  execution: 1,
  negotiation: 2,
};

export const STAGE_ROLE_LABELS: Record<StageRole, string> = {
  negotiation: "مذاکره",
  buy: "خرید",
  execution: "اجرا",
};

export const STAGE_ROUTE_ALIASES: Record<string, MainStageId> = {
  "design-permit": "pre-construction",
  "demolition-excavation": "demolition",
  masonry: "wall-building",
  installations: "plaster",
  mep: "plaster",
  "final-work": "completion",
};

export const TOTAL_SUBCATEGORY_COUNT = CATEGORIES.reduce(
  (total, category) => total + category.subcategories.length,
  0,
);

export function getMainStages() {
  return STAGES.filter((stage): stage is Stage & { id: MainStageId } => stage.isMain);
}

export function getStageByRouteSlug(slug: string) {
  const mainStages = getMainStages();
  const aliasId = STAGE_ROUTE_ALIASES[slug];
  const stage = aliasId
    ? mainStages.find((item) => item.id === aliasId)
    : mainStages.find((item) => item.slug === slug);

  return {
    stage,
    isAlias: Boolean(aliasId),
  };
}

export function getStageStaticParams() {
  return getMainStages().map((stage) => ({ stageSlug: stage.slug }));
}

export function getActiveSubcategoriesForStage(stageId: StageId) {
  return CATEGORIES.filter((category) => !category.excludeFromPages)
    .flatMap((category) =>
      category.subcategories.map((subcategory): ActiveStageSubcategory | null => {
        const roles: StageRole[] = [];

        if (subcategory.negotiationStages.includes(stageId)) roles.push("negotiation");
        if (subcategory.buyStages.includes(stageId)) roles.push("buy");
        if (subcategory.executionStages.includes(stageId)) roles.push("execution");

        if (roles.length === 0) {
          return null;
        }

        return {
          parent: category,
          roles: roles.sort((a, b) => rolePriority[a] - rolePriority[b]),
          subcategory,
        };
      }),
    )
    .filter((item): item is ActiveStageSubcategory => Boolean(item))
    .sort((a, b) => {
      const roleDifference = rolePriority[a.roles[0]] - rolePriority[b.roles[0]];

      if (roleDifference !== 0) return roleDifference;

      return a.subcategory.faTitle.localeCompare(b.subcategory.faTitle, "fa");
    });
}

export function getActiveParentGroupsForStage(stageId: StageId) {
  const groups = new Map<number, ActiveStageParentGroup>();

  getActiveSubcategoriesForStage(stageId).forEach((item) => {
    const existing = groups.get(item.parent.id);

    if (existing) {
      existing.subcategories.push(item);
      return;
    }

    groups.set(item.parent.id, {
      parent: item.parent,
      subcategories: [item],
    });
  });

  return Array.from(groups.values()).sort((a, b) => {
    const countDifference = b.subcategories.length - a.subcategories.length;

    if (countDifference !== 0) return countDifference;

    return a.parent.faTitle.localeCompare(b.parent.faTitle, "fa");
  });
}

export function getDominantSaleStyleForStage(items: ActiveStageSubcategory[]) {
  const counts = items.reduce(
    (acc, item) => {
      if (item.subcategory.saleType === "fast") acc.fast += 1;
      else if (item.subcategory.saleType === "consultative") acc.consultative += 1;
      else if (item.subcategory.saleType === "both") acc.both += 1;
      else if (
        item.subcategory.salesTypes.some((type) =>
          ["engineering", "custom", "rental", "barter"].includes(type),
        )
      ) {
        acc.consultative += 1;
      }

      return acc;
    },
    { both: 0, consultative: 0, fast: 0 },
  );
  const total = counts.fast + counts.consultative + counts.both;
  const directDifference = Math.abs(counts.fast - counts.consultative);
  const mixedThreshold = Math.max(4, Math.round(total * 0.2));
  const style: DominantSaleStyle =
    total === 0 || counts.both >= mixedThreshold || directDifference <= mixedThreshold
      ? "mixed"
      : counts.fast > counts.consultative
        ? "fast"
        : "consultative";

  return {
    consultativeCount: counts.consultative + counts.both,
    fastCount: counts.fast + counts.both,
    style,
    total,
  };
}

export function getRelatedStages(stageId: MainStageId) {
  const adjacentStages = getAdjacentStages(stageId);

  return [adjacentStages.previous, adjacentStages.next].filter(
    (stage): stage is Stage & { id: MainStageId } => Boolean(stage),
  );
}

export function getAdjacentStages(stageId: MainStageId) {
  const mainStages = getMainStages();
  const index = mainStages.findIndex((stage) => stage.id === stageId);

  return {
    next: mainStages[index + 1],
    previous: mainStages[index - 1],
  };
}

export function formatStageRoles(roles: StageRole[]) {
  return roles.map((role) => STAGE_ROLE_LABELS[role]).join(" / ");
}
