# PersianSaze Homepage Current Handoff After Visual Vitality Pass

Audit date: 2026-05-22  
Scope: current rendered homepage after Visual Vitality Pass. This document is a review handoff only; no redesign or implementation changes are included here.

## 1. Project State Summary

| Item | Current state |
|---|---|
| Homepage route | `/` |
| In-app browser URL at handoff request | `http://localhost:3004/` |
| Screenshot capture URL | `http://localhost:3005/` from fresh `next start` after latest build |
| Framework | Next.js App Router |
| Next.js / React | Next.js `15.5.15`, React `19.2.6` |
| Tailwind | `3.4.19` |
| Homepage file | `src/app/page.tsx` |
| Root layout | `src/app/layout.tsx` |
| Header / Footer | `src/components/marketing/site-header.tsx`, `src/components/marketing/site-footer.tsx` |
| FAQ | `src/components/marketing/faq-list.tsx` |
| Interactive Golden Window | `src/components/marketing/golden-window-preview.tsx` |
| Design data | `src/lib/site-data.ts` |
| Global CSS / motion | `src/app/globals.css` |

Latest Visual Vitality Pass changed the homepage from a mostly static white-card stack into a more product-led marketing page. The main new motif is: map lines + opportunity pins + sales workflow cards.

Visually affected sections:
- Hero
- Market Problem
- Solution Overview
- Product Preview
- System Layers
- Audience
- Pricing
- FAQ
- Final Demo CTA

Animations/interactions added:
- selected pin pulse
- floating hero/product panels
- dashed route motion
- subtle hover/active states
- interactive Golden Window stage selector
- FAQ plus icon transition
- `prefers-reduced-motion` guard for non-essential motion

No real project data, real screenshots, real photos, or generated realistic building photos are used.

## 2. Current Homepage Section Order

| Order | Section | Section id | Purpose | Current visual direction | Current interaction state | Known issue / concern |
|---:|---|---|---|---|---|---|
| 1 | Hero | none | Primary positioning, CTA, and first product signal | Split desktop composition: copy on RTL/right, product theater on left; compact product visual on mobile | CTA links, hover/active buttons, animated product visual | Mobile first viewport is much better, but product visual pushes proof cards lower. Badge can feel text-heavy. |
| 2 | Market Problem | `market-problem` | Explain scattered projects, outdated data, and timing loss | Light map-chaos visual with moving dashed paths, floating nodes, selected timing highlight | CTA link, node/route motion | Stronger than before, but still abstract; not a real product surface. |
| 3 | Solution Overview | `solution-overview` | Explain the three pillars: data, workflow tools, training | Three differentiated cards with mini UI motifs | Hover cards, CTA link | Still a 3-card SaaS pattern, though more differentiated now. |
| 4 | Product Preview | `demo-preview` | Main product proof: map, filters, project card, action hint, follow-up | Large product theater with map, selected pin, compact filters, matched projects, masked project card | Static filters, selected pin pulse, hover chips/cards, CTA link | Acceptable for this pass, but still the section most likely to benefit from focused product-preview polish. |
| 5 | System Layers | `system-layers` | Explain data collection/update layer and timing/sales logic | Two premium cards; data rail + map preview; Golden Window component | Golden Window stage chips update categories/insight | Concept is good; card height and information density need careful mobile review. |
| 6 | Audience | `audience` | Show target supplier sales models | Two cards with small product-use motifs for transactional and consultative sales | Hover states | Useful and clean, but still less memorable than hero/product sections. |
| 7 | Pricing | `pricing` | Preview subscription structure and route to pricing | Four pricing cards with small coverage motif; one highlighted plan | CTA links, hover states | Serious and readable, but price expectations may remain because nav says pricing while homepage hides numbers. |
| 8 | FAQ | `faq` | AEO-friendly purchase questions | Accordion container with better depth and plus icon states | Native `<details>` accordion | Functional and SEO-friendly; not as visually distinctive as product-led sections. |
| 9 | Final Demo CTA | `demo` | Conversion close for sales/demo | Large CTA card with product/demo route visual and sales contact panel | Tel link, sample product anchor | Stronger than before; footer may still feel visually separate after CTA. |
| 10 | Footer | none | Site navigation, SEO links, brand/company support | Existing footer | Static links | Not part of vitality pass; may need later alignment with new motif. |

## 3. Current Visual System Snapshot

| Token group | Current usage |
|---|---|
| Page background | `bg-[#faf9f6]`, `dark:bg-zinc-950`; root CSS `--background: 45 29% 97%` |
| Section background | Warm off-white base; hero uses `.hero-surface`; some sections use `bg-white/35`, `bg-white/40`, radial gradients, `map-parcel-pattern` |
| Card background | `bg-white/80`, `bg-white/84`, `bg-white/88`, `bg-white/90`, `bg-[#faf9f6]`, dark `bg-zinc-900/80`, `bg-zinc-950` |
| Border color | Mostly `border-zinc-200`, dark `border-zinc-800`; amber emphasis `border-amber-200`; sky chips `border-sky-200` |
| Text colors | Main `text-zinc-950`, secondary `text-zinc-600`, muted `text-zinc-500`, dark `text-white`, `text-zinc-400` |
| Primary button | `bg-zinc-950 text-white shadow-sm hover:bg-zinc-800`; dark inverse `dark:bg-white dark:text-zinc-950` |
| Secondary button | `border border-zinc-200 bg-white text-zinc-950 shadow-sm hover:bg-zinc-50`; dark `border-zinc-800 bg-zinc-950 text-white` |
| Accent colors | Near-black/zinc for authority; amber/gold `bg-amber-300`, `#f2b631`; teal `#16afa5`; navy `#1f2a44`; blue `#2878e8` inside map only |
| Product/map colors | Roads: `#f6cf63`, `#f2c84b`, white, `#d9dee7`; parcels: emerald tint; pins: navy/teal/blue/gold |
| Border radius | `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-[1.5rem]`, `rounded-[2rem]`; cards mostly large radius |
| Shadows | `shadow-sm`, `shadow-xl`, `shadow-2xl`, `shadow-zinc-950/[0.03-0.08]`, `shadow-amber-950/[0.04]` |
| Spacing scale | Sections mostly `py-14 md:py-20`; hero `pb-10 pt-10 md:py-16`; cards `p-3` to `p-8`; product frame `p-3 md:p-4` |
| Motion utilities | `.route-dash`, `.floating-node`, `.float-panel`, `.float-panel-delayed`, `.selected-pin-pulse`; disabled under `prefers-reduced-motion` |

## 4. Visual Vitality Audit

| Section | Current strength | Current weakness | Priority to fix |
|---|---|---|---|
| Hero | Feels product-led and alive; desktop empty side is solved; mobile has a compact product scene | Mobile hero is long; proof cards sit below the first visual and can be partially hidden by fold/action bar | Medium |
| Market Problem | Better market-chaos feel, clear timing motif, more energy | Still abstract; could become more explicitly tied to supplier pain without overbuilding | Medium |
| Solution Overview | Cards now have different mini UI motifs; less generic than before | Still a standard three-card section; visual distinction is useful but not memorable | Low/Medium |
| Product Preview | Strongest product proof; map/card/filter/follow-up story is visible | Still not a fully convincing product scene; mobile is dense; card-map relation could be clearer | High |
| System Layers | Data/update and timing logic feel more tangible; Golden Window is interactive | Dense on mobile; information hierarchy can be tightened | Medium |
| Audience | Supports business segmentation and B2B sales story | Visuals are modest; less emotionally engaging than earlier sections | Low |
| Pricing | Serious, clean, not dead; highlighted plan has stronger presence | Pricing preview may still feel generic; no real prices on homepage can create expectation mismatch | Medium |
| FAQ | Clean, readable, AEO-friendly | Visually utilitarian; not product-led | Low |
| Final Demo CTA | Better close with demo/product visual and clear CTAs | Could still connect more directly to salesperson workflow and lead qualification | Low/Medium |
| Footer | Stable existing footer | Not fully harmonized with new vitality motif | Low |

## 5. Product Preview Audit

| Area | Current assessment |
|---|---|
| Map realism | Improved. Roads, parcels, pins, selected state, and city badge make it feel like a product scene. Still abstract; not yet a truly believable production UI map. |
| Filter layout | Better than before. Filters are compact and support the scene. Selected chips are visible: `نازک‌کاری`, `غرب تهران`, `کمتر از ۵۰۰ متر`. |
| Selected project card quality | More premium than before; masked data, building placeholder, badges, and project fields are clear. Still could be more tightly connected to selected map pin. |
| Masked data safety | Good. Values are skeleton/masked and labels are DOM text. No real address, contact, photo, or project detail appears. |
| Action suggestion quality | Good direction. Amber/gold card is warm and not neon; wording avoids guarantee. Could be more visually tied to selected project. |
| Follow-up card quality | Clear CRM signal. It is useful but secondary; could be visually stronger if the next pass focuses on workflow. |
| Relation between map and project card | Improved through selected pin, selected matched row, and overlay card. Still not fully explicit; connector/glow could be clearer. |
| Mobile readability | Acceptable but dense. The map, filters, matched projects, and card stack vertically; sticky action bar can cover the bottom of a viewport but page padding protects final content. |
| Desktop composition | Strong and premium. The right map/left panel layout reads product-led and much less generic. |

Verdict: Product Preview is acceptable for the current design review and does not need a full rebuild immediately. It still deserves the next focused polish pass because it is the highest-conversion product proof section.

## 6. Hero Audit

| Area | Current assessment |
|---|---|
| Desktop composition | Strong. Split layout now balances the page: product theater on the left, copy/CTAs on the right. |
| Mobile composition | Readable and more alive. The product scene appears below CTAs; first viewport is richer but longer. |
| Product-led visual energy | Much improved. The mini map, selected pin, stage card, route chip, and follow-up chip make the product feel active. |
| CTA hierarchy | Clear. `مشاهده دمو` remains primary; `دیدن قابلیت‌ها` remains secondary. |
| Proof cards | More visual with icons and accent colors; still compact enough. |
| First viewport impression | No longer empty/static. It now says "living construction sales intelligence" faster. |
| Remaining emptiness/static risk | Desktop: solved. Mobile: not empty, but slightly heavy because hero copy + CTAs + product visual + proof cards all appear early. |

## 7. Interaction And Motion Audit

| Interaction / motion | Implemented? | Polished? | Needs improvement? |
|---|---:|---:|---|
| Button hover/press | Yes | Yes | Low |
| Card hover border/shadow/lift | Yes | Mostly | Low |
| Selected pin pulse | Yes | Yes, subtle | Low |
| Product visual floating panels | Yes | Mostly | Low |
| Dashed route/path movement | Yes | Yes, light | Low |
| Problem section floating nodes | Yes | Mostly | Low |
| Product Preview filters | Visual only | Adequate | Medium; can mislead if they look clickable |
| Product Preview map pins | Static except selected pulse | Adequate | Medium; optional future hover/selected state |
| Golden Window stage selector | Yes, local state | Yes | Low/Medium; content can be tighter |
| FAQ accordion | Yes, native `<details>` | Adequate | Low; shadcn-style accordion could be cleaner |
| Mobile drawer | Yes, native `<details>` | Basic | Medium; still not premium |
| Sticky mobile action bar | Yes | Strong conversion utility | Low; watch overlap in long product cards |
| `prefers-reduced-motion` | Yes | Good | Low |

## 8. SEO / AEO / GEO Preservation Check

Visible DOM text still includes the required terms:

| Required visible term | Status |
|---|---|
| پرشین‌سازه | Present |
| پروژه‌های ساختمانی | Present |
| پروژه‌های در حال ساخت | Present |
| تأمین‌کنندگان محصولات و خدمات ساختمانی | Present |
| اطلاعات به‌روز پروژه‌ها | Present |
| نقشه پروژه‌ها | Present |
| مرحله ساخت | Present |
| فیلتر فروش | Present |
| پیگیری فروش | Present |
| فروش پروژه‌محور | Present |
| اشتراک پرشین‌سازه | Present |
| درخواست دمو | Present |

Additional checks:
- No visible internal terms like `SEO`, `AEO`, or `GEO` are shown to users on the homepage.
- FAQ still includes a clear definition via `پرشین‌سازه چیست؟`.
- Important SEO/AEO/GEO text remains DOM text, not baked into images.
- Product visuals are HTML/CSS/SVG-like UI; no real screenshots or real project photos are used.

## 9. Screenshot Package

Screenshots were captured from the real rendered page at `http://localhost:3005/`.

Mobile viewport: `440px x 956px`

| Screenshot | File |
|---|---|
| Hero | `docs/audit-screenshots/handoff-2-01-mobile-hero.png` |
| Market Problem | `docs/audit-screenshots/handoff-2-02-mobile-problem.png` |
| Solution Overview | `docs/audit-screenshots/handoff-2-03-mobile-solution.png` |
| Product Preview map | `docs/audit-screenshots/handoff-2-04-mobile-product-preview-map.png` |
| Product Preview card | `docs/audit-screenshots/handoff-2-05-mobile-product-preview-card.png` |
| System Layers | `docs/audit-screenshots/handoff-2-06-mobile-system-layers.png` |
| Audience / Pricing | `docs/audit-screenshots/handoff-2-07-mobile-audience-pricing.png` |
| FAQ / Final CTA | `docs/audit-screenshots/handoff-2-08-mobile-faq-final-cta.png` |

Desktop viewport: `1440px x 900px`

| Screenshot | File |
|---|---|
| Hero | `docs/audit-screenshots/handoff-2-09-desktop-hero.png` |
| Market Problem | `docs/audit-screenshots/handoff-2-10-desktop-problem.png` |
| Solution Overview | `docs/audit-screenshots/handoff-2-11-desktop-solution.png` |
| Product Preview top | `docs/audit-screenshots/handoff-2-12-desktop-product-preview-top.png` |
| Product Preview card | `docs/audit-screenshots/handoff-2-13-desktop-product-preview-card.png` |
| System Layers | `docs/audit-screenshots/handoff-2-14-desktop-system-layers.png` |
| Audience / Pricing | `docs/audit-screenshots/handoff-2-15-desktop-audience-pricing.png` |
| FAQ / Final CTA / Footer region | `docs/audit-screenshots/handoff-2-16-desktop-faq-final-footer.png` |

## 10. Current Files Changed

Files changed in the latest Visual Vitality Pass:
- `src/app/page.tsx`
- `src/app/globals.css`
- `src/components/marketing/golden-window-preview.tsx`
- `src/components/marketing/faq-list.tsx`
- `src/components/marketing/site-header.tsx`
- `src/components/ui/badge.tsx`

Files changed for this handoff package:
- `docs/homepage-current-handoff-after-vitality.md`
- `docs/audit-screenshots/handoff-2-01-mobile-hero.png`
- `docs/audit-screenshots/handoff-2-02-mobile-problem.png`
- `docs/audit-screenshots/handoff-2-03-mobile-solution.png`
- `docs/audit-screenshots/handoff-2-04-mobile-product-preview-map.png`
- `docs/audit-screenshots/handoff-2-05-mobile-product-preview-card.png`
- `docs/audit-screenshots/handoff-2-06-mobile-system-layers.png`
- `docs/audit-screenshots/handoff-2-07-mobile-audience-pricing.png`
- `docs/audit-screenshots/handoff-2-08-mobile-faq-final-cta.png`
- `docs/audit-screenshots/handoff-2-09-desktop-hero.png`
- `docs/audit-screenshots/handoff-2-10-desktop-problem.png`
- `docs/audit-screenshots/handoff-2-11-desktop-solution.png`
- `docs/audit-screenshots/handoff-2-12-desktop-product-preview-top.png`
- `docs/audit-screenshots/handoff-2-13-desktop-product-preview-card.png`
- `docs/audit-screenshots/handoff-2-14-desktop-system-layers.png`
- `docs/audit-screenshots/handoff-2-15-desktop-audience-pricing.png`
- `docs/audit-screenshots/handoff-2-16-desktop-faq-final-footer.png`

Likely files for next design fixes:
- `src/app/page.tsx`
- `src/app/globals.css`
- `src/components/marketing/golden-window-preview.tsx`
- `src/components/marketing/faq-list.tsx`
- `src/components/marketing/site-header.tsx`
- `src/components/marketing/mobile-action-bar.tsx`
- `src/components/marketing/site-footer.tsx`
- `src/components/ui/button.tsx`
- `src/components/ui/card.tsx`
- `src/components/ui/badge.tsx`
- `src/lib/site-data.ts`

## 11. Build / QA

| Check | Result |
|---|---|
| `npm run lint` | Pass |
| `npm run build` | Pass |
| Build warnings | None observed |
| Mobile QA viewport | `440px x 956px` screenshots captured |
| Desktop QA viewport | `1440px x 900px` screenshots captured |
| Horizontal overflow | No horizontal overflow detected in automated viewport check: mobile `scrollWidth=440`, desktop `scrollWidth=1440` |
| Sticky mobile action bar overlap | Sticky bar is visible in mobile screenshots and can cover the bottom of the current viewport by design; final page layout has bottom padding in root layout, so terminal content is not blocked. Product Preview card screenshot should still be reviewed because dense mobile sections can visually sit behind the bar near viewport bottom. |

## 12. Final Summary

### Top 10 Remaining Visual Issues

1. Product Preview still looks like a designed mockup, not a fully believable product UI.
2. Mobile Hero is richer but long; first fold is content-heavy.
3. Solution Overview remains a recognizable three-card SaaS pattern.
4. Market Problem is more alive but still abstract.
5. System Layers is conceptually strong but visually dense on mobile.
6. Audience section is clean but not especially memorable.
7. Pricing cards are serious but still conventional.
8. FAQ is functional but visually quieter than the new product-led sections.
9. Footer has not fully absorbed the new map/pin/workflow motif.
10. Some radius/shadow treatments are premium but still slightly broad; future pass can tighten system consistency.

### Top 10 Remaining UX / Product Preview Issues

1. Product Preview filters look clickable but do not change the preview.
2. Selected map pin and selected project card relationship could be more explicit.
3. Follow-up card is useful but visually secondary.
4. Mobile Product Preview stack is dense and long.
5. Map realism is improved but still abstract.
6. Project card could better communicate real product hierarchy without adding real data.
7. Action suggestion could be tied more directly to the selected opportunity.
8. Matched project rows are static and not linked to pin selection.
9. Product Preview has many visual elements; reviewer should check scan order.
10. Sticky mobile action bar can visually cover the bottom of dense screenshots, even if layout padding protects final content.

### Top 10 Remaining SEO / AEO / GEO / Content Risks

1. Homepage has strong required terms, but repetition should be monitored so copy does not feel keyword-stuffed.
2. FAQ is AEO-friendly, but only first six FAQs are shown on homepage.
3. Pricing section says subscription and pricing, but homepage does not show actual prices.
4. Product Preview uses safe sample labels, but `پروژه نمونه` appears multiple times and can feel generic.
5. Some product labels are intentionally masked; reviewer should confirm they still communicate enough value.
6. English `FAQ` remains visible as an eyebrow/nav label; acceptable, but Persian-first tone could be reviewed.
7. Hero badge is SEO-rich but long on mobile.
8. Some visible copy still explains the system broadly rather than sharply segmenting supplier use cases.
9. Footer SEO links should be checked against final information architecture later.
10. AI-related terms are minimal on homepage; if AI positioning matters later, add carefully without diluting construction intelligence identity.

### Suggested Next Cleanup Order

1. Product Preview focused polish: map-card relation, static filters, mobile density.
2. Mobile Hero tuning: fold height, proof card placement, badge length.
3. System Layers mobile hierarchy and Golden Window content compression.
4. Pricing expectation cleanup: decide whether homepage should show price ranges or stay plan-architecture-only.
5. Solution Overview differentiation: reduce generic three-card feel.
6. Mobile drawer upgrade from native details to a more polished sheet pattern.
7. FAQ visual integration without hurting AEO clarity.
8. Footer alignment with the new product motif.
9. Copy polish for repeated sample labels and overly generic preview wording.
10. Final full-page screenshot review after the next focused Product Preview pass.
