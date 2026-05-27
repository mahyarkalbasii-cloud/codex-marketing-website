import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function CategorySection({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("category-section", className)}>
      {children}
    </section>
  );
}
