

//essa página aqui é para os documentos, cadastro, visualização e etc
import Deletepopup from '../components/Deletepopup';
import React, { useEffect, useState } from 'react';
import CadastroDocumento from '../components/CadastroDocumentos';
import axios from 'axios';
import './Documentos.css'
import CardDocumento from '../components/CardDocumento';
import EditarDocumento from '../components/EditarDocumento';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Documentos() {
  const [dados, setDados] = useState([]);

  const handlePesquisa = (event) => {
    setTermoPesquisa(event.target.value);
  };

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarEditar, setMostrarEditar] = useState(false);
  const [docEdicao, setdocEdicao] = useState();
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [deletePopupClientId, setDeletePopupClientId] = useState(null);
  const [termoPesquisa, setTermoPesquisa] = useState('');

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

const docsPesquisados = dados.filter(documento => documento.nome.toLowerCase().includes(termoPesquisa.toLowerCase())
);
  return (
    <div className='page-container'>

      <div className='barraetitulo'> 
      <h1 className='titulo'>Documentos</h1>

      <div className="search-bar-docs">
      <input
        type="text"
        placeholder="Pesquisar documentos..."
        value={termoPesquisa}
        onChange={handlePesquisa}
      />
      <FontAwesomeIcon className="search-icon-docs" icon={faMagnifyingGlass} />
    </div></div>
     

      <ul className="document-list" >
      {docsPesquisados.map((item) => (
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
      <button className= "novo-documento" onClick={handleAbrirFormulario}>Novo Documento</button>

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
