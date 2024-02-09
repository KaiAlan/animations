'use client'

import ZoomParallaxMountains from "@/components/ZoomParallaxMountains";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const ZoomParallaxMountainsPage = () => {

    useEffect(() => {
        const lenis = new Lenis();
    
        function raf(time: any) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
    
        requestAnimationFrame(raf);
      }, []);

    return(
      <div>
        <h1>In Progress 🧑‍💻</h1>
        <ZoomParallaxMountains />
      </div>
    );
}

export default ZoomParallaxMountainsPage;