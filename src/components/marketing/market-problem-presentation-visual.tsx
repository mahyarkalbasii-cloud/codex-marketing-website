const ordinaryNodes = [
  [42, 42],
  [94, 30],
  [148, 54],
  [214, 36],
  [292, 48],
  [68, 94],
  [126, 116],
  [192, 96],
  [264, 116],
  [326, 88],
  [102, 156],
  [228, 154],
];

const relevantNodes = [
  [76, 132],
  [170, 32],
  [248, 72],
  [306, 154],
];

const blindSpots = [
  [36, 164],
  [186, 144],
  [320, 28],
];

export function MarketProblemPresentationVisual() {
  return (
    <figure
      className="market-problem-presentation-visual problem-composition"
      aria-label="نمایش پراکندگی پروژه‌های ساختمانی و نبود اطلاعات کافی برای تشخیص زمان مناسب اقدام"
    >
      <svg
        className="problem-constellation"
        viewBox="0 0 360 184"
        aria-hidden="true"
        focusable="false"
      >
        <g className="problem-constellation-grid">
          <path d="M24 46H336" />
          <path d="M24 94H336" />
          <path d="M24 142H336" />
          <path d="M88 22V166" />
          <path d="M180 22V166" />
          <path d="M272 22V166" />
        </g>

        <g className="problem-constellation-links">
          <path d="M42 42L94 30L148 54L170 32L214 36L248 72L292 48" />
          <path d="M68 94L126 116L192 96L248 72L264 116L306 154" />
          <path d="M76 132L102 156L186 144L228 154L306 154" />
          <path d="M264 116L326 88" />
        </g>

        <g className="problem-ordinary-nodes">
          {ordinaryNodes.map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.2" />
          ))}
        </g>

        <g className="problem-relevant-nodes">
          {relevantNodes.map(([cx, cy]) => (
            <g key={`${cx}-${cy}`} transform={`translate(${cx} ${cy})`}>
              <circle r="8.5" />
              <circle r="3.6" />
            </g>
          ))}
        </g>

        <g className="problem-blind-spots">
          {blindSpots.map(([x, y], index) =>
            index === 1 ? (
              <rect key={`${x}-${y}`} x={x - 5} y={y - 5} width="10" height="10" rx="2" />
            ) : (
              <g key={`${x}-${y}`} transform={`translate(${x} ${y})`}>
                <path d="M-4 -4L4 4" />
                <path d="M4 -4L-4 4" />
              </g>
            ),
          )}
        </g>
      </svg>

      <div className="problem-data-gap" role="list" aria-label="نمونه شکاف‌های اطلاعاتی پروژه‌ها">
        <div className="problem-data-row" role="listitem">
          <strong className="problem-project-label">پروژه A</strong>
          <span className="problem-data-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M12 4L21 20H3L12 4Z" />
              <path d="M12 9V13" />
              <path d="M12 17H12.01" />
            </svg>
          </span>
          <span className="problem-status-label">اطلاعات ناقص</span>
          <span className="problem-placeholder">— —</span>
          <span className="problem-ellipsis">…</span>
        </div>

        <div className="problem-data-row" role="listitem">
          <strong className="problem-project-label">پروژه B</strong>
          <span className="problem-data-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <circle cx="12" cy="12" r="8" />
              <path d="M12 8V12L15 14" />
            </svg>
          </span>
          <span className="problem-status-label">زمان تماس نامشخص</span>
          <span className="problem-placeholder problem-placeholder-box">[ -- ]</span>
          <span className="problem-ellipsis">…</span>
        </div>

        <div className="problem-data-row" role="listitem">
          <strong className="problem-project-label">پروژه C</strong>
          <span className="problem-data-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M19 8A7 7 0 0 0 7.1 5.1L5 7" />
              <path d="M5 4V7H8" />
              <path d="M5 16A7 7 0 0 0 16.9 18.9L19 17" />
              <path d="M19 20V17H16" />
            </svg>
          </span>
          <span className="problem-status-label">به‌روزرسانی نشده</span>
          <span className="problem-placeholder">— --</span>
          <span className="problem-ellipsis">…</span>
        </div>
      </div>

      <div className="problem-timing">
        <div className="problem-timing-track" aria-hidden="true">
          <span className="problem-timing-window" />
          <span className="problem-timing-thumb" />
        </div>
        <div className="problem-timing-labels">
          <span className="problem-timing-edge problem-timing-edge--early">زود</span>
          <span className="problem-timing-pill">زمان مناسب</span>
          <span className="problem-timing-edge problem-timing-edge--late">دیر</span>
        </div>
      </div>
    </figure>
  );
}
