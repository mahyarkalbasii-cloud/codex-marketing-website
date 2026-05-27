import { redirectToSupplier } from "@/lib/supplier-redirects";

export default function LegacyAfterSalesMaintenancePage() {
  redirectToSupplier("general-services-and-support");
}
