import type { Project } from "@/components/project-card"

export const portfolioProjects: Project[] = [
  {
    slug: "mercaprice",
    name: "MercaPrice",
    description: "Un comparador de precios de supermercados en tiempo real en España.",
    image: "/cap_mercaprice.png",
    tags: ["React", "Web Scraping", "MariaDB", "Tailwind", "Docker", "GitHub", "Express", "Node.js"],
  
    demo: "https://mercaprice.com",
  },
  {
    slug: "limines",
    name: "Limines",
    description: "Es un servidor propio con múltiples aplicaciones hecho y configurado completamente por mí.",
    image: "/cap_limines.png",
    tags: ["Linux server", "Docker", "Sys Admin", "Cybersecurity", "Apache2", "Nertworking", "DDNS", "Grafana"],
    demo: "https://limines.es",
  },
  {
    slug: "tankist-fight",
    name: "Tankist Fight",
    description: "Proyecto final de 1er curso de Desarrollo de Aplicaciones Multiplataforma. Un juego de tanques 2D con conexiones sockets para multijugador.",
    image: "/cap_tankist_fight.png",
    tags: ["Java", "JavaFX", "Sockets", "OOP"],
    repo: "https://github.com/tadeodev/Tankist-Fight",
  },
  {
    slug: "wreckfest-bot",
    name: "Wreckfest Bot",
    description: "Un bot para el juego Wreckfest que ayuda a los jugadores a generar la moneda del juego de manera automática (AFK) para poder comprar nuevos vehículos.",
    image: "/cap_wreckfest_bot.png",
    tags: ["Python", "Reconocimiento de imágenes", "Automatización", "Bots"],
    repo: "https://github.com/tadeodev/Wreckfest-Bot",
  },
  {
    slug: "ytdl-bot",
    name: "Youtube Downloader Bot",
    description: "Un bot que utiliza la librería youtube-dl para descargar vídeos de YouTube y enviarlos a través de Telegram.",
    image: "/cap_youtubeDL_bot.jpg",
    tags: ["Telegram API", "Node", "Tailwind", "Bot"],
    repo: "https://github.com/tadeodev/YT_DWL_bot",
  },
  {
    slug: "victus-bot",
    name: "Victus Bot",
    description: "Es un bot que realicé para estar al tanto de los animes de AnimeFLV que iban saliendo cada día, esto se realizó a través de scraping de la web.",
    image: "/cap_victus_bot.jpg",
    tags: ["Scraping", "NodeJS", "Telegram API", "Bot", "Automatización"],
    repo: "https://github.com/tadeodev/Victus-bot",
  },
]