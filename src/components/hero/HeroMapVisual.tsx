import heroLaptopMap from "@/assets/images/hero-laptop-map.webp";
import { cn } from "@/lib/utils";

type HeroMapVisualProps = {
  compact?: boolean;
};

export function HeroMapVisual({ compact = false }: HeroMapVisualProps) {
  return (
    <div
      className={cn(
        "hero-laptop-map-visual",
        compact && "hero-laptop-map-visual--compact",
      )}
    >
      <img
        src={heroLaptopMap.src}
        alt="نقشهٔ تعاملی پروژه‌های ساختمانی فعال تهران با نشانگرهای موقعیت روی صفحهٔ لپ‌تاپ — پرشین‌سازه"
        width="1254"
        height="1254"
        loading="eager"
        fetchPriority="high"
        className="hero-laptop-map-image"
      />
    </div>
  );
}
