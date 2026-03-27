"use client"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Download } from 'lucide-react';
import FloatingLines from '@/components/FloatingLines';
import GlassSurface from '@/components/GlassSurface';
import GradientText from './GradientText';

const floatingLinesGradient = ["#34d399", "#6366f1", "#fb923c"];
const floatingLinesWaves = ["top", "middle", "bottom"];

export default function Hero() {
    return (
        <div className="relative w-full h-screen overflow-hidden font-sans bg-base-100">
            <div className="absolute inset-0 z-0">
                {/* <FloatingLines 
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
                /> */}
            </div>

            {/* this here is the start of top hero background */}
            
            <div
            className="absolute inset-0 pointer-events-none opacity-[1]  dark:opacity-[0.1]"
            style={{
                backgroundColor: "var(--color-primary)",
                filter: 'grayscale(1) blur(2px)',
                backgroundImage: "url('/circuit-board.svg')",
                backgroundRepeat: "repeat",
                backgroundSize: "304px 304px",
            }}
            />

            {/* this here is the end of the top hero background */}

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
