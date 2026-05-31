import { cities } from "@/lib/site-data";
import {
  createOgImage,
  ogImageAlt,
  ogImageContentType,
  ogImageSize,
} from "@/lib/og-image";

type ImageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-static";
export const alt = ogImageAlt;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }));
}

export default async function Image({ params }: ImageProps) {
  const { slug } = await params;
  const city = cities.find((item) => item.slug === slug);

  return createOgImage({
    title: city?.title ?? "شهرهای تحت پوشش پروژه‌های ساختمانی",
    eyebrow: city ? `پروژه‌های ساختمانی ${city.name}` : "شهرهای تحت پوشش",
    badge: "صفحه شهر",
    description:
      "پوشش شهری، محدوده‌های هدف و پروژه‌های فعال برای تیم‌های فروش ساختمانی.",
  });
}
