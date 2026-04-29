"use client"

import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function Services() {
    const servicesData = [
        {
            title: "Frontend & UI",
            tech: ["React", "Next.js", "Tailwind CSS"],
        },
        {
            title: "Backend & DB",
            tech: ["Django", "Fast API", "Docker"],
        },
        {
            title: "AI Integration",
            tech: ["Python", "LangChain", "CrewAI"],
        },
        {
            title: "SEO Optimization",
            tech: ["Analytics", "Lighthouse", "Next SEO"],
        }
    ];

    return (
        <section
            id="services"
            className="relative w-full py-24 px-6 md:px-16 pt-48 bg-transparent overflow-hidden"
        >
            <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-20">
                
                {/* Standard Section Heading */}
                <div className=" items-center justify-center grid text-center md:items-start gap-4">
                    <ScrollReveal delay={0.1}>
                        <h2
                            className="text-5xl min-w-full md:text-7xl font-extrabold tracking-tight text-base-content uppercase"
                            style={{ fontFamily: 'var(--font-pro)' }}
                        >
                            Services & <span className="text-primary">Stack</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <div className="h-1.5 w-48 bg-linear-to-r from-primary mx-auto via-accent to-secondary rounded-full shadow-[0_0_15px_rgba(var(--color-primary),0.4)]" />
                    </ScrollReveal>
                </div>

                {/* Services Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-20">
                    {servicesData.map((service, idx) => (
                        <ScrollReveal key={idx} delay={0.2 + idx * 0.1}>
                            <div className="flex flex-col gap-8">
                                {/* Service Header */}
                                <div className="flex items-center  justify-center gap-6">
                                    <h3 className="text-2xl md:text-4xl border-b border-base-300/90 pb-2 px-4 rounded-xl font-black text-base-content uppercase tracking-tight">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Stack List */}
                                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:pl-8">
                                    {service.tech.map((techItem, techIdx) => (
                                        <div key={techIdx} className="flex items-center  gap-3">
                                            <span className="text-lg md:text-xl badge bg-base-300/70 p-4 font-bold text-base-content/90">
                                                {techItem}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

            </div>
        </section>
    );
}
