import { Menu } from './componentes/menu.tsx'
import { Cartas } from './componentes/cartas.tsx'
import { Nosotros } from './componentes/nosotros.tsx'
import { Formulario } from './componentes/formulario.tsx'
import { Contacto } from './componentes/contacto.tsx'
import './estilos/cuerpo.css'

export const App = () => {
  return (
    <>
      <header>
        <Menu />
      </header>
      <main>
        <Nosotros />
        <Cartas />
      </main>
      <footer>
        <Contacto />
        <Formulario />
        
      </footer>
    </>
  )
}

