import localFont from 'next/font/local';
import './globals.css';

const secr = localFont({
  src: '../fonts/secrcode.ttf',
  variable: '--font-secret',
  display: 'swap',
});

const f25 = localFont({
  src: '../fonts/F25_Bank_Printer.ttf',
  variable: '--font-f25',
  display: 'swap',
});

export const metadata = {
  title: 'Asad Amir',
  description: 'Portfolio site for Asad Amir',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="Portfolio" className={`${secr.variable} ${f25.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
