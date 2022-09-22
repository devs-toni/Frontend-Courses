import React, { useState } from 'react';

const initialForm = {
    name:'',
    type:'',
    id:null
};

const CrudForm = () => {
    
    const [form, setForm] = useState(initialForm);

    const handleChange = (e) => { }

    const handleSubmit = (e) => { }

    const handleReset = (e) => { }

    return (
        <div>
            <h3>Añadir</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    name='name' 
                    onChange={handleChange} 
                    value={form.name} 
                    placeholder='Nombre' />
                <input 
                    type='text' 
                    name='type' 
                    onChange={handleChange} 
                    value={form.type} 
                    placeholder='Tipo' />
                <input 
                    type='submit' 
                    value='Enviar' />
                <input 
                    type='reset' 
                    onClick={handleReset}
                    value='Limpiar' />
            </form>
        </div>
    )
}

export default CrudForm
