"use client";

import { useState } from "react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Menu, X, House } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import GlassSurface from "@/components/GlassSurface";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/#services" },
];

export default function Navbar({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      {/* === LEFT SIDE NAVIGATION (DESKTOP) === */}
      <div className="fixed top-12 left-6 md:left-8 z-50 flex items-center gap-4 scale-90 md:scale-100 origin-top-left">
        {/* Desktop Nav Pill — nav links only */}
        <GlassSurface
          className="hidden xl:flex px-6"
          width="fit-content"
          height={56}
          borderRadius={9999}
          backgroundOpacity={0.05}
          borderWidth={0.5}
        >
          <div className="flex items-center gap-8 h-full relative">
            <>
              <Link
                href={isHome ? "#hero" : "/#hero"}
                onClick={(e) => {
                  if (isHome) {
                    e.preventDefault();
                    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="hover:scale-110 transition-transform flex items-center justify-center shrink-0"
                aria-label="Home"
              >
                <Image src="/logo.png" alt="Logo" width={32} height={32} className="w-8 h-8 object-contain" />
              </Link>
              <span className="text-base-content text-xl select-none">•</span>
            </>
            {navItems.map((item, index, array) => (
              <div key={item.label} className="flex items-center gap-8">
                <Link
                  href={item.href}
                  className="text-base-content font-bold nav-link text-lg whitespace-nowrap"
                >
                  {item.label}
                </Link>
                {index < array.length - 1 && (
                  <span className="text-base-content text-xl select-none">•</span>
                )}
              </div>
            ))}
          </div>
        </GlassSurface>

        {/* Desktop GitHub — independent circle */}
        <div className="hidden xl:block hover:scale-110 transition-transform cursor-pointer">
          <GlassSurface
            width={56}
            height={56}
            borderRadius={9999}
            backgroundOpacity={0.05}
            borderWidth={0.5}
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full h-full"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6 text-base-content" />
            </a>
          </GlassSurface>
        </div>

        {/* Desktop LinkedIn — independent circle */}
        <div className="hidden xl:block hover:scale-110 transition-transform cursor-pointer">
          <GlassSurface
            width={56}
            height={56}
            borderRadius={9999}
            backgroundOpacity={0.05}
            borderWidth={0.5}
          >
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full h-full"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6 text-base-content" />
            </a>
          </GlassSurface>
        </div>
      </div>

      {/* === CENTER NAVIGATION (MOBILE) === */}
      <div className="fixed top-12 w-[90vw] max-w-sm sm:max-w-md left-1/2 -translate-x-1/2 z-50 flex items-center justify-center xl:hidden scale-90 md:scale-100">
        <GlassSurface
          className="w-full"
          width="100%"
          height="fit-content"
          borderRadius={9999}
          backgroundOpacity={0.05}
          borderWidth={0.5}
        >
          <div className="flex items-center justify-between w-full py-3 px-6 sm:px-8 h-full relative">
            {/* Mobile hamburger */}
            <button
              onClick={toggleMenu}
              className="cursor-pointer hover:scale-110 transition-transform flex items-center justify-center"
              aria-label="Open menu"
            >
              <Menu className="w-8 h-8 text-base-content" />
            </button>

            {/* Logo */}
            <Link
              href={isHome ? "#hero" : "/#hero"}
              onClick={(e) => {
                if (isHome) {
                  e.preventDefault();
                  document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="hover:scale-110 transition-transform flex items-center justify-center shrink-0"
              aria-label="Home"
            >
              <Image src="/logo.png" alt="Logo" width={40} height={40} className="w-10 h-10 object-contain" />
            </Link>

            {/* Theme Toggle */}
            <div className="hover:scale-110 transition-transform cursor-pointer flex items-center justify-center w-8 h-8">
              <AnimatedThemeToggler className="w-full h-full flex items-center justify-center" />
            </div>
          </div>
        </GlassSurface>
      </div>

      {/* === RIGHT SIDE BUTTONS (DESKTOP) === */}
      <div className="fixed top-12 right-6 md:right-8 z-50 flex items-center gap-4 scale-90 md:scale-100 origin-top-right">
        <div className="hidden xl:block hover:scale-110 transition-transform cursor-pointer">
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
          className="cursor-pointer hidden xl:flex"
        >
          <InteractiveHoverButton
            className="bg-primary border-none text-primary-content text-lg btn-wide hover:px-12 duration-300 transition-all ease-in-out btn shadow-none"
            onClick={() => {
              if (pathname === "/") {
                document.getElementById("contactme")?.scrollIntoView({ behavior: "smooth" });
              } else {
                window.location.href = "/#contactme";
              }
            }}
          >
            Let&apos;s Connect
          </InteractiveHoverButton>
        </GlassSurface>
      </div>

      {/* === PAGE CONTENT === */}
      {children}

      {/* === MOBILE BOTTOM SHEET === */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      {/* Bottom sheet panel — translucent glass */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-[100] h-[65vh] bg-base-100/60 backdrop-blur-2xl rounded-t-[3rem] flex flex-col border-t border-base-content/15 shadow-[0_-20px_60px_rgba(0,0,0,0.4)] transition-transform duration-500 ease-in-out xl:hidden ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Close button */}
        <button
          onClick={closeMenu}
          className="absolute top-5 right-7 cursor-pointer z-10 hover:scale-110 transition-transform"
          aria-label="Close menu"
        >
          <GlassSurface
            width={44}
            height={44}
            borderRadius={9999}
            backgroundOpacity={0.05}
            borderWidth={0.5}
          >
            <X className="w-5 h-5 text-base-content" />
          </GlassSurface>
        </button>

        {/* Nav links */}
        <ul className="flex-1 flex flex-col justify-center px-8 pt-8">
          {!isHome && (
            <li className="w-full border-b border-base-content/10">
              <Link
                href="/"
                onClick={closeMenu}
                className="text-base-content font-bold text-2xl py-5 hover:text-primary transition-all duration-300 flex items-center gap-4"
              >
                <House className="w-7 h-7 shrink-0" />
                Home
              </Link>
            </li>
          )}
          {navItems.map((item) => (
            <li key={item.label} className="w-full border-b border-base-content/10">
              <Link
                href={item.href}
                onClick={closeMenu}
                className="text-base-content font-bold text-2xl py-5 hover:text-primary transition-all duration-300 block w-full"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social + CTA buttons */}
        <div className="px-8 pb-10 flex flex-col gap-3 pt-4">
          {/* Social row */}
          <div className="flex gap-3">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-primary flex-1 gap-2 h-12 text-base font-bold rounded-xl"
              onClick={closeMenu}
            >
              <FaGithub className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-primary flex-1 gap-2 h-12 text-base font-bold rounded-xl"
              onClick={closeMenu}
            >
              <FaLinkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>

          {/* CTA */}
          <Link
            href="/#contactme"
            className="btn btn-primary h-14 btn-block text-lg font-bold rounded-xl shadow-xl"
            onClick={closeMenu}
          >
            Let&apos;s Connect
          </Link>
        </div>
      </div>
    </>
  );
}
