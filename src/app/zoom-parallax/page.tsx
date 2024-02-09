"use client";

import ZoomParallax from "@/components/ZoomParallax";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const ZoomParallaxPage = () => {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <ZoomParallax />
    </div>
  );
};

export default ZoomParallaxPage;
