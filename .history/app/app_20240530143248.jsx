'use client'
import "@/app/styles/animations.css"
import { Header } from "./components/Header";
import { TooltipContent } from "./lib/TooltipContent";
const title = `Tooltips & Effects`;

export default function App() {
  return (
    <main className="w-screen flex mx-auto items-center justify-center h-screen max-w-7xl ">
      <Header />
      <div className="w-full flex items-center justify-center">
        <div className="flex flex-col items-center absolute top-44 text-center ">
          <h1 className="overflow-hidden text-4xl font-semibold  px-2  text-center">
            {title.match(/./gu).map((char, index) => (
              <span
                className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
                key={`${char}-${index}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
          <h2 className="font-semibold max-w-2xl fadein text-center text-xl">
            Collection of components
          </h2>
        </div>
        <TooltipContent />
      </div>
    </main>
  );
}
