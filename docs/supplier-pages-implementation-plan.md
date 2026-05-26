# Supplier / Product / Stage Pages — Implementation Plan (Planning Mode)

## 1) Existing repo structure
- Audit `src/app` App Router folders and current dynamic routes.
- Identify existing marketing components in `src/components/marketing` and shared UI primitives in `src/components/ui`.
- Confirm current supplier/stage data sources in `src/lib/site-data.ts` and `src/lib/sales-taxonomy.ts`.

## 2) Existing homepage visual system
- Reuse existing homepage visual language (gradient, glass cards, spacing, typography, RTL alignment).
- Avoid redesigning homepage sections.
- Only adjust homepage supplier-card detail links if required.

## 3) Existing routes and components
- Current related routes include `/suppliers/[slug]` and `/construction-stages/[slug]`.
- Build new architecture alongside existing patterns with `generateMetadata` and structured data blocks.

## 4) Current available supplier data files
- `docs/supplier-data-notes.md`
- `src/lib/sales-taxonomy.ts`
- `src/lib/site-data.ts`
- `data/taxonomy/persiansaze_1405_selected.xlsx`
- If `src/data/supplier-parent-categories.json` and `src/data/supplier-construction-stages.json` are absent, create normalized adapters from existing data.

## 5) Missing child item data strategy
- Introduce child-item adapter with safe-empty fallback.
- Do not fabricate 151 child pages.
- Generate `/suppliers/[parentSlug]/[childSlug]` only for real child records.
- Add explicit TODO contract for plugging full child dataset later.

## 6) Route architecture
- `/suppliers`
- `/suppliers/fast-sales`
- `/suppliers/consultative-sales`
- `/suppliers/hybrid-sales`
- `/suppliers/[parentSlug]`
- `/suppliers/[parentSlug]/[childSlug]` (conditional)
- `/stages/[stageSlug]`

## 7) Component architecture
- Reuse-first components:
  - `SupplierPageShell`
  - `SupplierHero`
  - `SalesMotionCards`
  - `SupplierCategoryFinder`
  - `ParentCategoryGrid`
  - `SupplierTimingExplainer`
  - `ConstructionStageTimeline`
  - `SupplierWorkflow`
  - `SEOAnswerBlock`
  - `RelatedLinks`
  - `FAQAccordion`
  - `Breadcrumbs`
  - `FinalCTA`

## 8) Data model
- `ParentCategory`: slug, title, description, examples, dominantSaleType.
- `Stage`: slug, title, order.
- `ChildItem` (future-ready): parentSlug, childSlug, childTitle, saleType, optional timing stages.
- Utility selectors for filtering by sale type and slug.

## 9) SEO / AEO / GEO strategy
- Unique Persian title + description per page.
- Canonical and OG metadata per route.
- H1 + direct answer block on all pages.
- FAQ section + FAQPage JSON-LD.
- BreadcrumbList JSON-LD.
- Internal links among suppliers, sale motions, parent categories, and stages.

## 10) Mobile + RTL QA plan
- Check no horizontal overflow.
- Ensure readable Persian H1 and scan-friendly cards.
- Timeline behavior on mobile (stack/scroll).
- Verify button tap targets and RTL spacing.
- Validate JSON-LD and metadata render.

## 11) Execution order
1. Data/source audit and mapping.
2. Build normalized adapters for parent/stage (+ child fallback interface).
3. Create reusable supplier/stage page components.
4. Implement `/suppliers` main page.
5. Implement 3 sales motion pages.
6. Implement dynamic parent pages.
7. Implement dynamic stage pages.
8. Add conditional child route scaffolding.
9. Update footer links and homepage supplier-card detail links.
10. Run lint/build, then route and mobile QA checklist.
