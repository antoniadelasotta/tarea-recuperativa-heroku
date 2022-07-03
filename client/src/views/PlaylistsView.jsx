import React, { useState } from 'react';
import { Navigate, Link, useParams } from 'react-router-dom';
import "../styles/Playlists.css";
import Playlists from '../components/Playlists';
import { TikTok } from "react-tiktok";


export default function PlaylistsView() {
  const [loading, setLoading] = useState(false);
 // const { user_id } = useParams();


  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="background-login">
      <div className='playlists-view'>
      <div className="login-card-form">
          <p>Nombre Playlist: Musica en youtube</p>
      </div >
      </div>
    </div >
  //  <div className='background-playlists'>
    //    <div className='playlists-view'>
      //    <Playlists />
  //      </div>
   // </div>
  )
};