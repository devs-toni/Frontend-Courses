import React, { useState, useEffect } from 'react';
import SelectList from './SelectList';

export default function SelectsAnidados() {

    const [state, setState] = useState('');
    const [town, setTown] = useState('');
    const [suburb, setSuburb] = useState('');
    const TOKEN = '36166b9c-419b-4bf5-a2b7-8e291f566d38';

    return (
        <div>
            <h2>México</h2>
            <SelectList title='estado' url={`https://api.copomex.com/query/get_estados?token=${TOKEN}`} handleChange={(e) => { setState(e.target.value) }} />
            {state && (
                <SelectList title='municipios' url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${TOKEN}`} handleChange={(e) => { setTown(e.target.value) }} />
            )}
            {town && (
                <SelectList title='colonia' url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=${TOKEN}`} handleChange={(e) => { setSuburb(e.target.value) }} />
            )}
        </div>
    )
}
