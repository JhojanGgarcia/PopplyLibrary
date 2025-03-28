"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useEffect, useState } from "react";

export default function Code({ code, language = "css", filename, children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative z-0 mx-auto flex w-full flex-col items-center overflow-hidden">
      <div className="relative flex w-full flex-col">
        {filename && (
          <span className="mb-1 text-xs text-white dark:text-black">
            {filename}
          </span>
        )}

        <div className="gutter relative max-h-[40vh] w-full overflow-y-auto rounded-xl border border-white/10 dark:border-black/20">
          <div className="relative flex flex-col">
            {children}
            <SyntaxHighlighter
              language={language}
              style={materialDark}
              customStyle={{
                background: "!transparent",
                fontFamily: "Monaco",
                fontSize: "0.72rem",
                margin: 0,
                padding: "5px",
              }}
              wrapLongLines
              wrapLines
              showLineNumbers
            >
              {code}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
}
