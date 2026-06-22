"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type ParallaxHeroImageProps = {
  src: string;
  alt: string;
};

export function ParallaxHeroImage({ src, alt }: ParallaxHeroImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!image || motionQuery.matches) {
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const offset = Math.min(42, window.scrollY * 0.12);
      image.style.transform = `translate3d(0, ${offset}px, 0) scale(1.08)`;
    };

    const onScroll = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <Image
      ref={imageRef}
      src={src}
      alt={alt}
      fill
      className="hero-parallax-image object-cover brightness-[0.72] saturate-[0.92]"
      priority
      sizes="100vw"
    />
  );
}
