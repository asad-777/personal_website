"use client"

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    
    return (
        <footer className="relative w-full bg-gradient-to-b from-base-100 via-base-100 to-base-200 dark:from-base-100 dark:via-base-100 dark:to-base-200 pt-20 pb-12">
            <div className="mx-auto px-6 md:px-16 flex flex-col gap-12">
                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left - Branding & Bio */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <h3 
                                className="text-3xl font-bold text-base-content mb-3"
                                style={{ fontFamily: "var(--font-pro)" }}
                            >
                                Asad Amir
                            </h3>
                            <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                        </div>
                        <p className="text-base-content/70 leading-relaxed max-w-sm">
                            Independent self-taught developer from Lahore, Pakistan. Building performant Web experiences & Software Solutions.
                        </p>
                        {/* Social Links */}
                        <div className="flex items-center gap-4 pt-2">
                            <a 
                                href="#" 
                                className="p-2.5 rounded-lg bg-base-300/50 hover:bg-primary hover:text-primary-content transition-all duration-300 text-base-content/70 hover:scale-110"
                                title="GitHub"
                                aria-label="GitHub"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a 
                                href="#" 
                                className="p-2.5 rounded-lg bg-base-300/50 hover:bg-primary hover:text-primary-content transition-all duration-300 text-base-content/70 hover:scale-110"
                                title="LinkedIn"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a 
                                href="#" 
                                className="p-2.5 rounded-lg bg-base-300/50 hover:bg-primary hover:text-primary-content transition-all duration-300 text-base-content/70 hover:scale-110"
                                title="Email"
                                aria-label="Email"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Right - CTA and Quick Links */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <p className="text-xs uppercase tracking-widest font-bold text-base-content/50 mb-4">Quick Links</p>
                            <div className="flex flex-wrap gap-2">
                                {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                                    <a 
                                        key={link}
                                        href="#"
                                        className="px-4 py-2 text-sm rounded-lg bg-base-300/30 hover:bg-primary hover:text-primary-content text-base-content/70 transition-all duration-300"
                                    >
                                        {link}
                                    </a>
                                ))}
                            </div>
                        </div>
                        
                        <button
                            onClick={scrollToTop}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-content font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 w-fit group"
                            title="Back to top"
                        >
                            <span className="text-sm uppercase tracking-wider">Back to top</span>
                            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Bottom Divider & Copyright */}
                <div className="pt-8 border-t border-base-content/10">
                    <p className="text-xs text-base-content/50 text-center">
                        © {new Date().getFullYear()} Asad Amir. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
