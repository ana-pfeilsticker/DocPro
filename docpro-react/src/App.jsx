import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Clientes from './pages/Clientes';
import Documentos from './pages/Documentos';
import Comofunciona from './pages/Comofunciona';
import Login from './pages/Login';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      {window.location.pathname !== '/Login' && <Navbar />}
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Clientes" element={<Clientes />} />
        <Route path="/Documentos" element={<Documentos />} />
        <Route path="/Comofunciona" element={<Comofunciona />} />
      </Routes>
    </Router>
  );
};

export default App;
