import type { MetadataRoute } from "next";

import { CATEGORIES } from "@/data/categories";
import { STAGES } from "@/data/stages";
import { absoluteUrl, cities } from "@/lib/site-data";
import { citiesEn, stagesEn, suppliersEn } from "@/lib/site-data.en";

export const dynamic = "force-static";

type ChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]["changeFrequency"]
>;

type SitemapEntry = {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
};

const lastModified = new Date();

function withTrailingSlash(path: string) {
  if (path === "" || path === "/") {
    return "/";
  }

  return path.endsWith("/") ? path : `${path}/`;
}

function entry(
  path: string,
  changeFrequency: ChangeFrequency,
  priority: number,
): SitemapEntry {
  return {
    path: withTrailingSlash(path),
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: SitemapEntry[] = [
    entry("/", "weekly", 1.0),
    entry("/features/", "monthly", 0.9),
    entry("/pricing/", "monthly", 0.9),
    entry("/suppliers/", "weekly", 0.9),
    entry("/sales-style/fast/", "weekly", 0.9),
    entry("/sales-style/consultative/", "weekly", 0.9),
    entry("/faq/", "monthly", 0.7),
    entry("/rules/", "yearly", 0.4),
    ...CATEGORIES.filter((category) => !category.excludeFromPages).map(
      (category) => entry(`/suppliers/${category.slug}/`, "weekly", 0.8),
    ),
    ...STAGES.filter((stage) => stage.isMain).map((stage) =>
      entry(`/stages/${stage.slug}/`, "weekly", 0.8),
    ),
    ...cities.map((city) => entry(`/cities/${city.slug}/`, "weekly", 0.7)),
    entry("/en/", "monthly", 0.6),
    entry("/en/features/", "monthly", 0.5),
    entry("/en/pricing/", "monthly", 0.5),
    entry("/en/faq/", "monthly", 0.4),
    ...citiesEn.map((city) => entry(`/en/cities/${city.slug}/`, "monthly", 0.4)),
    ...suppliersEn.map((supplier) =>
      entry(`/en/suppliers/${supplier.slug}/`, "monthly", 0.4),
    ),
    ...stagesEn.map((stage) =>
      entry(`/en/construction-stages/${stage.slug}/`, "monthly", 0.4),
    ),
  ];

  const uniqueEntries = Array.from(
    new Map(entries.map((item) => [item.path, item])).values(),
  );

  return uniqueEntries.map((item) => ({
    url: absoluteUrl(item.path),
    lastModified,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));
}
