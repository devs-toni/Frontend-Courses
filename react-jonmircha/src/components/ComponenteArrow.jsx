import React from "react";
import PropTypes from "prop-types";

export const ComponenteArrow = props => 
<div>
    <ul>
        <li>{props.msg}</li>
        <li>{props.porDefecto}</li>
        <li>{props.numero}</li>
        <li>{props.booleano}</li>
        <li>{props.booleano ? 'Verdadero' : 'Falso'}</li>
        <li>{props.arreglo.join(', ')}</li>
        <li>{props.arreglo.map(num => props.funcion(num)).join(' - ')}</li>
        <li>{props.objeto.nombre}</li>
        <li>{props.objeto.correo}</li>
        <li>{props.elemento}</li>
        <li>{props.componente}</li>
    </ul>
</div>


ComponenteArrow.defaultProps = {
    porDefecto : 'Las Props',
    booleano : false
};

ComponenteArrow.propTypes = {
    numero: PropTypes.string,
}
