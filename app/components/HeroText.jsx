"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function HeroText ({ label, description }) {

  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01]
    }}
      data-cursor="text"
      className="text-5xl  flex items-center justify-center flex-col text-center text-black dark:text-white max-w-xs  z-0  font-bold  leading-none"
    >
      <motion.strong
       
        className="bg-gradient-to-br dark:drop-shadow-[0_0_50px_rgba(255,255,255,0.5)] p-2  text-black dark:text-white z-10 items-center justify-center relative  "
      >
        {label}
      </motion.strong>{" "}
      {description}.
    </motion.div>
  );
}
