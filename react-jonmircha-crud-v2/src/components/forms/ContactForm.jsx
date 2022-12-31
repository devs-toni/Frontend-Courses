/* eslint-disable no-unused-vars */
import React from 'react'
import { useForm } from './useForm'
import Loader from '../crud/Loader';
import Message from './Message';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  comments: ''
}

let styles = {
  fontWeight: '600',
  color: 'red'
}

const validateForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = 'El campo "Nombre" es obligatorio';
  } else if (!regexName.test(form.name.trim())) {
    errors.name = 'El campo "Nombre" solo acepta letras y espacios en blanco';
  }

  if (!form.email.trim()) {
    errors.email = 'El campo "Email" es obligatorio';
  } else if (!regexName.test(form.name.trim())) {
    errors.email = 'El campo "Email" no és válido';
  }

  if (!form.subject.trim()) {
    errors.subject = 'El campo "Asunto" es obligatorio';
  }

  if (!form.comments.trim()) {
    errors.comments = 'El campo "Comentarios" es obligatorio';
  } else if (!regexName.test(form.name.trim())) {
    errors.comments = 'El campo "Comments" solo puede contener 255 caracteres'
  }
  
  return errors;
}

const validateName = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

  if (!form.name.trim()) {
    errors.name = 'El campo "Nombre" es obligatorio CAPULLO';
  } else if (!regexName.test(form.name.trim())) {
    errors.name = 'El campo "Nombre" solo acepta letras y espacios en blanco';
  }

  
  return errors;
}

const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleBlurName,
    handleSubmit
  } = useForm(initialForm, validateForm, validateName);

  return (
    <div>
      <h2>Formulario de Contacto</h2>
      <form action='f2834b9068e7ce4a793c0fa0d1519fd5' onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Escribe tu nombre'
          onBlur={handleBlurName}
          onChange={handleChange}
          value={form.name}
          required
        />
        {errors.name && (<h4 style={styles}>{errors.name}</h4>)}
        <input
          type='email'
          name='email'
          placeholder='Escribe tu email'
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        {errors.email && (<h4 style={styles}>{errors.email}</h4>)}
        <input
          type='text'
          name='subject'
          placeholder='Escribe el asunto'
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.subject}
          required
        />
        {errors.subject && (<h4 style={styles}>{errors.subject}</h4>)}
        <textarea
          name="comments"
          id=""
          cols="50"
          rows="10"
          placeholder='Escribe los comentarios'
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.comments}
          required
        ></textarea>
        {errors.comments && (<h4 style={styles}>{errors.comments}</h4>)}

        <input
          type="submit"
          value='Enviar'
        />
      </form>
      {loading && <Loader />}
      {response && (<Message msg='Los datos han sido enviados' bgColor='green' />)}
    </div>
  )
}

export default ContactForm