import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

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
    {
        id: 3,
        title: "Demo Project",
        description: "A secure, sleek personal finance manager to monitor expenses, calculate taxes, and visualize monthly budgets using cutting-edge UI components.",
        technologies: ["TypeScript", "Node.js", "MongoDB", "Express"],
        category: "Fintech",
        thumbnail: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
        github: "https://github.com/",
        liveDemo: "https://example.com/"
    },
    {
        id: 4,
        title: "Demo Project",
        description: "Real-time collaborative code editor supporting multiple languages with integrated terminal, live execution, and chat room features.",
        technologies: ["Socket.IO", "React", "Docker", "Redis"],
        category: "Tools",
        thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
        github: "https://github.com/",
        liveDemo: "https://example.com/"
    }
];

export default function TopProjects() {
    return (
        <section
            id="projects"
            className="relative w-full min-h-[70vh] bg-base-100 py-20 px-6 md:px-16"
        >
            <style dangerouslySetInnerHTML={{__html: `
                .glass-card {
                    position: relative;
                    background: rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(12px) saturate(120%);
                    -webkit-backdrop-filter: blur(12px) saturate(120%);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3),
                        inset 0px 0px 4px 1px rgba(255, 255, 255, 0.05);
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
                    <h2 
                        className="text-4xl md:text-5xl font-extrabold tracking-tight text-base-content"
                        style={{ fontFamily: 'var(--font-pro)' }}
                    >
                        Top Projects
                    </h2>
                    <div className="w-16 h-1 rounded-full bg-primary opacity-90 mb-6" />
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {topProjects.map((project) => (
                        <div 
                            key={project.id} 
                            className="card w-full base-200 shadow-lg border border-base-content/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden bg-base-200/50 backdrop-blur-sm"
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
                                <div className="absolute inset-0 bg-linear-to-t from-base-300/80 to-transparent pointer-events-none" />
                                <div className="absolute top-4 right-4 z-10">
                                    <span className="badge badge-primary backdrop-blur-md bg-opacity-90 border-none font-bold">
                                        {project.category}
                                    </span>
                                </div>
                            </figure>

                            {/* Content Area */}
                            <div className="card-body p-6 flex flex-col gap-4">
                                <div className="flex justify-between items-start">
                                    <h3 className="card-title text-2xl font-bold text-base-content">
                                        {project.title}
                                    </h3>
                                </div>
                                
                                <p className="text-base-content/75 leading-relaxed grow text-sm md:text-base">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.technologies.map((tech, index) => (
                                        <span 
                                            key={index} 
                                            className="badge badge-outline border-base-content/20 text-base-content/80 text-xs font-bold py-3 px-3"
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
                                    >
                                        <div className="glass-card h-12 px-6 flex items-center justify-center cursor-pointer" style={{ borderRadius: '9999px' }}>
                                            <div className="relative z-10 flex items-center justify-center gap-2 w-full h-full">
                                                <Github size={20} className="text-base-content shrink-0" />
                                                <span className="text-base-content font-bold text-sm md:text-base whitespace-nowrap">GitHub</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a 
                                        href={project.liveDemo} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="hover:scale-[1.05] transition-transform"
                                    >
                                        <div className="glass-card h-12 px-6 flex items-center justify-center cursor-pointer" style={{ borderRadius: '9999px' }}>
                                            <div className="relative z-10 flex items-center justify-center gap-2 w-full h-full">
                                                <ExternalLink size={18} className="text-primary shrink-0" />
                                                <span className="text-base-content font-bold text-sm md:text-base whitespace-nowrap">Live</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
