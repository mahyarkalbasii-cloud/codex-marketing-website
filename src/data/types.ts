export type StageId =
  | "pre-construction"
  | "demolition"
  | "foundation"
  | "structure"
  | "wall-building"
  | "plaster"
  | "installations"
  | "early-finishing"
  | "finishing"
  | "completion";

export type SaleType = "fast" | "consultative" | "both";
export type SalesType =
  | "fast"
  | "consultative"
  | "custom"
  | "barter"
  | "rental"
  | "engineering";

export interface Stage {
  id: StageId;
  faLabel: string;
  slug: string;
  isMain: boolean;
}

export interface SubCategory {
  id: string;
  faTitle: string;
  slug: string;
  parentId: number;
  saleType: SaleType | null;
  salesTypes: SalesType[];
  salesTypeRaw: string;
  negotiationStages: StageId[];
  buyStages: StageId[];
  executionStages: StageId[];
  stageTiming: {
    negotiate: StageId[];
    buy: StageId[];
    execute: StageId[];
  };
  description: string;
  strategicAdvice: string;
  builderValues: string;
  trustCriteria: string;
}

export interface Category {
  id: number;
  faTitle: string;
  slug: string;
  intro: string;
  excludeFromPages: boolean;
  subcategories: SubCategory[];
}
