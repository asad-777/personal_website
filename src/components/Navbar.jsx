"use client";

import { useState, useEffect } from "react";
import { gtagEvent } from "@/lib/gtag";
import { SOCIAL_LINKS } from "@/lib/constants";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Menu, X, House } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import GlassSurface from "@/components/GlassSurface";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Freelance", href: "/freelance" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const effectiveIsScrolled = isHome ? isScrolled : true;

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  const { scrollY: scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const previous = scrollYProgress.getPrevious();
    if (isOpen) {
      setHidden(false);
      return;
    }
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      {/* === LEFT SIDE NAVIGATION (DESKTOP) === */}
      <div className="fixed top-12 left-6 md:left-8 z-50 flex items-center gap-4 scale-90 md:scale-100 origin-top-left hide-dominoes">
        {/* Desktop Logo + Nav Pill — Always visible on left */}
        <GlassSurface
          className="hidden lg:flex px-6"
          width="fit-content"
          height={56}
          borderRadius={9999}
          backgroundOpacity={0.05}
          borderWidth={0.5}
        >
          <div className="flex items-center gap-8 h-full relative">
            <button
              onClick={() => { window.location.href = "/#hero"; }}
              className="hover:scale-110 transition-transform flex items-center justify-center shrink-0 cursor-pointer"
              aria-label="Home"
            >
              <Image src="/logo.png" alt="Logo" width={32} height={32} className="w-8 h-8 object-contain" />
            </button>
            
            <span className="text-base-content text-xl select-none">•</span>

            {navItems.map((item, index, array) => (
              <div key={item.label} className="flex items-center gap-8">
                {item.href.startsWith("/#") ? (
                  <button
                    onClick={() => { gtagEvent(`${item.label}NavDesktopClick`); window.location.href = item.href; }}
                    className="text-base-content nav-link text-lg whitespace-nowrap cursor-pointer"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => gtagEvent(`${item.label}NavDesktopClick`)}
                    className="text-base-content nav-link text-lg whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                )}
                {index < array.length - 1 && (
                  <span className="text-base-content text-xl select-none">•</span>
                )}
              </div>
            ))}
          </div>
        </GlassSurface>

        {/* Theme Switcher — stays near links */}
        <div className="hidden lg:block hover:scale-110 transition-transform cursor-pointer">
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
      </div>

      {/* === CENTER NAVIGATION (MOBILE) === */}
      <motion.div 
        variants={{
          visible: { y: 0, opacity: 1, pointerEvents: "auto" },
          hidden: { y: -100, opacity: 0, pointerEvents: "none" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-12 w-[90vw] max-w-sm sm:max-w-md left-1/2 -translate-x-1/2 z-60 flex items-center justify-center lg:hidden scale-90 md:scale-100 hide-dominoes"
      >
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
            <button
              onClick={() => { window.location.href = "/#hero"; }}
              className="hover:scale-110 transition-transform flex items-center justify-center shrink-0 cursor-pointer"
              aria-label="Home"
            >
              <Image src="/logo.png" alt="Logo" width={40} height={40} className="w-10 h-10 object-contain" />
            </button>

            {/* Theme Toggle */}
            <div className="hover:scale-110 transition-transform cursor-pointer flex items-center justify-center w-8 h-8">
              <AnimatedThemeToggler className="w-full h-full flex items-center justify-center" />
            </div>
          </div>
        </GlassSurface>
      </motion.div>

      {/* === RIGHT SIDE NAVIGATION (DESKTOP) === */}
      <div className={`fixed top-12 right-6 md:right-8 z-50 flex items-center gap-4 scale-90 md:scale-100 origin-top-right transition-all duration-500 ${effectiveIsScrolled ? 'opacity-100 translate-y-0 pointer-events-auto hide-dominoes' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        
        {/* Social Pill — Combined GitHub, LinkedIn, Instagram */}
        <div className="hidden lg:block hover:scale-105 transition-transform cursor-pointer">
          <GlassSurface width="fit-content" height={56} borderRadius={9999} backgroundOpacity={0.05} borderWidth={0.5} className="px-6">
            <div className="flex items-center gap-6 h-full">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" onClick={() => gtagEvent("GithubNavDesktopClick")}>
                <FaGithub className="w-6 h-6 text-base-content/60" />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" onClick={() => gtagEvent("LinkedinNavDesktopClick")}>
                <FaLinkedin className="w-6 h-6 text-base-content/60" />
              </a>
              <a href={SOCIAL_LINKS.email} className="hover:scale-110 transition-transform" onClick={() => gtagEvent("GmailNavDesktopClick")}>
                <SiGmail className="w-6 h-6 text-base-content/60" />
              </a>
            </div>
          </GlassSurface>
        </div>

        {/* Let's Connect */}
        <GlassSurface
          width="fit-content"
          height="fit-content"
          borderRadius={9999}
          backgroundOpacity={0.05}
          borderWidth={0.5}
          className="cursor-pointer hidden lg:flex"
        >
          <InteractiveHoverButton
            className="bg-primary border-none text-primary-content text-lg btn-wide hover:px-12 duration-300 transition-all ease-in-out btn shadow-none"
            onClick={() => { gtagEvent("LetsConnectNavDesktopClick"); window.location.href = "/#contactme"; }}
          >
            Get in Touch
          </InteractiveHoverButton>
        </GlassSurface>
      </div>

      {/* === PAGE CONTENT === */}
      {children}

      {/* === MOBILE BOTTOM SHEET === */}
      <motion.div initial={false}>
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-[90] bg-black/30 backdrop-blur-[2px] lg:hidden"
                onClick={closeMenu}
              />

              {/* Bottom sheet panel */}
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed bottom-0 left-0 right-0 z-100 h-[65vh] bg-base-100/80 backdrop-blur-xl rounded-t-[3rem] flex flex-col border-t border-primary/40 shadow-[0_-15px_40px_rgba(0,0,0,0.2)] lg:hidden hide-dominoes will-change-transform transform-gpu"
              >
                {/* Close button */}
                <button
                  onClick={closeMenu}
                  className="absolute top-5 right-7 cursor-pointer z-10 hover:scale-110 transition-transform active:scale-95"
                  aria-label="Close menu"
                >
                  <div className="w-11 h-11 rounded-full bg-base-content/10 backdrop-blur-md border border-base-content/15 flex items-center justify-center">
                    <X className="w-5 h-5 text-base-content" />
                  </div>
                </button>

                {/* Nav links */}
                <ul className="flex-1 flex flex-col justify-center px-8 pt-8">
                  {!isHome && (
                    <li className="w-full border-b border-base-content/10">
                      <button
                        onClick={() => { gtagEvent("HomeNavMobileClick"); closeMenu(); window.location.href = "/"; }}
                        className="text-base-content text-2xl py-5 hover:text-primary transition-colors duration-300 flex items-center gap-4 w-full cursor-pointer"
                      >
                        <House className="w-7 h-7 shrink-0" />
                        Home
                      </button>
                    </li>
                  )}
                  {navItems.map((item) => (
                    <li key={item.label} className="w-full border-b border-base-content/10">
                      {item.href.startsWith("/#") ? (
                        <button
                          onClick={() => { gtagEvent(`${item.label}NavMobileClick`); closeMenu(); window.location.href = item.href; }}
                          className="text-base-content text-2xl py-5 hover:text-primary transition-colors duration-300 block w-full text-left cursor-pointer"
                        >
                          {item.label}
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => { gtagEvent(`${item.label}NavMobileClick`); closeMenu(); }}
                          className="text-base-content text-2xl py-5 hover:text-primary transition-colors duration-300 block w-full"
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Social + CTA buttons */}
                <div className="px-8 pb-10 flex flex-col gap-3 pt-4">
                  {/* Social row */}
                  <div className="flex gap-3">
                    <a
                      href={SOCIAL_LINKS.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline border-2 btn-primary flex-1 gap-2 h-12 text-base rounded-xl"
                      onClick={() => { gtagEvent("GithubNavMobileClick"); closeMenu(); }}
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                    <a
                      href={SOCIAL_LINKS.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-primary border-2 flex-1 gap-2 h-12 text-base rounded-xl"
                      onClick={() => { gtagEvent("LinkedinNavMobileClick"); closeMenu(); }}
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={SOCIAL_LINKS.email}
                      className="btn btn-outline btn-primary border-2 flex-1 gap-2 h-12 text-base rounded-xl"
                      onClick={() => { gtagEvent("GmailNavMobileClick"); closeMenu(); }}
                    >
                      <SiGmail className="w-5 h-5" />
                    </a>
                  </div>

                  {/* CTA buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => { gtagEvent("LetsConnectNavMobileClick"); closeMenu(); window.location.href = "/#contactme"; }}
                      className="btn btn-primary h-14 flex-1 text-lg rounded-xl shadow-xl cursor-pointer"
                    >
                      Get in Touch
                    </button>
                    <a
                      href="/cv.pdf"
                      download
                      className="btn btn-primary h-14 flex-1 text-lg rounded-xl shadow-xl"
                      onClick={() => { gtagEvent("DownloadCVNavMobileClick"); closeMenu(); }}
                    >
                      Download CV
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
