"use client"

import { ArrowUp } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    
    return (
        <footer className="relative w-full overflow-hidden pt-20 pb-12">
            {/* Background with gradient and pattern */}
            <div className="absolute inset-0 bg-gradient-to-b from-neutral/20 to-neutral/40 dark:from-neutral/30 dark:to-neutral/50"></div>
            <div className="absolute inset-0 opacity-30 dark:opacity-20" style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)",
                backgroundSize: "40px 40px",
            }}></div>
            
            <div className="relative z-10 mx-auto px-6 md:px-16 flex flex-col gap-8">
                {/* Top Navigation */}
                <div className="flex items-center justify-between flex-wrap gap-6">
                    <h3 
                        className="text-2xl font-bold text-base-content"
                        style={{ fontFamily: "var(--font-pro)" }}
                    >
                        Asad Amir
                    </h3>
                    
                    <div className="flex items-center gap-6">
                        <a 
                            href="/"
                            className="text-base-content/70 hover:text-primary transition-colors duration-300 font-bold text-sm"
                        >
                            Home
                        </a>
                        <a 
                            href="/projects"
                            className="text-base-content/70 hover:text-primary transition-colors duration-300 font-bold text-sm"
                        >
                            Projects
                        </a>
                        <button
                            onClick={scrollToTop}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-content font-bold hover:shadow-lg transition-all duration-300 group"
                            title="Back to top"
                        >
                            <span className="text-xs uppercase tracking-wider">Back to top</span>
                            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-base-content/10">
                    <p className="text-xs text-base-content/50 text-center">
                        © {new Date().getFullYear()} Asad Amir. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
