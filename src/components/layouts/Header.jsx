"use client";
import React from "react";
import Image from "next/image";
import Switch from "@/components/common/ButtonSwitch";
import { motion } from "framer-motion";
import Favicon from "../icons/Favicon";

export default function Header() {
  return (
    <header className="relative top-0 z-50 mx-auto flex h-16 items-center justify-center overflow-visible border-white/10">
      <div className="absolute bottom-0 left-0 z-1 h-[2px] w-full border-t border-white/10 dark:border-black/10" />

      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        className="absolute left-6 flex items-center gap-1 text-white dark:text-black"
      >
        <Favicon />
        Popply Library
      </motion.div>

      <div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
        className="absolute right-6 flex items-center justify-center gap-2 p-2"
      >
        <Switch />
      </div>
    </header>
  );
}
