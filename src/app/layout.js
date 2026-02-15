import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { cn } from "../lib/utils";


export const metadata = {
  title: "Asad Amir",
  description: "A showcase of my work and skills. My personal portfolio page",
};

const goodTimes = localFont({
  src: "../fonts/goodtimes.otf",
  variable: "--font-pro",
});

const paradroid = localFont({
  src: "../fonts/paradroid.ttf",
  variable: "--font-seco",
});

const paradroidMain = localFont({
  src: "../fonts/paradroid.ttf",
  variable: "--font-main",
});

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="Portfolio-dark">
      <head>
        <meta name="google-site-verification" content="P2-zTB2CZK9jhHpma5PWMzgzXNuN5YSbdQ6cyfQB8MU" />
      </head>
      <body className={cn(goodTimes.variable, paradroid.variable, paradroidMain.variable)}>
        <main>
            {children}
          <Analytics/>
        </main>
      </body>
    </html>
  );
}
