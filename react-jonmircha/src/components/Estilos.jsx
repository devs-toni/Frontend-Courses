import React from 'react';
import '../styles/Estilos.css';
import moduleStyles from '../styles/Estilos.module.css';
import '../styles/Estilos.scss';

export default function Estilos() {

    let myStyles = {
        borderRadius:".5rem",
        margin:"2rem auto",
        maxWidth: "50%"
    };

    return(
        <section className="estilos">
            <h2>Estilos CSS en React</h2>
            <h3 className="bg-react">Estilos en Hoja CSS externa</h3>
            <h3 className="bg-react" style={{borderRadius: ".25rem", margin:"1rem"}}>Estilos en línea (attr Style)</h3>
            <h3 className="bg-react" style={myStyles}>Estilos en línea mediante Objeto</h3>
            <h3 className="bg-react">Estilos con Normalize</h3>
            <h3 className={moduleStyles.error}>Estilos con módulos</h3>
            <h3 className={moduleStyles.success}>Estilos con módulos</h3>
            <h3 className='bg-sass'>Estilos con SASS</h3>
        </section>
    )
}