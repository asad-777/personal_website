"use client"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { MapPinHouse, Download, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import FloatingLines from '@/components/FloatingLines';
import GlassSurface from '@/components/GlassSurface';
import GradientText from './GradientText';

import { useState, useEffect } from 'react';
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"

const floatingLinesGradient = ["#34d399", "#6366f1", "#fb923c"];
const floatingLinesWaves = ["top", "middle", "bottom"];

export default function Hero() {
    return (
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
            
            <GlassSurface 
                className="fixed! top-8 left-8 z-50 px-6" 
                width="fit-content" 
                height={56} 
                borderRadius={9999}
                backgroundOpacity={0.05}
                borderWidth={0.5}
            >
                <div className="flex items-center justify-between gap-8">
                {['Projects', 'Hackathons', 'Skillset', 'Open Source'].map((item, index, array) => (
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

            <div className="fixed top-8 right-8 z-50 h-14 flex items-center gap-4">
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
                    className="cursor-pointer"
                >
                    <InteractiveHoverButton 
                        className="bg-transparent border-none text-base-content hover:bg-primary hover:text-primary-content  text-lg btn-wide  hover:px-12 duration-300 transition-all ease-in-out btn shadow-none"
                        onClick={() => document.getElementById('contactme')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Let&apos;s Connect
                    </InteractiveHoverButton>
                </GlassSurface>
            </div>

            <div className="relative z-10 flex flex-col justify-center items-center h-full pointer-events-none px-8 md:px-24 pb-12">
                <div className="w-fit max-w-5xl flex flex-col gap-6 items-center text-center">
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
                            A self taught dev from <span className="inline-flex items-center text-base-content" style={{ fontFamily: 'var(--font-pro)' }}>Lahore, Pakistan</span>
                        </p>
                    </div>
                    
                    <div className="flex items-center justify-center gap-4 pointer-events-auto">
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
                                icon={Phone}
                            >
                                Book a Call
                            </InteractiveHoverButton>
                        </GlassSurface>
                    </div>
                </div>
            </div>
        </div>
    )
}