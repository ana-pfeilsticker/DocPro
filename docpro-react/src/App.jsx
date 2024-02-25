import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

// use npm start

function App(){
  const [dados, setDados] = useState([]);

  useEffect(() => {
      const fetchData = async () => { 
          try {
              const response = await axios.get('http://localhost:3030/dados'); // recebe os dados do nodejs
              setDados(response.data);
          } catch (error) {
              console.error('Erro ao obter dados da API', error);
          }
      };

      fetchData();
  }, []);

  const handleNameClick = (dados) => {
    console.log(dados.id)
  }

  const handleExcluir = async (id) => {
    try {
        await axios.delete(`http://localhost:3030/dados/${id}`); // envia o id a ser excluido para a função delete no nodejs
        
    } catch (error) {
        console.error('Erro ao excluir o dado', error);
    }
  };

  return (
      <div>
          <ul>
              {dados.map((item) => (
                  <div>
                      <li className='nomes' onClick={() => handleNameClick(item)}> 
                        {item.nome}
                      </li>
                  </div>
              ))}
          </ul>
      </div>
  );
};

export default App;
