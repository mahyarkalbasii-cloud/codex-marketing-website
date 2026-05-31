import { SALES_STYLE_COPY } from "@/data/sales-style-copy";
import {
  createOgImage,
  ogImageAlt,
  ogImageContentType,
  ogImageSize,
} from "@/lib/og-image";

const copy = SALES_STYLE_COPY.consultative;

export const dynamic = "force-static";
export const alt = ogImageAlt;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return createOgImage({
    title: copy.h1,
    eyebrow: "نوع فروش",
    badge: "فروش مشاوره‌ای",
  });
}
