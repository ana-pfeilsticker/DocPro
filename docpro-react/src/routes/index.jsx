import { Fragment  } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clientes from "../pages/Clientes"
import Documentos from "../pages/Documentos"
import Login from "../pages/Login"
import Comofunciona from "../pages/Comofunciona"
import useAuth from "../hooks/useAuth";
import Navbar from "../components/Navbar";

const Private = ({ Item }) => {
    const { signed } = useAuth()
    return signed > 0 ? <Item/> : <Login/>
}

const RoutesApp = () => {
    const { signed } = useAuth();
    return (
        <BrowserRouter>
            <Fragment>
            {(window.location.pathname === "/Clientes" || 
            window.location.pathname === "/Documentos" || 
            window.location.pathname === "/Comofunciona") &&
            signed && <Navbar />}
                <Routes>
                
                    <Route exact path="/Clientes" element={<Private Item={Clientes}/>} />
                    <Route exact path="/Documentos" element={<Private Item={Documentos}/>} />
                    <Route exact path="/Comofunciona" element={<Private Item={Comofunciona}/>} />
                    <Route path="/" element={<Login/>} />
                    <Route path="*" element={<Login/>} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
}

export default RoutesApp