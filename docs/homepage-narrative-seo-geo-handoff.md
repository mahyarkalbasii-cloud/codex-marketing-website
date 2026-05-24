# PersianSaze Homepage Narrative + SEO/AEO/GEO Handoff

تاریخ: ۱۴۰۵-۰۳-۰۲ / 2026-05-23  
محیط QA: production preview روی `http://localhost:3006/`

## ۱. خلاصه تغییرات

این پاس صفحه اصلی را بدون بازطراحی کامل، از یک صفحه صرفاً visual-fixed به روایت محصول‌محورتر تبدیل کرد. تمرکز روی این موارد بود:

- ریتم بهتر هدر و شروع سریع‌تر Hero در دسکتاپ
- فشرده‌تر شدن Product Preview در دسکتاپ
- اضافه شدن بخش مستقل نحوه استفاده
- اضافه شدن بخش مراحل ساخت و پنجره طلایی فروش
- بهبود FAQ، metadata و structured data برای SEO/AEO/GEO
- حفظ مسیر گرم، editorial و محصول‌محور پرشین‌سازه

## ۲. فایل‌های تغییرکرده

- `src/app/page.tsx`
- `src/components/marketing/product-preview-theater.tsx`
- `src/components/marketing/site-header.tsx`
- `src/components/marketing/mobile-menu.tsx`
- `src/components/marketing/section-header.tsx`
- `src/app/globals.css`
- `src/lib/site-data.ts`

## ۳. ترتیب سکشن‌ها

ترتیب فعلی homepage:

1. Hero
2. Market Problem - `#market-problem`
3. Solution Snapshot / Product Overview - `#solution-overview`
4. Product Preview - `#demo-preview`
5. How to Use It / Workflow - `#how-it-works`
6. Construction Stages / Golden Window Intro - `#construction-stages`
7. System Layers - `#system-layers`
8. Audience / Use Cases - `#audience`
9. Pricing / Plans - `#pricing`
10. FAQ - `#faq`
11. Final Demo CTA - `#demo`
12. Footer

## ۴. SEO/AEO/GEO تغییرات

- صفحه همچنان فقط یک H1 دارد.
- copy بخش‌های کلیدی answer-firstتر شد.
- FAQها به زبان طبیعی جست‌وجوی فارسی نزدیک‌تر شدند.
- terms مهم به‌صورت DOM text حفظ شدند، نه تصویر یا SVG-only.
- metadata صفحه اصلی تقویت شد:
  - canonical
  - OG title/description
  - Twitter metadata
- structured data حفظ و تکمیل شد:
  - FAQPage
  - SoftwareApplication
  - WebPage
  - Organization/WebSite از layout
- keyword stuffing انجام نشد.

## ۵. تعامل و حرکت

- Product Preview همچنان interactive است:
  - فیلترها کار می‌کنند.
  - ردیف پروژه کار می‌کند.
  - pinهای نقشه کار می‌کنند.
  - selected row / selected pin / selected card متصل مانده‌اند.
- Product Preview از نظر ارتفاع فشرده‌تر شد و action/follow-up panel در پایین shell قرار گرفت.
- برچسب نمونه امن حفظ شد:

`نمایش نمونه، بدون داده واقعی`

- حرکت‌ها همان motion آرام CSS باقی ماندند و reduced-motion safe هستند.

## ۶. Route / Link Safety

- لینک‌های Header و Mobile Menu به anchorهای معتبر اشاره می‌کنند.
- Mobile sticky action bar حفظ شد:
  - تماس -> `tel:+982175425000`
  - ثبت‌نام -> `/signup`
  - ورود -> `/login`
- footer linkها به routeهای موجود پروژه اشاره می‌کنند.
- برای بخش مراحل ساخت در homepage لینک جدید placeholder ساخته نشد؛ فقط متن crawlable و stage badges اضافه شد.
- تماس فروش عمومی به متن generic تغییر کرد:

`کارشناس فروش | داخلی ۱۰۸`

## ۷. QA Results

- `npm run lint`: passed
- `npm run build`: passed
- console errors: 0
- console warnings: 0
- page errors / hydration errors: 0
- horizontal overflow desktop: false
- horizontal overflow mobile: false
- H1 count: 1
- missing section IDs: none
- sample-data disclaimer count: 1
- real phone inside Product Preview: false
- mobile sticky pricing overlap: false
- mobile menu:
  - opaque warm surface
  - z-index `80`
  - body scroll locked while open
  - Escape closes
  - clicking menu link closes

Interaction checks:

- Product Preview filter: passed
- Product Preview row selection: passed
- Product Preview pin selection: passed
- FAQ accordion: passed
- Hero primary CTA: present
- Hero secondary CTA: present
- Header demo CTA: present
- Header phone: present
- Mobile sticky actions: present
- Pricing link: present
- Footer links count: 28

## ۸. Screenshots

پوشه اسکرین‌شات‌ها:

`output/playwright/homepage-narrative-qa-20260523`

Mobile 440x956:

![Mobile Hero](../output/playwright/homepage-narrative-qa-20260523/mobile-440x956-01-hero.png)

![Mobile Menu Open](../output/playwright/homepage-narrative-qa-20260523/mobile-440x956-02-menu-open.png)

![Mobile Product Preview Selected Card Lower](../output/playwright/homepage-narrative-qa-20260523/mobile-440x956-03-product-preview-selected-card-lower.png)

![Mobile Pricing Sticky Bar](../output/playwright/homepage-narrative-qa-20260523/mobile-440x956-04-pricing-sticky-bar.png)

![Mobile FAQ Final CTA](../output/playwright/homepage-narrative-qa-20260523/mobile-440x956-05-faq-final-cta.png)

Desktop 1440x900:

![Desktop Hero](../output/playwright/homepage-narrative-qa-20260523/desktop-1440x900-01-hero.png)

![Desktop Product Preview Top](../output/playwright/homepage-narrative-qa-20260523/desktop-1440x900-02-product-preview-top.png)

![Desktop Product Preview Lower Card](../output/playwright/homepage-narrative-qa-20260523/desktop-1440x900-03-product-preview-lower-card.png)

![Desktop How It Works](../output/playwright/homepage-narrative-qa-20260523/desktop-1440x900-04-how-it-works.png)

![Desktop Construction Stages](../output/playwright/homepage-narrative-qa-20260523/desktop-1440x900-05-construction-stages.png)

![Desktop System Layers](../output/playwright/homepage-narrative-qa-20260523/desktop-1440x900-06-system-layers.png)

![Desktop FAQ Final CTA Footer](../output/playwright/homepage-narrative-qa-20260523/desktop-1440x900-07-faq-final-cta-footer.png)

## ۹. Remaining Risks / TODOs

- اگر قرار است صفحات آینده برای هر stage جداگانه توسعه پیدا کنند، بهتر است stage taxonomy در `site-data.ts` دقیقاً با ۹ مرحله homepage همسان شود. فعلاً homepage لینک placeholder جدید ندارد.
- Product Preview هنوز mockup است و عمداً screenshot واقعی یا داده واقعی نیست.
- هیچ بلاکر شناخته‌شده‌ای برای review نهایی این پاس باقی نمانده است.
