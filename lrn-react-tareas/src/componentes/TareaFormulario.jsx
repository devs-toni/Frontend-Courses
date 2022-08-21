import '../css/TareaFormulario.css';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export function TareaFormulario(props){

    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value);
    };

    const manejarEnvio = e => {
        e.preventDefault();

        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        document.getElementsByName('texto')[0].value = '';
        props.onSubmit(tareaNueva);
    };

    return (
        <form className='tarea-formulario'
        onSubmit={manejarEnvio}
        >
            <input 
                className='tarea-input'
                type='text'
                placeholder='Introduce una tarea'
                name='texto'
                onChange={manejarCambio}
            />
            <button type='submit' className='tarea-boton'>Agregar Tarea</button>
        </form>
    );
}