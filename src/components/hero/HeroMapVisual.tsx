"use client";

import Image from "next/image";
import type { CSSProperties } from "react";

import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type HeroMapVisualProps = {
  compact?: boolean;
  locale?: Locale;
};

type RadarBlip = {
  hitDelay: string;
  size: "sm" | "md" | "lg";
  x: number;
  y: number;
};

type RadarBlipStyle = CSSProperties & {
  "--blip-hit-delay": string;
  "--blip-x": string;
  "--blip-y": string;
};

const radarBlips: RadarBlip[] = [
  { hitDelay: "5s", size: "lg", x: 62, y: 35 },
  { hitDelay: "2.9s", size: "md", x: 27, y: 50 },
  { hitDelay: "1.75s", size: "sm", x: 42, y: 75 },
];

const projectMapSrc = "/hero-project-map-focused.jpg";

export function HeroMapVisual({ compact = false, locale = "fa" }: HeroMapVisualProps) {
  void locale;
  const idPrefix = compact ? "hero-radar-compact" : "hero-radar-main";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "hero-map-visual hero-radar-visual product-theater relative isolate w-full overflow-hidden rounded-[1.45rem] border p-4 lg:p-5",
        compact ? "aspect-[4/3] p-3" : "aspect-square max-h-[540px]",
      )}
    >
      <div className="hero-radar-panel absolute inset-4 overflow-hidden rounded-[1.25rem] border lg:inset-5">
        <Image
          src={projectMapSrc}
          alt=""
          fill
          priority={!compact}
          sizes={compact ? "(max-width: 768px) 100vw, 360px" : "(max-width: 1024px) 100vw, 540px"}
          className="hero-radar-map-image object-cover"
        />
        <div className="hero-radar-map-wash absolute inset-0" />
        <div className="hero-radar-grid absolute inset-0" />
        <div className="hero-radar-vignette absolute inset-0" />
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 700 700"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <radialGradient id={`${idPrefix}-core`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#E18868" />
              <stop offset="58%" stopColor="#CC785C" />
              <stop offset="100%" stopColor="#9E4F38" />
            </radialGradient>
            <radialGradient id={`${idPrefix}-fade`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#CC785C" stopOpacity="0.28" />
              <stop offset="52%" stopColor="#CC785C" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#CC785C" stopOpacity="0" />
            </radialGradient>
            <linearGradient id={`${idPrefix}-sweep-fill`} x1="350" x2="680" y1="350" y2="350" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#CC785C" stopOpacity="0.22" />
              <stop offset="72%" stopColor="#CC785C" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#CC785C" stopOpacity="0" />
            </linearGradient>
            <clipPath id={`${idPrefix}-clip`}>
              <circle cx="350" cy="350" r="292" />
            </clipPath>
          </defs>

          <rect width="700" height="700" fill="transparent" />
          <circle className="hero-radar-soft-field" cx="350" cy="350" r="302" fill={`url(#${idPrefix}-fade)`} />

          <g className="hero-radar-axis" strokeLinecap="round">
            <path d="M350 78V622" />
            <path d="M78 350H622" />
          </g>

          <g className="hero-radar-rings" fill="none">
            <circle className="hero-radar-ring hero-radar-ring-accent" cx="350" cy="350" r="292" />
            <circle className="hero-radar-ring" cx="350" cy="350" r="226" />
            <circle className="hero-radar-ring" cx="350" cy="350" r="158" />
            <circle className="hero-radar-ring hero-radar-ring-focus" cx="350" cy="350" r="92" />
          </g>

          <g className="hero-radar-rings hero-radar-rings-muted" fill="none">
            <circle cx="350" cy="350" r="92" />
            <circle cx="350" cy="350" r="158" />
            <circle cx="350" cy="350" r="226" />
          </g>

          <g className="hero-radar-sweep" clipPath={`url(#${idPrefix}-clip)`}>
            <path d="M350 350L626 350A276 276 0 0 0 467 100Z" fill={`url(#${idPrefix}-sweep-fill)`} />
            <line x1="350" y1="350" x2="626" y2="350" />
            <path d="M467 100A276 276 0 0 1 626 350" />
          </g>

          <circle className="hero-radar-center-halo" cx="350" cy="350" r="44" />
          <circle className="hero-radar-center" cx="350" cy="350" r="25" fill={`url(#${idPrefix}-core)`} />
        </svg>

        <div className="absolute inset-0">
          {radarBlips.map((blip) => {
            const style: RadarBlipStyle = {
              "--blip-hit-delay": blip.hitDelay,
              "--blip-x": `${blip.x}%`,
              "--blip-y": `${blip.y}%`,
            };

            return (
              <span
                key={`${blip.x}-${blip.y}`}
                className="hero-radar-blip"
                data-size={blip.size}
                style={style}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
