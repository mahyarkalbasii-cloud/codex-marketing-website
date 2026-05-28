import type { CSSProperties } from "react";

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
      left: `${50 + Math.cos(angle) * band.radiusX}%`,
      opacity: (0.52 + opacityStep * 0.075).toFixed(2),
      size: `${2.15 + sizeStep * 0.52}px`,
      top: `${50 + Math.sin(angle) * band.radiusY}%`,
    };
  }),
}));

export function MarketProblemPresentationVisual() {
  return (
    <div
      className="market-problem-presentation-visual problem-orb-card relative flex min-h-[21rem] flex-1 items-center justify-center overflow-hidden bg-[#fffaf1]/72 p-5 md:min-h-[27rem]"
      aria-label="مدار ذرات رنگی برای نمایش حرکت داده‌های فروش پروژه‌های ساختمانی"
    >
      <div className="pointer-events-none absolute inset-5 rounded-[1.4rem] border border-[#eadfce]/80" />
      <div className="problem-orb-grid pointer-events-none absolute inset-0" />

      <div className="relative flex w-full max-w-[34rem] flex-col items-center">
        <div className="problem-orb-stage relative grid aspect-square w-[min(82vw,29rem)] place-items-center rounded-[2rem]">
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

        <div className="mt-2 flex items-center gap-3 rounded-full border border-[#eadfce] bg-[#fbf6ed]/72 px-4 py-2 text-xs font-black tracking-[0.08em] text-[#2a241d] shadow-sm shadow-[#2a241d]/[0.025] md:text-sm">
          <span className="problem-orb-status-dot" aria-hidden="true">
            <span />
          </span>
          <span>داده‌ها دور فرصت زنده می‌چرخند</span>
        </div>
      </div>
    </div>
  );
}
