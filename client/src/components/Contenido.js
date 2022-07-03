import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "../styles/Login.css";
import axios from 'axios';
import { userContext, toggleUserContext } from '../providers/UserProvider';


const Contenido = () => {
  const [contenido, setContenido] = useState([]);
 // const [playlistUser, setPlaylistUser] = useState([]);
 // const userLogged = useContext(userContext);
 // const userLogin = useContext(toggleUserContext);


  useEffect(() => {
    const getContenido = async () => {
      axios.get(`${process.env.REACT_APP_URL}/contenido`).then((response) => {
        setContenido(response.data.contenido);
      })
    };
    getContenido();
  }, [])

  const showContenido = (contenido) => {
    const now = new Date();
    if (contenido.id >= 0) {
      return (
        <a className='contenidolink' href={`/contenido/${contenido.id}`} key={contenido.id}>
          <PlaylistCard className="login-card-form">
            <div>
              <h4>Nombre Playlist {contenido.name}</h4>
              <h4>Aplicación: </h4>
              <h4>LINK </h4>
            </div>
          </PlaylistCard>
        </a>
      )
    }
  }

  return (
    <PlaylistsContainer>
      {contenido.map((contenido) => showContenido(contenido))}
    </PlaylistsContainer>
  )
}

export default Contenido

const PlaylistsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;
  width: auto;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

const PlaylistCard = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Roboto, sans-serif; 
  width: 500px;
  height: 360px;
  border-radius: 10px;
  border-style: solid;
  border-width: 5px;
  margin: 5px;
  padding-left: 15px;
  padding-right: 15px;
  &:hover {
    background:  rgb(150, 150, 150);
  }
`;


const InspectButton = styled(Link)`
  height: 85%;
  width: auto;
  background-color: #a9c3f9;
  color: white;
  text-decoration: none;
  display: inline-block;
  border: 2px solid black;
  border-radius: 10px;
  text-align: center;
  margin: 5px;
  padding: 3px;
  margin-top: 100 px;
  &:hover {
    background-color: #47ccf2;
    cursor: pointer;
}
`;