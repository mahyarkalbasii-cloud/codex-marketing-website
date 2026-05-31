import { permanentRedirect } from "next/navigation";

const motionRedirects: Record<string, string> = {
  "fast-sales": "/sales-style/fast/",
  "consultative-sales": "/sales-style/consultative/",
  "hybrid-sales": "/sales-style/",
};

export function generateStaticParams() {
  return Object.keys(motionRedirects).map((motionSlug) => ({ motionSlug }));
}

export default async function LegacySalesMotionPage({
  params,
}: {
  params: Promise<{ motionSlug: string }>;
}) {
  const { motionSlug } = await params;
  permanentRedirect(motionRedirects[motionSlug] ?? "/sales-style/");
}
