import type { MetadataRoute } from "next";

import { STAGES } from "@/data/stages";
import { absoluteUrl, cities, suppliers } from "@/lib/site-data";
import { citiesEn, stagesEn, suppliersEn } from "@/lib/site-data.en";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/features", "/pricing", "/faq"];
  const cityRoutes = cities.map((city) => `/cities/${city.slug}`);
  const supplierRoutes = suppliers.map((supplier) => `/suppliers/${supplier.slug}`);
  const stageRoutes = STAGES.filter((stage) => stage.isMain).map(
    (stage) => `/stages/${stage.slug}`,
  );
  const englishStaticRoutes = ["/en", "/en/features", "/en/pricing", "/en/faq"];
  const englishCityRoutes = citiesEn.map((city) => `/en/cities/${city.slug}`);
  const englishSupplierRoutes = suppliersEn.map(
    (supplier) => `/en/suppliers/${supplier.slug}`,
  );
  const englishStageRoutes = stagesEn.map(
    (stage) => `/en/construction-stages/${stage.slug}`,
  );

  return [
    ...staticRoutes,
    ...cityRoutes,
    ...supplierRoutes,
    ...stageRoutes,
    ...englishStaticRoutes,
    ...englishCityRoutes,
    ...englishSupplierRoutes,
    ...englishStageRoutes,
  ].map((route) => ({
      url: absoluteUrl(route),
      lastModified: new Date(),
      changeFrequency: route === "" || route === "/en" ? "weekly" : "monthly",
      priority: route === "" || route === "/en" ? 1 : 0.75,
    }));
}
