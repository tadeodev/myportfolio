import { Mail, Send } from 'lucide-react'
import { useState } from "react"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()

 const res = await fetch("/.netlify/functions/webmail", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name, email, message }),
})

  if (res.ok) {
    alert("Mensaje enviado con éxito")
    setName("")
    setEmail("")
    setMessage("")
  } else {
    alert("Error al enviar el mensaje")
  }
}

  return (
    <section id="contact" aria-label="Contact" className="container py-14 md:py-20">
      <div className="mb-8">
        <h2 className="text-2xl font-bold md:text-3xl">Contacto</h2>
        <p className="text-muted-foreground">¿Quieres que colaboremos y creemos algo maravilloso? No dudes en contactarme.</p>
      </div>

      <div className="card">
        <div className="border-b border-gray-100 p-4 dark:border-gray-800">
          <h3 className="text-lg font-semibold">Formulario de contacto</h3>
          <p className="text-sm text-muted-foreground">Suelo responder entre 1 y 2 días hábiles.</p>
        </div>
        <div className="p-4">
          <form className="grid gap-4 sm:grid-cols-2" onSubmit={onSubmit}>
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Nombre
              </label>
              <input id="name" className="input" placeholder="Albert Einstein" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="input"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2 sm:col-span-2">
              <label htmlFor="message" className="text-sm font-medium">
                Mensaje
              </label>
              <textarea
                id="message"
                className="textarea"
                placeholder="Cuéntame sobre tu proyecto..."
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="sm:col-span-2 flex items-center gap-3">
              <button type="submit" className="btn">
                <Send className="mr-2 size-4" />
                Enviar mensaje
              </button>
              <a
                href="mailto:tadeo.acosta2004@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-inherit"
              >
                <Mail className="size-4" />
                O escríbeme directamete
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}