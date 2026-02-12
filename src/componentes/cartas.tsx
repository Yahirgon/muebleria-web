import '../estilos/cartas.css'
import tapiceria from '../imgs/tapiceria.jpg'
import sillones from '../imgs/sillon-muestra.jpg'
import muebles from '../imgs/muebles.jpg'

export const Cartas = () => {
    const descargarPDF = () => {
        const link = document.createElement('a');
        link.href = '/Constancia.pdf';
        link.download = 'catalogo-muebleria-gonzales.pdf';
        link.click();
    }

  return (
    <div className='cartas' id='products'>
        <div className='carta'>
            <img src={tapiceria} alt="Imagen de tapicería"/>
            <h2>Tapisado</h2>
            <p>Realizamos trabajos de tapicería a medida, renovando y restaurando sillones, sillas y muebles tapizados. Utilizamos materiales de calidad y cuidamos cada detalle para lograr comodidad, resistencia y una terminación prolija y duradera.</p>
            <button>Ver Detalles</button>
        </div>
        <div className='carta'>
            <img src={sillones} alt="Imagen de sillones"/>
            <h2>Sillores</h2>
            <p>Nos dedicamos a la fabricación y venta de sillones diseñados para brindar máximo confort y estilo. Ofrecemos distintos modelos, telas y colores, adaptándonos a las necesidades y gustos de cada cliente.</p>
            <button onClick={descargarPDF}>
                Descargar Catálogo
            </button>
        </div>
        <div className='carta'>
            <img src={muebles} alt="Imagen de muebles"/>
            <h2>Muebles</h2>
            <p>Comercializamos una selección de muebles funcionales para el hogar, combinando diseño, practicidad y buena calidad. Contamos con opciones para distintos ambientes, ideales para complementar y renovar tus espacios.</p>
            <button>Descargar PDF</button>
        </div>
    </div>
  )
}
