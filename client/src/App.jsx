import React, { createContext, useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Rutas from './Routes';
import './App.css';
import Navbar from './components/Navbar'
import UserProvider from './providers/UserProvider';
import AuthContextProvider from './contexts/AuthContextProvider';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <AuthContextProvider>
            <Navbar/>
            <Rutas />
          </AuthContextProvider>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
