"use client"

import { useState } from "react";

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Send } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

// Brand-colored SVG icons
const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
);

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="#0A66C2">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="url(#ig-grad)">
        <defs>
            <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f09433" />
                <stop offset="25%" stopColor="#e6683c" />
                <stop offset="50%" stopColor="#dc2743" />
                <stop offset="75%" stopColor="#cc2366" />
                <stop offset="100%" stopColor="#bc1888" />
            </linearGradient>
        </defs>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
);

const EmailIcon = () => (
    <svg viewBox="0 0 48 48" className="w-5 h-5 shrink-0" xmlns="http://www.w3.org/2000/svg">
        <path fill="#4CAF50" d="M45 16.2l-5 2.75-5 4.75L35 40h7c1.657 0 3-1.343 3-3V16.2z"/>
        <path fill="#1E88E5" d="M3 16.2l3.614 1.71L13 23.7V40H6c-1.657 0-3-1.343-3-3V16.2z"/>
        <polygon fill="#E53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"/>
        <path fill="#C62828" d="M3 12.298V16.2l10 7.5V11.2L9.876 8.859C9.132 8.301 8.228 8 7.298 8 4.924 8 3 9.924 3 12.298z"/>
        <path fill="#FBC02D" d="M45 12.298V16.2l-10 7.5V11.2l3.124-2.341C38.868 8.301 39.772 8 40.702 8 43.076 8 45 9.924 45 12.298z"/>
    </svg>
);

export default function Contact() {
    const [status, setStatus] = useState("idle"); // idle | sending | success | error

    const socials = [
        { icon: GitHubIcon,    label: "GitHub",    href: "https://github.com/yourusername" },
        { icon: LinkedInIcon,  label: "LinkedIn",  href: "https://linkedin.com/in/yourusername" },
        { icon: EmailIcon,     label: "Gmail",     href: "mailto:you@email.com" },
    ];

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("sending");
        const form = e.target;
        try {
            const res = await fetch("https://formspree.io/f/mkgrwrbn", {
                method: "POST",
                headers: { Accept: "application/json" },
                body: new FormData(form),
            });
            if (res.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    }

    return (
        <section
            id="contactme"
            className="relative w-full min-h-[80vh] bg-transparent flex items-center justify-center py-28 pt-40 px-6 md:px-16 overflow-hidden"
        >
         

            {/* Ambient glow */}


            <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">

                {/* ── Left: heading + social links ───────────────────────── */}
                <div className="flex flex-col gap-8 w-full lg:w-1/2">
                    <div className="flex flex-col gap-3">
                        <ScrollReveal delay={0.1}>
                            <h2
                                className="text-4xl w-fit md:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight text-base-content"
                                style={{ fontFamily: "var(--font-pro)" }}
                            >
                                Let&apos;s Connect
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <p className="text-base-content hide-dominoes text-base leading-relaxed">
                                Have a project in mind or just want to say hello? Drop a message or reach me on any of these.
                            </p>
                        </ScrollReveal>
                    </div>

                    <div className="flex hide-dominoes rounded-full p-6 flex-col gap-3">
                        {socials.map(({ icon: Icon, label, href }, idx) => (
                            <ScrollReveal key={label} delay={0.2 + idx * 0.1}>
                                <a
                                href={href}
                                target={href.startsWith("http") ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                className="hover:scale-[1.02] transition-transform w-full"
                            >
                                <div className="glass-card  w-full h-14" style={{ borderRadius: '14px' }}>
                                    <div className="flex items-center justify-center w-full h-full relative z-10">
                                        <div className="flex items-center gap-4 w-32">
                                            <Icon className="w-5 h-5 text-primary shrink-0" />
                                            <span
                                                className="text-base-content font-extrabold text-base text-left"
                                                style={{ fontFamily: "var(--font-seco)" }}
                                            >
                                                {label}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

                {/* ── Right: form ─────────────────────────────────────────── */}
                <div className="w-full lg:w-1/2">
                    <ScrollReveal delay={0.4}>
                        <div className="glass-card hide-dominoes w-full rounded-3xl p-6 md:p-8">
                            <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-3 w-full"
                        >
                            <h3
                                className="text-2xl md:text-3xl font-extrabold text-base-content mb-1"
                                style={{ fontFamily: "var(--font-pro)" }}
                            >
                                Send a Message
                            </h3>

                            {/* Name */}
                            <div className="form-control w-full">
                                <label className="label pb-1">
                                    <span className="label-text text-base-content/80 font-medium">Your Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    required
                                    className="input w-full bg-base-100 border border-base-content/50 focus:border-primary focus:outline-none"
                                />
                            </div>

                            {/* Email */}
                            <div className="form-control w-full">
                                <label className="label pb-1">
                                    <span className="label-text text-base-content/80 font-medium">Your Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="you@email.com"
                                    required
                                    className="input w-full bg-base-100 border border-base-content/50 focus:border-primary focus:outline-none"
                                />
                            </div>

                            {/* Subject */}
                            <div className="form-control w-full">
                                <label className="label pb-1">
                                    <span className="label-text text-base-content/80 font-medium">Subject</span>
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Project idea, collaboration, etc."
                                    required
                                    className="input w-full bg-base-100 border border-base-content/50 focus:border-primary focus:outline-none"
                                />
                            </div>

                            {/* Message */}
                            <div className="form-control w-full">
                                <label className="label pb-1">
                                    <span className="label-text text-base-content/80 font-medium">Message</span>
                                </label>
                                <textarea
                                    name="message"
                                    placeholder="Tell me more about what you have in mind..."
                                    rows={3}
                                    required
                                    className="textarea w-full bg-base-100 border border-base-content/50 focus:border-primary focus:outline-none resize-none"
                                />
                            </div>

                            {/* Feedback */}
                            {status === "success" && (
                                <p className="text-success text-sm font-medium">
                                    ✓ Message sent! I&apos;ll get back to you soon.
                                </p>
                            )}
                            {status === "error" && (
                                <p className="text-error text-sm font-medium">
                                    ✗ Something went wrong. Please try again.
                                </p>
                            )}

                            {/* Submit */}
                            <div className="pt-2">
                                <InteractiveHoverButton
                                    type="submit"
                                    icon={Send}
                                    disabled={status === "sending"}
                                    className="w-full  btn-solid btn text-base-content text-base font-extrabold border-base-content/50 hover:btn-primary hover:border-none hover:text-primary-content shadow-none rounded-xl disabled:opacity-60"
                                >
                                    {status === "sending" ? "Sending…" : "Send Message"}
                                </InteractiveHoverButton>
                            </div>
                        </form>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
