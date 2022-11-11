import React from 'react'
import { useHistory } from 'react-router-dom';

const CrudTableRow = ({ e,deleteData,setDataToEdit }) => {

  let {name, type, id} = e;
  let history = useHistory();

  const handleEdit = (el) => {
    setDataToEdit(e);
    history.push(`/edit/${id}`);
  }
  return (
    <tr>
        <th>{e.name}</th>
        <th>{e.type}</th>
        <th>
            <button
                onClick={handleEdit}>Editar</button>
            <button 
                onClick={() => deleteData(id)}>Eliminar</button>
        </th>
    </tr>
  )
}

export default CrudTableRow