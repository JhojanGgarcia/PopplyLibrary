"use client";

import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import { animationCodeCopy } from "../components/content/animationCodeCopy";
import { copyCopiedTxt } from "../components/content/animationCodeCopy";
import { tooltipContent } from "../components/content/animationCodeCopy";
import { motion } from "framer-motion";
import "../styles/linearOverlay.css";
export const TooltipContent = () => {
  const [isOpenTooltip, setIsOpenTooltip] = useState(
    new Array(tooltipContent.length).fill(false)
  );
  const [copy, setCopy] = useState(
    tooltipContent.map((tooltip) => tooltip.css)
  );

  const [isAnimationTooltipOpen, setIsAnimationTooltipOpen] = useState({});

  const handleMouseEnterForAnimationEvent = (index) => {
    setIsAnimationTooltipOpen((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  const handleCopy = (index) => {
    navigator.clipboard.writeText(tooltipContent[index].css);
    if (copy) {
      toast.success(`${tooltipContent[index].name} copied successfully`);
    }
    setCopy((prev) => {
      const newCopy = [...prev];
      newCopy[index] = true;
      return newCopy;
    });
    setTimeout(() => {
      setCopy((prev) => {
        const newCopy = [...prev];
        newCopy[index] = false;
        return newCopy;
      });
    }, 100);
  };

  const handleMouseLeaveForAnimationEvent = (index) => {
    setIsAnimationTooltipOpen((prev) => ({
      ...prev,
      [index]: false,
    }));
  };

  const handleMouseEnter = (index) => {
    setIsOpenTooltip((prev) => {
      const newIsOpenTooltip = [...prev];
      newIsOpenTooltip[index] = true;
      return newIsOpenTooltip;
    });
  };

  const handleMouseLeave = (index) => {
    setIsOpenTooltip((prev) => {
      const newIsOpenTooltip = [...prev];
      newIsOpenTooltip[index] = false;
      return newIsOpenTooltip;
    });
  };

  return (
    <>
      <Toaster />
      <motion.div className="grid border-t w-screen rounded-3xl  dark:border-white/20 min-h-screen mt-28 place-items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {tooltipContent.map((tooltip, index) => (
          <div key={index} className="relative">
            <motion.div
              initial={{ "--x": "100%", scale: 1 }}
              animate={{ "--x": "-100%" }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 1,
                type: "spring",
                stiffness: 20,
                damping: 15,
                mass: 2,
              }}
              className={`min-h-[300px] w-[300px]  group dark:border-white/10 shadow-[0_0px_30px_rgba(0,0,0,0.2)]  duration-200 relative overflow-hidden backdrop-blur-2xl  transition  my-5 rounded-3xl flex items-center justify-center`}
            >
              <span className="block  absolute inset-0 rounded-3xl p-[1.5px]  linear-overlay " />
              <div className="w-[50px] h-[50px]   bg-lotus-primary-700 blur-2xl group-hover:-translate-x-48 group-hover:translate-y-48 transition-all duration-700 z-0 absolute top-0 right-0"></div>
              <div className="w-[50px] h-[50px] bg-lotus-primary-900 blur-2xl group-hover:translate-x-48 group-hover:-translate-y-48 transition-all duration-700 z-0 absolute bottom-0 left-0"></div>
              <h1 className="absolute select-none font-medium dark:text-white top-1">
                {tooltip.name}
              </h1>
              {animationCodeCopy.map((_, tooltipIndex) => (
                <div
                  className="absolute top-2  right-2  p-px bg-gradient-to-br from-black/50 to-transparent rounded-xl  cursor-pointer"
                  key={tooltipIndex}
                >
                  <div class="bg-gray-50 dark:bg-transparent  rounded-[calc(6rem-85px)] p-2">
                    <div
                      onMouseEnter={() =>
                        handleMouseEnterForAnimationEvent(index)
                      }
                      onMouseLeave={() =>
                        handleMouseLeaveForAnimationEvent(index)
                      }
                      onClick={() => handleCopy(index)}
                    >
                      {!copy[index] ? (
                        <motion.svg
                          className=" dark:text-white"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          color="#000000"
                          fill="none"
                        >
                          <path
                            d="M9 15C9 12.1716 9 10.7574 9.87868 9.87868C10.7574 9 12.1716 9 15 9L16 9C18.8284 9 20.2426 9 21.1213 9.87868C22 10.7574 22 12.1716 22 15V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15C12.1716 22 10.7574 22 9.87868 21.1213C9 20.2426 9 18.8284 9 16L9 15Z"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <motion.path
                            animate={{ rotate: [0, 360] }}
                            d="M16.9999 9C16.9975 6.04291 16.9528 4.51121 16.092 3.46243C15.9258 3.25989 15.7401 3.07418 15.5376 2.90796C14.4312 2 12.7875 2 9.5 2C6.21252 2 4.56878 2 3.46243 2.90796C3.25989 3.07417 3.07418 3.25989 2.90796 3.46243C2 4.56878 2 6.21252 2 9.5C2 12.7875 2 14.4312 2.90796 15.5376C3.07417 15.7401 3.25989 15.9258 3.46243 16.092C4.51121 16.9528 6.04291 16.9975 9 16.9999"
                            stroke="#888888"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </motion.svg>
                      ) : (
                        <svg
                          className=" dark:text-white"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          color="#000000"
                          fill="none"
                        >
                          <path
                            d="M9 15C9 12.1716 9 10.7574 9.87868 9.87868C10.7574 9 12.1716 9 15 9L16 9C18.8284 9 20.2426 9 21.1213 9.87868C22 10.7574 22 12.1716 22 15V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15C12.1716 22 10.7574 22 9.87868 21.1213C9 20.2426 9 18.8284 9 16L9 15Z"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M16.9999 9C16.9975 6.04291 16.9528 4.51121 16.092 3.46243C15.9258 3.25989 15.7401 3.07418 15.5376 2.90796C14.4312 2 12.7875 2 9.5 2C6.21252 2 4.56878 2 3.46243 2.90796C3.25989 3.07417 3.07418 3.25989 2.90796 3.46243C2 4.56878 2 6.21252 2 9.5C2 12.7875 2 14.4312 2.90796 15.5376C3.07417 15.7401 3.25989 15.9258 3.46243 16.092C4.51121 16.9528 6.04291 16.9975 9 16.9999"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      )}
                      {copyCopiedTxt.map((_, txtIndex) => (
                        <div
                          onMouseEnter={() => handleMouseEnter(txtIndex)}
                          onMouseLeave={() => handleMouseLeave(txtIndex)}
                          key={txtIndex}
                          className="flex items-center  justify-center"
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <div
                className="flex relative text-nowrap dark:text-white items-center justify-center "
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                {tooltip.tooltipContainer && tooltip.tooltipContainer()}
                {isOpenTooltip[index] && (
                  <>{tooltip.tooltipSample && tooltip.tooltipSample()}</>
                )}  
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </>
  );
};
