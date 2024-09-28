
import Code from "./Code";
import "../styles/scrollbarCode.css"
import "../styles/bgCode.css"
import "../styles/mask.css"
export const CodeBlock = ({
  code,
  fileName,
  lang = "typescript",
  theme = "github-light",
  className,
  ...props
}) => {
  return (
    <figure
      className="-mt-1 relative mask  flex w-full flex-col flex-wrap rounded-2xl text-white leading-6 dark:bg-[rgb(15,15,17)]"
      {...props}
    >
      <div className="flex items-center  justify-between px-5 py-3">
        <figcaption className="mr-[-48px] max-w-full whitespace-nowrap font-medium text-neutral-600 text-xs dark:text-neutral-200">
          <span>./{fileName ?? <br />}.css</span>
        </figcaption>
      </div>
      <div className="w-full px-1 pb-1 ">
        <div className="relative isolate  overflow-hidden rounded-xl flex  gap-1 transform-gpu place-content-center text-nowrap px-4 py-2 font-medium text-xs tracking-tighter transition-all duration-100
                  bg-gradient-to-b from-neutral-200 to-neutral-200/50 text-neutral-800 dark:from-neutral-950 dark:to-neutral-950/65 dark:text-neutral-300
        
                  dark:shadow-[0_1.5px_0.5px_2.5px_rgba(0,0,0,0.4),_0_0_0.5px_1px_rgba(0,0,0,1),_inset_0_-20px_1px_1px_rgba(0,0,0,0.25),_inset_0_1px_1px_1px_rgba(255,255,255,0.2)]
                  dark:hover:shadow-[0_0_0_0_rgba(0,0,0,0),_0_0_0.5px_1px_rgba(0,0,0,1),_inset_0_2px_1px_1px_rgba(0,0,0,0.25),_inset_0_1px_1px_0_rgba(255,255,255,0.15)]
                  hover:shadow-[0_0_0_0_rgba(0,0,0,0),_0_0_0.5px_1px_rgba(0,0,0,0.25),_inset_0_1px_0.5px_0.5px_rgba(255,255,255,0.4),_inset_0_1px_1px_1px_rgba(255,255,255,0.8)]
                  active:shadow-[0_0_0_0_rgba(0,0,0,0),_0_0_1px_1px_rgba(0,0,0,0.15),_inset_0_1px_0.5px_0.5px_rgba(0,0,0,0.3),_inset_0_1.5px_1.5px_1.5px_rgba(255,255,255,0.6)]
                  border-white/10 border shadow-black/5 shadow-sm  dark:shadow-black/10">
          <pre
            data-language={lang}
            className="overflow-x-auto bgCode scrollbarCode  overflow-y-auto text-sm text-white leading-6"
          >
            <Code code={code} lang={lang} theme={theme} />
          </pre>
        </div>
      </div>
    </figure>
  );
};
