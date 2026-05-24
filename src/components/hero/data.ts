export type ConstructionStage = "گودبرداری" | "اسکلت" | "نازک‌کاری";
export type FilterStage = "همه مراحل" | ConstructionStage;

export type HeroProjectPin = {
  id: string;
  area: string;
  stage: ConstructionStage;
  floors: string;
  x: number;
  y: number;
};

export const filterStages: FilterStage[] = [
  "همه مراحل",
  "گودبرداری",
  "اسکلت",
  "نازک‌کاری",
];

export const heroProjectPins: HeroProjectPin[] = [
  {
    id: "velenjak",
    area: "ولنجک",
    stage: "نازک‌کاری",
    floors: "۶ طبقه",
    x: 24,
    y: 25,
  },
  {
    id: "zaferanieh",
    area: "زعفرانیه",
    stage: "اسکلت",
    floors: "۸ طبقه",
    x: 36,
    y: 22,
  },
  {
    id: "niavaran",
    area: "نیاوران",
    stage: "نازک‌کاری",
    floors: "۹ طبقه",
    x: 68,
    y: 24,
  },
  {
    id: "aghdasieh",
    area: "اقدسیه",
    stage: "گودبرداری",
    floors: "۶ طبقه",
    x: 82,
    y: 32,
  },
  {
    id: "farmanieh",
    area: "فرمانیه",
    stage: "اسکلت",
    floors: "۸ طبقه",
    x: 61,
    y: 38,
  },
  {
    id: "pasdaran",
    area: "پاسداران",
    stage: "گودبرداری",
    floors: "۱۰ طبقه",
    x: 73,
    y: 55,
  },
  {
    id: "jordan",
    area: "جردن",
    stage: "اسکلت",
    floors: "۶ طبقه",
    x: 51,
    y: 62,
  },
  {
    id: "saadatabad",
    area: "سعادت‌آباد",
    stage: "نازک‌کاری",
    floors: "۷ طبقه",
    x: 39,
    y: 51,
  },
  {
    id: "vanak",
    area: "ونک",
    stage: "گودبرداری",
    floors: "۴ طبقه",
    x: 44,
    y: 72,
  },
  {
    id: "ekbatan",
    area: "اکباتان",
    stage: "گودبرداری",
    floors: "۵ طبقه",
    x: 16,
    y: 65,
  },
];

export const defaultSelectedPinId = "saadatabad";
