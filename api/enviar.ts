import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' })
  }

  const { nombre, email, telefono, mensaje } = req.body

  if (!nombre || !email || !telefono || !mensaje) {
    return res.status(400).json({ message: 'Faltan datos' })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // mail de la empresa
      subject: 'Nuevo mensaje desde la web',
      html: `
        <h2>Nuevo contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
      `,
    })

    return res.status(200).json({ message: 'Enviado correctamente' })
  } catch (error) {
    console.error('Error enviando email:', error)
    return res.status(500).json({ message: 'Error al enviar el correo' })
  }
}
