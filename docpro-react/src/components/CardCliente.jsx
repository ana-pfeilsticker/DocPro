import './CardCliente.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



const CardCliente = ({cliente, onClick, onDelete}) => {


    return (
        <div className="card-cliente1">
          <div className="card-header1">
            <div className="conteudo-cliente1" onClick={() => onClick(cliente)}>
              <h3 className='nome-cliente'>{cliente.nome}</h3>
            </div>
            <div className="lixeira-card1" onClick={() => onDelete(cliente.id)}>
              <FontAwesomeIcon className='lixeira1' icon={faTrash} />
            </div>
          </div>
        </div>
      );
      
}


export default CardCliente