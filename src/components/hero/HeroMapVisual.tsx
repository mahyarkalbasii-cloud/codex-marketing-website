import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type HeroMapVisualProps = {
  compact?: boolean;
  locale?: Locale;
};

export function HeroMapVisual({ compact = false, locale = "fa" }: HeroMapVisualProps) {
  const ariaLabel =
    locale === "en"
      ? "Construction intelligence illustration showing active project locations, a highlighted opportunity, and sales signal dashboard cards"
      : "تصویرسازی هوشمندی ساختمانی با موقعیت پروژه‌های فعال، یک فرصت برجسته و کارت‌های سیگنال فروش";

  return (
    <div
      className={cn(
        "hero-map-visual hero-project-finder-visual",
        compact && "hero-project-finder-visual--compact",
      )}
      role="img"
      aria-label={ariaLabel}
    >
      <div className="hero-project-finder-card">
        <img
          className="hero-project-field-svg h-full w-full object-cover"
          src="/images/hero-project-intelligence.svg"
          alt=""
          aria-hidden="true"
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  );
}
