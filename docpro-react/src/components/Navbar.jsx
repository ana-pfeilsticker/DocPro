import React, { useState } from 'react';
import './Navbar.css';
import useAuth from '../hooks/useAuth';

const Navbar = () => {

    const { user } = useAuth()
    const handlebuttonClick = () => {
        window.location.href = 'http://localhost:3000/Comofunciona';
    }

    return (
        <header>

            <div className='navbar'>
                <div className='logo'>
                    <a className='texto-logo'>
                        <h2 className='texto-doc'>Doc</h2>
                        <h2 className='texto-pro'>Pro</h2>
                    </a>
                </div>

                <div className='navegacao'>
                    <a className='clientes' href='Clientes'>
                        Clientes
                    </a>
                    <a className='documentos' href='Documentos'>
                        Documentos
                    </a>
                </div>

                <div className='comofuncionacontainer'>
                    <button className='comofuncionabutton' onClick={handlebuttonClick}>Como funciona</button>
                    <div className='id'>Chave do advogado: {user.id}</div>
                </div>
                
            </div>
        </header>
    );
}

export default Navbar;