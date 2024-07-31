"use client";
import React, { useState } from "react";
import "../../styles/animations.css";
import Link from "next/link";
import SwitchTheme from "../SwitchTheme";
import { socialMedia } from "../content/socialMedia";
import { motion } from "framer-motion";
import "../../styles/linearOverlay.css";
export const Header = () => {
  let [openIcon, setOpenIcon] = useState(false);

  let mouseEnter = (index) => {
    setOpenIcon(index);
  };
  let mouseLeave = () => {
    setOpenIcon(false);
  };

  return (
    <motion.header
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
      className="w-36 flex items-center  rounded-2xl z-10 bg-white dark:bg-transparent dark:shadow-[0_0px_30px_rgba(255,255,255,0.1)] dark:border-white/10 shadow-[0_0px_30px_rgba(0,0,0,0.5)]   top-2 justify-center   max-w-3xl absolute  min-h-12 "
    >
      <span  className="block  absolute inset-0 rounded-2xl p-px linear-overlay"/>
      <ul className="flex items-center absolute p-2 justify-center gap-2">
        {socialMedia.map((icon, index) => (
          <>
            <Link
              href={index === 0 ? icon.githubLink : icon.twitterLink}
              onMouseEnter={() => mouseEnter(index)}
              onMouseLeave={mouseLeave}
              key={index}
              className="cursor-pointer backdrop-blur-sm flex items-center justify-center"
            >
              {icon.githubIcon}
              {icon.twitterIcon}
              {openIcon === index && (
                <p
                  className=" dark:text-white dark:border-white/10 tada absolute top-14 border p-1 rounded-xl"
                  role="tooltip"
                  aria-label={
                    index === 0
                      ? icon.nameForTooltipContentGithub
                      : icon.nameForTooltipContentTwitter
                  }
                >
                  {index === 0
                    ? icon.nameForTooltipContentGithub
                    : icon.nameForTooltipContentTwitter}
                </p>
              )}
            </Link>
          </>
        ))}
        <SwitchTheme />
      </ul>
    </motion.header>
  );
};
