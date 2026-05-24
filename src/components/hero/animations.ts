export type HeroLoopMode =
  | "idle"
  | "loading"
  | "filtering"
  | "selecting"
  | "showing-card"
  | "resetting";

export const heroLoop = {
  duration: 12000,
  filterStep: 3000,
  selectAt: 5000,
  cardHideAt: 8500,
  resetAt: 11200,
  pinStagger: 80,
  entryEase: "cubic-bezier(0.22, 1, 0.36, 1)",
  exitEase: "cubic-bezier(0.4, 0, 0.2, 1)",
} as const;
