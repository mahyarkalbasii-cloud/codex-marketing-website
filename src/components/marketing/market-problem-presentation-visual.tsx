import fragmentedSignalsAvif from "@/assets/images/home-problem-fragmented-market-signals.avif";
import fragmentedSignalsWebp from "@/assets/images/home-problem-fragmented-market-signals.webp";

export function MarketProblemPresentationVisual() {
  return (
    <figure className="market-problem-presentation-visual problem-composition">
      <picture className="problem-signals-picture">
        <source srcSet={fragmentedSignalsAvif.src} type="image/avif" />
        <img
          src={fragmentedSignalsWebp.src}
          alt="نقشه‌ای پراکنده از سیگنال‌های بازار ساخت‌وساز با نشانگرهای پروژه، مسیرهای قطع‌شده و نماد تأخیر"
          width="1254"
          height="1254"
          loading="lazy"
          decoding="async"
          className="problem-signals-image"
        />
      </picture>
    </figure>
  );
}
