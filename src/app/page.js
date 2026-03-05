import Hero from "@/components/hero"
import Navbar from "@/components/Navbar"

export default function Home() {
    return (
        <>
        <Navbar/>
            <Hero />
            <section id="contactme" className="min-h-screen flex items-center justify-center">
                <h2 className="text-4xl font-bold">Contact Me</h2>
            </section>
        </>
    )
}

