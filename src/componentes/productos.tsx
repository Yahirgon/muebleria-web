import { useContext } from 'react'
import dosC from '../imgs/sillon-dos-cuerpos.jpg'
import tresC from '../imgs/sillon-tres-cuerpos.jpg'
import respaldo from '../imgs/respaldo.jpg'
import silloncama from '../imgs/silloncama.jpg'
import conrad from '../imgs/sillon-conrad.jpg'
import '../estilos/productos.css'
import { CartContext } from '../context/CartContext'

export const Productos = () => {
    const { agregarAlCarrito } = useContext(CartContext);

    const listaProductos = [
        {
            id: 1,
            nombre: "Sillón 2 cuerpos",
            precio: 120000,
            descripcion: "Compacto y funcional, ideal para espacios reducidos sin perder comodidad. Cuenta con estructura resistente y almohadones de alta densidad que garantizan confort y durabilidad. Su diseño versátil se adapta fácilmente a distintos estilos de living.",
            imagen: dosC
        },
        {
            id: 2,
            nombre: "Sillón 3 cuerpos",
            precio: 180000,
            descripcion: "Amplio y confortable, pensado para disfrutar en familia o con amigos. Su estructura firme y asientos espaciosos brindan soporte y comodidad en el uso diario. Una pieza protagonista que aporta estilo y presencia al ambiente.",
            imagen: tresC
        },
        {
            id: 3,
            nombre: "Respaldo de Cama (2 plazas)",
            precio: 95000,
            descripcion: "Elegante y funcional, aporta estilo y personalidad al dormitorio. Tapizado en telas de calidad y con estructura firme, brinda confort y un acabado moderno que realza el ambiente.",
            imagen: respaldo
        },
        {
            id: 4,
            nombre: "Sillón Cama",
            precio: 150000,
            descripcion: "Práctico y versátil, se transforma fácilmente de sillón a cama en pocos pasos. Ideal para optimizar espacios o recibir visitas, combina diseño moderno con funcionalidad y confort.",
            imagen: silloncama
        },
        {
            id: 5,
            nombre: "Sillón Conrad",
            precio: 145000,
            descripcion: "Diseño compacto y elegante, ideal para sumar estilo a cualquier ambiente. Tapizado en tela gris de alta calidad, con estructura firme y asiento cómodo que brinda excelente confort. Perfecto para livings, recepciones o espacios modernos.",
            imagen: conrad
        }
    ]

  return (
    <div className="productos" id='productos'>
        <h1>Productos</h1>
            {
                listaProductos.map(producto => (
                    <div key={producto.id} className="producto">
                        <img src={producto.imagen} alt={producto.nombre} />
                        <div className='descripcion'>
                            <h2>{producto.nombre}</h2>
                            <p>{producto.descripcion}</p>
                            <p className='precio'>${producto.precio}</p>
                            <button className='btn-comprar'
                            onClick={() =>
                                agregarAlCarrito({
                                id: producto.id,
                                nombre: producto.nombre,
                                precio: producto.precio,
                                })
                            }
                            >Comprar</button>
                        </div>
                    </div>
                ))
            }
    </div>
  )
}
