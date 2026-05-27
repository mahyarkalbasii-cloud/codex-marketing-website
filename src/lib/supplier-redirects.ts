import { permanentRedirect } from "next/navigation";

export function redirectToSupplier(slug: string): never {
  permanentRedirect(`/suppliers/${slug}/`);
}
