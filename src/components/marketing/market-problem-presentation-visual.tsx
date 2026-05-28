import { RadarMapVisual } from "@/components/marketing/RadarMapVisual";

export function MarketProblemPresentationVisual() {
  return (
    <RadarMapVisual
      className="market-problem-presentation-visual problem-radar-visual aspect-auto min-h-[21rem] max-h-none flex-1 rounded-none border-0 p-3 shadow-none md:min-h-[27rem] lg:min-h-0"
      idPrefix="problem-radar"
    />
  );
}
