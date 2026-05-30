import { cn } from "@/lib/utils";

type HeroMapVisualProps = {
  compact?: boolean;
};

const fieldDots = Array.from({ length: 42 }, (_, index) => ({
  cx: 38 + (index % 7) * 47,
  cy: 42 + Math.floor(index / 7) * 40,
}));

const mutedPins = [
  { x: 68, y: 88, scale: 0.82 },
  { x: 126, y: 64, scale: 0.7 },
  { x: 232, y: 76, scale: 0.76 },
  { x: 294, y: 112, scale: 0.86 },
  { x: 184, y: 136, scale: 0.68 },
  { x: 82, y: 176, scale: 0.74 },
  { x: 248, y: 184, scale: 0.8 },
  { x: 306, y: 224, scale: 0.7 },
];

const pinPath =
  "M0 -12C6.6 -12 11 -7.4 11 -1.7C11 5.7 0 15 0 15C0 15 -11 5.7 -11 -1.7C-11 -7.4 -6.6 -12 0 -12Z";

export function HeroMapVisual({ compact = false }: HeroMapVisualProps) {
  const labels = {
    active: "فرصت‌های فعال",
    aria: "نمای انتزاعی از پروژه‌های ساختمانی فعال که یک فرصت مناسب زودتر برجسته شده است",
    pulse: "سیگنال فروش",
  };

  return (
    <div
      className={cn(
        "hero-map-visual hero-project-finder-visual",
        compact && "hero-project-finder-visual--compact",
      )}
      role="img"
      aria-label={labels.aria}
    >
      <div className="hero-project-finder-card">
        <svg
          className="hero-project-field-svg"
          viewBox="0 0 360 300"
          aria-hidden="true"
          focusable="false"
        >
          <g className="hero-project-field-lines">
            <path d="M24 72H336" />
            <path d="M24 132H336" />
            <path d="M24 192H336" />
            <path d="M82 28V260" />
            <path d="M166 28V260" />
            <path d="M250 28V260" />
          </g>

          <g className="hero-project-field-dots">
            {fieldDots.map((dot) => (
              <circle key={`${dot.cx}-${dot.cy}`} cx={dot.cx} cy={dot.cy} r="1.45" />
            ))}
          </g>

          <path
            className="hero-project-signal-line"
            d="M117 213C93 224 79 242 64 265"
            pathLength="1"
          />

          <g className="hero-project-muted-pins">
            {mutedPins.map((pin) => (
              <g
                key={`${pin.x}-${pin.y}`}
                className="hero-project-pin hero-project-pin--muted"
                transform={`translate(${pin.x} ${pin.y}) scale(${pin.scale})`}
              >
                <path d={pinPath} />
                <circle cx="0" cy="-2" r="3.2" />
              </g>
            ))}
          </g>

          <g className="hero-project-pin hero-project-pin--active" transform="translate(118 208)">
            <circle className="hero-project-pin-ring hero-project-pin-ring--soft" cx="0" cy="0" r="30" />
            <circle className="hero-project-pin-ring hero-project-pin-ring--pulse" cx="0" cy="0" r="28" />
            <path d={pinPath} />
            <circle cx="0" cy="-2" r="4.8" />
          </g>
        </svg>

        <div className="hero-project-badge hero-project-badge--active">
          <span aria-hidden="true" />
          <span>{labels.active}</span>
        </div>

        <div className="hero-project-badge hero-project-badge--signal">
          <span aria-hidden="true" />
          <span>{labels.pulse}</span>
        </div>
      </div>
    </div>
  );
}
