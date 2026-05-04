import ProjectList from "@/components/projects/ProjectList";

export const metadata = {
    title: "Projects | Asad Amir",
    description: "Browse through Asad Amir's latest projects — full-stack web apps, AI integrations, and more.",
};

export default function ProjectsPage() {
    return (
        <div className="min-h-screen flex flex-col  selection:bg-primary/30">
            <main className="grow pt-32 pb-20 px-6 md:px-16 w-full relative">
                <div className="max-w-7xl mx-auto flex flex-col gap-12">
                    {/* Header section */}
                    <div className="flex flex-col mt-16 items-center w-fit mx-auto text-center gap-4 hide-dominoes">
                        <h1 
                            className="text-transparent text-4xl! lg:text-6xl! tracking-tighter! font-extrabold!"
                        >
                            <span className="text-base-content">All</span> <span className="bg-linear-to-r from-primary to-secondary bg-clip-text!">Projects</span>
                        </h1>
                        <p className="text-base-content/80  max-w-2xl">
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

        </div>
    );
}
