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
    title: "راهنماهای فروش و تأمین ساختمان",
    eyebrow: "آموزش بازار ساختمان",
    badge: "Guides",
  });
}
