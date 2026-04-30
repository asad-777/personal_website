import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import TopProjects from "@/components/TopProjects"
import Contact from "@/components/contact"
import FAQ from "@/components/faq"
import FreelanceRedirect from "@/components/freelance-main"

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <TopProjects />
            <FreelanceRedirect />
            <Services />
            <FAQ />
            <Contact />
        </>
    )
}

