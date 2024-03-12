
import React, { useState } from 'react';
import axios from 'axios';
import './CadastroDocumentos.css';


const CadastroDocumento = ({ onClose, onCadastroSucesso }) => {
  const [nome, setNome] = useState('');  
  const [tags, setTags] = useState('');


  //essas duas linhas vão definir como vai ser o comportamento ao mudar o valor do input do formulário, ou seja, vai receber o evento e vai setar nome e tags para o valor do alvo de evento, ou seja, o valor do envio dos inputs
  const handleNomeChange = (event) => setNome(event.target.value);
  const handleTagChange = (event) => setTags(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      //estabelecendo conexão com o servidor
      await axios.post('http://localhost:3030/documentos', {
        nome,
        tags,
      });
      onCadastroSucesso();
    } catch (error) {
      console.error('Erro ao cadastrar documento:', error);
      // Trate o erro conforme necessário
    }
  };

  return (
    <div className="popup-container">
      
      <div className="popup-content">
        <h2 className='cadastrar-documento'>Cadastrar Documento</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={nome} onChange={handleNomeChange} />
          </label>
          <br />
          <label>
            Tag:
            <input type="text" value={tags} onChange={handleTagChange} />
          </label>
          <br />
          <div className="button-container">
            <button className='cadastrar' type="submit">Cadastrar Documento</button>
            <button className='fechar' type="button" onClick={onClose}>
              Fechar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastroDocumento;

