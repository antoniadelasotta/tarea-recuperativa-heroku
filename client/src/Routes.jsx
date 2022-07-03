/* modulos necesarios para las rutas */
import React from 'react';
import {
  Route, Routes,
} from 'react-router-dom';
/* Rutas */
import Login from './views/Login';
import Register from './views/Register';

import LandingPage from './views/LandingPage'
import CrearPlaylist from './views/CrearPlaylist';
import PlaylistsView from './views/PlaylistsView';
import VerPlaylist from './views/VerPlaylist';
import CrearContenido from './views/CrearContenido';
import ContenidoView from './views/ContenidoView';

/*      */

function Rutas() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/crearplaylist" element={<CrearPlaylist />} />
      <Route exact path="/playlists" element={<PlaylistsView />} />

      <Route exact path="/crearcontenido" element={<CrearContenido />} />
      <Route exact path="/contenido" element={<ContenidoView />} />
    </Routes>
  );
}

export default function RoutesWrapper() {
  return (
    <Rutas />
  );
}