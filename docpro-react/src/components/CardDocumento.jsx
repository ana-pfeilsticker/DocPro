import './CardDocumento.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';



const CardDocumento = ({documento, onDelete, onEdit}) => {

    return (
        <div className="card-cliente">
          <div className="card-header">
            <div className="conteudo-card">
              <h3>{documento.nome}</h3>
              <p>{documento.tags}</p>
            </div>
            <div className="lixeira-container" >
              <FontAwesomeIcon icon={faTrash} onClick={() => onDelete(documento.id)} />
              <FontAwesomeIcon icon={faPencil} onClick={() => onEdit(documento)} />
            </div>
          </div>
        </div>
      )
      
}


export default CardDocumento