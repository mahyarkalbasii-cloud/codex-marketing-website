import type { Metadata } from "next";

import { absoluteUrl } from "@/lib/site-data";

export const ogImageAlt =
  "پرشین‌سازه | فروش پروژه‌محور برای بازار ساختمان";
export const ogImageContentType = "image/png";
export const ogImageSize = {
  width: 1200,
  height: 630,
};

function normalizeOgPath(path: string) {
  if (path === "" || path === "/") {
    return "/opengraph-image";
  }

  const cleanPath = path.endsWith("/") ? path : `${path}/`;

  return `${cleanPath}opengraph-image`;
}

export function routeOgImage(
  path: string,
  alt: string = ogImageAlt,
): NonNullable<Metadata["openGraph"]>["images"] {
  return [
    {
      url: absoluteUrl(normalizeOgPath(path)),
      width: ogImageSize.width,
      height: ogImageSize.height,
      alt,
      type: ogImageContentType,
    },
  ];
}
