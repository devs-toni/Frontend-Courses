import React, { useState,useEffect } from 'react';

const initialForm = {
    name:'',
    type:'',
    id:null
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {

    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        if (dataToEdit) {
            setForm(dataToEdit);
        } else {
            setForm(initialForm);
        }
    }, [dataToEdit]);
    

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.type){
            alert("Datos incompletos");
            return;
        }

        if (form.id === null) {
            createData(form);
        } else {
            updateData(form);
        }
        handleReset();
    }

    const handleReset = (e) => { 
        setForm(initialForm);
        setDataToEdit(null);
    }

    return (
        <div>
            <h3>{dataToEdit !== null ? 'Editar' : 'Añadir'}</h3>
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
