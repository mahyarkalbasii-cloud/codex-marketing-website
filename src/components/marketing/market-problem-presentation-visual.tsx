import Image from "next/image";

const projectListPanelSrc = "/project-list-panel-blurred.jpg";

export function MarketProblemPresentationVisual() {
  return (
    <div
      className="market-problem-presentation-visual problem-list-panel relative min-h-[21rem] flex-1 overflow-hidden bg-white md:min-h-[27rem]"
      aria-label="Project list panel preview"
    >
      <Image
        src={projectListPanelSrc}
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 620px"
        className="problem-list-panel-image object-cover"
      />

      <div className="problem-list-panel-caption pointer-events-none absolute inset-x-4 bottom-4 rounded-full border border-[#eadfce]/90 bg-[#fffaf1]/88 px-4 py-2 text-center text-xs font-black text-[#2a241d] shadow-sm shadow-[#2a241d]/[0.04] backdrop-blur md:inset-x-5 md:bottom-5 md:text-sm">
        پروژه‌ها از حالت پراکنده به لیست قابل اقدام تبدیل می‌شوند
      </div>
    </div>
  );
}
