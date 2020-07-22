import React, { useState, useEffect, createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('userToken' , null);

  const saveUser = (user) => {
    setUser(user);
  };

  return <UserContext.Provider value={{ user, saveUser }}>{children}</UserContext.Provider>;
};

export default UserProvider;
