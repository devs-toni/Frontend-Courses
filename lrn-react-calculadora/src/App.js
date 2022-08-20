import './App.css';
import logo from './imagenes/Logo.jpg'
import { Boton } from './componentes/Boton';
import { Clear } from './componentes/Clear';
import Pantalla from './componentes/Pantalla';
import { useState } from 'react';
import { evaluate } from 'mathjs';

export function App() {

    const [input, setInput] = useState('');

    const agregarInput = val => {
        setInput(input + val);
    };

    const calcularResultado = () => {
        if (input) {
            setInput(evaluate(input))
        } else {
            alert("Debe ingresar un valor");
        }
    }

    return (
        <div className="App">
            <div className='freecodecamp-logo-contenedor'>
                <img
                    src={logo}
                    className='freecodecamp-logo'
                    alt='Logo' />
            </div>
            <div className='contenedor-calculadora'>
                <div className='fila'>
                    <Pantalla input={input} />
                </div>
                <div className='fila'>
                    <Boton manejarClic={agregarInput}>1</Boton>
                    <Boton manejarClic={agregarInput}>2</Boton>
                    <Boton manejarClic={agregarInput}>3</Boton>
                    <Boton manejarClic={agregarInput}>+</Boton>
                </div>
                <div className='fila'>
                    <Boton manejarClic={agregarInput}>4</Boton>
                    <Boton manejarClic={agregarInput}>5</Boton>
                    <Boton manejarClic={agregarInput}>6</Boton>
                    <Boton manejarClic={agregarInput}>-</Boton>
                </div>
                <div className='fila'>
                    <Boton manejarClic={agregarInput}>7</Boton>
                    <Boton manejarClic={agregarInput}>8</Boton>
                    <Boton manejarClic={agregarInput}>9</Boton>
                    <Boton manejarClic={agregarInput}>*</Boton>
                </div>
                <div className='fila'>
                    <Boton manejarClic={calcularResultado}>=</Boton>
                    <Boton manejarClic={agregarInput}>0</Boton>
                    <Boton manejarClic={agregarInput}>.</Boton>
                    <Boton manejarClic={agregarInput}>/</Boton>
                </div>
                <div className='fila'>
                    <Clear manejarClear={() => setInput('')}>Clear</Clear>
                </div>
            </div>
        </div>
    );
}

