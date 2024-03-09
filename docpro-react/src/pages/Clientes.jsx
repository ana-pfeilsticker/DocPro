// Clientes.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardCliente from '../components/CardCliente';
import DetalhesCliente from '../components/DetalhesCliente';
import { useLocation } from 'react-router-dom';
import './Clientes.css';
import Preenchimento from '../components/Preenchimento';
import Deletepopup from '../components/Deletepopup';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Clientes() {
    const [dados, setDados] = useState([]);
    const [clienteSelecionado, setClienteSelecionado] = useState(null);
    const [termoPesquisa, setTermoPesquisa] = useState('');
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [clienteFormulario, setClienteFormulario] = useState(null);
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [deletePopupClientId, setDeletePopupClientId] = useState(null);
    const location = useLocation();
    const userid = parseInt(new URLSearchParams(location.search).get('userid'));

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3030/dados');
                setDados(response.data);
            } catch (error) {
                console.error('Erro ao obter dados da API', error);
            }
        };

        fetchData();
    }, []);


    const handleGerarDocumento = () => {
      setClienteFormulario(clienteSelecionado);
      setMostrarFormulario(true);
      setClienteSelecionado(null);
    }

    const handleCloseFormulario = () => {
      setMostrarFormulario(false);
      setClienteFormulario(null);
    };

    const handleNameClick = (cliente) => {
        setClienteSelecionado(cliente);
    };

    const handleCloseDetalhes = () => {
        setClienteSelecionado(null);
    };

    const handleExcluir =  (id) => {

        setDados((dados) => dados.filter(item => item.id !== id));
        try {
             axios.delete(`http://localhost:3030/dados/${id}`);
        } catch (error) {
            console.error('Erro ao excluir o dado', error);
        }
        setShowDeletePopup(false);
        setDeletePopupClientId(null);
    };

    const handlePesquisa = (event) => {
        setTermoPesquisa(event.target.value);
    };

    const clientesPesquisados = dados.filter(cliente => 
      cliente.chave === userid && // Substitua "userid" pelo nome correto da chave no objeto do cliente
      cliente.nome.toLowerCase().includes(termoPesquisa.toLowerCase())
    );

    const handleEditar = async (id, novosDados) => {
        try {
          // Faz uma requisição PUT para a rota de atualização no servidor Node.js
          await axios.put(`http://localhost:3030/dados/${id}`, novosDados);
      
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
  <div className="full-screen-container">
    <h1>Clientes</h1>

    <div className="search-bar-clientes">
      <input
        type="text"
        placeholder="Pesquisar por nome"
        value={termoPesquisa}
        onChange={handlePesquisa}
      />
      <FontAwesomeIcon className="search-icon-clientes" icon={faMagnifyingGlass} />
    </div>

    <ul className="client-list">
      {clientesPesquisados.map((item) => (
        <CardCliente
          key={item.id}
          cliente={item}
          onClick={handleNameClick}
          onDelete={() => {
            setShowDeletePopup(true);
            setDeletePopupClientId(item.id);
          }}
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

    {clienteSelecionado && (
      <DetalhesCliente
        cliente={clienteSelecionado}
        onClose={handleCloseDetalhes}
        onEditar={handleEditar}
        onGerar={handleGerarDocumento}
      />

    )}
    {mostrarFormulario && (
            <Preenchimento
              clienteFormulario={clienteFormulario}
              onClose={handleCloseFormulario}
            />
          )}
  </div>
);     
}

export default Clientes;