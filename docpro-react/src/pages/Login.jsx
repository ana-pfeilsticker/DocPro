import React, { useState } from 'react';
import './Login.css'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState('')
    const { login } = useAuth()
    const navigate = useNavigate()
    const handleLogin = async (event) => {
        event.preventDefault()
        const res = await login(email, senha)
        if (!email | !senha){
            setErro("Preencha todos os campos")
        }
        else if (res) {
            setErro(res)
        }
        else {
            navigate("/Clientes")
        }
    }
    return (
        <div className="overlay">
            <div className='rotate'></div>
            <div className='card1'>
                <form onSubmit={handleLogin} className='form'>
                    <div className='logo1'>
                        <a className='texto-logo1'>
                            <h2 className='texto-doc1'>Doc</h2>
                            <h2 className='texto-pro1'>Pro</h2>
                        </a>
                    </div>
                    <div className='inputs'>
                        <div className='email'>
                            <label className='email-login'>E-mail</label>
                            <input placeholder='Insira o seu e-mail' className='form-control'
                            onChange={e => setEmail(e.target.value)}/>
                        </div>

                        <div className='senha-login'>
                            <label className='senha'>Senha</label>
                            <input type='password' placeholder='Insira sua senha' className='form-control'
                            onChange={e => setSenha(e.target.value)}/>
                        </div>
                    </div>
                    <label className='erro'>{erro}</label>
                    <button className='login-button'>Login</button>
                </form>
            </div>
        </div>  
    )
}
export default Login;