"use client";

import { useEffect } from "react";

export function SolutionRevealController() {
  useEffect(() => {
    const section = document.getElementById("solution");

    if (!section) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    section.dataset.solutionReady = "true";

    if (prefersReducedMotion) {
      section.dataset.solutionRevealed = "true";
      return;
    }

    section.dataset.solutionRevealed = "false";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        section.dataset.solutionRevealed = "true";
        observer.disconnect();
      },
      { threshold: 0.3 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return null;
}
