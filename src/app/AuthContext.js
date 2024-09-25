/* eslint-disable quotes */
import { createContext, useState, useContext } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeButton, setActiveButton] = useState("mapa");


  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setActiveButton("mapa");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, activeButton, setActiveButton }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);