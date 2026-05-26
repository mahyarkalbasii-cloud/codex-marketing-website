"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { getDirection, getLocaleFromPathname, getSiteContent, localizeHref } from "@/lib/i18n";

export function SiteFooter() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPathname(pathname);
  const direction = getDirection(locale);
  const { cities, featurePages, seoPages, site, stages, suppliers } = getSiteContent(locale);
  const footerCopy = locale === "fa"
    ? {
        mainPages: "صفحات اصلی",
        cities: "شهرها",
        suppliers: "دسته‌های فروش",
        stages: "مراحل ساخت",
        cityTitle: (name: string) => `پروژه‌های ${name}`,
        description:
          "منبع واحد حقیقت برای فروش پروژه‌محور در بازار ساختمان؛ از اطلاعات به‌روز تا نقشه، فیلتر، CRM، پیامک و AI تصمیم‌یار.",
        extension: "داخلی",
      }
    : {
        mainPages: "Main pages",
        cities: "Cities",
        suppliers: "Sales categories",
        stages: "Construction stages",
        cityTitle: (name: string) => `${name} construction projects`,
        description:
          "The single source of truth for project-based construction sales: updated data, maps, filters, CRM, messaging, and AI sales assistance.",
        extension: "ext.",
      };
  const footerGroups = [
    {
      title: footerCopy.mainPages,
      links: seoPages,
    },
    {
      title: footerCopy.cities,
      links: cities.map((city) => ({
        title: footerCopy.cityTitle(city.name),
        href: `/cities/${city.slug}`,
      })),
    },
    {
      title: footerCopy.suppliers,
      links: [
        { title: "همه تأمین‌کنندگان و محصولات", href: "/suppliers" },
        { title: "فروش سریع و تراکنشی", href: "/suppliers/fast-sales" },
        { title: "فروش مشاوره‌ای و تصمیم‌ساز", href: "/suppliers/consultative-sales" },
        { title: "فروش ترکیبی", href: "/suppliers/hybrid-sales" },
        ...suppliers.slice(0, 6).map((supplier) => ({
          title: supplier.name,
          href: `/suppliers/${supplier.slug}`,
        })),
      ],
    },
    {
      title: footerCopy.stages,
      links: stages.slice(0, 6).map((stage) => ({
        title: stage.name,
        href: `/stages/${stage.slug}`,
      })),
    },
  ];

  return (
    <footer dir={direction} className="border-t border-[#3b3128] bg-[#241f1a] text-[#fffaf1] dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-9 md:grid-cols-[1.2fr_2fr] md:gap-10 md:px-6 md:py-12">
        <div className="space-y-5">
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
            <p>
              {site.address}
            </p>
            <p>
              <a href={`mailto:${site.email}`} dir="ltr" className="transition hover:text-[#fffaf1]">
                {site.email}
              </a>
              {" | "}
              persiansaze.com | {site.handle}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 sm:gap-8 lg:grid-cols-4">
          {footerGroups.map((group) => (
            <div key={group.title} className="min-w-0">
              <h3 className="mb-3 text-sm font-semibold text-[#fffaf1]">
                {group.title}
              </h3>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
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
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-[#3b3128]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-[#cfc0af] md:flex-row md:items-center md:justify-between md:px-6">
          <span>© {new Date().getFullYear()} {site.name}</span>
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
