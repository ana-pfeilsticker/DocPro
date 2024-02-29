

//essa página aqui é para os documentos, cadastro, visualização e etc
import React, { useState } from 'react';
import CadastroDocumento from '../components/CadastroDocumentos';
import './Documentos.css'
function Documentos() {


    //isso aqui vai controlar a abeertura do pop up
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const handleAbrirFormulario = () => {
    setMostrarFormulario(true);
  };

  const handleFecharFormulario = () => {
    setMostrarFormulario(false);
  };

  const handleCadastroSucesso = () => {

    setMostrarFormulario(false);
  };

  return (
    <div>
      <h1>Documentos</h1>
      <button onClick={handleAbrirFormulario}>Novo Documento</button>

      {mostrarFormulario && (
        <CadastroDocumento
          onClose={handleFecharFormulario}
          onCadastroSucesso={handleCadastroSucesso}
        />
      )}
    </div>
  );
}

export default Documentos;
