import React, { useState } from 'react';

export default function Formularios() {

    const [nombre, setNombre] = useState("")
    const [sexo, setSexo] = useState("")
    const [lenguaje, setLenguaje] = useState("")
    const [terminos, setTerminos] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Formulario enviado");
    }
    return (
        <>
            <h2>Formularios</h2>
            <form>
                <label htmlFor="nombre">Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
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
                    onChange={(e) => setSexo(e.target.value)}
                    defaultChecked
                />
                <label htmlFor="sexof">Mujer</label>
                <input
                    type="radio"
                    id="sexof"
                    name="sexo"
                    value="Femenino"
                    onChange={(e) => setSexo(e.target.value)}
                />
                <br />
                <br />
                <p>Elige tu lenguaje favorito</p>
                <select
                    name="lenguaje"
                    onChange={(e) => { setLenguaje(e.target.value) }}
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
                    onChange={(e) => { setTerminos(e.target.checked) }}
                />
                <br />
                <br />
                <input type="submit" value="Enviar" onClick={handleSubmit} />
            </form>
        </>
        
    )
}
