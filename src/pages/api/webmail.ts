import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER, // tu email
        pass: process.env.SMTP_PASS, // tu contraseña o app password
      },
    })

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "tadeo.acosta2004@gmail.com",
      subject: `Portfolio contact from ${name}`,
      text: message,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: "Failed to send email" })
  }
}