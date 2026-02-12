import React from 'react'
import '../estilos/pie-pagina.css'

export const Formulario = () => {
    const enviarEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget

    const datos = {
      nombre: (form.nombre as HTMLInputElement).value,
      email: (form.email as HTMLInputElement).value,
      telefono: (form.telefono as HTMLInputElement).value,
      mensaje: (form.mensaje as HTMLTextAreaElement).value,
    }

    try {
      const respuesta = await fetch("/api/enviar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      })

      if (respuesta.ok) {
        alert("Mensaje enviado correctamente")
        form.reset()
      } else {
        alert("Error al enviar el mensaje")
      }

    } catch (error) {
      alert("Error de conexión")
    }
  }

  return (
    <div className='derecha' id='contact'>
        <h1>Haz un Visita</h1>
        <h3>Tambien puedes reservar una cita por telefono si lo prefieres</h3>
        <form onSubmit={enviarEmail}>
            
            <input type="text" id="nombre" name="nombre" placeholder='Nombre completo' required />
            
            <input type="email" id="email" name="email" placeholder='Correo electrónico' required />
            
            <input type="number" id="telefono" name="telefono" placeholder='Teléfono de contacto' required />
            
            <textarea id="mensaje" name="mensaje" placeholder='Escriba su mensaje aquí' required></textarea>
            <button type="submit">Enviar</button>
        </form>
    </div>
  )
}
