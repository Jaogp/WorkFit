// src/context/UserContext.js

import React, { createContext, useState, useContext } from 'react';

// 1. Cria o Contexto (a "memória" em si)
const UserContext = createContext();

// 2. Cria o Provedor - um componente que vai gerenciar e fornecer os dados
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: 'Helena G. Marques',
    empresa: 'Log, Lab. Inteligência Digital',
    cargo: 'Desenvolvedor JAVA',
    celular: '+55 65 4002-8922',
    endereco: 'Rua São Miguel, 251-123 - Pico do Amor',
    avatar: 'https://i.imgur.com/gAYa2z3.png',
  });

  // Função para atualizar os dados do usuário
  const updateUserData = (newValues) => {
    setUserData(prevData => ({ ...prevData, ...newValues }));
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
};

// 3. Cria um "hook" personalizado para facilitar o uso do contexto em outras telas
export const useUser = () => {
  return useContext(UserContext);
};