import { motion } from "framer-motion"
import { Github, ExternalLink } from 'lucide-react'

export type Project = {
  slug: string
  name: string
  description: string
  image: string
  tags: string[]
  repo?: string
  demo?: string
}

const fallback: Project = {
  slug: "sample",
  name: "Sample Project",
  description: "A concise description of the project goes here.",
  image:
    "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=1280&h=720&fit=crop&auto=format&q=60",
  tags: ["React", "TypeScript"],
  repo: "#",
  demo: "#",
}

export default function ProjectCard({ project = fallback }: { project?: Project }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="relative">
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <img
            src={project.image || fallback.image}
            alt={`${project.name} screenshot`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/10 to-transparent dark:from-gray-900/80 dark:via-gray-900/10"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="pointer-events-none absolute inset-x-0 bottom-2 z-10 flex w-full justify-center"
        >
          <div className="pointer-events-auto flex gap-2 rounded-full border border-gray-200 bg-white/80 p-1 backdrop-blur dark:border-gray-800 dark:bg-gray-900/60">
            {project.repo && (
              <a
                className="btn-ghost inline-flex size-9 items-center justify-center rounded-full"
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                aria-label="Open repository"
              >
                <Github className="size-4" />
              </a>
            )}
            {project.demo && (
              <a
                className="btn-ghost inline-flex size-9 items-center justify-center rounded-full"
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                aria-label="Open live demo"
              >
                <ExternalLink className="size-4" />
              </a>
            )}
          </div>
        </motion.div>
      </div>
      <div className="space-y-1 p-4">
        <h3 className="text-lg font-semibold">{project.name}</h3>
        <p className="text-sm text-muted-foreground">{project.description}</p>
      </div>
      <div className="flex flex-wrap gap-2 px-4 pb-4">
        {project.tags.map((t) => (
          <span key={t} className="badge">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}