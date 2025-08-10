import type React from "react"

const skillsDefault = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MariaDB",
  "MySQL",
  "MongoDB",
  "Tailwind",
  "CSS",
  "HTML",
  "Scraping",
  "Playwright",
  "Docker",
  "Plancha",
  "AWS",
  "Git",
  "GitHub",
  "API Integration",
  "API REST",
  "Bootstrap 5",
  "Glassmorphism",
  "UX/UI",
  "Notion",
  "McAuto",
  "Apache2",
  "Windows",
  "Linux",
  "MacOS",
  "Figma",
  "Postman",
  "SEO",
]

export default function Skills({ skills = skillsDefault }: { skills?: string[] }) {
  return (
    <section id="skills" aria-label="Skills" className="container py-14 md:py-20">
      <div className="mb-6">
        <h2 className="text-2xl font-bold md:text-3xl">Skills</h2>
        <p className="text-muted-foreground">Herramientas y tecnologías que utilizo regularmente.</p>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900 md:p-6">
        <Marquee>
          {skills.map((s) => (
            <span
              key={`a-${s}`}
              className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-700 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-200 m-1"
            >
              {s}
            </span>
          ))}
        </Marquee>
        <Marquee reverse className="mt-2">
          {skills
            .slice()
            .reverse()
            .map((s) => (
              <span
                key={`b-${s}`}
                className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-700 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-200 m-1"
              >
                {s}
              </span>
            ))}
        </Marquee>
      </div>
    </section>
  )
}

function Marquee({
  children,
  speed = 30,
  reverse = false,
  className = "",
}: {
  children: React.ReactNode
  speed?: number
  reverse?: boolean
  className?: string
}) {
  // Compute duration: higher speed -> shorter duration
  const duration = Math.max(10, 120 - speed)

  return (
    <div className={["group relative flex w-full overflow-hidden", className].join(" ")}>
      <div
        className="marquee-anim flex min-w-full shrink-0 items-center justify-around gap-2"
        style={{
          animation: `${reverse ? "marquee-rev" : "marquee"} ${duration}s linear infinite`,
        }}
      >
        {children}
      </div>
      <div
        className="marquee-anim flex min-w-full shrink-0 items-center justify-around gap-2"
        style={{
          animation: `${reverse ? "marquee-rev" : "marquee"} ${duration}s linear infinite`,
        }}
      >
        {children}
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
@keyframes marquee { 
  0% { transform: translateX(0); } 
  100% { transform: translateX(-100%); } 
}
@keyframes marquee-rev { 
  0% { transform: translateX(-100%); } 
  100% { transform: translateX(0); } 
}
/* Respect users who prefer reduced motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .marquee-anim { animation: none !important; }
}
          `,
        }}
      />
    </div>
  )
}