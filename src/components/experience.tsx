import { Briefcase } from 'lucide-react'

type ExperienceItem = {
  company: string
  role: string
  period: string
  description: string
  skills: string[]
}

const defaults: ExperienceItem[] = [
  {
    company: "Ganaenergia - Valencia/Valencia",
    role: "Desarrollador FullStack",
    period: "11/2025 — Actualidad",
    description:
      "Actualmente trabajo como desarrollador web junior en esta empresa del sector energético. Mis responsabilidades incluyen el desarrollo y mantenimiento de aplicaciones web internas, así como la colaboración con otros equipos para mejorar la experiencia del usuario.",
    skills: ["JavaScript", "React", "Node.js", "CSS3", "HTML5", "Git", "NextJS","MongoDB","Express","TypeScript"],
  },
  {
    company: "ActiveXsoft - Puçol/Valencia",
    role: "Prácticas de Desarrollador Web",
    period: "03/2025 — 07/2025",
    description:
      "Tuve el placer de ser programador en prácticas en esta empresa y pude pulir tanto mis conocimientos como habilidades en un entorno profesional real. Trabajé en el desarrollo de una aplicación web para la gestión de seguros, utilizando principalmente PHP7.",
    skills: ["PHP7", "Bootstrap3", "MySQL", "SweetAlert", "JS Vanilla", "HTML5", "Git", "PHPStorm"],
  },
  {
    company: "McDonalds - Massalfassar/Valencia",
    role: "Empleado de Restaurante",
    period: "03/2024 — 07/2024",
    description:
      "Mientras cursaba mis estudios pude generar ingresos gracias a esta franquicia tan grande, donde pude encontrarme con situaciones de estrés que me ayudaron a mejorar mis habilidades de comunicación a pesar de la presión de trabajo.",
    skills: ["Paciencia", "Autocontrol", "Comunicación", "Trabajo en equipo"],
  },
  {
    company: "iBroke - Galway/Irlanda",
    role: "Prácticas de Sistemas Microinformáticos y Redes",
    period: "03/2023 — 07/2023",
    description:
      "Fuí el encargado de las reparaciones de dispositivos móviles y ordenadores, así como de la atención al cliente. Aprendí a diagnosticar y reparar problemas de hardware y software, además de mejorar mis habilidades de comunicación en un entorno profesional.",
    skills: ["iOS", "Android", "MacOS", "Windows", "Windows Server"],
  },
  {
    company: "Save The Children - Valencia/Valencia",
    role: "Monitor de Ocio y Tiempo Libre",
    period: "10/2022 — 03/2023",
    description:
      "En este puesto laboral tuve la oportunidad de trabajar con niños de todas las edades. Me encargué de la gestión de actividades y organización de las mismas. A su vez, formaba y repasaba contenidos a los menores más necesitados.",
    skills: ["Trabajo en equipo", "Diversidad", "Gestión de programas", "Organización", "Comunicación", "Responsabilidad"],
  },
]

export default function Experience({ items = defaults }: { items?: ExperienceItem[] }) {
  return (
    <section id="experience" aria-label="Experience" className="container py-14 md:py-20">
      <div className="mb-8">
        <h2 className="text-2xl font-bold md:text-3xl">Experiencia Profesional</h2>
        <p className="text-muted-foreground">Donde he trabajado y lo que he hecho.</p>
      </div>
      <div className="relative pl-5">
        <div className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-emerald-400/50 via-gray-200 to-transparent dark:via-gray-800" />
        <ul className="space-y-8">
          {items.map((item, idx) => (
            <li key={`${item.company}-${idx}`} className="relative">
              <div className="absolute -left-[9px] top-2 rounded-full border border-gray-200 bg-white p-1 text-emerald-500 dark:border-gray-800 dark:bg-gray-900">
                <Briefcase className="size-3.5" />
              </div>
              <div className="rounded-xl border border-gray-200 bg-white/60 p-4 backdrop-blur dark:border-gray-800 dark:bg-gray-900/60">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">{item.role}</h3>
                  <span className="text-xs text-muted-foreground">{item.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.company}</p>
                <p className="mt-3 text-sm">{item.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.skills.map((s) => (
                    <span key={s} className="badge">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}