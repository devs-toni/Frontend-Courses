import React from 'react'

const CrudTableRow = ({ e }) => {
  return (
    <tr>
        <th>{e.name}</th>
        <th>{e.type}</th>
        <th>
            <button>Editar</button>
            <button>Eliminar</button>
        </th>
    </tr>
  )
}

export default CrudTableRow