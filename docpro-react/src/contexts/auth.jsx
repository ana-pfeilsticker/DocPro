import { createContext, useState, useEffect } from "react";
import axios from 'axios';
import cryptoRandomString  from 'crypto-random-string';

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const userToken = sessionStorage.getItem("user_token");
        return userToken ? JSON.parse(userToken) : null;
    });

    const login = async (email, senha) => {
        try {
            const userStorage = await axios.get("http://localhost:3030/login");
            const users = userStorage.data;
            const finduser = users.find(user => user.email === email);

            if (finduser) {
                if (finduser.email === email && finduser.senha === senha) {
                    const token = cryptoRandomString({ length: 256, type: 'base64' });
                    sessionStorage.setItem("user_token", JSON.stringify({ email, token }));
                    setUser(finduser);
                } else {
                    return "E-mail ou senha incorretos";
                }
            } else {
                return "Usuario não cadastrado";
            }
        } catch (error) {
            console.error("Erro durante o login:", error);
        }
    };

    

    // useEffect(() => {
    //     const handleStorageEvent = (event) => {
    //       if (event.key === "user_token") {
    //         const newUser = JSON.parse(event.newValue);
    //         setUser(newUser);
    //       }
    //     };
    
    //     // Adiciona um ouvinte para o evento de armazenamento
    //     window.addEventListener("storage", handleStorageEvent);
    
    //     return () => {
    //       // Remove o ouvinte quando o componente é desmontado
    //       window.removeEventListener("storage", handleStorageEvent);
    //     };
    //   }, []);

    return <AuthContext.Provider value={{ user, signed: !!user, login }} >{children}</AuthContext.Provider>
}
