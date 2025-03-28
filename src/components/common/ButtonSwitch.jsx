"use client";

import React from "react";

import useTheme from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function Switch() {
  const { theme, toggleTheme } = useTheme();
  return (
    <label className="relative flex cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-white/10 p-4 dark:border-black/10">
      <input type="checkbox" className="peer sr-only" onClick={toggleTheme} />
      <motion.span
        initial={{ x: 0 }}
        animate={{ rotate: theme === "dark" ? 16 : 0 }}
        className="absolute mx-auto"
      >
        {theme === "dark" ? (
          <Moon className="h-4 w-4 text-white/50 dark:text-black/50" />
        ) : (
          <Sun className="h-4 w-4 text-white/50 dark:text-black/50" />
        )}
      </motion.span>
    </label>
  );
}
