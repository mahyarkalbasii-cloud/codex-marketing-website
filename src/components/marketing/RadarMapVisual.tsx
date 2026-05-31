import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

type RadarMapVisualProps = {
  className?: string;
  compact?: boolean;
  idPrefix?: string;
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

type SimulatedRoad = {
  height?: string;
  kind: "main" | "secondary" | "thin";
  rotation: number;
  width: number;
  x: number;
  y: number;
};

type SimulatedRoadStyle = CSSProperties & {
  "--road-height"?: string;
  "--road-rotation": string;
  "--road-width": string;
  "--road-x": string;
  "--road-y": string;
};

type SimulatedMapPin = {
  active?: boolean;
  delay: string;
  tone: "navy" | "teal" | "blue" | "gold";
  x: number;
  y: number;
};

type SimulatedMapPinStyle = CSSProperties & {
  "--pin-delay": string;
  "--pin-x": string;
  "--pin-y": string;
};

type SimulatedMapLabelStyle = CSSProperties & {
  "--label-rotation": string;
  "--label-x": string;
  "--label-y": string;
};

const radarBlips: RadarBlip[] = [
  { hitDelay: "5s", size: "lg", x: 62, y: 35 },
  { hitDelay: "2.9s", size: "md", x: 27, y: 50 },
  { hitDelay: "1.75s", size: "sm", x: 42, y: 75 },
];

const simulatedRoads: SimulatedRoad[] = [
  { kind: "main", rotation: -23, width: 118, x: -8, y: 16 },
  { kind: "main", rotation: 4, width: 116, x: -7, y: 82 },
  { kind: "main", rotation: 72, width: 88, x: 78, y: 6 },
  { kind: "secondary", rotation: -12, width: 84, x: 11, y: 39 },
  { kind: "secondary", rotation: 32, width: 72, x: 41, y: 12 },
  { kind: "secondary", rotation: 88, width: 94, x: 30, y: -6 },
  { kind: "secondary", rotation: 84, width: 84, x: 62, y: 21 },
  { kind: "thin", rotation: -38, width: 65, x: 10, y: 65 },
  { kind: "thin", rotation: 12, width: 62, x: 47, y: 61 },
  { kind: "thin", rotation: -3, width: 72, x: 6, y: 27 },
  { kind: "thin", rotation: 54, width: 58, x: 73, y: 44 },
  { kind: "thin", rotation: 92, width: 74, x: 20, y: 31 },
];

const simulatedMapPins: SimulatedMapPin[] = [
  { delay: "0ms", tone: "blue", x: 18, y: 19 },
  { delay: "80ms", tone: "navy", x: 27, y: 27 },
  { delay: "160ms", tone: "teal", x: 39, y: 22 },
  { delay: "240ms", tone: "navy", x: 53, y: 18 },
  { delay: "320ms", tone: "gold", x: 68, y: 27 },
  { delay: "400ms", tone: "teal", x: 83, y: 21 },
  { delay: "480ms", tone: "navy", x: 22, y: 43 },
  { delay: "560ms", tone: "blue", x: 35, y: 48 },
  { delay: "640ms", tone: "navy", x: 49, y: 43 },
  { active: true, delay: "720ms", tone: "teal", x: 61, y: 38 },
  { delay: "800ms", tone: "blue", x: 76, y: 46 },
  { delay: "880ms", tone: "gold", x: 88, y: 39 },
  { delay: "960ms", tone: "teal", x: 14, y: 68 },
  { delay: "1040ms", tone: "navy", x: 31, y: 73 },
  { delay: "1120ms", tone: "gold", x: 45, y: 66 },
  { active: true, delay: "1200ms", tone: "navy", x: 58, y: 70 },
  { delay: "1280ms", tone: "teal", x: 71, y: 63 },
  { delay: "1360ms", tone: "blue", x: 84, y: 74 },
];

const simulatedMapLabels = [
  { rotation: -22, text: "بزرگراه امام", x: 13, y: 12 },
  { rotation: 83, text: "بلوار فرحزادی", x: 66, y: 52 },
  { rotation: -9, text: "سوم غربی", x: 34, y: 38 },
];

export function RadarMapVisual({ className, compact = false, idPrefix = "radar-map" }: RadarMapVisualProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "hero-map-visual hero-radar-visual product-theater relative isolate w-full overflow-hidden rounded-[1.45rem] border p-4 lg:p-5",
        compact ? "aspect-[4/3] p-3" : "aspect-square max-h-[540px]",
        className,
      )}
    >
      <div className="hero-radar-panel absolute inset-4 overflow-hidden rounded-[1.25rem] border lg:inset-5">
        <div className="hero-radar-city-map absolute inset-0">
          <div className="hero-radar-district hero-radar-district-a" />
          <div className="hero-radar-district hero-radar-district-b" />
          <div className="hero-radar-district hero-radar-district-c" />
          <div className="hero-radar-park hero-radar-park-a" />
          <div className="hero-radar-park hero-radar-park-b" />
          <div className="hero-radar-park hero-radar-park-c" />

          {simulatedRoads.map((road, index) => {
            const style: SimulatedRoadStyle = {
              "--road-height": road.height,
              "--road-rotation": `${road.rotation}deg`,
              "--road-width": `${road.width}%`,
              "--road-x": `${road.x}%`,
              "--road-y": `${road.y}%`,
            };

            return <span className="hero-radar-road" data-kind={road.kind} key={`${road.kind}-${index}`} style={style} />;
          })}

          {simulatedMapLabels.map((label) => {
            const style: SimulatedMapLabelStyle = {
              "--label-rotation": `${label.rotation}deg`,
              "--label-x": `${label.x}%`,
              "--label-y": `${label.y}%`,
            };

            return (
              <span className="hero-radar-map-label" key={label.text} style={style}>
                {label.text}
              </span>
            );
          })}

          {simulatedMapPins.map((pin, index) => {
            const style: SimulatedMapPinStyle = {
              "--pin-delay": pin.delay,
              "--pin-x": `${pin.x}%`,
              "--pin-y": `${pin.y}%`,
            };

            return (
              <span
                className="hero-radar-map-pin"
                data-active={pin.active ? "true" : "false"}
                data-tone={pin.tone}
                key={`${pin.x}-${pin.y}-${index}`}
                style={style}
              >
                <span className="hero-radar-map-pin-head">
                  <span />
                  <span />
                  <span />
                </span>
              </span>
            );
          })}
        </div>
        <div className="hero-radar-map-wash absolute inset-0" />
        <div className="hero-radar-grid absolute inset-0" />
        <div className="hero-radar-vignette absolute inset-0" />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 700 700" preserveAspectRatio="xMidYMid meet">
          <defs>
            <radialGradient id={`${idPrefix}-core`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#E18868" />
              <stop offset="58%" stopColor="var(--clay-500)" />
              <stop offset="100%" stopColor="var(--clay-600)" />
            </radialGradient>
            <radialGradient id={`${idPrefix}-fade`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--clay-400)" stopOpacity="0.28" />
              <stop offset="52%" stopColor="var(--clay-400)" stopOpacity="0.08" />
              <stop offset="100%" stopColor="var(--clay-400)" stopOpacity="0" />
            </radialGradient>
            <linearGradient id={`${idPrefix}-sweep-fill`} x1="350" x2="680" y1="350" y2="350" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="var(--clay-400)" stopOpacity="0.22" />
              <stop offset="72%" stopColor="var(--clay-400)" stopOpacity="0.1" />
              <stop offset="100%" stopColor="var(--clay-400)" stopOpacity="0" />
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

            return <span className="hero-radar-blip" data-size={blip.size} key={`${blip.x}-${blip.y}`} style={style} />;
          })}
        </div>
      </div>
    </div>
  );
}
