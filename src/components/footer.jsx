"use client"

import { ArrowUp } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <footer className="relative w-full bg-base-100 pt-16 pb-8 overflow-hidden border-t border-base-content/5">
            {/* Circuit Board SVG Background */}
            <div
            className="absolute inset-0 pointer-events-none opacity-[1]  dark:opacity-[0.1]"
            style={{
                backgroundColor: "var(--color-primary)",
                filter: 'grayscale(1) blur(2px)',
                backgroundImage: "url('/circuit-board.svg')",
                backgroundRepeat: "repeat",
                backgroundSize: "304px 304px",
            }}
            />

            <div className="relative z-10 mx-auto px-6 md:px-16 flex flex-col gap-12">
                <div className="flex flex-col gap-10 mx-auto w-fit">
                    {/* Branding */}
                    <div className="flex flex-col gap-4 max-w-xs">
                        <h3 
                            className="text-2xl text-center font-bold text-base-content"
                            style={{ fontFamily: "var(--font-pro)" }}
                        >
                            Asad Amir
                        </h3>
                        <p className="text-base-content/70 text-sm leading-relaxed">
                            Independent self-taught developer from Lahore, Pakistan. Building performant Web experiences & Software Solutions.
                        </p>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="pt-8 border-t border-base-content/30 flex  md:flex-row justify-center items-center gap-12 xl:gap-24">
                    <p className=" text-xs ">
                        © {new Date().getFullYear()} Asad Amir. All rights reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="btn btn-ghost btn-sm text-base-content hover:text-primary hover:bg-base-300 group flex items-center gap-2"
                        title="Back to top"
                    >
                        <span className="text-xs uppercase tracking-wider">Back to top</span>
                        <ArrowUp className="w-4 h-4 " />
                    </button>
                </div>
            </div>
        </footer>
    );
}
