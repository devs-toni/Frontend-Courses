import React, { createRef, useRef } from "react";

export default function Referencias() {

    let refMenu = useRef(), refMenuBtn = useRef();

    const handleToggleMenu = (e) => {
        if (refMenuBtn.current.textContent === "Menú"){
            refMenuBtn.current.textContent = "Cerrar";
            refMenu.current.style.display = 'block';
        } else {
            refMenuBtn.current.textContent = "Menú";
            refMenu.current.style.display = 'none';
        }
    } 
    return (
        <>
            <h2>Referencias</h2>
            <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>Menú</button>
            <nav id="menu" ref= {refMenu} hidden>
                <a href="">Sección</a>
                <br />
                <a href="">Sección</a>
                <br />
                <a href="">Sección</a>
                <br />
                <a href="">Sección</a>
                <br />
                <a href="">Sección</a>
                <br />
            </nav>
        </>
    )
}