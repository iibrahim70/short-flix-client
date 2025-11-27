"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ReactLenis, LenisRef } from "lenis/react";

export const SmoothScrolling = ({ children }: { children: ReactNode }) => {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis root options={{ duration: 1.5, autoRaf: false }} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
};
