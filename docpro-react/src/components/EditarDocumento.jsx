import React from 'react';
import './EditarDocumento.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function EditarDocumento({ documento, onClose, onEdit }) {

    const [novoNome, setNovoNome] = useState(documento.nome);
    const [novaTag, setNovaTag] = useState(documento.tags);
    const handleSalvarClick = () => {
        const novosDados = {
          nome: novoNome,
          tags: novaTag,
        };
      
        onEdit(documento.id, novosDados);
        onClose()
      };

    if (!documento) {
        return null; // Retorna null se não houver documento
    }

    return (
        <div className="detalhes-cliente-overlay">
          <div className="detalhes-cliente-card">
            
              <form>
                <label>Nome:</label>
                <input
                  type="text"
                  value={novoNome}
                  onChange={(e) => setNovoNome(e.target.value)}
                />
                <label>Tags:</label>
                <input
                    type="text"
                    value={novaTag}
                    onChange={(e) => setNovaTag(e.target.value)}
                />
                <button type="button" onClick={handleSalvarClick}>Salvar</button>
              </form>
            
                <button onClick={onClose}>Fechar</button>
          </div>
        </div>
      );
    };

export default EditarDocumento;
