// ─── Centralized Site Configuration ───
// Update these once — every component imports from here.

// ─── Core Social Links ───
// Primary: shown in navbar + hero + contact
// Secondary: shown in footer only
export const SOCIAL_LINKS = {
  // Primary (navbar)
  github: "https://github.com/asad-777",
  linkedin: "https://www.linkedin.com/in/asad-amir-7a019338a",
  email: "mailto:muhammadasad7.7.2007@gmail.com",
  // All platforms
  instagram: "https://www.instagram.com/asadamir___/",
  twitter: "#",     // TODO: Add your X/Twitter profile URL
  reddit: "#",      // TODO: Add your Reddit profile URL
  discord: "#",     // TODO: Add your Discord invite/profile URL
};

// ─── Blog & Content Platforms ───
export const BLOG_LINKS = {
  devto: "#",       // TODO: Add your dev.to profile URL
  pinterest: "#",   // TODO: Add your Pinterest profile URL
  personal: "/blog",
};

// ─── Freelance Platforms ───
export const FREELANCE_LINKS = {
  fiverr: "#",      // TODO: Add your Fiverr profile URL
  upwork: "#",      // TODO: Add your Upwork profile URL
  freelancePage: "/freelance",
  freelanceCV: "#", // TODO: Add a link to your freelance-specific CV/resume
};

// ─── Documents ───
export const DOCUMENTS = {
  cv: "/cv.pdf",    // Place your CV at /public/cv.pdf
};

// ─── Site Navigation ───
export const NAV_SECTIONS = {
  home: { label: "Home", href: "/" },
  about: { label: "About", href: "/#about" },
  projects: { label: "Projects", href: "/projects" },
  services: { label: "Services", href: "/#services" },
  freelance: { label: "Freelance", href: "/freelance" },
  blog: { label: "Blog", href: "/blog" },
  contact: { label: "Contact", href: "/#contactme" },
  faq: { label: "FAQ", href: "/#faq" },
};

// ─── Top Projects (Home Page) ───
// These are the featured projects shown on the homepage.
// Update them here — TopProjects.jsx reads from this array.
export const TOP_PROJECTS = [
  {
    id: 1,
    title: "Demo Project",
    description:
      "A full-stack application that leverages generative AI models to help creators design, edit, and export visual assets rapidly.",
    technologies: ["Next.js", "Tailwind CSS", "OpenAI API", "PostgreSQL"],
    category: "Web App",
    thumbnail:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
    github: "https://github.com/",
    liveDemo: "https://example.com/",
  },
  {
    id: 2,
    title: "Demo Project",
    description:
      "A comprehensive developer analytics dashboard that tracks workflow efficiency, Git commit history, and CI/CD pipeline statistics.",
    technologies: ["React", "DaisyUI", "Chart.js", "Firebase"],
    category: "Analytics",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    github: "https://github.com/",
    liveDemo: "https://example.com/",
  },
];

// ─── Site Metadata (SEO) ───
export const SITE_CONFIG = {
  name: "Asad Amir",
  title: "Asad Amir — Full-Stack Developer & AI Engineer",
  description:
    "Portfolio of Asad Amir — building production-ready full-stack web apps and AI systems with Next.js, Django, and LangChain.",
  url: "https://asadamir.vip",
  ogImage: "/logo.png", // TODO: Replace with a proper OG image (1200x630px recommended)
};
