import './CardDocumento.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';



const CardDocumento = ({documento, onDelete, onEdit}) => {

    return (
        <div className="card-documento1">
          <div className="card-headerdocumento">
            <div className="conteudo-doc">
              <h3 className='titulo'>{documento.nome}</h3>
              <p className='tags'>Tags: {documento.tags}</p>
            </div>

          </div>
          <div class="botoes">
          <button class="botaoedit" onClick={() => onEdit(documento)}>
            <FontAwesomeIcon  className='pencil' icon={faPencil} />
            <div class="ComoFunciona">Editar</div>
          </button>
          <button class="botaodelete" onClick={() => onDelete(documento.id)}>
            <FontAwesomeIcon  className='lixeira' icon={faTrash} />
            <p class="ComoFunciona">Deletar</p>
          </button>
        </div>
      </div>
      )
      
}


export default CardDocumento


