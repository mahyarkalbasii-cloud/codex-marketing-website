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
          viewBox="0 0 720 420"
        >
          <title id="hero-tehran-motion-title">
            Animated schematic network of Tehran construction opportunities
          </title>

          <rect className="hero-tehran-panel" x="28" y="32" width="664" height="356" rx="58" />

          <g className="hero-tehran-map" aria-hidden="true">
            <path className="hero-tehran-boundary" d="M138 108c77-49 171-70 283-58 81 9 146 40 188 89 44 52 51 113 21 183-33 77-102 104-207 85-55-10-101-16-139-7-79 18-151-6-188-63-48-74-31-182 42-229Z" />
            <path d="M91 276c87-29 170-45 249-47 103-3 198 18 285 63" />
            <path d="M112 206c88-34 169-47 242-39 87 9 168 42 243 99" />
            <path d="M172 118c31 78 43 166 35 263" />
            <path d="M289 74c9 56 10 112 4 167-6 56-20 111-42 166" />
            <path d="M431 59c-22 53-32 107-30 162 2 62 20 120 53 174" />
            <path d="M568 129c-58 39-107 87-147 145-22 32-42 68-61 107" />
            <path d="M118 330c67-46 147-70 238-71 105-2 197 25 278 81" />
          </g>

          <g className="hero-tehran-network hero-tehran-network--north">
            <path d="M103 111 162 84 226 114 271 80 329 102" />
            <path d="M162 84 164 144 226 114 243 169 310 167" />
            <path d="M226 114 310 167 363 128 420 151" />
            <circle cx="103" cy="111" r="6" />
            <circle cx="162" cy="84" r="8" />
            <circle cx="226" cy="114" r="6" />
            <circle cx="271" cy="80" r="5" />
            <circle cx="310" cy="167" r="8" />
            <circle cx="363" cy="128" r="5" />
            <circle cx="420" cy="151" r="7" />
          </g>

          <g className="hero-tehran-network hero-tehran-network--center">
            <path d="M206 236 259 206 319 233 368 197 434 226 495 197" />
            <path d="M259 206 285 276 368 197 382 284 453 305 495 197" />
            <path d="M206 236 285 276 342 334 453 305 541 331" />
            <circle cx="206" cy="236" r="7" />
            <circle cx="259" cy="206" r="9" />
            <circle cx="319" cy="233" r="6" />
            <circle cx="368" cy="197" r="8" />
            <circle cx="382" cy="284" r="7" />
            <circle cx="453" cy="305" r="6" />
            <circle cx="495" cy="197" r="9" />
            <circle cx="541" cy="331" r="6" />
          </g>

          <g className="hero-tehran-network hero-tehran-network--east">
            <path d="M520 112 574 87 623 119 651 178 604 231 548 202" />
            <path d="M574 87 604 151 548 202 520 112" />
            <path d="M623 119 604 231 659 270" />
            <circle cx="520" cy="112" r="6" />
            <circle cx="574" cy="87" r="8" />
            <circle cx="623" cy="119" r="6" />
            <circle cx="651" cy="178" r="8" />
            <circle cx="604" cy="231" r="6" />
            <circle cx="548" cy="202" r="7" />
            <circle cx="659" cy="270" r="5" />
          </g>

          <g className="hero-tehran-network hero-tehran-network--south">
            <path d="M114 319 171 363 238 342 307 374 367 343" />
            <path d="M171 363 205 294 238 342 307 306 367 343" />
            <path d="M238 342 307 374 413 367" />
            <circle cx="114" cy="319" r="6" />
            <circle cx="171" cy="363" r="9" />
            <circle cx="205" cy="294" r="6" />
            <circle cx="238" cy="342" r="7" />
            <circle cx="307" cy="306" r="6" />
            <circle cx="307" cy="374" r="8" />
            <circle cx="367" cy="343" r="6" />
            <circle cx="413" cy="367" r="5" />
          </g>

          <g className="hero-tehran-sparks" aria-hidden="true">
            <path d="M132 166h44M154 144v44" />
            <path d="M470 95h54M497 68v54" />
            <path d="M602 309h48M626 285v48" />
            <path d="M92 237h34M109 220v34" />
          </g>
        </svg>
      </div>
    </div>
  );
}
