import {
  createOgImage,
  ogImageAlt,
  ogImageContentType,
  ogImageSize,
} from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = ogImageAlt;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return createOgImage({
    title: "مدل‌های فروش در بازار ساختمان",
    eyebrow: "هاب نوع فروش",
    badge: "فروش سریع، مشاوره‌ای و تهاتر",
  });
}
