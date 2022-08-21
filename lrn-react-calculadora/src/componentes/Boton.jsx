import '../css/Boton.css';

export function Boton({children, manejarClic}){

    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    } 

    if (esOperador(children)){
        return(
            <div 
            className='boton-contenedor operador'
            onClick={() => manejarClic(children)} >
                {children} 
            </div>
        );
    } else {
        return(
            <div 
            className='boton-contenedor'
            onClick={() => manejarClic(children)} >
                {children} 
            </div>
        );
    }
    

}