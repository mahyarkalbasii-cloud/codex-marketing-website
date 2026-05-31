import { permanentRedirect } from "next/navigation";

const supplierRedirects: Record<string, string> = {
  "building-materials": "building-materials",
  "steel-and-metals": "steel-and-metals",
  "mechanical-installations": "mechanical-piping",
  "electrical-installations": "electrical-lighting",
  "doors-windows-and-facade": "doors-windows-and-facade",
  "interior-and-exterior-finishes": "interior-and-exterior-finishes",
  "machinery-tools-and-equipment": "heavy-machinery-transport-concrete",
  "engineering-and-consulting": "engineering-and-consulting",
  "interior-architecture-and-decoration": "kitchen-and-millwork",
  "landscaping-and-green-space": "contracting-and-execution",
  "lobby-and-common-area-equipment": "vertical-transportation",
  "it-and-software": "smart-building-and-safety-systems",
  "business-services-and-consulting": "engineering-and-consulting",
  "general-services-and-support": "contracting-and-execution",
  "contracting-and-execution": "contracting-and-execution",
};

export function redirectToSupplier(slug: string): never {
  permanentRedirect(`/suppliers/${supplierRedirects[slug] ?? slug}/`);
}
