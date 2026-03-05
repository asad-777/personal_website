"use client";

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Menu, X, House } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import GlassSurface from "@/components/GlassSurface";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = ["Projects", "Hackathons", "About", "Open Source"];

export default function Navbar({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className="drawer drawer-end">
      <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />

      {/* Page content slot */}
      <div className="drawer-content">
        {/* Desktop nav pill */}
        <GlassSurface
          className="hidden xl:flex fixed! top-12 left-8 z-50 px-6"
          width="fit-content"
          height={56}
          borderRadius={9999}
          backgroundOpacity={0.05}
          borderWidth={0.5}
        >
          <div className="flex items-center gap-8">
            {/* Home icon — only shown when not on home page */}
            {!isHome && (
              <>
                <Link
                  href="/"
                  className="text-base-content hover:text-primary transition-colors"
                  aria-label="Home"
                >
                  <House className="w-5 h-5" />
                </Link>
                <span className="text-base-content text-xl select-none">•</span>
              </>
            )}
            {navItems.map((item, index, array) => (
              <div key={item} className="flex items-center gap-8">
                <a
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-base-content font-bold nav-link text-lg whitespace-nowrap"
                >
                  {item}
                </a>
                {index < array.length - 1 && (
                  <span className="text-base-content text-xl select-none">•</span>
                )}
              </div>
            ))}
          </div>
        </GlassSurface>

        {/* Top-right buttons */}
        <div className="fixed top-12 right-8 z-50 h-14 flex items-center gap-4 scale-90 md:scale-100 origin-top-right">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform cursor-pointer"
          >
            <GlassSurface
              width={56}
              height={56}
              borderRadius={9999}
              backgroundOpacity={0.05}
              borderWidth={0.5}
            >
              <FaGithub className="w-6 h-6 text-base-content" />
            </GlassSurface>
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform cursor-pointer"
          >
            <GlassSurface
              width={56}
              height={56}
              borderRadius={9999}
              backgroundOpacity={0.05}
              borderWidth={0.5}
            >
              <FaLinkedin className="w-6 h-6 text-base-content" />
            </GlassSurface>
          </a>

          <div className="hover:scale-110 transition-transform cursor-pointer">
            <GlassSurface
              width={56}
              height={56}
              borderRadius={9999}
              backgroundOpacity={0.05}
              borderWidth={0.5}
            >
              <AnimatedThemeToggler className="w-full h-full flex items-center justify-center" />
            </GlassSurface>
          </div>

          <GlassSurface
            width="fit-content"
            height="fit-content"
            borderRadius={9999}
            backgroundOpacity={0.05}
            borderWidth={0.5}
            className="cursor-pointer hidden md:flex"
          >
            <InteractiveHoverButton
              className="bg-transparent border-none text-base-content hover:bg-primary hover:text-primary-content text-lg btn-wide hover:px-12 duration-300 transition-all ease-in-out btn shadow-none"
              onClick={() =>
                document.getElementById("contactme")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Let&apos;s Connect
            </InteractiveHoverButton>
          </GlassSurface>

          {/* Mobile hamburger — opens the drawer */}
          <label
            htmlFor="mobile-drawer"
            className="xl:hidden cursor-pointer hover:scale-110 transition-transform"
          >
            <GlassSurface
              width={56}
              height={56}
              borderRadius={9999}
              backgroundOpacity={0.05}
              borderWidth={0.5}
            >
              <Menu className="w-7 h-7 text-base-content" />
            </GlassSurface>
          </label>
        </div>

        {/* Page children */}
        {children}
      </div>

      {/* Mobile drawer sidebar */}
      <div className="drawer-side z-70">
        <label htmlFor="mobile-drawer" aria-label="close sidebar" className="drawer-overlay" />
        <div className="menu bg-base-100/95 backdrop-blur-xl min-h-full w-1/2 min-w-72 p-6 pt-24 flex flex-col gap-2">
          {/* Close button */}
          <label htmlFor="mobile-drawer" className="absolute top-6 right-6 cursor-pointer">
            <GlassSurface
              width={48}
              height={48}
              borderRadius={9999}
              backgroundOpacity={0.05}
              borderWidth={0.5}
            >
              <X className="w-6 h-6 text-base-content" />
            </GlassSurface>
          </label>

          {/* Nav links */}
          <ul className="flex-1 flex flex-col justify-center items-center gap-2">
            {/* Home link — only shown when not on home page */}
            {!isHome && (
              <li className="w-full text-center">
                <label htmlFor="mobile-drawer" className="w-full justify-center cursor-pointer">
                  <Link
                    href="/"
                    className="text-base-content font-bold text-2xl lg:text-4xl py-4 hover:text-primary transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <House className="w-7 h-7 lg:w-9 lg:h-9" />
                    Home
                  </Link>
                </label>
              </li>
            )}
            {navItems.map((item) => (
              <li key={item} className="w-full text-center">
                <label htmlFor="mobile-drawer" className="w-full justify-center cursor-pointer">
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-base-content font-bold text-2xl lg:text-4xl py-4 hover:text-primary transition-all duration-300 block text-center"
                  >
                    {item}
                  </a>
                </label>
              </li>
            ))}
          </ul>

          {/* Bottom section */}
          <div className="mt-auto pt-8 border-t border-base-content/10 flex flex-col gap-4">
            <label htmlFor="mobile-drawer" className="w-full">
              <a
                href="#contactme"
                className="btn btn-primary py-6 btn-block text-lg font-bold"
                onClick={() => {
                  document.getElementById("mobile-drawer").checked = false;
                }}
              >
                Let&apos;s Connect
              </a>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

