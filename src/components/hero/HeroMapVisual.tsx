"use client";

import type { CSSProperties } from "react";

import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type HeroMapVisualProps = {
  compact?: boolean;
  locale?: Locale;
};

const particlePalette = ["#56d6c8", "#6fb7ff", "#e2a23e", "#d77559", "#80d69a", "#b9a7ff", "#f6d98a"];

const particleBands = [
  { name: "a", count: 38, radiusX: 45, radiusY: 18, rotation: "-11deg", duration: "18s", offset: 0 },
  { name: "b", count: 36, radiusX: 40, radiusY: 28, rotation: "33deg", duration: "22s", offset: 0.7 },
  { name: "c", count: 34, radiusX: 35, radiusY: 37, rotation: "-47deg", duration: "26s", offset: 1.25 },
  { name: "d", count: 30, radiusX: 27, radiusY: 43, rotation: "71deg", duration: "31s", offset: 2.1 },
  { name: "e", count: 26, radiusX: 22, radiusY: 33, rotation: "-78deg", duration: "28s", offset: 2.72 },
  { name: "f", count: 22, radiusX: 14, radiusY: 25, rotation: "19deg", duration: "20s", offset: 1.62 },
].map((band, bandIndex) => ({
  ...band,
  particles: Array.from({ length: band.count }, (_, index) => {
    const angle = (index / band.count) * Math.PI * 2 + band.offset;
    const colorIndex = (index + bandIndex * 2) % particlePalette.length;
    const sizeStep = (index + bandIndex) % 4;
    const opacityStep = (index + bandIndex) % 5;

    return {
      color: particlePalette[colorIndex],
      delay: `${(index + bandIndex * 5) * -0.13}s`,
      depth: (0.78 + ((index + bandIndex) % 8) * 0.035).toFixed(2),
      left: `${(50 + Math.cos(angle) * band.radiusX).toFixed(4)}%`,
      opacity: (0.52 + opacityStep * 0.075).toFixed(2),
      size: `${2.15 + sizeStep * 0.52}px`,
      top: `${(50 + Math.sin(angle) * band.radiusY).toFixed(4)}%`,
    };
  }),
}));

export function HeroMapVisual({ compact = false, locale = "fa" }: HeroMapVisualProps) {
  const labels =
    locale === "en"
      ? { active: "Active signals", pulse: "Sales pulse" }
      : { active: "فرصت‌های فعال", pulse: "سیگنال فروش" };

  return (
    <div
      aria-hidden="true"
      className={cn(
        "hero-map-visual hero-orb-visual product-theater relative isolate w-full overflow-hidden rounded-[1.45rem] border p-4 lg:p-5",
        compact ? "aspect-[4/3] p-3" : "aspect-square max-h-[540px]",
      )}
    >
      <div className="hero-orb-panel problem-orb-card absolute inset-4 overflow-hidden rounded-[1.25rem] border lg:inset-5">
        <div className="problem-orb-grid pointer-events-none absolute inset-0" />
        <div className="hero-orb-map-ghost pointer-events-none absolute inset-0" />

        <div className="relative z-[1] flex h-full w-full items-center justify-center">
          <div className="problem-orb-stage hero-orb-stage relative grid aspect-square w-[min(82%,29rem)] place-items-center rounded-[2rem]">
            <div className="problem-orb-shell relative" aria-hidden="true">
              <span className="problem-orb-aura" />
              <span className="problem-orb-ring problem-orb-ring-a" />
              <span className="problem-orb-ring problem-orb-ring-b" />
              <span className="problem-orb-ring problem-orb-ring-c" />

              <div className="problem-orb-band-stack">
                {particleBands.map((band, bandIndex) => (
                  <div
                    className={`problem-orb-band problem-orb-band-${band.name}`}
                    key={band.name}
                    style={
                      {
                        "--band-delay": `${bandIndex * -2.2}s`,
                        "--band-duration": band.duration,
                        "--band-rotation": band.rotation,
                      } as CSSProperties
                    }
                  >
                    {band.particles.map((particle, index) => (
                      <span
                        className="problem-orb-particle"
                        key={`${band.name}-${index}`}
                        style={
                          {
                            "--particle-color": particle.color,
                            "--particle-delay": particle.delay,
                            "--particle-depth": particle.depth,
                            "--particle-opacity": particle.opacity,
                            "--particle-size": particle.size,
                            left: particle.left,
                            top: particle.top,
                          } as CSSProperties
                        }
                      />
                    ))}
                  </div>
                ))}
              </div>

              <span className="problem-orb-core">
                <span />
                <span />
                <span />
              </span>
            </div>
          </div>
        </div>

        <div className="hero-orb-status hero-orb-status-a">
          <span />
          <span>{labels.active}</span>
        </div>
        <div className="hero-orb-status hero-orb-status-b">
          <span />
          <span>{labels.pulse}</span>
        </div>
      </div>
    </div>
  );
}
