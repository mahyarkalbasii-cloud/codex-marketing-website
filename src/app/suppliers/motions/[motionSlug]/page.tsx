import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";

const motionRedirects = {
  "fast-sales": "/sales-style/fast/",
  "consultative-sales": "/sales-style/consultative/",
  "hybrid-sales": "/sales-style/hybrid/",
} as const;

type MotionSlug = keyof typeof motionRedirects;

function getRedirectPath(slug: string) {
  return motionRedirects[slug as MotionSlug];
}

export function generateStaticParams() {
  return Object.keys(motionRedirects).map((motionSlug) => ({ motionSlug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ motionSlug: string }>;
}): Promise<Metadata> {
  const { motionSlug } = await params;
  const redirectPath = getRedirectPath(motionSlug);

  if (!redirectPath) {
    return {};
  }

  return {
    alternates: { canonical: redirectPath },
    robots: { index: false, follow: true },
  };
}

export default async function LegacySalesMotionPage({
  params,
}: {
  params: Promise<{ motionSlug: string }>;
}) {
  const { motionSlug } = await params;
  const redirectPath = getRedirectPath(motionSlug);

  if (!redirectPath) {
    notFound();
  }

  permanentRedirect(redirectPath);
}
