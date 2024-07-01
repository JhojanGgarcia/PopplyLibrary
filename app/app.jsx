"use client";
import "@/app/styles/animations.css";
import { Header } from "./components/Header";
import { TooltipContent } from "./lib/TooltipContent";
import AnimatedText from "./components/AnimatedText";

export default function App() {
  return (
    <main className="w-screen flex mx-auto items-center justify-center h-screen max-w-7xl ">
      <Header />
      <div className="w-full flex items-center justify-center">
        <div className="flex flex-col items-center absolute top-44 text-center ">
          <AnimatedText message={"Popply library"} fontSize="text-4xl" fontSizeSM="text-4xl" />

          <h2 className="font-semibold p-6 max-w-xs fadein text-center text-xl">
            Collection of tooltips components
          </h2>
        </div>
        <TooltipContent />
      </div>
    </main>
  );
}
