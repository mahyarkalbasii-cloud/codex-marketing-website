# Supplier source data

The supplier workbook is stored as base64 text parts because this write path handles text files more reliably than direct binary uploads.

To reconstruct it locally:

```bash
node scripts/reconstruct-supplier-excel.mjs
```

Output:

```txt
data/raw/Categories 1405 final.xlsx
```

Counts:

- Parent categories: 17
- Supplier/product/service rows: 151

After reconstruction, Codex should parse the workbook and create a typed supplier data module for page generation.
