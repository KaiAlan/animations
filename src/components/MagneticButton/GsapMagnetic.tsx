"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export default function GsapMagnetic({ children }: any) {
  const ref = useRef(null);

  let magnetic: any
    if(ref.current != null) {
        magnetic = (ref.current as unknown) as HTMLInputElement;
    }

  useEffect(() => {

    const xTo = gsap.quickTo(magnetic, "x", {duration: 1, ease: "elastic.out(1, 0.3)"})

        const yTo = gsap.quickTo(magnetic, "y", {duration: 1, ease: "elastic.out(1, 0.3)"})
    const mouseMove = (e:any) => {
        const { clientX, clientY } = e;

            const {height, width, left, top} = magnetic.getBoundingClientRect();

            const x = clientX - (left + width/2)

            const y = clientY - (top + height/2)

            xTo(x);

            yTo(y)
    };
    const mouseLeave = () => {
        gsap.to(magnetic, {x: 0, duration: 1})

            gsap.to(magnetic, {y: 0, duration: 1})

            xTo(0);

            yTo(0)
    };
    
    magnetic.addEventListener("mousemove", mouseMove);
    magnetic.addEventListener("mousemove", mouseLeave);

    return () => {
        magnetic.addEventListener("mousemove", mouseMove);
        magnetic.addEventListener("mousemove", mouseLeave);
    };
  }, []);
  return (
        <div ref={ref}>
            {children}
        </div>
    );
}
