import { Handler } from "@netlify/functions"
import nodemailer from "nodemailer"

const handler: Handler = async (event) => {
  console.log("Env vars:", process.env.SMTP_USER, process.env.SMTP_PASS ? "****" : "NO PASS")

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) }
  }

  try {
    const { name, email, message } = JSON.parse(event.body || "{}")

    if (!name || !email || !message) {
      return { statusCode: 400, body: JSON.stringify({ error: "Missing fields" }) }
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.ionos.es",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    })

    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,          // siempre tu correo autorizado
      to: process.env.SMTP_USER,            // recibes tú el correo
      subject: `Portfolio contact from ${name}`,
      text: `Mensaje de: ${name},\n Email: <${email}>\n\nMensaje:${message}`,
      replyTo: `${name} <${email}>`,        // para poder responder directo
    })

    console.log("Email sent:", info.messageId)

    return { statusCode: 200, body: JSON.stringify({ success: true }) }

  } catch (error) {
    console.error("Error sending email:", error)
    return { statusCode: 500, body: JSON.stringify({ error: "Internal server error" }) }
  }
}

export { handler }
