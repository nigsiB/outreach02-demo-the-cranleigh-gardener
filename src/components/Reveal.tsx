"use client";

import { useEffect } from "react";

export function Reveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>(".reveal-build"));
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!items.length) {
      return;
    }

    if (motionQuery.matches || !("IntersectionObserver" in window)) {
      items.forEach((item) => {
        item.dataset.reveal = "visible";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const target = entry.target as HTMLElement;
          target.dataset.reveal = "visible";
          observer.unobserve(target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.16 },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return null;
}
