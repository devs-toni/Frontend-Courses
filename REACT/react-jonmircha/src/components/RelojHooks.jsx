import React, { useState, useEffect } from 'react';

function Reloj({ hora }) {
    return <h3>{hora}</h3>
}
export default function RelojHooks(props) {
    const [hour, setHour] = useState(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setHour(new Date().toLocaleTimeString());
        let temp;
        if (visible) {
         temp =  setInterval(() => {
                setHour(new Date().toLocaleTimeString())
                console.log("Actualizando reloj");

            }, 1000);
        } else {
            clearInterval(temp)
            setHour(null);
        }
        return () => {
            clearInterval(temp)
            setHour(null);
        }

    }, [visible])


    return (
        <>
            <h2>Reloj con Hooks</h2>
            {visible && <Reloj hora={hour} />}
            <button onClick={() => setVisible(true)}>Iniciar</button>
            <button onClick={() => setVisible(false)}>Detener</button>
        </>
    )
}