import type { Stage } from "./types";

export const STAGES: Stage[] = [
  {
    id: "pre-construction",
    faLabel: "پیش از ساخت / مرحله وابسته به تصمیم",
    slug: "pre-construction",
    isMain: false,
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
    faLabel: "اسکلت‌بندی",
    slug: "structure",
    isMain: true,
  },
  {
    id: "wall-building",
    faLabel: "دیوارچینی",
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
    id: "early-finishing",
    faLabel: "ابتدای نازک‌کاری",
    slug: "early-finishing",
    isMain: true,
  },
  {
    id: "finishing",
    faLabel: "نازک‌کاری",
    slug: "finishing",
    isMain: true,
  },
  {
    id: "completion",
    faLabel: "ظریف‌کاری و پایان کار",
    slug: "completion",
    isMain: true,
  },
];
