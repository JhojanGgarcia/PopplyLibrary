"use client";
import { motion } from "framer-motion";

export const BlurIn = ({ text = "", className = "" }) => {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letter = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: 20,
      scale: 0.95,
      rotate: -3,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="visible"
      className={`inline flex-wrap justify-center text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-5xl md:leading-[4rem] lg:text-6xl lg:leading-[4.5rem] xl:text-7xl xl:leading-[5rem] ${className}`}
    >
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={letter}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  );
};
