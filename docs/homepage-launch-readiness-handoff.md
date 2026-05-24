# PersianSaze Homepage - Launch Readiness Handoff

Date: 2026-05-23
Local production preview: http://localhost:3006/

## Scope

This pass did not redesign the homepage and did not change the approved v1 narrative or Product Preview behavior. The work focused on technical SEO, schema safety, route safety, Product Preview data safety, and production-readiness checks.

## What Changed

- Removed the invalid `WebSite` JSON-LD `SearchAction` that pointed to `/search`, because no search route exists.
- Normalized the Organization schema phone number to E.164: `+982175425000`.
- Added production-safe OG/Twitter image routes:
  - `/opengraph-image`
  - `/twitter-image`
- Verified the OG/Twitter image routes return `200` with `image/png`.

Note: the generated OG image uses Latin display text for now because `next/og` failed prerendering with the current Persian font fallback. The HTML/DOM homepage copy remains Persian and crawlable.

## Files Changed

- `src/app/layout.tsx`
- `src/app/opengraph-image.tsx`
- `src/app/twitter-image.tsx`
- `docs/homepage-launch-readiness-handoff.md`

## Section Order Confirmation

The approved homepage order is preserved:

1. Hero
2. Market Problem
3. Solution Snapshot / Product Overview
4. Product Preview
5. How to Use It / Workflow
6. Construction Stages / Golden Window Intro
7. System Layers
8. Audience / Use Cases
9. Pricing / Plans
10. FAQ
11. Final Demo CTA
12. Footer

All required homepage anchors exist:

- `#market-problem`
- `#solution-overview`
- `#demo-preview`
- `#how-it-works`
- `#construction-stages`
- `#system-layers`
- `#audience`
- `#pricing`
- `#faq`
- `#demo`

## SEO / AEO / GEO Validation

- One clear H1 confirmed.
- Metadata validated:
  - title present
  - description present
  - canonical: `https://persiansaze.com`
  - OG title, description, URL, type, locale present
  - OG image present
  - Twitter card: `summary_large_image`
  - Twitter title, description, image present
- JSON-LD validates as parseable JSON with these schema types:
  - `Organization`
  - `WebSite`
  - `FAQPage`
  - `SoftwareApplication`
  - `WebPage`
- Removed unsupported/unsafe schema reference to non-existing `/search`.
- FAQ remains crawlable DOM text.

## Route / Link Safety

- Homepage internal link checks: 38 checked, 0 broken.
- Sitemap routes: 21 checked, all returned `200`.
- `robots.txt` returns `200`, includes sitemap, and does not block the site.
- `/login` and `/signup` return `200` but have `noindex, nofollow`.
- `/login` and `/signup` are not in sitemap.
- Header, footer, mobile menu, mobile sticky actions, and major CTAs resolve to valid routes, anchors, or `tel:` links.
- No placeholder `/search` route is referenced by schema anymore.

## Product Preview Safety

Confirmed on rendered DOM:

- Sample-data disclaimer count: 1
- Label present: «نمایش نمونه، بدون داده واقعی»
- No real phone number in visible Product Preview text
- No project ID pattern in visible Product Preview text
- No real map tiles or map tile domains
- No image tags / real project photos
- Product Preview was not changed except for validation.

## Browser / Interaction QA

Production preview was tested at `http://localhost:3006/`.

- In-app browser console errors/warnings: 0
- Hydration errors: 0 observed
- Mobile 440x956 horizontal overflow: false
- Desktop 1440x900 horizontal overflow: false
- Mobile menu:
  - opens above page content
  - locks body scroll
  - Escape closes it
  - menu link closes it
- CTA hrefs verified:
  - Hero primary: `#demo-preview`
  - Hero secondary: `#solution-overview`
  - Header demo: `/#demo`
  - Header phone: `tel:+982175425000`
  - Mobile sticky actions: `tel:+982175425000`, `/signup`, `/login`

## QA Commands

- `npm run lint` - pass
- `npm run build` - pass

## Desktop Header Nav Recommendation

Current desktop nav has 9 items:

`مسئله`, `راه‌حل`, `دمو محصول`, `نحوه استفاده`, `مراحل ساخت`, `لایه‌ها`, `مخاطبان`, `پلن‌ها`, `سوالات`

This is functional and does not break at 1440px, but it is dense for a premium B2B header. Recommendation before a wider public launch: reduce the top nav to the highest-intent items and leave the rest to page scroll/footer.

Suggested lean nav:

`مسئله`, `راه‌حل`, `دمو محصول`, `نحوه استفاده`, `مراحل ساخت`, `پلن‌ها`, `سوالات`

If the header needs to be even calmer, remove `نحوه استفاده` or `مراحل ساخت` from the top nav, not both. Keep all sections on the page.

## Remaining Risks / TODOs

- OG image is production-safe and valid, but currently uses Latin display text due a `next/og` Persian font prerendering issue. Later improvement: add a bundled Persian-capable font to the OG route and switch the image text back to Persian.
- Final deployment should verify the same checks on the real production domain after DNS/CDN/Vercel environment is live.
- If future placeholder pages are added, keep them out of sitemap or mark them `noindex` until they are real content.
