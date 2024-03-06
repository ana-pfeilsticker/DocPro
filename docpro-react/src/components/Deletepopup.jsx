import './Deletepopup.css';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Deletepopup = ({onConfirm, onCancel}) => {

    return (
        <div className="overlay">
          <div className="card">
            <div className="conteudo-card">
            <div className='icone'><FontAwesomeIcon icon={faCircleExclamation} /></div>
              <div className="textos">
                <h3>Deletar</h3>
                <p1>Tem certeza que deseja deletar?</p1>
                <p2>Esta ação não pode ser desfeita.</p2>
              </div>
              <div className="buttons-container">
                <button className="button-deletar" onClick={onConfirm}>Deletar</button>
                <button className="button-cancelar" onClick={onCancel}>Cancelar</button>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Deletepopup