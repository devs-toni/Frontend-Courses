import '../css/Boton.css'

export function Boton({ texto, botonClick, manejarClick }) {
    return (
        <button
            className={botonClick ? "boton-clic" : "boton-reiniciar"}
            onClick={ manejarClick } >
            {texto}
        </button>
    );
}



