import { iconForTooltips } from "./globalIcon";
import {motion} from "framer-motion";
export const animationCodeCopy = [
  {
    copy: (
        <svg
        className="text-white dark:text-black"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        color="#000000"
        fill="none"
      >
        <path
          d="M9 15C9 12.1716 9 10.7574 9.87868 9.87868C10.7574 9 12.1716 9 15 9L16 9C18.8284 9 20.2426 9 21.1213 9.87868C22 10.7574 22 12.1716 22 15V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15C12.1716 22 10.7574 22 9.87868 21.1213C9 20.2426 9 18.8284 9 16L9 15Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.9999 9C16.9975 6.04291 16.9528 4.51121 16.092 3.46243C15.9258 3.25989 15.7401 3.07418 15.5376 2.90796C14.4312 2 12.7875 2 9.5 2C6.21252 2 4.56878 2 3.46243 2.90796C3.25989 3.07417 3.07418 3.25989 2.90796 3.46243C2 4.56878 2 6.21252 2 9.5C2 12.7875 2 14.4312 2.90796 15.5376C3.07417 15.7401 3.25989 15.9258 3.46243 16.092C4.51121 16.9528 6.04291 16.9975 9 16.9999"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    copied: (
      <motion.svg
        className="text-white dark:text-black"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        color="#000000"
        fill="none"
      >
        <path
          d="M9 15C9 12.1716 9 10.7574 9.87868 9.87868C10.7574 9 12.1716 9 15 9L16 9C18.8284 9 20.2426 9 21.1213 9.87868C22 10.7574 22 12.1716 22 15V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15C12.1716 22 10.7574 22 9.87868 21.1213C9 20.2426 9 18.8284 9 16L9 15Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <motion.path
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            damping: 10,
          }}
          d="M16.9999 9C16.9975 6.04291 16.9528 4.51121 16.092 3.46243C15.9258 3.25989 15.7401 3.07418 15.5376 2.90796C14.4312 2 12.7875 2 9.5 2C6.21252 2 4.56878 2 3.46243 2.90796C3.25989 3.07417 3.07418 3.25989 2.90796 3.46243C2 4.56878 2 6.21252 2 9.5C2 12.7875 2 14.4312 2.90796 15.5376C3.07417 15.7401 3.25989 15.9258 3.46243 16.092C4.51121 16.9528 6.04291 16.9975 9 16.9999"
          stroke="#857ffa"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </motion.svg>
    ),
  },
];

export const copyCopiedTxt = [
  {
    copyAnimation: "copy",
    copiedAnimation: "copied",
  },
];

export const tooltipContent = [
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
        <div className="cursor-pointer dark:border-white/10   border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl fadein">Sample</p>
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] z-10 border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl fadeindown">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] z-10 border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  left-12 border p-1 rounded-xl fadeintopleft">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] z-10 border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  right-12 border p-1 rounded-xl fadeintopright">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] z-10 border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl fadeinup">Sample</p>
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] z-10 border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl fadeout">Sample</p>
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl fadeoutdown">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  left-12 border p-1 rounded-xl fadeoutleft">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  right-12 border p-1 rounded-xl fadeoutright">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl fadeoutup">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl slideindown">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  left-12 border p-1 rounded-xl slideinleft">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  right-12 border p-1 rounded-xl slideinright">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl slideinup">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl slideoutdown">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  left-12 border p-1 rounded-xl slideoutleft">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  right-12 border p-1 rounded-xl slideoutright">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl slideoutup">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl slidedown">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  left-12 border p-1 rounded-xl slideleft">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  right-12 border p-1 rounded-xl slideright">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl slideup">Sample</p>
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl zoomin">Sample</p>
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl zoomout">Sample</p>
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl tada">Sample</p>
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl spinnergrow">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl spinnershrink">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl fadeintopleft">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl fadeintopright">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl fadeinbottomleft">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl fadeinbottomright">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl fadeinbouncedown">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl fadeinbounceup">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl fadeinbounceright">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl fadeinbounceright">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl fadeoutleft">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl fadeouttopleft">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl fadeouttopright">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl dropin">Sample</p>
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl dropout">Sample</p>
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl flyin">Sample</p>
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl flyinup">Sample</p>
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl flyindown">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl flyinleft">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl flyinright">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl flyout">Sample</p>
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl flyoutup">Sample</p>
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl flyoutdown">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl flyoutleft">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl flyoutright">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl browsein">Sample</p>
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl browseout">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl browseoutleft">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl browseoutright">
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl jiggle">Sample</p>
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl flash">Sample</p>
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl shake">Sample</p>
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl glow">Sample</p>
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
        <div className="cursor-pointer dark:border-white/10  dark:shadow-[] border p-1 rounded-lg">
          {iconForTooltips[0].globalIcon}
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <p className="absolute dark:border-white/10  top-12 border p-1 rounded-xl wiggle">Sample</p>
      );
    },
  },
];
