// App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Clientes from './pages/Clientes';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Clientes" element={<Clientes />} />
      </Routes>
    </Router>
  );
};

export default App;
