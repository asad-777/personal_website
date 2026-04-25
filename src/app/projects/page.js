import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import ProjectList from "@/components/projects/ProjectList";

export const metadata = {
    title: "Projects | My Portfolio",
    description: "Browse through my latest projects and work.",
};

export default function ProjectsPage() {
    return (
        <div className="min-h-screen flex flex-col  selection:bg-primary/30">
            <main className="grow pt-32 pb-20 px-6 md:px-16 w-full relative">
                <style dangerouslySetInnerHTML={{__html: `
                    .glass-card {
                        position: relative;
                        background: rgba(255, 255, 255, 0.05);
                        backdrop-filter: blur(12px) saturate(120%);
                        -webkit-backdrop-filter: blur(12px) saturate(120%);
                        border: 1px solid rgba(100, 100, 100, 0.1);
                        box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.2),
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

                <div className="max-w-7xl mx-auto flex flex-col gap-12">
                    {/* Header section */}
                    <div className="flex flex-col mt-16 items-center w-fit mx-auto text-center gap-4 hide-dominoes">
                        <h1 
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-base-content"
                            style={{ fontFamily: 'var(--font-pro)' }}
                        >
                            All Projects
                        </h1>
                        <p className="text-base-content/80 text-lg md:text-xl max-w-2xl">
                            A comprehensive collection of my recent work, side projects, and experiments.
                        </p>
                        <div className="h-1 w-36 bg-linear-to-r from-primary to-accent rounded-full mb-6 mt-4" />
                    </div>

                    {/* Projects Grid Container */}
                    <div className="w-full">
                        <ProjectList />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
