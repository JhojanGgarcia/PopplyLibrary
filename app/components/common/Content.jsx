"use client";

import React, { useState, useEffect, useRef } from "react";
import { Toaster, toast } from "sonner";
import { animationCodeCopy } from "../../utils/animationCodeCopy";
import { tooltipContent } from "../../utils/animationCodeCopy";
import { motion } from "framer-motion";
import { CodeBlock } from "../CodeBlock";

export const TooltipContent = () => {
  const [isOpenTooltip, setIsOpenTooltip] = useState(
    new Array(tooltipContent.length).fill(false)
  );
  const [copy, setCopy] = useState(
    tooltipContent.map((tooltip) => tooltip.css)
  );
  const [openModals, setOpenModals] = useState({});

  const [isAnimationTooltipOpen, setIsAnimationTooltipOpen] = useState({});

  const handleOpenModal = (index) => {
    setOpenModals((prevOpenModals) => ({ ...prevOpenModals, [index]: true }));
  };

  const handleCloseModal = (index) => {
    setOpenModals((prevOpenModals) => ({ ...prevOpenModals, [index]: false }));
  };
  const handleMouseEnterForAnimationEvent = (index) => {
    setIsAnimationTooltipOpen((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  const codeToDisplay = tooltipContent.map((code, idxCode) => code.css);

  const handleCopy = (index) => {
    navigator.clipboard.writeText(tooltipContent[index].css);

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

  const modalRef = useRef(null);

  const handleMouseLeave = (index) => {
    setIsOpenTooltip((prev) => {
      const newIsOpenTooltip = [...prev];
      newIsOpenTooltip[index] = false;
      return newIsOpenTooltip;
    });
  };

  const handleToggleTooltip = (index) => {
    setIsOpenTooltip((prev) => {
      const newIsOpenTooltip = [...prev];
      newIsOpenTooltip[index] = !newIsOpenTooltip[index];
      return newIsOpenTooltip;
    });
    setTimeout(() => {
      setIsOpenTooltip((prev) => {
        const newIsOpenTooltip = [...prev];
        newIsOpenTooltip[index] = false;
        return newIsOpenTooltip;
      });
    }, 1500);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        Object.keys(openModals).forEach((index) => {
          if (openModals[index]) {
            handleCloseModal(index);
          }
        });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openModals]);

  return (
    <motion.div className="grid border-t w-screen relative dark:border-white/10 min-h-screen mt-20 place-items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-x-16 ">
      <span className="absolute -top-[1px] mx-auto  w-[200px] inset-x-1 h-px bg-gradient-to-r from-fuchsia-400/0 via-white/10 to-fuchsia-400/0"></span>
      {tooltipContent.map((tooltip, index) => (
        <div key={index} className="max-w-xl">
          <div
            className={`min-h-[200px] w-[300px] dark:border-white/10 bg-[radial-gradient(circle_at_top,rgba(100,100,100,0.2)_0%,transparent_90%)]  relative overflow-hidden backdrop-blur-2xl border border-white/20 my-5 rounded-2xl flex items-center justify-center`}
          >
            <h1 className="absolute select-none text-sm dark:text-white/50 border border-white/20 rounded-lg px-2 top-2 left-2">
              {tooltip.name}
            </h1>
            <button
              onClick={() => handleOpenModal(index)}
              className="absolute flex bottom-2 right-3 gap-1 transform-gpu select-none place-content-center text-nowrap rounded-lg px-4 py-2 font-medium text-xs tracking-tighter transition-all duration-100
                  bg-gradient-to-b from-neutral-200 to-neutral-200/50 text-neutral-800 dark:from-neutral-950 dark:to-neutral-950/65 dark:text-neutral-300
        
                  dark:shadow-[0_1.5px_0.5px_2.5px_rgba(0,0,0,0.4),_0_0_0.5px_1px_rgba(0,0,0,1),_inset_0_-20px_1px_1px_rgba(0,0,0,0.25),_inset_0_1px_1px_1px_rgba(255,255,255,0.2)]
                  dark:hover:shadow-[0_0_0_0_rgba(0,0,0,0),_0_0_0.5px_1px_rgba(0,0,0,1),_inset_0_2px_1px_1px_rgba(0,0,0,0.25),_inset_0_1px_1px_0_rgba(255,255,255,0.15)]
                  hover:shadow-[0_0_0_0_rgba(0,0,0,0),_0_0_0.5px_1px_rgba(0,0,0,0.25),_inset_0_1px_0.5px_0.5px_rgba(255,255,255,0.4),_inset_0_1px_1px_1px_rgba(255,255,255,0.8)]
                  active:shadow-[0_0_0_0_rgba(0,0,0,0),_0_0_1px_1px_rgba(0,0,0,0.15),_inset_0_1px_0.5px_0.5px_rgba(0,0,0,0.3),_inset_0_1.5px_1.5px_1.5px_rgba(255,255,255,0.6)]
                  dark:active:shadow-[0_0_0_0_rgba(0,0,0,0),_0_0_1px_1px_rgba(0,0,0,1),_inset_0_2px_2px_1px_rgba(0,0,0,1),_inset_0_2px_2px_0_rgba(255,255,255,0.1)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-terminal"
              >
                <polyline points="4 17 10 11 4 5" />
                <line x1="12" x2="20" y1="19" y2="19" />
              </svg>
              Code
            </button>
            <button
              onClick={() => handleToggleTooltip(index)}
              className="absolute left-2 bottom-2 text-white "
            >
              {isOpenTooltip[index] ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  opacity={0.2}
                  height="20"
                  color="#fff"
                  fill="none"
                  scale={1}
                >
                  <path
                    d="M15.1667 0.999756L15.7646 2.11753C16.1689 2.87322 16.371 3.25107 16.2374 3.41289C16.1037 3.57471 15.6635 3.44402 14.7831 3.18264C13.9029 2.92131 12.9684 2.78071 12 2.78071C6.75329 2.78071 2.5 6.90822 2.5 11.9998C2.5 13.6789 2.96262 15.2533 3.77093 16.6093M8.83333 22.9998L8.23536 21.882C7.83108 21.1263 7.62894 20.7484 7.7626 20.5866C7.89627 20.4248 8.33649 20.5555 9.21689 20.8169C10.0971 21.0782 11.0316 21.2188 12 21.2188C17.2467 21.2188 21.5 17.0913 21.5 11.9998C21.5 10.3206 21.0374 8.74623 20.2291 7.39023"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  opacity={0.5}
                  height="20"
                  color="#fff"
                  fill="none"
                >
                  <path
                    d="M15.1667 0.999756L15.7646 2.11753C16.1689 2.87322 16.371 3.25107 16.2374 3.41289C16.1037 3.57471 15.6635 3.44402 14.7831 3.18264C13.9029 2.92131 12.9684 2.78071 12 2.78071C6.75329 2.78071 2.5 6.90822 2.5 11.9998C2.5 13.6789 2.96262 15.2533 3.77093 16.6093M8.83333 22.9998L8.23536 21.882C7.83108 21.1263 7.62894 20.7484 7.7626 20.5866C7.89627 20.4248 8.33649 20.5555 9.21689 20.8169C10.0971 21.0782 11.0316 21.2188 12 21.2188C17.2467 21.2188 21.5 17.0913 21.5 11.9998C21.5 10.3206 21.0374 8.74623 20.2291 7.39023"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </button>
            {animationCodeCopy.map((_, tooltipIndex) => (
              <div
                className="absolute top-2  right-2  p-px bg-gradient-to-br from-black/50 to-transparent rounded-xl  cursor-pointer"
                key={tooltipIndex}
              >
                <div className="bg-gray-50 dark:bg-transparent  rounded-[calc(6rem-85px)] p-2">
                  <button
                    onClick={() => handleCopy(index)}
                    className="absolute right-1 top-0 grid transform-gpu select-none place-content-center text-nowrap rounded-lg px-4 py-2 font-medium text-xs tracking-tighter transition-all duration-100
                  bg-gradient-to-b from-neutral-200 to-neutral-200/50 text-neutral-800 dark:from-neutral-950 dark:to-neutral-950/65 dark:text-neutral-300
        
                  dark:shadow-[0_1.5px_0.5px_2.5px_rgba(0,0,0,0.4),_0_0_0.5px_1px_rgba(0,0,0,1),_inset_0_-20px_1px_1px_rgba(0,0,0,0.25),_inset_0_1px_1px_1px_rgba(255,255,255,0.2)]
                  dark:hover:shadow-[0_0_0_0_rgba(0,0,0,0),_0_0_0.5px_1px_rgba(0,0,0,1),_inset_0_2px_1px_1px_rgba(0,0,0,0.25),_inset_0_1px_1px_0_rgba(255,255,255,0.15)]
                  hover:shadow-[0_0_0_0_rgba(0,0,0,0),_0_0_0.5px_1px_rgba(0,0,0,0.25),_inset_0_1px_0.5px_0.5px_rgba(255,255,255,0.4),_inset_0_1px_1px_1px_rgba(255,255,255,0.8)]
                  active:shadow-[0_0_0_0_rgba(0,0,0,0),_0_0_1px_1px_rgba(0,0,0,0.15),_inset_0_1px_0.5px_0.5px_rgba(0,0,0,0.3),_inset_0_1.5px_1.5px_1.5px_rgba(255,255,255,0.6)]
                  dark:active:shadow-[0_0_0_0_rgba(0,0,0,0),_0_0_1px_1px_rgba(0,0,0,1),_inset_0_2px_2px_1px_rgba(0,0,0,1),_inset_0_2px_2px_0_rgba(255,255,255,0.1)]"
                  >
                    {copy[index] ? (
                      <div className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-clipboard"
                        >
                          <rect
                            width="8"
                            height="4"
                            x="8"
                            y="2"
                            rx="1"
                            ry="1"
                          />
                          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                        </svg>
                        Copy
                      </div>
                    ) : (
                      <div className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-clipboard-check"
                        >
                          <rect
                            width="8"
                            height="4"
                            x="8"
                            y="2"
                            rx="1"
                            ry="1"
                          />
                          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                          <path d="m9 14 2 2 4-4" />
                        </svg>
                        Copied!
                      </div>
                    )}
                  </button>
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
          </div>

          {openModals[index] && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
              <div
                ref={modalRef}
                className=" p-6 rounded-lg shadow-lg max-w-lg w-full relative"
              >
                <button
                  className="absolute top-2 right-2"
                  onClick={() => handleCloseModal(index)}
                >
                  Close
                </button>
                <CodeBlock code={tooltip.css} />
              </div>
            </div>
          )}
        </div>
      ))}
    </motion.div>
  );
};
