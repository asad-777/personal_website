"use client"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { MapPinHouse, Download, Phone, Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import FloatingLines from '@/components/FloatingLines';
import GlassSurface from '@/components/GlassSurface';
import GradientText from './GradientText';

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

const floatingLinesGradient = ["#34d399", "#6366f1", "#fb923c"];
const floatingLinesWaves = ["top", "middle", "bottom"];

const navItems = ['Projects', 'Hackathons', 'Skillset', 'Open Source'];

export default function Hero() {
    return (
        <div className="drawer drawer-end">
            <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />

            {/* Page content */}
            <div className="drawer-content">
                <div className="relative w-full h-screen overflow-hidden font-sans bg-base-100">
                    <div className="absolute inset-0 z-0">
                        <FloatingLines 
                            linesGradient={floatingLinesGradient}
                            animationSpeed={1}
                            enabledWaves={floatingLinesWaves}
                            interactive
                            bendRadius={25.5}
                            bendStrength={-0.5}
                            lineCount={4}
                            mouseDamping={0.05}
                            lineDistance={37.5}
                            parallax={false}
                            parallaxStrength={0.2}
                            middleWavePosition={{ x: 3, y: -0.6, rotate: 0.1 }}
                        />
                    </div>

                    {/* Desktop nav pill */}
                    <GlassSurface 
                        className="hidden xl:flex fixed! top-12 left-8 z-50 px-6" 
                        width="fit-content" 
                        height={56} 
                        borderRadius={9999}
                        backgroundOpacity={0.05}
                        borderWidth={0.5}
                    >
                        <div className="flex items-center justify-between gap-8">
                        {navItems.map((item, index, array) => (
                            <div key={item} className="flex items-center gap-8">
                                <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-base-content font-bold nav-link text-lg whitespace-nowrap">
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
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform cursor-pointer">
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
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform cursor-pointer">
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
                                className="bg-transparent border-none text-base-content hover:bg-primary hover:text-primary-content  text-lg btn-wide  hover:px-12 duration-300 transition-all ease-in-out btn shadow-none"
                                onClick={() => document.getElementById('contactme')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Let&apos;s Connect
                            </InteractiveHoverButton>
                        </GlassSurface>

                        {/* Mobile hamburger — opens the drawer */}
                        <label htmlFor="mobile-drawer" className="xl:hidden cursor-pointer hover:scale-110 transition-transform">
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

                    {/* Hero center content */}
                    <div className="relative z-10 flex flex-col justify-center items-center h-full pointer-events-none px-4 md:px-24 pb-12">
                        <div className="w-full max-w-5xl flex flex-col gap-6 items-center text-center">
                            <div>
                                <div className="mb-4 text-center" style={{ fontFamily: 'var(--font-pro)' }}>
                                    <GradientText 
                                        colors={["var(--color-hero-text-1)", "var(--color-hero-text-2)"]} 
                                        animationSpeed={8} 
                                        showBorder={false} 
                                        yoyo={false}
                                        className="mx-auto text-5xl md:text-8xl font-extrabold tracking-tight"
                                    >
                                        Asad Amir
                                    </GradientText>
                                </div>
                                <p className="text-base-content/90 text-xl md:text-2xl font-medium text-center whitespace-nowrap overflow-hidden text-ellipsis px-2">
                                    A self taught dev from <br className="md:hidden" /> <span className="inline-flex items-center text-base-content" style={{ fontFamily: 'var(--font-pro)' }}>Lahore, Pakistan</span>
                                </p>
                            </div>
                            
                            <div className="flex flex-col md:flex-row items-center justify-center gap-4 pointer-events-auto w-full md:w-auto">
                                <GlassSurface
                                    width="fit-content"
                                    height="fit-content"
                                    borderRadius={9999}
                                    backgroundOpacity={0.05}
                                    borderWidth={0.5}
                                    className="cursor-pointer"
                                >
                                    <InteractiveHoverButton 
                                        className="bg-transparent border-none text-base-content hover:bg-primary hover:text-primary-content  text-lg btn btn-wide px-12 shadow-none"
                                        icon={Download}
                                    >
                                        Download CV
                                    </InteractiveHoverButton>
                                </GlassSurface>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile drawer sidebar */}
            <div className="drawer-side z-70">
                <label htmlFor="mobile-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
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
                    <ul className="flex-1 flex flex-col justify-center items-center  gap-2">
                        {navItems.map((item) => (
                            <li key={item} className="w-full text-center">
                                <label htmlFor="mobile-drawer" className="w-full justify-center cursor-pointer">
                                    <a 
                                        href={`#${item.toLowerCase().replace(' ', '-')}`} 
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
                                onClick={() => { document.getElementById('mobile-drawer').checked = false; }}
                            >
                                Let&apos;s Connect
                            </a>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}