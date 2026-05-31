import { salesMotions } from "@/lib/supplier-pages-data";
import {
  createOgImage,
  ogImageAlt,
  ogImageContentType,
  ogImageSize,
} from "@/lib/og-image";

const motion = salesMotions["hybrid-sales"];

export const dynamic = "force-static";
export const alt = ogImageAlt;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return createOgImage({
    title: motion.title,
    eyebrow: "نوع فروش",
    badge: "فروش ترکیبی",
  });
}
