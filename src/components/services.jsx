"use client"

export default function Services() {
    const servicesData = [
        {
            title: "Frontend Development",
            tech: ["React", "Next.js", "Tailwind CSS"],
        },
        {
            title: "Backend & Database",
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
            className="relative pt-48 w-full py-10 px-6 md:px-16 bg-base-100 flex items-center justify-center overflow-hidden"
        >
            <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col gap-10">
                
                <div className="flex flex-col items-center text-center gap-4">
                    <h2
                        className="text-4xl md:text-5xl font-extrabold leading-none tracking-tight text-base-content"
                        style={{ fontFamily: 'var(--font-pro)' }}
                    >
                        Services & Technologies
                    </h2>
                    <div className="h-1 w-36 bg-linear-to-r from-primary to-accent rounded-full" />
                </div>

                <div className="flex flex-col gap-5 w-full mt-4">
                    {servicesData.map((service, idx) => (
                        <div 
                            key={idx} 
                            className="flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 w-full pb-5 border-b border-base-content/10 last:border-b-0"
                        >
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] shrink-0" />
                            <h3 className="text-lg md:text-xl font-bold mr-2  text-base-content tracking-tight">
                                {service.title}
                            </h3>
                            <div className="flex flex-row flex-wrap items-center gap-2 sm:ml-4">
                                {service.tech.map((techItem, techIdx) => (
                                    <span 
                                        key={techIdx} 
                                        className="badge badge-sm py-3 px-4 bg-base-300 text-base-content font-bold text-sm opacity-90 border-none cursor-default"
                                    >
                                        {techItem}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
