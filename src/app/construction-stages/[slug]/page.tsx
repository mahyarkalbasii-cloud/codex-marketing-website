import { redirect } from "next/navigation";
import { getStages } from "@/lib/supplier-pages-data";

export function generateStaticParams() { return getStages().map((stage) => ({ slug: stage.slug })); }

export default async function LegacyStageRedirect({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  redirect(`/stages/${slug}`);
}
