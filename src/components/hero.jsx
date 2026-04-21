"use client"
import { useEffect, useRef, useState } from "react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Download } from 'lucide-react';
import FloatingLines from '@/components/FloatingLines';
import GlassSurface from '@/components/GlassSurface';
import GradientText from './GradientText';

const floatingLinesGradient = ["#34d399", "#6366f1", "#fb923c"];
const floatingLinesWaves = ["top", "middle", "bottom"];

export default function Hero() {
    const heroRef = useRef(null);
    const [active, setActive] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    setActive(false);
                } else {
                    setActive(true);
                }
            },
            { threshold: 0.01 }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={heroRef} className="relative w-full h-screen overflow-hidden font-sans bg-base-100">
            <div className="absolute inset-0 z-0">
                {active && (
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
                        parallaxStrength={0.0}
                        middleWavePosition={{ x: 3, y: -0.6, rotate: 0.1 }}
                    />
                )}
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
    )
}
