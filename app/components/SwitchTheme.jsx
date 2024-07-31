"use client";
import React, { useState, useEffect } from "react";
import Switch from "./Switch";
import { motion } from "framer-motion";
export default function SwitchTheme() {
  const [isToggled, setIsToggled] = useState(false);
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setIsToggled(!isToggled);
  };
  return (
    <Switch
      onClick={handleThemeSwitch}
      icon={
        isToggled ? (
          <svg
          className={"text-black dark:text-white -rotate-45"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            color="#000000"
            fill="none"
          >
            <path
              d="M21.0985 7.84477C20.458 8.55417 19.5311 9 18.5 9C16.567 9 15 7.433 15 5.5C15 4.46895 15.4458 3.54203 16.1552 2.90149M21.0985 7.84477C21.6774 9.11025 22 10.5174 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C13.4826 2 14.8898 2.32262 16.1552 2.90149M21.0985 7.84477C20.0998 5.66155 18.3384 3.90018 16.1552 2.90149"
              stroke="currentColor"
              stroke-width="1.5"
            />
            <path
              d="M10 8H10.0064"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7 14H7.00635"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 16C16 17.1046 15.1046 18 14 18C12.8954 18 12 17.1046 12 16C12 14.8954 12.8954 14 14 14C15.1046 14 16 14.8954 16 16Z"
              stroke="currentColor"
              stroke-width="1.5"
            />
          </svg>
        ) : (
          <motion.svg
            className={"text-black dark:text-white"}
            viewBox="0 0 24 24"
            width="20"
            height="20"
            color="#fff"
            fill="none"
          >
            <motion.path
              d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <motion.path
              d="M11.9955 3H12.0045M11.9961 21H12.0051M18.3588 5.63599H18.3678M5.63409 18.364H5.64307M5.63409 5.63647H5.64307M18.3582 18.3645H18.3672M20.991 12.0006H21M3 12.0006H3.00898"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        )
      }
      isToggled={isToggled}
      onToggled={() => setIsToggled(!isToggled)}
    />
  );
}
