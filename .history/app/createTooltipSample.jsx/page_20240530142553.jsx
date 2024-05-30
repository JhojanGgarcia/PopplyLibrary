"use client";
import React, { useState } from "react";
import Link from "next/link";
import "../styles/animations.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

const route = [
  {
    iconRoute: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        color="#000000"
        fill="none"
      >
        <path
          d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    home: "/",
    description: "Back to home",
  },
];

const tooltipSample = [
  {
    iconSample: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        color="#000000"
        fill="none"
      >
        <path
          d="M7 8C4.01099 8.5559 2 9.59492 2 10.7849C2 12.5606 6.47715 14 12 14C17.5228 14 22 12.5606 22 10.7849C22 9.59492 19.989 8.5559 17 8"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.32229 8.84003C6.87335 8.21459 6.96834 7.81402 7.15831 7.01288C7.68534 4.79037 9.6202 3 12 3C14.3798 3 16.3147 4.79037 16.8417 7.01288C17.0317 7.81402 17.1267 8.21459 16.6777 8.84003C15.4532 10.546 8.31188 10.2187 7.32229 8.84003Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7 14L5 21M17 14L19 21"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.9998 19H12.0088"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    description: "Tooltip Sample",
  },
];

export const copyAndCopied = [
  {
    copy: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-copy"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
        <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
      </svg>
    ),
    copied: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-copy-check"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
        <path d="M4.012 16.737a2 2 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
        <path d="M11 14l2 2l4 -4" />
      </svg>
    ),
  },
];

export default function App() {
  const [openRoute, setOpenRoute] = React.useState(false);
  const [copy, setCopy] = useState(false);
  const [openSample, setOpenSample] = React.useState(false);

  const codeString = `
'use client'
  import React, { useState } from "react";

const Tooltip = [
    {
        icon: (
            {/*Place your favorite icon here*/}
        ),
        description: "Tooltip Content",
    }

]

export default function TooltipSample()  {
    const [openTooltip, setOpenTooltip] = useState(false);

    const handleMouseEnter = () => {
        setOpenTooltip(true);
    };
    const handleMouseLeave = () => {
        setOpenTooltip(false);
    };

    return(
        <main className="flex items-center justify-center w-screen h-screen">
            {Tooltip.map((tooltip,index)=>(
            <div 
            className="flex items-center justify-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            key={index}>{tooltip.icon}</div>
            ))}
            {openTooltip && <p className="absolute border p-1 rounded-xl">Tooltip Content</p>}
        </main>
    )
}
  `;
  const handleMouseEnter = () => {
    setOpenRoute(true);
  };

  const handleMouseEnterSample = () => {
    setOpenSample(true);
  };

  const handleMouseLeave = () => {
    setOpenRoute(false);
  };

  const handleMouseLeaveSample = () => {
    setOpenSample(false);
  };

  return (
    <main className="w-screen flex mx-auto items-center justify-center h-screen max-w-7xl ">
      <header className="flex w-screen rounded-b-3xl z-10 items-center border justify-center mx-auto max-w-3xl absolute h-16 top-0 ">
        <p className="text-xl  jiggle top-0 text-nowrap sticky text-ellipsis overflow-hidden whitespace-nowrap max-w-[90%]">
         Look at how to create a tooltip.
        </p>
        <ul className="absolute left-0 mx-5">
          {route.map((item, index) => (
            <li key={index} className="flex items-center justify-center gap-2">
              <Link
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                href={item.home}
                className="flex items-center backdrop-blur-lg border rounded-lg justify-center gap-2"
              >
                {item.iconRoute}
              </Link>
              {openRoute && (
                <p className="absolute backdrop-blur-sm top-12 border p-1 rounded-xl tada text-nowrap">
                  {item.description}
                </p>
              )}
            </li>
          ))}
        </ul>
      </header>
      <section className="w-screen h-screen flex items-center justify-center absolute  top-18 max-w-7xl ">
        <div className=" rounded-3xl  w-full relative h-full max-w-3xl flex flex-col items-center justify-center">
          <article className="max-w-3xl w-full text-ellipsis absolute top-20 p-6 ">
            <div className="w-full">
              <h1 className="font-semibold">
                Create a tooltip using React and Tailwind.
              </h1>
            </div>
            <div className=" w-full">
              <p className="text-black/50">
                <br />
                The creation of tooltips in development is very popular on the
                web because of the flexibility it offers to the user, due to the
                ability to provide additional information without overloading
                the interface.
                <br />
                <br />
                These small pop-up text boxes allow users to get more details
                about an element by hovering over it, improving the user
                experience by making navigation more intuitive and accessible.
              </p>
            </div>
            <div className="w-full h-screen  flex flex-col gap-5">
              <div className="w-full flex  text-left gap-4 flex-col">
                <br />
                <p className="font-semibold">Tooltip Sample.</p>
                <div className="w-full relative border p-20 flex items-center justify-center h-full rounded-xl">
                  <p className="absolute top-0 text-center p-1">
                    Place your mouse over the UFO.
                  </p>
                  {tooltipSample.map((item, index) => (
                    <div
                      onMouseEnter={handleMouseEnterSample}
                      onMouseLeave={handleMouseLeaveSample}
                      className="rounded-lg border flex mx-auto items-center jusitfy-center cursor-pointer p-2"
                      key={index}
                    >
                      {item.iconSample}
                    </div>
                  ))}
                  {openSample && (
                    <p className="tada bottom-6 border p-2 rounded-xl text-nowrap absolute">
                      {tooltipSample[0].description}
                    </p>
                  )}
                </div>
              </div>
              <p className="font-semibold">Code Sample.</p>
              <div className=" bg-[#fff] border z-10 grid rounded-xl place-content-center">
                <div className="w-full rounded-xl overflow-hidden">
                  <div className="flex justify-between pb-3 pt-6 px-6">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 rounded-full bg-red-500"></div>
                      <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                      <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    </div>
                    {copy ? (
                      <button>{copyAndCopied[0].copied}</button>
                    ) : (
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(codeString);
                          setCopy(true);
                          setTimeout(() => {
                            setCopy(false);
                          }, 1500);
                        }}
                      >
                        {copyAndCopied[0].copy}
                      </button>
                    )}
                  </div>
                  <SyntaxHighlighter
                    customStyle={{
                      padding: "27px",
                    }}
                    language="jsx"
                    style={atomOneLight}
                  >
                    {codeString}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
