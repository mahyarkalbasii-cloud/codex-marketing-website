import heroMobileProjectMapLarge from "@/assets/images/home-hero-mobile-project-map-large.webp";
import heroMobileProjectMap from "@/assets/images/home-hero-mobile-project-map.webp";
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
      <picture>
        <source media="(max-width: 767px)" srcSet={heroMobileProjectMap.src} />
        <img
          src={heroMobileProjectMapLarge.src}
        alt="نقشه تعاملی پروژه‌های ساختمانی فعال تهران با نشانگرهای موقعیت روی صفحه لپ‌تاپ - پرشین‌سازه"
          width={heroMobileProjectMapLarge.width}
          height={heroMobileProjectMapLarge.height}
          loading="eager"
          fetchPriority="high"
          className="hero-laptop-map-image"
        />
      </picture>
    </div>
  );
}
