import Link from "next/link";

import {
  cities,
  featurePages,
  seoPages,
  site,
  stages,
  suppliers,
} from "@/lib/site-data";

const footerGroups = [
  {
    title: "صفحات اصلی",
    links: seoPages,
  },
  {
    title: "شهرها",
    links: cities.map((city) => ({
      title: `پروژه‌های ${city.name}`,
      href: `/cities/${city.slug}`,
    })),
  },
  {
    title: "دسته‌های فروش",
    links: suppliers.slice(0, 6).map((supplier) => ({
      title: supplier.name,
      href: `/suppliers/${supplier.slug}`,
    })),
  },
  {
    title: "مراحل ساخت",
    links: stages.slice(0, 6).map((stage) => ({
      title: stage.name,
      href: `/construction-stages/${stage.slug}`,
    })),
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[#3b3128] bg-[#241f1a] text-[#fffaf1] dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-9 md:grid-cols-[1.2fr_2fr] md:gap-10 md:px-6 md:py-12">
        <div className="space-y-5">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl border border-[#6b5542] bg-[#fffaf1] text-sm font-black text-[#241f1a]">
              PS
            </span>
            <span className="text-lg font-bold">{site.name}</span>
          </Link>
          <p className="max-w-md text-sm leading-8 text-[#cfc0af]">
            منبع واحد حقیقت برای فروش پروژه‌محور در بازار ساختمان؛ از اطلاعات
            به‌روز تا نقشه، فیلتر، CRM، پیامک و AI تصمیم‌یار.
          </p>
          <div className="space-y-2 text-sm text-[#cfc0af]">
            <p>
              {site.salesExpert} | داخلی {site.extension}
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
                      href={link.href}
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
              <Link key={feature.href} href={feature.href}>
                {feature.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
