"use client";

/*
 * Hero map loop state machine:
 * idle -> loading -> filtering -> selecting -> showing-card -> resetting -> loading.
 * The loop runs only while the hero visual is in view and the tab is visible. Desktop/tablet
 * get the full cycling filter, selected pin, project card and parallax. Mobile
 * keeps the card closed and runs a lighter beacon cycle across the map pins. Framer Motion was not present in
 * this project, so the orchestration uses React state plus CSS/Web Animations-friendly classes.
 */

import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { Building, Route, Search, Sparkles } from "lucide-react";

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
  "--pin-entry-delay": string;
  "--pin-pulse-delay": string;
};

type CardStyle = CSSProperties & {
  "--card-y": string;
};

type DesktopPinKind = "active" | "regular" | "dormant";

const heroCopy = {
  fa: {
    aria: "نقشه تعاملی نمونه پرشین‌سازه برای کشف پروژه‌های ساختمانی فعال",
    projectSample: "پروژه نمونه",
    stage: "مرحله",
    height: "ارتفاع",
    updated: "آخرین بروزرسانی: ۲ روز پیش",
    stagePrefix: "مرحله",
    command: "جست‌وجوی پروژه نازک‌کاری شمال تهران",
    answerLabel: "پاسخ آماده اقدام",
    answerTitle: "فرصت‌های نزدیک به تماس",
    answerBody: "پروژه‌های هم‌خوان بر اساس منطقه، مرحله ساخت و زمان مناسب فروش اولویت‌بندی شده‌اند.",
    scoreLabel: "امتیاز فرصت",
    pipeline: ["کشف", "اولویت", "پیگیری"],
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
      velenjak: "۷ طبقه",
      zaferanieh: "۹ طبقه",
      niavaran: "۹ طبقه",
      aghdasieh: "۶ طبقه",
      farmanieh: "۸ طبقه",
      pasdaran: "۱۰ طبقه",
      jordan: "۶ طبقه",
      saadatabad: "۸ طبقه",
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
    projectSample: "Sample project",
    stage: "Stage",
    height: "Height",
    updated: "Last updated: 2 days ago",
    stagePrefix: "stage",
    command: "Find finishing projects in north Tehran",
    answerLabel: "Action-ready answer",
    answerTitle: "Best-fit projects to contact",
    answerBody: "Matches are ranked by area, build stage, and sales timing signal.",
    scoreLabel: "Opportunity score",
    pipeline: ["Discover", "Prioritize", "Follow up"],
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
      velenjak: "7 floors",
      zaferanieh: "9 floors",
      niavaran: "9 floors",
      aghdasieh: "6 floors",
      farmanieh: "8 floors",
      pasdaran: "10 floors",
      jordan: "6 floors",
      saadatabad: "8 floors",
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

const desktopPinKinds: Record<string, DesktopPinKind> = {
  velenjak: "active",
  zaferanieh: "active",
  saadatabad: "active",
  niavaran: "regular",
  farmanieh: "regular",
  pasdaran: "regular",
  jordan: "regular",
  aghdasieh: "dormant",
  vanak: "dormant",
  ekbatan: "dormant",
};

const activePulseDelays: Record<string, number> = {
  velenjak: 0,
  zaferanieh: 0.8,
  saadatabad: 1.6,
};

const dormantPinIds = ["aghdasieh", "vanak", "ekbatan"];

const desktopEntryOrder = [...heroProjectPins]
  .sort((first, second) => second.y - first.y)
  .reduce<Record<string, number>>((order, pin, index) => {
    order[pin.id] = index;
    return order;
  }, {});

const pinPopupDetails = {
  fa: {
    velenjak: "ولنجک، ۴۲۰ متر زمین، ۷ طبقه، نازک‌کاری",
    zaferanieh: "زعفرانیه، ۶۸۰ متر زمین، ۹ طبقه، اسکلت",
    niavaran: "نیاوران، ۷۲۰ متر زمین، ۹ طبقه، نازک‌کاری",
    aghdasieh: "اقدسیه، ۳۶۰ متر زمین، ۶ طبقه، گودبرداری",
    farmanieh: "فرمانیه، ۵۸۰ متر زمین، ۸ طبقه، اسکلت",
    pasdaran: "پاسداران، ۴۹۰ متر زمین، ۱۰ طبقه، گودبرداری",
    jordan: "جردن، ۳۸۰ متر زمین، ۶ طبقه، اسکلت",
    saadatabad: "سعادت‌آباد، ۴۸۰ متر زمین، ۸ طبقه، نازک‌کاری",
    vanak: "ونک، ۲۸۰ متر زمین، ۴ طبقه، گودبرداری",
    ekbatan: "اکباتان، ۳۲۰ متر زمین، ۵ طبقه، گودبرداری",
  },
  en: {
    velenjak: "Velenjak, 420 m land, 7 floors, finishing",
    zaferanieh: "Zaferanieh, 680 m land, 9 floors, structure",
    niavaran: "Niavaran, 720 m land, 9 floors, finishing",
    aghdasieh: "Aghdasieh, 360 m land, 6 floors, excavation",
    farmanieh: "Farmanieh, 580 m land, 8 floors, structure",
    pasdaran: "Pasdaran, 490 m land, 10 floors, excavation",
    jordan: "Jordan, 380 m land, 6 floors, structure",
    saadatabad: "Saadatabad, 480 m land, 8 floors, finishing",
    vanak: "Vanak, 280 m land, 4 floors, excavation",
    ekbatan: "Ekbatan, 320 m land, 5 floors, excavation",
  },
} as const;

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

function LegacyPinMarker({ stage }: { stage: HeroProjectPin["stage"] }) {
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

function DesktopPinMarker({ kind }: { kind: DesktopPinKind }) {
  return (
    <span className="hero-map-pin-marker" data-kind={kind} aria-hidden="true">
      <span className="hero-map-dormant-dot" />
      <span className="hero-map-solid-dot">
        <Building className="h-3 w-3" strokeWidth={2.2} />
      </span>
    </span>
  );
}

function HeroMapArtwork({ interactive = false }: { interactive?: boolean }) {
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
        <radialGradient id="hero-signal-radar" cx="50%" cy="50%" r="58%">
          <stop offset="0%" stopColor="#CC785C" stopOpacity="0.22" />
          <stop offset="38%" stopColor="#CC785C" stopOpacity="0.075" />
          <stop offset="100%" stopColor="#FFF8EC" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hero-signal-sweep" x1="350" y1="75" x2="350" y2="250" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#CC785C" stopOpacity="0.34" />
          <stop offset="100%" stopColor="#CC785C" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="700" height="500" className="hero-map-land" rx="28" />
      <rect x="0" y="0" width="700" height="500" fill="url(#hero-map-grid)" />
      <ellipse cx="350" cy="252" rx="250" ry="190" fill="url(#hero-signal-radar)" />

      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        {interactive ? (
          <>
            <path
              d="M42 116C124 82 203 138 286 108C376 75 462 126 548 94C604 73 651 82 684 66"
              stroke="#CC785C"
              strokeOpacity="0.2"
              strokeWidth="1"
              strokeDasharray="5 8"
            />
            <path
              d="M28 336C106 296 188 352 276 318C372 282 458 335 550 304C612 283 656 294 686 273"
              stroke="#CC785C"
              strokeOpacity="0.2"
              strokeWidth="1"
              strokeDasharray="5 8"
            />
            <path
              d="M230 34C204 112 244 183 218 258C194 327 229 386 207 474"
              stroke="#CC785C"
              strokeOpacity="0.2"
              strokeWidth="1"
              strokeDasharray="5 8"
            />
            <path
              d="M570 38C532 105 568 178 532 248C496 318 528 386 492 478"
              stroke="#CC785C"
              strokeOpacity="0.2"
              strokeWidth="1"
              strokeDasharray="5 8"
            />
            <path
              d="M72 438C174 360 244 342 352 274C459 207 537 138 663 72"
              stroke="#CC785C"
              strokeOpacity="0.2"
              strokeWidth="1"
              strokeDasharray="5 8"
            />
            <path
              className="hero-route-dash"
              d="M98 366C166 320 224 338 286 286C353 230 430 256 501 190C548 146 599 132 646 96"
              stroke="#2A241D"
              strokeOpacity="0.18"
              strokeWidth="1.4"
              strokeDasharray="8 12"
            />
          </>
        ) : (
          <>
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
          </>
        )}
      </g>

      <g className="hero-signal-orbit" fill="none" stroke="#2A241D" strokeLinecap="round" transform="translate(350 250)">
        <ellipse rx="206" ry="150" strokeOpacity="0.105" strokeWidth="1.1" />
        <ellipse rx="146" ry="104" strokeOpacity="0.12" strokeWidth="1.1" />
        <ellipse rx="82" ry="58" strokeOpacity="0.14" strokeWidth="1.1" />
      </g>

      <g className="hero-signal-sweep">
        <path d="M350 250L314 80A174 174 0 0 1 426 94Z" fill="url(#hero-signal-sweep)" opacity="0.72" />
        <line x1="350" y1="250" x2="420" y2="90" stroke="#CC785C" strokeOpacity="0.34" strokeWidth="1" />
      </g>

      <g fill="#2A241D" opacity="0.22">
        <circle cx="126" cy="374" r="3.2" />
        <circle cx="224" cy="144" r="2.6" />
        <circle cx="544" cy="112" r="2.4" />
        <circle cx="612" cy="302" r="2.8" />
        <circle cx="456" cy="400" r="2.2" />
      </g>
    </svg>
  );
}

function ProjectPin({
  active,
  animate,
  dimmed,
  index,
  interactiveDesktop,
  kind,
  onClick,
  onHoverEnd,
  onHoverStart,
  pin,
  selected,
  showLabel,
  locale,
}: {
  active: boolean;
  animate: boolean;
  dimmed: boolean;
  index: number;
  interactiveDesktop: boolean;
  kind: DesktopPinKind;
  onClick: (pin: HeroProjectPin) => void;
  onHoverEnd: () => void;
  onHoverStart: (pin: HeroProjectPin) => void;
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
    "--pin-entry-delay": `${(desktopEntryOrder[pin.id] ?? index) * heroLoop.pinStagger}ms`,
    "--pin-pulse-delay": `${activePulseDelays[pin.id] ?? 0}s`,
  };

  return (
    <button
      type="button"
      data-hero-pin
      data-animate={animate ? "true" : "false"}
      data-entry={interactiveDesktop ? "desktop" : "legacy"}
      data-pin-kind={kind}
      data-pin-id={pin.id}
      data-selected={selected ? "true" : "false"}
      style={style}
      onClick={(event) => {
        event.stopPropagation();
        onClick(pin);
      }}
      onPointerEnter={() => {
        if (interactiveDesktop) {
          onHoverStart(pin);
        }
      }}
      onPointerLeave={() => {
        if (interactiveDesktop) {
          onHoverEnd();
        }
      }}
      onMouseEnter={() => {
        if (interactiveDesktop) {
          onHoverStart(pin);
        }
      }}
      onMouseLeave={() => {
        if (interactiveDesktop) {
          onHoverEnd();
        }
      }}
      onFocus={() => {
        if (interactiveDesktop) {
          onHoverStart(pin);
        }
      }}
      onBlur={() => {
        if (interactiveDesktop) {
          onHoverEnd();
        }
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
      {interactiveDesktop && kind === "active" ? (
        <span className="hero-map-pin-pulse" aria-hidden="true" />
      ) : null}
      {interactiveDesktop ? <DesktopPinMarker kind={kind} /> : <LegacyPinMarker stage={pin.stage} />}
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

function ProjectCard({ closing, locale, pin }: { closing: boolean; locale: Locale; pin: HeroProjectPin }) {
  const copy = heroCopy[locale];
  const edgeAware = pin.x > 54;
  const cardStyle: CardStyle = {
    "--card-y": `clamp(12px, calc(${pin.y}% - 3rem), calc(100% - 9rem))`,
    ...(edgeAware
      ? { right: `calc(${100 - pin.x}% + 12px)` }
      : { left: `calc(${pin.x}% + 12px)` }),
  };
  const details = pinPopupDetails[locale][pin.id as keyof (typeof pinPopupDetails)[typeof locale]];

  return (
    <div
      data-project-card
      style={cardStyle}
      className={cn(
        "hero-project-card absolute z-30 w-[12.5rem] max-w-[calc(100%-2rem)] rounded-[1.1rem] border border-border bg-card/95 p-3 text-right shadow-xl shadow-primary/[0.10] backdrop-blur",
        edgeAware && "left-auto",
        closing && "hero-project-card-exiting",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-semibold text-muted-foreground">
          {copy.projectSample}
        </span>
        <span className="mt-1 h-2 w-2 rounded-full bg-[#CC785C]" />
      </div>
      <div className="mt-2.5 text-sm font-bold leading-6 text-foreground">{details}</div>
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
  const [loopSerial, setLoopSerial] = useState(0);
  const [inView, setInView] = useState(false);
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [manualPaused, setManualPaused] = useState(false);
  const [awakenedDormantPinId, setAwakenedDormantPinId] = useState<string | null>(null);
  const [hoveredPinId, setHoveredPinId] = useState<string | null>(null);
  const [popupPinId, setPopupPinId] = useState<string | null>(null);
  const [popupClosing, setPopupClosing] = useState(false);
  const popupCloseTimerRef = useRef<number | null>(null);
  const isMobile = useMediaState("(max-width: 767px)");
  const prefersReducedMotion = useMediaState("(prefers-reduced-motion: reduce)");
  const activeFilter = filterStages[filterIndex] ?? filterStages[0];
  const copy = heroCopy[locale];
  const interactiveDesktop = !compact && !isMobile;
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
  const popupPin = useMemo(
    () => visiblePins.find((pin) => pin.id === popupPinId) ?? null,
    [popupPinId, visiblePins],
  );
  const spotlightPin = useMemo(
    () =>
      popupPin ??
      selectedPin ??
      visiblePins.find((pin) => pin.id === defaultSelectedPinId) ??
      visiblePins[0] ??
      null,
    [popupPin, selectedPin, visiblePins],
  );
  const shouldRunLoop = inView && pageVisible && !interactiveDesktop && !isMobile && !prefersReducedMotion && !manualPaused;
  const shouldRunMobileBeacon = pageVisible && isMobile && !prefersReducedMotion;
  const shouldRunDesktopIdle =
    inView &&
    pageVisible &&
    interactiveDesktop &&
    !prefersReducedMotion &&
    !hoveredPinId &&
    !popupPinId;

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
    if (inView && !hasEnteredView) {
      setHasEnteredView(true);
    }
  }, [hasEnteredView, inView]);

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
      setManualPaused(true);
      return;
    }

    setMode("filtering");
    setFilterIndex(0);
    setSelectedPinId(defaultSelectedPinId);
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
    };

    const interval = window.setInterval(cycleBeacon, 1600);

    return () => window.clearInterval(interval);
  }, [selectedPinId, shouldRunMobileBeacon]);

  useEffect(() => {
    if (!shouldRunDesktopIdle) {
      setAwakenedDormantPinId(null);
      return;
    }

    let cancelled = false;
    let index = 0;
    const timers: number[] = [];

    const schedule = (callback: () => void, delay: number) => {
      timers.push(window.setTimeout(callback, delay));
    };

    const runCycle = () => {
      schedule(() => {
        if (cancelled) {
          return;
        }

        const nextPinId = dormantPinIds[index % dormantPinIds.length];
        index += 1;
        setAwakenedDormantPinId(nextPinId);

        schedule(() => {
          if (cancelled) {
            return;
          }

          setAwakenedDormantPinId(null);
          runCycle();
        }, 6000);
      }, 8000);
    };

    runCycle();

    return () => {
      cancelled = true;
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [interactiveDesktop, shouldRunDesktopIdle]);

  useEffect(() => {
    return () => {
      if (popupCloseTimerRef.current) {
        window.clearTimeout(popupCloseTimerRef.current);
      }
    };
  }, []);

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
        return;
      }

      setFilterIndex(getFilterIndex(pin.stage));
      setSelectedPinId(pin.id);

      if (!projectCardsEnabled) {
        return;
      }

      setManualPaused(true);
      setMode("showing-card");
    },
    [isMobile, projectCardsEnabled],
  );

  const handlePinHoverStart = useCallback(
    (pin: HeroProjectPin) => {
      if (!interactiveDesktop) {
        return;
      }

      if (popupCloseTimerRef.current) {
        window.clearTimeout(popupCloseTimerRef.current);
        popupCloseTimerRef.current = null;
      }

      setHoveredPinId(pin.id);
      setPopupPinId(pin.id);
      setPopupClosing(false);
    },
    [interactiveDesktop],
  );

  const handlePinHoverEnd = useCallback(() => {
    if (!interactiveDesktop) {
      return;
    }

    setHoveredPinId(null);
    setPopupClosing(true);

    if (popupCloseTimerRef.current) {
      window.clearTimeout(popupCloseTimerRef.current);
    }

    popupCloseTimerRef.current = window.setTimeout(() => {
      setPopupPinId(null);
      setPopupClosing(false);
      popupCloseTimerRef.current = null;
    }, 150);
  }, [interactiveDesktop]);

  return (
    <div
      ref={rootRef}
      dir={locale === "fa" ? "rtl" : "ltr"}
      aria-label={copy.aria}
      className={cn(
        "hero-map-visual product-theater relative isolate w-full overflow-hidden rounded-[1.5rem]",
        compact
          ? "aspect-[10/11] min-h-[380px] sm:min-h-[420px]"
          : "aspect-[10/11] min-h-[500px] sm:aspect-[4/5] sm:min-h-[560px] lg:aspect-[5/6] lg:min-h-[620px] xl:min-h-[660px]",
      )}
      data-mode={mode}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handleVisualPointerDown}
    >
      <div className="absolute inset-0 bg-grid product-grid opacity-45" aria-hidden="true" />

      <div
        ref={parallaxRef}
        className="relative h-full transition-transform duration-300 ease-out will-change-transform"
      >
        <div className="absolute inset-0 overflow-hidden bg-[#f3eadb] dark:bg-zinc-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_42%,rgba(204,120,92,0.18),transparent_31%),radial-gradient(circle_at_72%_24%,rgba(42,36,29,0.10),transparent_25%)]" aria-hidden="true" />
          <div className="absolute inset-0 bg-grid product-grid opacity-40" aria-hidden="true" />
          <HeroMapArtwork interactive={interactiveDesktop} />
        </div>

        <div
          className={cn(
            "absolute start-3 top-3 z-30 flex min-w-0 items-center gap-2 rounded-2xl border border-[#d8c7b2] bg-[#fffaf1]/92 px-3 py-2 text-right shadow-sm shadow-[#2a241d]/[0.045] backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/92",
            compact ? "end-3" : "w-[min(23rem,calc(100%-2rem))] lg:start-4 lg:top-4",
          )}
        >
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-[#1b1916] text-[#cc785c]">
            <Search className="h-4 w-4" strokeWidth={2} />
          </span>
          <span className="min-w-0 flex-1 truncate text-[11px] font-bold leading-5 text-[#2a241d] dark:text-zinc-100">
            {copy.command}
          </span>
        </div>

        <div key={loopSerial} className="absolute inset-0 z-20">
          {visiblePins.map((pin, index) => {
            const matches = interactiveDesktop || isMobile || activeFilter === filterStages[0] || pin.stage === activeFilter;
            const selected = !interactiveDesktop && pin.id === selectedPinId;
            const kind = interactiveDesktop && pin.id === awakenedDormantPinId
              ? "active"
              : desktopPinKinds[pin.id] ?? "regular";

            return (
              <ProjectPin
                key={pin.id}
                active={interactiveDesktop ? kind === "active" : matches}
                animate={interactiveDesktop ? hasEnteredView && !prefersReducedMotion : !prefersReducedMotion}
                dimmed={!matches}
                index={index}
                interactiveDesktop={interactiveDesktop}
                kind={kind}
                onClick={handlePinClick}
                onHoverEnd={handlePinHoverEnd}
                onHoverStart={handlePinHoverStart}
                pin={pin}
                selected={selected}
                showLabel={!compact && !isMobile}
                locale={locale}
              />
            );
          })}
        </div>

        {projectCardsEnabled && !interactiveDesktop && selectedPin ? <ProjectCard closing={false} locale={locale} pin={selectedPin} /> : null}
        {interactiveDesktop && popupPin ? <ProjectCard closing={popupClosing} locale={locale} pin={popupPin} /> : null}

        {spotlightPin ? (
          <div
            className={cn(
              "hero-answer-card absolute bottom-3 start-3 z-30 overflow-hidden rounded-[1.2rem] border border-[#d8c7b2] bg-[#fffaf1]/92 p-3 text-right shadow-lg shadow-[#2a241d]/[0.055] backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/92",
              compact ? "end-3" : "w-[min(18.5rem,calc(100%-2rem))] lg:bottom-4 lg:start-4",
            )}
          >
            <div className="flex items-start justify-between gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[14px] bg-[#1b1916] text-[#cc785c]">
                <Sparkles className="h-4 w-4" strokeWidth={2} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] font-bold leading-5 text-[#8a7a69]">
                  {copy.answerLabel}
                </div>
                <div className="truncate text-sm font-bold leading-6 text-[#2a241d] dark:text-zinc-100">
                  {copy.answerTitle}
                </div>
              </div>
            </div>
            {!compact ? (
              <p className="mt-2 line-clamp-2 text-[11px] font-medium leading-6 text-[#6f6254]">
                {copy.answerBody}
              </p>
            ) : null}
            <div className="mt-3 grid grid-cols-[1fr_auto] items-end gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-[10px] font-bold text-[#6f6254]">
                  <Route className="h-3.5 w-3.5 text-[#cc785c]" strokeWidth={2} />
                  <span className="truncate">
                    {copy.areas[spotlightPin.id]} · {copy.stages[spotlightPin.stage]}
                  </span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#e4d8c8]">
                  <span className="hero-score-bar block h-full w-[82%] origin-right rounded-full bg-[#cc785c]" />
                </div>
              </div>
              <div className="rounded-2xl border border-[#d8c7b2] bg-[#fbf6ed] px-2.5 py-1.5 text-center dark:border-zinc-800 dark:bg-zinc-950">
                <div className="text-[9px] font-bold leading-4 text-[#8a7a69]">{copy.scoreLabel}</div>
                <div className="text-sm font-bold leading-5 text-[#2a241d] dark:text-zinc-100">
                  {locale === "fa" ? "۸۲" : "82"}
                </div>
              </div>
            </div>
            {!compact ? (
              <div className="mt-3 flex items-center gap-1.5">
                {copy.pipeline.map((step, index) => (
                  <span
                    key={step}
                    className={cn(
                      "rounded-full border px-2 py-1 text-[9px] font-bold leading-4",
                      index === 1
                        ? "border-[#cc785c]/35 bg-[#f6d6a8]/70 text-[#2a241d]"
                        : "border-[#e4d8c8] bg-[#fbf6ed] text-[#7a6a59]",
                    )}
                  >
                    {step}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}

      </div>
    </div>
  );
}
