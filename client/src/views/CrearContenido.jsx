import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../styles/CrearPlaylist.css"
import { userContext, toggleUserContext } from '../providers/UserProvider';
import useAuth from '../hooks/useAuth'


export default function CrearContenido() {
  const navigate = useNavigate();

  const [playlistName, setPlaylistName] = useState('')
  const [aplication, setAplication] = useState('')
  const [linkAplication, setLinkAplication] = useState('')
  const [infoContenido, setInfoContenido] = useState('')
 // const { currentUser } = useAuth();


  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validaciones acá
    // ValiditeInputs()

    const contenido = {
     // idUser: currentUser.id,
      name: playlistName,
      aplication: aplication,
      link: linkAplication,
      info: infoContenido

    };

    // const url = 'http://localhost:3000/crearcontenido/';

    axios.post(`${process.env.REACT_APP_URL}/contenido/`, contenido).then((response) => {
      if (response.status === 201) {
        console.log("contenido Status: " + response.data);
        navigate('/playlists');
      } else {
        console.log("contenido Error: " + response.error);
      }
    }).catch((error) => console.log(error));
  }


  return (
    <div className="background-login">
      <div className="login-card-form">
        <div>
          <h1>Agrega contenido a tu Playlist *Nombre Playlist*</h1>
        </div>
        <form className="form-box" onSubmit={handleSubmit}>
        <p>Aplicación: <select name="aplicacion" onChange={(e) => setAplication(e.target.value)} value={aplication}>
            <option>Spotify</option>
            <option>Tiktok</option>
            <option>Youtube</option></select></p>
          <p>Link: <input type="text" name="linkcontenido" value={linkAplication} onChange={e => setLinkAplication(e.target.value)} /></p>
          <p>Agregar información extra: <input type="text" name="infocontenido" value={infoContenido} onChange={e => setInfoContenido(e.target.value)} /></p>
          <input className='input-box' id='submit-button' type="submit" value="Crear" />
        </form >
      </div >
    </div >
  );
};