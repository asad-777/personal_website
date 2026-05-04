import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import { cn } from "../lib/utils";
import { SmoothScrolling } from "@/components/ui/smooth-scrolling";
import GlobalBackground from "@/components/GlobalBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { GA_MEASUREMENT_ID } from "@/lib/gtag";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
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
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {/* Inline script: apply saved theme before first paint to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
      </head>
      <body className={cn(goodTimes.variable, paradroid.variable, paradroidMain.variable)}>
        <GlobalBackground />
        
        {/* Navbar and Cursor are OUTSIDE the zoom content so they stay at 100% scale and top layer */}
        <Navbar />

        <div className="relative z-10 zoom-content">
          <SmoothScrolling>
            <main>
              {children}
            </main>
          </SmoothScrolling>
        </div>
        <Footer/>
      </body>
    </html>
  );
}

