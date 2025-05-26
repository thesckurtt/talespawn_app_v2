import { createContext, useContext, useState } from "react";
import { Navigate } from "react-router-dom";
const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  })

  function protectedRoute() {
    if (!isLoggedIn) {
      return <Navigate to={'/login'} replace />
    }
  }

  async function login({ email, password }) {
    const data = {
      email: email,
      password: password
    }
    if (window.electronAuthAPI) {
      const response = await window.electronAuthAPI.login(data)
      if (!response.error && response.token && response.user) {
        // console.log(response.token)
        setUser(response.user)
        setToken(response.token)
        setIsLoggedIn(true);
        localStorage.setItem('user', response.user);
        localStorage.setItem('authToken', response.token)
        localStorage.setItem('isLoggedIn', 'true');
      }
      return response
    }
    return { error: true }
  }

  async function register({ name, email, password, nickname, character_id }) {
    const data = {
      name: name,
      email: email,
      nickname: nickname,
      password: password,
      character_id: character_id
    }
    if (window.electronAuthAPI) {
      const response = await window.electronAuthAPI.register(data)
      if (!response.error) {
        return { error: false }
      }
    }
    return { error: true }
  }

  function logout() {
    setUser(null);
    setToken(null);
    setIsLoggedIn(false);
    localStorage.removeItem('authToken');
    localStorage.removeItem('isLoggedIn');
  }

  return <AuthContext.Provider value={{ login, register, logout, isLoggedIn, protectedRoute }}>
    {children}
  </AuthContext.Provider>
}
export const useAuth = () => {
  return useContext(AuthContext)
}