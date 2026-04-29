"use client"

import { gtagEvent } from "@/lib/gtag";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ScrollReveal } from "@/components/ui/scroll-reveal";

// OOP based project data structure
// You can easily add, remove, or update projects here.
const topProjects = [
    {
        id: 1,
        title: "Demo Project",
        description: "A full-stack application that leverages generative AI models to help creators design, edit, and export visual assets rapidly.",
        technologies: ["Next.js", "Tailwind CSS", "OpenAI API", "PostgreSQL"],
        category: "Web App",
        thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
        github: "https://github.com/",
        liveDemo: "https://example.com/"
    },
    {
        id: 2,
        title: "Demo Project",
        description: "A comprehensive developer analytics dashboard that tracks workflow efficiency, Git commit history, and CI/CD pipeline statistics.",
        technologies: ["React", "DaisyUI", "Chart.js", "Firebase"],
        category: "Analytics",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        github: "https://github.com/",
        liveDemo: "https://example.com/"
    },

];

export default function TopProjects() {
    return (
        <section
            id="projects"
            className="relative pt-12 w-full min-h-[70vh] bg-transparent py-20 px-6 md:px-16"
        >
            <style dangerouslySetInnerHTML={{__html: `
                .glass-card {
                    position: relative;
                    background: rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(12px) saturate(120%);
                    -webkit-backdrop-filter: blur(12px) saturate(120%);
                    border: 1px solid rgba(100, 100, 100, 0.1);
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                }

                .glass-card::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    border-radius: inherit;
                    background: linear-gradient(to left top, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 50%);
                    z-index: 1;
                }

                .glass-card::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    border-radius: inherit;
                    background: linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%);
                    z-index: 1;
                }
            `}} />
            <div className="max-w-6xl mx-auto flex flex-col gap-12">
                {/* Header section */}
                <div className="flex flex-col items-center text-center gap-4">
                    <ScrollReveal delay={0.1}>
                        <h2 
                            className="hide-dominoes text-base-content"
                        >
                            Top Projects
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <div className="h-1 w-36 bg-linear-to-r from-primary to-accent rounded-full mb-6" />
                    </ScrollReveal>
                </div>

                {/* View All Projects Link */}
                <ScrollReveal delay={0.4}>
                    <div className="flex justify-center w-full mt-8">
                        <Link href="/projects" onClick={() => gtagEvent("view_all_projects_click")} className="group glass bg-base-200/80 btn btn-wide py-8 hover:bg-primary/80 hover:text-primary-content btn-primary rounded-2xl w-full max-w-sm">
                            <div className="h-14 px-8 flex items-center justify-center cursor-pointer hover:scale-[1.02] transition-transform w-full" style={{ borderRadius: '14px' }}>
                                <div className="relative z-10 flex items-center justify-center gap-2 w-full h-full">
                                    <span className="text-base-content text-xl whitespace-nowrap" style={{ fontFamily: 'var(--font-seco)' }}>View All Projects</span>
                                    <ArrowRight size={20} className="text-primary shrink-0" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollReveal>
                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {topProjects.map((project, idx) => (
                        <ScrollReveal key={project.id} delay={0.2 + idx * 0.1} className="h-full">
                            <div 
                                className="glass-card hide-dominoes w-full h-full shadow-lg border border-base-content/10 overflow-hidden bg-base-200/50 backdrop-blur-sm group hover:-translate-y-2 transition-transform duration-300"
                                style={{ borderRadius: '24px' }}
                            >
                                {/* Thumbnail Area */}
                                <figure className="relative h-56 w-full overflow-hidden bg-base-300">
                                    <Image
                                        src={project.thumbnail} 
                                        alt={project.title} 
                                        fill
                                        unoptimized
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 right-4 z-10">
                                        <span className="badge badge-primary backdrop-blur-md bg-opacity-90 border-none">
                                            {project.category}
                                        </span>
                                    </div>
                                </figure>

                                {/* Content Area */}
                                <div className="card-body p-6 flex flex-col gap-4">
                                    <div className="flex justify-between items-start">
                                        <h3 className="card-title text-base-content">
                                            {project.title}
                                        </h3>
                                    </div>
                                    
                                    <p className="text-base-content/75 leading-relaxed grow  ">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.technologies.map((tech, index) => (
                                            <span 
                                                key={index} 
                                                className="badge badge-outline border-base-content/20 text-base-content/80 text-xs py-3 px-3"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Actions */}
                                    <div className="card-actions justify-end mt-4 border-t border-base-content/10 pt-4 flex gap-4">
                                        <a 
                                            href={project.github} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="hover:scale-[1.05] transition-transform"
                                            aria-label="View Source on GitHub"
                                            onClick={() => gtagEvent("project_github_click", { project: project.title })}
                                        >
                                            <div className="glass-card h-12 px-6 flex items-center justify-center cursor-pointer" style={{ borderRadius: '9999px' }}>
                                                <div className="relative z-10 flex items-center justify-center gap-2 w-full h-full">
                                                    <Github size={20} className="text-base-content shrink-0" />
                                                    <span className="text-base-content text-sm md:text-base whitespace-nowrap">GitHub</span>
                                                </div>
                                            </div>
                                        </a>
                                        <a 
                                            href={project.liveDemo} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="hover:scale-[1.05] transition-transform"
                                            onClick={() => gtagEvent("project_live_demo_click", { project: project.title })}
                                        >
                                            <div className="glass-card h-12 px-6 flex items-center justify-center cursor-pointer" style={{ borderRadius: '9999px' }}>
                                                <div className="relative z-10 flex items-center justify-center gap-2 w-full h-full">
                                                    <ExternalLink size={18} className="text-primary shrink-0" />
                                                    <span className="text-base-content text-sm md:text-base whitespace-nowrap">Live</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

            </div>
        </section>
    );
}
