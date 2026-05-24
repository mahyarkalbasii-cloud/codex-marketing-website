# PersianSaze Homepage Handoff After Interaction QA

Date: May 22, 2026  
Route reviewed: `/` on `http://localhost:3004/`  
Primary homepage file: `src/app/page.tsx`

## 1. Current Implementation Summary

The latest polish pass focused on making the homepage more product-led and then tightening interaction behavior before handoff.

Latest visible changes:

- Product Preview filter label changed from `فیلتر فروش` to `فیلتر پروژه ها`.
- Product Preview filters are now dropdown controls for:
  - `مرحله ساخت`: `تخریب و گودبرداری`, `فونداسیون`, `اسکلت بندی`, `دیوارچینی`, `گچ و خاک`, `ابتدای نازک کاری`, `نازک کاری`, `ظریف کاری`, `پایان کار`
  - `منطقه`: regions 1 to 22
  - `نوع اشتراک`: `بنیان`, `رویان`, `تابان`, `تابان پلاس`
- Product Preview selected row, map pin, and project card share selected state.
- Map has more sample pins, fewer road lines, and no real map tiles.
- `داده ماسک شده` wording was removed from Product Preview.
- Project image area is represented by a safe sample placeholder, not a real photo.
- Product Preview sidebar overflow was fixed so long Persian labels do not leave the card frame.
- Top toolbar labels `محصول نمایشی، بدون داده واقعی` and the small `نقشه پروژه‌ها` tab were removed from the Product Preview frame.

Files changed in the latest polish/fix cycle:

- `src/components/marketing/product-preview-theater.tsx`
- `docs/handoff-3-interaction-qa/homepage-handoff-after-interaction-qa.md`
- `docs/handoff-3-interaction-qa/screenshots/interaction-qa-*.png`

Main design/UX improvements:

- Product Preview now behaves more like a real product shell.
- Filters, project rows, and map pins are locally interactive.
- Selected project state is more explicit.
- Mobile and desktop horizontal overflow checks pass.
- Product Preview no longer leaks sample-safe labels like `داده ماسک شده`.

Known regressions:

- No broken links or dead buttons found in this QA pass.
- No critical visual regression found after the sidebar containment fix.

## 2. Interaction QA Table

| Label | Location / section | Element type | Current target/action | Working? | If broken, what should happen |
|---|---|---:|---|---:|---|
| پرشین‌سازه logo | Header | link | `/` | yes | Navigate home |
| مسئله | Header desktop nav | link | `/#market-problem` | yes | Scroll to Market Problem |
| راه‌حل | Header desktop nav | link | `/#solution-overview` | yes | Scroll to Solution Overview |
| قابلیت‌ها | Header desktop nav | link | `/#demo-preview` | yes | Scroll to Product Preview |
| نحوه کار | Header desktop nav | link | `/#system-layers` | yes | Scroll to System Layers |
| مخاطبان | Header desktop nav | link | `/#audience` | yes | Scroll to Audience |
| پلن‌ها | Header desktop nav | link | `/#pricing` | yes | Scroll to Pricing |
| سوالات رایج | Header desktop nav | link | `/#faq` | yes | Scroll to FAQ |
| درخواست دمو | Header CTA | link | `/#demo` | yes | Scroll to Final Demo CTA |
| ۰۲۱-۷۵۴۲۵۰۰۰ | Header phone | link | `tel:+982175425000` | yes | Open phone action |
| Mobile menu trigger | Mobile header | button | Opens/closes mobile menu | yes | Toggle menu panel |
| Escape | Mobile menu | keyboard | Closes mobile menu | yes | Close menu panel |
| مسئله | Mobile menu | link | `/#market-problem` and closes menu | yes | Navigate and close |
| راه‌حل | Mobile menu | link | `/#solution-overview` and closes menu | yes | Navigate and close |
| قابلیت‌ها | Mobile menu | link | `/#demo-preview` and closes menu | yes | Navigate and close |
| نحوه کار | Mobile menu | link | `/#system-layers` and closes menu | yes | Navigate and close |
| مخاطبان | Mobile menu | link | `/#audience` and closes menu | yes | Navigate and close |
| پلن‌ها | Mobile menu | link | `/#pricing` and closes menu | yes | Navigate and close |
| سوالات رایج | Mobile menu | link | `/#faq` and closes menu | yes | Navigate and close |
| Mobile menu phone | Mobile menu | link | `tel:+982175425000` | yes | Open phone action |
| ثبت‌نام | Mobile menu | link | `/signup` | yes | Navigate to signup page |
| ورود | Mobile menu | link | `/login` | yes | Navigate to login page |
| درخواست دمو | Mobile menu | link | `/#demo` | yes | Scroll to Final Demo CTA |
| تماس | Mobile sticky action bar | link | `tel:+982175425000` | yes | Open phone action |
| ثبت‌نام | Mobile sticky action bar | link | `/signup` | yes | Navigate to signup page |
| ورود | Mobile sticky action bar | link | `/login` | yes | Navigate to login page |
| مشاهده دمو | Hero primary CTA | link | `#demo-preview` | yes | Scroll to Product Preview |
| دیدن قابلیت‌ها | Hero secondary CTA | link | `#solution-overview` | yes | Scroll to Solution Overview |
| آشنایی با راه‌حل پرشین‌سازه | Market Problem | link | `#solution-overview` | yes | Scroll to Solution Overview |
| مشاهده نمونه محصول | Solution Overview | link | `#demo-preview` | yes | Scroll to Product Preview |
| مرحله ساخت | Product Preview filters | dropdown button | Updates sample filter state | yes | Filter rows and pins |
| منطقه | Product Preview filters | dropdown button | Updates sample filter state | yes | Filter rows and pins |
| نوع اشتراک | Product Preview filters | dropdown button | Updates sample filter state | yes | Filter rows and pins |
| Active filter chips | Product Preview filters | static chips | Display selected filter values | yes | Should remain non-clickable/static |
| Project rows | Product Preview matched projects | buttons | Select row, pin, and project card | yes | Update selected project |
| Map pins | Product Preview map | buttons | Select pin, row, and project card | yes | Update selected project |
| Golden Window stage chips | System Layers | button chips | Update active stage insight | yes | Change stage insight text |
| مشاهده پلن‌ها | Pricing cards | link | `/pricing` | yes | Navigate to pricing page |
| FAQ rows | FAQ | details/summary accordion | Open/close on click and keyboard | yes | Toggle answer content |
| تماس با فروش | Final Demo CTA | link | `tel:+982175425000` | yes | Open phone action |
| مشاهده نمونه محصول | Final Demo CTA | link | `#demo-preview` | yes | Scroll to Product Preview |
| Footer brand | Footer | link | `/` | yes | Navigate home |
| Footer phone 1 | Footer | link | `tel:+982175425000` | yes | Open phone action |
| Footer phone 2 | Footer | link | `tel:+982172897000` | yes | Open phone action |
| Footer main pages | Footer | links | `/features`, `/pricing`, `/faq`, city pages | yes | Navigate to existing routes |
| Footer cities | Footer | links | `/cities/tehran`, `/cities/karaj`, `/cities/lavasan` | yes | Navigate to existing routes |
| Footer supplier categories | Footer | links | `/suppliers/...` | yes | Navigate to existing routes |
| Footer construction stages | Footer | links | `/construction-stages/...` | yes | Navigate to existing routes |
| Footer feature anchors | Footer | links | `/features#map`, `/features#filters`, `/features#crm`, `/features#ai` | yes | Navigate to feature anchors |

No blockers found.

## 3. Anchor / Route Map

| Section ID | Exists? | Incoming homepage links / CTAs |
|---|---:|---|
| `#market-problem` | yes | Header `مسئله`, mobile menu `مسئله` |
| `#solution-overview` | yes | Header `راه‌حل`, mobile menu `راه‌حل`, Hero `دیدن قابلیت‌ها`, Market Problem CTA |
| `#demo-preview` | yes | Header `قابلیت‌ها`, mobile menu `قابلیت‌ها`, Hero `مشاهده دمو`, Solution CTA, Final CTA secondary |
| `#system-layers` | yes | Header `نحوه کار`, mobile menu `نحوه کار` |
| `#audience` | yes | Header `مخاطبان`, mobile menu `مخاطبان` |
| `#pricing` | yes | Header `پلن‌ها`, mobile menu `پلن‌ها` |
| `#faq` | yes | Header `سوالات رایج`, mobile menu `سوالات رایج` |
| `#demo` | yes | Header `درخواست دمو`, mobile menu `درخواست دمو`, Product Preview CTA |

Checked internal routes:

- `/`
- `/features`
- `/pricing`
- `/faq`
- `/signup`
- `/login`
- `/cities/tehran`
- `/cities/karaj`
- `/cities/lavasan`
- `/suppliers/cement-and-basic-materials`
- `/suppliers/elevator`
- `/suppliers/facade`
- `/suppliers/doors-windows`
- `/suppliers/mechanical-electrical`
- `/suppliers/interior-finishing`
- `/construction-stages/demolition-excavation`
- `/construction-stages/foundation`
- `/construction-stages/structure`
- `/construction-stages/masonry`
- `/construction-stages/plaster`
- `/construction-stages/early-finishing`
- `/features#map`
- `/features#filters`
- `/features#crm`
- `/features#ai`

All returned `200`.

## 4. Product Preview State Audit

| Question | Current state |
|---|---|
| Are filters interactive or static? | Interactive local React state. |
| Are project rows interactive? | Yes. Clicking a row updates selected row, selected pin, and selected card. |
| Are map pins interactive? | Yes. Clicking a pin updates selected pin, selected row, and selected card. |
| Does selected pin update selected row/card? | Yes. Verified with `پروژه قابل پیگیری`. |
| Does selected row update selected pin/card? | Yes. Verified with `فرصت مرتبط با تیم فروش`. |
| Does stage filtering work? | Yes. `تخریب و گودبرداری` filters to `۱ مورد نمونه`; `نازک کاری` filters to multiple related sample opportunities. |
| Is all data sample/safe? | Yes. Text is sample/product-like and avoids real identity data. |
| Any real address? | No real address found. |
| Any real phone inside Product Preview? | No. |
| Any real project ID? | No. |
| Any real project photo? | No. Uses a stylized placeholder. |
| Any real screenshot/map tile? | No. Built with HTML/CSS/SVG-like primitives. |

Product Preview is acceptable for a marketing proof section. It is not a full app and should not be treated as one.

## 5. Mobile Screenshots

Viewport: `440px × 956px`

| Shot | File |
|---|---|
| Hero | `screenshots/interaction-qa-01-mobile-hero.png` |
| Mobile menu open | `screenshots/interaction-qa-02-mobile-menu-open.png` |
| Product Preview top/map | `screenshots/interaction-qa-03-mobile-product-preview-top-map.png` |
| Product Preview selected card/lower part | `screenshots/interaction-qa-04-mobile-product-preview-selected-card-lower.png` |
| System Layers | `screenshots/interaction-qa-05-mobile-system-layers.png` |
| Audience/Pricing | `screenshots/interaction-qa-06-mobile-audience-pricing.png` |
| FAQ/Final CTA | `screenshots/interaction-qa-07-mobile-faq-final-cta.png` |

## 6. Desktop Screenshots

Viewport: `1440px × 900px`

| Shot | File |
|---|---|
| Hero | `screenshots/interaction-qa-08-desktop-hero.png` |
| Market Problem | `screenshots/interaction-qa-09-desktop-market-problem.png` |
| Solution Overview | `screenshots/interaction-qa-10-desktop-solution-overview.png` |
| Product Preview top | `screenshots/interaction-qa-11-desktop-product-preview-top.png` |
| Product Preview lower/card | `screenshots/interaction-qa-12-desktop-product-preview-lower-card.png` |
| System Layers | `screenshots/interaction-qa-13-desktop-system-layers.png` |
| Audience/Pricing | `screenshots/interaction-qa-14-desktop-audience-pricing.png` |
| FAQ/Final CTA/Footer | `screenshots/interaction-qa-15-desktop-faq-final-cta-footer.png` |

## 7. Visual Review Notes

Does it still feel generic SaaS?

- Less than before. Product Preview, hero theater, map motifs, and warm palette now give the page a clearer PersianSaze identity.
- Some audience/pricing cards still retain a familiar SaaS card rhythm, but they are not the main product proof section.

Does it feel warmer and more PersianSaze/editorial?

- Yes. Warm ivory/oatmeal surfaces, clay/amber accents, and construction-map motifs are now more consistent.

Is Product Preview strong enough as product proof?

- Yes for a homepage proof section.
- It now communicates: filter projects → inspect map → select project → review sample-safe detail → follow up.
- Remaining risk is expectation setting: it looks like a product shell but is still intentionally not a full app.

Is mobile Hero too long or acceptable?

- Acceptable. It is still content-rich, but the first viewport communicates audience, value, CTA, and product energy.

Remaining visual problems:

- Product Preview is still long on mobile.
- Pricing is intentionally light on real price detail; this is acceptable because it links to `/pricing`.
- Footer is visually integrated, but desktop FAQ/final/footer region can still feel dense near the end.

## 8. SEO/AEO/GEO Preservation Check

Visible DOM text check:

| Required term | Visible? |
|---|---:|
| پرشین‌سازه | yes |
| پروژه‌های ساختمانی | yes |
| پروژه‌های در حال ساخت | yes |
| تأمین‌کنندگان محصولات و خدمات ساختمانی | yes |
| اطلاعات به‌روز پروژه‌ها | yes |
| نقشه پروژه‌ها | yes |
| مرحله ساخت | yes |
| فیلتر فروش | yes |
| پیگیری فروش | yes |
| فروش پروژه‌محور | yes |
| اشتراک پرشین‌سازه | yes |
| درخواست دمو | yes |

Additional checks:

- Internal terms `SEO`, `AEO`, `GEO` are not visible to users.
- FAQ remains crawlable DOM text using `details/summary`.
- FAQ still includes the clear definition question: `پرشین‌سازه چیست؟`
- Product visuals do not contain the only important text as images.
- Product Preview important labels remain DOM text.
- FAQ structured data remains present in `src/app/page.tsx`.

## 9. Build / QA Results

Commands:

- `npm run lint`: pass
- `npm run build`: pass

Browser QA:

- Fresh desktop console errors: none.
- Fresh mobile console errors: none.
- Hydration errors: none observed.
- Desktop horizontal overflow: no.
- Mobile horizontal overflow: no.
- Mobile sticky action bar: visible and usable. Final CTA area has bottom padding; no important CTA was blocked in the checked view.
- `prefers-reduced-motion`: respected in `src/app/globals.css`; non-essential route/panel/pin animations are disabled under reduced motion and smooth scroll is turned off.

Measured layout checks:

- Desktop client width and scroll width matched during QA.
- Mobile client width and scroll width matched during QA.
- Product Preview sidebar containment check passed after selecting `تخریب و گودبرداری`.

## 10. Known Remaining Issues

Critical:

- None.

High:

- None found in this QA pass.

Medium:

- Product Preview remains visually dense on mobile; acceptable, but a future pass could reduce vertical travel.
- Audience/Pricing still feel more like standard marketing cards than product proof. This is lower priority than Product Preview.
- Final FAQ/CTA/footer region could be tightened further on desktop, but current interactions and readability are sound.

Low:

- Footer includes many SEO route links; useful for discoverability, but visually dense.
- Product Preview uses sample placeholders for project image; realistic enough for safe marketing, but not representative of final app media handling.
- Some screenshots include the sticky mobile bar by design; it is functional and expected.

Suggested next cleanup order:

1. Keep current interaction behavior stable.
2. Do a small mobile Product Preview compression pass.
3. Tighten end-of-page spacing around FAQ and final CTA.
4. Review whether pricing should expose more plan detail on homepage or remain a route handoff to `/pricing`.
5. Prepare a reviewer prompt that focuses only on product proof clarity and mobile scanability.
