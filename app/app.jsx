"use client";

import { Header } from "./components/common/Header";
import { TooltipContent } from "./components/common/Content";


export default function App() {
  return (
    <main className="min-w-screen  flex dark:bg-black items-center justify-center min-h-screen">
      <Header />
      <TooltipContent />
    </main>
  );
}
