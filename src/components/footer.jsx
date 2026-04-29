"use client"

import { useEffect, useRef } from "react";
import { track } from "@vercel/analytics";
import { ArrowUp } from "lucide-react";

import Link from "next/link"
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function Footer() {
    const footerRef = useRef(null);
    const hasFired = useRef(false);

    useEffect(() => {
        const el = footerRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasFired.current) {
                    hasFired.current = true;
                    track("footer_reached");
                }
            },
            { threshold: 0.3 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    
    return (
        <footer ref={footerRef} className="relative w-full pt-20 pb-12 bg-base-100 border-t border-primary rounded-t-4xl overflow-hidden">
            {/* 3D Canvas Background */}

            <div className="relative z-10 mx-auto px-6 md:px-16 flex flex-col gap-12">
                {/* Main Content */}
                <div className="flex lg:flex-cols gap-6 justify-between items-center px:6 lg:px-12">
                    {/* Left - Branding */}
                    <div className="flex flex-col gap-6">
                            <div>
                                <h3 
                                    className="text-base-content mb-3"
                                    style={{ fontFamily: "var(--font-pro)" }}
                                >
                                    Asad Amir
                                </h3>
                                <div className="h-1 w-22 bg-linear-to-r from-primary to-accent rounded-full"></div>
                            </div>
                    </div>

                    {/* Right - Navigation */}
                    <div className="flex flex-col gap-8">
                            <div className="flex flex-wrap  gap-3">
                                <Link
                                    href="/"
                                    className="px-4 py-2 text-sm rounded-lg border-primary border-2 hover:bg-primary hover:text-primary-content text-base-content transition-all duration-300"
                                >
                                    Home
                                </Link>
                                <a 
                                    href="/projects"
                                    className="px-4 py-2 text-sm rounded-lg border-primary border-2 hover:bg-primary hover:text-primary-content text-base-content transition-all duration-300"
                                >
                                    Projects
                                </a>
                            </div>
                        
                            <button
                                onClick={scrollToTop}
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-content hover:shadow-lg hover:scale-105 transition-all duration-300 w-full group"
                                title="Back to top"
                            >
                                <span className="text-sm uppercase tracking-wider">Back to top</span>
                                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                            </button>
                    </div>
                </div>

                {/* Bottom Divider & Copyright */}
                    <div className="pt-8 border-t border-primary/20">
                        <p className="text-sm text-base-content/50 text-center">
                            © {new Date().getFullYear()} Asad Amir. All rights reserved.
                        </p>
                    </div>
            </div>
        </footer>
    );
}
