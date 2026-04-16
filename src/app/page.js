import Hero from "@/components/hero"
import Navbar from "@/components/Navbar"
import About from "@/components/about"
import TopProjects from "@/components/TopProjects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <TopProjects />
            <Contact />
            <Footer />
        </>
    )
}

