import React from 'react'
import '../estilos/pie-pagina.css'

export const Formulario = () => {
  return (
    <div className='derecha' id='contact'>
        <h1>Haz un Visita</h1>
        <h3>Tambien puedes reservar una cita por telefono si lo prefieres</h3>
        <form>
            
            <input type="text" id="nombre" name="nombre" placeholder='Nombre completo' required />
            
            <input type="email" id="email" name="email" placeholder='Correo electrónico' required />
            
            <input type="number" id="telefono" name="telefono" placeholder='Teléfono de contacto' required />
            
            <textarea id="mensaje" name="mensaje" placeholder='Escriba su mensaje aquí' required></textarea>
            <button type="submit">Enviar</button>
        </form>
    </div>
  )
}
