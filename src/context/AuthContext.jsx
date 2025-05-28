import { createContext, useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('user'));
    } catch (error) {
      console.log(error)
      return null
    }
  })
  const [token, setToken] = useState(() => {
    return localStorage.getItem('token');
  })
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
        // localStorage.setItem('user', JSON.stringify(response.user));
        // localStorage.setItem('authToken', response.token)
        // localStorage.setItem('isLoggedIn', 'true');
      }
      return response
    }
    return { error: true }
  }

  async function register({ name, email, password, nickname, character_id }) {
    if (!window.electronAuthAPI) {
      return { error: true, message: "Electron Auth API not Loaded!" }
    }

    try {
      const response = await window.electronAuthAPI.register({ name, email, password, nickname, character_id })
      if (!response.error) {
        return { error: false }
      }
      return { error: true, message: response.message }
    } catch (error) {
      return { error: true, message: `[AuthContext]: ${error.message || "Unexpected error"}` }

    }
  }

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      localStorage.removeItem('user')
    }
  }, [user])

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token)
    } else {
      localStorage.removeItem('token')
    }
  }, [token])

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem('isLoggedIn', 'true')
    } else {
      localStorage.removeItem('isLoggedIn')
    }
  }, [isLoggedIn])

  function logout() {
    setUser(null);
    setToken(null);
    setIsLoggedIn(false);
    // localStorage.removeItem('authToken');
    // localStorage.removeItem('isLoggedIn');
  }

  return <AuthContext.Provider value={{ login, register, logout, isLoggedIn, protectedRoute, user, token }}>
    {children}
  </AuthContext.Provider>
}
export const useAuth = () => {
  return useContext(AuthContext)
}