import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../index.css'

const MenuConceptos = () => {
  return (
    <nav>
            <Link to='/'>Home</Link>
            <Link to='/service'>Service</Link>
            <Link to='/contacto'>Contacto</Link>
            <NavLink exact to='/no-existe' activeClassName='active'>Error</NavLink>
    </nav>
  )
}

export default MenuConceptos