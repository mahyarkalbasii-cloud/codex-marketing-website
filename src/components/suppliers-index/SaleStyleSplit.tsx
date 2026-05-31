import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { CategorySection } from "@/components/category/CategorySection";
import { SALE_PATHS } from "@/data/category-insights";

export function SaleStyleSplit({
  barterCount,
  consultativeCount,
  fastCount,
}: {
  barterCount: string;
  consultativeCount: string;
  fastCount: string;
}) {
  const cards = [
    {
      count: fastCount,
      description:
        "برای محصولاتی که تصمیم خرید نزدیک‌تر است و سرعت تماس، قیمت‌دهی و پیگیری کوتاه‌مدت تعیین‌کننده می‌شود.",
      path: SALE_PATHS.fast.href,
      title: SALE_PATHS.fast.title,
    },
    {
      count: consultativeCount,
      description:
        "برای خدمات و محصولاتی که نیاز به اعتمادسازی، شواهد فنی و ورود زودتر به چرخه تصمیم‌گیری دارند.",
      path: SALE_PATHS.consultative.href,
      title: SALE_PATHS.consultative.title,
    },
    {
      count: barterCount,
      description:
        "برای مصالح و خدماتی که انعطاف مالی، تهاتر با ملک یا توافق مرحله‌ای بخشی از مزیت فروش است.",
      path: "/sales-style/barter/",
      title: "تهاتر مصالح و خدمات",
    },
  ];

  return (
    <CategorySection>
      <span className="category-badge mb-3">مدل فروش</span>
      <h2 className="text-2xl font-black md:text-3xl">
        ابتدا مسیر فروش را درست تشخیص دهید
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
        تقسیم‌بندی اصلی پرشین‌سازه بر اساس این است که فرصت فروش شما سریع،
        مشاوره‌ای یا تهاتری است و در کدام مرحله باید پیگیری شود.
      </p>
      <div className="mt-7 grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <Link key={card.path} href={card.path}>
            <article className="category-card h-full p-6 transition hover:-translate-y-0.5 hover:bg-white">
              <h3 className="text-xl font-black">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {card.description}
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <span className="category-badge">{card.count} زمینه کاری</span>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-[#7a4a22]">
                  مشاهده
                  <ArrowLeft className="h-4 w-4" />
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </CategorySection>
  );
}
