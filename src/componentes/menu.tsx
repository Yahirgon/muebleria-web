import { useState, useContext } from 'react'
import '../estilos/menu.css'
import logo from "../imgs/logo-muebleria-gonzales.jpg"
import { CartContext } from '../context/CartContext'  

export const Menu = () => {
    const [activo, setActivo] = useState('/')
    const [abierto, setAbierto] = useState(false)
    const { carrito, eliminarDelCarrito, total } = useContext(CartContext);
    const [mostrarCarrito, setMostrarCarrito] = useState(false);

    const menuItems = [
        { name: 'Nosotros', link: '#nosotros' },
        { name: 'Servicios', link: '#servicios' },
        { name: 'Productos', link: '#productos' },
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
        <div className="carrito-icon" onClick={() => setMostrarCarrito(!mostrarCarrito)}>
          🛒 {carrito.length}
        </div>
      </ul>
     
      <div className={`carrito-dropdown ${mostrarCarrito ? "abierto" : ""}`}>
        <button 
          className="cerrar-carrito"
          onClick={() => setMostrarCarrito(false)}
        >
          ✖
        </button>
        <h3>Carrito</h3>
        <div className='carrito-lista'>
          
        {carrito.length === 0 && <p>No hay productos</p>}
        {carrito.map(item => (
          <div key={item.id} className='carrito-producto'>

            <p>Producto: {item.nombre}</p>
            <p>Cantidad: {item.cantidad}</p>
            <p>Precio: ${item.precio * item.cantidad}</p>
            <button onClick={() => eliminarDelCarrito(item.id)}>
              Eliminar
            </button>
            
          </div>

        ))}
        </div>

        <h4 className='total'>Total: ${total}</h4>
      </div>
    
      
    </nav>
  )
}
