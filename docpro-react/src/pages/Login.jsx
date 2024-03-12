import React, { useState } from 'react';
import './Login.css'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const { login } = useAuth()
    const navigate = useNavigate()
    const handleLogin = async (event) => {
        event.preventDefault()
        if (!email | !senha){
            console.log("Preencha todos os campos")
            return
        }
        const res = await login(email, senha)

        if (res) {
            console.log(res)
            return
        }
        navigate("/Clientes")
    }
    return (
        <div className="overlay">
          <form onSubmit={handleLogin}>

                <div className='email'>
                    <label htmlFor='email-login'>Email</label>
                    <input type='email' placeholder='Insira o seu email' className='form-control'
                    onChange={e => setEmail(e.target.value)}/>
                </div>

                <div className='senha-login'>
                    <label htmlFor='senha'>Senha</label>
                    <input type='senha' placeholder='Insira sua senha' className='form-control'
                    onChange={e => setSenha(e.target.value)}/>
                </div>

                <button className='login-button'>Login</button>

            </form>
        </div>  
    )
}
export default Login;