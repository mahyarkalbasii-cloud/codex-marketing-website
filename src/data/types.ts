export type StageId =
  | "pre-construction"
  | "demolition"
  | "foundation"
  | "structure"
  | "wall-building"
  | "plaster"
  | "early-finishing"
  | "finishing"
  | "completion";

export type SaleType = "fast" | "consultative" | "both";

export interface Stage {
  id: StageId;
  faLabel: string;
  slug: string;
  isMain: boolean;
}

export interface SubCategory {
  id: number;
  faTitle: string;
  slug: string;
  parentId: number;
  saleType: SaleType | null;
  negotiationStages: StageId[];
  buyStages: StageId[];
  executionStages: StageId[];
  strategicAdvice: string;
}

export interface Category {
  id: number;
  faTitle: string;
  slug: string;
  excludeFromPages: boolean;
  subcategories: SubCategory[];
}
