import '../css/App.css';
import logo from '../imagenes/Logo.jpg'
import { Boton } from './Boton';
import { Contador } from './Contador';
import { useState } from 'react';

function App() {

    const [numero, setNumero] =  useState(0);

    const click = () => {
        setNumero(numero+1);
    };

    const reiniciar = () => {
        setNumero(0);
    };
    
    return (
        <div className="App">
            <div className='freecodecamp-logo-contenedor' >
                <img
                    className='freecodecamp-logo'
                    src={logo}
                    alt='Logo de freeCodeCamp' />
            </div>
            <div className='contenedor-principal'>
                <Contador 
                numero={ numero }
                />
                <Boton
                    texto='Clic'
                    botonClick={true}
                    manejarClick={click} />
                <Boton
                    texto='Reiniciar'
                    buttonClick={false}
                    manejarClick={reiniciar} />
            </div>
        </div>
    );
}

export default App;
