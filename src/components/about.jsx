"use client"

export default function About() {
    return (
        <section
            id="about"
            className="relative w-full min-h-[50vh] bg-base-100 flex items-center justify-center py-20 pt-40 px-6 md:px-16 overflow-hidden"
        >
            <div className="relative z-10 w-full max-w-2xl mx-auto px-8 flex flex-col items-center text-center gap-6">

                <h2
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight text-base-content"
                    style={{ fontFamily: 'var(--font-pro)' }}
                >
                    About Me
                </h2>

                <div className="w-16 h-1 rounded-full bg-base-300 opacity-90" />

                {/* Para 1 — who */}
                <p className="text-base-content  md:text-lg   leading-relaxed">
                    A student developer who&apos;s shipped around 5 full-stack projects,
                    competed in 5 hackathons, and walked away with 3 wins.
                    Still learning, still building.
                </p>

                {/* Para 2 — what */}
                <p className="text-base-content  md:text-lg leading-relaxed">
                    I am good at AI integrations, full-stack web apps,
                    and the occasional side project that goes further than expected.
                </p>

            </div>
        </section>
    );
}
