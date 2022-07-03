import React, { useState } from 'react';
import { Navigate, Link, useParams } from 'react-router-dom';
import "../styles/Playlists.css";
import Contenido from '../components/Contenido';
import { TikTok } from "react-tiktok";


export default function ContenidoView() {
  const [loading, setLoading] = useState(false);
  const { user_id } = useParams();


  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="background-login">
      <div className='playlists-view'>
      <div className="login-card-form">
          <p>Nombre Playlist: Musica en youtube</p>
          <p>Aplicacion: Youtube</p>
          <iframe width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
      </div >
      <div className="login-card-form">
          <p>Nombre Playlist: Videos tiktok</p>
          <p>Aplicacion: Youtube</p>
          <TikTok url="https://www.tiktok.com/@scout2015/video/6718335390845095173" />
      </div >
      <div className="login-card-form">
          <p>Nombre Playlist: Musica spotify</p>
          <p>Aplicacion: Spotify</p>
          <iframe width="420" height="345" src="https://open.spotify.com/track/1HiC3nsHMttSK6YhSH2XqY?si=971a042e531747f4"></iframe>
      </div >
      </div>
    </div >

//    <div className='background-playlists'>
  //          <div className='playlists-view'>

    //          <Contenido />
      //      </div>
   // </div>
  )
};