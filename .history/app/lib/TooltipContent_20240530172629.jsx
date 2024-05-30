"use client";

import React, { useState } from "react";
import { iconForTooltips } from "./TooltipIcon";
import "../styles/animations.css";

let animationCodeCopy = [
    {
      animationCopy: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          color="#000000"
          fill="none"
        >
          <path
            d="M9.38188 5.00507C10.5901 3.66836 11.1943 3 12 3C12.8057 3 13.4099 3.66836 14.6181 5.00507L17.5897 8.29254C19.1966 10.0702 20 10.9591 20 12C20 13.0409 19.1966 13.9298 17.5897 15.7075L14.6181 18.9949C13.4099 20.3316 12.8057 21 12 21C11.1943 21 10.5901 20.3316 9.38188 18.9949L6.41031 15.7075C4.80344 13.9298 4 13.0409 4 12C4 10.9591 4.80344 10.0702 6.41031 8.29254L9.38188 5.00507Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
        </svg>
      ),
    },
  ];
  

let copyCopiedTxt = [
  {
    copyAnimation: "copy",
    copiedAnimation: "copied",
  },
];

let tooltipContent = [
  {
    name: "fadeIn",
    css: `
    .fadein {
      animation: fade-in 1s ease-in-out;
      -webkit-animation: fade-in 1s ease-in-out;
    }
    @keyframes fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    `,
    description: "Fade in effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl fadein">Sample</p>
      );
    },
  },
  {
    name: "fadeInDown",
    css: `
    .fadeindown {
      animation: fade-in-down 1s ease-in;
      -webkit-animation: fade-in-down 1s ease-in;
    }
    @keyframes fade-in-down {
      from {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
      }
      to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }    
    `,
    description: "Fade in down effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer z-10 border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl fadeindown">
          Sample
        </p>
      );
    },
  },
  {
    name: "fadeInLeft",
    css: `
    
  .fadeinleft {
    animation: fade-in-left 1s ease-in-out;
    -webkit-animation: fade-in-left 1s ease-in-out;
  }
  @keyframes fade-in-left {
    from {
      opacity: 0;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
    `,
    description: "Fade in left effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer z-10 border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute left-12 border p-1 rounded-xl fadeintopleft">
          Sample
        </p>
      );
    },
  },
  {
    name: "fadeInRight",
    css: `
    .fadeinright {
      animation: fade-in-right 1s ease-in-out;
      -webkit-animation: fade-in-right 1s ease-in-out;
    }
    @keyframes fade-in-right {
      from {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
      }
      to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }
    `,
    description: "Fade in right effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer z-10 border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute right-12 border p-1 rounded-xl fadeintopright">
          Sample
        </p>
      );
    },
  },
  {
    name: "fadeInUp",
    css: `
    .fadeinup {
      animation: fade-in-up 1s ease-in-out;
      -webkit-animation: fade-in-up 1s ease-in-out;
    }
    @keyframes fade-in-up {
      from {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
      }
      to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }
    `,
    description: "Fade in up effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer z-10 border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl fadeinup">Sample</p>
      );
    },
  },
  {
    name: "fadeOut",
    css: `
    .fadeout {
      animation: fade-out 1s ease-out;
      -webkit-animation: fade-out 1s ease-out;
    }
    @keyframes fade-out {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
    `,
    description: "Fade out effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer z-10 border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl fadeout">Sample</p>
      );
    },
  },
  {
    name: "fadeOutDown",
    css: `
    .fadeoutdown {
      animation: fade-out-down 1s ease-out;
      -webkit-animation: fade-out-down 1s ease-out;
    }
    @keyframes fade-out-down {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
    `,
    description: "Fade out down effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl fadeoutdown">
          Sample
        </p>
      );
    },
  },
  {
    name: "fadeOutLeft",
    css: `
    .fadeoutleft {
      animation: fade-out-left 1s ease-out;
      -webkit-animation: fade-out-left 1s ease-out;
    }
    @keyframes fade-out-left {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;  
      }}
    `,
    description: "Fade out left effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute left-12 border p-1 rounded-xl fadeoutleft">
          Sample
        </p>
      );
    },
  },
  {
    name: "fadeOutRight",
    description: "Fade out right effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute right-12 border p-1 rounded-xl fadeoutright">
          Sample
        </p>
      );
    },
  },
  {
    name: "fadeOutUp",
    css: `
    .fadeoutup {
      animation: fade-out-up 1s ease-out;
      -webkit-animation: fade-out-up 1s ease-out;
    }
    @keyframes fade-out-up {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }}
    `,
    description: "Fade out up effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl fadeoutup">
          Sample
        </p>
      );
    },
  },
  {
    name: "slideInDown",
    css: `
    .slideindown {
      animation: slide-in-down 1s ease-out;
      -webkit-animation: slide-in-down 1s ease-out;
    }
    @keyframes slide-in-down {
      from {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    `,
    description: "Slide in down effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl slideindown">
          Sample
        </p>
      );
    },
  },
  {
    name: "slideInLeft",
    css: `
    .slideinleft {
      animation: slide-in-left 1s ease-out;
      -webkit-animation: slide-in-left 1s ease-out;
    }
    @keyframes slide-in-left {
      from {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    `,
    description: "Slide in left effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute left-12 border p-1 rounded-xl slideinleft">
          Sample
        </p>
      );
    },
  },
  {
    name: "slideInRight",
    css: `
    .slideinright {
      animation: slide-in-right 1s ease-out;
      -webkit-animation: slide-in-right 1s ease-out;
    }
    @keyframes slide-in-right {
      from {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    `,
    description: "Slide in right effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute right-12 border p-1 rounded-xl slideinright">
          Sample
        </p>
      );
    },
  },
  {
    name: "slideInUp",
    css: `
    .slideinup {
      animation: slide-in-up 1s ease-out;
      -webkit-animation: slide-in-up 1s ease-out;
    }
    @keyframes slide-in-up {
      from {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    `,
    description: "Slide in up effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl slideinup">
          Sample
        </p>
      );
    },
  },
  {
    name: "slideOutDown",
    css: `
    .slideoutdown {
      animation: slide-out-down 1s ease-out;
      -webkit-animation: slide-out-down 1s ease-out;
    }
    @keyframes slide-out-down {
      from {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
      to {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
      }
    }
    `,
    description: "Slide out down effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl slideoutdown">
          Sample
        </p>
      );
    },
  },
  {
    name: "slideOutLeft",
    css: `
    .slideoutleft {
      animation: slide-out-left 1s ease-out;
      -webkit-animation: slide-out-left 1s ease-out;
    }
    @keyframes slide-out-left {
      from {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
      to {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
      }
    }
    `,
    description: "Slide out left effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute left-12 border p-1 rounded-xl slideoutleft">
          Sample
        </p>
      );
    },
  },
  {
    name: "slideOutRight",
    css: `  
    .slideoutright {
      animation: slide-out-right 1s ease-out;
      -webkit-animation: slide-out-right 1s ease-out;
    }
    @keyframes slide-out-right {
      from {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
      to {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
      }
    }
    `,
    description: "Slide out right effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute right-12 border p-1 rounded-xl slideoutright">
          Sample
        </p>
      );
    },
  },
  {
    name: "slideOutUp",
    css: `
    .slideoutup {
      animation: slide-out-up 1s ease-out;
      -webkit-animation: slide-out-up 1s ease-out;
    }
    @keyframes slide-out-up {
      from {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
      to {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
      }
    }
    `,

    description: "Slide out up effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl slideoutup">
          Sample
        </p>
      );
    },
  },
  {
    name: "slideDown",
    css: `
    .slidedown {
      animation: slide-down 1s ease-out;
      -webkit-animation: slide-down 1s ease-out;
    }
    @keyframes slide-down {
      from {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    `,
    description: "Slide down effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl slidedown">
          Sample
        </p>
      );
    },
  },
  {
    name: "slideLeft",
    css: `
    .slideleft {
      animation: slide-left 1s ease-out;
      -webkit-animation: slide-left 1s ease-out;
    }
    @keyframes slide-left {
      from {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    `,
    description: "Slide left effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute left-12 border p-1 rounded-xl slideleft">
          Sample
        </p>
      );
    },
  },
  {
    name: "slideRight",
    css: `
    .slideright {
      animation: slide-right 1s ease-out;
      -webkit-animation: slide-right 1s ease-out;
    }
    @keyframes slide-right {
      from {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    `,
    description: "Slide right effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute right-12 border p-1 rounded-xl slideright">
          Sample
        </p>
      );
    },
  },
  {
    name: "slideUp",
    css: `
    .slideup {
      animation: slide-up 1s ease-out;
      -webkit-animation: slide-up 1s ease-out;
    }
    @keyframes slide-up {
      from {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    `,
    description: "Slide up effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl slideup">Sample</p>
      );
    },
  },
  {
    name: "zoomIn",
    css: `
    .zoomin {
      animation: zoom-in 1s ease-out;
      -webkit-animation: zoom-in 1s ease-out;
    }
    @keyframes zoom-in {
      from {
        opacity: 0;
        transform: scale(0);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    `,
    description: "Zoom in effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl zoomin">Sample</p>
      );
    },
  },
  {
    name: "zoomOut",
    css: `
    .zoomout {
      animation: zoom-out 1s ease-out;
      -webkit-animation: zoom-out 1s ease-out;
    }
    @keyframes zoom-out {
      from {
        opacity: 1;
        transform: scale(1);
      }
      to {
        opacity: 0;
        transform: scale(0);
      }
    }
    `,
    description: "Zoom out effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl zoomout">Sample</p>
      );
    },
  },
  {
    name: "Tada",
    css: `
    .tada {
      animation: tada 1s ease-out;
      -webkit-animation: tada 1s ease-out;
    }
    @keyframes tada {
      0% {
        transform: scale3d(1, 1, 1);
      }
      10%,
      20% {
        transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
      }
      30%,
      50%,
      70%,
      90% {
        transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
      }
      40%,
      60%,
      80% {
        transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
      }
      100% {
        transform: scale3d(1, 1, 1);
      }
    }
    `,
    description: "Tada effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl tada">Sample</p>
      );
    },
  },
  {
    name: "spinnerGrow",
    css: `
    .spinnergrow {
      animation: spinner-grow 1s ease-out;
      -webkit-animation: spinner-grow 1s ease-out;
    }
    @keyframes spinner-grow {
      0% {
        transform: scale(0);
      }
      50% {
        opacity: 1;
        transform: none;
      }
    }
    `,
    description: "Spinner grow effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl spinnergrow">
          Sample
        </p>
      );
    },
  },
  {
    name: "spinnerShrink",
    css: ` 
    .spinnershrink {
      animation: spinner-shrink 1s ease-out;
      -webkit-animation: spinner-shrink 1s ease-out;
    }
    @keyframes spinner-shrink {
      0% {
        transform: scale(1);
      }
      50% {
        opacity: 1;
        transform: none;
      }
    }
    `,
    description: "Spinner shrink effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl spinnershrink">
          Sample
        </p>
      );
    },
  },
  {
    name: "fadeInTopLeft",
    css: `
    .fadeintopleft {
      animation: fade-in-top-left 1s ease-out;
      -webkit-animation: fade-in-top-left 1s ease-out;
    }
    @keyframes fade-in-top-left {
      from {
        opacity: 0;
        transform: translate3d(-100%, -100%, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    `,
    description: "Fade in top left effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl fadeintopleft">
          Sample
        </p>
      );
    },
  },
  {
    name: "fadeInTopRight",
    css: `
    .fadeintopright {
      animation: fade-in-top-right 1s ease-out;
      -webkit-animation: fade-in-top-right 1s ease-out;
    }
    @keyframes fade-in-top-right {
      from {
        opacity: 0;
        transform: translate3d(100%, -100%, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    `,
    description: "Fade in top right effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl fadeintopright">
          Sample
        </p>
      );
    },
  },
  {
    name: "fadeInBottomLeft",
    css: `
    .fadeinbottomleft {
      animation: fade-in-bottom-left 1s ease-out;
      -webkit-animation: fade-in-bottom-left 1s ease-out;
    }
    @keyframes fade-in-bottom-left {
      from {
        opacity: 0;
        transform: translate3d(-100%, 100%, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    `,
    description: "Fade in bottom left effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl fadeinbottomleft">
          Sample
        </p>
      );
    },
  },
  {
    name: "fadeInBottomRight",
    css: `
    .fadeinbottomright {
      animation: fade-in-bottom-right 1s ease-out;
      -webkit-animation: fade-in-bottom-right 1s ease-out;
    }
    @keyframes fade-in-bottom-right {
      from {
        opacity: 0;
        transform: translate3d(100%, 100%, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    `,
    description: "Fade in bottom right effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl fadeinbottomright">
          Sample
        </p>
      );
    },
  },
  {
    name: "fadeInBounceDown",
    css: `
    .fadeinbouncedown {
      animation: fade-in-bounce-down 1s ease-out;
      -webkit-animation: fade-in-bounce-down 1s ease-out;
    }
    @keyframes fade-in-bounce-down {
      from {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    `,
    description: "Fade in bounce down effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl fadeinbouncedown">
          Sample
        </p>
      );
    },
  },
  {
    name: "fadeInBounceUp",
    css: `
    .fadeinbounceup {
      animation: fade-in-bounce-up 1s ease-out;
      -webkit-animation: fade-in-bounce-up 1s ease-out;
    }
    @keyframes fade-in-bounce-up {
      from {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    `,
    description: "Fade in bounce up effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl fadeinbounceup">
          Sample
        </p>
      );
    },
  },
  {
    name: "fadeInBounceRight",
    css: `
    .fadeinbounceright {
      animation: fade-in-bounce-right 1s ease-out;
      -webkit-animation: fade-in-bounce-right 1s ease-out;
    }
    @keyframes fade-in-bounce-right {
      from {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    `,
    description: "Fade in bounce right effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl fadeinbounceright">
          Sample
        </p>
      );
    },
  },
  {
    name: "fadeInBounceLeft",
    css: `
    .fadeinbounceleft {
      animation: fade-in-bounce-left 1s ease-out;
      -webkit-animation: fade-in-bounce-left 1s ease-out;
    }
    @keyframes fade-in-bounce-left {
      from {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    `,
    description: "Fade in bounce left effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl fadeinbounceright">
          Sample
        </p>
      );
    },
  },
  {
    name: "fadeOutLeft",
    css: `
    .fadeoutleft {
      animation: fade-out-left 1s ease-out;
      -webkit-animation: fade-out-left 1s ease-out;
    }
    @keyframes fade-out-left {
      from {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
      to {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
      }
    }
    `,
    description: "Fade out left effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl fadeoutleft">
          Sample
        </p>
      );
    },
  },
  {
    name: "fadeOutTopLeft",
    css: `
    .fadeouttopleft {
      animation: fade-out-top-left 1s ease-out;
      -webkit-animation: fade-out-top-left 1s ease-out;
    }
    @keyframes fade-out-top-left {
      from {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
      to {
        opacity: 0;
        transform: translate3d(-100%, -100%, 0);
      }
    }
    `,
    description: "Fade out top left effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl fadeouttopleft">
          Sample
        </p>
      );
    },
  },
  {
    name: "fadeOutTopRight",
    css: `
    .fadeouttopright {
      animation: fade-out-top-right 1s ease-out;
      -webkit-animation: fade-out-top-right 1s ease-out;
    }
    @keyframes fade-out-top-right {
      from {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
      to {
        opacity: 0;
        transform: translate3d(100%, -100%, 0);
      }
    }
    `,
    description: "Fade out top right effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl fadeouttopright">
          Sample
        </p>
      );
    },
  },
  {
    name: "dropIn",
    css: `
    .dropin {
      animation: drop-in 1s ease-out;
      -webkit-animation: drop-in 1s ease-out;
    }
    @keyframes drop-in {
      from {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    `,
    description: "Drop in effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl dropin">Sample</p>
      );
    },
  },
  {
    name: "dropOut",
    css: `
    .dropout {
      animation: drop-out 1s ease-out;
      -webkit-animation: drop-out 1s ease-out;
    }
    @keyframes drop-out {
      from {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
      to {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
      }
    }
    `,
    description: "Drop out effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl dropout">Sample</p>
      );
    },
  },
  {
    name: "flyIn",
    css: `
    .flyin {
      animation: fly-in 1s ease-out;
      -webkit-animation: fly-in 1s ease-out;
    }
    @keyframes fly-in {
      from {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    `,
    description: "Fly in effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl flyin">Sample</p>
      );
    },
  },
  {
    name: "flyInUp",
    css: `
    .flyinup {
      animation: fly-in-up 1s ease-out;
      -webkit-animation: fly-in-up 1s ease-out;
    }
    @keyframes fly-in-up {
      from {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    `,
    description: "Fly in up effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl flyinup">Sample</p>
      );
    },
  },
  {
    name: "flyInDown",
    css: `
    .flyindown {
      animation: fly-in-down 1s ease-out;
      -webkit-animation: fly-in-down 1s ease-out;
    }
    @keyframes fly-in-down {
      from {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    `,
    description: "Fly in down effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl flyindown">
          Sample
        </p>
      );
    },
  },
  {
    name: "flyInLeft",
    css: `
    .flyinleft {
      animation: fly-in-left 1s ease-out;
      -webkit-animation: fly-in-left 1s ease-out;
    }
    @keyframes fly-in-left {
      from {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    `,
    description: "Fly in left effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl flyinleft">
          Sample
        </p>
      );
    },
  },
  {
    name: "flyInRight",
    css: `
    .flyinright {
      animation: fly-in-right 1s ease-out;
      -webkit-animation: fly-in-right 1s ease-out;
    }
    @keyframes fly-in-right {
      from {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    `,
    description: "Fly in right effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl flyinright">
          Sample
        </p>
      );
    },
  },
  {
    name: "flyOut",
    css: `
    .flyout {
      animation: fly-out 1s ease-out;
      -webkit-animation: fly-out 1s ease-out;
    }
    @keyframes fly-out {
      from {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
      to {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
      }
    }
    `,
    description: "Fly out effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl flyout">Sample</p>
      );
    },
  },
  {
    name: "flyOutUp",
    css: `
    .flyoutup {
      animation: fly-out-up 1s ease-out;
      -webkit-animation: fly-out-up 1s ease-out;
    }
    @keyframes fly-out-up {
      from {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
      to {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
      }
    }
    `,
    description: "Fly out up effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl flyoutup">Sample</p>
      );
    },
  },
  {
    name: "flyOutDown",
    css: `
    .flyoutdown {
      animation: fly-out-down 1s ease-out;
      -webkit-animation: fly-out-down 1s ease-out;
    }
    @keyframes fly-out-down {
      from {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
      to {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
      }
    }
    `,
    description: "Fly out down effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl flyoutdown">
          Sample
        </p>
      );
    },
  },
  {
    name: "flyOutLeft",
    css: `
    .flyoutleft {
      animation: fly-out-left 1s ease-out;
      -webkit-animation: fly-out-left 1s ease-out;
    }
    @keyframes fly-out-left {
      from {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
      to {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
      }
    }
    `,
    description: "Fly out left effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl flyoutleft">
          Sample
        </p>
      );
    },
  },
  {
    name: "flyOutRight",
    css: `
    .flyoutright {
      animation: fly-out-right 1s ease-out;
      -webkit-animation: fly-out-right 1s ease-out;
    }
    @keyframes fly-out-right {
      from {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
      to {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
      }
    }
    `,
    description: "Fly out right effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl flyoutright">
          Sample
        </p>
      );
    },
  },
  {
    name: "browseIn",
    css: `
    .browsein {
      animation: browse-in 1s ease-out;
      -webkit-animation: browse-in 1s ease-out;
    }
    @keyframes browse-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    `,
    description: "Browse in effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl browsein">Sample</p>
      );
    },
  },
  {
    name: "browseOut",
    css: `
    .browseout {
      animation: browse-out 1s ease-out;
      -webkit-animation: browse-out 1s ease-out;
    }
    @keyframes browse-out {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
    `,
    description: "Browse out effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl browseout">
          Sample
        </p>
      );
    },
  },
  {
    name: "browseOutLeft",
    css: `
    .browseoutleft {
      animation: browse-out-left 1s ease-out;
      -webkit-animation: browse-out-left 1s ease-out;
    }
    @keyframes browse-out-left {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
    `,
    description: "Browse out left effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl browseoutleft">
          Sample
        </p>
      );
    },
  },
  {
    name: "browseOutRight",
    css: `
    .browseoutright {
      animation: browse-out-right 1s ease-out;
      -webkit-animation: browse-out-right 1s ease-out;
    }
    @keyframes browse-out-right {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
    `,
    description: "Browse out right effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl browseoutright">
          Sample
        </p>
      );
    },
  },
  {
    name: "jiggle",
    css: `
    .jiggle {
      animation: jiggle 1s ease-out;
      -webkit-animation: jiggle 1s ease-out;
    }
    @keyframes jiggle {
      0% {
        transform: scale3d(1, 1, 1);
      }
      30% {
        transform: scale3d(1.25, 0.75, 1);
      }
      40% {
        transform: scale3d(0.75, 1.25, 1);
      }
      50% {
        transform: scale3d(1.15, 0.85, 1);
      }
      65% {
        transform: scale3d(0.95, 1.05, 1);
      }
      75% {
        transform: scale3d(1.05, 0.95, 1);
      }
      100% {
        transform: scale3d(1, 1, 1);
      }
    }
    `,
    description: "Jiggle effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl jiggle">Sample</p>
      );
    },
  },
  {
    name: "flash",
    css: `
    .flash {
      animation: flash 1s ease-out;
      -webkit-animation: flash 1s ease-out;
    }
    @keyframes flash {
      0%,
      50%,
      100% {
        opacity: 1;
      }
      25%,
      75% {
        opacity: 0;
      }
    }
    `,
    description: "Flash effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl flash">Sample</p>
      );
    },
  },
  {
    name: "shake",
    css: `
    .shake {
      animation: shake 1s ease-out;
      -webkit-animation: shake 1s ease-out;
    }
    @keyframes shake {
      0%,
      100% {
        transform: translateX(0);
      }
      10%,
      30%,
      50%,
      70%,
      90% {
        transform: translateX(-10px);
      }
      20%,
      40%,
      60%,
      80% {
        transform: translateX(10px);
      }
    }
      
    `,
    description: "Shake effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl shake">Sample</p>
      );
    },
  },
  {
    name: "glow",
    css: `
    .glow {
      animation: glow 1s ease-out;
      -webkit-animation: glow 1s ease-out;
    }
    @keyframes glow {
      0%,
      100% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
    }
    `,
    description: "Glow effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl glow">Sample</p>
      );
    },
  },
  {
    name: "wiggle",
    css: `
    .wiggle {
      animation: wiggle 1s ease-out;
      -webkit-animation: wiggle 1s ease-out;
    }
    @keyframes wiggle {
      0%,
      100% {
        transform: translateX(0);
      }
      10%,
      30%,
      50%,
      70%,
      90% {
        transform: translateX(-10px);
      }
      20%,
      40%,
      60%,
      80% {
        transform: translateX(10px);
      }
    }
    `,
    description: "Wiggle effect",
    tooltipContainer: () => {
      return (
        <div className="cursor-pointer border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute top-12 border p-1 rounded-xl wiggle">Sample</p>
      );
    },
  },
];

export const TooltipContent = () => {
  const [isOpenTooltip, setIsOpenTooltip] = useState(
    new Array(tooltipContent.length).fill(false)
  );
  const [copy, setCopy] = useState(
    tooltipContent.map((tooltip) => tooltip.css)
  );

  const [isAnimationTooltipOpen, setIsAnimationTooltipOpen] = useState({});

  const handleMouseEnterForAnimationEvent = (index) => {
    setIsAnimationTooltipOpen((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  const handleMouseLeaveForAnimationEvent = (index) => {
    setIsAnimationTooltipOpen((prev) => ({
      ...prev,
      [index]: false,
    }));
  };

  const handleMouseEnter = (index) => {
    setIsOpenTooltip((prev) => {
      const newIsOpenTooltip = [...prev];
      newIsOpenTooltip[index] = true;
      return newIsOpenTooltip;
    });
  };

  const handleMouseLeave = (index) => {
    setIsOpenTooltip((prev) => {
      const newIsOpenTooltip = [...prev];
      newIsOpenTooltip[index] = false;
      return newIsOpenTooltip;
    });
  };

  return (
    <div className="h-screen max-h-10 sm:max-h-10  grid place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {tooltipContent.map((tooltip, index) => (
        <div
          key={index}
          className={`h-[200px] w-[200px] relative border overflow-hidden backdrop-blur-2xl  transition mx-5 my-5 rounded-2xl flex items-center justify-center`}
        >
          <div className="w-[50px] h-[50px] bg-[#6d60b9] blur-3xl z-0 absolute top-0 left-0"></div>
          <h1 className="absolute select-none font-medium  top-1">
            {tooltip.name}
          </h1>
          {animationCodeCopy.map((tooltip, tooltipIndex) => (
            <div
              className="absolute top-2 right-2 border rounded-lg  cursor-pointer"
              key={tooltipIndex}
            >
              <div
                onMouseEnter={() => handleMouseEnterForAnimationEvent(index)}
                onMouseLeave={() => handleMouseLeaveForAnimationEvent(index)}
                onClick={() => {
                  navigator.clipboard.writeText(tooltipContent[index].css);
                  setCopy((prev) => {
                    const newCopy = [...prev];
                    newCopy[index] = true;
                    return newCopy;
                  });
                  setTimeout(() => {
                    setCopy((prev) => {
                      const newCopy = [...prev];
                      newCopy[index] = false;
                      return newCopy;
                    });
                  }, 2000);
                }}
              >
                {tooltip.animationCopy}
                {copyCopiedTxt.map((txt, txtIndex) => (
                  <div
                    onMouseEnter={() => handleMouseEnter(txtIndex)}
                    onMouseLeave={() => handleMouseLeave(txtIndex)}
                    key={txtIndex}
                    className="flex items-center  justify-center"
                  ></div>
                ))}
              </div>
            </div>
          ))}
          <div
            className="flex relative text-nowrap  items-center justify-center "
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {tooltip.tooltipContainer && tooltip.tooltipContainer()}
            {isOpenTooltip[index] && (
              <>{tooltip.tooltipSample && tooltip.tooltipSample()}</>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
