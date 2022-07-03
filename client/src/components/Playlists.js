import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "../styles/Login.css";
import axios from 'axios';
import { userContext, toggleUserContext } from '../providers/UserProvider';


const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);
 // const [playlistUser, setPlaylistUser] = useState([]);
 // const userLogged = useContext(userContext);
 // const userLogin = useContext(toggleUserContext);


 useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}/playlists`).then((response) => {
      setPlaylists(response.data.playlists);
    })
}, [])

 // useEffect(() => {
   // const getPlaylists = async () => {
     // axios.get(`${process.env.REACT_APP_URL}/playlists`).then((response) => {
       // setPlaylists(response.data.playlists);
 //     })
   // };
  //  getPlaylists();
//  }, [])

  const showPlaylist = (playlist) => {
   // const now = new Date();
      return (
        <a className='playlistlink' href={`/playlists/${playlist.id}`} key={playlist.id}>
          <PlaylistCard className="login-card-form">
            <div>
              <h4> hola: {playlist.playlistName} </h4>
            </div>
          </PlaylistCard>
        </a>
      )
  }

  return (
    <PlaylistsContainer>
      {playlists.map((playlist) => showPlaylist(playlist))}
    </PlaylistsContainer>
  )
}

export default Playlists

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