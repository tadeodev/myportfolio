import { motion } from "framer-motion"
import ProjectCard from "@/components/project-card"
import { portfolioProjects } from "@/lib/portfolio-data"

export default function Projects() {
  return (
    <section id="projects" aria-label="Projects" className="container py-14 md:py-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">Proyectos Destacados</h2>
          <p className="text-muted-foreground">Una selección de proyectos que he desarrollado.</p>
        </div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.2, once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.06 } },
        }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {portfolioProjects.map((project) => (
          <motion.div key={project.slug} variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}