import { useEffect, useState } from 'react';
import { codeToHtml, createHighlighter } from 'shiki';

export default function ShikiCode({ code, lang, className, ...props }) {
  const [html, setHtml] = useState('');

  
  useEffect(() => {
    codeToHtml(code, { lang: 'css', theme: 'poimandres', full: true }).then((result) => {
      const updatedHtml = result.replace(/background-color:[^;]+;/g, '');
      setHtml(updatedHtml);
    });
  }, [code, lang]);

  return (
    <div
      className={`text-sm   text-white ${className}`}
      {...props}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
