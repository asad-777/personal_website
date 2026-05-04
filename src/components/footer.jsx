"use client"

import { useEffect, useRef } from "react";
import { gtagEvent } from "@/lib/gtag";
import {
    SOCIAL_LINKS,
    BLOG_LINKS,
    FREELANCE_LINKS,
    DOCUMENTS,
    SITE_CONFIG,
} from "@/lib/constants";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
                    gtagEvent("FooterReached");
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

    // ─── Organized footer columns ───
    const footerColumns = [
        {
            title: "Navigation",
            links: [
                { label: "About Me", href: "/#about" },
                { label: "Projects", href: "/projects" },
                { label: "Tech Stack", href: "/#services" },
                { label: "FAQ", href: "/#faq" },
                { label: "Blog", href: "/blog" },
            ]
        },
        {
            title: "Work & Hire",
            links: [
                { label: "Send a Message", href: "/#contactme" },
                { label: "View Pricing", href: "/freelance" },
                { label: "Download CV", href: DOCUMENTS.cv },
                { label: "Fiverr", href: FREELANCE_LINKS.fiverr },
                { label: "Upwork", href: FREELANCE_LINKS.upwork },
            ]
        },
        {
            title: "Connect & Read",
            links: [
                { label: "Instagram", href: SOCIAL_LINKS.instagram },
                { label: "Twitter / X", href: SOCIAL_LINKS.twitter },
                { label: "Discord", href: SOCIAL_LINKS.discord },
                { label: "Reddit", href: SOCIAL_LINKS.reddit },
                { label: "Dev.to", href: BLOG_LINKS.devto },
                { label: "Pinterest", href: BLOG_LINKS.pinterest },
            ]
        }
    ];

    return (
        <footer ref={footerRef} className="relative w-full pt-20 pb-14 bg-base-100 border-t border-primary rounded-t-4xl overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 flex flex-col gap-16">

                {/* ─── Main: Brand left · Organized Columns right ─── */}
                <div className="flex flex-col lg:flex-row gap-16 justify-between">

                    {/* Left — Brand */}
                    <div className="flex flex-col gap-5 lg:max-w-xs shrink-0">
                        <div className="flex items-center gap-3">
                            <Image src="/logo.png" alt="Logo" width={40} height={40} className="w-10 h-10 object-contain" />
                            <h3
                                className="text-base-content !text-2xl"
                                style={{ fontFamily: "var(--font-pro)" }}
                            >
                                {SITE_CONFIG.name}
                            </h3>
                        </div>
                        <div className="h-1 w-20 bg-linear-to-r from-primary to-accent rounded-full" />
                        <p className="text-base-content/50 !text-base !font-normal leading-relaxed">
                            Full-Stack Developer &amp; AI Engineer. Building production-ready web apps &amp; intelligent systems.
                        </p>
                    </div>

                    {/* Right — Categorized Links */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-12 lg:gap-x-20">
                        {footerColumns.map((col) => (
                            <div key={col.title} className="flex flex-col gap-5">
                                <h4 className="text-base-content !text-base font-semibold tracking-wide">
                                    {col.title}
                                </h4>
                                <ul className="flex flex-col gap-3">
                                    {col.links.map(({ label, href }) => (
                                        <li key={label}>
                                            <FooterLink label={label} href={href} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </div>

                {/* ─── Bottom Bar ─── */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-base-content/10">
                    <p className="text-sm text-base-content/40 !font-normal">
                        © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-content hover:shadow-lg hover:scale-105 transition-all duration-300 group cursor-pointer"
                        title="Back to top"
                    >
                        <span className="text-sm uppercase tracking-wider">Back to Top</span>
                        <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
}

// ─── Single footer link ───
function FooterLink({ label, href }) {
    const cls = "text-base-content/60 hover:text-primary text-base !font-normal transition-colors duration-300 whitespace-nowrap py-1 block";
    const track = () => gtagEvent(`${label.replace(/\s+/g, "")}FooterClick`);

    if (href.startsWith("/#")) {
        return (
            <button onClick={() => { track(); window.location.href = href; }} className={`${cls} cursor-pointer text-left`}>
                {label}
            </button>
        );
    }

    if (href.startsWith("/")) {
        return (
            <Link href={href} onClick={track} className={cls}>
                {label}
            </Link>
        );
    }

    return (
        <a href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" onClick={track} className={cls}>
            {label}
        </a>
    );
}
