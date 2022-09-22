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
    const [db, setDb] = useState(initialDb);
    const [dataToEdit, setDataToEdit] = useState(null);

    const createData = (data) => {
        data.id=Date.now();
        setDb([...db, data]);
    };
    
    const updateData = (data) => {
        let newData = db.map(e => e.id === data.id ? data : e);
        setDb(newData);
    };
    
    const deleteData = (id) => {
        let isDelete = window.confirm(`¿Estás seguro de eliminar el registro con el id ${id}?`)
        if (isDelete) {
            let del = db.filter(e => e.id !== id);
            setDb(del);
        } else {
            return;
        }
    };

  return (
    <div>
        <h2>Bienvenido</h2>
        <article className="grid-1-2">
        <CrudForm 
            createData={createData} 
            updateData={updateData} 
            dataToEdit={dataToEdit} 
            setDataToEdit={setDataToEdit} />
            <hr />
        <CrudTable 
            data={db} 
            setDataToEdit={setDataToEdit}
            deleteData={deleteData} />
        </article>
    </div>
  )
}

export default CrudApp