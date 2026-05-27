import Link from "next/link";

import { StructuredData } from "@/components/marketing/structured-data";
import { absoluteUrl } from "@/lib/site-data";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };

  return (
    <>
      <nav
        aria-label="breadcrumb"
        className="text-xs font-medium text-muted-foreground"
      >
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => {
            const isCurrent = index === items.length - 1;

            return (
              <li key={`${item.href}-${item.label}`} className="flex items-center gap-2">
                {index > 0 ? (
                  <span aria-hidden="true" className="text-[#b98d5f]">
                    ‹
                  </span>
                ) : null}
                {isCurrent ? (
                  <span aria-current="page" className="text-foreground">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="transition hover:text-foreground">
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <StructuredData data={jsonLd} />
    </>
  );
}
