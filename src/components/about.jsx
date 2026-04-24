"use client"

import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function About() {
    return (
        <section
            id="about"
            className="relative w-full min-h-[50vh] bg-base-100 flex items-center justify-center py-20 pt-40 px-6 md:px-16 overflow-hidden"
        >
            <div className="relative z-10 w-full max-w-2xl mx-auto px-8 flex flex-col items-center text-center gap-6">

                <ScrollReveal delay={0.1}>
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-base-content"
                        style={{ fontFamily: 'var(--font-pro)' }}
                    >
                        About Me
                    </h2>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <div className="h-1 w-36 bg-linear-to-r from-primary to-accent rounded-full mb-4" />
                </ScrollReveal>

                {/* Para 1 — who */}
                <ScrollReveal delay={0.3}>
                    <p className="text-base-content  md:text-lg   leading-relaxed">
                        A student developer who&apos;s shipped around 5 full-stack projects,
                        competed in 5 hackathons, and walked away with 3 wins.
                        Still learning, still building.
                    </p>
                </ScrollReveal>

                {/* Para 2 — what */}
                <ScrollReveal delay={0.4}>
                    <p className="text-base-content  md:text-lg leading-relaxed">
                        I am good at AI integrations, full-stack web apps,
                        and the occasional side project that goes further than expected.
                    </p>
                </ScrollReveal>

            </div>
        </section>
    );
}
