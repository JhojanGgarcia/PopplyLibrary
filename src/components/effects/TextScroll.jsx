"use client";

import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

export default function Character({ value }) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = value.split(" ");

  return (
    <p
      ref={element}
      className="mx-auto flex max-w-4xl flex-wrap items-center justify-center p-[40px] text-sm leading-[1] font-medium text-white/60 md:text-2xl dark:text-black/80"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({ children, range, progress }) => {
  const characters = children.split("");
  const amount = range[1] - range[0];
  const step = amount / characters.length;
  return (
    <span className="relative mt-[8px] mr-[4px]">
      {characters.map((character, i) => {
        const start = range[0] + step * i;
        const end = range[0] + step * (i + 1);
        return (
          <Characters range={[start, end]} progress={progress} key={i}>
            {character}
          </Characters>
        );
      })}
    </span>
  );
};

const Characters = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className="absolute opacity-[0.1] dark:opacity-[0.3]">
        {children}
      </span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
