export default function ColorTestPage() {
    const colors = [
        { name: 'base-100', bg: 'bg-base-100', text: 'text-base-content' },
        { name: 'base-200', bg: 'bg-base-200', text: 'text-base-content' },
        { name: 'base-300', bg: 'bg-base-300', text: 'text-base-content' },
        { name: 'primary', bg: 'bg-primary', text: 'text-primary-content' },
        { name: 'secondary', bg: 'bg-secondary', text: 'text-secondary-content' },
        { name: 'accent', bg: 'bg-accent', text: 'text-accent-content' },
        { name: 'neutral', bg: 'bg-neutral', text: 'text-neutral-content' },
        { name: 'info', bg: 'bg-info', text: 'text-info-content' },
        { name: 'success', bg: 'bg-success', text: 'text-success-content' },
        { name: 'warning', bg: 'bg-warning', text: 'text-warning-content' },
        { name: 'error', bg: 'bg-error', text: 'text-error-content' },
    ];

    return (
        <div className="min-h-screen bg-base-100 text-base-content p-8">
            {/* Header with Theme Toggler */}
            <header className="flex justify-between items-center max-w-6xl mx-auto mb-12 pb-4 border-b border-base-300">
                <h1 className="text-4xl font-bold">Color System Test</h1>

                {/* Theme Controller */}
                <label className="swap swap-rotate btn btn-ghost btn-circle">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" className="theme-controller" value="Portfolio-light" />

                    {/* sun icon */}
                    <svg
                        className="swap-off h-8 w-8 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                    {/* moon icon */}
                    <svg
                        className="swap-on h-8 w-8 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                </label>
            </header>

            {/* Grid of Swatches */}
            <section className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {colors.map((c) => (
                    <div key={c.name} className={`h-40 rounded-2xl ${c.bg} ${c.text} flex flex-col justify-between p-4 shadow-lg border border-base-content/10`}>
                        <div className="font-bold text-lg capitalize">{c.name}</div>
                        <div className="text-sm opacity-80 flex justify-between items-end">
                            <span>{c.bg}</span>
                            <span className="text-xs uppercase tracking-wider opacity-60">swatch</span>
                        </div>
                    </div>
                ))}
            </section>

            {/* Usage Examples */}
            <section className="max-w-6xl mx-auto mt-12 space-y-8">
                <h2 className="text-2xl font-bold border-b border-base-300 pb-2">Component Usage Examples</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-6 bg-base-200 rounded-xl space-y-4">
                        <h3 className="font-bold">Buttons</h3>
                        <div className="flex flex-wrap gap-2">
                            <button className="btn btn-primary">Primary</button>
                            <button className="btn btn-secondary">Secondary</button>
                            <button className="btn btn-accent">Accent</button>
                            <button className="btn btn-error">Error</button>
                        </div>
                    </div>

                    <div className="p-6 bg-base-200 rounded-xl space-y-4">
                        <h3 className="font-bold">Badges</h3>
                        <div className="flex flex-wrap gap-2">
                            <div className="badge badge-primary">Primary</div>
                            <div className="badge badge-secondary">Secondary</div>
                            <div className="badge badge-accent">Accent</div>
                            <div className="badge badge-outline">Outline</div>
                        </div>
                    </div>

                    <div className="p-6 bg-base-200 rounded-xl space-y-4">
                        <h3 className="font-bold">Alerts</h3>
                        <div className="alert alert-info shadow-sm">
                            <span>Info: This is an information message.</span>
                        </div>
                        <div className="alert alert-success shadow-sm">
                            <span>Success: Task completed successfully.</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
