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
  stages,
  suppliers,
} from "@/lib/site-data";
import {
  citiesEn,
  faqsEn,
  featurePagesEn,
  karajAddonEn,
  navItemsEn,
  pricingGroupsEn,
  seoPagesEn,
  siteEn,
  stagesEn,
  suppliersEn,
} from "@/lib/site-data.en";

export type Locale = "fa" | "en";

export const defaultLocale: Locale = "fa";
export const supportedLocales = ["fa", "en"] as const;

export function getLocaleFromPathname(pathname = "/"): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "fa";
}

export function stripLocalePrefix(pathname = "/") {
  if (pathname === "/en") {
    return "/";
  }

  if (pathname.startsWith("/en/")) {
    return pathname.slice(3) || "/";
  }

  return pathname || "/";
}

export function localizeHref(href: string, locale: Locale) {
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
  const localizedPath =
    locale === "en"
      ? cleanPath === "/"
        ? "/en/"
        : `/en${cleanPath}`
      : cleanPath;

  return hashPart ? `${localizedPath}#${hashPart}` : localizedPath;
}

export function switchLocalePath(pathname: string, targetLocale: Locale) {
  return localizeHref(stripLocalePrefix(pathname || "/"), targetLocale);
}

export function getDirection(locale: Locale) {
  return locale === "fa" ? "rtl" : "ltr";
}

export function getSiteContent(locale: Locale) {
  return locale === "en"
    ? {
        authLinks,
        cities: citiesEn,
        faqs: faqsEn,
        featurePages: featurePagesEn,
        karajAddon: karajAddonEn,
        navItems: navItemsEn,
        pricingGroups: pricingGroupsEn,
        seoPages: seoPagesEn,
        site: siteEn,
        stages: stagesEn,
        suppliers: suppliersEn,
      }
    : {
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
