const simulatedProjects = [
  {
    area: "۶۹۶ / ۱۶۳",
    code: "4487568",
    floors: "۸ / ۶",
    location: "تهران / منطقه ۱۲ / خیابان ایران",
    stage: "اسکلت بتنی",
    tone: "navy",
  },
  {
    area: "۱۴۴۲ / ۳۱۴",
    code: "43715072",
    floors: "۱۲ / ۸",
    location: "تهران / منطقه ۱۳ / پیروزی",
    stage: "ابتدای نازک کاری",
    tone: "teal",
  },
  {
    area: "۹۶۶ / ۲۶۸",
    code: "34449670",
    floors: "۵ / ۴",
    location: "تهران / منطقه ۱۲ / بازار",
    stage: "فونداسیون",
    tone: "blue",
  },
  {
    area: "۹۱۸ / ۲۰۵",
    code: "14314234",
    floors: "۷ / ۵",
    location: "تهران / منطقه ۱۷ / قلعه مرغی",
    stage: "ابتدای نازک کاری",
    tone: "gold",
  },
  {
    area: "۷۵۳ / ۱۸۴",
    code: "84778952",
    floors: "۷ / ۶",
    location: "تهران / منطقه ۱۲ / بازار",
    stage: "فونداسیون",
    tone: "navy",
  },
  {
    area: "۱۹۴۷ / ۳۸۴",
    code: "44507408",
    floors: "۱۲ / ۸",
    location: "تهران / منطقه ۱۳ / تهران نو",
    stage: "اسکلت بتنی",
    tone: "teal",
  },
];

export function MarketProblemPresentationVisual() {
  return (
    <div
      className="market-problem-presentation-visual problem-list-panel relative min-h-[21rem] flex-1 overflow-hidden bg-white md:min-h-[27rem]"
      aria-label="نمای شبیه‌سازی‌شده لیست پروژه‌های ساختمانی در پنل پرشین‌سازه"
      dir="rtl"
    >
      <div className="problem-list-shell">
        <div className="problem-list-toolbar">
          <span>پرشین‌سازه</span>
          <span>۶ پروژه تازه</span>
        </div>

        <div className="problem-project-grid" aria-hidden="true">
          {simulatedProjects.map((project, index) => (
            <article className="problem-project-card" data-tone={project.tone} key={project.code}>
              <div className="problem-project-visual">
                <span className="problem-project-check" />
                <span className="problem-project-code">{project.code} | جدید</span>
                <span className="problem-project-building">
                  <span />
                  <span />
                  <span />
                  <span />
                </span>
                <span className="problem-project-mark">
                  <span />
                  <span />
                  <span />
                </span>
              </div>

              <div className="problem-project-body">
                <p className="problem-project-location">{project.location}</p>
                <div className="problem-project-row">
                  <span>کارفرما</span>
                  <span className="problem-project-redacted" />
                </div>
                <div className="problem-project-row">
                  <span>مرحله</span>
                  <span>{project.stage}</span>
                </div>
                <div className="problem-project-row">
                  <span>آخرین تغییر</span>
                  <span>کمتر از یک ماه</span>
                </div>
                <div className="problem-project-row">
                  <span>طبقه / واحد</span>
                  <span>{project.floors}</span>
                </div>
                <div className="problem-project-row">
                  <span>متراژ / زیربنا</span>
                  <span>{project.area}</span>
                </div>
              </div>

              <span className="problem-project-order">{String(index + 1).padStart(2, "0")}</span>
            </article>
          ))}
        </div>
      </div>

      <div className="problem-list-panel-caption pointer-events-none absolute inset-x-4 bottom-4 rounded-full border border-[#eadfce]/90 bg-[#fffaf1]/90 px-4 py-2 text-center text-xs font-black text-[#2a241d] shadow-sm shadow-[#2a241d]/[0.04] backdrop-blur md:inset-x-5 md:bottom-5 md:text-sm">
        پروژه‌ها از حالت پراکنده به لیست قابل اقدام تبدیل می‌شوند
      </div>
    </div>
  );
}
