import { CATEGORIES } from "@/data/categories";
import { getCategoryBySlug } from "@/data/queries";
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
  return CATEGORIES.filter((category) => !category.excludeFromPages).map(
    (category) => ({ slug: category.slug }),
  );
}

export default async function Image({ params }: ImageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  const title = category?.faTitle ?? "زمینه‌های کاری ساختمانی";

  return createOgImage({
    title,
    eyebrow: "زمینه کاری تامین‌کنندگان",
    badge: "صفحه دسته",
    description:
      "نام دسته، مرحله ساخت و مسیر پیگیری فروش برای فرصت‌های ساختمانی روی یک تصویر برند.",
  });
}
