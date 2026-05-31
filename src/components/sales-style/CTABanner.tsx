import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { CategorySection } from "@/components/category/CategorySection";
import { buttonVariants } from "@/components/ui/button";
import { SALES_STYLE_LABELS, type SalesStyleCopy } from "@/data/sales-style-copy";
import { cn } from "@/lib/utils";

export function CTABanner({ copy }: { copy: SalesStyleCopy }) {
  return (
    <CategorySection className="text-center">
      <h2 className="text-2xl font-black md:text-3xl">{copy.ctaTitle}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-muted-foreground md:text-base">
        {copy.ctaDescription}
      </p>
      <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
        <Link href="/#demo" className={cn(buttonVariants({ size: "lg" }))}>
          {copy.primaryCta}
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <Link
          href="/subscriptions/"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          {SALES_STYLE_LABELS.pricingCta}
        </Link>
      </div>
    </CategorySection>
  );
}
