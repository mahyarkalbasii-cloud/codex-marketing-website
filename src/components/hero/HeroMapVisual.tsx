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
        <svg
          aria-labelledby="hero-line-art-title"
          className="hero-motion-line-art"
          role="img"
          viewBox="0 0 680 540"
        >
          <title id="hero-line-art-title">
            Animated line art of construction project discovery and sales follow-up
          </title>
          <defs>
            <linearGradient id="hero-line-clay" x1="145" x2="560" y1="405" y2="130" gradientUnits="userSpaceOnUse">
              <stop stopColor="var(--clay-500)" />
              <stop offset="1" stopColor="var(--sage-600)" />
            </linearGradient>
            <linearGradient id="hero-line-paper" x1="150" x2="510" y1="80" y2="470" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fff8ea" stopOpacity="0.72" />
              <stop offset="1" stopColor="#ead3b1" stopOpacity="0.42" />
            </linearGradient>
          </defs>

          <g className="hero-line-art-cloud" aria-hidden="true">
            <path d="M112 388c62 70 161 92 285 66 126-26 216-91 230-182 13-85-55-155-164-182-109-28-251-10-330 58C53 216 50 318 112 388Z" />
          </g>

          <g className="hero-line-art-device">
            <path className="hero-line-art-shell" d="M168 58 462 86c38 4 66 38 62 76l-27 259c-4 39-39 67-77 63l-293-30c-38-4-66-39-62-77L91 120c4-39 39-66 77-62Z" />
            <path className="hero-line-art-screen" d="M167 98 446 125c22 2 38 22 36 44l-23 222c-2 22-22 38-44 36l-279-28c-22-2-38-22-36-44l23-222c2-22 22-38 44-35Z" />
            <path className="hero-line-art-topbar" d="m136 154 331 33" />
            <path className="hero-line-art-home" d="m286 438 56 6" />
            <path className="hero-line-art-camera" d="m262 92 67 7" />
          </g>

          <g className="hero-line-art-grid" aria-hidden="true">
            <path d="M155 212c86-36 187-30 285 16" />
            <path d="M136 281c96-42 207-36 318 20" />
            <path d="M150 352c74-25 159-18 255 20" />
            <path d="M223 129c-21 83-29 174-24 272" />
            <path d="M325 141c-22 82-31 172-27 268" />
            <path d="M425 166c-19 70-27 146-23 229" />
          </g>

          <g className="hero-line-art-buildings" aria-hidden="true">
            <path d="M488 339h96v82h-96z" />
            <path d="M504 339v-45h64v45" />
            <path d="M520 294v-36h31v36" />
            <path d="M508 358h14m18 0h14m18 0h14M508 381h14m18 0h14m18 0h14M508 404h14m18 0h14m18 0h14" />
            <path className="hero-line-art-crane" d="M514 255h106m-87 0v-58m-30 0h80m-64 0 28 58m-6-58 35 58" />
          </g>

          <path
            className="hero-line-art-route hero-line-art-route--ghost"
            d="M151 338 C205 271 244 324 286 253 S378 247 421 191 S487 165 548 228"
          />
          <path
            className="hero-line-art-route hero-line-art-route--active"
            d="M151 338 C205 271 244 324 286 253 S378 247 421 191 S487 165 548 228"
            pathLength={1}
          />
          <path
            className="hero-line-art-route hero-line-art-route--sales"
            d="M287 253 C360 313 415 330 491 339"
            pathLength={1}
          />

          <g className="hero-line-art-pins">
            <g className="hero-line-art-pin hero-line-art-pin--a">
              <path d="M151 322c15 0 27 12 27 27 0 22-27 47-27 47s-27-25-27-47c0-15 12-27 27-27Z" />
              <circle cx="151" cy="349" r="8" />
            </g>
            <g className="hero-line-art-pin hero-line-art-pin--b">
              <path d="M287 235c15 0 27 12 27 27 0 22-27 47-27 47s-27-25-27-47c0-15 12-27 27-27Z" />
              <circle cx="287" cy="262" r="8" />
            </g>
            <g className="hero-line-art-pin hero-line-art-pin--c">
              <path d="M421 173c15 0 27 12 27 27 0 22-27 47-27 47s-27-25-27-47c0-15 12-27 27-27Z" />
              <circle cx="421" cy="200" r="8" />
            </g>
            <g className="hero-line-art-pin hero-line-art-pin--d">
              <path d="M548 210c15 0 27 12 27 27 0 22-27 47-27 47s-27-25-27-47c0-15 12-27 27-27Z" />
              <circle cx="548" cy="237" r="8" />
            </g>
          </g>

          <g className="hero-line-art-tracker" aria-hidden="true">
            <circle cx="0" cy="0" r="7" />
            <circle cx="0" cy="0" r="18" />
          </g>
        </svg>
      </div>
    </div>
  );
}
