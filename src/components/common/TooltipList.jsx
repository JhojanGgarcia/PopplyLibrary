import Favicon from "@/components/icons/Favicon";
import Image from "next/image";

const TooltipContent = [
  {
    name: "fadeIn",
    category: "fade",
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
    tooltipContainer: () => {
      return (
        <div className="z-0 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="fadein absolute bottom-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "fadeInDown",
    category: "fade",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="fadeindown absolute top-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "fadeInLeft",
    category: "fade",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="fadeinleft absolute right-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "fadeInRight",
    category: "fade",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="fadeinright absolute left-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "fadeInUp",
    category: "fade",
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

    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="fadeinup absolute bottom-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "fadeOut",
    category: "fade",
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

    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="fadeout absolute bottom-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "fadeOutDown",
    category: "fade",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="fadeoutdown absolute top-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "fadeOutLeft",
    category: "fade",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="fadeoutleft absolute right-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "fadeOutRight",
    category: "fade",
    css: `
.fadeoutright {
  animation: fade-out-right 1s ease-out;
  -webkit-animation: fade-out-right 1s ease-out;
}
@keyframes fade-out-right {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;  
  }}
      `,
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="fadeoutright absolute left-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "fadeOutUp",
    category: "fade",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="fadeoutup absolute bottom-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "slideInDown",
    category: "slide",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="slideindown absolute top-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "slideInLeft",
    category: "slide",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="slideinleft absolute right-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "slideInRight",
    category: "slide",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="slideinright absolute left-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "slideInUp",
    category: "slide",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="slideinup absolute bottom-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "slideOutDown",
    category: "slide",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="slideoutdown absolute top-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "slideOutLeft",
    category: "slide",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="slideoutleft absolute right-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "slideOutRight",
    category: "slide",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="slideoutright absolute left-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "slideOutUp",
    category: "slide",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="slideoutup absolute bottom-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "slideDown",
    category: "slide",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="slidedown absolute top-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "slideLeft",
    category: "slide",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="slideleft absolute right-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "slideRight",
    category: "slide",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="slideright absolute left-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "slideUp",
    category: "slide",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="slideup absolute bottom-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "zoomIn",
    category: "zoom",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="zoomin absolute top-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "zoomOut",
    category: "zoom",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="zoomout absolute top-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "Tada",
    category: "special",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="tada absolute top-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "spinnerGrow",
    category: "special",
    css: `
.spinnergrow {
  animation: spinner-grow 1s ease-out infinite;
  -webkit-animation: spinner-grow 1s ease-out infinite;
  transform-origin: center;
  display: inline-block;
}

@keyframes spinner-grow {
  0% {
    transform: scale(0);
    opacity: 0.2;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(0.95);
    opacity: 0;
  }
}
      `,
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="spinnergrow absolute top-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "spinnerShrink",
    category: "special",
    css: ` 
.spinnershrink {
  animation: spinner-shrink 1s ease-in-out forwards;
  -webkit-animation: spinner-shrink 1s ease-in-out forwards;
  transform-origin: center;
  display: inline-block;
}

@keyframes spinner-shrink {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.8);
    opacity: 0.7;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}
      `,
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="spinnershrink absolute top-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "fadeInTopLeft",
    category: "fade",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="fadeintopleft absolute bottom-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "fadeInTopRight",
    category: "fade",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="fadeintopright absolute bottom-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "fadeInBottomLeft",
    category: "fade",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="fadeinbottomleft absolute top-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "fadeInBottomRight",
    category: "fade",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="fadeinbottomright absolute top-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "fadeInBounceDown",
    category: "fade",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="fadeinbouncedown absolute bottom-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "fadeInBounceUp",
    category: "fade",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="fadeinbounceup absolute top-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "fadeInBounceRight",
    category: "fade",
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
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="fadeinbounceright absolute right-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "fadeInBounceLeft",
    category: "fade",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="fadeinbounceleft absolute right-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "fadeOutLeft",
    category: "fade",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="fadeoutleft absolute right-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "fadeOutTopLeft",
    category: "fade",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="fadeouttopleft absolute right-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "fadeOutTopRight",
    category: "fade",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="fadeouttopright absolute right-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "dropIn",
    category: "drop",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="dropin absolute right-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "dropOut",
    category: "drop",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="dropout absolute right-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "flyIn",
    category: "fly",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="flyin absolute right-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "flyInUp",
    category: "fly",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="flyinup absolute right-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "flyInDown",
    category: "fly",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="flyindown absolute right-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "flyInLeft",
    category: "fly",
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
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="flyinleft absolute right-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "flyInRight",
    category: "fly",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="flyinright absolute right-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "flyOut",
    category: "fly",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="flyout absolute right-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "flyOutUp",
    category: "fly",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="flyoutup absolute right-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "flyOutDown",
    category: "fly",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="flyoutdown absolute right-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "flyOutLeft",
    category: "fly",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="flyoutleft absolute right-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "flyOutRight",
    category: "fly",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="flyoutright absolute right-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "browseIn",
    category: "browse",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="browsein absolute right-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "browseOut",
    category: "browse",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="browseout absolute right-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "browseOutLeft",
    category: "browse",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="browseoutleft absolute left-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "browseOutRight",
    category: "browse",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="browseoutright absolute right-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "jiggle",
    category: "special",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="jiggle absolute right-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "flash",
    category: "special",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="flash absolute right-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "shake",
    category: "special",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="shake absolute right-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "glow",
    category: "special",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="glow absolute right-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "wiggle",
    category: "special",
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
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="wiggle absolute right-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "bounceBlurIn",
    badge: "New",
    category: "special",
    css: `
.bounceblurin {
  animation: bounce-blur-in 0.5s cubic-bezier(0.4, 0, 0.2, 1) both;
}

@keyframes bounce-blur-in {
0% {
  transform: scale(0.8);
  opacity: 0;
  filter: blur(4px);
}
60% {
  transform: scale(1.05);
  opacity: 1;
  filter: blur(0);
}
100% {
  transform: scale(1);
}
}
      `,
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="bounceblurin absolute right-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "floatFadeIn",
    badge: "New",
    category: "special",
    css: `
.floatfadein {
  animation: float-fade-in 0.5s ease-out both;
}
@keyframes float-fade-in {
0% {
  opacity: 0;
  transform: translateY(10px);
}
100% {
  opacity: 1;
  transform: translateY(0);
}
}
      `,
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="floatfadein absolute right-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "scalePunchIn",
    badge: "New",
    category: "special",
    css: `
.scalepunchin {
  animation: scale-punch-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}
@keyframes scale-punch-in {
0% {
  opacity: 0;
  transform: scale(0.5);
}
60% {
  opacity: 1;
  transform: scale(1.2);
}
100% {
  transform: scale(1);
}
}
      `,
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="scalepunchin absolute right-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
  {
    name: "flipPopIn",
    badge: "New",
    category: "special",
    css: `
.flippopin {
  animation: flip-pop-in 0.6s ease-out both;
  transform-style: preserve-3d;
}
@keyframes flip-pop-in {
0% {
  opacity: 0;
  transform: rotateX(90deg) scale(0.8);
  transform-origin: top;
}
100% {
  opacity: 1;
  transform: rotateX(0deg) scale(1);
}
}
      `,
    tooltipContainer: () => {
      return (
        <div className="z-10 cursor-pointer rounded-xl border border-white/10 p-1.5 dark:border-black/10">
          <Favicon />
        </div>
      );
    },
    tooltipSample: () => {
      return (
        <div className="flippopin absolute right-12 rounded-md border border-white/10 px-2 py-1 text-xs whitespace-nowrap text-white dark:border-black/10 dark:text-black">
          <span>Sample</span>
        </div>
      );
    },
  },
];
export default TooltipContent;
