import localFont from 'next/font/local';
import './globals.css';

const proFont = localFont({
  src: '../fonts/goodtimes.otf',
  variable: '--font-pro',
  display: 'swap',
});

const secondaryFont = localFont({
  src: '../fonts/candlb.ttf',
  variable: '--font-seco',
  display: 'swap',
});

const mainFont = localFont({
  src: '../fonts/candl.ttf',
  variable: '--font-main',
  display: 'swap',
});

export const metadata = {
  title: 'Asad Amir',
  description: 'Portfolio site for Asad Amir',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="Portfolio-dark" className={`${mainFont.variable} ${secondaryFont.variable} ${proFont.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
