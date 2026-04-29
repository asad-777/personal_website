"use client"

import { motion } from "motion/react"
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function About() {
    return (
        <section
            id="about"
            className="relative w-full py-24 px-6 pt-48 md:px-16 bg-transparent overflow-hidden"
        >
            <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-12">
                
                {/* Standard Section Heading */}
                <div className="flex flex-col items-center md:items-start gap-4">
                    <ScrollReveal delay={0.1}>
                        <h2
                            className="text-base-content"
                        >
                            About <span className="text-primary">Me</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <div className="h-1.5 w-40 bg-linear-to-r from-primary via-accent to-secondary rounded-full shadow-[0_0_15px_rgba(var(--color-primary),0.4)]" />
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start ">
                    {/* Left Column: Manifesto */}
                    <div className="space-y-8  lg:h-full flex flex-col  gap-6 lg:pb-24 justify-between ">
                        <ScrollReveal delay={0.3}>
                            <p className="text-3xl! tracking-tighter! font-extrabold!">
                                I am a student developer driven by the pursuit of technical excellence and meaningful innovation.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal delay={0.4}>
                            <p className="  ">
                                Specializing in <span className="text-primary">Full-Stack Architecture</span> and <span className="text-secondary">AI Integrations</span>, 
                                I focus on building robust systems that solve real-world problems with elegant code.
                            </p>
                        </ScrollReveal>
                    </div>

                    {/* Right Column: Detailed Context */}
                    <div className="space-y-12 ">
                        <ScrollReveal delay={0.5}>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    <h3 className="text-base-content/40">Philosophy</h3>
                                </div>
                                <p className="text-base text-base-content/60 leading-relaxed max-w-xl">
                                    My engineering approach prioritizes maintainability and performance. I believe that clean, well-documented logic is the foundation of any successful digital product.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.6}>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-secondary" />
                                    <h3  className="text-base-content/40">Objective</h3>
                                </div>
                                <p className="text-base text-base-content/60 leading-relaxed max-w-xl">
                                    Whether it&apos;s a high-stakes hackathon project or a scalable web application, I am committed to pushing the boundaries of what&apos;s possible through code.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
