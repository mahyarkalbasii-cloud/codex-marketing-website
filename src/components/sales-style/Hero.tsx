import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { CategorySection } from "@/components/category/CategorySection";
import { buttonVariants } from "@/components/ui/button";
import type { SalesStyleCopy } from "@/data/sales-style-copy";
import { cn } from "@/lib/utils";

export function Hero({ copy }: { copy: SalesStyleCopy }) {
  return (
    <CategorySection>
      <span className="category-badge mb-5">{copy.eyebrow}</span>
      <h1 className="max-w-5xl text-4xl font-black leading-tight md:text-6xl">
        {copy.h1}
      </h1>
      <p className="mt-5 max-w-4xl leading-8 text-muted-foreground md:text-lg">
        {copy.subtitle}
      </p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Link href="/#demo" className={cn(buttonVariants({ size: "lg" }))}>
          {copy.primaryCta}
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <Link
          href="#sales-style-categories"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          {copy.secondaryCta}
        </Link>
      </div>
    </CategorySection>
  );
}
