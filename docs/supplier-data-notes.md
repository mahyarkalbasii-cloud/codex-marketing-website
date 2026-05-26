# Supplier Data Notes

Generated from `Categories 1405 final.xlsx` / sheet `PersianSaze_1405`.

## Counts

- Parent categories: 17
- Supplier/product/service items: 151
- Normalized construction stages: 27

## Implementation source

Use `src/data/supplier-categories.ts` after it is added to the repo.

## Normalization decisions

- `نوع فروش` should be normalized into `fast`, `consultative`, `hybrid`, or `unknown` while preserving raw Persian values.
- Stage raw values should be preserved while also creating stage slugs for routing and filtering.
- Common spelling variants should be normalized, for example: `اسکلت` and `اسکلت‌بندی` to `structure`, `ناک‌کاری` to `finishing`, and `تخریب` / `تخریب و گودبرداری` to `demolition-excavation`.
