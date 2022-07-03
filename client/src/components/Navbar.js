import React, { useState, useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { userContext } from '../providers/UserProvider';

const Navbar = () => {
  // const [userLogged, setUserLogged] = useState(user_logged);
  const userLogged = useContext(userContext);
  // const userLogged = 0;
  return (
    <>
      <Nav>

        <NavHome>
          <NavLink to='/' activestyle="true">
            <h1> PlaylistHome</h1>
          </NavLink>
          <NavLink to='/crearplaylist' activestyle="true">
                Crear Playlist
          </NavLink>
          <NavLink to='/playlists' activestyle="true">
                Playlists
          </NavLink>

          <NavLink to='/crearcontenido' activestyle="true">
                Crear Contenido X
          </NavLink>
          <NavLink to='/contenido' activestyle="true">
                Contenido X
          </NavLink>

          {userLogged &&
            <div>
              <NavLink to='/crearplaylist' activestyle="true">
                Crear Playlist
              </NavLink>
              <NavLink to='/playlist' activestyle="true">
                Mis Playlist
              </NavLink>
            </div>}

        </NavHome>
        <NavSignin>
          {userLogged 
          ? <NavSigninLink to={'/profile'}>Perfil</NavSigninLink>
          :
            <div>
              <NavSigninLink to='/login'>Iniciar Sesión</NavSigninLink>
              <NavSigninLink to='/register'>Register</NavSigninLink>
            </div>}
        </NavSignin>
      </Nav>
    </>
  );
};



const Nav = styled.nav`
  background: #9a212f;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

const NavLink = styled(Link)`
  color: #F5F5F5;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;

const NavHome = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavSignin = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavSigninLink = styled(Link)`
  border-radius: 4px;
  background: #C9C9C9;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;

export default Navbar;