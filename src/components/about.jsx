"use client"

export default function About() {
    return (
        <section
            id="about"
            className="relative w-full min-h-screen bg-base-100 flex items-center justify-center py-28 px-6 md:px-16 overflow-hidden"
        >
            {/* Ambient glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
                style={{
                    background:
                        'radial-gradient(ellipse 60% 55% at 85% 50%, color-mix(in srgb, var(--color-primary) 6%, transparent), transparent)',
                }}
            />

            <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-16 md:gap-20">

                {/* ── Left: Text ─────────────────────────────────────────── */}
                <div className="flex-1 flex flex-col gap-6 text-left">

                    {/* Big "About Me" heading */}
                    <h2
                        className="text-3xl md:text-4xl lg:text-6xl font-extrabold leading-none tracking-tight text-base-content"
                        style={{ fontFamily: 'var(--font-pro)' }}
                    >
                        About Me
                    </h2>

                    {/* Smaller name */}
                    <p
                        className="text-xl md:text-2xl font-semibold text-primary"
                        style={{ fontFamily: 'var(--font-seco)' }}
                    >
                        — Asad Amir
                    </p>

                    {/* Paragraph 1 */}
                    <p className="text-base-content/80 text-lg leading-relaxed max-w-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                    </p>

                    {/* Paragraph 2 */}
                    <p className="text-base-content/70 text-lg leading-relaxed max-w-lg">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </div>

                {/* ── Right: Reserved space ──────────────────────────────── */}
                <div className="flex-1" />

            </div>
        </section>
    );
}
