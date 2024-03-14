import './CardCliente.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



const CardCliente = ({cliente, onClick, onDelete}) => {


    return (
        <div className="card-cliente">
          <div className="card-header">
            <div className="conteudo-cliente" onClick={() => onClick(cliente)}>
              <h3 className='nome-cliente'>{cliente.nome}</h3>
            </div>
            <div className="lixeira-card" onClick={() => onDelete(cliente.id)}>
              <FontAwesomeIcon className='lixeira' icon={faTrash} />
            </div>
          </div>
        </div>
      );
      
}


export default CardCliente