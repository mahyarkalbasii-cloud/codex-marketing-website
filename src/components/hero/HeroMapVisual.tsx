import heroProjectMapWide from "@/assets/images/home-hero-project-map-wide.webp";
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
        src={heroProjectMapWide.src}
        alt="نقشه تعاملی پروژه‌های ساختمانی فعال تهران با نشانگرهای موقعیت روی صفحه لپ‌تاپ - پرشین‌سازه"
        width="1774"
        height="887"
        loading="eager"
        fetchPriority="high"
        className="hero-laptop-map-image"
      />
    </div>
  );
}
