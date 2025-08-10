import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Contact from "@/components/contact"

export default function App() {
  return (
    <main className="relative min-h-screen">
      {/* Background decorations */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-emerald-400/30 via-teal-300/20 to-violet-500/30 blur-3xl" />
        <div className="absolute bottom-[-20rem] right-[-10rem] h-[28rem] w-[28rem] rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute top-40 left-[-12rem] h-[20rem] w-[20rem] rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <footer className="container py-10 text-center text-sm text-muted-foreground">
        Built with React, Vite, Tailwind, and Framer Motion. © {new Date().getFullYear()}
      </footer>
    </main>
  )
}