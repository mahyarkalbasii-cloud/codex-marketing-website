import {
  authLinks,
  cities,
  faqs,
  featurePages,
  karajAddon,
  navItems,
  pricingGroups,
  seoPages,
  site,
} from "@/lib/site-data";
import { CATEGORIES } from "@/data/categories";
import { STAGES } from "@/data/stages";

export type Locale = "fa";

export const defaultLocale: Locale = "fa";
export const supportedLocales = ["fa"] as const;

const suppliers = CATEGORIES.filter((category) => !category.excludeFromPages).map(
  (category) => ({
    name: category.faTitle,
    slug: category.slug,
  }),
);

const stages = STAGES.filter((stage) => stage.isMain).map((stage) => ({
  name: stage.faLabel,
  slug: stage.slug,
}));

export function getLocaleFromPathname(_pathname = "/"): Locale {
  void _pathname;
  return "fa";
}

export function stripLocalePrefix(pathname = "/") {
  return pathname || "/";
}

export function localizeHref(href: string, _locale: Locale) {
  void _locale;
  if (
    href.startsWith("http") ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:")
  ) {
    return href;
  }

  const [pathPart, hashPart] = href.split("#");
  const path = pathPart || "/";
  const cleanPath = stripLocalePrefix(path);

  return hashPart ? `${cleanPath}#${hashPart}` : cleanPath;
}

export function getDirection(_locale: Locale) {
  void _locale;
  return "rtl";
}

export function getSiteContent(_locale: Locale) {
  void _locale;
  return {
    authLinks,
    cities,
    faqs,
    featurePages,
    karajAddon,
    navItems,
    pricingGroups,
    seoPages,
    site,
    stages,
    suppliers,
  };
}
