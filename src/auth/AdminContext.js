import React, { createContext, useContext, useEffect, useState } from 'react';
import { loginAdmin } from '../services/api';

const AdminContext = createContext({ isAdmin: false, token: null, login: async () => false, logout: () => {} });

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem('ars_admin_token');
    if (savedToken) {
      setToken(savedToken);
      setIsAdmin(true);
    }
  }, []);

  const login = async (username, password) => {
    try {
      const { token: t } = await loginAdmin(username, password);
      setToken(t);
      setIsAdmin(true);
      localStorage.setItem('ars_admin_token', t);
      return true;
    } catch (e) {
      return false;
    }
  };

  const logout = () => {
    setIsAdmin(false);
    setToken(null);
    localStorage.removeItem('ars_admin_token');
  };

  return (
    <AdminContext.Provider value={{ isAdmin, token, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);