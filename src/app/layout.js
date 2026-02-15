import localFont from "next/font/local";
import "./globals.css";
import { cn } from "../lib/utils";


export const metadata = {
  title: "M.Asad Amir",
  description: "A showcase of my work and skills.",
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
      <body className={cn(goodTimes.variable, paradroid.variable, paradroidMain.variable)}>
        <main>
            {children}
        </main>
      </body>
    </html>
  );
}
