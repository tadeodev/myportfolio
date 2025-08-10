import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero({
  name = "Tadeo",
  title = "Full‑Stack Developer | C2 Proficient",
  subtitle = "Diseño, construyo, optimizo y mantengo aplicaciones webs modernas y escalables.",
  resumeUrl = "#",
}: {
  name?: string;
  title?: string;
  subtitle?: string;
  resumeUrl?: string;
}) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Precargar imágenes
    const images = ["/polo_oscuro.jpg", "/polo_blanco.jpg"];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // Detecta si el html tiene la clase "dark" de Tailwind
    const checkDarkMode = () =>
      setIsDark(document.documentElement.classList.contains("dark"));

    checkDarkMode();

    // Si el tema cambia (en apps que lo soporten), actualiza
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);
  return (
    <section
      aria-label="Hero"
      className="container mt-6 flex flex-col items-center gap-10 py-14 md:py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center text-center"
      >
        <div className="mb-6 overflow-hidden  rounded-full border border-gray-200 bg-white/60 p-1 backdrop-blur dark:border-gray-800 dark:bg-gray-900/40">
          <img
            src={isDark ? "/polo_oscuro.jpg" : "/polo_blanco.jpg"}
            alt="Developer avatar"
            width={120}
            height={120}
            className="rounded-full"
          />
        </div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          Available for freelance & full‑time
        </p>
        <h1 className="bg-gradient-to-br from-emerald-500 via-emerald-400 to-violet-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
          {name}
        </h1>
        <p className="mt-3 text-lg font-semibold sm:text-xl">{title}</p>
        <p className="mt-3 max-w-2xl text-muted-foreground">{subtitle}</p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a href="#projects" className="btn">
            Ver proyectos
          </a>
          <a href="/CV Tadeo.pdf" download className="btn btn-outline">
            <Download className="mr-2 size-4" />
            Descargar CV
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        className="relative w-full overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-tr from-emerald-500/5 via-transparent to-violet-500/5 p-6 dark:border-gray-800"
      >
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="text-xl font-semibold">
              Creando experiencias UX robustas y eficientes
            </h2>
            <p className="mt-2 text-muted-foreground">
              Me especializo en construir aplicaciones eficientes, accesibles y
              mantenibles utilizando React, TypeScript y pilas modernas de
              backend.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              {[
                "React",
                "TypeScript",
                "Node.js",
                "MySQL",
                "Docker",
                "Tailwind",
                "AWS",
              ].map((s) => (
                <span key={s} className="badge">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative aspect-[6/4] w-full overflow-hidden rounded-xl border border-gray-200 bg-muted dark:border-gray-800">
              <img
                src="/testing2.jpeg"
                alt="Selected work preview"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </motion.div>

      <a
        href="#projects"
        className="group mt-2 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-inherit"
      >
        <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
        Ir a los proyectos
      </a>
    </section>
  );
}
