import React, { useEffect,useState } from 'react';

export default function ScrollHooks (){

    const [scrollY, setScrollY] = useState(0)
    useEffect(() => { 
        console.log("Moviendo Scroll");
        const detectScroll = () => {
            setScrollY(window.pageYOffset);
        };
        return() => window.addEventListener("scroll", detectScroll);
     },[scrollY])

     useEffect(() => {
        console.log("Montaje");
    }, [])
    
    useEffect(() => {
        console.log("Fase de Update");

        return () => {

        }
    })
    return (
        <>
            <h2>Hooks - useEffect</h2>
            <p>Scroll Y del Navegador {scrollY}px</p>
        </>
    )
}