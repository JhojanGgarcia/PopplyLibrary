import * as React from "react";

export const Input = ({ onChange, placeholder, type, value }) => {
  return (
    <input
      className="flex h-10 w-[100px] md:w-full rounded-xl border px-3 py-2 text-sm ring-0 focus:ring-0 transition focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 border-neutral-400/20 bg-neutral-900 placeholder:text-neutral-400 focus-visible:border-white/5 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm text-white"
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
