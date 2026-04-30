"use client"

import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { gtagEvent } from "@/lib/gtag"
import GlassSurface from "@/components/GlassSurface"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"

// Simple minimalist icons for platforms
const FiverrIcon = () => <span className="text-sm font-bold text-[#1DBF73]">F</span>;
const UpworkIcon = () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#6FDA44]">
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
    </svg>
);

export default function FreelanceRedirect() {
    return (
        <section
            id="freelance"
            className="relative w-full py-24 px-6 md:px-16 bg-transparent overflow-hidden"
        >
            <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center gap-10">
                
                {/* Standard Section Heading */}
                <div className="flex flex-col items-center gap-4">
                    <ScrollReveal delay={0.1}>
                        <h2 className="text-base-content uppercase">
                            Free<span className="text-primary">lance</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <div className="h-1.5 w-40 bg-linear-to-r from-primary via-accent to-secondary rounded-full shadow-[0_0_15px_rgba(var(--color-primary),0.4)]" />
                    </ScrollReveal>
                </div>

                {/* Value Proposition & Description */}
                <div className="space-y-8 mt-4">
                    <ScrollReveal delay={0.3}>
                        <p className="max-w-4xl mx-auto text-base-content">
                            Making customer ready <span className="text-primary">WEB APPS</span> & <span className="text-secondary">AI SYSTEMS</span> for startups, buisnesses & individuals. See details, process, and get started with your project today.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Services Snapshot */}
                <ScrollReveal delay={0.5}>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2  uppercase">
                        <span>Web Apps</span>
                        <span className="text-secondary">•</span>
                        <span>AI Systems</span>
                        <span className="text-secondary">•</span>
                        <span>UI & UX</span>
                        <span className="text-secondary">•</span>
                        <span>Seo & Social Media</span>
                    </div>
                </ScrollReveal>
              

                {/* CTAs */}
                <div className="flex flex-col items-center gap-4 w-full">
                    <ScrollReveal delay={0.5} className="flex flex-wrap justify-center gap-4 w-full">
                        <GlassSurface width="fit-content" height="fit-content" borderRadius={9999} backgroundOpacity={0.05} borderWidth={0.5} className="hover:scale-[1.02] transition-transform shadow-xl">
                            <Link 
                                href="/freelance" 
                                onClick={() => gtagEvent("HireMeClick")}
                                className="bg-primary text-primary-content px-10 py-2 flex items-center gap-3 rounded-full"
                            >
                                Hire Me <ArrowRight className="w-5 h-5" />
                            </Link>
                        </GlassSurface>
                        
                        <GlassSurface width="fit-content" height="fit-content" borderRadius={9999} backgroundOpacity={0.05} borderWidth={0.5} className="hover:scale-[1.02] transition-transform shadow-xl">
                            <Link 
                                href="/projects" 
                                onClick={() => gtagEvent("ViewWorkFreelanceClick")}
                                className="bg-base-200/50 text-base-content px-10 py-1 flex items-center gap-3 rounded-full"
                            >
                                View Work <ExternalLink className="w-5 h-5 opacity-50" />
                            </Link>
                        </GlassSurface>
                    </ScrollReveal>

                    
                </div>



            </div>
        </section>  
    );
}
