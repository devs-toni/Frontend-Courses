import '../css/Clear.css';

export const Clear = (props) => (
    <div className='boton-clear'
        onClick={props.manejarClear} >
        {props.children}
    </div>
);