import type { Stage } from "./types";

export const STAGES: Stage[] = [
  {
    id: "pre-construction",
    faLabel: "طراحی و اخذ جواز",
    slug: "pre-construction",
    isMain: true,
  },
  {
    id: "demolition",
    faLabel: "تخریب و گودبرداری",
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
    faLabel: "اسکلت بندی",
    slug: "structure",
    isMain: true,
  },
  {
    id: "wall-building",
    faLabel: "دیوارچینی و سفت کاری",
    slug: "wall-building",
    isMain: true,
  },
  {
    id: "plaster",
    faLabel: "گچ و خاک و تاسیسات",
    slug: "plaster",
    isMain: true,
  },
  {
    id: "early-finishing",
    faLabel: "ابتدای نازک کاری",
    slug: "early-finishing",
    isMain: true,
  },
  {
    id: "finishing",
    faLabel: "نازک کاری و نما",
    slug: "finishing",
    isMain: true,
  },
  {
    id: "completion",
    faLabel: "ظریف کاری و پایان کار",
    slug: "completion",
    isMain: true,
  },
];
