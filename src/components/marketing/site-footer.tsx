"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  CITY_NAV_LINKS,
  FOOTER_MAIN_LINKS,
  SALE_STYLE_NAV_LINKS,
  getMainStages,
  getOrderedVisibleCategories,
} from "@/data/navigation";
import {
  getDirection,
  getLocaleFromPathname,
  getSiteContent,
  localizeHref,
  type Locale,
} from "@/lib/i18n";

type FooterLink = {
  title: string;
  href: string;
};

const footerCategories = getOrderedVisibleCategories()
  .slice(0, 7)
  .map((category) => ({
    title: category.faTitle,
    href: `/suppliers/${category.slug}/`,
  }));
const footerStages = getMainStages().map((stage) => ({
  title: stage.faLabel,
  href: `/stages/${stage.slug}/`,
}));

function FooterColumn({
  ariaLabel,
  links,
  locale,
  localize = true,
  title,
}: {
  ariaLabel: string;
  links: readonly FooterLink[];
  locale: Locale;
  localize?: boolean;
  title: string;
}) {
  return (
    <section aria-label={ariaLabel} className="min-w-0">
      <h3 className="mb-3 text-sm font-semibold text-[#fffaf1]">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={localize ? localizeHref(link.href, locale) : link.href}
              className="text-xs leading-6 text-[#cfc0af] transition hover:text-[#fffaf1] sm:text-sm"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function SiteFooter() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPathname(pathname);
  const direction = getDirection(locale);
  const { featurePages, seoPages, site } = getSiteContent(locale);
  const mainLinks = locale === "fa" ? FOOTER_MAIN_LINKS : seoPages.slice(0, 5);
  const footerCopy =
    locale === "fa"
      ? {
          allSuppliers: "همه زمینه‌های کاری ←",
          categories: "زمینه‌های کاری",
          cities: "شهرها",
          description:
            "منبع واحد حقیقت برای فروش پروژه‌محور در بازار ساختمان؛ از اطلاعات به‌روز تا نقشه، فیلتر، CRM، پیامک و AI تصمیم‌یار.",
          extension: "داخلی",
          legal: "قوانین و مقررات",
          mainPages: "صفحات اصلی",
          saleStyles: "نوع فروش",
          stages: "مراحل ساخت",
        }
      : {
          allSuppliers: "All supplier categories →",
          categories: "Supplier categories",
          cities: "Cities",
          description:
            "The single source of truth for project-based construction sales: updated data, maps, filters, CRM, messaging, and AI sales assistance.",
          extension: "ext.",
          legal: "Terms and rules",
          mainPages: "Main pages",
          saleStyles: "Sales style",
          stages: "Construction stages",
        };

  return (
    <footer
      dir={direction}
      className="border-t border-[#3b3128] bg-[#241f1a] text-[#fffaf1] dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-9 md:grid-cols-2 md:gap-10 md:px-6 md:py-12 lg:grid-cols-4 xl:grid-cols-[1.35fr_0.85fr_1fr_1fr_1fr]">
        <section
          aria-label="اطلاعات پرشین‌سازه"
          className="space-y-5 md:col-span-2 lg:col-span-4 xl:col-span-1"
        >
          <Link href={localizeHref("/", locale)} className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl border border-[#6b5542] bg-white text-sm font-black text-[#241f1a]">
              PS
            </span>
            <span className="text-lg font-bold">{site.name}</span>
          </Link>
          <p className="max-w-md text-sm leading-8 text-[#cfc0af]">
            {footerCopy.description}
          </p>
          <div className="space-y-2 text-sm text-[#cfc0af]">
            <p>
              {site.salesExpert} | {footerCopy.extension} {site.extension}
            </p>
            <p>
              <a href="tel:+982175425000" dir="ltr" className="transition hover:text-[#fffaf1]">
                {site.phones[0]}
              </a>
              {" / "}
              <a href="tel:+982172897000" dir="ltr" className="transition hover:text-[#fffaf1]">
                {site.phones[1]}
              </a>
            </p>
            <p>{site.address}</p>
            <p>
              <a href={`mailto:${site.email}`} dir="ltr" className="transition hover:text-[#fffaf1]">
                {site.email}
              </a>
              {" | "}
              persiansaze.com | {site.handle}
            </p>
          </div>
        </section>

        <section aria-label={footerCopy.mainPages} className="min-w-0">
          <h3 className="mb-3 text-sm font-semibold text-[#fffaf1]">
            {footerCopy.mainPages}
          </h3>
          <ul className="space-y-2.5">
            {mainLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={localizeHref(link.href, locale)}
                  className="text-xs leading-6 text-[#cfc0af] transition hover:text-[#fffaf1] sm:text-sm"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 border-t border-[#3b3128] pt-4">
            <Link
              href="/rules/"
              className="text-xs font-semibold leading-6 text-[#fffaf1] transition hover:text-[#f3d6b1] sm:text-sm"
            >
              {footerCopy.legal}
            </Link>
          </div>
        </section>
        <div className="grid gap-7">
          <FooterColumn
            ariaLabel={footerCopy.saleStyles}
            links={SALE_STYLE_NAV_LINKS}
            locale={locale}
            localize={false}
            title={footerCopy.saleStyles}
          />
          <FooterColumn
            ariaLabel={footerCopy.cities}
            links={CITY_NAV_LINKS}
            locale={locale}
            title={footerCopy.cities}
          />
        </div>

        <section
          aria-label={footerCopy.categories}
          className="flex min-h-[15.5rem] min-w-0 flex-col"
        >
          <h3 className="mb-3 text-sm font-semibold text-[#fffaf1]">
            {footerCopy.categories}
          </h3>
          <ul className="space-y-2.5">
            {footerCategories.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs leading-6 text-[#cfc0af] transition hover:text-[#fffaf1] sm:text-sm"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={localizeHref("/suppliers/", locale)}
            className="mt-5 inline-flex min-h-10 w-fit items-center justify-center rounded-full border border-[#6b5542] bg-[#fffaf1] px-4 text-xs font-bold text-[#241f1a] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#f3d6b1] sm:text-sm"
          >
            {footerCopy.allSuppliers}
          </Link>
        </section>

        <FooterColumn
          ariaLabel={footerCopy.stages}
          links={footerStages}
          locale={locale}
          localize={false}
          title={footerCopy.stages}
        />
      </div>
      <div className="border-t border-[#3b3128]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-[#cfc0af] md:flex-row md:items-center md:justify-between md:px-6">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <div className="flex flex-wrap gap-4">
            {featurePages.map((feature) => (
              <Link key={feature.href} href={localizeHref(feature.href, locale)}>
                {feature.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
