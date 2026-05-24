# PersianSaze Homepage Interaction Handoff After Polish

Date: 2026-05-22  
Route: `http://localhost:3004/`  
Framework: Next.js App Router, React, Tailwind CSS, shadcn-style local UI components

## 1. Summary Of Interaction Fixes

This pass was functionality-first. No visual redesign was performed.

- Header phone links now use `tel:+982175425000` while displaying Persian digits: `۰۲۱-۷۵۴۲۵۰۰۰`.
- Mobile sticky action bar links are live: تماس -> `tel:+982175425000`, ثبت‌نام -> `/signup`, ورود -> `/login`.
- Mobile menu opens/closes, closes on Escape, and closes after menu-link navigation.
- Hero CTAs scroll to real section anchors.
- Desktop navigation anchors all point to existing section IDs.
- Product Preview sample filters, project rows, and map pins now update local UI state.
- FAQ rows open/close with mouse and keyboard: Enter and Space.
- Pricing CTAs route to `/pricing`.
- Final demo CTA uses a phone action and links back to Product Preview.
- Footer phone and internal links were checked against real routes.
- No `href="#"`, missing `href`, or inert clickable-looking homepage buttons were found in the final QA pass.

## 2. Homepage Section Order And IDs

| Order | Section | ID | Interaction state |
|---:|---|---|---|
| 1 | Hero | none | Primary CTA -> `#demo-preview`; secondary CTA -> `#solution-overview` |
| 2 | Market Problem | `market-problem` | CTA -> `#solution-overview`; graphic is decorative/static |
| 3 | Solution Overview | `solution-overview` | CTA -> `#demo-preview`; flow cards static |
| 4 | Product Preview | `demo-preview` | Filters, rows, and pins update selected sample project locally |
| 5 | System Layers | `system-layers` | Golden Window stage selector updates local preview state |
| 6 | Audience | `audience` | Static audience cards |
| 7 | Pricing | `pricing` | Four CTAs -> `/pricing` |
| 8 | FAQ | `faq` | Accordion rows open/close by click, Enter, and Space |
| 9 | Final Demo CTA | `demo` | Main CTA -> `tel:+982175425000`; secondary -> `#demo-preview` |
| 10 | Footer | footer | Internal links and phone links are live |

## 3. CTA And Link Target Map

| Area | Text | Final target | QA result |
|---|---|---|---|
| Header logo | پرشین‌سازه | `/` | OK |
| Header nav | مسئله | `/#market-problem` | OK |
| Header nav | راه‌حل | `/#solution-overview` | OK |
| Header nav | قابلیت‌ها | `/#demo-preview` | OK |
| Header nav | نحوه کار | `/#system-layers` | OK |
| Header nav | مخاطبان | `/#audience` | OK |
| Header nav | پلن‌ها | `/#pricing` | OK |
| Header nav | سوالات رایج | `/#faq` | OK |
| Header phone | ۰۲۱-۷۵۴۲۵۰۰۰ | `tel:+982175425000` | OK |
| Header CTA | درخواست دمو | `/#demo` | OK |
| Hero primary | مشاهده دمو | `#demo-preview` | OK |
| Hero secondary | دیدن قابلیت‌ها | `#solution-overview` | OK |
| Market Problem | آشنایی با راه‌حل پرشین‌سازه | `#solution-overview` | OK |
| Solution Overview | مشاهده نمونه محصول | `#demo-preview` | OK |
| Product Preview | درخواست دمو | `#demo` | OK |
| System Layers | درخواست دمو | `#demo` | OK |
| Pricing cards | مشاهده پلن‌ها | `/pricing` | OK |
| Final CTA | تماس با فروش | `tel:+982175425000` | OK |
| Final CTA | مشاهده نمونه محصول | `#demo-preview` | OK |
| Mobile sticky | تماس | `tel:+982175425000` | OK |
| Mobile sticky | ثبت‌نام | `/signup` | OK, route returns 200 |
| Mobile sticky | ورود | `/login` | OK, route returns 200 |
| Footer phones | ۰۲۱-۷۵۴۲۵۰۰۰ / ۰۲۱-۷۲۸۹۷۰۰۰ | `tel:+982175425000` / `tel:+982172897000` | OK |
| Footer internal links | Features, pricing, FAQ, cities, suppliers, stages | Real app routes and anchors | OK, all checked routes return 200 |

## 4. Intentionally Static Or Non-Clickable Elements

- Hero mini product theater decorative map/preview elements.
- Market Problem chaos/map nodes and labels.
- Solution Overview flow graphics.
- Product Preview masked field skeleton values.
- Product Preview inactive decorative background pins.
- Product Preview toolbar label: `محصول نمایشی، بدون داده واقعی`.
- Audience cards and decorative motifs.
- Final CTA mini workflow/map motif.
- Footer brand mark and non-linked text such as `persiansaze.com | @persiansaze`.

## 5. Product Preview QA

| Item | Result |
|---|---|
| Section ID | `demo-preview` exists |
| Filter behavior | Active filters update sample visible projects |
| Default filter | `غرب تهران` active; three sample projects visible |
| Clicking row | Updates selected row, selected pin, and selected card state |
| Clicking pin | Updates selected pin, selected row, and selected card state |
| Filter narrowing | Enabling `نازک‌کاری` narrows visible samples to one matched item |
| Data safety | Uses sample/masked data only; no real address, phone, project ID, photo, or screenshot |
| Mobile readability | Passed at 440x956; no horizontal overflow |
| Desktop composition | Passed at 1440x900; no awkward dead lower region found during QA |

Decision: Product Preview is acceptable for this handoff as an interaction-tested product theater. It is still a sample UI, not a real app.

## 6. Interaction And Motion QA

| Interaction | Implemented | Polished enough for handoff | Notes |
|---|---:|---:|---|
| Header desktop nav anchors | Yes | Yes | All section links scroll correctly |
| Header CTA | Yes | Yes | `/#demo` |
| Header phone | Yes | Yes | `tel:+982175425000` |
| Hero CTAs | Yes | Yes | Both anchors tested |
| Mobile menu open/close | Yes | Yes | Button, Escape, and link-close tested |
| Mobile sticky action bar | Yes | Yes | tel, `/signup`, `/login` |
| Product Preview filters | Yes | Yes | Local sample state |
| Product Preview rows | Yes | Yes | Local selected state |
| Product Preview pins | Yes | Yes | Local selected state |
| Golden Window stage selector | Yes | Yes | Local selected stage |
| FAQ accordion | Yes | Yes | Click, Enter, Space tested |
| Pricing CTAs | Yes | Yes | `/pricing` route tested |
| Final CTA | Yes | Yes | tel and product-preview anchor |
| Footer links | Yes | Yes | Internal routes checked |

## 7. SEO/AEO/GEO Safety Check

Visible DOM text still includes:

- `پرشین‌سازه`
- `پروژه‌های ساختمانی`
- `پروژه‌های در حال ساخت`
- `تأمین‌کنندگان محصولات و خدمات ساختمانی`
- `اطلاعات به‌روز پروژه‌ها`
- `نقشه پروژه‌ها`
- `مرحله ساخت`
- `فیلتر فروش`
- `پیگیری فروش`
- `فروش پروژه‌محور`
- `اشتراک پرشین‌سازه`
- `درخواست دمو`

Also checked:

- No visible or DOM internal terms `SEO`, `AEO`, or `GEO`.
- FAQ definition of PersianSaze remains in DOM text.
- Important text remains DOM text, not baked into screenshots/images.
- Product Preview uses masked/sample-safe data only.

## 8. Screenshot Package

Clean folder for the new handoff:

`docs/audit-screenshots/handoff-2-interaction-qa/`

Mobile 440x956:

1. `handoff-2-01-mobile-hero.png`
2. `handoff-2-02-mobile-menu-open.png`
3. `handoff-2-03-mobile-product-preview-selected.png`
4. `handoff-2-04-mobile-system-layers.png`
5. `handoff-2-05-mobile-faq-final-cta.png`

Desktop 1440x900:

6. `handoff-2-06-desktop-hero.png`
7. `handoff-2-07-desktop-solution.png`
8. `handoff-2-08-desktop-product-preview-top.png`
9. `handoff-2-09-desktop-product-preview-lower-card.png`
10. `handoff-2-10-desktop-system-layers.png`
11. `handoff-2-11-desktop-pricing.png`
12. `handoff-2-12-desktop-faq-final-footer.png`

## 9. Files Changed For This Interaction QA

- `src/components/marketing/product-preview-theater.tsx`
- `src/components/marketing/faq-list.tsx`
- `src/components/marketing/mobile-menu.tsx`
- `src/components/marketing/mobile-action-bar.tsx`
- `src/components/marketing/site-header.tsx`
- `src/components/marketing/site-footer.tsx`
- `src/app/page.tsx`
- `src/app/login/page.tsx`
- `src/app/signup/page.tsx`

Handoff artifacts:

- `docs/homepage-interaction-handoff-after-polish.md`
- `docs/audit-screenshots/handoff-2-interaction-qa/*.png`

## 10. Build And QA Results

| Check | Result |
|---|---|
| `npm run lint` | Pass |
| `npm run build` | Pass |
| Desktop 1440x900 overflow | Pass, no horizontal overflow |
| Mobile 440x956 overflow | Pass, no horizontal overflow |
| Sticky mobile action bar | Pass, does not block tested CTA/navigation targets |
| Fresh console check | Pass, no new warnings/errors in fresh tab |
| Hydration errors | None observed in fresh QA tab |
| Footer/internal route status | Pass, checked routes return 200 |

Note: old console entries from a stale dev/prod `.next` cache existed before clearing the cache. The dev cache was cleared and the server was restarted; a fresh console check after that showed no new warnings or errors.

## 11. Known Remaining Issues

1. Product Preview is now interactive but still sample-local; it is not a real app screen.
2. Default Product Preview filter state is optimized for demonstrable interaction, not a real saved user filter.
3. Footer intentionally has some duplicate city links because SEO page links and city groups overlap.
4. Mobile sticky action bar consumes bottom viewport space; screenshots should account for it.
5. The unused `theme-toggle.tsx` file still exists but is not visible or imported in the marketing header.
6. Login and signup pages are placeholder routes; they work, but they are not full auth flows.
7. FAQ content is DOM text and keyboard-accessible, but closed answers are not visually expanded by default.
8. Product Preview masked values are safe but could be made more realistic in a future product-content pass.
9. Some footer route labels are SEO-oriented and may need future hierarchy cleanup.
10. No real form exists for demo requests; the final demo action currently uses phone contact.

## 12. Suggested Next Cleanup Order

1. Decide whether demo request should remain phone-first or become a real embedded form.
2. Clarify whether `/signup` and `/login` are temporary access pages or real product routes.
3. Tighten footer information architecture and reduce duplicated city-link exposure if desired.
4. Run a focused mobile hero/sticky-bar composition review with screenshots.
5. Plan a future Product Preview content pass only after interaction behavior is approved.
