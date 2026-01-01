export default function Page() {
	const year = new Date().getFullYear();
	return (
		<main className="min-h-screen bg-base-100 text-base-content">
			<nav className="navbar bg-transparent px-6 py-4">
				<div className="flex-1">
					<a className="btn btn-ghost normal-case text-xl">Your Name</a>
				</div>
				<div className="flex-none gap-2">
					<label className="swap swap-rotate">
						{/* this hidden checkbox controls the state */}
						<input type="checkbox" className="theme-controller" value="Portfolio-light" />

						{/* sun icon */}
						<svg
							className="swap-off h-10 w-10 fill-current"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24">
							<path
								d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
						</svg>

						{/* moon icon */}
						<svg
							className="swap-on h-10 w-10 fill-current"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24">
							<path
								d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
						</svg>
					</label>
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
