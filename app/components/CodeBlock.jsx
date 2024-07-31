import "@/app/styles/scrollbarCode.css";

export const CodeBlock = ({ code }) => {
  return (
    <div className=" max-w-md transform-gpu overflow-hidden rounded-2xl border border-neutral-500/15 backdrop-blur-2xl shadow-sm transition-transform ">
      <div className="flex items-end">
        <span
          className=" pr-0.5 pb-4 pl-2 text-end font-medium text-neutral-400 text-sm tracking-widest dark:text-neutral-500"
          style={{
            writingMode: "sideways-lr",
            textOrientation: "mixed",
          }}
        >
          CSS
        </span>
        <div className="w-full overflow-auto scrollbarCode transform-gpu rounded-2xl border-neutral-500/15 border-l bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1)_0%,transparent_60%)] py-2 shadow-lg shadow-neutral-600/20 transition-transform  dark:shadow-neutral-900">
          <pre className="">
            <code className="code  text-xs text-white/50">{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
