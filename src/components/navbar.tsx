import { useEffect, useState } from "react"
import { Github, Linkedin, Menu } from 'lucide-react'
import ThemeToggle from "@/components/theme-toggle"

const links = [
  { href: "#projects", label: "Proyectos" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experiencia" },
  { href: "#contact", label: "Contacto" },
]

export default function Navbar({ sticky = true }: { sticky?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={[sticky ? "sticky" : "relative", "top-2 z-50 w-full"].join(" ")}>
      <div
        className={[
          "container flex items-center justify-between py-3 transition-all",
          scrolled ? "backdrop-blur rounded-xl mt-3 border border-gray-200/60 bg-white/60 dark:border-gray-800 dark:bg-gray-900/60" : "mt-4",
        ].join(" ")}
      >
        <a href="#" className="flex items-center gap-2 font-semibold">
          <div className="size-6 rounded-md bg-emerald-500" />
          <span>Mi Portafolio</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-inherit transition-colors">
              {l.label}
            </a>
          ))}
          <div className="mx-2 h-4 w-px bg-gray-200 dark:bg-gray-800" />
          <a
            href="https://github.com/tadeodev"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-inherit transition-colors"
          >
            <Github className="size-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/tadeo2004/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-inherit transition-colors"
          >
            <Linkedin className="size-5" />
          </a>
          <ThemeToggle />
        </nav>

        <button
          className="md:hidden inline-flex size-9 items-center justify-center rounded-lg border border-gray-300 bg-white hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="size-5" />
        </button>

        {open && (
          <div
            className="fixed inset-0 z-50 bg-black/40 md:hidden"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
        )}
        <div
          className={[
            "fixed right-0 top-0 z-50 h-full w-72 transform bg-white p-6 shadow-xl transition-transform dark:bg-gray-900 md:hidden",
            open ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
          role="dialog"
          aria-modal="true"
        >
          <div className="mt-8 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-base text-muted-foreground hover:text-inherit transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-inherit transition-colors"
              >
                <Github className="size-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/your-username"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-inherit transition-colors"
              >
                <Linkedin className="size-5" />
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}