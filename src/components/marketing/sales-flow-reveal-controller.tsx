"use client";

import { useEffect } from "react";

export function SalesFlowRevealController() {
  useEffect(() => {
    const section = document.getElementById("sales-flow");

    if (!section) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    section.dataset.salesFlowReady = "true";

    if (prefersReducedMotion) {
      section.dataset.salesFlowRevealed = "true";
      return;
    }

    section.dataset.salesFlowRevealed = "false";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        section.dataset.salesFlowRevealed = "true";
        observer.disconnect();
      },
      { threshold: 0.25 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return null;
}
