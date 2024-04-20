import React, { useState, createContext } from 'react';
import { loginRequest } from './athentication.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = async (email, password) => {
    setIsLoading(true);
    try {
      const u = await loginRequest(email, password);
      setUser(u);
      setIsLoading(false);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{ isAuthenticated: !!user, user, isLoading, error, onLogin }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
