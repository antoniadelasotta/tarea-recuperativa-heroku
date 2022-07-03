import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../styles/CrearPlaylist.css"
import { userContext, toggleUserContext } from '../providers/UserProvider';
import useAuth from '../hooks/useAuth'


export default function CrearPlaylist() {
  const navigate = useNavigate();

  const [playlistName, setPlaylistName] = useState('');
 // const { currentUser } = useAuth();


  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validaciones acá
    // ValiditeInputs()

    const playlist = {
      // idUser: currentUser.id,
      name: playlistName
    };

    // const url = 'http://localhost:3000/crearplaylist/';

    axios.post(`${process.env.REACT_APP_URL}/playlists`, playlist).then((response) => {
      if (response.status === 201) {
        console.log("playlist Status: " + response.data);
        navigate('/playlists');
      } else {
        console.log("playlist Error: " + response.error);
      }
    }).catch((error) => console.log(error));
  }


  return (
    <div className="background-login">
      <div className="login-card-form">
        <div>
          <h1>Crea una Playlist</h1>
        </div>
        <form className="form-box" onSubmit={handleSubmit}>
          <p>Nombre Playlist: <input type="text" name="nombreplaylist" value={playlistName} onChange={(e) => setPlaylistName(e.target.value)} /></p>
          <input className='input-box' id='submit-button' type="submit" value="Crear" />
        </form >
      </div >
    </div >
  );
};