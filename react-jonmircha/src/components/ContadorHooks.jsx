import React, { useState } from "react";

export default function ContadorHooks(props) {
    const [contador, setContador] = useState(0);
    return (
        <>
            <h2>Hooks - useState</h2>
            <h3>{contador}</h3>
            <nav>
                <button onClick={() => setContador(contador+1)}>+</button>
                <button onClick={() => setContador(contador-1)}>-</button>
            </nav>
            <p>Contador de {props.titulo}</p>
        </>
    );
}

ContadorHooks.defaultProps = {
    titulo:''
}