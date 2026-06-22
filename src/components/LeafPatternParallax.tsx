"use client";

import { useEffect, useRef } from "react";

export function LeafPatternParallax() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!layer || motionQuery.matches) {
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = layer.getBoundingClientRect();
      const viewportOffset = rect.top - window.innerHeight * 0.5;
      const offset = Math.max(-56, Math.min(56, viewportOffset * -0.14));
      layer.style.transform = `translate3d(0, ${offset}px, 0)`;
    };

    const onScroll = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div className="leaf-pattern-gap" aria-hidden="true">
      <div ref={layerRef} className="leaf-pattern-layer">
        <div className="leaf-pattern-stripe leaf-pattern-stripe-a" />
        <div className="leaf-pattern-stripe leaf-pattern-stripe-b" />
      </div>
    </div>
  );
}
