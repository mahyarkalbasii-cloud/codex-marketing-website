import type { CSSProperties } from "react";

const grainDrift = [-1.6, 0.8, -0.4, 1.7, -1.1, 0.3, 1.2, -0.9, 0.5, -1.4];

const fallingGrains = Array.from({ length: grainDrift.length }, (_, index) => ({
  delay: `${index * 0.82 - 6.4}s`,
  endX: `${grainDrift[index]}px`,
}));

const orbitGrains = [
  { cx: 104, cy: 124, r: 1.55, opacity: 0.48 },
  { cx: 122, cy: 139, r: 1.25, opacity: 0.36 },
  { cx: 151, cy: 135, r: 1.45, opacity: 0.4 },
  { cx: 107, cy: 279, r: 1.45, opacity: 0.38 },
  { cx: 128, cy: 263, r: 1.75, opacity: 0.5 },
  { cx: 151, cy: 276, r: 1.25, opacity: 0.34 },
] as const;

export function MarketProblemPresentationVisual() {
  return (
    <div
      className="market-problem-presentation-visual problem-hourglass-card relative flex min-h-[21rem] flex-1 items-center justify-center overflow-hidden bg-[#fffaf1]/72 p-5 md:min-h-[27rem]"
      aria-label="ساعت‌شنی زمان‌بندی فروش پروژه‌های ساختمانی"
    >
      <div className="pointer-events-none absolute inset-5 rounded-[1.4rem] border border-[#eadfce]/80" />
      <div className="problem-hourglass-grid pointer-events-none absolute inset-0" />

      <div className="relative flex w-full max-w-[25rem] flex-col items-center">
        <div className="problem-hourglass-stage relative grid aspect-square w-[min(78vw,18.5rem)] place-items-center rounded-[2rem]">
          <div className="problem-hourglass-core relative h-[15.5rem] w-[11.5rem] md:h-[18rem] md:w-[13rem]">
            <svg
              className="absolute inset-0 h-full w-full overflow-visible"
              viewBox="0 0 260 360"
              role="img"
              aria-label="شن‌های روشن در یک ساعت‌شنی تیره جریان دارند"
            >
              <defs>
                <clipPath id="hourglass-top-bulb">
                  <path d="M68 52C72 92 96 117 130 154C164 117 188 92 192 52Z" />
                </clipPath>
                <clipPath id="hourglass-bottom-bulb">
                  <path d="M130 206C96 243 72 268 68 308H192C188 268 164 243 130 206Z" />
                </clipPath>
                <linearGradient id="hourglass-ink" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#22201D" />
                  <stop offset="1" stopColor="#11110F" />
                </linearGradient>
                <linearGradient id="hourglass-sand" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#FFF8EA" />
                  <stop offset="1" stopColor="#EADCC6" />
                </linearGradient>
              </defs>

              <path
                d="M74 42H186C196 42 204 50 204 60C204 105 176 132 142 171C137 177 137 183 142 189C176 228 204 255 204 300C204 310 196 318 186 318H74C64 318 56 310 56 300C56 255 84 228 118 189C123 183 123 177 118 171C84 132 56 105 56 60C56 50 64 42 74 42Z"
                fill="url(#hourglass-ink)"
              />
              <path
                d="M78 57H182C181 89 160 115 130 149C100 115 79 89 78 57Z"
                fill="#0F0F0D"
              />
              <path
                d="M130 211C160 245 181 271 182 303H78C79 271 100 245 130 211Z"
                fill="#0F0F0D"
              />

              <g className="problem-hourglass-sand-layer">
                <g clipPath="url(#hourglass-top-bulb)">
                  <path
                    className="problem-hourglass-top-sand"
                    d="M69 102C94 90 113 94 130 111C147 94 166 90 191 102V154H69Z"
                    fill="url(#hourglass-sand)"
                  />
                </g>
                <g clipPath="url(#hourglass-bottom-bulb)">
                  <path
                    className="problem-hourglass-bottom-sand"
                    d="M72 310C88 268 111 248 130 248C149 248 172 268 188 310Z"
                    fill="url(#hourglass-sand)"
                  />
                </g>

                <path
                  className="problem-hourglass-stream"
                  d="M130 155V236"
                  stroke="#F8F2E7"
                  strokeLinecap="round"
                  strokeOpacity="0.68"
                  strokeWidth="2.4"
                />

                {orbitGrains.map((grain) => (
                  <circle
                    key={`${grain.cx}-${grain.cy}`}
                    cx={grain.cx}
                    cy={grain.cy}
                    r={grain.r}
                    fill="#F8F2E7"
                    opacity={grain.opacity}
                  />
                ))}
              </g>

              <path
                d="M78 57H182M78 303H182"
                stroke="#F8F2E7"
                strokeLinecap="round"
                strokeOpacity="0.22"
                strokeWidth="2"
              />
              <path
                d="M68 52C72 92 96 117 130 154C164 117 188 92 192 52M68 308C72 268 96 243 130 206C164 243 188 268 192 308"
                fill="none"
                stroke="#F8F2E7"
                strokeOpacity="0.18"
                strokeWidth="2"
              />
            </svg>

            <div className="problem-hourglass-grains-layer absolute inset-0">
              <div className="problem-hourglass-grains absolute left-1/2 top-[42%] h-[7.5rem] w-8 -translate-x-1/2">
                {fallingGrains.map((grain, index) => (
                  <span
                    key={index}
                    style={
                      {
                        "--grain-delay": grain.delay,
                        "--grain-end-x": grain.endX,
                      } as CSSProperties
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 flex items-center gap-3 rounded-full border border-[#eadfce] bg-[#fbf6ed]/72 px-4 py-2 text-xs font-black tracking-[0.14em] text-[#2a241d] shadow-sm shadow-[#2a241d]/[0.025] md:text-sm">
          <span className="problem-hourglass-percent" aria-hidden="true" />
          <span>فرصت تماس در حال تغییر است</span>
        </div>
      </div>
    </div>
  );
}
