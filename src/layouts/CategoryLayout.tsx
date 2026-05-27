import type { ReactNode } from "react";

export function CategoryLayout({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 py-10 md:px-6 md:py-16">
      {children}
    </main>
  );
}
