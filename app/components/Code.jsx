import { useEffect, useState } from "react";

export default function ShikiCode({ code, lang, className, ...props }) {
  const [html, setHtml] = useState("");

  useEffect(() => {
    async function loadShiki() {
      const { codeToHtml } = await import("shiki"); // Importación dinámica

      const result = await codeToHtml(code, {
        lang: lang || "css",
        theme: "poimandres",
        full: true,
      });
      const updatedHtml = result.replace(/background-color:[^;]+;/g, "");
      setHtml(updatedHtml);
    }

    loadShiki();
  }, [code, lang]);

  return (
    <div
      className={`text-sm text-white ${className}`}
      {...props}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
