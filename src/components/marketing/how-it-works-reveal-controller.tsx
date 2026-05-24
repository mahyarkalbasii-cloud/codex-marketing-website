"use client";

import { useEffect } from "react";

export function HowItWorksRevealController() {
  useEffect(() => {
    const section = document.getElementById("how-it-works");

    if (!section) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    section.dataset.howWorksReady = "true";
    delete section.dataset.howWorksSettled;

    if (prefersReducedMotion) {
      section.dataset.howWorksRevealed = "true";
      section.dataset.howWorksSettled = "true";
      return;
    }

    section.dataset.howWorksRevealed = "false";
    let settleTimer: number | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        section.dataset.howWorksRevealed = "true";
        settleTimer = window.setTimeout(() => {
          section.dataset.howWorksSettled = "true";
        }, 980);
        observer.disconnect();
      },
      { threshold: 0.25 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      if (settleTimer) {
        window.clearTimeout(settleTimer);
      }
    };
  }, []);

  return null;
}
