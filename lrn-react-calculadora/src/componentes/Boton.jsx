import '../css/Boton.css';

export function Boton({children, manejarClic}){

    const esOperador = valor => {
        return isNaN(valor) && (valor != '.') && (valor != '=');
    } 
    
    return(
        <div 
        className={`boton-contenedor ${esOperador(children) ? "operador" : ""}`.trimEnd()}
        onClick={() => manejarClic(children)} >
            {children} 
        </div>
    );
}