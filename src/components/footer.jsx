"use client"

import { ArrowUp } from "lucide-react";
import FooterBackground from "./footer-background";
import Link from "next/link"

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    
    return (
        <footer className="relative w-full pt-20 pb-12 overflow-hidden">
            {/* 3D Canvas Background */}
            <FooterBackground />

            <div className="relative z-10 mx-auto px-6 md:px-16 flex flex-col gap-12">
                {/* Main Content */}
                <div className="flex lg:flex-cols gap-6 justify-between items-center px:6 lg:px-12">
                    {/* Left - Branding */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <h3 
                                className="text-3xl font-bold text-base-content mb-3"
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
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-content font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 w-full group"
                            title="Back to top"
                        >
                            <span className="text-sm uppercase font-bold tracking-wider">Back to top</span>
                            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Bottom Divider & Copyright */}
                <div className="pt-8 border-t border-base-content/10">
                    <p className="text-sm font-bold text-base-content/50 text-center">
                        © {new Date().getFullYear()} Asad Amir. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
