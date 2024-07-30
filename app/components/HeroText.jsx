"use client";
import React from "react";
import {motion} from "framer-motion";

export default function HeroText({ label, description }) {
  return (
    <motion.div
      data-cursor="text"
      className="text-5xl  flex items-center justify-center flex-col text-center text-black dark:text-white max-w-xs  z-0  font-bold  leading-none"
    >
      <motion.strong
      initial={{ rotate: 0 }}
      whileInView={{ rotate: [10, -10, 10, -10, 10, -10, 10, -10, 10, -10, 0] }}
      transition={{ duration: 3, ease: "easeInOut"}}
      viewport={{ once: true }}
      className="bg-gradient-to-br  p-2  text-black dark:text-white z-10 items-center justify-center relative  ">
        {label} 
      </motion.strong>{" "}
    {description}
    </motion.div>
  );
}
