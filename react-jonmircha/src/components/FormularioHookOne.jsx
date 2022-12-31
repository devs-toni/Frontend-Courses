import React, { useState } from 'react';

export default function FormularioHookOne() {

    const [formulario, setFormulario] = useState({})

    const handleChange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]:e.target.value, 
        })
    };

    const handleChecked = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]:e.target.checked, 
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Formulario enviado");
    }
    return (
        <>
            <h2>Formulario One UseState</h2>
            <form>
                <label htmlFor="nombre">Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    value={formulario.nombre}
                    onChange={(e) => {handleChange(e)}}
                    placeholder="Introduce tu nombre" />
                <br />
                <br />
                <label htmlFor="sexo">Sexo:</label>
                <label htmlFor="sexom">Hombre</label>
                <input
                    type="radio"
                    id="sexom"
                    name="sexo"
                    value="Masculino"
                    onChange={(e) => {handleChange(e)}}
                    defaultChecked
                />
                <label htmlFor="sexof">Mujer</label>
                <input
                    type="radio"
                    id="sexof"
                    name="sexo"
                    value="Femenino"
                    onChange={(e) => {handleChange(e)}}
                />
                <br />
                <br />
                <p>Elige tu lenguaje favorito</p>
                <select
                    name="lenguaje"
                    onChange={(e) => {handleChange(e)}}
                    defaultValue=''>
                    <option value=""></option>
                    <option value="js">Javascript</option>
                    <option value="java" >Java</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">Go</option>
                </select>
                <br />
                <br />
                <label htmlFor='terminos'>Acepta los terminos y condiciones</label>
                <input
                    type="checkbox"
                    id="terminos"
                    name="terminos"
                    onChange={(e) => {handleChecked(e)}}
                />
                <br />
                <br />
                <input type="submit" value="Enviar" onClick={handleSubmit} />
            </form>
        </>
    )
}
