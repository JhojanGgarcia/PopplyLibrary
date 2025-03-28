"use client";

import { useCallback, useState } from "react";
import { Check, Copy, LoaderCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const buttonCopy = {
  idle: <Copy size={12} />,
  loading: <LoaderCircle size={12} className="animate-spin" />,
  success: <Check size={12} />,
};

export default function ButtonCopy({ onClick }) {
  const [buttonState, setButtonState] = useState("idle");

  const handleClick = useCallback(() => {
    setButtonState("loading");
    setTimeout(() => {
      setButtonState("success");
    }, 1000);

    setTimeout(() => {
      setButtonState("idle");
    }, 3000);
  }, []);

  return (
    <div className="flex justify-center">
      <button
        className="relative w-auto cursor-pointer overflow-hidden rounded-full border border-white/10 p-1.5 text-white/70 disabled:opacity-50 dark:border-black/10 dark:text-black/70"
        disabled={buttonState !== "idle"}
        onClick={() => {
          onClick();
          handleClick();
        }}
        aria-label={buttonState === "loading" ? "Copying..." : "Copy"}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            transition={{ type: "spring", duration: 0.3, bounce: 0 }}
            initial={{ opacity: 0, y: -25, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 25, filter: "blur(10px)" }}
            key={buttonState}
            className="flex w-full items-center justify-center"
          >
            {buttonCopy[buttonState]}
          </motion.span>
        </AnimatePresence>
      </button>
    </div>
  );
}
