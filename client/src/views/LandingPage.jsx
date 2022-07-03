import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/LandingPage.css';
/*import Navbar from '../components/Navbar';
import Logo from "../images/Logo.png";*/

export default function LandingPage() {
  const [hello, setHello] = useState('');
  const [message, setMessage] = useState('');
  const [isUser, setIsUser] = useState(false);

  return (
    < div className="background-landingpage" >
      <h1>{hello['mensaje']}</h1>
      <div className="landingpage-card-form">
        <div className="row justify-content-center text-center">
          <div className="form-box">
            <h1>Crea tus playlist en PlaylistHome para escuchar cuando y donde quieras! </h1>

            <p className="lead">PlaylistHome es una aplicación web que permite a los usuarios crear playlist personales
            y añadir recursos audiovisuales esde diferentes aplicaciones o plataformas. 
            Los usuarios podrán añadir links a videos/canciones de
            alguna de las siguientes aplicaciones: Spotify, Tiktok y Youtube a cualquiera de sus playlist!</p>
          </div>
        </div>
      </div>
    </div >
  );
};