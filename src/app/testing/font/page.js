export default function FontTestPage() {
    return (
        <div className="min-h-screen p-8 flex flex-col gap-12 max-w-4xl mx-auto">
            <section className="space-y-4">
                <h1 className="text-4xl border-b pb-2 mb-6 border-white/20">Typography System Test</h1>
                <p className="text-xl opacity-80">
                    This page demonstrates the global font settings defined in <code className="bg-white/10 px-1 rounded">globals.css</code>.
                </p>
            </section>

            <section className="space-y-6">
                <div className="space-y-2">
                    <span className="text-sm opacity-50 uppercase tracking-widest">Headings (Pro Font)</span>
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-4">
                        <h1>Heading Level 1 - The Quick Brown Fox</h1>
                        <h2>Heading Level 2 - Jumps Over The Lazy Dog</h2>
                        <h3>Heading Level 3 - 0123456789</h3>
                        <h4>Heading Level 4 - !@#$%^&*()</h4>
                        <h5>Heading Level 5 - A B C D E F G</h5>
                        <h6>Heading Level 6 - h i j k l m n</h6>
                    </div>
                </div>

                <div className="space-y-2">
                    <span className="text-sm opacity-50 uppercase tracking-widest">Body Text (Main Font)</span>
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-4">
                        <p>
                            This is a standard paragraph. It uses the main body font (Champagne & Limousines).
                            The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <p className="italic">
                            This is an italicized paragraph to test if the font supports italic styles or if the browser synthesizes it.
                        </p>
                        <p className="font-bold">
                            This is a bold paragraph. Note: The CSS sets a default font-weight of 400 for body, verifying bold override.
                        </p>
                    </div>
                </div>

                <div className="space-y-2">
                    <span className="text-sm opacity-50 uppercase tracking-widest">Interactive Elements (Secondary Font)</span>
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex flex-wrap gap-4 items-center">
                        <button className="btn btn-primary">Primary Button</button>
                        <button className="btn btn-secondary">Secondary Button</button>
                        <button className="btn btn-accent">Accent Button</button>
                        <button className="btn btn-ghost">Ghost Button</button>
                        <a href="#" className="link link-primary">Primary Link</a>
                        <a href="#" className="link link-secondary">Secondary Link</a>
                        <a href="#" className="underline">Standard Link</a>
                    </div>
                </div>
            </section>
        </div>
    );
}
