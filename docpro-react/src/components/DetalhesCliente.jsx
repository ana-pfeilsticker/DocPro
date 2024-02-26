import React from 'react';
import './DetalhesCliente.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function DetalhesCliente({ cliente, onClose, onEditar, onDelete }) {
    const [edicao, setEdicao] = useState(false);
    const [novoNome, setNovoNome] = useState(cliente.nome);
    const [novoEmail, setNovoEmail] = useState(cliente.email);
    const [novaNacionalidade, setNovaNacionalidade] = useState(cliente.nacionalidade);
    const [novoEstadoCivil, setNovoEstadoCivil] = useState(cliente.estado_civil);
    const [novaProfissao, setNovaProfissao] = useState(cliente.profissao);
    const [novoNomePai, setNovoNomePai] = useState(cliente.nome_pai);
    const [novoNomeMae, setNovoNomeMae] = useState(cliente.nome_mae);
    const [novoCPF, setNovoCPF] = useState(cliente.cpf);
    const [novoRG, setNovoRG] = useState(cliente.rg);
    const [novoOrgEmissor, setNovoOrgEmissor] = useState(cliente.org_emissor);
    const [novoNIT, setNovoNIT] = useState(cliente.nit);
    const [novoCTPS, setNovoCTPS] = useState(cliente.ctps);
    const [novoSerieCTPS, setNovoSerieCTPS] = useState(cliente.serie_ctps);
    const [novoEndereco, setNovoEndereco] = useState(cliente.endereco);
    const [novoCEP, setNovoCEP] = useState(cliente.cep);
    const [novoUF, setNovoUF] = useState(cliente.uf);
    const [novoCelular, setNovoCelular] = useState(cliente.celular);
    const [novoDataNascimento, setNovoDataNascimento] = useState(cliente.data_nascimento);
    

    const handleEditarClick = () => {
        setEdicao(true);
    };

    const handleSalvarClick = () => {
        const novosDados = {
          nome: novoNome,
          email: novoEmail,
          nacionalidade: novaNacionalidade,
          estado_civil: novoEstadoCivil,
          profissao: novaProfissao,
          nome_pai: novoNomePai,
          nome_mae: novoNomeMae,
          cpf: novoCPF,
          rg: novoRG,
          org_emissor: novoOrgEmissor,
          nit: novoNIT,
          ctps: novoCTPS,
          serie_ctps: novoSerieCTPS,
          endereco: novoEndereco,
          cep: novoCEP,
          uf: novoUF,
          celular: novoCelular,
          data_nascimento: novoDataNascimento,
        };
      
        onEditar(cliente.id, novosDados);
        setEdicao(false);
      };

    if (!cliente) {
        return null; // Retorna null se não houver cliente
    }

    return (
        <div className="detalhes-cliente-overlay">
          <div className="detalhes-cliente-card">
            {edicao ? (
              <form>
                <label>Nome:</label>
                <input
                  type="text"
                  value={novoNome}
                  onChange={(e) => setNovoNome(e.target.value)}
                />
                <label>Email:</label>
                <input
                    type="text"
                    value={novoEmail}
                    onChange={(e) => setNovoEmail(e.target.value)}
                />

                <label>Nacionalidade:</label>
                <input
                    type="text"
                    value={novaNacionalidade}
                    onChange={(e) => setNovaNacionalidade(e.target.value)}
                />

                <label>Estado Civil:</label>
                <input
                    type="text"
                    value={novoEstadoCivil}
                    onChange={(e) => setNovoEstadoCivil(e.target.value)}
                />

                <label>Profissão:</label>
                <input
                    type="text"
                    value={novaProfissao}
                    onChange={(e) => setNovaProfissao(e.target.value)}
                />

                <label>Nome do Pai:</label>
                <input
                    type="text"
                    value={novoNomePai}
                    onChange={(e) => setNovoNomePai(e.target.value)}
                />

                <label>Nome da Mãe:</label>
                <input
                    type="text"
                    value={novoNomeMae}
                    onChange={(e) => setNovoNomeMae(e.target.value)}
                />

                <label>CPF:</label>
                <input
                    type="text"
                    value={novoCPF}
                    onChange={(e) => setNovoCPF(e.target.value)}
                />

                <label>RG:</label>
                <input
                    type="text"
                    value={novoRG}
                    onChange={(e) => setNovoRG(e.target.value)}
                />

                <label>Órgão Emissor:</label>
                <input
                    type="text"
                    value={novoOrgEmissor}
                    onChange={(e) => setNovoOrgEmissor(e.target.value)}
                />

                <label>NIT:</label>
                <input
                    type="text"
                    value={novoNIT}
                    onChange={(e) => setNovoNIT(e.target.value)}
                />

                <label>CTPS:</label>
                <input
                    type="text"
                    value={novoCTPS}
                    onChange={(e) => setNovoCTPS(e.target.value)}
                />

                <label>Série CTPS:</label>
                <input
                    type="text"
                    value={novoSerieCTPS}
                    onChange={(e) => setNovoSerieCTPS(e.target.value)}
                />

                <label>Endereço:</label>
                <input
                    type="text"
                    value={novoEndereco}
                    onChange={(e) => setNovoEndereco(e.target.value)}
                />

                <label>CEP:</label>
                <input
                    type="text"
                    value={novoCEP}
                    onChange={(e) => setNovoCEP(e.target.value)}
                />

                <label>UF:</label>
                <input
                    type="text"
                    value={novoUF}
                    onChange={(e) => setNovoUF(e.target.value)}
                />

                <label>Celular:</label>
                <input
                    type="text"
                    value={novoCelular}
                    onChange={(e) => setNovoCelular(e.target.value)}
                />

                <label>Data de Nascimento:</label>
                <input
                    type="text"
                    value={novoDataNascimento}
                    onChange={(e) => setNovoDataNascimento(e.target.value)}
                />

                <button type="button" onClick={handleSalvarClick}>Salvar</button>
              </form>
            ) : (
              <>
                 <h2>{cliente.nome}</h2>
                <p>Email: {cliente.email}</p>
                <p>Celular: {cliente.celular}</p>
                <p>CPF: {cliente.cpf}</p>
                <p>Data de Nascimento: {cliente.data_nascimento}</p>
                <p>Endereço: {cliente.endereco}</p>
                <p>Nacionalidade: {cliente.nacionalidade}</p>
                <p>Estado Civil: {cliente.estado_civil}</p>
                <p>Profissão: {cliente.profissao}</p>
                <p>Nome do Pai: {cliente.nome_pai}</p>
                <p>Nome da Mãe: {cliente.nome_mae}</p>
                <p>RG: {cliente.rg}</p>
                <p>Órgão Emissor: {cliente.org_emissor}</p>
                <p>NIT: {cliente.nit}</p>
                <p>CTPS: {cliente.ctps}</p>
                <p>Série CTPS: {cliente.serie_ctps}</p>
                <p>CEP: {cliente.cep}</p>
                <p>UF: {cliente.uf}</p>


                <button onClick={handleEditarClick}>Editar</button>
                <button onClick={onClose}>Fechar</button>
                <FontAwesomeIcon icon={faTrash} onClick={() => onDelete(cliente.id)}/>
              </>
            )}
          </div>
        </div>
      );
    };

export default DetalhesCliente;
