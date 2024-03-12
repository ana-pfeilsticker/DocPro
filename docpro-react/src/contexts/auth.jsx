import { createContext, useState, useEffect } from "react";
import axios from 'axios';

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
                    const id = finduser.id
                    sessionStorage.setItem("user_token", JSON.stringify({ id }));
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
    return <AuthContext.Provider value={{ user, signed: !!user, login }} >{children}</AuthContext.Provider>
}