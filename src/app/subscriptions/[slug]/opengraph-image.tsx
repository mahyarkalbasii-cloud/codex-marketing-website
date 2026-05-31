import { getSubscriptionBySlug, subscriptions } from "@/data/subscriptions";
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
  return subscriptions.map((subscription) => ({ slug: subscription.slug }));
}

export default async function Image({ params }: ImageProps) {
  const { slug } = await params;
  const subscription = getSubscriptionBySlug(slug);

  return createOgImage({
    title: subscription?.h1 ?? "اشتراک‌های پروژه‌های ساختمانی",
    eyebrow: subscription ? `اشتراک ${subscription.name}` : "اشتراک‌ها",
    badge: "پلن اشتراک",
    description:
      "پوشش پروژه‌ها، CRM، پیامک و آموزش فروش در مسیرهای اشتراک پرشین‌سازه.",
  });
}
