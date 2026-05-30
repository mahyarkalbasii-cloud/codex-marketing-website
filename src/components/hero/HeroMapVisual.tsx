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
      <div className="hero-laptop-map-stage">
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
        <span className="hero-laptop-map-sweep" aria-hidden="true" />
        <span className="hero-laptop-map-signal hero-laptop-map-signal--primary" aria-hidden="true" />
        <span className="hero-laptop-map-signal hero-laptop-map-signal--secondary" aria-hidden="true" />
        <span className="hero-laptop-map-signal hero-laptop-map-signal--tertiary" aria-hidden="true" />
        <span className="hero-laptop-map-touch-ripple" aria-hidden="true" />
      </div>
    </div>
  );
}
