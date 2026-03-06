import Hero from "@/components/hero"
import Navbar from "@/components/Navbar"
import About from "@/components/about"

export default function Home() {
    return (
        <>
        <Navbar/>
            <Hero />
            <About />
            <section id="contactme" className="min-h-screen flex items-center justify-center">
                <h2 className="text-4xl font-bold">Contact Me</h2>
            </section>
        </>
    )
}

