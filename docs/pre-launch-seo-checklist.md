# Pre-launch SEO checklist for PersianSaze

## Technical foundation
- [ ] `/sitemap.xml` is accessible and returns valid XML.
- [ ] `/robots.txt` is accessible and has the correct `Sitemap` line.
- [ ] Every indexable page has a self-canonical `<link rel="canonical">`.
- [ ] Every indexable page has a unique `<title>` and meta description.
- [ ] Open Graph and Twitter card tags are present on priority pages.
- [ ] All internal links resolve to 200 or intentional 301 redirects.
- [ ] HTTPS is enforced in production.
- [ ] Trailing slash policy is consistent site-wide.
- [ ] No relevant console errors appear on launch pages.

## Schema validation
- [ ] Organization schema validates on `/`.
- [ ] WebSite schema validates on `/`.
- [ ] BreadcrumbList validates on inner pages that render breadcrumbs.
- [ ] FAQPage validates on category, stage, sales-style, and FAQ pages.
- [ ] CollectionPage validates on `/suppliers/`.

Test with: https://search.google.com/test/rich-results

## Content quality
- [ ] The 5 highest-priority category pages have hand-written copy:
  - `/suppliers/building-materials/`
  - `/suppliers/contracting-and-execution/`
  - `/suppliers/mechanical-installations/`
  - `/suppliers/steel-and-metals/`
  - `/suppliers/doors-windows-and-facade/`
- [ ] Both sales-style hubs have hand-written copy:
  - `/sales-style/fast/`
  - `/sales-style/consultative/`
- [ ] All 8 stage pages have hand-written copy.
- [ ] No placeholder strings remain: `Lorem ipsum`, `TODO`, `متن نمونه`.

## Performance
Test these sampled pages in Lighthouse:
- `/`
- `/suppliers/building-materials/`
- `/stages/foundation/`

Targets:
- [ ] Performance >= 80
- [ ] Accessibility >= 90
- [ ] Best Practices >= 90
- [ ] SEO >= 95

## Indexing setup after deploy
- [ ] Google Search Console property verified.
- [ ] Sitemap submitted in Google Search Console.
- [ ] Bing Webmaster Tools property verified.
- [ ] Sitemap submitted in Bing Webmaster Tools.
- [ ] Homepage tested in Google's URL Inspection tool.
- [ ] `https://persiansaze.com/sitemap.xml` returns the production sitemap.
- [ ] `https://persiansaze.com/robots.txt` returns the production robots policy.

## AEO/GEO verification
Check these queries in ChatGPT, Claude, and Perplexity after 30-90 days:
- [ ] `بهترین زمان تماس برای فروش مصالح ساختمانی`
- [ ] `مرحله فونداسیون در ساخت و ساز چه ویژگی‌هایی دارد`
- [ ] `تفاوت فروش سریع و مشاوره‌ای در صنعت ساختمان`

If PersianSaze is not cited within 90 days, review FAQ quality and add more
long-tail question-answer pairs to stage and category pages.

## Analytics
- [ ] Google Analytics 4 installed.
- [ ] Search Console linked to GA4.
- [ ] Conversion goals defined for demo request and pricing-plan intent.

## Strategic crawler decision
- [ ] AI crawler policy confirmed before launch.

Current code allows GPTBot, ChatGPT-User, Google-Extended, ClaudeBot,
anthropic-ai, PerplexityBot, and Applebot-Extended because PersianSaze's
AEO/GEO strategy benefits from crawler access. If content defensibility becomes
more important than citation discovery, revisit this and consider blocking
training-oriented crawlers while leaving query-time/user-agent crawlers allowed.
