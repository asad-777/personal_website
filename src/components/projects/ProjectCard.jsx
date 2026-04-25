import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export default function ProjectsCard({ Projects }) {
    // Handling cases where Projects fields might be undefined or slightly different in the database.
    const title = Projects["Title"] || "Untitled Project";
    const description = Projects["Description"] || "No description provided.";
    
    // Parse tech stack safely.
    let techs = [];
    const dbTechs = Projects["Tech Stack"];
    if (Array.isArray(dbTechs)) {
        techs = dbTechs;
    } else if (typeof dbTechs === 'string') {
        try { techs = JSON.parse(dbTechs); } catch(e) { techs = dbTechs.split(','); }
    }

    // Parse category safely to support multiple categories.
    let categories = [];
    const dbCategory = Projects["Category"];
    if (Array.isArray(dbCategory)) {
        categories = dbCategory;
    } else if (typeof dbCategory === 'string') {
        try { 
            const parsed = JSON.parse(dbCategory); 
            if (Array.isArray(parsed)) categories = parsed;
            else if (parsed.name) categories = [parsed.name];
            else categories = [dbCategory];
        } catch(e) { 
            categories = [dbCategory]; 
        }
    } else if (dbCategory && typeof dbCategory === 'object') {
        categories = dbCategory.name ? [dbCategory.name] : [];
    }

    const thumbnail = Projects["Image url"] || "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80";
    const githubLink = Projects["Github Url"] || "#";
    const demoLink = Projects["Live Link Url"] || "#";

    return (
        <div 
            className="card w-full h-full shadow-lg border border-base-content/10 overflow-hidden bg-base-200/50 backdrop-blur-sm group hover:-translate-y-2 transition-transform duration-300"
            style={{ borderRadius: '24px' }}
        >
            {/* Thumbnail Area */}
            <figure className="relative h-56 w-full overflow-hidden bg-base-300">
                <Image
                    src={thumbnail} 
                    alt={title} 
                    fill
                    loading="lazy"
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </figure>

            {/* Content Area */}
            <div className="card-body p-6 flex flex-col gap-4">
                {/* Categories */}
                {categories.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat, idx) => (
                            <span 
                                key={idx} 
                                className="badge badge-primary backdrop-blur-md bg-opacity-90 border-none font-bold text-xs px-3 py-3"
                            >
                                {cat}
                            </span>
                        ))}
                    </div>
                )}

                <div className="flex justify-between items-start">
                    <h3 className="card-title text-2xl font-bold text-base-content">
                        {title}
                    </h3>
                </div>
                
                <p className="text-base-content/75 leading-relaxed grow text-sm md:text-base">
                    {description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-auto">
                    {techs.length > 0 ? techs.map((tech, index) => (
                        <span 
                            key={index} 
                            className="badge badge-outline border-base-content/20 text-base-content/80 text-xs font-bold py-3 px-3"
                        >
                            {tech}
                        </span>
                    )) : (
                        <span className="text-sm text-base-content/50 italic">No technologies listed</span>
                    )}
                </div>

                {/* Actions */}
                <div className="card-actions justify-end mt-4 border-t border-base-content/10 pt-4 flex gap-4">
                    {githubLink !== "#" && (
                        <a 
                            href={githubLink} 
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
                    )}
                    {demoLink !== "#" && (
                        <a 
                            href={demoLink} 
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
                    )}
                </div>
            </div>
        </div>
    );
}
