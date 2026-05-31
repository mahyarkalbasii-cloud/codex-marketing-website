import type { Stage } from "./types";

export const STAGES: Stage[] = [
  {
    id: "pre-construction",
    faLabel: "طراحی و اخذ مجوزها",
    slug: "pre-construction",
    isMain: true,
  },
  {
    id: "demolition",
    faLabel: "گودبرداری و تجهیز کارگاه",
    slug: "demolition",
    isMain: true,
  },
  {
    id: "foundation",
    faLabel: "فونداسیون",
    slug: "foundation",
    isMain: true,
  },
  {
    id: "structure",
    faLabel: "اسکلت‌بندی",
    slug: "structure",
    isMain: true,
  },
  {
    id: "wall-building",
    faLabel: "دیوارچینی و سفت‌کاری",
    slug: "wall-building",
    isMain: true,
  },
  {
    id: "plaster",
    faLabel: "گچ و خاک",
    slug: "plaster",
    isMain: true,
  },
  {
    id: "installations",
    faLabel: "تاسیسات مکانیکی و برقی",
    slug: "installations",
    isMain: true,
  },
  {
    id: "early-finishing",
    faLabel: "ابتدای نازک‌کاری",
    slug: "early-finishing",
    isMain: true,
  },
  {
    id: "finishing",
    faLabel: "نازک‌کاری و نما",
    slug: "finishing",
    isMain: true,
  },
  {
    id: "completion",
    faLabel: "تحویل و پایان‌کار",
    slug: "completion",
    isMain: true,
  },
];
