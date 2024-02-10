'use client'

import Picture1 from './assets/1.jpg'
import Picture2 from './assets/2.jpg'
import Picture3 from './assets/3.jpg'
import Picture4 from './assets/4.jpg'
import Picture5 from './assets/5.jpg'
import Picture6 from './assets/6.jpg'
import Picture7 from './assets/7.jpg'
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './styles.module.scss';

import Image from 'next/image'
import { useRef } from 'react';

const ZoomParallax = () => {


  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

  const pictures = [
    {
      src: Picture1,
      scale: scale6,
    },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture3,
      scale: scale4,
    },
    {
      src: Picture4,
      scale: scale5,
    },
    {
      src: Picture5,
      scale: scale6,
    },
    {
      src: Picture6,
      scale: scale8,
    },
    {
      src: Picture7,
      scale: scale9,
    },
  ]
  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {
          pictures.map(({src, scale}, index) => {
            return <motion.div
            style={{scale: scale}}
            key={index}
            className={styles.el}>
            <div className={styles.imageContainer}>
              <Image
                src={src}
                fill
                alt='image-3'
                placeholder='blur'
                className='object-cover'
              />
            </div>
          </motion.div>
          })
        }
        
      </div>
    </div>
  )
}

export default ZoomParallax