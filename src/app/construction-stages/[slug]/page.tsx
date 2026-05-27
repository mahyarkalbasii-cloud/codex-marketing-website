import { notFound, permanentRedirect } from "next/navigation";

import {
  STAGE_ROUTE_ALIASES,
  getMainStages,
  getStageByRouteSlug,
} from "@/data/stage-insights";
import { getStageHref } from "@/lib/stage-routes";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [
    ...getMainStages().map((stage) => ({ slug: stage.slug })),
    ...Object.keys(STAGE_ROUTE_ALIASES).map((slug) => ({ slug })),
  ];
}

export async function generateMetadata() {
  return {
    robots: {
      follow: false,
      index: false,
    },
  };
}

export default async function LegacyConstructionStagePage({ params }: PageProps) {
  const { slug } = await params;
  const { stage } = getStageByRouteSlug(slug);

  if (!stage) {
    notFound();
  }

  permanentRedirect(getStageHref(stage));
}
