import { Github } from "lucide-react";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="items-center justify-between px-4 sm:flex">
        <svg className="absolute  opacity-30 blur-3xl" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop id="stop1" stopColor="#554970" offset="0%"></stop>
              <stop id="stop2" stopColor="#554974" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient)"
            d="M11.1,-15.2C12,-12.5,8.6,-6.7,10.3,-1.3C11.9,0.2,18.5,9.4,18.6,12.3C18.8,15.2,12.4,15.9,7.7,14.8C3.1,13.7,0.1,10.8,-1.3,8.3C-2.8,5.7,-2.6,3.6,-4.4,1.9C-6.2,0.2,-9.9,-1.1,-14.1,-6.9C-18.4,-12.8,-23.2,-23.1,-21,-25.5C-18.7,-27.9,-9.4,-22.3,-2.1,-19.8C5.1,-17.2,10.3,-17.8,11.1,-15.2Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
          ></path>
        </svg>
        <p className="font-light text-gray-300 dark:text-black/80">
          © 2025{" "}
          <span className="font-pacifico font-medium text-[#8873bd]">
            Popply
          </span>
          . All rights reserved.
        </p>
        <div className="mt-6 z-50 flex items-center gap-x-6 text-gray-400">
          <Link
            className="flex items-center gap-1 rounded-lg border border-white/10 p-1 text-xs text-white shadow-[0_4px_10px_rgba(0,0,0,0.1)] dark:border-black/20 dark:text-black/70"
            href="https://github.com/JhojanGgarcia/PopplyLibrary"
          >
            <Github className="h-4 w-4 dark:stroke-black/60" />
            Stars on Github
          </Link>
        </div>
      </div>
    </footer>
  );
}
