"use client";
import React, { useState } from "react";
import "../styles/animations.css";
import Link from "next/link";
import SwitchTheme from "./SwitchTheme";
import { socialMedia } from "./content/socialMedia";

export const Header = () => {
  let [openIcon, setOpenIcon] = useState(false);

  let mouseEnter = (index) => {
    setOpenIcon(index);
  };
  let mouseLeave = () => {
    setOpenIcon(false);
  };

  return (
    <header className="w-36 flex items-center  border z-10 bg-white dark:bg-transparent dark:shadow-[0_0px_30px_rgba(255,255,255,0.1)] dark:border-white/10 shadow-[0_0px_30px_rgba(0,0,0,0.5)]  rounded-2xl top-2 justify-center   max-w-3xl absolute  min-h-12 ">
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
                  className=" dark:text-white tada absolute top-14 border p-1 rounded-xl"
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
    </header>
  );
};
