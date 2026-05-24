# PersianSaze Homepage Visual QA Handoff

تاریخ: ۱۴۰۵-۰۳-۰۲ / 2026-05-23  
محیط بررسی: production preview روی `http://localhost:3006/`

## خلاصه

این پاس برای رفع بلاکرهای بصری بعد از هندآف قبلی انجام شد. هدف بازطراحی صفحه نبود؛ فقط مشکلات باقی‌مانده در منوی موبایل، نوار اکشن موبایل، Product Preview دسکتاپ، برچسب داده نمونه، و حذف نشان توسعه از اسکرین‌شات‌ها اصلاح شد.

## فایل‌های تغییرکرده

- `src/components/marketing/mobile-menu.tsx`
- `src/components/marketing/site-header.tsx`
- `src/components/marketing/mobile-action-bar.tsx`
- `src/components/marketing/product-preview-theater.tsx`
- `src/app/page.tsx`
- `src/app/globals.css`

## تغییرات انجام‌شده

### ۱. منوی موبایل

- منوی موبایل از حالت dropdown شفاف/نیمه‌شفاف به یک sheet تمام‌صفحه با سطح گرم و opaque تبدیل شد.
- منو بالاتر از محتوای صفحه و hero رندر می‌شود و دیگر متن پشت صفحه با آیتم‌های منو تداخل ندارد.
- داخل منو این موارد وجود دارد:
  - پرشین‌سازه و زیرعنوان
  - لینک‌های ناوبری
  - لینک تلفن
  - ورود
  - ثبت‌نام
  - درخواست دمو
- کلیک روی لینک‌های منو آن را می‌بندد.
- کلید Escape منو را می‌بندد.
- هنگام باز بودن منو، اسکرول body قفل می‌شود.
- focus بعد از بستن منو به دکمه منو برمی‌گردد.

### ۲. نوار اکشن موبایل

- نوار sticky پایین موبایل سبک‌تر شد.
- افکت تیره/blur سنگین حذف شد.
- سطح آن به warm ivory با border ظریف تغییر کرد.
- ارتفاع و سایه کمتر شد تا روی Product Preview و Pricing حس انسداد ایجاد نکند.
- اکشن‌ها حفظ شدند:
  - تماس -> `tel:+982175425000`
  - ثبت‌نام -> `/signup`
  - ورود -> `/login`
- برای سکشن‌ها و anchorها padding/scroll margin اضافه شد تا محتوای مهم زیر نوار قرار نگیرد.

### ۳. Product Preview دسکتاپ

- فضای خالی بزرگ سمت راست در پایین Product Preview حذف شد.
- ارتفاع map/product shell با ستون سمت چپ متعادل شد.
- map/detail area اکنون حس داشبورد کامل‌تری دارد و پایین صفحه خالی و ناتمام دیده نمی‌شود.
- تعامل‌های قبلی حفظ شدند:
  - فیلترها
  - ردیف‌های پروژه
  - pinهای نقشه
  - selected row / selected pin / selected project card

### ۴. شفافیت داده نمونه

- یک برچسب کوچک و آرام داخل Product Preview اضافه شد:

`نمایش نمونه، بدون داده واقعی`

- این برچسب فقط یک‌بار نمایش داده می‌شود.
- داده‌ها همچنان sample-safe هستند و هیچ داده واقعی، آدرس واقعی، شماره تماس واقعی، project ID واقعی، عکس واقعی پروژه، یا map tile واقعی نمایش داده نمی‌شود.

### ۵. حذف نشان توسعه

- اسکرین‌شات‌ها از production build گرفته شدند.
- نشان مشکی دایره‌ای `N` در خروجی QA دیده نشد.

## نتیجه QA

- `npm run lint`: پاس شد.
- `npm run build`: پاس شد.
- console error: مشاهده نشد.
- hydration error: مشاهده نشد.
- overflow افقی موبایل/دسکتاپ: مشاهده نشد.
- منوی موبایل:
  - سطح opaque دارد.
  - z-index درست دارد.
  - Escape و کلیک روی لینک درست کار می‌کند.
  - body scroll هنگام باز بودن منو قفل می‌شود.
- sticky action bar:
  - همچنان visible و قابل استفاده است.
  - pricing CTA و card bottom را نمی‌پوشاند.
- Product Preview:
  - فیلترها، ردیف‌ها و pinها کار می‌کنند.
  - فضای خالی بزرگ سمت راست در دسکتاپ رفع شده است.
  - برچسب داده نمونه فقط یک‌بار دیده می‌شود.
- لینک‌ها و CTAهای اصلی:
  - Hero primary -> `#demo-preview`
  - Hero secondary -> `#solution-overview`
  - Header demo -> `#demo`
  - Header phone -> `tel:+982175425000`
  - Mobile sticky actions -> درست
  - Pricing CTAs -> درست
  - FAQ accordion -> درست
  - Footer links -> درست

## اسکرین‌شات‌های نهایی

پوشه اسکرین‌شات‌ها:

`C:\Users\mahya\AppData\Local\Temp\persiansaze-homepage-qa-1779466793488`

فایل‌ها:

- `mobile-440x956-01-hero.png`
- `mobile-440x956-02-menu-open.png`
- `mobile-440x956-03-product-selected-card-lower.png`
- `mobile-440x956-04-pricing-sticky-bar.png`
- `mobile-440x956-05-faq-final-cta.png`
- `desktop-1440x900-01-hero.png`
- `desktop-1440x900-02-product-preview-top.png`
- `desktop-1440x900-03-product-preview-lower-card.png`
- `desktop-1440x900-04-system-layers.png`
- `desktop-1440x900-05-faq-final-cta-footer.png`

## نکته اجرایی

برای گرفتن اسکرین‌شات، ابزار screenshot داخل in-app browser در این سیستم timeout داد. برای همین اسکرین‌شات‌ها با Playwright محلی و از production preview گرفته شدند. نتیجه نهایی production-like است و نشان توسعه در آن دیده نمی‌شود.

## وضعیت باقی‌مانده

بلاکر شناخته‌شده‌ای برای review نهایی باقی نمانده است.
