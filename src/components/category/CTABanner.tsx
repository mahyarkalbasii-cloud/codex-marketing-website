import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { CategorySection } from "@/components/category/CategorySection";
import { buttonVariants } from "@/components/ui/button";
import type { Category } from "@/data/types";
import { cn } from "@/lib/utils";

export function CTABanner({ category }: { category: Category }) {
  return (
    <CategorySection className="text-center">
      <h2 className="text-2xl font-black md:text-3xl">
        فروش {category.faTitle} را پروژه‌محورتر کنید
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-muted-foreground md:text-base">
        با یک دمو کوتاه، ببینید تیم فروش چطور پروژه مناسب را پیدا می‌کند، زمان
        پیگیری را می‌فهمد و فرصت را در CRM جلو می‌برد.
      </p>
      <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
        <Link href="/#demo" className={cn(buttonVariants({ size: "lg" }))}>
          درخواست دمو
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <Link
          href="/pricing"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          مشاهده پلن‌ها
        </Link>
      </div>
    </CategorySection>
  );
}
