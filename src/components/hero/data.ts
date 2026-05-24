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
    stage: "گودبرداری",
    floors: "۶ طبقه",
    x: 18,
    y: 23,
  },
  {
    id: "zaferanieh",
    area: "زعفرانیه",
    stage: "اسکلت",
    floors: "۸ طبقه",
    x: 34,
    y: 18,
  },
  {
    id: "ekbatan",
    area: "اکباتان",
    stage: "گودبرداری",
    floors: "۵ طبقه",
    x: 14,
    y: 57,
  },
  {
    id: "saadatabad",
    area: "سعادت‌آباد",
    stage: "نازک‌کاری",
    floors: "۷ طبقه",
    x: 45,
    y: 52,
  },
  {
    id: "niavaran",
    area: "نیاوران",
    stage: "اسکلت",
    floors: "۹ طبقه",
    x: 68,
    y: 20,
  },
  {
    id: "aghdasieh",
    area: "اقدسیه",
    stage: "نازک‌کاری",
    floors: "۶ طبقه",
    x: 84,
    y: 31,
  },
  {
    id: "pasdaran",
    area: "پاسداران",
    stage: "اسکلت",
    floors: "۱۰ طبقه",
    x: 74,
    y: 61,
  },
  {
    id: "farmanieh",
    area: "فرمانیه",
    stage: "نازک‌کاری",
    floors: "۸ طبقه",
    x: 58,
    y: 38,
  },
  {
    id: "jordan",
    area: "جردن",
    stage: "اسکلت",
    floors: "۶ طبقه",
    x: 53,
    y: 73,
  },
  {
    id: "vanak",
    area: "ونک",
    stage: "گودبرداری",
    floors: "۴ طبقه",
    x: 31,
    y: 72,
  },
  {
    id: "yousefabad",
    area: "یوسف‌آباد",
    stage: "گودبرداری",
    floors: "۷ طبقه",
    x: 23,
    y: 41,
  },
  {
    id: "shahrak-gharb",
    area: "شهرک غرب",
    stage: "نازک‌کاری",
    floors: "۹ طبقه",
    x: 82,
    y: 78,
  },
];

export const defaultSelectedPinId = "saadatabad";
