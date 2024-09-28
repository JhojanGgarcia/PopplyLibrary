import { Manrope } from "next/font/google";
import "./globals.css";

const poppinsFont = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  icons:{
    icon: "/logo.png",
  },
  title: "Popply library",
  description: "Components about animations and Effects for your website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" cz-shortcut-listen="false">
      <body suppressHydrationWarning={true} className={`${poppinsFont.className} bg-black overflow-x-hidden overflow-auto`}>{children}</body>
    </html>
  );
}
