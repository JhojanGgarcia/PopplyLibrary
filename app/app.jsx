"use client";

import { Header } from "./components/Header";
import { TooltipContent } from "./lib/TooltipContent";
import HeroText from "./components/HeroText";
import { motion } from "framer-motion";
import Link from "next/link";
export default function App() {
  return (
    <main className="min-w-screen flex dark:bg-black items-center justify-center min-h-screen">
      <div className="relative flex justify-center overflow-x-hidden">
        <Header />
        <div className="flex items-center justify-center my-72">
          <div className="flex flex-col  items-center justify-center absolute top-32 text-center ">
            <HeroText label="Popply" description="Animations and Effects" />
          </div>
          <TooltipContent />
        </div>
      </div>
    </main>
  );
}
