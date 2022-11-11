import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

const Productos = () => {

  const LIMIT =20;
  const MAX = 100;
  let {search} = useLocation();
  let query = new URLSearchParams(search);
  let start = parseInt(query.get('inicio')) || 1;
  let end = parseInt(query.get('fin')) || LIMIT;
  let history = useHistory();

  const handlePrev = (e) => {
    history.push({search: `?inicio=${parseInt(start)-LIMIT}&fin=${end-LIMIT}`});
  }
  const handleNext = (e) => {
   history.push({search: `?inicio=${parseInt(start)+LIMIT}&fin=${end+LIMIT}`});
  }

  console.log(start + " " + end);
  return (
    <>
      <h1>Esta es la página de productos</h1>
      <p>Mostrando productos del <b>{start}</b> al <b>{end}</b></p>
      {start > LIMIT && <button onClick={handlePrev}>Atrás</button>}
      {end < MAX && <button onClick={handleNext}>Adelante</button>}
    </>
  )
}

export default Productos