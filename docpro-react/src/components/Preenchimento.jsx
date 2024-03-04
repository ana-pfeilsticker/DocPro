// FormularioGeracaoDocumento.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

  const handleGerarDocumento = () => {
    onGerarDocumento({
      cliente: clienteFormulario,
      tipoDocumento: tipoDocumentoSelecionado,
      documento: documentoParaUpload,
      // ... outros dados necessários
    });

    // Feche o formulário após gerar o documento
    onClose();
  };

  return (
    <div className="formulario-container">

      <form>
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
            <option key={tipo.id} value={tipo.id}>
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

        <button type="button" onClick={handleGerarDocumento}>
          Gerar Documento
        </button>
      </form>
    </div>
  );
}

export default Preenchimento;
