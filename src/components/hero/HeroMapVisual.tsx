"use client";

/*
 * Hero map loop state machine:
 * idle -> loading -> filtering -> selecting -> showing-card -> resetting -> loading.
 * The loop runs only while the hero visual is in view and the tab is visible. Desktop/tablet
 * get the full cycling filter, selected pin, project card, parallax and live counter. Mobile
 * keeps the card closed and runs a lighter beacon cycle across the map pins. Framer Motion was not present in
 * this project, so the orchestration uses React state plus CSS/Web Animations-friendly classes.
 */

import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { Building } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";

import {
  defaultSelectedPinId,
  filterStages,
  heroProjectPins,
  type ConstructionStage,
  type FilterStage,
  type HeroProjectPin,
} from "./data";
import { heroLoop, type HeroLoopMode } from "./animations";

type HeroMapVisualProps = {
  compact?: boolean;
  locale?: Locale;
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

const numberFormatters = {
  fa: new Intl.NumberFormat("fa-IR", {
    useGrouping: false,
  }),
  en: new Intl.NumberFormat("en-US", {
    useGrouping: false,
  }),
};

const persianDigits = new Intl.NumberFormat("fa-IR", {
  useGrouping: false,
});

const heroCopy = {
  fa: {
    aria: "نقشه تعاملی نمونه پرشین‌سازه برای کشف پروژه‌های ساختمانی فعال",
    opportunity: (count: number) => `${persianDigits.format(count || 3)} فرصت مناسب امروز`,
    projectSample: "پروژه نمونه",
    stage: "مرحله",
    height: "ارتفاع",
    updated: "آخرین بروزرسانی: ۲ روز پیش",
    stagePrefix: "مرحله",
    filters: {
      "همه مراحل": "همه مراحل",
      گودبرداری: "گودبرداری",
      اسکلت: "اسکلت",
      "نازک‌کاری": "نازک‌کاری",
    } as Record<FilterStage, string>,
    areas: {
      velenjak: "ولنجک",
      zaferanieh: "زعفرانیه",
      niavaran: "نیاوران",
      aghdasieh: "اقدسیه",
      farmanieh: "فرمانیه",
      pasdaran: "پاسداران",
      jordan: "جردن",
      saadatabad: "سعادت‌آباد",
      vanak: "ونک",
      ekbatan: "اکباتان",
    } as Record<string, string>,
    floors: {
      velenjak: "۶ طبقه",
      zaferanieh: "۸ طبقه",
      niavaran: "۹ طبقه",
      aghdasieh: "۶ طبقه",
      farmanieh: "۸ طبقه",
      pasdaran: "۱۰ طبقه",
      jordan: "۶ طبقه",
      saadatabad: "۷ طبقه",
      vanak: "۴ طبقه",
      ekbatan: "۵ طبقه",
    } as Record<string, string>,
    stages: {
      گودبرداری: "گودبرداری",
      اسکلت: "اسکلت",
      "نازک‌کاری": "نازک‌کاری",
    } as Record<ConstructionStage, string>,
  },
  en: {
    aria: "Sample PersianSaze interactive map for discovering active construction projects",
    opportunity: (count: number) => `${numberFormatters.en.format(count || 3)} good-fit opportunities today`,
    projectSample: "Sample project",
    stage: "Stage",
    height: "Height",
    updated: "Last updated: 2 days ago",
    stagePrefix: "stage",
    filters: {
      "همه مراحل": "All stages",
      گودبرداری: "Excavation",
      اسکلت: "Structure",
      "نازک‌کاری": "Finishing",
    } as Record<FilterStage, string>,
    areas: {
      velenjak: "Velenjak",
      zaferanieh: "Zaferanieh",
      niavaran: "Niavaran",
      aghdasieh: "Aghdasieh",
      farmanieh: "Farmanieh",
      pasdaran: "Pasdaran",
      jordan: "Jordan",
      saadatabad: "Saadatabad",
      vanak: "Vanak",
      ekbatan: "Ekbatan",
    } as Record<string, string>,
    floors: {
      velenjak: "6 floors",
      zaferanieh: "8 floors",
      niavaran: "9 floors",
      aghdasieh: "6 floors",
      farmanieh: "8 floors",
      pasdaran: "10 floors",
      jordan: "6 floors",
      saadatabad: "7 floors",
      vanak: "4 floors",
      ekbatan: "5 floors",
    } as Record<string, string>,
    stages: {
      گودبرداری: "Excavation",
      اسکلت: "Structure",
      "نازک‌کاری": "Finishing",
    } as Record<ConstructionStage, string>,
  },
};

const mobilePinPositions: Record<string, Pick<HeroProjectPin, "x" | "y">> = {
  velenjak: { x: 18, y: 28 },
  zaferanieh: { x: 36, y: 20 },
  niavaran: { x: 64, y: 26 },
  aghdasieh: { x: 86, y: 36 },
  farmanieh: { x: 48, y: 42 },
  pasdaran: { x: 74, y: 56 },
  jordan: { x: 54, y: 66 },
  saadatabad: { x: 27, y: 57 },
  vanak: { x: 38, y: 78 },
  ekbatan: { x: 14, y: 72 },
};

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

function PinMarker({ stage }: { stage: HeroProjectPin["stage"] }) {
  if (stage === "گودبرداری") {
    return (
      <span
        className="relative h-2 w-2 rounded-full border-[1.5px] border-[#CC785C]/50 bg-[#FBF9F3]"
        aria-hidden="true"
      />
    );
  }

  if (stage === "اسکلت") {
    return (
      <span
        className="relative grid h-4 w-4 place-items-center rounded-[5px] border border-[#CC785C] bg-[#FFFAF1] text-[#CC785C]"
        aria-hidden="true"
      >
        <Building className="h-2.5 w-2.5" strokeWidth={2} />
      </span>
    );
  }

  return (
    <span
      className="relative grid h-4 w-4 place-items-center rounded-[5px] bg-[#CC785C] text-[#FFFAF1]"
      aria-hidden="true"
    >
      <Building className="h-2.5 w-2.5" strokeWidth={2} />
    </span>
  );
}

function HeroMapArtwork() {
  return (
    <svg
      className="absolute inset-0 h-full w-full text-border"
      viewBox="0 0 700 500"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <pattern id="hero-map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M40 0H0V40"
            fill="none"
            stroke="#2A241D"
            strokeOpacity="0.08"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>

      <rect x="0" y="0" width="700" height="500" className="hero-map-land" rx="28" />
      <rect x="0" y="0" width="700" height="500" fill="url(#hero-map-grid)" />

      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M38 92C86 58 124 74 169 46C209 22 250 52 292 35C340 15 384 47 427 33C482 14 522 54 566 38C614 20 652 50 682 34"
          stroke="#CC785C"
          strokeOpacity="0.15"
          strokeWidth="1.5"
        />
        <path
          d="M318 30C300 84 326 126 309 178C291 232 318 279 300 336C285 382 301 426 284 474"
          stroke="#CC785C"
          strokeOpacity="0.2"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
        <path
          d="M508 38C478 94 500 146 472 203C444 260 461 318 432 375C414 411 417 447 397 486"
          stroke="#CC785C"
          strokeOpacity="0.18"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
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
  showLabel,
  locale,
}: {
  active: boolean;
  animate: boolean;
  dimmed: boolean;
  index: number;
  onClick: (pin: HeroProjectPin) => void;
  pin: HeroProjectPin;
  selected: boolean;
  showLabel: boolean;
  locale: Locale;
}) {
  const copy = heroCopy[locale];
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
      aria-label={`${copy.areas[pin.id]}, ${copy.stagePrefix} ${copy.stages[pin.stage]}, ${copy.floors[pin.id]}`}
      className={cn(
        "hero-map-pin group absolute z-20 grid h-7 w-7 place-items-center rounded-full transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CC785C]/45",
        active && "hero-map-pin-active",
        dimmed && !selected && "opacity-35",
        selected && "hero-map-pin-selected",
      )}
    >
      <span className="hero-map-pin-ring" aria-hidden="true" />
      <PinMarker stage={pin.stage} />
      {showLabel ? (
        <span
          className="pointer-events-none absolute start-[calc(100%+6px)] top-1/2 z-20 -translate-y-1/2 whitespace-nowrap text-[11px] font-medium leading-none text-[#7A6A59]/70"
        >
          {copy.areas[pin.id]}
        </span>
      ) : null}
    </button>
  );
}

function ProjectCard({ locale, pin }: { locale: Locale; pin: HeroProjectPin }) {
  const copy = heroCopy[locale];
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
          {copy.projectSample}
        </span>
        <span className="mt-1 h-2 w-2 rounded-full bg-[#CC785C]" />
      </div>
      <div className="mt-2.5 text-sm font-bold text-foreground">{copy.areas[pin.id]}</div>
      <div className="mt-2.5 grid grid-cols-2 gap-2 text-[10px] leading-5 text-muted-foreground">
        <div className="rounded-xl border border-border bg-background/70 p-2">
          <span className="block text-foreground">{copy.stage}</span>
          {copy.stages[pin.stage]}
        </div>
        <div className="rounded-xl border border-border bg-background/70 p-2">
          <span className="block text-foreground">{copy.height}</span>
          {copy.floors[pin.id]}
        </div>
      </div>
      <div className="mt-2.5 rounded-xl border border-border bg-secondary/70 px-3 py-2 text-[10px] font-semibold text-foreground">
        {copy.updated}
      </div>
    </div>
  );
}

export function HeroMapVisual({ compact = false, locale = "fa" }: HeroMapVisualProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<HeroLoopMode>("showing-card");
  const [filterIndex, setFilterIndex] = useState(getFilterIndex("گودبرداری"));
  const [selectedPinId, setSelectedPinId] = useState<string | null>(defaultSelectedPinId);
  const [counter, setCounter] = useState(3);
  const [loopSerial, setLoopSerial] = useState(0);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [manualPaused, setManualPaused] = useState(false);
  const isMobile = useMediaState("(max-width: 767px)");
  const prefersReducedMotion = useMediaState("(prefers-reduced-motion: reduce)");
  const activeFilter = filterStages[filterIndex] ?? filterStages[0];
  const copy = heroCopy[locale];
  const projectCardsEnabled = !compact && !isMobile;
  const visiblePins = useMemo(
    () => {
      const pins = compact && !isMobile ? heroProjectPins.slice(0, 5) : heroProjectPins;

      if (!isMobile) {
        return pins;
      }

      return pins.map((pin) => ({
        ...pin,
        ...(mobilePinPositions[pin.id] ?? {}),
      }));
    },
    [compact, isMobile],
  );
  const selectedPin = useMemo(
    () => visiblePins.find((pin) => pin.id === selectedPinId) ?? null,
    [selectedPinId, visiblePins],
  );
  const shouldRunLoop = inView && pageVisible && !isMobile && !prefersReducedMotion && !manualPaused;
  const shouldRunMobileBeacon = pageVisible && isMobile && !prefersReducedMotion;

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

    if (prefersReducedMotion) {
      setMode("showing-card");
      setFilterIndex(getFilterIndex("گودبرداری"));
      setSelectedPinId(defaultSelectedPinId);
      setCounter(3);
      setManualPaused(true);
      return;
    }

    setMode("filtering");
    setFilterIndex(0);
    setSelectedPinId(defaultSelectedPinId);
    setCounter(7);
    setManualPaused(false);
  }, [isMobile, prefersReducedMotion]);

  useEffect(() => {
    if (!shouldRunMobileBeacon) {
      return;
    }

    const beaconPins = heroProjectPins;
    let index = Math.max(0, beaconPins.findIndex((pin) => pin.id === selectedPinId));

    const cycleBeacon = () => {
      index = (index + 1) % beaconPins.length;
      setSelectedPinId(beaconPins[index].id);
      setCounter(6 + (index % 3));
    };

    const interval = window.setInterval(cycleBeacon, 1600);

    return () => window.clearInterval(interval);
  }, [selectedPinId, shouldRunMobileBeacon]);

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

  const handlePinClick = useCallback(
    (pin: HeroProjectPin) => {
      if (isMobile) {
        setFilterIndex(0);
        setSelectedPinId(pin.id);
        setCounter((current) => Math.max(current, 7));
        return;
      }

      setFilterIndex(getFilterIndex(pin.stage));
      setSelectedPinId(pin.id);
      setCounter(3);

      if (!projectCardsEnabled) {
        return;
      }

      setManualPaused(true);
      setMode("showing-card");
    },
    [isMobile, projectCardsEnabled],
  );

  return (
    <div
      ref={rootRef}
      dir={locale === "fa" ? "rtl" : "ltr"}
      aria-label={copy.aria}
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

        <div className="absolute left-3 top-3 z-30 flex items-center gap-1.5 rounded-full border border-border bg-card/92 px-2.5 py-1.5 text-[10px] font-bold text-foreground shadow-sm shadow-primary/[0.04] backdrop-blur lg:left-4 lg:top-4">
          <span className="h-1.5 w-1.5 rounded-full bg-[#CC785C] hero-live-dot" aria-hidden="true" />
          <span>{copy.opportunity(counter || 3)}</span>
        </div>

        {!compact ? (
          <div className="absolute bottom-3 left-3 z-30 overflow-hidden rounded-full border border-border bg-card/88 px-2.5 py-1.5 text-[10px] font-semibold text-muted-foreground shadow-sm shadow-primary/[0.04] backdrop-blur lg:bottom-4 lg:left-4">
            <span key={activeFilter} className="hero-filter-text block">
              {copy.filters[activeFilter]}
            </span>
          </div>
        ) : null}

        <div key={loopSerial} className="absolute inset-0 z-20">
          {visiblePins.map((pin, index) => {
            const matches = isMobile || activeFilter === filterStages[0] || pin.stage === activeFilter;
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
                showLabel={!compact && !isMobile}
                locale={locale}
              />
            );
          })}
        </div>

        {projectCardsEnabled && selectedPin ? <ProjectCard locale={locale} pin={selectedPin} /> : null}

      </div>
    </div>
  );
}
