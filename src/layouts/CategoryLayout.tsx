import type { ReactNode } from "react";

export function CategoryLayout({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 pb-10 pt-6 md:px-6 md:pb-16 md:pt-10">
      {children}
    </main>
  );
}
