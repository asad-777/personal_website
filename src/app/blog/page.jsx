"use client"

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

// Placeholder data — will be replaced by Supabase fetch later
const blogPosts = [
    {
        id: 1,
        title: "Building Scalable AI Systems with Next.js and Supabase",
        excerpt: "Learn how to architect robust AI-driven applications using modern web technologies and vector databases.",
        date: "May 15, 2024",
        readTime: "8 min read",
        category: "Engineering",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        title: "The Future of Freelancing in the Age of Automation",
        excerpt: "How to position yourself as a high-value consultant while leveraging AI to 10x your output.",
        date: "May 10, 2024",
        readTime: "6 min read",
        category: "Career",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        title: "Mastering Glassmorphism: UI Design Trends for 2024",
        excerpt: "A deep dive into creating premium, translucent user interfaces that wow your clients.",
        date: "May 5, 2024",
        readTime: "5 min read",
        category: "Design",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800"
    }
];

export default function BlogPage() {
    return (
        <main className="relative min-h-screen pt-32 pb-24 px-6 md:px-16 overflow-hidden">
            {/* Background blurs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-6xl mx-auto flex flex-col gap-16">

                {/* ─── Page Header ─── */}
                <div className="flex flex-col items-center md:items-start gap-4">
                    <ScrollReveal delay={0.1}>
                        <h2 className="text-base-content">
                            The <span className="text-primary">Blog</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <div className="h-1.5 w-40 bg-linear-to-r from-primary via-accent to-secondary rounded-full shadow-[0_0_15px_rgba(var(--color-primary),0.4)]" />
                    </ScrollReveal>
                    <ScrollReveal delay={0.3}>
                        <p className="max-w-2xl text-base-content/60">
                            Thoughts on software engineering, AI, design, and the business of freelancing.
                        </p>
                    </ScrollReveal>
                </div>

                {/* ─── Category Filters ─── */}
                <ScrollReveal delay={0.4}>
                    <div className="flex flex-wrap gap-3">
                        {["All", "Engineering", "Design", "Career", "AI"].map((cat) => (
                            <button
                                key={cat}
                                className={`px-6 py-2 rounded-full border transition-all cursor-pointer ${
                                    cat === "All"
                                        ? "bg-primary text-primary-content border-primary"
                                        : "bg-base-200/30 text-base-content/60 border-base-content/10 hover:border-primary/50"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </ScrollReveal>

                {/* ─── Blog Grid ─── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <ScrollReveal key={post.id} delay={0.1 * index}>
                            <div className="group h-full flex flex-col overflow-hidden rounded-3xl border border-base-content/10 bg-base-200/30 hover:-translate-y-2 transition-all duration-500">

                                {/* Thumbnail */}
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                    />
                                    <div className="absolute top-4 left-4 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
                                        <label className="text-white">{post.category}</label>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-1 gap-4">
                                    <div className="flex items-center gap-4">
                                        <label className="flex items-center gap-1 text-base-content/40">
                                            <Calendar className="w-3 h-3" />
                                            {post.date}
                                        </label>
                                        <label className="flex items-center gap-1 text-base-content/40">
                                            <Clock className="w-3 h-3" />
                                            {post.readTime}
                                        </label>
                                    </div>

                                    <h4 className="group-hover:text-primary transition-colors leading-tight normal-case">
                                        {post.title}
                                    </h4>

                                    <p className="text-base-content/60 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-auto pt-6 flex items-center gap-2 text-primary group-hover:gap-4 transition-all">
                                        <label className="text-primary cursor-pointer">Read More</label>
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* ─── Newsletter CTA ─── */}
                <ScrollReveal delay={0.6}>
                    <div className="p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left rounded-3xl border border-base-content/10 bg-base-200/30">
                        <div className="space-y-4">
                            <h3 className="text-base-content normal-case">
                                Subscribe to the <span className="text-secondary">Newsletter</span>
                            </h3>
                            <p className="text-base-content/60 max-w-md">
                                Get the latest articles, resources and project updates delivered straight to your inbox.
                            </p>
                        </div>
                        <div className="flex w-full md:w-auto gap-3">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="bg-base-200/50 border border-base-content/10 px-6 py-4 rounded-2xl w-full md:w-80 focus:outline-none focus:border-primary transition-colors"
                            />
                            <button className="bg-primary text-primary-content px-8 py-4 rounded-2xl hover:scale-105 transition-transform active:scale-95 shrink-0">
                                Join
                            </button>
                        </div>
                    </div>
                </ScrollReveal>

            </div>
        </main>
    );
}
