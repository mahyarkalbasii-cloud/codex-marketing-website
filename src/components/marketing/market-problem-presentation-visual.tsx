"use client";

/*
 * Presentation visual reveal:
 * waiting -> revealed. The three-layer intelligence-report composition reveals
 * once on scroll using IntersectionObserver; reduced-motion users receive the
 * completed static state immediately.
 */

import {
  AlertTriangle,
  Clock3,
  RefreshCcw,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties } from "react";

import { cn } from "@/lib/utils";

type MarkType = "dot" | "circle" | "halo" | "x" | "square" | "plus";
type MarkTone = "muted" | "dark" | "accent";

type DataMark = {
  id: string;
  delay: number;
  mobile: boolean;
  opacity: number;
  tone: MarkTone;
  type: MarkType;
  x: number;
  y: number;
};

type Connection = {
  id: string;
  mobile: boolean;
  x1: number;
  x2: number;
  y1: number;
  y2: number;
};

type ReportRow = {
  Icon: LucideIcon;
  project: string;
  status: string;
};

type RevealStyle = CSSProperties & {
  "--mpv-delay"?: string;
  "--mpv-opacity"?: string;
};

const dataMarks: DataMark[] = [
  { id: "m1", type: "dot", x: 42, y: 38, tone: "muted", opacity: 0.48, delay: 210, mobile: true },
  { id: "m2", type: "circle", x: 72, y: 55, tone: "muted", opacity: 0.58, delay: 360, mobile: true },
  { id: "m3", type: "plus", x: 104, y: 30, tone: "dark", opacity: 0.52, delay: 270, mobile: true },
  { id: "m4", type: "square", x: 126, y: 78, tone: "muted", opacity: 0.5, delay: 470, mobile: true },
  { id: "m5", type: "dot", x: 156, y: 50, tone: "muted", opacity: 0.72, delay: 310, mobile: true },
  { id: "m6", type: "x", x: 184, y: 96, tone: "muted", opacity: 0.55, delay: 520, mobile: true },
  { id: "m7", type: "circle", x: 208, y: 36, tone: "muted", opacity: 0.45, delay: 600, mobile: true },
  { id: "m8", type: "halo", x: 238, y: 66, tone: "accent", opacity: 0.86, delay: 390, mobile: true },
  { id: "m9", type: "plus", x: 264, y: 114, tone: "muted", opacity: 0.56, delay: 700, mobile: true },
  { id: "m10", type: "dot", x: 292, y: 28, tone: "muted", opacity: 0.5, delay: 430, mobile: true },
  { id: "m11", type: "square", x: 316, y: 72, tone: "dark", opacity: 0.62, delay: 760, mobile: true },
  { id: "m12", type: "circle", x: 344, y: 110, tone: "muted", opacity: 0.48, delay: 250, mobile: true },
  { id: "m13", type: "dot", x: 366, y: 44, tone: "muted", opacity: 0.68, delay: 650, mobile: true },
  { id: "m14", type: "x", x: 394, y: 86, tone: "muted", opacity: 0.48, delay: 330, mobile: true },
  { id: "m15", type: "halo", x: 424, y: 52, tone: "muted", opacity: 0.6, delay: 720, mobile: true },
  { id: "m16", type: "plus", x: 452, y: 120, tone: "muted", opacity: 0.5, delay: 560, mobile: true },
  { id: "m17", type: "dot", x: 478, y: 82, tone: "dark", opacity: 0.7, delay: 800, mobile: true },
  { id: "m18", type: "circle", x: 504, y: 34, tone: "muted", opacity: 0.46, delay: 240, mobile: true },
  { id: "m19", type: "square", x: 532, y: 96, tone: "muted", opacity: 0.52, delay: 680, mobile: true },
  { id: "m20", type: "halo", x: 560, y: 62, tone: "accent", opacity: 0.84, delay: 500, mobile: true },
  { id: "m21", type: "x", x: 590, y: 118, tone: "muted", opacity: 0.46, delay: 780, mobile: true },
  { id: "m22", type: "dot", x: 618, y: 44, tone: "muted", opacity: 0.58, delay: 620, mobile: true },
  { id: "m23", type: "plus", x: 68, y: 126, tone: "muted", opacity: 0.42, delay: 820, mobile: true },
  { id: "m24", type: "circle", x: 108, y: 142, tone: "muted", opacity: 0.46, delay: 540, mobile: true },
  { id: "m25", type: "halo", x: 146, y: 116, tone: "dark", opacity: 0.56, delay: 860, mobile: true },
  { id: "m26", type: "dot", x: 222, y: 132, tone: "muted", opacity: 0.48, delay: 460, mobile: true },
  { id: "m27", type: "square", x: 382, y: 132, tone: "muted", opacity: 0.5, delay: 840, mobile: true },
  { id: "m28", type: "dot", x: 438, y: 140, tone: "muted", opacity: 0.44, delay: 290, mobile: true },
  { id: "m29", type: "circle", x: 640, y: 92, tone: "muted", opacity: 0.48, delay: 730, mobile: true },
  { id: "m30", type: "halo", x: 632, y: 136, tone: "accent", opacity: 0.82, delay: 900, mobile: true },
  { id: "m31", type: "dot", x: 24, y: 92, tone: "muted", opacity: 0.38, delay: 440, mobile: false },
  { id: "m32", type: "square", x: 86, y: 20, tone: "muted", opacity: 0.44, delay: 640, mobile: false },
  { id: "m33", type: "x", x: 172, y: 22, tone: "muted", opacity: 0.4, delay: 750, mobile: false },
  { id: "m34", type: "dot", x: 252, y: 18, tone: "dark", opacity: 0.54, delay: 570, mobile: false },
  { id: "m35", type: "circle", x: 332, y: 28, tone: "muted", opacity: 0.42, delay: 880, mobile: false },
  { id: "m36", type: "plus", x: 418, y: 18, tone: "muted", opacity: 0.44, delay: 660, mobile: false },
  { id: "m37", type: "dot", x: 488, y: 16, tone: "muted", opacity: 0.42, delay: 370, mobile: false },
  { id: "m38", type: "square", x: 582, y: 22, tone: "muted", opacity: 0.42, delay: 790, mobile: false },
  { id: "m39", type: "dot", x: 652, y: 26, tone: "muted", opacity: 0.36, delay: 930, mobile: false },
  { id: "m40", type: "plus", x: 42, y: 154, tone: "muted", opacity: 0.36, delay: 610, mobile: false },
  { id: "m41", type: "x", x: 188, y: 154, tone: "dark", opacity: 0.5, delay: 940, mobile: false },
  { id: "m42", type: "circle", x: 302, y: 150, tone: "muted", opacity: 0.38, delay: 850, mobile: false },
  { id: "m43", type: "dot", x: 516, y: 150, tone: "muted", opacity: 0.4, delay: 690, mobile: false },
  { id: "m44", type: "square", x: 604, y: 154, tone: "muted", opacity: 0.4, delay: 990, mobile: false },
  { id: "m45", type: "x", x: 660, y: 110, tone: "muted", opacity: 0.38, delay: 550, mobile: false },
  { id: "m46", type: "dot", x: 642, y: 64, tone: "dark", opacity: 0.52, delay: 710, mobile: false },
];

const connections: Connection[] = [
  { id: "c1", x1: 72, y1: 55, x2: 126, y2: 78, mobile: true },
  { id: "c2", x1: 156, y1: 50, x2: 238, y2: 66, mobile: true },
  { id: "c3", x1: 238, y1: 66, x2: 316, y2: 72, mobile: true },
  { id: "c4", x1: 316, y1: 72, x2: 394, y2: 86, mobile: true },
  { id: "c5", x1: 424, y1: 52, x2: 478, y2: 82, mobile: true },
  { id: "c6", x1: 504, y1: 34, x2: 560, y2: 62, mobile: true },
  { id: "c7", x1: 560, y1: 62, x2: 618, y2: 44, mobile: true },
  { id: "c8", x1: 108, y1: 142, x2: 146, y2: 116, mobile: true },
  { id: "c9", x1: 222, y1: 132, x2: 264, y2: 114, mobile: true },
  { id: "c10", x1: 344, y1: 110, x2: 382, y2: 132, mobile: true },
  { id: "c11", x1: 532, y1: 96, x2: 590, y2: 118, mobile: true },
  { id: "c12", x1: 590, y1: 118, x2: 632, y2: 136, mobile: true },
  { id: "c13", x1: 86, y1: 20, x2: 172, y2: 22, mobile: false },
  { id: "c14", x1: 418, y1: 18, x2: 488, y2: 16, mobile: false },
  { id: "c15", x1: 604, y1: 154, x2: 660, y2: 110, mobile: false },
];

const reportRows: ReportRow[] = [
  { project: "پروژه A", status: "اطلاعات ناقص", Icon: AlertTriangle },
  { project: "پروژه B", status: "زمان تماس نامشخص", Icon: Clock3 },
  { project: "پروژه C", status: "به‌روزرسانی نشده", Icon: RefreshCcw },
];

const axisTicks = ["right-[18%]", "right-[30%]", "right-[42%]", "right-[58%]", "right-[70%]", "right-[82%]"] as const;

function usePrefersReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return reducedMotion;
}

function toneClass(tone: MarkTone) {
  if (tone === "accent") {
    return "text-[#CC785C]";
  }

  if (tone === "dark") {
    return "text-foreground";
  }

  return "text-muted-foreground";
}

function DataMarkShape({ mark }: { mark: DataMark }) {
  const commonProps = {
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.35,
  };

  if (mark.type === "dot") {
    return <circle cx={mark.x} cy={mark.y} r="3.5" fill="currentColor" />;
  }

  if (mark.type === "circle") {
    return <circle cx={mark.x} cy={mark.y} r="6" fill="none" {...commonProps} />;
  }

  if (mark.type === "halo") {
    return (
      <>
        <circle className="mpv-halo-ring" cx={mark.x} cy={mark.y} r="13" fill="none" {...commonProps} strokeWidth="1" />
        <circle cx={mark.x} cy={mark.y} r="8.5" fill="none" {...commonProps} />
      </>
    );
  }

  if (mark.type === "x") {
    return (
      <>
        <line x1={mark.x - 5} x2={mark.x + 5} y1={mark.y - 5} y2={mark.y + 5} {...commonProps} />
        <line x1={mark.x + 5} x2={mark.x - 5} y1={mark.y - 5} y2={mark.y + 5} {...commonProps} />
      </>
    );
  }

  if (mark.type === "square") {
    return <rect x={mark.x - 4} y={mark.y - 4} width="8" height="8" rx="1.5" fill="none" {...commonProps} />;
  }

  return (
    <>
      <line x1={mark.x - 4} x2={mark.x + 4} y1={mark.y} y2={mark.y} {...commonProps} />
      <line x1={mark.x} x2={mark.x} y1={mark.y - 4} y2={mark.y + 4} {...commonProps} />
    </>
  );
}

function ReportTableRow({ Icon, index, project, status }: ReportRow & { index: number }) {
  return (
    <div
      className="mpv-report-row grid grid-cols-[4.25rem_1.5rem_minmax(5.25rem,1fr)_2.4rem_1.15rem_auto] items-center gap-2 px-1 py-2 text-right md:grid-cols-[4.9rem_1.75rem_minmax(7.5rem,1fr)_3.2rem_1.4rem_auto] md:gap-3"
      style={{ "--mpv-delay": `${1080 + index * 150}ms` } as RevealStyle}
    >
      <span className="text-xs font-bold text-foreground md:text-sm">{project}</span>
      <span className="grid h-6 w-6 place-items-center text-muted-foreground">
        <Icon className="h-4 w-4 md:h-[18px] md:w-[18px]" />
      </span>
      <span className="truncate text-[11px] font-semibold text-muted-foreground md:text-xs">
        {status}
      </span>
      <span className="grid h-7 place-items-center rounded-full border border-border bg-transparent text-xs font-semibold text-muted-foreground">
        —
      </span>
      <span className="text-center text-xs font-semibold text-muted-foreground">—</span>
      <span className="text-left text-xs font-bold tracking-[0.08em] text-muted-foreground/75">
        ...
      </span>
    </div>
  );
}

export function MarketProblemPresentationVisual() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const node = rootRef.current;

    if (!node || reducedMotion) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.36 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <div
      ref={rootRef}
      data-revealed={revealed ? "true" : "false"}
      className="market-problem-presentation-visual overflow-hidden border-b border-border bg-card/70 px-4 py-5 md:px-6"
      aria-label="نمای انتزاعی از پراکندگی داده، اطلاعات ناقص و زمان نامشخص تماس"
    >
      <section className="relative overflow-hidden rounded-2xl border border-border/70 bg-background/45 p-3 md:p-4" aria-label="داده‌های پراکنده و ناقص">
        <div className="mpv-grid absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
        <svg
          className="relative z-10 aspect-[4/1] w-full overflow-visible"
          viewBox="0 0 680 170"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <g fill="none">
            {connections.map((connection, index) => (
              <line
                key={connection.id}
                className="mpv-line text-muted-foreground"
                data-mobile={connection.mobile ? "true" : "false"}
                pathLength="1"
                stroke="currentColor"
                strokeDasharray="0.025 0.055"
                strokeLinecap="round"
                strokeWidth="1"
                x1={connection.x1}
                x2={connection.x2}
                y1={connection.y1}
                y2={connection.y2}
                style={
                  {
                    "--mpv-delay": `${840 + index * 28}ms`,
                    "--mpv-opacity": "0.34",
                  } as RevealStyle
                }
              />
            ))}
          </g>

          {dataMarks.map((mark) => (
            <g
              key={mark.id}
              className={cn("mpv-mark", toneClass(mark.tone))}
              data-mobile={mark.mobile ? "true" : "false"}
              style={
                {
                  "--mpv-delay": `${mark.delay}ms`,
                  "--mpv-opacity": `${mark.opacity}`,
                } as RevealStyle
              }
            >
              <DataMarkShape mark={mark} />
            </g>
          ))}
        </svg>
      </section>

      <section className="mt-4 divide-y divide-border/70 border-y border-border/70" aria-label="گزارش پروژه‌های دارای داده پوشانده‌شده">
        {reportRows.map((row, index) => (
          <ReportTableRow key={row.project} index={index} {...row} />
        ))}
      </section>

      <section className="mpv-axis-layer mt-4 px-2 pb-1 pt-2" aria-label="محور زمان تماس">
        <div className="relative h-14">
          <div className="mpv-axis-line absolute left-2 right-2 top-5 h-px bg-muted-foreground/35" />
          {axisTicks.map((tick, index) => (
            <span
              key={tick}
              className={cn("mpv-axis-tick absolute top-[1.05rem] h-2 w-px bg-muted-foreground/25", tick)}
              style={{ "--mpv-delay": `${1590 + index * 35}ms` } as RevealStyle}
              aria-hidden="true"
            />
          ))}

          <span className="mpv-axis-point absolute right-2 top-[0.82rem] h-2.5 w-2.5 rounded-full border border-border bg-card" />
          <span className="mpv-axis-label absolute right-0 top-8 text-[11px] font-semibold text-muted-foreground">
            زود
          </span>

          <span className="mpv-axis-center-point absolute right-1/2 top-[0.76rem] h-3 w-3 translate-x-1/2 rounded-full bg-[#CC785C]" />
          <span className="mpv-axis-pill absolute right-1/2 top-8 translate-x-1/2 rounded-full bg-[#CC785C] px-3 py-1 text-[11px] font-bold text-white shadow-sm shadow-primary/[0.08]">
            زمان مناسب
          </span>

          <span className="mpv-axis-point absolute left-2 top-[0.82rem] h-2.5 w-2.5 rounded-full border border-border bg-card" />
          <span className="mpv-axis-label absolute left-0 top-8 text-[11px] font-semibold text-muted-foreground">
            دیر
          </span>
        </div>
      </section>
    </div>
  );
}
