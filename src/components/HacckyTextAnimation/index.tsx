"use client";

import { useRef } from "react";
import { HackkyTextData } from "./hacckyTextData";

const HacckyTextAnimation = () => {
  const targetElementRefs = useRef([null]);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const handleMouseEnter = (index: any) => {
    const targetElement = targetElementRefs.current[index];
    // @ts-ignore: Object is possibly 'null'.
    const originalText = targetElement.innerText;
    let iteration = 0;
    const interval = setInterval(() => {
      // @ts-ignore: Object is possibly 'null'.
      targetElement.innerText = originalText
        .split("")
        .map((letter: any, index: any) => {
          if (index < iteration) {
            // @ts-ignore: Object is possibly 'null'.
            return targetElement.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= originalText.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 20);
  };

  return (
      <div className=" flex flex-col justify-center items-center gap-6 p-4">
        <ul className="gap-10 w-full">
          {HackkyTextData.map((value, index) => (
            <li
              key={value.id}
              onMouseEnter={() => handleMouseEnter(index)}
              className="flex justify-between items-center text-lg md:text-xl opacity-30 hover:opacity-100 border-b border-gray-500 border-opacity-30 w-full h-20 px-10"
            >
              <p className="w-[calc(100%/12)] hidden md:inline-block">
                {value.id}
              </p>
              <p className="w-[calc((100%/12)*2)]">{value.realese_year}</p>
              <h2
                className="text-lg md:text-xl font-semibold w-[calc((100%/12)*4)]"
                data-value={value.name}
                // @ts-ignore: Object is possibly 'null'.
                ref={(el) => (targetElementRefs.current[index] = el)}
              >
                {value.name}
              </h2>
              <span className="w-[calc((100%/12)*4)] hidden md:inline-block text-lg md:text-xl">
                {value.genre}
              </span>
              <div className="w-[calc((100%/12)*1)]">
                <a
                  href={value.url}
                  target="_blank"
                  className=" w-8 h-8 flex justify-center items-center rounded-full bg-white bg-opacity-20"
                >
                  <svg
                    width="1.25rem"
                    height="1.25rem"
                    viewBox="0 0 16 16"
                    fill="none"
                    name="iconArrow"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4H12.75ZM11.25 10C11.25 10.4142 11.5858 10.75 12 10.75C12.4142 10.75 12.75 10.4142 12.75 10H11.25ZM11.25 4V10H12.75V4H11.25Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M12 4.75C12.4142 4.75 12.75 4.41421 12.75 4C12.75 3.58579 12.4142 3.25 12 3.25L12 4.75ZM6 3.25C5.58579 3.25 5.25 3.58579 5.25 4C5.25 4.41421 5.58579 4.75 6 4.75L6 3.25ZM12 3.25L6 3.25L6 4.75L12 4.75L12 3.25Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M12.5303 4.53033C12.8232 4.23744 12.8232 3.76256 12.5303 3.46967C12.2374 3.17678 11.7626 3.17678 11.4697 3.46967L12.5303 4.53033ZM3.46967 11.4697C3.17678 11.7626 3.17678 12.2374 3.46967 12.5303C3.76256 12.8232 4.23744 12.8232 4.53033 12.5303L3.46967 11.4697ZM11.4697 3.46967L3.46967 11.4697L4.53033 12.5303L12.5303 4.53033L11.4697 3.46967Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
  );
};

export default HacckyTextAnimation;
