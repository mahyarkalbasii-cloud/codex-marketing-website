import { SALES_STYLE_COPY } from "@/data/sales-style-copy";
import {
  createOgImage,
  ogImageAlt,
  ogImageContentType,
  ogImageSize,
} from "@/lib/og-image";

const copy = SALES_STYLE_COPY.barter;

export const dynamic = "force-static";
export const alt = ogImageAlt;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return createOgImage({
    title: copy.h1,
    eyebrow: copy.eyebrow,
    badge: "تهاتر مصالح و خدمات",
  });
}
