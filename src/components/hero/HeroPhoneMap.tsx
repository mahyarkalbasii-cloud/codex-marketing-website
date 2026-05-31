import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

import styles from "./HeroPhoneMap.module.css";
import { heroProjectPins, type ConstructionStage } from "./data";

type HeroPhoneMapProps = {
  compact?: boolean;
};

/**
 * هر مرحله ساخت یک رنگ برند اختصاصی دارد تا روی نقشه به‌سرعت قابل تفکیک باشد.
 *   گودبرداری → کهربایی، اسکلت → سبزآبی، نازک‌کاری → خاک‌رس
 */
const stagePalette: Record<ConstructionStage, { color: string; glow: string }> = {
  گودبرداری: { color: "#E2A23E", glow: "rgba(226, 162, 62, 0.55)" },
  اسکلت: { color: "#2F6F67", glow: "rgba(47, 111, 103, 0.5)" },
  نازک‌کاری: { color: "#B45B3E", glow: "rgba(180, 91, 62, 0.5)" },
};

const stageOrder: ConstructionStage[] = ["گودبرداری", "اسکلت", "نازک‌کاری"];

// پین‌ها از داده واقعی پروژه‌ها ساخته می‌شوند تا انیمیشن با متن هیرو هم‌خوان باشد.
const phonePins = heroProjectPins.map((pin, index) => {
  const palette = stagePalette[pin.stage];
  return {
    ...pin,
    color: palette.color,
    glow: palette.glow,
    // تأخیر و طول چشمک هر پین کمی متفاوت است تا چشمک‌ها هم‌زمان نشوند.
    blinkDelay: `${((index * 1.37) % 6).toFixed(2)}s`,
    blinkDuration: `${(4.5 + (index % 4) * 0.85).toFixed(2)}s`,
    floatDelay: `${((index * 0.83) % 5).toFixed(2)}s`,
  };
});

// چند پروژه برای کارت‌های نتایج که زیر نقشه اسکرول می‌شوند.
const resultCards = heroProjectPins.slice(0, 4);

const selectedPin = phonePins.find((pin) => pin.id === "niavaran") ?? phonePins[0];

function SchematicMap() {
  return (
    <svg
      className={styles.mapArt}
      viewBox="0 0 320 320"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* بلوک‌های شهری به‌صورت شماتیک */}
      <g className={styles.mapBlocks}>
        <rect x="22" y="30" width="58" height="42" rx="7" />
        <rect x="92" y="22" width="46" height="52" rx="7" />
        <rect x="150" y="34" width="60" height="40" rx="7" />
        <rect x="226" y="26" width="64" height="48" rx="7" />
        <rect x="30" y="92" width="50" height="56" rx="7" />
        <rect x="150" y="96" width="54" height="48" rx="7" />
        <rect x="222" y="92" width="62" height="58" rx="7" />
        <rect x="36" y="168" width="58" height="50" rx="7" />
        <rect x="108" y="170" width="62" height="44" rx="7" />
        <rect x="226" y="170" width="58" height="52" rx="7" />
        <rect x="30" y="236" width="64" height="54" rx="7" />
        <rect x="160" y="240" width="56" height="50" rx="7" />
        <rect x="232" y="234" width="56" height="58" rx="7" />
      </g>

      {/* پارک / فضای سبز */}
      <path
        className={styles.mapPark}
        d="M104 92c18-6 34 2 38 18 4 18-8 32-26 34-20 2-34-10-34-28 0-12 8-20 22-24Z"
      />

      {/* خیابان‌های اصلی */}
      <g className={styles.mapStreets}>
        <path d="M0 82h320" />
        <path d="M0 158h320" />
        <path d="M0 226h320" />
        <path d="M86 0v320" />
        <path d="M214 0v320" />
      </g>

      {/* بزرگراه مورب */}
      <path className={styles.mapHighway} d="M-10 300 L150 150 L330 40" />

      {/* مسیر رودخانه */}
      <path
        className={styles.mapRiver}
        d="M-6 40c46 20 70 60 118 70s86-18 134 6 70 64 90 74"
      />
    </svg>
  );
}

function MapPins() {
  return (
    <div className={styles.pinLayer} aria-hidden="true">
      {phonePins.map((pin) => (
        <span
          key={pin.id}
          className={cn(styles.pin, pin.id === selectedPin.id && styles.pinSelected)}
          style={
            {
              left: `${pin.x}%`,
              top: `${pin.y}%`,
              "--pin-color": pin.color,
              "--pin-glow": pin.glow,
              "--pin-blink-delay": pin.blinkDelay,
              "--pin-blink-duration": pin.blinkDuration,
              "--pin-float-delay": pin.floatDelay,
            } as CSSProperties
          }
        >
          <span className={styles.pinPing} />
          <span className={styles.pinDot} />
        </span>
      ))}
    </div>
  );
}

function MapBlock() {
  return (
    <div className={styles.mapCard}>
      <div className={styles.mapInner}>
        <SchematicMap />
        <div className={styles.mapScan} />
        <div className={styles.mapSweep} />
        <MapPins />

        {/* کالوت پروژه انتخاب‌شده */}
        <div
          className={styles.callout}
          style={{ left: `${selectedPin.x}%`, top: `${selectedPin.y}%` }}
          aria-hidden="true"
        >
          <span className={styles.calloutDot} style={{ background: selectedPin.color }} />
          <span className={styles.calloutBody}>
            <span className={styles.calloutTitle}>{selectedPin.area}</span>
            <span className={styles.calloutMeta}>
              {selectedPin.stage} · {selectedPin.floors}
            </span>
          </span>
        </div>
      </div>

      <div className={styles.legend} aria-hidden="true">
        {stageOrder.map((stage) => (
          <span key={stage} className={styles.legendItem}>
            <span
              className={styles.legendDot}
              style={{ background: stagePalette[stage].color }}
            />
            {stage}
          </span>
        ))}
      </div>
    </div>
  );
}

function ResultsBlock() {
  return (
    <div className={styles.results} aria-hidden="true">
      <div className={styles.resultsHead}>
        <span>پروژه‌های نزدیک شما</span>
        <span className={styles.resultsCount}>۱۰</span>
      </div>
      {resultCards.map((pin) => (
        <div key={pin.id} className={styles.resultCard}>
          <span
            className={styles.resultPin}
            style={{ background: stagePalette[pin.stage].color }}
          />
          <span className={styles.resultText}>
            <span className={styles.resultTitle}>{pin.area}</span>
            <span className={styles.resultMeta}>{pin.floors}</span>
          </span>
          <span
            className={styles.resultTag}
            style={{ color: stagePalette[pin.stage].color }}
          >
            {pin.stage}
          </span>
        </div>
      ))}
    </div>
  );
}

export function HeroPhoneMap({ compact = false }: HeroPhoneMapProps) {
  return (
    <div
      className={cn(
        "hero-laptop-map-visual hero-data-orb-visual",
        styles.scene,
        compact && styles.compact,
      )}
      role="img"
      aria-label="نمایش زنده اپلیکیشن پرشین‌سازه؛ نقشه شهری با پین پروژه‌های ساختمانی فعال که روی صفحه موبایل اسکرول می‌شود"
    >
      <span className={styles.ambientGlow} aria-hidden="true" />

      <div className={styles.phone} aria-hidden="true">
        <span className={styles.island} />
        <span className={styles.glare} />

        <div className={styles.screen}>
          {/* نوار وضعیت */}
          <div className={styles.statusBar}>
            <span className={styles.statusTime}>۲۱:۴۸</span>
            <span className={styles.statusIcons}>
              <span className={styles.signal}>
                <i />
                <i />
                <i />
                <i />
              </span>
              <span className={styles.battery} />
            </span>
          </div>

          {/* هدر اپلیکیشن */}
          <div className={styles.appHeader}>
            <div className={styles.appBar}>
              <span className={styles.brand}>
                <span className={styles.brandMark} />
                پرشین‌سازه
              </span>
              <span className={styles.liveBadge}>
                <span className={styles.liveDot} />
                ۱۰ پروژه فعال
              </span>
            </div>
            <div className={styles.searchPill}>
              <span className={styles.searchIcon} />
              جستجوی پروژه در تهران، کرج و لواسان…
            </div>
            <div className={styles.chips}>
              {["همه مراحل", ...stageOrder].map((chip, index) => (
                <span
                  key={chip}
                  className={cn(styles.chip, index === 0 && styles.chipActive)}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* بدنه اسکرول‌شونده */}
          <div className={styles.viewport}>
            <div className={styles.track}>
              <MapBlock />
              <ResultsBlock />
              {/* تکرار برای حلقه بی‌درز اسکرول */}
              <MapBlock />
              <ResultsBlock />
            </div>
            <span className={styles.viewportFadeTop} />
            <span className={styles.viewportFadeBottom} />
          </div>

          {/* نوار پایین */}
          <div className={styles.tabBar}>
            <span className={cn(styles.tab, styles.tabActive)} />
            <span className={styles.tab} />
            <span className={styles.tab} />
            <span className={styles.tab} />
          </div>
        </div>
      </div>

      <span className={styles.floorShadow} aria-hidden="true" />
    </div>
  );
}
