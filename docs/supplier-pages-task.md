# PersianSaze Supplier, Product, and Stage Pages System

Build a data-driven internal page system for PersianSaze around supplier fit, product/service categories, sales timing, and construction stages.

The homepage already exists. Do not redesign it. Only update existing `توضیحات بیشتر` links so they point to the new routes.

## Source data

Supplier data is derived from `Categories 1405 final.xlsx`, sheet `PersianSaze_1405`.

The dataset contains:

- 17 parent supplier categories
- 151 product/service rows
- sales motion type
- suitable negotiation stage
- suitable purchase stage
- suitable execution stage
- strategic buying factors for builders

Use the files in `src/data/` and `data/raw/` as the source of truth. If the raw Excel is stored as base64 parts, reconstruct it before parsing.

## Product positioning

PersianSaze is a B2B construction intelligence and sales intelligence platform for construction suppliers.

It helps suppliers identify the right active project, at the right construction stage, with better timing and structured follow-up.

PersianSaze is not a static phone-number list.

## Design rule

Before coding pages, inspect the current homepage and reuse its exact visual language:

- Persian RTL layout
- current font system
- current colors and gradients
- warm premium background
- glassy / blurred cards where used
- button style
- spacing rhythm
- section composition
- card radius and border style
- mobile behavior

Do not create a plain SEO directory. Do not introduce a new visual system.

## Route architecture

Create these route groups:

```txt
/suppliers
/suppliers/fast-sales
/suppliers/consultative-sales
/suppliers/hybrid-sales
/suppliers/[parentSlug]
/suppliers/[parentSlug]/[childSlug]
/stages/[stageSlug]
```

## Required data layer

Create a TypeScript data module that exports:

```ts
export type SalesMotion = "fast" | "consultative" | "hybrid" | "unknown";

export type SupplierItem = {
  parentId: number;
  parentTitle: string;
  parentSlug: string;
  childId: number;
  childTitle: string;
  childSlug: string;
  saleTypeRaw: string;
  saleType: SalesMotion;
  negotiationStageRaw: string;
  negotiationStages: string[];
  negotiationStageSlugs: string[];
  purchaseStageRaw: string;
  purchaseStages: string[];
  purchaseStageSlugs: string[];
  executionStageRaw: string;
  executionStages: string[];
  executionStageSlugs: string[];
  buyingFactors: string;
};
```

Also export helpers:

```ts
getAllSupplierItems()
getParentCategories()
getItemsByParentSlug(parentSlug)
getItemBySlugs(parentSlug, childSlug)
getItemsBySaleType(saleType)
getAllStages()
getItemsByNegotiationStage(stageSlug)
getItemsByPurchaseStage(stageSlug)
getItemsByExecutionStage(stageSlug)
```

Preserve raw Persian values for display. Use normalized slugs only for routing and filtering.

## /suppliers

Purpose: help visitors answer whether PersianSaze is suitable for their business.

Required sections:

1. Hero
   - Eyebrow: `برای تأمین‌کنندگان صنعت ساختمان`
   - H1: `پرشین‌سازه برای چه تأمین‌کنندگانی مناسب است؟`
   - Explain that PersianSaze is useful when sales depend on active construction projects, project stage, timing, location, and follow-up.
   - CTAs: `حوزه فعالیت خود را پیدا کنید`, `درخواست دمو`

2. Sales motion cards
   - فروش سریع و تراکنشی → `/suppliers/fast-sales`
   - فروش مشاوره‌ای و تصمیم‌ساز → `/suppliers/consultative-sales`
   - فروش ترکیبی → `/suppliers/hybrid-sales`

3. Supplier activity finder
   - Search by childTitle and parentTitle
   - Filters: parent category, sale type, negotiation stage, purchase stage, execution stage
   - Result card: childTitle, parentTitle, saleType, negotiationStageRaw, purchaseStageRaw, executionStageRaw, CTA `توضیحات بیشتر`
   - CTA href: `/suppliers/[parentSlug]/[childSlug]`

4. Parent category grid
   - Render all parent categories
   - Card: title, description, examples, dominantSaleType, CTA `مشاهده جزئیات`
   - href: `/suppliers/[parentSlug]`

5. Golden timing section
   - Explain the difference between negotiation time, purchase time, execution time.
   - Use a visual timeline from construction stages.
   - Show 3 to 6 example supplier items.

6. Workflow
   - مشاهده پروژه‌های فعال روی نقشه
   - فیلتر بر اساس مرحله ساخت
   - بررسی جزئیات پروژه
   - ذخیره فرصت‌های مناسب
   - تماس یا پیامک هدفمند
   - ثبت فعالیت در CRM
   - پیگیری تا زمان مناسب خرید

7. FAQ with FAQPage JSON-LD

8. Final CTA

## Sales motion pages

### /suppliers/fast-sales

Explain value for suppliers with fast / transactional sales.

Key message: Even fast sales need project visibility, construction-stage awareness, geographic focus, and quick action.

### /suppliers/consultative-sales

Explain value for consultative suppliers.

Key message: Execution may happen late, but the real sales opportunity usually starts earlier.

### /suppliers/hybrid-sales

Explain value for suppliers who need both immediate discovery and long-cycle follow-up.

## Parent category pages

Route: `/suppliers/[parentSlug]`

Required sections:

- Hero: `پرشین‌سازه برای تأمین‌کنندگان {ParentTitle}`
- Direct answer block for AEO/GEO
- Summary card: item count, dominant sales motion, common stages
- Child category grid from the data
- Timing insight: common negotiation/purchase/execution stages
- How PersianSaze helps this category
- Related links to sales motion pages and stage pages
- FAQ and JSON-LD
- Final CTA

## Child product/service pages

Route: `/suppliers/[parentSlug]/[childSlug]`

Required sections:

- Hero: `فروش {ChildTitle} به پروژه‌های ساختمانی`
- Direct answer block: `پرشین‌سازه برای فروش {ChildTitle} چه کمکی می‌کند؟`
- Timing card using exact fields: sale type, negotiation stage, purchase stage, execution stage
- Stage chips linked to `/stages/[stageSlug]`
- Why timing matters
- Builder buying factors, rewritten in a readable card
- How PersianSaze helps this supplier
- Related stages
- Related supplier category
- Related child items
- FAQ and JSON-LD
- Final CTA

## Stage pages

Route: `/stages/[stageSlug]`

Each stage page should include:

- Hero: `فرصت‌های فروش در مرحله {StageTitle}`
- Stage definition
- Items where this stage is negotiation time
- Items where this stage is purchase time
- Items where this stage is execution time
- Explanation that the same construction stage means different sales actions for different suppliers
- Related previous/next stage links where applicable
- FAQ and JSON-LD
- Final CTA

## Footer and homepage link updates

Do not list all 151 child products in the footer.

Footer should include:

- `همه تأمین‌کنندگان و محصولات` → `/suppliers`
- 6 to 10 important parent category links
- sales motion pages
- important stage pages

Homepage supplier card `توضیحات بیشتر` links:

- Parent category card → `/suppliers/[parentSlug]`
- Product/service card → `/suppliers/[parentSlug]/[childSlug]`
- If uncertain → `/suppliers`

## SEO / AEO / GEO

For every generated page add:

- unique Persian title
- unique meta description
- canonical URL
- Open Graph title and description
- structured headings
- clear H1
- answer-style intro section
- FAQ section
- internal links
- breadcrumbs
- JSON-LD where appropriate: BreadcrumbList, FAQPage, ItemList, WebPage, Service where suitable

Avoid thin SEO pages. Every page must include timing logic, supplier-specific insight, internal links, FAQ, and CTA.

## Implementation phases

1. Reconstruct/parse supplier data and create the typed data layer.
2. Build `/suppliers`.
3. Build sales motion pages.
4. Generate parent category pages.
5. Generate child product/service pages.
6. Generate construction stage pages.
7. Update footer and homepage `توضیحات بیشتر` links.
8. Add metadata, JSON-LD, breadcrumbs, and sitemap support if the repo already supports it.
9. QA mobile, RTL, build, broken links, metadata, and route generation.

## Acceptance criteria

- `/suppliers` exists and works as the main supplier fit page.
- Supplier search/filter works from the Excel-derived data.
- Sales motion pages exist for both main supplier types.
- Parent category pages are generated.
- Child product/service pages are generated.
- Construction stage pages are generated.
- Footer product/stage links point to the new pages.
- Homepage supplier `توضیحات بیشتر` buttons point to the correct new pages.
- All pages follow the exact visual language of the current homepage.
- Pages are optimized for SEO, AEO, and GEO.
- Pages are not thin or generic.
- Mobile layout is excellent.
- Build passes with no route or type errors.
