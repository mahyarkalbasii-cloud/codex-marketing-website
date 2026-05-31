import assert from "node:assert/strict";
import test from "node:test";

import { CATEGORIES } from "./categories";
import {
  getHighValueCategoriesForCity,
  getMostCommonBuyStage,
  getRelatedCategories,
  getRelatedBuyStages,
  getSaleMotionSummary,
  getSaleTypeSplit,
  getStrategicAdviceHighlights,
} from "./category-insights";
import {
  getSalesStyleCategories,
  getSalesStyleRelatedStages,
  getSalesStyleSubcategories,
} from "./sales-style";
import {
  getActiveParentGroupsForStage,
  getActiveSubcategoriesForStage,
  getDominantSaleStyleForStage,
  getRelatedStages,
  getStageByRouteSlug,
} from "./stage-insights";
import {
  getMainStages,
  getOrderedVisibleCategories,
  getVisibleSubcategoryCount,
} from "./navigation";
import {
  getCategoriesByStage,
  getCategoryBySlug,
  getStageBySlug,
  getStagesForSubcategory,
  getSubcategoriesBySaleType,
  getSubcategoryBySlug,
} from "./queries";

test("getCategoryBySlug returns the requested parent category", () => {
  assert.equal(getCategoryBySlug("building-materials")?.id, 1);
});

test("getSubcategoryBySlug returns a nested subcategory", () => {
  const subcategory = getSubcategoryBySlug("syman-prtlnd-typ-1-ta-5-1-1");

  assert.equal(subcategory?.id, "1.1");
  assert.equal(subcategory?.parentId, 1);
});

test("getCategoriesByStage returns categories with at least one matching stage", () => {
  const categories = getCategoriesByStage("foundation");

  assert.ok(categories.length > 0);
  assert.ok(categories.some((category) => category.id === 1));
});

test("getSubcategoriesBySaleType includes both-sale subcategories", () => {
  const subcategories = getSubcategoriesBySaleType("fast");

  assert.ok(subcategories.length > 0);
  assert.ok(subcategories.some((subcategory) => subcategory.saleType === "both"));
  assert.ok(
    subcategories.every(
      (subcategory) =>
        subcategory.saleType === "fast" || subcategory.saleType === "both",
    ),
  );
});

test("getStageBySlug returns the canonical stage", () => {
  assert.equal(getStageBySlug("foundation")?.id, "foundation");
});

test("getStagesForSubcategory resolves typed stages by journey kind", () => {
  const subcategory = getSubcategoryBySlug("syman-prtlnd-typ-1-ta-5-1-1");

  assert.ok(subcategory);
  assert.deepEqual(
    getStagesForSubcategory(subcategory, "execution").map((stage) => stage.id),
    ["foundation", "wall-building", "plaster"],
  );
});

test("taxonomy includes all parents and all subcategories", () => {
  const subcategoryCount = CATEGORIES.reduce(
    (sum, category) => sum + category.subcategories.length,
    0,
  );

  assert.equal(CATEGORIES.length, 20);
  assert.equal(subcategoryCount, 270);
});

test("all taxonomy parent categories are visible pages", () => {
  assert.ok(CATEGORIES.every((category) => !category.excludeFromPages));
  assert.ok(CATEGORIES.every((category) => category.intro.length > 0));
});

test("category insight helpers derive sale, timing, stages, and advice", () => {
  const category = getCategoryBySlug("building-materials");

  assert.ok(category);
  assert.equal(getSaleMotionSummary(category).motion, "fast");
  assert.ok(getSaleTypeSplit(category).fast.length > 0);
  assert.ok(getSaleTypeSplit(category).consultative.length > 0);
  assert.ok(getMostCommonBuyStage(category)?.id);
  assert.ok(getRelatedCategories(category).every((item) => item.id !== category.id));
  assert.ok(getRelatedBuyStages(category).some((stage) => stage.id === "pre-construction"));
  assert.ok(getStrategicAdviceHighlights(category, 3).length <= 3);
  assert.equal(getHighValueCategoriesForCity("tehran").length, 4);
});

test("sales-style hubs include both-sale subcategories and visible parents", () => {
  const fastCategories = getSalesStyleCategories("fast");
  const consultativeCategories = getSalesStyleCategories("consultative");
  const fastSubcategories = getSalesStyleSubcategories("fast");
  const consultativeSubcategories = getSalesStyleSubcategories("consultative");
  const barterSubcategories = getSalesStyleSubcategories("barter");

  assert.equal(fastCategories.length, 18);
  assert.equal(consultativeCategories.length, 19);
  assert.equal(fastSubcategories.length, 144);
  assert.equal(consultativeSubcategories.length, 155);
  assert.equal(barterSubcategories.length, 40);
  assert.ok(fastSubcategories.some((subcategory) => subcategory.saleType === "both"));
  assert.ok(getSalesStyleRelatedStages("consultative").some((stage) => stage.id === "pre-construction"));
});

test("stage insight helpers derive active subcategories and redirects", () => {
  const foundationSubs = getActiveSubcategoriesForStage("foundation");
  const foundationGroups = getActiveParentGroupsForStage("foundation");
  const dominantSaleStyle = getDominantSaleStyleForStage(foundationSubs);

  assert.equal(foundationSubs.length, 74);
  assert.equal(foundationGroups.length, 13);
  assert.equal(dominantSaleStyle.style, "mixed");
  assert.equal(getStageByRouteSlug("masonry").stage?.id, "wall-building");
  assert.ok(getRelatedStages("foundation").length <= 2);
  assert.ok(getRelatedStages("foundation").some((stage) => stage.id === "structure"));
  assert.ok(foundationGroups.every((group) => !group.parent.excludeFromPages));
});

test("navigation helpers expose the visible taxonomy in editorial order", () => {
  const visibleCategories = getOrderedVisibleCategories();
  const mainStages = getMainStages();

  assert.equal(visibleCategories.length, 20);
  assert.equal(visibleCategories[0].slug, "building-materials");
  assert.equal(getVisibleSubcategoryCount(), 270);
  assert.equal(mainStages.length, 10);
  assert.ok(visibleCategories.every((category) => !category.excludeFromPages));
});
