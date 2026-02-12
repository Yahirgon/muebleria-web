import '../estilos/nosotros.css'
import logo from '../imgs/logo-muebleria-gonzales.jpg'

export const Nosotros = () => {
  return (
    <div className='nosotros' id='nosotros'>
        <img src={logo} alt="Logo de Mueblería Gonzales" />
        <div className='info'>
            <h2>Nosotros</h2>
            <p>Nuestra empresa nace a partir del trabajo, la dedicación y las ganas de crecer. Todo comenzó de manera simple, realizando trabajos de tapicería de forma artesanal, con el objetivo de ofrecer un servicio responsable, prolijo y de calidad. Desde el inicio, el compromiso con cada cliente y el cuidado por los detalles fueron pilares fundamentales.
            <br/>
            Con el paso del tiempo, la experiencia y la confianza de quienes nos elegían permitieron ampliar nuestros servicios. Así incorporamos la fabricación y venta de sillones, manteniendo siempre la misma prioridad: brindar confort, durabilidad y un diseño funcional que se adapte a cada espacio.
            <br/>
            A medida que el proyecto fue creciendo, sumamos también la comercialización de algunos muebles, pensados para complementar el hogar y ofrecer soluciones prácticas. Este crecimiento fue el resultado del esfuerzo constante y del aprendizaje diario dentro del rubro.
            <br/>
            Hoy continuamos trabajando con la misma pasión que nos impulsó desde el primer día, combinando el oficio artesanal con una mirada actual, siempre enfocados en la calidad, la atención personalizada y la confianza de nuestros clientes.</p>
        </div>
    </div>
  )
}
