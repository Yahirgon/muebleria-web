import React from 'react'
import '../estilos/pie-pagina.css'

export const Contacto = () => {
  return (
    <div id='contacto' className='izquierda'>
        
        <div className='Horario'>
            <h3>Localizacion</h3>
            <h1>Te esperamos</h1>
            <h3>Horario de Atención</h3>
            <p>Lunes a Viernes: 9:00 AM - 7:00 PM</p>
            <p>Sábado: 10:00 AM - 5:00 PM</p>
            <p>Domingo: Cerrado</p>
        </div>
        <div className='Contacto'>
            <h3>Direccion</h3>
            <p>Av. Principal 123, Ciudad, País</p>
            <h3>Teléfono</h3>
            <p>(123) 456-7890</p>
            <h3>Email</h3>
            <p>muebleriagonzales@gmail.com</p>
            <h3>Redes Sociales</h3>
            <p>Facebook: /muebleriagonzales</p>
            <p>Instagram: @muebleriagonzales</p>
        </div>
    </div>
  )
}
