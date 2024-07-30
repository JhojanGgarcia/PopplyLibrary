import { Poppins } from "next/font/google";
import "./globals.css";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
      <body suppressHydrationWarning={true} className={`${poppinsFont.className} overflow-x-hidden overflow-auto`}>{children}</body>
    </html>
  );
}
