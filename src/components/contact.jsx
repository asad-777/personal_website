"use client"

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import GlassSurface from "@/components/GlassSurface";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Send } from "lucide-react";

const socials = [
    {
        icon: FaGithub,
        label: "GitHub",
        href: "https://github.com/yourusername",
    },
    {
        icon: FaLinkedin,
        label: "LinkedIn",
        href: "https://linkedin.com/in/yourusername",
    },
    {
        icon: FaInstagram,
        label: "Instagram",
        href: "https://instagram.com/yourusername",
    },
    {
        icon: MdEmail,
        label: "Email",
        href: "mailto:you@email.com",
    },
];

export default function Contact() {
    return (
        <section
            id="contactme"
            className="relative w-full min-h-[80vh] bg-base-100 flex items-center justify-center py-28 pt-40 px-6 md:px-16 overflow-hidden"
        >
            {/* Ambient glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
                style={{
                    background:
                        "radial-gradient(ellipse 60% 55% at 15% 50%, color-mix(in srgb, var(--color-primary) 6%, transparent), transparent)",
                }}
            />

            <div className="relative z-10 w-full mx-auto flex flex-col md:flex-row gap-16 md:gap-20 items-start">

                {/* ── Left: heading + social links ───────────────────────── */}
                <div className="flex flex-col gap-8 md:w-80 shrink-0">
                    <div className="flex flex-col gap-3">
                        <h2
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight text-base-content"
                            style={{ fontFamily: "var(--font-pro)" }}
                        >
                            Let&apos;s Connect
                        </h2>
                        <p className="text-base-content/60 text-base leading-relaxed">
                            Have a project in mind or just want to say hello? Drop a message or reach me on any of these.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        {socials.map(({ icon: Icon, label, href }) => (
                            <a
                                key={label}
                                href={href}
                                target={href.startsWith("http") ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                className="hover:scale-[1.02] transition-transform"
                            >
                                <GlassSurface
                                    width="100%"
                                    height={56}
                                    borderRadius={14}
                                    backgroundOpacity={0.05}
                                    borderWidth={0.5}
                                    className="w-full"
                                >
                                    <div className="flex items-center gap-4 px-5 w-full">
                                        <Icon className="w-5 h-5 text-primary shrink-0" />
                                        <span
                                            className="text-base-content font-semibold text-base"
                                            style={{ fontFamily: "var(--font-seco)" }}
                                        >
                                            {label}
                                        </span>
                                    </div>
                                </GlassSurface>
                            </a>
                        ))}
                    </div>
                </div>

                {/* ── Right: form ─────────────────────────────────────────── */}
                <div className="flex-1">
                    <div
                        className="w-full rounded-3xl border border-base-content/10 p-6 md:p-8"
                        style={{ background: 'color-mix(in srgb, var(--color-base-200) 25%, transparent)' }}
                    >
                        <form
                            action="https://formspree.io/f/mkgrwrbn"
                            method="POST"
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
                                    className="input w-full bg-black/30 border border-base-content/50 focus:border-primary focus:outline-none"
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
                                    className="input w-full bg-black/30 border border-base-content/50 focus:border-primary focus:outline-none"
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
                                    className="input w-full bg-black/30 border border-base-content/50 focus:border-primary focus:outline-none"
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
                                    className="textarea w-full bg-black/30 border border-base-content/50 focus:border-primary focus:outline-none resize-none"
                                />
                            </div>

                            {/* Terms checkbox */}
                            <div className="form-control">
                                <label className="label cursor-pointer justify-start gap-3">
                                    <input
                                        type="checkbox"
                                        required
                                        name="terms"
                                        className="checkbox checkbox-primary"
                                    />
                                    <span className="label-text text-base-content/70 text-sm">
                                        I agree to the Terms and Privacy Policy
                                    </span>
                                </label>
                            </div>

                            {/* Submit */}
                            <div className="pt-1">
                                <GlassSurface
                                    width="fit-content"
                                    height="fit-content"
                                    borderRadius={9999}
                                    backgroundOpacity={0.05}
                                    borderWidth={0.5}
                                    className="cursor-pointer"
                                >
                                    <InteractiveHoverButton
                                        type="submit"
                                        icon={Send}
                                        className="bg-transparent border-none text-base-content hover:bg-primary hover:text-primary-content text-base btn btn-wide px-12 shadow-none"
                                    >
                                        Send Message
                                    </InteractiveHoverButton>
                                </GlassSurface>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
