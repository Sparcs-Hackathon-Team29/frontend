import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [myselectResponse, setMyselectResponse] = useState(null);
  const login = (username) => {
    setIsLoggedIn(username); // 로그인
  };

  const logout = () => {
    setIsLoggedIn(false);
  };
  const setMySelect = (data) => {
    setMyselectResponse(data);
  };
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, logout, setMySelect, myselectResponse }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
