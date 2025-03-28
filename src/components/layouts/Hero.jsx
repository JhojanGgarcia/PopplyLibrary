"use client";

import BottomBlurOut from "@/components/effects/BottomBlur";
import Character from "@/components/effects/TextScroll";
import { BlurIn } from "../effects/TextBlurIn";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="flex min-h-full w-full flex-col items-center justify-center overflow-hidden text-center">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="relative flex h-full w-full items-center justify-center border-t border-b border-white/10 px-10 dark:border-black/10"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="relative flex w-full items-center justify-center py-16"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#0f0f0f_40%,#8873bd_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#8873bd_100%)]"
          ></motion.div>

          <div className="z-10 mx-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              <span className="text-white/80 dark:text-black/80">
                Eleveate Your
              </span>
              <br />
              <span className="text-white/80 dark:text-black/80">
                Tooltip&apos;s &nbsp;
                <span className="font-pacifico text-nowrap text-[#8873bd]">
                  <BlurIn text="Animations." />
                </span>
              </span>
            </h1>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        className="px-10 pt-10"
      >
        <Character
          value={
            "Explore an animation, use it as you like, and enhance your tooltips with over 50+ available animation effects."
          }
        />
      </motion.div>

      <motion.hr
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
        className="absolute top-0 left-10 m-0 h-full w-px origin-top border-0 bg-white/10 dark:bg-black/10"
      />

      <motion.hr
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.75, duration: 0.5, ease: "easeOut" }}
        className="absolute top-0 right-10 m-0 h-full w-px origin-top border-0 bg-white/10 dark:bg-black/10"
      />
    </div>
  );
}
