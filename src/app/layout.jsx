import { Bricolage_Grotesque } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const bricolageFont = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Popply library",
  description: "Components about animations and Effects for your website.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/favicon-dark.ico",
        href: "/images/favicon-dark.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/favicon-light.ico",
        href: "/images/favicon-light.ico",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${bricolageFont.className} overflow-x-hidden scroll-smooth bg-[#0f0f0f] transition-colors duration-500 dark:bg-white`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
