"use client";

import Picture1 from "./assets/p-1-1.png";
import Picture2 from "./assets/p-1-2.png";
import Picture3 from "./assets/p-1-3.png";
import Picture4 from "./assets/p-1-4.png";
import Picture5 from "./assets/p-1-5.png";
import Picture6 from "./assets/p-1-6.png";
import Picture7 from "./assets/p-1-7.png";
import Picture8 from "./assets/p-1-8.png";

import { useRef } from "react";
import Image from "next/image";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
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
];

const SlideScroll = () => {
  const scene = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ["start start", "center end"],
  });

  // const { height } = useDimension();

  const x = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   const transformer = transform([0, 100], [0, 360]);
//   const rotation = transformer(20);

  // const rotate = transformer(50)


  return (
    <main className="h-full w-full flex flex-col justify-center items-center relative">
      <div
        ref={scene}
        className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
      >
        {/* <div className='h-screen w-full'> */}
        <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
          <h1 className=" text-2xl md:text-7xl font-bold">
            I have made <br /> Some cool projects
          </h1>
          <p className="max-w-2xl text-base md:text-xl mt-8 text-white">
            With React, Next.js, TailwindCSS, Framer Motion,Firebase, and more.
            The backend ranges from Node, Express, MongoDB, GraphQL, SQL and
            more.
          </p>
        </div>
        {/* </div> */}
        <motion.div
          initial={{ opacity: 0.2, rotateX: 50, rotateY: 10, rotateZ: 30, translateY: -1200 }}
          whileInView={{ opacity: 1, rotateX: 0, rotateZ: 0, translateY: 500}}
          transition={{ duration: x, ease: "easeInOut" }}
          viewport={{root: scene}}
        >
          <SlideScrollDiv />
        </motion.div>
      </div>
      {/* <div className='h-screen w-full'/> */}
    </main>
  );
};

export default SlideScroll;

const SlideScrollDiv = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["center end", "end start"],
  });

  const { height } = useDimension();

  const x1 = useTransform(scrollYProgress, [0, 1], [0, height / 2]);
  const x2 = useTransform(scrollYProgress, [1, 0], [0, height / 2]);
  return (
    <div
      ref={container}
      className="flex flex-col justify-center items-center w-full border gap-10"
    >
      <Row
        images={[
          images[3],
          images[0],
          images[1],
          images[2],
          images[3],
          images[0],
        ]}
        x={x1}
      />
      <Row
        images={[
          images[7],
          images[4],
          images[5],
          images[6],
          images[7],
          images[4],
        ]}
        x={x2}
      />
    </div>
  );
};

const Row = ({ images, x = 0 }: any) => {
  return (
    <div className="flex h-1/3 w-full border rounded-lg overflow-hidden">
      <motion.div
        style={{ x }}
        className="flex justify-center items-center gap-10 h-full w-full bg-transparent relative -left-2/4 "
      >
        {images.map((src: any, i: number) => {
          return (
            <Image
              src={src}
              alt="image"
              objectFit="cover"
              placeholder="blur"
              className="h-full w-1/3 border rounded-lg hover:-translate-y-5 hover:scale-110 hover:ease-in-out hover:duration-500"
            />
          );
        })}
      </motion.div>
    </div>
  );
};
