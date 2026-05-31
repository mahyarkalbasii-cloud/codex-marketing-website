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
          aria-labelledby="hero-tehran-motion-title"
          className="hero-motion-line-art hero-tehran-motion"
          role="img"
          viewBox="0 0 760 500"
        >
          <title id="hero-tehran-motion-title">
            Animated line-art map of Tehran with moving construction opportunity
            pins
          </title>

          <defs>
            <path
              id="hero-tehran-route-north"
              d="M89 190C152 129 236 104 330 116c93 12 166 53 230 116"
            />
            <path
              id="hero-tehran-route-center"
              d="M114 291c91-54 176-79 255-74 93 6 174 49 252 129"
            />
            <path
              id="hero-tehran-route-south"
              d="M153 372c61-45 141-61 239-47 80 12 143 4 213-36"
            />
            <path
              id="hero-tehran-route-cross"
              d="M516 92c-56 55-86 121-91 197-4 68 16 126 60 174"
            />
          </defs>

          <g className="hero-tehran-plot" aria-hidden="true">
            <path
              className="hero-tehran-boundary"
              d="M105 202c28-64 95-106 200-126 91-17 177-3 258 42 70 39 112 92 126 160 14 71-11 127-75 168-65 41-142 45-231 12-52-19-104-20-155-4-72 22-130 7-174-45-46-54-29-132 51-207Z"
            />
            <path d="M83 252c84-31 171-47 263-49 107-2 218 17 332 56" />
            <path d="M107 320c94-47 189-70 287-68 101 2 195 31 282 86" />
            <path d="M149 169c57 47 118 78 183 93 78 18 160 11 246-21" />
            <path d="M210 102c-25 77-34 161-27 252 3 42 12 82 26 120" />
            <path d="M350 75c-19 82-24 166-15 251 5 49 18 96 38 141" />
            <path d="M528 113c-48 68-83 143-105 224-11 39-18 80-22 124" />
            <path d="M610 181c-74 39-136 89-188 150-32 37-58 79-79 126" />
            <path d="M134 399c72-58 158-91 257-100 88-8 180 5 277 38" />
          </g>

          <g className="hero-tehran-routes" aria-hidden="true">
            <use href="#hero-tehran-route-north" className="hero-tehran-route hero-tehran-route--north" />
            <use href="#hero-tehran-route-center" className="hero-tehran-route hero-tehran-route--center" />
            <use href="#hero-tehran-route-south" className="hero-tehran-route hero-tehran-route--south" />
            <use href="#hero-tehran-route-cross" className="hero-tehran-route hero-tehran-route--cross" />
          </g>

          <g className="hero-tehran-nodes" aria-hidden="true">
            <circle className="hero-tehran-node hero-tehran-node--north" cx="89" cy="190" r="4.5" />
            <circle className="hero-tehran-node hero-tehran-node--north" cx="222" cy="124" r="5.5" />
            <circle className="hero-tehran-node hero-tehran-node--north" cx="365" cy="123" r="4.5" />
            <circle className="hero-tehran-node hero-tehran-node--north" cx="560" cy="232" r="6" />

            <circle className="hero-tehran-node hero-tehran-node--center" cx="114" cy="291" r="4.5" />
            <circle className="hero-tehran-node hero-tehran-node--center" cx="269" cy="224" r="6" />
            <circle className="hero-tehran-node hero-tehran-node--center" cx="431" cy="236" r="5" />
            <circle className="hero-tehran-node hero-tehran-node--center" cx="621" cy="346" r="5.5" />

            <circle className="hero-tehran-node hero-tehran-node--south" cx="153" cy="372" r="5" />
            <circle className="hero-tehran-node hero-tehran-node--south" cx="317" cy="321" r="4.5" />
            <circle className="hero-tehran-node hero-tehran-node--south" cx="605" cy="289" r="5.5" />

            <circle className="hero-tehran-node hero-tehran-node--cross" cx="516" cy="92" r="5.5" />
            <circle className="hero-tehran-node hero-tehran-node--cross" cx="425" cy="289" r="4.5" />
            <circle className="hero-tehran-node hero-tehran-node--cross" cx="485" cy="463" r="5.5" />
          </g>

          <g className="hero-tehran-constellation" aria-hidden="true">
            <path d="M222 124 269 224 365 123 431 236 560 232" />
            <path d="M153 372 317 321 425 289 621 346" />
            <path d="M516 92 560 232 605 289 485 463" />
          </g>

          <g className="hero-tehran-mobile-pins" aria-hidden="true">
            <g className="hero-tehran-moving-pin hero-tehran-moving-pin--north">
              <animateMotion dur="8.8s" repeatCount="indefinite">
                <mpath href="#hero-tehran-route-north" />
              </animateMotion>
              <circle className="hero-tehran-pin-wave" r="18" />
              <path
                className="hero-tehran-pin-body"
                d="M0-19c10 0 18 8 18 18 0 14-18 32-18 32S-18 13-18-1c0-10 8-18 18-18Z"
              />
              <circle className="hero-tehran-pin-core" cy="-1" r="5" />
            </g>

            <g className="hero-tehran-moving-pin hero-tehran-moving-pin--center">
              <animateMotion begin="-2.2s" dur="9.6s" repeatCount="indefinite">
                <mpath href="#hero-tehran-route-center" />
              </animateMotion>
              <circle className="hero-tehran-pin-wave" r="17" />
              <path
                className="hero-tehran-pin-body"
                d="M0-18c10 0 17 8 17 17 0 14-17 31-17 31S-17 13-17-1c0-9 7-17 17-17Z"
              />
              <circle className="hero-tehran-pin-core" cy="-1" r="4.5" />
            </g>

            <g className="hero-tehran-moving-pin hero-tehran-moving-pin--south">
              <animateMotion begin="-4.1s" dur="10.4s" repeatCount="indefinite">
                <mpath href="#hero-tehran-route-south" />
              </animateMotion>
              <circle className="hero-tehran-pin-wave" r="16" />
              <path
                className="hero-tehran-pin-body"
                d="M0-17c9 0 16 7 16 16 0 13-16 29-16 29S-16 12-16-1c0-9 7-16 16-16Z"
              />
              <circle className="hero-tehran-pin-core" cy="-1" r="4.25" />
            </g>

            <g className="hero-tehran-moving-dot hero-tehran-moving-dot--cross">
              <animateMotion begin="-1.4s" dur="7.8s" repeatCount="indefinite">
                <mpath href="#hero-tehran-route-cross" />
              </animateMotion>
              <circle r="7" />
              <circle r="18" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
