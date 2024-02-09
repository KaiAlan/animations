'use client'

import Picture1 from './assets/1.png'
import Picture2 from './assets/2.png'
import Picture3 from './assets/3.png'
import Picture4 from './assets/4.png'
import Picture5 from './assets/5.png'
import Picture6 from './assets/6.png'
import Picture7 from './assets/7.png'

import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './styles.module.scss';

import Image from 'next/image'
import { useRef } from 'react';


const ZoomParallaxMountains = () => {

    const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 1])
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 2])
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 3])
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
  const scale10 = useTransform(scrollYProgress, [0, 1], [1, 10])
  const scale12 = useTransform(scrollYProgress, [0, 1], [1, 12])
  const scale15 = useTransform(scrollYProgress, [0, 1], [1, 15])
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
  const scale30 = useTransform(scrollYProgress, [0, 1], [1, 30])

  const pictures = [
    {
      src: Picture1,
      scale: scale2,
      anim: {
        
      }
    },
    {
      src: Picture2,
      scale: scale2,
      anim: {
        
      }
    },
    {
      src: Picture3,
      scale: scale6,
      anim: {
        
      }
    },
    {
      src: Picture4,
      scale: scale6,
      anim: {
        
      }
    },
    {
      src: Picture5,
      scale: scale2,
      anim: {

      }
    },
    {
      src: Picture6,
      scale: scale12,
      anim: {
        
      }
    },
    {
      src: Picture7,
      scale: scale15,
      anim: {
        
      }
    },
  ]

    return(
        <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {
          pictures.map(({src, scale, anim}, index) => {
            return <motion.div
            style={{scale: scale}}
            key={index}
            className={styles.el}>
            <motion.div
            {...anim}
            className={styles.imageContainer}>
              <Image
                src={src}
                fill
                alt='image-3'
                placeholder='blur'
                className='object-cover'
              />
            </motion.div>
          </motion.div>
          })
        }    
      </div>
    </div>
    )
}

export default ZoomParallaxMountains;