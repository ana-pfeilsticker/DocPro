

//essa página aqui é para os documentos, cadastro, visualização e etc
import Deletepopup from '../components/Deletepopup';
import React, { useEffect, useState } from 'react';
import CadastroDocumento from '../components/CadastroDocumentos';
import axios from 'axios';
import './Documentos.css'
import CardDocumento from '../components/CardDocumento';
import EditarDocumento from '../components/EditarDocumento';
function Documentos() {

  const [dados, setDados] = useState([]);


    //isso aqui vai controlar a abeertura do pop up
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarEditar, setMostrarEditar] = useState(false);
  const [docEdicao, setdocEdicao] = useState();
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [deletePopupClientId, setDeletePopupClientId] = useState(null);

  const handleAbrirFormulario = () => {
    setMostrarFormulario(true);
  };

  const handleFecharFormulario = () => {
    setMostrarFormulario(false);
  };

  const handleCadastroSucesso = async () => {
    try {
      const response = await axios.get('http://localhost:3030/documentos');
      setDados(response.data);
    } catch (error) {
      console.error('Erro ao obter dados da API', error);
    }
  
    setMostrarFormulario(false);
  };

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3030/documentos/');
            setDados(response.data);
        } catch (error) {
            console.error('Erro ao obter dados da API', error);
        }
    };
    fetchData();
}, []);

const handleExcluir = (id) => {
  setDados((dados) => dados.filter(item => item.id !== id));
  
  try {

      axios.delete(`http://localhost:3030/documentos/${id}`);

  } catch (error) {
      console.error('Erro ao excluir o dado', error);
  }
  setShowDeletePopup(false)
  setDeletePopupClientId(null)
};

const handleAbrirFormDoc = (documento) => {
  setdocEdicao(documento);
  setMostrarEditar(true);
};

const handleFecharFormDoc = () => {
  setMostrarEditar(false);
};

const handleEditar = async (id, novosDados) => {
  try {
    // Faz uma requisição PUT para a rota de atualização no servidor Node.js
    await axios.put(`http://localhost:3030/documentos/${id}`, novosDados);

    // Atualiza o estado local para refletir as mudanças no cliente editado
    const novaLista = dados.map(item =>
      item.id === id ? { ...item, ...novosDados } : item
    );
    setDados(novaLista);
  } catch (error) {
    console.error('Erro ao editar dados:', error);
  }
};


  return (
    <div>
      <h1>Documentos</h1>

      <ul className="document-list" >
      {dados.map((item) => (
        <CardDocumento 
          key={item.id}
          documento={item}
          onDelete={() => {
            setShowDeletePopup(true);
            setDeletePopupClientId(item.id);
          }}
          onEdit={handleAbrirFormDoc}
        />
      ))}
      </ul>
      {showDeletePopup && (
        <Deletepopup
          onConfirm={async () => {
            handleExcluir(deletePopupClientId);
          }}
          onCancel={() => {
            setShowDeletePopup(false);
            setDeletePopupClientId(null);
          }}
        />
      )}
      <button onClick={handleAbrirFormulario}>Novo Documento</button>

      {mostrarFormulario && (
        <CadastroDocumento
          onClose={handleFecharFormulario}
          onCadastroSucesso={handleCadastroSucesso}
        />
        
      )}
      {mostrarEditar && (
        <EditarDocumento
          documento={docEdicao}
          onEdit={handleEditar}
          onClose={handleFecharFormDoc}
        />
      )}
    </div>
  );
}

export default Documentos;
