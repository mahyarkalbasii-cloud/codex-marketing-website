import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

type HeroMapVisualProps = {
  compact?: boolean;
};

const heroParticlePalette = [
  "#56d6c8",
  "#6fb7ff",
  "#e2a23e",
  "#d77559",
  "#80d69a",
  "#b9a7ff",
  "#f6d98a",
];

const heroParticleBands = [
  { count: 42, duration: "18s", name: "a", offset: 0.15, radiusX: 45, radiusY: 17, rotation: "-13deg" },
  { count: 40, duration: "22s", name: "b", offset: 0.72, radiusX: 40, radiusY: 28, rotation: "31deg" },
  { count: 36, duration: "26s", name: "c", offset: 1.28, radiusX: 35, radiusY: 38, rotation: "-45deg" },
  { count: 32, duration: "31s", name: "d", offset: 2.08, radiusX: 28, radiusY: 43, rotation: "72deg" },
  { count: 28, duration: "28s", name: "e", offset: 2.7, radiusX: 22, radiusY: 33, rotation: "-76deg" },
  { count: 24, duration: "20s", name: "f", offset: 1.62, radiusX: 14, radiusY: 25, rotation: "18deg" },
].map((band, bandIndex) => ({
  ...band,
  particles: Array.from({ length: band.count }, (_, index) => {
    const angle = (index / band.count) * Math.PI * 2 + band.offset;
    const colorIndex = (index + bandIndex * 2) % heroParticlePalette.length;
    const sizeStep = (index + bandIndex) % 4;
    const opacityStep = (index + bandIndex) % 5;

    return {
      color: heroParticlePalette[colorIndex],
      delay: `${(index + bandIndex * 5) * -0.13}s`,
      depth: (0.78 + ((index + bandIndex) % 8) * 0.035).toFixed(2),
      left: `${50 + Math.cos(angle) * band.radiusX}%`,
      opacity: (0.52 + opacityStep * 0.075).toFixed(2),
      size: `${2.15 + sizeStep * 0.52}px`,
      top: `${50 + Math.sin(angle) * band.radiusY}%`,
    };
  }),
}));

export function HeroMapVisual({ compact = false }: HeroMapVisualProps) {
  return (
    <div
      className={cn(
        "hero-laptop-map-visual hero-data-orb-visual",
        compact && "hero-laptop-map-visual--compact",
      )}
    >
      <div
        className="hero-data-orb-stage problem-orb-stage"
        aria-label="Live construction-market intelligence orb with moving data particles"
      >
        <div className="hero-data-orb-shell problem-orb-shell" aria-hidden="true">
          <span className="hero-data-orb-aura problem-orb-aura" />

          <svg
            className="hero-data-orb-map"
            viewBox="0 0 460 460"
            aria-hidden="true"
          >
            <path d="M82 205c49-68 127-101 233-97 72 3 124 30 157 82 32 52 26 112-17 160-45 51-108 64-190 38-42-13-80-12-114 3-57 25-103 5-138-59-24-45-1-89 69-127Z" />
            <path d="M76 247c79-31 158-44 238-39 67 5 124 24 171 58" />
            <path d="M107 321c68-40 151-57 250-51 61 4 111 19 151 45" />
            <path d="M162 124c-22 74-25 155-8 244" />
            <path d="M274 101c-19 68-23 136-12 203 7 43 22 83 46 121" />
            <path d="M390 151c-54 52-91 113-111 183" />
          </svg>

          <span className="problem-orb-ring problem-orb-ring-a" />
          <span className="problem-orb-ring problem-orb-ring-b" />
          <span className="problem-orb-ring problem-orb-ring-c" />

          <div className="problem-orb-band-stack">
            {heroParticleBands.map((band, bandIndex) => (
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

          <span className="hero-data-orb-core problem-orb-core">
            <span />
            <span />
            <span />
          </span>
        </div>
      </div>
    </div>
  );
}
