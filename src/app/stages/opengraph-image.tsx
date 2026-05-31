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
    title: "مراحل ساخت پروژه‌های ساختمانی",
    eyebrow: "زمان‌بندی خرید، مذاکره و اجرا",
    badge: "هاب مراحل",
  });
}
