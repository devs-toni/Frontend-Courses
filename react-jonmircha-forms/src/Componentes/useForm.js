/* eslint-disable no-unused-vars */
import { getValue } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';
import { helpHttp } from './helpHttp';


export const useForm = (initialForm, validateForm, validateName) => {

    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleBlurName = (e) => {
        handleChange(e);
        setErrors(validateName(form));
    };

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
         setErrors(validateForm(form)); 
        
        if (Object.keys(errors).length === 0) {
            setLoading(true);
            helpHttp().post('https://formsubmit.co/ajax/antoniorufinocasasus@gmail.com', {
                body: form,
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                }
            }).then(res => {
                setLoading(false);
                setResponse(res);
                setTimeout(() => {
                    setResponse(false)
                }, 5000);
                setForm(initialForm);
            })
        } else {
            return;
        }
    };

    return {
        form, errors, loading, response, handleBlur, handleChange, handleBlurName, handleSubmit   
    }
}
