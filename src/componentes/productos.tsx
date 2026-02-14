import dosC from '../imgs/sillon-dos-cuerpos.jpg'
import tresC from '../imgs/sillon-tres-cuerpos.jpg'
import respaldo from '../imgs/respaldo.jpg'
import silloncama from '../imgs/silloncama.jpg'
import conrad from '../imgs/sillon-conrad.jpg'
import '../estilos/productos.css'

export const Productos = () => {
  return (
    <div className="productos">
        <h1>Productos</h1>
        <div className="producto">
            <img src={dosC} alt="Sillón de dos cuerpos" />
            <div className='descripcion'>
                <h2>Sillón de 2 cuerpos</h2>
                <p>Compacto y funcional, ideal para espacios reducidos sin perder comodidad. Cuenta con estructura resistente y almohadones de alta densidad que garantizan confort y durabilidad. Su diseño versátil se adapta fácilmente a distintos estilos de living.</p>
                <button className='btn-comprar'>Comprar</button>
            </div>
        </div>
        <div className="producto">
            <img src={tresC} alt="Sillón de tres cuerpos" />
            <div className='descripcion'>
                <h2>Sillón de 3 cuerpos</h2>
                <p>Amplio y confortable, pensado para disfrutar en familia o con amigos. Su estructura firme y asientos espaciosos brindan soporte y comodidad en el uso diario. Una pieza protagonista que aporta estilo y presencia al ambiente.</p>
                <button className='btn-comprar'>Comprar</button>
            </div>
        </div>
        <div className="producto">
            <img src={respaldo} alt="Sillón con respaldo alto" />
            <div className='descripcion'>
                <h2>Respaldo de Cama <br />(2 plazas)</h2>
                <p>Elegante y funcional, aporta estilo y personalidad al dormitorio. Tapizado en telas de calidad y con estructura firme, brinda confort y un acabado moderno que realza el ambiente.</p>
                <button className='btn-comprar'>Comprar</button>
            </div>
        </div>
        <div className="producto">
            <img src={silloncama} alt="Sillón cama" />
            <div className='descripcion'>
                <h2>Sillón Cama</h2>
                <p>Práctico y versátil, se transforma fácilmente de sillón a cama en pocos pasos. Ideal para optimizar espacios o recibir visitas, combina diseño moderno con funcionalidad y confort.</p>
                <button className='btn-comprar'>Comprar</button>
            </div>
        </div>
        <div className="producto">
            <img src={conrad} alt="Sillón Conrad" />
            <div className='descripcion'>
                <h2>Sillón Conrad</h2>
                <p>Diseño compacto y elegante, ideal para sumar estilo a cualquier ambiente. Tapizado en tela gris de alta calidad, con estructura firme y asiento cómodo que brinda excelente confort. Perfecto para livings, recepciones o espacios modernos.</p>
                <button className='btn-comprar'>Comprar</button>
            </div>
        </div>
    </div>
  )
}
