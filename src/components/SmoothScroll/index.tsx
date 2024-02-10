'use client'

import React, { useRef } from "react";
import Image from "next/image";
import styles from "./SmoothScroll.module.scss";

import Picture1 from "./assets/1.jpg";
import Picture2 from "./assets/2.jpg";
import Picture3 from "./assets/3.jpg";
import Picture4 from "./assets/4.png";
import Picture5 from "./assets/5.webp";
import Picture6 from "./assets/6.jpg";
import Picture7 from "./assets/7.webp";
import Picture8 from "./assets/8.jpg";
import Picture9 from "./assets/9.jpg";
import Picture10 from "./assets/10.jpg";
import { useScroll, useTransform, motion } from "framer-motion";
import useDimension from "./useDimension";

const images = [
  Picture1,
  Picture2,
  Picture3,
  Picture4,
  Picture5,
  Picture6,
  Picture7,
  Picture8,
  Picture9,
  Picture10,
  Picture4,
  Picture5,
];

const SmoothScroll = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })
  const {height} = useDimension();

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  return (
    <main className={styles.main}>

      <div ref={container} className={styles.gallery}>
        <div className={styles.galleryWrapper}>
          <Column images={[images[0], images[1], images[2]]} y={y} />

          <Column images={[images[5], images[4], images[5]]} y={y2} />

          <Column images={[images[6], images[7], images[8]]} y={y3} />

          <Column images={[images[9], images[10], images[11]]} y={y4} />
        </div>
      </div>

      <div className={styles.spacer}></div>
    </main>
  );
};

export default SmoothScroll;

const Column = ({ images, y=0 }: any) => {
  return (
    <motion.div style={{y}} className={styles.column}>
      {images.map((src: any, i: number) => {
        return (
          <div key={i} className={styles.imageContainer}>
            <Image src={src} alt="image" fill />
          </div>
        );
      })}
    </motion.div>
  );
};
