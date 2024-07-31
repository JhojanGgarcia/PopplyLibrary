"use client";

import React, { useState } from "react";
import { socialMedia } from "../../utils/socialMedia";
import "../../styles/animations.css";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  let [openIcon, setOpenIcon] = useState(false);

  let mouseEnter = (index) => {
    setOpenIcon(index);
  };
  let mouseLeave = () => {
    setOpenIcon(false);
  };

  return (
    <header className="max-w-4xl w-full mx-auto flex items-center backdrop-blur-xl justify-between  rounded-2xl z-10 bg-white dark:bg-transparent dark:shadow-[0_0px_30px_rgba(255,255,255,0.1)] dark:border-white/10 shadow-[0_0px_30px_rgba(0,0,0,0.5)] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1)_0%,transparent_60%)] border border-white/20 top-2 overflow-hidden  absolute py-1 px-2 ">
      <li className="flex items-center text-white gap-2 p-1">
        <Image src="/logo.png" alt="logo" width={30} height={30}></Image>
        <span className="relative text-nowrap flex items-center gap-1 p-1  px-[0.1875rem] font-medium text-[0.9rem]/[0.875rem] text-white dark:bg-[rgba(100,100,100,0.1)]">
          Popply Library
          <span className="p-1 rounded-full bg-green-200"></span>
          <span className="-top-px absolute inset-x-[-0.1875rem] block transform-gpu text-white/50 dark:bg-[rgba(100,100,100,0.1)]">
            <svg
              aria-hidden="true"
              height="1"
              stroke="currentColor"
              width="100%"
            >
              <line x1="0" x2="100%" y1="0.5" y2="0.5"></line>
            </svg>
          </span>
          <span className="-bottom-px absolute inset-x-[-0.1875rem] block transform-gpu text-white/50 dark:bg-[rgba(100,100,100,0.1)]">
            <svg
              aria-hidden="true"
              height="1"
              stroke="currentColor"
              width="100%"
            >
              <line x1="0" x2="100%" y1="0.5" y2="0.5"></line>
            </svg>
          </span>
          <span className="-left-px absolute inset-y-[-0.1875rem] block transform-gpu text-white/50 dark:bg-[rgba(100,100,100,0.1)]">
            <svg
              aria-hidden="true"
              height="100%"
              stroke="currentColor"
              width="1"
            >
              <line x1="0.5" x2="0.5" y1="0" y2="100%"></line>
            </svg>
          </span>
          <span className="-right-px absolute inset-y-[-0.1875rem] block transform-gpu text-white/50 dark:bg-[rgba(100,100,100,0.1)]">
            <svg
              aria-hidden="true"
              height="100%"
              stroke="currentColor"
              width="1"
            >
              <line x1="0.5" x2="0.5" y1="0" y2="100%"></line>
            </svg>
          </span>
        </span>
        <div className=" rounded-md border hidden md:flex border-white/20 text-white/90  bg-[#93bb81ab] px-2 mb-4  text-white text-[12px]">
          New Release.
        </div>
      </li>

      <ul className="flex items-center  justify-center gap-2">
        {socialMedia.map((icon, index) => (
          <Link
            href={index === 0 ? icon.githubLink : icon.twitterLink}
            onMouseEnter={() => mouseEnter(index)}
            onMouseLeave={mouseLeave}
            key={index}
            className="cursor-pointer   flex opacity-50 items-center justify-center"
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
        ))}
      </ul>
      
    </header>
  );
};
