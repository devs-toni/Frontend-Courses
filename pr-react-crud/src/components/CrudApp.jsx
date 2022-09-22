import React, { useState } from 'react';
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'

const initialDb = [
    {
        id:1,
        name:'Pikachu',
        type:'Electric'
    },
    {
        id:2,
        name:'Charmander',
        type:'Fire'
    },
    {
        id:3,
        name:'Squirtle',
        type:'Water'
    },
    {
        id:4,
        name:'Charizard',
        type:'Fire'
    },
    {
        id:5,
        name:'Raichu',
        type:'Electric'
    },
]

const CrudApp = () => {
    const [db, setDb] = useState(initialDb)
  return (
    <div>
        <h2>Bienvenido</h2>
        <CrudForm />
        <CrudTable data={db} />
    </div>
  )
}

export default CrudApp