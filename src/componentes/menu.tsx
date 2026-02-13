import { useState } from 'react'
import '../estilos/menu.css'
import logo from "../imgs/logo-muebleria-gonzales.jpg"

export const Menu = () => {
    const [activo, setActivo] = useState('/')
    const [abierto, setAbierto] = useState(false)

    const menuItems = [
        { name: 'Inicio', link: '/' },
        { name: 'Nosotros', link: '#nosotros' },
        { name: 'Productos', link: '#products' },
        { name: 'Contacto', link: '#contacto' },
    ]
  return (
    <nav className='menu'>
        <div className='logo'> 
            <img src={logo} alt="Logo de Mueblería González"/>
            <p>Mueblería Gonzales</p>
        </div>
        <button className='hambur' onClick={() => setAbierto(!abierto)}>
        {abierto ? "✖" : "☰"}
      </button>
      <ul className={`links ${abierto ? "abrir" : ""}`}>
        {menuItems.map((item, index) => (
          <li 
          key={index} 
          className={activo == item.link ? 'activo' : ''} 
          onClick={() => 
            setActivo(item.link)
          }>
            <a href={item.link}>
              {item.name} 

            </a>
          </li>
        ))}
      </ul>
      
    </nav>
  )
}
