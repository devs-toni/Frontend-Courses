import React, { useState } from 'react';
import '../styles/SongForm.css';
import { BsSearch } from "react-icons/bs";
export const SongForm = ({ handler }) => {
  
  const initialForm = {
    artist: '',
    song: ''
  };

  const [form, setForm] = useState(initialForm);


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!form.artist || !form.song) {
      alert ('Faltan datos');
      return;
    } else {
      handler(form);
      setForm(initialForm);
    }
  };



  return (
    <div className='form'>
      <form>
        <h2 className='title'>Schotiefie</h2>
        <div className='formInput'>
          <div className='inputs'>
            <input type="text" name="artist" placeholder="Artist Name" onChange={handleChange} value={form.artist} /><br />
            <input type="text" name="song" className="last" placeholder="Song Name" onChange={handleChange} value={form.song} />
          </div>
          <div className='icons'>
            <BsSearch size={40} className="icon" onClick={handleSubmit} />
          </div>
        </div>
      </form>
    </div >
  )
}
