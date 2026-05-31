import { getStageByRouteSlug, getStageStaticParams } from "@/data/stage-insights";
import {
  createOgImage,
  ogImageAlt,
  ogImageContentType,
  ogImageSize,
} from "@/lib/og-image";

type ImageProps = {
  params: Promise<{ stageSlug: string }>;
};

export const dynamic = "force-static";
export const alt = ogImageAlt;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export function generateStaticParams() {
  return getStageStaticParams();
}

export default async function Image({ params }: ImageProps) {
  const { stageSlug } = await params;
  const { stage } = getStageByRouteSlug(stageSlug);

  return createOgImage({
    title: stage?.faLabel ?? "مراحل ساخت پروژه‌های ساختمانی",
    eyebrow: "مرحله ساخت",
    badge: "زمان‌بندی فروش",
    description:
      "هر مرحله ساخت به فرصت‌های متفاوتی برای خرید، مذاکره و اجرای فروش پروژه‌محور وصل می‌شود.",
  });
}
