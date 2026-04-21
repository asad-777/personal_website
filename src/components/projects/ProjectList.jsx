import { supabase } from "@/lib/supabase";
import ProjectCard from "./ProjectCard";

export default async function ProjectList() {
    let projects = [];
    let error = null;

    try {
        // Attempting to fetch from a table named 'projects' by default.
        // If your table is named differently, you will need to update this name.
        const { data, error: sbError } = await supabase
            .from('Projects')
            .select('*')
            // Add a sensible order if you want, e.g., .order('created_at', { ascending: false })
        
        if (sbError) throw sbError;
        if (data) projects = data;
    } catch (err) {
        console.error("Failed to fetch projects from Supabase:", err.message);
        error = err.message;
    }

    if (error) {
        return (
            <div className="w-full flex-col flex items-center justify-center p-12 text-center bg-base-200/50 rounded-box border border-base-content/10">
                <div className="text-warning mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-base-content mb-2">Couldn&apos;t load projects</h3>
                <p className="text-base-content/70 max-w-md">
                    Please make sure your Supabase environment variables are properly set in \`.env.local\` and that you have a table named <strong>projects</strong>.
                </p>
                <div className="mt-4 p-4 bg-base-300 rounded-md text-xs text-left overflow-auto max-w-lg w-full">
                    <code>Error Detail: {error}</code>
                </div>
            </div>
        );
    }

    if (!projects || projects.length === 0) {
        return (
            <div className="w-full text-center p-12 bg-base-200/50 rounded-box border border-base-content/10">
                <h3 className="text-2xl font-bold text-base-content mb-2">No projects found.</h3>
                <p className="text-base-content/70">Add some projects to your Supabase database!</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
                <ProjectCard key={project.id || Math.random().toString()} Projects={project} />
            ))}
        </div>
    );
}
