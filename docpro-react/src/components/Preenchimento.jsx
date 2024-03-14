// FormularioGeracaoDocumento.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Preenchimento.css'

function Preenchimento({ clienteFormulario, onClose, onGerarDocumento }) {
  const [tiposDocumentos, setTiposDocumentos] = useState([]);
  const [tipoDocumentoSelecionado, setTipoDocumentoSelecionado] = useState('');
  const [documentoParaUpload, setDocumentoParaUpload] = useState(null);

  useEffect(() => {
    const fetchTiposDocumentos = async () => {
      try {
        const response = await axios.get('http://localhost:3030/documentos');
        console.log(response.data);
        setTiposDocumentos(response.data);
      } catch (error) {
        console.error('Erro ao obter tipos de documentos', error);
      }
    };

    fetchTiposDocumentos();
  }, []);

  const handleDocumentoUpload = (e) => {
    const file = e.target.files[0];
    setDocumentoParaUpload(file);
  };

  const handleGerarDocumento = async () => {
    try {
      console.log(tipoDocumentoSelecionado)
      const tagsDocumento = tipoDocumentoSelecionado.split(' ');
      const colunasClientes = Object.keys(clienteFormulario);

      const clienteFiltrado = tagsDocumento.reduce((acc, tag) => {
        if (colunasClientes.includes(tag)) {
          acc[tag] = clienteFormulario[tag];
        }
        return acc;
      }, {});

      const colunasClientesFiltrados = Object.keys(clienteFiltrado)

      const tagsAusentes = tagsDocumento.filter(tag => !colunasClientesFiltrados.includes(tag));

      if (tagsAusentes.length > 0) {
        const informacoesAdicionais = {};
        for (const tagAusente of tagsAusentes) {
          const informacao = prompt(`Digite a informação para ${tagAusente}:`);
          if (informacao === null) {
            return;
          }
          informacoesAdicionais[tagAusente] = informacao;
          
        }
  
        // Adicione as informações adicionais ao clienteFormulario
        Object.assign(clienteFiltrado, informacoesAdicionais);
      }



      const formData = new FormData();
      formData.append('cliente', JSON.stringify(clienteFiltrado));
      formData.append('tipoDocumento', tipoDocumentoSelecionado);
      formData.append('documento', documentoParaUpload);

      // Envie a solicitação para o servidor
      const response = await axios.post('http://localhost:3030/gerarDocumento', formData, { responseType: 'arraybuffer' });

      // Cria um Blob a partir dos dados recebidos
      const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
  
      // Cria um link simulado para download
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'documento_preenchido.docx';
      
      // Simula um clique no link para iniciar o download
      link.click();
      onClose();
    } catch (error) {
      console.error('Erro ao gerar o documento', error);
    }
  };


  return (
    <div className="formulario-container">

      <form className='formulario'> 
        <label htmlFor="tipoDocumento">Tipo de Documento:</label>
        <select
          id="tipoDocumento"
          value={tipoDocumentoSelecionado}
          onChange={(e) => setTipoDocumentoSelecionado(e.target.value)}
        >
          <option value="" disabled>
            Selecione um tipo de documento
          </option>
          {tiposDocumentos.map((tipo) => (
            <option key={tipo.id} value={tipo.tags}>
              {tipo.nome}
            </option>
          ))}
        </select>

        <label htmlFor="uploadDocumento">Upload de Documento (DOCX):</label>
        <input
          type="file"
          id="uploadDocumento"
          accept=".docx"
          onChange={handleDocumentoUpload}
        />

        {/* Outros campos do formulário, se necessário */}

        <button className="gerar-documento"type="button" onClick={handleGerarDocumento}>
          Gerar Documento
        </button>
        <button className="fechar"type="button" onClick={onClose}>
          Fechar
        </button>
      </form>
    </div>
  );
}

export default Preenchimento;
