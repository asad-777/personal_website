"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { cn } from "@/lib/utils"
import { gtagEvent } from "@/lib/gtag"

const faqData = [
    {
        question: "What technologies do you specialize in?",
        answer: "I specialize in Full-Stack development using React, Next.js, and Node.js. On the backend, I have extensive experience with Django and FastAPI, and I'm proficient in AI integrations using LangChain and CrewAI."
    },
    {
        question: "Are you available for freelance projects?",
        answer: "Yes, I am open to freelance opportunities! I love working on innovative projects and helping bring digital visions to life. Feel free to reach out through the contact form below."
    },
    {
        question: "How do you approach a new project?",
        answer: "I follow a structured approach: first, I deeply analyze the requirements and goals. Then, I design the architecture with a focus on scalability and performance. Finally, I implement the solution using clean, documented code and modern UI/UX principles."
    },
    {
        question: "Do you work with AI integrations?",
        answer: "Absolutely. I have a strong interest in AI and regularly integrate LLMs and autonomous agents into my applications to create smarter, more intuitive user experiences."
    },
    {
        question: "What is your typical turnaround time?",
        answer: "Turnaround time depends on the project scope and complexity. Small projects or landing pages can take 1-2 weeks, while more complex full-stack applications may require 4-8 weeks. I always prioritize quality and clear communication."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        const isOpening = activeIndex !== index;
        if (isOpening) {
            gtagEvent("FAQItemExpand", { question: faqData[index].question });
        }
        setActiveIndex(isOpening ? index : null);
    };

    return (
        <section
            id="faq"
            className="relative w-full py-24 px-6 md:px-16 bg-transparent overflow-hidden"
        >
            <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col gap-16">
                
                {/* Standard Section Heading */}
                <div className="flex flex-col items-center md:items-start gap-4">
                    <ScrollReveal delay={0.1}>
                        <h2 className="text-base-content">
                            Frequently Asked <span className="text-primary">Questions</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <div className="h-1.5 w-48 bg-linear-to-r from-primary via-accent to-secondary rounded-full shadow-[0_0_15px_rgba(var(--color-primary),0.4)]" />
                    </ScrollReveal>
                </div>

                {/* FAQ List */}
                <div className="flex flex-col gap-4">
                    {faqData.map((item, idx) => (
                        <ScrollReveal key={idx} delay={0.2 + idx * 0.1}>
                            <div 
                                className={cn(
                                    "group rounded-2xl border border-base-content/25 transition-all duration-300",
                                    activeIndex === idx ? "bg-base-200/40 border-primary/20" : "bg-base-200/10 hover:bg-base-200/20"
                                )}
                            >
                                <button
                                    onClick={() => toggleAccordion(idx)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className={cn(
                                        "text-lg font-medium transition-colors duration-300",
                                        activeIndex === idx ? "text-primary" : "text-base-content/80 group-hover:text-base-content"
                                    )}>
                                        {item.question}
                                    </span>
                                    <div className={cn(
                                        "relative w-6 h-6 flex items-center justify-center transition-transform duration-300",
                                        activeIndex === idx ? "rotate-180" : ""
                                    )}>
                                        <div className="absolute w-4 h-0.5 bg-current rounded-full" />
                                        <div className={cn(
                                            "absolute w-0.5 h-4 bg-current rounded-full transition-transform duration-300",
                                            activeIndex === idx ? "rotate-90 scale-0" : ""
                                        )} />
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {activeIndex === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 text-base-content/60 leading-relaxed">
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
