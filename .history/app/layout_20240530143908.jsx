import { Poppins } from "next/font/google";
import "./globals.css";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Popply library",
  description: "Components about animations and Effects for your website.",
};

<<<<<<<<<<<<<<  ✨ Codeium Command 🌟 >>>>>>>>>>>>>>>>
 export default function RootLayout({ children }) {
   return (
+    <html lang="en" cz-shortcut-listen="false">
-    <html lang="en">
       <body className={`${poppinsFont.className}flex items-center justify-center overflow-x-hidden`}>{children}</body>
     </html>
   );
 }
<<<<<<<  a64b39ae-f4bb-4de9-b5a9-cd022930dd14  >>>>>>>
