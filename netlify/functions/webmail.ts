import { Handler } from "@netlify/functions"
import nodemailer from "nodemailer"

const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    }
  }

  try {
    const { name, email, message } = JSON.parse(event.body || "{}")

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing required fields" }),
      }
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.ionos.es",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // true para puerto 465, false para 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // tls: { rejectUnauthorized: false }, // descomenta si tienes problemas con certificados
    })

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.SMTP_USER,
      subject: `Portfolio contact from ${name}`,
      text: message,
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    }
  }
}

export { handler }
