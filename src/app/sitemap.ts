import type { MetadataRoute } from "next";

import { absoluteUrl, cities, stages, suppliers } from "@/lib/site-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/features", "/pricing", "/faq"];
  const cityRoutes = cities.map((city) => `/cities/${city.slug}`);
  const supplierRoutes = suppliers.map((supplier) => `/suppliers/${supplier.slug}`);
  const stageRoutes = stages.map((stage) => `/construction-stages/${stage.slug}`);

  return [...staticRoutes, ...cityRoutes, ...supplierRoutes, ...stageRoutes].map(
    (route) => ({
      url: absoluteUrl(route),
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.75,
    }),
  );
}
