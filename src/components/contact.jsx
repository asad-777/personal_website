"use client"

import { useState } from "react";

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Send, Download, ExternalLink } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import GlassSurface from "@/components/GlassSurface";

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

// Twitter/X icon
const TwitterIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

// Fiverr icon
const FiverrIcon = () => (
    <span className="text-sm font-black text-[#1DBF73] shrink-0">F</span>
);

// Upwork icon
const UpworkIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="#6FDA44">
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
    </svg>
);

// Slack icon
const SlackIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="currentColor">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
    </svg>
);

export default function Contact() {
    const [status, setStatus] = useState("idle");
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    function validateField(name, value) {
        switch (name) {
            case "name":
                if (!value.trim()) return "Full name is required";
                if (value.trim().length < 2) return "Name must be at least 2 characters";
                return "";
            case "email":
                if (!value.trim()) return "Email address is required";
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return "Please enter a valid email";
                return "";
            case "subject":
                if (!value.trim()) return "Subject is required";
                return "";
            case "message":
                if (!value.trim()) return "Message is required";
                if (value.trim().length < 10) return "Please write at least 10 characters";
                return "";
            default:
                return "";
        }
    }

    function validateAll(form) {
        const fields = ["name", "email", "subject", "message"];
        const newErrors = {};
        let valid = true;
        fields.forEach((f) => {
            const val = form.elements[f]?.value || "";
            const err = validateField(f, val);
            if (err) {
                newErrors[f] = err;
                valid = false;
            }
        });
        setErrors(newErrors);
        setTouched({ name: true, email: true, subject: true, message: true });
        return valid;
    }

    function handleFieldChange(e) {
        const { name, value } = e.target;
        if (touched[name]) {
            setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
        }
    }

    function handleFieldBlur(e) {
        const { name, value } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
        setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        if (!validateAll(form)) return;
        setStatus("sending");
        try {
            const res = await fetch("https://formspree.io/f/mkgrwrb", {
                method: "POST",
                headers: { Accept: "application/json" },
                body: new FormData(form),
            });
            if (res.ok) {
                setStatus("success");
                form.reset();
                setErrors({});
                setTouched({});
            } else {
                setStatus("error");
                form.reset()
            }
        } catch {
            setStatus("error");
        }
    }

    const fieldErrorClasses = (name) =>
        touched[name] && errors[name]
            ? "border-red-500  focus:border-red-500 animate-[shake_0.3s_ease-in-out]"
            : "border-base-content/15 "
             "focus:border-primary";

    const freelancePlatforms = [
        { icon: FiverrIcon, label: "Fiverr", href: "#" },
        { icon: UpworkIcon, label: "Upwork", href: "#" },
        { icon: SlackIcon, label: "Slack", href: "#" },
    ];

    const socialLinks = [
        { icon: GitHubIcon, label: "GitHub", href: "https://github.com/yourusername" },
        { icon: LinkedInIcon, label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
        { icon: EmailIcon, label: "Email", href: "mailto:you@email.com" },
        { icon: TwitterIcon, label: "Twitter", href: "#" },
    ];

    return (
        <section
            id="contactme"
            className="relative w-full py-24 px-6 pt-36 md:px-16 bg-transparent overflow-hidden"
        >

            {/* Standard Section Heading */}
                <div className=" items-center justify-center grid text-center md:items-start gap-4">
                    <ScrollReveal delay={0.1}>
                        <h2
                            className="text-5xl min-w-full md:text-7xl font-extrabold tracking-tight text-base-content uppercase"
                            style={{ fontFamily: 'var(--font-pro)' }}
                        >
                            Contacts &<span className="text-primary"> Freelance</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <div className="h-1.5 w-48 bg-linear-to-r from-primary mx-auto via-accent to-secondary rounded-full shadow-[0_0_15px_rgba(var(--color-primary),0.4)]" />
                    </ScrollReveal>
                </div>


            <div className="relative z-10  w-full max-w-6xl mx-auto flex flex-col gap-24">

                {/* ─── FREELANCE + SOCIALS SIDE BY SIDE ─── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-16">
                    
                    {/* Freelance */}
                    <div className="flex flex-col gap-8 items-center lg:items-start text-center lg:text-left">
                        <ScrollReveal delay={0.2}>
                            <h3 className="text-5xl md:text-7xl font-extrabold tracking-tight text-base-content uppercase" style={{ fontFamily: 'var(--font-pro)' }}>Freelance</h3>
                        </ScrollReveal>

                        <ScrollReveal delay={0.25}>
                            <p className="text-lg md:text-xl font-bold text-base-content/70 max-w-md leading-relaxed">
                                I take on freelance work across web development, UI engineering, and full-stack builds.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                                <GlassSurface width="fit-content" height="fit-content" borderRadius={9999} backgroundOpacity={0.05} borderWidth={0.5} className="cursor-pointer hover:scale-[1.02] transition-transform">
                                    <a href="/portfolio.pdf" download className="bg-primary border-none text-primary-content text-base font-bold px-8 py-3 flex items-center gap-3 rounded-full">
                                        <Download className="w-4 h-4" /> Freelance Portfolio
                                    </a>
                                </GlassSurface>
                                <GlassSurface width="fit-content" height="fit-content" borderRadius={9999} backgroundOpacity={0.05} borderWidth={0.5} className="cursor-pointer hover:scale-[1.02] transition-transform">
                                    <Link href="/projects" className="bg-primary border-none text-primary-content text-base font-bold px-8 py-3 flex items-center gap-3 rounded-full">
                                        <ExternalLink className="w-4 h-4" /> See Work
                                    </Link>
                                </GlassSurface>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.35}>
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                                {freelancePlatforms.map(({ icon: Icon, label, href }) => (
                                    <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                                        <GlassSurface width="fit-content" height={56} borderRadius={9999} backgroundOpacity={0.05} borderWidth={0.5} className="cursor-pointer hover:scale-[1.02] transition-transform px-6">
                                            <div className="flex items-center gap-3">
                                                <Icon />
                                                <span className="text-base font-bold text-base-content">{label}</span>
                                            </div>
                                        </GlassSurface>
                                    </a>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Socials */}
                    <div className="flex flex-col gap-8 items-center lg:items-start text-center lg:text-left">
                        <ScrollReveal delay={0.25}>
                            <h3 className="text-5xl md:text-7xl font-extrabold tracking-tight text-base-content uppercase" style={{ fontFamily: 'var(--font-pro)' }}>Socials</h3>
                        </ScrollReveal>
                        <ScrollReveal delay={0.3}>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                {socialLinks.map(({ icon: Icon, label, href }) => (
                                    <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                                        <GlassSurface width="fit-content" height={56} borderRadius={9999} backgroundOpacity={0.05} borderWidth={0.5} className="cursor-pointer hover:scale-[1.02] transition-transform px-6">
                                            <div className="flex items-center gap-3">
                                                <Icon />
                                                <span className="text-base font-bold text-base-content">{label}</span>
                                            </div>
                                        </GlassSurface>
                                    </a>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* ─── FORM ZONE ─── */}
                <div className="flex flex-col lg:flex-row gap-10 pt-16 items-center  lg:items-center text-center lg:text-left">
                    <div className="flex flex-col items-start gap-6 justify-start  mb-auto" >
                    <ScrollReveal delay={0.3}>
                        <h3 className="text-5xl md:text-7xl font-extrabold tracking-tight text-base-content uppercase" style={{ fontFamily: 'var(--font-pro)' }}>Let&apos;s Talk</h3>
                    </ScrollReveal>
                    <ScrollReveal delay={0.3}>
                        <p className="text-lg md:text-xl font-bold text-base-content/70 max-w-2xl leading-relaxed">
                            Have a project in mind, or just want to say hello? Drop me a message and I&apos;ll get back to you.
                        </p>
                    </ScrollReveal>
                    </div>

                    <ScrollReveal delay={0.35}>
                        <form onSubmit={handleSubmit} className="w-full space-y-10">
                            {/* Hidden metadata fields */}
                            <input type="hidden" name="_timestamp" value={new Date().toISOString()} />
                            <input type="hidden" name="_screen" value={typeof window !== 'undefined' ? `${window.innerWidth}x${window.innerHeight}` : 'unknown'} />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                                <div className="space-y-3">
                                    <label className="text-sm font-black uppercase tracking-[0.2em] text-base-content/60">Full Name </label>
                                    <input type="text" name="name" placeholder="John Doe"
                                        onChange={handleFieldChange} onBlur={handleFieldBlur}
                                        className={`w-full bg-transparent border-b py-1 px-2 focus:px-6 duration-300 transition-rounded focus:rounded-3xl focus:border-primary outline-hidden transition-colors font-bold text-lg text-base-content placeholder:text-base-content/15 ${fieldErrorClasses("name")}`} />
                                    {touched.name && errors.name && <p className="text-red-500 text-xs font-bold mt-1 tracking-wide">{errors.name}</p>}
                                </div>
                                <div className="space-y-3">
                                    <label className="text-sm font-black uppercase tracking-[0.2em] text-base-content/60">Email </label>
                                    <input type="email" name="email" placeholder="john@example.com"
                                        onChange={handleFieldChange} onBlur={handleFieldBlur}
                                        className={`w-full bg-transparent border-b py-1 px-2 focus:px-6 duration-300 transition-rounded focus:rounded-3xl focus:border-primary outline-hidden transition-colors font-bold text-lg text-base-content placeholder:text-base-content/15 ${fieldErrorClasses("email")}`} />
                                    {touched.email && errors.email && <p className="text-red-500 text-xs font-bold mt-1 tracking-wide">{errors.email}</p>}
                                </div>
                                <div className="space-y-3">
                                    <label className="text-sm font-black uppercase tracking-[0.2em] text-base-content/60">Phone </label>
                                    <input type="tel" name="contact" placeholder="+1 234 567 890"
                                        className="w-full bg-transparent border-b border-base-content/15 py-1 px-2 focus:px-6  focus:rounded-3xl outline-hidden duration-300 focus:rounded-3xl transition-rounded focus:border-primary transition-colors font-bold text-lg text-base-content placeholder:text-base-content/15" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-sm font-black uppercase tracking-[0.2em] text-base-content/60">Subject </label>
                                    <input type="text" name="subject" placeholder="Project Inquiry"
                                        onChange={handleFieldChange} onBlur={handleFieldBlur}
                                        className={`w-full bg-transparent border-b py-1 px-2 focus:px-6 duration-300 transition-rounded focus:rounded-3xl focus:border-primary outline-hidden transition-colors font-bold text-lg text-base-content placeholder:text-base-content/15 ${fieldErrorClasses("subject")}`} />
                                    {touched.subject && errors.subject && <p className="text-red-500 text-xs font-bold mt-1 tracking-wide">{errors.subject}</p>}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-black uppercase tracking-[0.2em] text-base-content/60">Description </label>
                                <textarea name="message" rows={4} placeholder="Tell me about your project, timeline, budget..."
                                    onChange={handleFieldChange} onBlur={handleFieldBlur}
                                    className={`w-full bg-transparent border-b py-1 px-2 focus:px-6 duration-300 transition-rounded focus:rounded-3xl focus:border-primary outline-hidden transition-colors font-bold text-lg text-base-content placeholder:text-base-content/15 resize-none ${fieldErrorClasses("message")}`} />
                                {touched.message && errors.message && <p className="text-red-500 text-xs font-bold mt-1 tracking-wide">{errors.message}</p>}
                            </div>

                            <div className="flex items-center justify-center  gap-6 pt-2">
                                <GlassSurface width="fit-content" height="fit-content" borderRadius={9999} backgroundOpacity={0.05} borderWidth={0.5} className="cursor-pointer hover:scale-[1.02] transition-transform">
                                    <button type="submit" disabled={status === "sending"}
                                        className="bg-primary border-none text-primary-content font-black uppercase tracking-widest rounded-full px-10 py-3 disabled:opacity-50">
                                        {status === "sending" ? "Sending..." : "Send Message"}
                                    </button>
                                </GlassSurface>
                                {status === "success" && (
                                    <p className="text-primary text-xs font-black uppercase tracking-widest">✓ Sent successfully</p>
                                )}
                                {status === "error" && (
                                    <p className="text-red-500 text-xs font-black uppercase tracking-widest">✗ Failed to send — please try again</p>
                                )}
                            </div>
                        </form>
                    </ScrollReveal>
                </div>

            </div>
        </section>
    );
}
