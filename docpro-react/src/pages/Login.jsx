import React, { useState } from 'react';
import './Login.css'
import axios from 'axios';

function Login() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [userid, setUserid] = useState(-1);

    const handleSubmit = async (event) => {

        event.preventDefault()
        try {
            const response = await axios.post("http://localhost:3030/login", {email, senha})
            if (response.data.length > 0){
                const userId = response.data[0].id;
                localStorage.setItem('userId', userId); // Armazena o ID do usuário no local storage
                window.location.href = `/clientes?userid=${userId}`;
            }
            
            else {
                console.log("Erro ao logar")
            }
        } catch (error) {
            console.error("Erro ao fazer o login "+error)
        }
    }

    return (
        <div className="overlay">
          <form onSubmit={handleSubmit}>

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