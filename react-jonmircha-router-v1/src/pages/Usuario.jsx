import React from 'react'
import { useParams } from 'react-router-dom'

const Usuario = () => {
    let { username } = useParams();
    return (
        <div>
            <h3>{`Bienvenid@ ${username} al perfil de tu usuario`}</h3>
        </div>
    )
}

export default Usuario