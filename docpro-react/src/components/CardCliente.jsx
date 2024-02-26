import { Link } from "react-router-dom";
import './CardCliente.css'


const CardCliente = ({cliente, onClick}) => {


    return(
        <div className="card-cliente" onClick = {()=> onClick(cliente)}>
            
            <h3>{cliente.nome}</h3>

        </div>

    )
}


export default CardCliente