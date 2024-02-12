'use client'

import SlideScroll from '@/components/SlideScroll'
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const SlideScrollPage = () => {

    useEffect(() => {
        const lenis = new Lenis();
    
        const raf = (time: any) => {
          lenis.raf(time);
    
          requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
      }, []);
  return (
    <div>
        <SlideScroll />
    </div>
  )
}

export default SlideScrollPage