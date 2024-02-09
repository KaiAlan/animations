import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion';

const FramerMagnetic = ({children}: any) => {

    const ref = useRef(null);
    const [position, setPosition] = useState({x:0, y:0});

    let magnetic: HTMLInputElement
    if(ref.current != null) {
        magnetic = (ref.current as unknown) as HTMLInputElement;
    }

    const mouseMove = (e: any) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = magnetic.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({x, y})
    }

    const mouseLeave = (e: any) => {
        setPosition({x:0, y:0})
    }

    const {x, y} = position;
  return (
    <motion.div
    onMouseMove={mouseMove}
    onMouseLeave={mouseLeave}
    ref={ref}
    animate={{x, y}}
    transition={{type: 'spring', stiffness: 150, damping: 15, mass: 0.1}}
    >
        {
            children
        }
    </motion.div>
  )
}

export default FramerMagnetic