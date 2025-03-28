"use client";

import React, { useRef, useState } from "react";
import TooltipContent from "@/components/common/TooltipList";
import BottomBlurOut from "@/components/effects/BottomBlur";
import useInjectAnimations from "@/hooks/useInjectAnimations";
import Code from "@/components/snippets/CodeViewer";
import useClickOutside from "@/hooks/useClickOutside";
import ButtonCopy from "@/components/common/ButtonCopy";

import { AnimatePresence, motion } from "framer-motion";

import { Info, Frame, X, ChevronRight, Terminal } from "lucide-react";

export default function Content() {
  useInjectAnimations(TooltipContent);

  const [showCode, setShowCode] = useState(
    new Array(TooltipContent.length).fill(false),
  );
  const [isOpenTooltip, setIsOpenTooltip] = useState(
    new Array(TooltipContent.length).fill(false),
  );
  const [copied, setCopied] = useState(
    new Array(TooltipContent.length).fill(false),
  );
  const [openModals, setOpenModals] = useState({});
  const modalRef = useRef(null);

  const handleOpenModal = (index) => {
    setOpenModals((prevOpenModals) => ({ ...prevOpenModals, [index]: true }));
  };

  const handleCloseModal = (index) => {
    setOpenModals((prevOpenModals) => ({ ...prevOpenModals, [index]: false }));
  };

  const handleCopy = (index) => {
    navigator.clipboard.writeText(TooltipContent[index].css);
    setCopied((prevCopied) => {
      const newCopied = [...prevCopied];
      newCopied[index] = true;
      return newCopied;
    });
  };

  const groupTooltips = TooltipContent.reduce((acc, tooltip) => {
    const { category } = tooltip;
    if (!acc[category]) acc[category] = [];
    acc[category].push(tooltip);
    return acc;
  }, {});

  useClickOutside(modalRef, () => {
    setOpenModals({});
  });

  const modalVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      rotateX: 90,
      transformOrigin: "bottom center",
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      opacity: 0,
      y: 100,
      rotateX: 90,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <div className="max-h-[100vh] w-full overflow-auto">
      <BottomBlurOut />

      <div className="relative grid w-full grid-cols-1 place-items-center gap-4 py-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 dark:border-white/10">
        {Object.entries(groupTooltips).map(([category, tooltips]) => (
          <React.Fragment key={category}>
            <div className="col-span-full w-full border-t border-b border-white/10 px-4 py-4 text-left text-sm font-bold text-white/70 dark:border-black/10">
              <div className="relative w-fit rounded-lg border border-white/10 bg-white/5 px-2 py-0.5 dark:border-black/10 dark:bg-black/10">
                <span className="relative z-10 dark:text-black/50">
                  {category}
                </span>
                <span className="absolute -top-3 -right-3 z-0 flex h-5 w-5 items-center justify-center rounded-full border border-dashed border-white/40 bg-white/10 text-xs text-white/60 backdrop-blur-2xl dark:border-black/40 dark:bg-black/10 dark:text-black/60">
                  {tooltips.length}
                </span>
              </div>
            </div>
            {tooltips.map((tooltip, index) => {
              const globalIndex = TooltipContent.findIndex(
                (t) => t.name === tooltip.name,
              );
              return (
                <div
                  className="flex w-full px-[37.5px]"
                  key={`${tooltip.name}-${index}`}
                >
                  <div
                    className="relative my-5 flex min-h-[150px] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 px-4 shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-2xl dark:border-black/10"
                    initial="hidden"
                    animate="visible"
                  >
                    <div className="absolute h-full w-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-5 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#000_1px,transparent_3px)]"></div>
                    <div className="absolute top-1 left-1 flex items-center justify-center gap-1 rounded-3xl border border-white/10 bg-white/5 p-1 text-xs text-gray-300 dark:border-black/10 dark:bg-black/5 dark:text-gray-600">
                      <Frame className="h-3 w-3" />
                      <span>{tooltip.name}</span>
                    </div>
                    {tooltip.badge && (
                      <div className="absolute bottom-1 left-1 flex items-center justify-center gap-1 rounded-xl border border-dashed border-white/20 bg-[#5549731d] px-1.5 py-0.5 text-xs text-gray-300 select-none dark:border-black/10 dark:text-black/70">
                        <span>{tooltip.badge}</span>
                      </div>
                    )}
                    <button
                      type="button"
                      className="group absolute top-1 right-1 flex cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/5 p-1.5 text-xs text-gray-300 dark:border-black/10 dark:bg-black/5 dark:text-gray-600"
                      onClick={() => handleOpenModal(globalIndex)}
                    >
                      <span className="flex items-center gap-1">
                        <Terminal className="h-3 w-3 text-xs transition-colors duration-150 group-hover:text-white/50 dark:group-hover:text-black/50" />
                        Code
                      </span>
                    </button>
                    <div
                      className="relative flex items-center justify-center text-nowrap dark:text-white"
                      onMouseEnter={() => {
                        const newIsOpenTooltip = [...isOpenTooltip];
                        newIsOpenTooltip[globalIndex] = true;
                        setIsOpenTooltip(newIsOpenTooltip);
                      }}
                      onMouseLeave={() => {
                        const newIsOpenTooltip = [...isOpenTooltip];
                        newIsOpenTooltip[globalIndex] = false;
                        setIsOpenTooltip(newIsOpenTooltip);
                      }}
                    >
                      {tooltip.tooltipContainer && tooltip.tooltipContainer()}
                      {isOpenTooltip[globalIndex] &&
                        tooltip.tooltipSample &&
                        tooltip.tooltipSample()}
                    </div>
                  </div>
                  <AnimatePresence>
                    {openModals[globalIndex] && (
                      <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={modalVariants}
                      >
                        <motion.div
                          ref={modalRef}
                          className="relative max-h-[90vh] w-full max-w-xl overflow-auto rounded-2xl border border-white/10 bg-[#0f0f0f] px-4 py-6 shadow-[0_4px_10px_rgba(0,0,0,0.05)] backdrop-blur-lg dark:border-white/10 dark:bg-white dark:text-white"
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          variants={modalVariants}
                        >
                          <button
                            onClick={() => handleCloseModal(globalIndex)}
                            className="absolute top-4 right-4 z-50 cursor-pointer p-1 text-sm text-gray-500 transition hover:text-black dark:hover:text-white"
                            aria-label="Cerrar"
                          >
                            <X className="h-4 w-4 text-white dark:text-black" />
                          </button>

                          <Code
                            filename={`./${tooltip.name}.css`}
                            code={tooltip.css}
                            fileName={tooltip.name}
                          >
                            <div className="absolute right-0 z-50 m-2">
                              <ButtonCopy
                                onClick={() => handleCopy(globalIndex)}
                              />
                            </div>
                          </Code>

                          <div className="relative bottom-1 left-1 mx-auto mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-1 py-3 text-xs text-gray-300 dark:border-black/10 dark:bg-black/5 dark:text-gray-600">
                            <Info className="h-4 w-4" />
                            <span>
                              Adjust the time according to your app&apos;s
                              requirements
                            </span>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
