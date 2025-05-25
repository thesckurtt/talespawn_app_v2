import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  function login({ email, password }) {
    const data = {
      email: email,
      password: password
    }
    if (window.electronAuthAPI) {
      const response = window.electronAuthAPI.login(data)
      if (!response.error && response.token && response.user) {
        setUser(response.user)
        setToken(response.token)
      }
      return response
    }
    return { error: true }
  }
  return <AuthContext.Provider value={{ login }}>
    {children}
  </AuthContext.Provider>
}
export const useAuth = () => {
  return useContext(AuthContext)
}