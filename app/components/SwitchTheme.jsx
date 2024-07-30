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
          <motion.svg
          className={"text-black dark:text-white"}
            viewBox="0 0 24 24"
            width="20"
            height="20"
            color="#fff"
            fill="none"
          >
            <motion.path
              d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
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
