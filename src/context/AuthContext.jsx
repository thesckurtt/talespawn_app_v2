import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  

  return <AuthContext.Provider>
    {children}
  </AuthContext.Provider>
}
export const useAuth = () => {
  return useContext(AuthContext)
}