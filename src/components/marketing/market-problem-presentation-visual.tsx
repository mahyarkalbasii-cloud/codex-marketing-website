const problemIllustrationSrc = "/images/persiansaze-construction-sales-problem-section.WEBP";

export function MarketProblemPresentationVisual() {
  return (
    <figure
      className="market-problem-presentation-visual problem-image-composition"
      aria-label="نمای مفهومی از پراکندگی پروژه‌های ساختمانی، زمان نامشخص اقدام و از دست رفتن فرصت فروش"
      style={{
        blockSize: "100%",
        inlineSize: "100%",
        margin: 0,
        overflow: "hidden",
      }}
    >
      <img
        src={problemIllustrationSrc}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        style={{
          blockSize: "100%",
          display: "block",
          inlineSize: "100%",
          objectFit: "cover",
        }}
      />
    </figure>
  );
}
