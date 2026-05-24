"use client";

/*
 * Hero map loop state machine:
 * idle -> loading -> filtering -> selecting -> showing-card -> resetting -> loading.
 * The loop runs only while the hero visual is in view and the tab is visible. Desktop/tablet
 * get the full cycling filter, selected pin, project card, parallax and live counter. Mobile
 * keeps the same safe mock map with one-time pin entry only. Framer Motion was not present in
 * this project, so the orchestration uses React state plus CSS/Web Animations-friendly classes.
 */

import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties, type PointerEvent } from "react";

import { cn } from "@/lib/utils";

import { defaultSelectedPinId, filterStages, heroProjectPins, type HeroProjectPin } from "./data";
import { heroLoop, type HeroLoopMode } from "./animations";
import { stageIcons } from "./icons";

type HeroMapVisualProps = {
  compact?: boolean;
};

type PinStyle = CSSProperties & {
  "--pin-x": string;
  "--pin-y": string;
  "--pin-delay": string;
};

type CardStyle = CSSProperties & {
  "--card-x"?: string;
  "--card-y": string;
};

const persianDigits = new Intl.NumberFormat("fa-IR", {
  useGrouping: false,
});

function useMediaState(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const update = () => setMatches(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => mediaQuery.removeEventListener("change", update);
  }, [query]);

  return matches;
}

function getFilterIndex(stage: HeroProjectPin["stage"]) {
  return Math.max(0, filterStages.indexOf(stage));
}

function getStagePinClass(stage: HeroProjectPin["stage"]) {
  if (stage === "اسکلت") {
    return "bg-ring text-primary-foreground";
  }

  if (stage === "نازک‌کاری") {
    return "bg-amber-300 text-foreground";
  }

  return "bg-primary text-primary-foreground";
}

function HeroMapArtwork() {
  return (
    <svg
      className="absolute inset-0 h-full w-full text-border"
      viewBox="0 0 640 640"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <rect x="0" y="0" width="640" height="640" className="hero-map-land" rx="28" />
      <rect x="62" y="70" width="164" height="132" rx="28" className="hero-map-block-a" />
      <rect x="274" y="56" width="196" height="118" rx="30" className="hero-map-block-b" />
      <rect x="488" y="102" width="104" height="168" rx="28" className="hero-map-block-c" />
      <rect x="82" y="316" width="148" height="168" rx="28" className="hero-map-block-b" />
      <rect x="294" y="286" width="150" height="206" rx="30" className="hero-map-block-a" />
      <rect x="472" y="374" width="116" height="144" rx="28" className="hero-map-block-c" />

      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path className="hero-map-street-main" d="M46 154 H598" />
        <path className="hero-map-street-main" d="M52 322 H592" />
        <path className="hero-map-street-main" d="M122 46 V594" />
        <path className="hero-map-street-main" d="M338 38 V600" />
        <path className="hero-map-street" d="M54 88 H586" />
        <path className="hero-map-street" d="M58 222 H596" />
        <path className="hero-map-street" d="M42 406 H604" />
        <path className="hero-map-street" d="M70 512 H576" />
        <path className="hero-map-street" d="M214 48 V584" />
        <path className="hero-map-street" d="M432 58 V594" />
        <path className="hero-map-street" d="M528 72 V570" />
        <path className="hero-map-street" d="M78 578 L580 246" />
        <path className="hero-map-street" d="M88 274 L558 84" />
        <path className="hero-map-street" d="M168 604 L584 448" />
        <path className="hero-map-street-soft" d="M254 88 V260 H438" />
        <path className="hero-map-street-soft" d="M92 456 H268 V574" />
        <path className="hero-map-street-soft" d="M396 216 H560 V354" />
      </g>
    </svg>
  );
}

function ProjectPin({
  active,
  animate,
  dimmed,
  index,
  onClick,
  pin,
  selected,
}: {
  active: boolean;
  animate: boolean;
  dimmed: boolean;
  index: number;
  onClick: (pin: HeroProjectPin) => void;
  pin: HeroProjectPin;
  selected: boolean;
}) {
  const StageIcon = stageIcons[pin.stage];
  const alignRight = pin.x > 68;
  const alignLeft = pin.x < 24;
  const style: PinStyle = {
    "--pin-x": `${pin.x}%`,
    "--pin-y": `${pin.y}%`,
    "--pin-delay": `${index * heroLoop.pinStagger}ms`,
  };

  return (
    <button
      type="button"
      data-hero-pin
      data-animate={animate ? "true" : "false"}
      data-selected={selected ? "true" : "false"}
      style={style}
      onClick={(event) => {
        event.stopPropagation();
        onClick(pin);
      }}
      aria-label={`${pin.area}، مرحله ${pin.stage}، ${pin.floors}`}
      className={cn(
        "hero-map-pin group absolute z-20 grid h-6 w-6 place-items-center rounded-full border-2 border-card shadow-md shadow-primary/[0.12] transition duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/45 lg:h-7 lg:w-7",
        getStagePinClass(pin.stage),
        active && "hero-map-pin-active",
        dimmed && "opacity-30 grayscale",
        selected && "hero-map-pin-selected",
      )}
    >
      <span className="hero-map-pin-ring" aria-hidden="true" />
      <StageIcon className="relative h-3.5 w-3.5 lg:h-4 lg:w-4" />
      <span
        className={cn(
          "pointer-events-none absolute bottom-[calc(100%+0.55rem)] z-30 min-w-32 rounded-xl border border-border bg-card px-3 py-2 text-right text-[11px] font-semibold leading-5 text-foreground opacity-0 shadow-lg shadow-primary/[0.08] transition duration-200 group-hover:-translate-y-1 group-hover:opacity-100 group-focus-visible:-translate-y-1 group-focus-visible:opacity-100",
          alignRight ? "left-0" : alignLeft ? "right-0" : "left-1/2 -translate-x-1/2 group-hover:-translate-x-1/2",
        )}
      >
        {pin.area}
        <span className="mt-0.5 block text-muted-foreground">{pin.stage}</span>
      </span>
    </button>
  );
}

function ProjectCard({ pin }: { pin: HeroProjectPin }) {
  const edgeAware = pin.x > 54;
  const cardStyle: CardStyle = {
    "--card-y": `${Math.min(Math.max(pin.y - 15, 12), 62)}%`,
    ...(edgeAware
      ? { right: `${Math.max(4, 100 - pin.x + 6)}%` }
      : { "--card-x": `${Math.min(pin.x + 6, 54)}%` }),
  };

  return (
    <div
      data-project-card
      style={cardStyle}
      className={cn(
        "hero-project-card absolute z-30 w-[12.5rem] max-w-[calc(100%-2rem)] rounded-[1.1rem] border border-border bg-card/95 p-3 text-right shadow-xl shadow-primary/[0.10] backdrop-blur",
        edgeAware ? "left-auto" : "left-[var(--card-x)]",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-semibold text-muted-foreground">
          پروژه نمونه
        </span>
        <span className="mt-1 h-2 w-2 rounded-full bg-amber-300 shadow-sm shadow-amber-300/50" />
      </div>
      <div className="mt-2.5 text-sm font-bold text-foreground">{pin.area}</div>
      <div className="mt-2.5 grid grid-cols-2 gap-2 text-[10px] leading-5 text-muted-foreground">
        <div className="rounded-xl border border-border bg-background/70 p-2">
          <span className="block text-foreground">مرحله</span>
          {pin.stage}
        </div>
        <div className="rounded-xl border border-border bg-background/70 p-2">
          <span className="block text-foreground">ارتفاع</span>
          {pin.floors}
        </div>
      </div>
      <div className="mt-2.5 rounded-xl border border-border bg-secondary/70 px-3 py-2 text-[10px] font-semibold text-foreground">
        آخرین بروزرسانی: ۲ روز پیش
      </div>
    </div>
  );
}

export function HeroMapVisual({ compact = false }: HeroMapVisualProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<HeroLoopMode>("idle");
  const [filterIndex, setFilterIndex] = useState(0);
  const [selectedPinId, setSelectedPinId] = useState<string | null>(null);
  const [counter, setCounter] = useState(0);
  const [loopSerial, setLoopSerial] = useState(0);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [manualPaused, setManualPaused] = useState(false);
  const isMobile = useMediaState("(max-width: 767px)");
  const prefersReducedMotion = useMediaState("(prefers-reduced-motion: reduce)");
  const activeFilter = filterStages[filterIndex] ?? filterStages[0];
  const selectedPin = useMemo(
    () => heroProjectPins.find((pin) => pin.id === selectedPinId) ?? null,
    [selectedPinId],
  );
  const shouldRunLoop = inView && pageVisible && !isMobile && !prefersReducedMotion && !manualPaused;

  useEffect(() => {
    const node = rootRef.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateVisibility = () => setPageVisible(document.visibilityState === "visible");

    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);

    return () => document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  useEffect(() => {
    if (!isMobile && !prefersReducedMotion) {
      return;
    }

    setMode("idle");
    setFilterIndex(0);
    setSelectedPinId(null);
    setCounter(3);
    setManualPaused(false);
  }, [isMobile, prefersReducedMotion]);

  useEffect(() => {
    if (!shouldRunLoop) {
      return;
    }

    const timers: number[] = [];

    const schedule = (callback: () => void, delay: number) => {
      timers.push(window.setTimeout(callback, delay));
    };

    const runLoop = () => {
      setLoopSerial((current) => current + 1);
      setMode("loading");
      setFilterIndex(0);
      setSelectedPinId(null);
      setCounter(0);

      schedule(() => setCounter(1), 140);
      schedule(() => setCounter(2), 280);
      schedule(() => setCounter(3), 420);
      schedule(() => setMode("filtering"), 700);
      schedule(() => setFilterIndex(1), heroLoop.filterStep);
      schedule(() => {
        setMode("selecting");
        setSelectedPinId(defaultSelectedPinId);
      }, heroLoop.selectAt);
      schedule(() => setMode("showing-card"), heroLoop.selectAt + 420);
      schedule(() => setFilterIndex(2), heroLoop.filterStep * 2);
      schedule(() => {
        setSelectedPinId(null);
        setMode("filtering");
      }, heroLoop.cardHideAt);
      schedule(() => setFilterIndex(3), heroLoop.filterStep * 3);
      schedule(() => setMode("resetting"), heroLoop.resetAt);
    };

    runLoop();
    const interval = window.setInterval(runLoop, heroLoop.duration);

    return () => {
      window.clearInterval(interval);
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [shouldRunLoop]);

  useEffect(() => {
    if (!manualPaused) {
      return;
    }

    const resumeOnOutsideClick = (event: globalThis.PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setManualPaused(false);
        setSelectedPinId(null);
        setFilterIndex(0);
        setMode("filtering");
      }
    };

    document.addEventListener("pointerdown", resumeOnOutsideClick);

    return () => document.removeEventListener("pointerdown", resumeOnOutsideClick);
  }, [manualPaused]);

  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (isMobile || prefersReducedMotion || !parallaxRef.current) {
        return;
      }

      const rect = event.currentTarget.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 8;

      parallaxRef.current.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
    },
    [isMobile, prefersReducedMotion],
  );

  const handlePointerLeave = useCallback(() => {
    if (parallaxRef.current) {
      parallaxRef.current.style.transform = "translate3d(0, 0, 0)";
    }
  }, []);

  const handleVisualPointerDown = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (!manualPaused) {
        return;
      }

      const target = event.target as HTMLElement;

      if (target.closest("[data-hero-pin], [data-project-card]")) {
        return;
      }

      setManualPaused(false);
      setSelectedPinId(null);
      setFilterIndex(0);
      setMode("filtering");
    },
    [manualPaused],
  );

  const handlePinClick = useCallback((pin: HeroProjectPin) => {
    setManualPaused(true);
    setMode("showing-card");
    setFilterIndex(getFilterIndex(pin.stage));
    setSelectedPinId(pin.id);
    setCounter(3);
  }, []);

  return (
    <div
      ref={rootRef}
      dir="rtl"
      aria-label="نقشه تعاملی نمونه پرشین‌سازه برای کشف پروژه‌های ساختمانی فعال"
      className={cn(
        "hero-map-visual product-theater relative isolate w-full overflow-hidden rounded-[1.6rem] border border-border bg-card/80 shadow-xl shadow-primary/[0.07] backdrop-blur",
        compact ? "aspect-[4/3] p-3" : "aspect-square max-h-[540px] p-4 lg:p-5",
      )}
      data-mode={mode}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handleVisualPointerDown}
    >
      <div className="absolute inset-0 bg-grid product-grid opacity-60" aria-hidden="true" />

      <div
        ref={parallaxRef}
        className="relative h-full transition-transform duration-300 ease-out will-change-transform"
      >
        <div className="absolute inset-0 overflow-hidden rounded-[1.35rem] border border-border bg-secondary/58">
          <div className="absolute inset-0 bg-grid product-grid opacity-45" aria-hidden="true" />
          <HeroMapArtwork />
        </div>

        <div className="absolute right-3 top-3 z-30 flex items-center gap-1.5 rounded-full border border-border bg-card/92 px-2.5 py-1.5 text-[10px] font-bold text-foreground shadow-sm shadow-primary/[0.04] backdrop-blur lg:right-4 lg:top-4">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-300 hero-live-dot" aria-hidden="true" />
          <span>{persianDigits.format(counter || 3)} فرصت مناسب امروز</span>
        </div>

        <div className="absolute bottom-3 right-3 z-30 overflow-hidden rounded-full border border-border bg-card/88 px-2.5 py-1.5 text-[10px] font-semibold text-muted-foreground shadow-sm shadow-primary/[0.04] backdrop-blur lg:bottom-4 lg:right-4">
          <span key={activeFilter} className="hero-filter-text block">
            {activeFilter}
          </span>
        </div>

        <div key={loopSerial} className="absolute inset-0 z-20">
          {heroProjectPins.map((pin, index) => {
            const matches = activeFilter === filterStages[0] || pin.stage === activeFilter;
            const selected = pin.id === selectedPinId;

            return (
              <ProjectPin
                key={pin.id}
                active={matches}
                animate={!prefersReducedMotion}
                dimmed={!matches}
                index={index}
                onClick={handlePinClick}
                pin={pin}
                selected={selected}
              />
            );
          })}
        </div>

        {selectedPin && !isMobile ? <ProjectCard pin={selectedPin} /> : null}

      </div>
    </div>
  );
}
