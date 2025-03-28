"use client";

import { useEffect } from "react";

export default function useInjectAnimations(animations) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const styleId = "global-animation-styles";

    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.innerHTML = animations.map((anim) => anim.css).join("\n\n");
      document.head.appendChild(style);
    }
  }, [animations]);
}
