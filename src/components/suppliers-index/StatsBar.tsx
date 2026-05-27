import { CategorySection } from "@/components/category/CategorySection";

export function StatsBar({
  categoryCount,
  stageCount,
  subcategoryCount,
}: {
  categoryCount: string;
  stageCount: string;
  subcategoryCount: string;
}) {
  const stats = [
    { label: "دسته اصلی", value: categoryCount },
    { label: "زمینه کاری", value: subcategoryCount },
    { label: "مرحله ساخت", value: stageCount },
  ];

  return (
    <CategorySection className="grid gap-4 md:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="category-card p-5 text-center">
          <p className="text-3xl font-black md:text-4xl">{stat.value}</p>
          <p className="mt-2 text-sm font-bold text-muted-foreground">
            {stat.label}
          </p>
        </div>
      ))}
    </CategorySection>
  );
}
