"use client"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import FloatingLines from './FloatingLines';
import { MapPinHouse, Download, Phone } from 'lucide-react';
import GradientText from './GradientText';

export default function Hero() {
    return (
        <div className="relative w-full h-screen overflow-hidden font-sans" data-theme="Portfolio-dark">
            <div className="absolute inset-0 z-0">
                <FloatingLines 
                    linesGradient={["#34d399", "#6366f1", "#fb923c"]}
                    animationSpeed={1}
                    enabledWaves={["top","middle","bottom"]}
                    interactive
                    bendRadius={17.5}
                    bendStrength={-0.5}
                    lineCount={4}
                    mouseDamping={0.05}
                    lineDistance={37.5}
                    parallax={false}
                    parallaxStrength={0.2}
                />
            </div>
            
            <div className="absolute top-8 left-8 z-20 w-fit h-14 rounded-full glass-nav px-8 flex items-center justify-between gap-8">
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

            <div className="absolute top-8 right-8 z-20 h-14 flex items-center">
                <InteractiveHoverButton 
                    className="bg-primary btn btn-wide text-lg text-primary-content border-2 border-primary-content shadow-[4px_4px_0px_0px_var(--color-primary-content)] hover:shadow-[2px_2px_0px_0px_var(--color-primary-content)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all h-full hover:px-8"
                    onClick={() => document.getElementById('contactme')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    Let&apos;s Connect
                </InteractiveHoverButton>
            </div>

            <div className="relative z-10 flex flex-col justify-center items-center h-full pointer-events-none px-8 md:px-24 pb-12">
                <div className="w-fit max-w-5xl backdrop-blur-lg [mask-image:radial-gradient(circle_at_center,black_70%,transparent_100%)] p-8 rounded-xl flex flex-col gap-6 items-center text-center">
                    <div>
                        <div className="mb-4 text-center" style={{ fontFamily: 'var(--font-pro)' }}>
                            <GradientText 
                                colors={["#bbb", "#eee"]} 
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
                        <InteractiveHoverButton 
                            className="bg-transparent btn btn-wide text-lg py-6 text-base-content border-2 border-base-content/70 hover:bg-base-content/10 w-56"
                            icon={Download}
                        >
                            Download CV
                        </InteractiveHoverButton>
                        
                        <InteractiveHoverButton 
                            className="bg-transparent btn btn-wide text-lg py-6 text-base-content border-2 border-base-content/70 hover:bg-base-content/10 w-56"
                            icon={Phone}
                        >
                            Book a Call
                        </InteractiveHoverButton>
                    </div>
                </div>
            </div>
        </div>
    )
}