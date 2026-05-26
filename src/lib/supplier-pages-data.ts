import { suppliers, stages } from "@/lib/site-data";

export type SalesMotion = "fast" | "consultative" | "hybrid" | "unknown";
export type ParentCategory = { parentId?: number; slug: string; title: string; description: string; examples: string[]; dominantSaleType: SalesMotion };
export type Stage = { slug: string; title: string; order?: number; aliases?: string[] };
export type ChildItem = { parentSlug: string; childSlug: string; childTitle: string; saleType: SalesMotion; negotiationStageSlugs?: string[]; purchaseStageSlugs?: string[]; executionStageSlugs?: string[]; buyingFactors?: string };

const motionMap: Record<string, SalesMotion> = {
  "cement-and-basic-materials": "fast",
  elevator: "consultative",
  facade: "consultative",
  "doors-windows": "hybrid",
  "mechanical-electrical": "hybrid",
  "interior-finishing": "fast",
};

const parentCategories: ParentCategory[] = suppliers.map((s, i) => ({
  parentId: i + 1,
  slug: s.slug,
  title: s.name,
  description: s.description,
  examples: s.products.split("،").map((x) => x.trim()).slice(0, 5),
  dominantSaleType: motionMap[s.slug] ?? "unknown",
}));

const normalizedStages: Stage[] = stages.map((s, i) => ({ slug: s.slug, title: s.name, order: i + 1 }));
const childItems: ChildItem[] = [];

export const getParentCategories = () => parentCategories;
export const getParentCategoryBySlug = (slug: string) => parentCategories.find((p) => p.slug === slug);
export const getStages = () => normalizedStages;
export const getStageBySlug = (slug: string) => normalizedStages.find((s) => s.slug === slug);
export const getCategoriesBySaleType = (type: SalesMotion) => parentCategories.filter((p) => p.dominantSaleType === type);
export const getChildItems = () => childItems;
export const getChildItemsByParentSlug = (parentSlug: string) => childItems.filter((c) => c.parentSlug === parentSlug);
export const getChildItemBySlugs = (parentSlug: string, childSlug: string) => childItems.find((c) => c.parentSlug === parentSlug && c.childSlug === childSlug);
export const getChildItemsByStage = (stageSlug: string, relation: "negotiation" | "purchase" | "execution") => childItems.filter((c) => (relation === "negotiation" ? c.negotiationStageSlugs : relation === "purchase" ? c.purchaseStageSlugs : c.executionStageSlugs)?.includes(stageSlug));
