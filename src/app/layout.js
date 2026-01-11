import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata = {
  title: "M.Asad Amir",
  description: "A showcase of my work and skills.",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="Portfolio-dark">
      <body className={cn(inter.variable, outfit.variable)}>
        <main>
            {children}
        </main>
      </body>
    </html>
  );
}
