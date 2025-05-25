import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  })

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

  function logout() {
    setUser(null);
    setToken(null);
    setIsLoggedIn(false);
    localStorage.removeItem('authToken');
    localStorage.removeItem('isLoggedIn');
  }

  return <AuthContext.Provider value={{ login, logout }}>
    {children}
  </AuthContext.Provider>
}
export const useAuth = () => {
  return useContext(AuthContext)
}