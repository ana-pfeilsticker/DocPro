// App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Clientes from './pages/Clientes';
import Documentos from './pages/Documentos';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Clientes" element={<Clientes />} />
        <Route path="/Documentos" element={<Documentos />} />
      </Routes>
    </Router>
  );
};

export default App;
