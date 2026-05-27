import { permanentRedirect } from "next/navigation";

export default function LegacyFastSalesPage() {
  permanentRedirect("/sales-style/fast/");
}
