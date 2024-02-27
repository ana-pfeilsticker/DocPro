import { Link } from "react-router-dom";
import './CardCliente.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



const CardCliente = ({cliente, onClick, onDelete}) => {


    return (
        <div className="card-cliente">
          <div className="card-header">
            <div className="conteudo-card" onClick={() => onClick(cliente)}>
              <h3>{cliente.nome}</h3>
            </div>
            <div className="lixeira-container" onClick={() => onDelete(cliente.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </div>
          </div>
        </div>
      );
      
}


export default CardCliente