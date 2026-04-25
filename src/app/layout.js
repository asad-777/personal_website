import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { cn } from "../lib/utils";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { SmoothScrolling } from "@/components/ui/smooth-scrolling";
import GlobalBackground from "@/components/GlobalBackground";


export const metadata = {
  title: "Asad Amir",
  description: "A showcase of my work and skills. My personal portfolio page",
  icons: {
    icon: "/logo.png",
  },
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
    <html lang="en" data-theme="Portfolio-dark" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="P2-zTB2CZK9jhHpma5PWMzgzXNuN5YSbdQ6cyfQB8MU" />
        {/* Inline script: apply saved theme before first paint to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
      </head>
      <body className={cn(goodTimes.variable, paradroid.variable, paradroidMain.variable)}>
        <GlobalBackground />
        <div className="relative z-10">
          <SmoothScrolling>
            <main>
              {children}
              <Analytics />
              <SmoothCursor />
            </main>
          </SmoothScrolling>
        </div>
      </body>
    </html>
  );
}

