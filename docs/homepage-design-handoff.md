# PersianSaze Homepage Design Handoff

Audit date: 2026-05-21  
Scope: current rendered homepage state only. No implementation fixes are included in this handoff.

## 1. Current Route And Build Info

| Item | Current State |
|---|---|
| Homepage route/path | `/` |
| Local audit URL | `http://localhost:3000/` |
| Framework | Next.js App Router |
| Next.js version | `15.5.15` |
| React version | `19.2.6` |
| Tailwind version | `3.4.19` |
| Homepage page file | `src/app/page.tsx` |
| Main homepage component file | No separate homepage component; homepage sections are mostly inline in `src/app/page.tsx` |
| Root layout | `src/app/layout.tsx` |
| Header | `src/components/marketing/site-header.tsx` |
| Footer | `src/components/marketing/site-footer.tsx` |
| Mobile action bar | `src/components/marketing/mobile-action-bar.tsx` |
| Shared section header | `src/components/marketing/section-header.tsx` |
| FAQ component | `src/components/marketing/faq-list.tsx` |
| Structured data component | `src/components/marketing/structured-data.tsx` |
| UI primitives used | `src/components/ui/button.tsx`, `src/components/ui/card.tsx`, `src/components/ui/badge.tsx` |
| Site data | `src/lib/site-data.ts` |
| Global CSS | `src/app/globals.css` |
| Tailwind config | `tailwind.config.ts` |
| Font setup | `@fontsource/vazirmatn` in `globals.css`; local Geist variables also registered in `layout.tsx` but Vazirmatn is the active body font |
| Current screenshot source | Real rendered localhost page, not mockups |

## 2. Current Section Inventory

| Order | Section name | Section id | Main purpose | Component/file path | Current visual state | Current interaction state | Known issue / concern |
|---:|---|---|---|---|---|---|---|
| 1 | Hero | none | First-positioning message and primary conversion | `src/app/page.tsx` | Light warm hero, one-column content, badge, H1, paragraph, two CTAs, three proof cards | CTA links: `#demo-preview`, `#features` | Hero lacks a product visual now; first viewport feels text-heavy but compact. Copy has spacing/punctuation issue around `ساختمانی ،` and `شروع می شود`. |
| 2 | Market Problem | `market-problem`; hidden alias `problem` | Explain scattered projects, incomplete info, timing loss | `src/app/page.tsx` / `MarketProblemSection` | Two-column desktop, stacked mobile, abstract problem graphic | CTA to `#solution-overview` | Strong section, but graphic may still feel abstract compared with later product UI. |
| 3 | Solution Overview | `solution-overview`; hidden aliases `solution`, `features` | Explain three pillars: info, tools, training | `src/app/page.tsx` / `SolutionOverviewSection` | Three white/soft cards with icons | CTA to `#demo-preview` | Strong, but it repeats hero/proof-card concepts almost verbatim. |
| 4 | Product Preview / Demo Map | `demo-preview` | Show map discovery, filters, matched projects, sample project structure, action/follow-up | `src/app/page.tsx` / `ProductPreviewSection` | Large product frame with light map, multi-color pins, filter panel, project card, masked values | Static filter buttons with active states; CTA to `#demo` | Strongest product proof, but visual density is high on mobile and map is still CSS-abstract rather than truly map-like. |
| 5 | System Layers / Golden Window | `system-layers` | Explain collection/update layer and timing/sales logic | `src/app/page.tsx` / `SystemLayersSection` | Two large cards, flow steps, static Golden Window selector | Static stage selector; `سفت‌کاری` active; CTA to `#demo` | Good concept, but overlaps with later standalone Golden Window section. |
| 6 | Audience | `audience` | Segment transactional vs consultative suppliers | `src/app/page.tsx` inline section | Two cards with badges and tags | Static | Useful, but should probably move before pricing and after solution/product depending final story. |
| 7 | Golden Window Concept | none | Conceptual explanation of stage, execution time, sales time | `src/app/page.tsx` inline section | Three cards, third card dark | Static | Duplicates System Layers Golden Window idea. Missing section id makes nav/deep-linking weaker. |
| 8 | Workflow | `workflow` | Show steps from search to follow-up | `src/app/page.tsx` inline section | Text + card list | Static | Overlaps Product Preview and System Layers; needs role clarified. |
| 9 | Pricing Preview | `pricing` | Show four plan cards and route to pricing page | `src/app/page.tsx` inline section; data in `src/lib/site-data.ts` | Four cards, `رویان` highlighted dark | Links to `/pricing` | Homepage pricing is architecture-only, but copy says pricing while prices are hidden; may confuse. |
| 10 | FAQ Preview | `faq` | Answer buying questions and support AEO/GEO | `src/app/page.tsx` + `FaqList` | Details accordion in bordered container | Native `<details>` expand/collapse | Good for AEO, but FAQ route and homepage FAQ overlap. |
| 11 | Final Demo CTA | `demo` | Conversion and sales contact | `src/app/page.tsx` inline section | White CTA card, amber blur accent, sales contact panel | `tel:` CTA and `/features` link | Solid, but `دیدن جزئیات محصول` points away from conversion. |

## 3. Current Copy Inventory

### Hero

- Eyebrow: `اطلاعات به‌روز از پروژه‌های در حال ساخت، برای تأمین‌کنندگان محصولات و خدمات ساختمانی`
- H1: `پروژه‌های ساختمانی فعال را زودتر پیدا کنید`
- Body: `در بازار محصولات و خدمات ساختمانی ، فروش موفق از رسیدن به پروژه مناسب در زمان درست شروع می شود. پرشین‌سازه پروژه‌های در حال ساخت در تهران، کرج و لواسان را جمع‌آوری و دسته‌بندی می‌کند تا تأمین‌کنندگان بتوانند با دید روشن‌تر، پروژه‌های مرتبط را سریع‌تر بررسی و پیگیری کنند.`
- CTAs: `مشاهده دمو` -> `#demo-preview`; `دیدن قابلیت‌ها` -> `#features`
- Proof cards: `داده پروژه`, `ابزار پیگیری`, `آموزش فروش`
- Repeated phrases: `پروژه‌های در حال ساخت`, `پروژه مناسب`, `پیگیری`
- Potential copy concern: punctuation and half-space consistency; `زودتر` is useful but repeated later and may need restraint.

### Market Problem

- Eyebrow: `مسئله بازار`
- H2: `فروش در بازار ساختمان، فقط به داشتن محصول خوب بستگی ندارد`
- Body: explains scattered projects, inaccurate/outdated market info, early/late contact, lost sales opportunity.
- CTA: `آشنایی با راه‌حل پرشین‌سازه` -> `#solution-overview`
- Graphic copy: `پراکندگی پروژه‌ها`, `اطلاعات ناقص`, `زمان مناسب`, rows `پروژه A/B/C`
- Potential copy concern: sample labels `پروژه A/B/C` feel placeholder-like.

### Solution Overview

- Eyebrow: `راه‌حل پرشین‌سازه`
- H2: `پرشین‌سازه پیدا کردن پروژه مناسب را ساده‌تر می‌کند`
- Body: combines up-to-date project information, sales execution tools, and training.
- Cards: `اطلاعات به‌روز پروژه‌ها`, `ابزارهای اجرایی فروش`, `آموزش برای استفاده بهتر`
- CTA: `مشاهده نمونه محصول` -> `#demo-preview`
- Repeated phrases: `اطلاعات به‌روز`, `پروژه مناسب`, `پیگیری`
- Potential copy concern: good but very close to hero proof cards; may need sharper differentiation.

### Product Preview / Demo Map

- Eyebrow: `پیش‌نمایش محصول برای تأمین‌کنندگان محصولات و خدمات ساختمانی`
- H2: `پروژه‌ها را روی نقشه ببینید و سریع‌تر بررسی کنید`
- Body: explains visible project info, construction stage, sales filter, suggested action, next follow-up.
- Key labels: `نقشه فرصت‌های فعال`, `فرصت‌های فروش قابل پیگیری`, `فیلتر فروش`, `پروژه‌های منطبق`, `پروژه مسکونی نمونه`, `پیشنهاد اقدام`, `پیگیری بعدی`
- CTA: `درخواست دمو` -> `#demo`
- Potential copy concern: clear and AEO-friendly, but maybe too much explanatory copy before product UI on mobile.

### System Layers / Golden Window

- Eyebrow: `روش کار پرشین‌سازه`
- H2: `پرشین‌سازه فقط نمایش پروژه نیست؛ یک مسیر روشن برای فروش می‌سازد`
- Body: explains collection, review, updating, sales tools, smart analysis, supplier evaluation/follow-up.
- Card titles: `لایه جمع‌آوری و به‌روزرسانی اطلاعات`, `لایه تحلیل و زمان‌بندی فروش`
- Golden Window labels: `پنجره طلایی فروش`, stages from `تخریب` to `ظریف‌کاری`
- CTA: `درخواست دمو` -> `#demo`
- Potential copy concern: overlaps the later standalone `پنجره طلایی فروش` section and Workflow section.

### Audience

- Eyebrow: `مخاطبان`
- H2: `برای دو مدل فروش متفاوت، یک پیام واحد کافی نیست.`
- Body: `پرشین‌سازه برای تأمین‌کنندگانی ساخته شده که فروششان به شناسایی پروژه، زمان مناسب و پیگیری وابسته است.`
- Cards: `فروش سریع و تراکنشی`, `فروش مشاوره‌ای و تصمیم‌ساز`
- CTA: none
- Potential copy concern: useful segmentation, but lacks explicit CTA or next step.

### Golden Window Concept

- Eyebrow: `پنجره طلایی فروش`
- H2: `مرحله ساخت مهم است؛ اما زمان فروش مهم‌تر است.`
- Body: explains construction lifecycle and supplier timing.
- Cards: `مرحله ساخت`, `زمان اجرا`, `زمان فروش`
- CTA: none
- Potential copy concern: repeated with System Layers; likely a merge candidate.

### Workflow

- Eyebrow: `Workflow`
- H2: `از جست‌وجو تا پیگیری، مسیر فروش باید قابل اجرا باشد.`
- Body: tools turn project data into action, follow-up, learning.
- Steps: search/filter, review, save in CRM, call/SMS/follow-up, reporting/learning.
- CTA: none
- Potential copy concern: English eyebrow breaks Persian-first tone; overlaps product preview.

### Pricing Preview

- Eyebrow: `پلن‌ها`
- H2: `پلن‌ها میدان فروش را تعریف می‌کنند، نه فقط قیمت را.`
- Body: plans are based on project size, construction stages, market coverage.
- CTA: four `مشاهده جزئیات` links -> `/pricing`
- Potential copy concern: no actual prices on homepage despite `قیمت` nav; may be okay if intentional.

### FAQ Preview

- Eyebrow: `FAQ`
- H2: `پرسش‌هایی که قبل از خرید باید شفاف شوند.`
- Body: `FAQ برای پاسخ‌گویی به سوالات واقعی خرید و کمک به AEO/GEO حفظ شده است.`
- CTA: none
- Potential copy concern: phrase `کمک به AEO/GEO` is internal strategy language, not customer-facing copy.

### Final Demo CTA

- Eyebrow: `درخواست دمو`
- H2: `پرشین‌سازه زیرساخت فروش پروژه‌محور در بازار ساختمان است.`
- Body: demo starts by clarifying product type, target city, important stages, and sales model.
- CTAs: `تماس با فروش` -> `tel:02175425000`; `دیدن جزئیات محصول` -> `/features`
- Potential copy concern: good conversion block, but second CTA may dilute demo intent.

## 4. SEO / AEO / GEO Audit

| Section | SEO status | AEO status | GEO status | Missing terms | Recommended content adjustment, without implementing it |
|---|---|---|---|---|---|
| Hero | Strong | Strong | Strong | Could add `نقشه پروژه‌ها` only if not overloading hero | Clean punctuation and keep as concise primary answer. |
| Market Problem | Strong | Strong | Strong | `پروژه‌های ساختمانی` could be more explicit in body | Replace `پروژه A/B/C` with more human labels while staying non-real. |
| Solution Overview | Strong | Strong | Strong | none major | Differentiate card copy from hero proof cards with sharper role: information, execution, enablement. |
| Product Preview | Strong | Strong | Strong | none major | Keep important labels as DOM text; consider reducing preface length on mobile. |
| System Layers | Strong | Strong | Strong | none major | Merge or coordinate with later Golden Window to avoid duplicate entity signals. |
| Audience | Medium | Medium | Medium | `تأمین‌کنندگان محصولات و خدمات ساختمانی`, `پروژه‌های در حال ساخت` | Add a clearer one-line answer about who should use PersianSaze. |
| Golden Window Concept | Medium | Medium | Medium | `تأمین‌کنندگان محصولات و خدمات ساختمانی`, `پیگیری فروش` | Merge into System Layers or make it a deeper use-case section with unique content. |
| Workflow | Medium | Strong | Medium | `پروژه‌های ساختمانی`, `تأمین‌کنندگان` | Change `Workflow` eyebrow to Persian and clarify this is a sales workflow, not generic process. |
| Pricing Preview | Medium | Medium | Medium | `اشتراک`, `قیمت پرشین‌سازه`, `پلن پرشین‌سازه` | Decide whether homepage should show pricing ranges, plan architecture, or just route to pricing page. |
| FAQ Preview | Strong | Strong | Strong | none major | Remove internal wording `AEO/GEO` from visible customer-facing copy. |
| Final Demo CTA | Medium | Strong | Medium | `تأمین‌کنندگان محصولات و خدمات ساختمانی` | Add one concise line tying demo to supplier sales workflow. |

## 5. Visual Consistency Audit

### Actual Visual Tokens Currently Used

| Token group | Current usage |
|---|---|
| Main background | `#faf9f6`, `bg-background`, dark `zinc-950` |
| Hero background | `hero-surface` radial gradients over `#faf9f6` |
| Card backgrounds | `bg-white/80`, `bg-white`, `bg-[#faf9f6]`, dark `bg-zinc-900/80`, `bg-zinc-950` |
| Border colors | `border-zinc-200`, `border-border`, `dark:border-zinc-800`, occasional `border-amber-200` |
| Accent colors | Amber/yellow: `bg-amber-300`, `bg-amber-50`, `#f2b631`; product preview also uses blue `#2878e8`, teal `#16afa5`, navy `#1f2a44` |
| Text colors | `text-zinc-950`, `text-zinc-600`, `text-zinc-500`, `text-muted-foreground`, dark `text-zinc-400`, white |
| Button colors | Primary `bg-zinc-950 text-white`; outline `bg-white border-zinc-200`; dark mode inverse |
| Shadows | `shadow-sm`, `shadow-lg`, `shadow-xl`, custom mobile bar shadow, subtle zinc shadows |
| Radius values | `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-[1.5rem]`, `rounded-[2rem]` |
| Spacing patterns | Sections mostly `py-8 md:py-12`; hero `pb-10 pt-10 md:py-14`; cards `p-4`, `p-5`, `p-6`, `p-8` |

### Visual Concerns

- Too colorful: Product preview map introduces blue/teal/gold/navy, which is useful for realism but currently feels like a separate product palette.
- Too black/white: Pricing highlighted card and some selected chips use strong black; acceptable, but repeated dark emphasis may dilute primary CTA hierarchy.
- Card inconsistency: Most cards use `rounded-3xl`, but footer logo uses `rounded-md`, FAQ uses `rounded-lg`, header logo `rounded-2xl`, final CTA `rounded-[2rem]`.
- Spacing rhythm: New compact sections work better, but after System Layers the older sections continue with a slightly different story rhythm.
- Section transitions: Hero -> Problem -> Solution -> Product Preview works. Product Preview -> System Layers also works. System Layers -> Audience feels abrupt.
- Visual hierarchy weakness: Later sections after System Layers feel less polished than the rebuilt first half.

## 6. Component Quality Audit

| Component | File path | Current behavior | Current styling | Current problems | Recommendation |
|---|---|---|---|---|---|
| Mobile header | `src/components/marketing/site-header.tsx` | Sticky, phone pill, details-based hamburger, theme toggle inside drawer | Off-white translucent header, black logo mark | Uses native `<details>` instead of shadcn Sheet; drawer state/close behavior is basic | Keep structure, redesign drawer later |
| Sticky bottom mobile action bar | `src/components/marketing/mobile-action-bar.tsx` | Fixed bottom with call/signup/login | White pill/card, safe-area padding, centered signup | Good; can cover visual review if section bottom padding is not enough | Keep |
| Hero CTA buttons | `src/app/page.tsx`, `src/components/ui/button.tsx` | Anchor scroll to demo/features | Strong zinc primary + outline secondary | Good hierarchy; secondary target `#features` is hidden alias in Solution section | Keep, verify target naming later |
| Three hero proof cards | `src/app/page.tsx` | Static three cards | Light cards, centered titles | Useful but visually cramped on mobile and repeats Solution pillars | Simplify or merge language later |
| Problem graphic | `src/app/page.tsx` / `MarketProblemSection` | Static abstract network, rows, timing axis | Light abstract card | Communicates concept, not product reality | Keep for now; improve labels |
| Solution cards | `src/app/page.tsx` / `SolutionOverviewSection` | Static cards with icons | Premium white cards | Same concepts as proof cards | Keep but sharpen |
| Product preview map | `src/app/page.tsx` / `ProductPreviewSection` | Static CSS map with pins and selected marker | Light map, colored pins, street lines | Professional enough directionally, but still decorative/abstract | Redesign/polish, not remove |
| Filter panel | `src/app/page.tsx` / `ProductPreviewSection` | Static active filter chips | Compact white panel | Buttons imply interaction but do not update state | Either make interactive or visually mark as preview |
| Matched project list | `src/app/page.tsx` / `ProductPreviewSection` | Static sample rows with masked lines | Small rows and stage tags | Good privacy safety; repeated `پروژه نمونه` feels generic | Keep, improve sample naming without real data |
| Sample project card | `src/app/page.tsx` / `ProductPreviewSection` | Static card with masked fields | White project card + CSS placeholder visual | Good privacy; could feel more product-real if structure resembles actual modal/card more | Redesign for realism later |
| Action suggestion card | `src/app/page.tsx` / `ProductPreviewSection` | Static warm suggestion | Yellow/amber card | Good non-guarantee wording | Keep |
| Next follow-up card | `src/app/page.tsx` / `ProductPreviewSection` | Static follow-up note | Soft bordered card | Good CRM signal; maybe too small in desktop hierarchy | Keep |
| Golden Window / stage selector | `src/app/page.tsx` / `SystemLayersSection` | Static active `سفت‌کاری` | Pills/chips, active black chip | Looks clickable but does not update content | Make interactive later or remove button affordance |

## 7. Product Preview Realism Audit

- Does the map feel like a professional product preview? Mostly yes. It is cleaner than a cartoon and avoids fake screenshots/photos.
- Does it feel too fake, too flat, or too decorative? Somewhat. Streets/blocks are abstract; pins are convincing enough, but the map lacks real product-level depth.
- Are pins, streets, blocks, and selected states visually convincing? Pins and selected state are clear. Streets are acceptable but too decorative; blocks could use more realistic map geometry.
- Are filters clean and useful? Yes. Stage, region, land area, and floor count communicate supplier value.
- Are unnecessary filters removed? Yes. No subscription type, city filter, internal admin actions, folders, delete, or report-error controls are shown.
- Is the project card professional enough? It is safe and structured, but should become closer to a real PersianSaze card/modal structure in the next design pass.
- Are real data and private details safely hidden/masked? Yes. Fields are visible; values are masked/skeleton-like.
- Are report error, folder, delete, admin, and internal actions removed? Yes.
- Does the section clearly show map discovery, filtering, project review, action suggestion, and follow-up? Yes.

## 8. Interaction And Animation Audit

| Interaction | Implemented? | Current feel | Recommended improvement, without implementing it |
|---|---:|---|---|
| Header nav hover | Yes | Polished enough | Keep subtle hover; add active section state only if useful. |
| Theme toggle | Yes | Functional | Consider smoother icon transition, but not urgent. |
| Mobile hamburger drawer | Basic via `<details>` | Serviceable but not premium | Replace with shadcn Sheet later. |
| Hero CTA scroll | Yes | Good | Confirm `#features` should remain a hidden alias or become a real feature section. |
| Card hover states | Limited | Mostly static | Add restrained hover only to interactive cards, not all cards. |
| Product preview filter chips | Visual only | Weak if users expect click | Either implement small client-side demo state or remove button affordance. |
| Map selected pin | Static | Clear but not alive | Add subtle selected state/callout; avoid animation overload. |
| Matched projects rows | Static | Fine for preview | Could highlight selected row if tied to map. |
| Golden Window stage selector | Visual only | Weak because buttons look interactive | Make client-side interactive or present as segmented timeline without buttons. |
| FAQ accordion | Yes, native details | Works, simple | Good enough; can replace with shadcn Accordion for consistency later. |
| Mobile action bar | Yes | Strong and useful | Keep; ensure all sections have enough bottom breathing room. |
| CTA active states | Yes | Good via `active:translate-y-px` | Keep. |

## 9. Repetition And Overlap Audit

### Repeated Phrases

- `اطلاعات به‌روز`
- `پروژه‌های در حال ساخت`
- `پروژه مناسب`
- `پیگیری فروش`
- `زمان مناسب`
- `مرحله ساخت`
- `مسیر فروش`

### Overlapping Ideas

- Hero proof cards and Solution cards both explain data/tools/training.
- Product Preview and Workflow both explain search/filter/review/CRM/follow-up.
- System Layers Golden Window and the standalone Golden Window section repeat the timing concept.
- Market Problem timing axis and Golden Window timing concept are related; one should be problem framing, the other should be solution mechanics.

### Content Movement Candidates

- Keep Hero concise and outcome-oriented.
- Keep Problem focused only on pain and timing risk.
- Keep Solution as the three-pillar answer.
- Let Product Preview prove the product UI.
- Merge standalone Golden Window into System Layers or make it a deeper use-case section.
- Move Workflow later only if it adds a new operational detail not already shown in Product Preview.

## 10. Screenshot Checklist

Screenshots were captured from the real rendered localhost page.

### Mobile viewport: 440px × 956px

- `docs/audit-screenshots/01-mobile-hero-440x956.png`
- `docs/audit-screenshots/02-mobile-problem-440x956.png`
- `docs/audit-screenshots/03-mobile-solution-440x956.png`
- `docs/audit-screenshots/04-mobile-product-preview-map-440x956.png`
- `docs/audit-screenshots/05-mobile-project-card-440x956.png`
- `docs/audit-screenshots/06-mobile-system-layers-440x956.png`

### Desktop viewport: 1440px width, 1000px height used for capture

- `docs/audit-screenshots/07-desktop-homepage-top-1440.png`
- `docs/audit-screenshots/08-desktop-problem-solution-1440.png`
- `docs/audit-screenshots/09-desktop-product-preview-1440.png`
- `docs/audit-screenshots/10-desktop-system-layers-1440.png`

## 11. Final Summary

### Top 10 Visual Issues

1. Product preview uses blue/teal/gold/navy accents that feel separate from the warm/zinc system.
2. Later homepage sections are less polished than the rebuilt first five sections.
3. Golden Window appears twice with two different treatments.
4. Hero has no product visual after the proof cards.
5. Product preview is strong but dense on mobile.
6. FAQ styling is simpler than the rest of the shadcnblocks-like page.
7. Pricing cards look like a preview but nav says `قیمت`, creating expectation of price detail.
8. Radius scale is broadly consistent but not fully systematized.
9. Section transitions after System Layers feel abrupt.
10. Footer logo style differs from header logo style.

### Top 10 Content / SEO / AEO / GEO Issues

1. Visible FAQ intro says `AEO/GEO`, which is internal language.
2. `Workflow` eyebrow is English in a Persian-first site.
3. Hero body has punctuation/spacing issues.
4. Hero, proof cards, and Solution repeat the same pillars.
5. System Layers and standalone Golden Window overlap.
6. Product Preview has clear labels but could reduce explanatory preface on mobile.
7. Audience section lacks explicit SEO phrase `تأمین‌کنندگان محصولات و خدمات ساختمانی`.
8. Pricing section may not satisfy users expecting prices on homepage.
9. Some sample labels such as `پروژه نمونه` and `پروژه A` feel generic.
10. Final CTA could more directly connect demo to supplier sales workflow.

### Top 10 Interaction Issues

1. Product filter buttons look interactive but do not change state.
2. Golden Window stage buttons look interactive but do not change content.
3. Mobile hamburger uses native details, not a polished Sheet pattern.
4. FAQ uses native details; functional but less visually integrated.
5. Map pins are static and do not visually connect to selected project card.
6. Matched project rows are static and do not show selection.
7. Hero secondary CTA points to hidden `#features` alias rather than a visible section id.
8. Product preview `اعمال فیلتر` button has no effect.
9. No active navigation state for long-scroll page.
10. No progressive interaction path from demo preview to final contact beyond anchor CTA.

### Suggested Cleanup Order

1. Resolve duplicated Golden Window: merge, remove, or make each section clearly unique.
2. Fix customer-facing copy issues: FAQ internal wording, `Workflow`, hero punctuation.
3. Decide the role of each section after System Layers: Audience, Workflow, Pricing, FAQ, Final CTA.
4. Polish Product Preview realism while keeping all text in DOM.
5. Decide whether filter/stage selectors should be interactive or visually static.
6. Align color accents and reduce product preview palette drift.
7. Harmonize card/radius/shadow system across older sections.
8. Improve mobile drawer with a proper Sheet-like pattern.
9. Revisit pricing preview vs pricing page strategy.
10. Re-run screenshot QA at 440px and 1440px after changes.

### Files Likely To Need Editing

- `src/app/page.tsx`
- `src/components/marketing/site-header.tsx`
- `src/components/marketing/mobile-action-bar.tsx`
- `src/components/marketing/site-footer.tsx`
- `src/components/marketing/faq-list.tsx`
- `src/components/marketing/section-header.tsx`
- `src/components/ui/button.tsx`
- `src/components/ui/card.tsx`
- `src/components/ui/badge.tsx`
- `src/lib/site-data.ts`
- `src/app/globals.css`
- `tailwind.config.ts`
