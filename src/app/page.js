export default function Page() {
	const year = new Date().getFullYear();
	return (
		<main className="min-h-screen bg-base-100 text-base-content">
			<nav className="navbar bg-transparent px-6 py-4">
				<div className="flex-1">
					<a className="btn btn-ghost normal-case text-xl">Your Name</a>
				</div>
				<div className="flex-none gap-2">
					<a href="#work" className="btn btn-ghost">Work</a>
					<a href="#about" className="btn btn-ghost">About</a>
					<a href="#contact" className="btn btn-primary">Contact</a>
				</div>
			</nav>

			<section className="hero min-h-[70vh] px-6">
				<div className="hero-content flex-col lg:flex-row-reverse gap-12">
					<div className="text-center lg:text-left max-w-lg">
						<h1 className="text-5xl font-bold">Hi, I'm Your Name.</h1>
						<p className="py-6">I build modern web applications and beautiful UI. I focus on performance, accessibility, and developer experience.</p>
						<div className="flex gap-4">
							<a href="#work" className="btn btn-primary btn-lg">See my work</a>
							<a href="#contact" className="btn btn-outline">Get in touch</a>
						</div>
					</div>
					<div className="mockup-window border bg-base-200 p-4 w-full max-w-md">
						<div className="h-64 w-full bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white">
							<span className="text-xl">Project screenshot</span>
						</div>
					</div>
				</div>
			</section>

			<section id="work" className="px-6 py-16">
				<h2 className="text-3xl font-semibold mb-6">Selected Projects</h2>
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					<div className="card bg-base-200 shadow-lg p-6">
						<h3 className="font-bold text-lg">Project One</h3>
						<p className="text-sm mt-2">Short description of the project.</p>
						<div className="mt-4">
							<a className="btn btn-sm btn-primary">View</a>
						</div>
					</div>
					<div className="card bg-base-200 shadow-lg p-6">
						<h3 className="font-bold text-lg">Project Two</h3>
						<p className="text-sm mt-2">Short description of the project.</p>
						<div className="mt-4">
							<a className="btn btn-sm btn-primary">View</a>
						</div>
					</div>
				</div>
			</section>

			<footer className="footer px-6 py-8 border-t bg-transparent">
				<div className="items-center grid-flow-col">© {year} Your Name</div>
				<div className="md:place-self-center md:justify-self-end">
					<div className="grid grid-flow-col gap-4">
						<a href="#" className="link">GitHub</a>
						<a href="#" className="link">LinkedIn</a>
					</div>
				</div>
			</footer>
		</main>
	);
}
