"use client"

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import GlassSurface from "@/components/GlassSurface";
import {
    Calendar,
    MessageSquare,
    CheckCircle2,
    ArrowRight,
    Layers,
    Zap,
    ShieldCheck,
    Star,
    Mail,
    Linkedin,
    Github,
    Twitter
} from "lucide-react";
import Link from "next/link";
import TopProjects from "@/components/TopProjects";

const services = [
    {
        title: "Full-Stack Development",
        description: "End-to-end web applications built with Next.js, React, and robust backend systems.",
        icon: <Layers className="w-6 h-6" />
    },
    {
        title: "AI Integration",
        description: "Custom AI agents, LLM pipelines, and automation tools to supercharge your business.",
        icon: <Zap className="w-6 h-6" />
    },
    {
        title: "Scalable Architecture",
        description: "Clean code and maintainable systems designed to grow with your user base.",
        icon: <ShieldCheck className="w-6 h-6" />
    }
];

const processSteps = [
    {
        number: "01",
        title: "Discovery & Strategy",
        description: "We dive deep into your goals, audience, and technical requirements to build a roadmap for success."
    },
    {
        number: "02",
        title: "Design & Architecture",
        description: "Creating high-fidelity mockups and planning a scalable technical foundation."
    },
    {
        number: "03",
        title: "Agile Development",
        description: "Rapid, iterative development with constant feedback loops and transparent progress tracking."
    },
    {
        number: "04",
        title: "Launch & Support",
        description: "Deploying your solution to the world and providing ongoing maintenance and optimization."
    }
];

const pricingPlans = [
    {
        name: "MVP Starter",
        price: "From $3k",
        description: "Perfect for startups looking to validate their core idea quickly.",
        features: ["Core Features Development", "Modern UI/UX Design", "Supabase/Firebase Setup", "2 Weeks Delivery"],
        cta: "Book Discovery Call",
        highlight: false
    },
    {
        name: "Professional",
        price: "From $8k",
        description: "Comprehensive solutions for growing businesses and complex apps.",
        features: ["Full AI Integration", "Complex Backend Logic", "SEO Optimization", "Performance Tuning", "4-6 Weeks Delivery"],
        cta: "Start Your Project",
        highlight: true
    },
    {
        name: "Retainer",
        price: "Custom",
        description: "Ongoing development and maintenance for long-term partners.",
        features: ["Priority Support", "Feature Iterations", "Security Updates", "Monthly Reports", "Dedicated Hours"],
        cta: "Contact for Details",
        highlight: false
    }
];

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CEO at TechFlow",
        text: "Working with them was a game-changer for our MVP. The speed and quality of code exceeded all expectations.",
        avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
        name: "Marcus Chen",
        role: "Founder of AI Labs",
        text: "The AI integration they built for us saved hundreds of man-hours. Truly a technical powerhouse.",
        avatar: "https://i.pravatar.cc/150?u=marcus"
    }
];

export default function FreelancePage() {
    return (
        <main className="relative min-h-screen pt-32 pb-24 overflow-hidden">
            {/* Background blurs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col gap-32">

                {/* ═══════════════════════════════════════════
                    HERO SECTION
                ═══════════════════════════════════════════ */}
                <section className="flex flex-col items-center text-center gap-12 py-12">
                    <div className="space-y-6 max-w-4xl">
                        <ScrollReveal delay={0.1}>
                            <label className="text-primary tracking-widest">Available for Hire</label>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <h1 className="text-base-content">
                                Building <span className="text-primary">Next-Gen</span> Web Apps & AI Systems
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={0.3}>
                            <p className="text-base-content/60 max-w-2xl mx-auto">
                                I help startups and businesses scale through high-performance software,
                                cutting-edge AI integrations, and premium user experiences.
                            </p>
                        </ScrollReveal>
                    </div>

                    {/* Primary CTAs — Glass only here */}
                    <ScrollReveal delay={0.4}>
                        <div className="flex flex-wrap justify-center gap-4">
                            <GlassSurface width="fit-content" height="fit-content" borderRadius={9999} backgroundOpacity={0.05} borderWidth={0.5} className="hover:scale-[1.02] transition-transform shadow-xl">
                                <button className="bg-primary text-primary-content px-8 py-3 flex items-center gap-3 rounded-full cursor-pointer">
                                    <Calendar className="w-5 h-5" />
                                    Book a Discovery Call
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </GlassSurface>
                            <GlassSurface width="fit-content" height="fit-content" borderRadius={9999} backgroundOpacity={0.05} borderWidth={0.5} className="hover:scale-[1.02] transition-transform shadow-xl">
                                <button className="bg-base-200/50 text-base-content px-8 py-3 flex items-center gap-3 rounded-full cursor-pointer">
                                    <MessageSquare className="w-5 h-5" />
                                    Send a Text
                                </button>
                            </GlassSurface>
                        </div>
                    </ScrollReveal>

                    {/* Social Bar */}
                    <ScrollReveal delay={0.5}>
                        <div className="flex items-center gap-8 pt-8 opacity-40 hover:opacity-100 transition-opacity">
                            <Link href="#" className="hover:text-primary transition-colors"><Linkedin className="w-6 h-6" /></Link>
                            <Link href="#" className="hover:text-primary transition-colors"><Github className="w-6 h-6" /></Link>
                            <Link href="#" className="hover:text-primary transition-colors"><Twitter className="w-6 h-6" /></Link>
                            <Link href="#" className="hover:text-primary transition-colors"><Mail className="w-6 h-6" /></Link>
                        </div>
                    </ScrollReveal>
                </section>

                {/* ═══════════════════════════════════════════
                    DELIVERABLES
                ═══════════════════════════════════════════ */}
                <section className="flex flex-col gap-16">
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <ScrollReveal delay={0.1}>
                            <h2 className="text-base-content">
                                Expert <span className="text-secondary">Deliverables</span>
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <div className="h-1.5 w-40 bg-linear-to-r from-secondary to-primary rounded-full" />
                        </ScrollReveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ScrollReveal key={index} delay={0.1 * index}>
                                <div className="p-10 h-full space-y-6 group rounded-3xl border border-base-content/10 bg-base-200/30 hover:border-primary/30 transition-colors">
                                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        {service.icon}
                                    </div>
                                    <h4 className="text-base-content normal-case">{service.title}</h4>
                                    <p className="text-base-content/60">
                                        {service.description}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                {/* ═══════════════════════════════════════════
                    PROCESS
                ═══════════════════════════════════════════ */}
                <section className="flex flex-col gap-16">
                    <div className="flex flex-col items-center md:items-end text-center md:text-right gap-4">
                        <ScrollReveal delay={0.1}>
                            <h2 className="text-base-content">
                                My <span className="text-accent">Process</span>
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <div className="h-1.5 w-40 bg-linear-to-r from-accent to-primary rounded-full" />
                        </ScrollReveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {processSteps.map((step, index) => (
                            <ScrollReveal key={index} delay={0.1 * index}>
                                <div className="space-y-4 relative pt-8">
                                    <span className="text-7xl text-base-content/5 absolute -top-6 -left-2 select-none">
                                        {step.number}
                                    </span>
                                    <h4 className="text-base-content normal-case">{step.title}</h4>
                                    <p className="text-base-content/60">
                                        {step.description}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                {/* ═══════════════════════════════════════════
                    PRICING
                ═══════════════════════════════════════════ */}
                <section className="flex flex-col gap-16">
                    <div className="text-center space-y-4">
                        <ScrollReveal delay={0.1}>
                            <h2 className="text-base-content">Pricing <span className="text-primary">Structures</span></h2>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <p className="text-base-content/60 max-w-2xl mx-auto">
                                Transparent pricing for high-impact results. Choose the model that fits your stage of growth.
                            </p>
                        </ScrollReveal>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        {pricingPlans.map((plan, index) => (
                            <ScrollReveal key={index} delay={0.1 * index}>
                                <div className={`p-10 flex flex-col h-full gap-8 rounded-3xl border transition-all duration-500 ${
                                    plan.highlight
                                        ? "border-primary/40 bg-primary/5 scale-105 z-10 shadow-2xl"
                                        : "border-base-content/10 bg-base-200/30"
                                }`}>
                                    <div className="space-y-3">
                                        <label className="text-base-content/60">{plan.name}</label>
                                        <h3 className="text-base-content">{plan.price}</h3>
                                        <p className="text-base-content/50">
                                            {plan.description}
                                        </p>
                                    </div>

                                    <ul className="space-y-4 flex-1">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                <span className="text-base-content/80">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button className={`w-full py-4 rounded-2xl transition-all cursor-pointer ${
                                        plan.highlight
                                            ? "bg-primary text-primary-content shadow-lg hover:scale-[1.02]"
                                            : "bg-base-content/5 hover:bg-base-content/10 border border-base-content/10"
                                    }`}>
                                        {plan.cta}
                                    </button>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                {/* ═══════════════════════════════════════════
                    RECENT WORK
                ═══════════════════════════════════════════ */}
                <section className="flex flex-col gap-16">
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <ScrollReveal delay={0.1}>
                            <h2 className="text-base-content">
                                Recent <span className="text-secondary">Work</span>
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <div className="h-1.5 w-40 bg-linear-to-r from-secondary to-accent rounded-full" />
                        </ScrollReveal>
                    </div>

                    <TopProjects limit={3} hideHeader={true} />

                    <div className="flex justify-center">
                        <Link href="/projects" className="group flex items-center gap-3 text-base-content/60 hover:text-primary transition-all">
                            <label className="cursor-pointer uppercase tracking-widest">View All Projects</label>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════
                    TESTIMONIALS
                ═══════════════════════════════════════════ */}
                <section className="flex flex-col gap-16">
                    <div className="text-center">
                        <ScrollReveal delay={0.1}>
                            <h2 className="text-base-content">Client <span className="text-primary">Success</span></h2>
                        </ScrollReveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.map((t, i) => (
                            <ScrollReveal key={i} delay={0.2 * i}>
                                <div className="p-10 space-y-8 rounded-3xl border border-base-content/10 bg-base-200/30">
                                    <div className="flex items-center gap-1 text-primary">
                                        {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                                    </div>
                                    <p className="text-base-content/80 italic">
                                        &ldquo;{t.text}&rdquo;
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-primary/20" />
                                        <div>
                                            <span className="text-base-content">{t.name}</span>
                                            <p className="text-base-content/40">{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                {/* ═══════════════════════════════════════════
                    FINAL CTA
                ═══════════════════════════════════════════ */}
                <section>
                    <ScrollReveal delay={0.2}>
                        <div className="p-16 md:p-24 text-center space-y-10 relative overflow-hidden rounded-[3rem] border border-base-content/10 bg-base-200/30">
                            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-primary/10 via-transparent to-secondary/10 -z-10" />

                            <h2 className="text-base-content normal-case">
                                Ready to bring your <br />
                                <span className="text-primary">vision to life?</span>
                            </h2>

                            <p className="text-base-content/60 max-w-xl mx-auto">
                                I&apos;m currently accepting new projects. Let&apos;s discuss how we can build something extraordinary.
                            </p>

                            <div className="flex flex-wrap justify-center gap-6">
                                <GlassSurface width="fit-content" height="fit-content" borderRadius={9999} backgroundOpacity={0.05} borderWidth={0.5} className="hover:scale-[1.02] transition-transform shadow-xl">
                                    <button className="bg-primary text-primary-content px-10 py-3 rounded-full cursor-pointer">
                                        Book a Call
                                    </button>
                                </GlassSurface>
                                <GlassSurface width="fit-content" height="fit-content" borderRadius={9999} backgroundOpacity={0.05} borderWidth={0.5} className="hover:scale-[1.02] transition-transform shadow-xl">
                                    <Link href="/#contactme" className="bg-base-200/50 text-base-content px-10 py-3 rounded-full inline-block">
                                        Get in Touch
                                    </Link>
                                </GlassSurface>
                            </div>
                        </div>
                    </ScrollReveal>
                </section>

            </div>
        </main>
    );
}
