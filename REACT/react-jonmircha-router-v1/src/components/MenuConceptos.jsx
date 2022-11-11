import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../index.css'

const MenuConceptos = () => {
  return (
    <nav>
      <ol>
        <li>
          Enlaces HTML (NO recomendado) porque recarga la página:  <a href="/">Enlace HTML</a>
        </li>
        <li>
          Componente Link (No puede tener :hover):  <Link to='/'>Home</Link>
          <Link to='/service'>Service</Link>
          <Link to='/contacto'>Contacto</Link>
        </li>
        <li>
          Componentes NavLink: <NavLink exact to='/no-existe' activeClassName='active'>Error</NavLink>
        </li>
        <li>
          Parámetros (useParams()):  <Link exact to='/usuario/Antonio%20Rufino'>Perfil</Link>
        </li>
        <li>
          Parámetros de consulta (useLocation()):  <Link exact to='/productos?inicio=1&fin=20'>Productos</Link>
        </li>
        <li>
          Redirecciones:  <Link exact to='/'></Link>
        </li>
      </ol>


    </nav>
  )
}

export default MenuConceptos