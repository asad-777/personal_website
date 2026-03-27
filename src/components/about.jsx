"use client"

export default function About() {
    return (
        <section
            id="about"
            className="relative w-full min-h-[50vh] bg-base-100 flex items-center justify-center py-20 px-6 md:px-16 overflow-hidden"
        >
            {/* Ambient glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
                style={{
                    background:
                        'radial-gradient(ellipse 70% 60% at 50% 50%, color-mix(in srgb, var(--color-primary) 5%, transparent), transparent)',
                }}
            />

            <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center text-center gap-6">

                <h2
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight text-base-content"
                    style={{ fontFamily: 'var(--font-pro)' }}
                >
                    About Me
                </h2>

                <div className="w-16 h-1 rounded-full bg-primary opacity-50" />

                {/* Para 1 — who */}
                <p className="text-base-content/80 text-base md:text-lg leading-relaxed">
                    A student developer who&apos;s shipped around 5 full-stack projects,
                    competed in 5 hackathons, and walked away with 3 wins.
                    Still learning, still building.
                </p>

                {/* Para 2 — what */}
                <p className="text-base-content/70 text-base md:text-lg leading-relaxed">
                    My work lives at the intersection of AI integrations, full-stack web apps,
                    and the occasional side project that goes further than expected.
                </p>

            </div>
        </section>
    );
}
