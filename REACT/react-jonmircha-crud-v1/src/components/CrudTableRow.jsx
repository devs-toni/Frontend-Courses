import React from 'react'

const CrudTableRow = ({ e,deleteData,setDataToEdit }) => {

  let {name, type, id} = e;

  return (
    <tr>
        <th>{e.name}</th>
        <th>{e.type}</th>
        <th>
            <button
                onClick={() => setDataToEdit(e)}>Editar</button>
            <button 
                onClick={() => deleteData(id)}>Eliminar</button>
        </th>
    </tr>
  )
}

export default CrudTableRow