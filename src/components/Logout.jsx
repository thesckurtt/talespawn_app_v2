import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';

const Logout = () => {
  const { logout } = useAuth();
  logout()

  return (
    <Navigate to={'/'} replace />
  )
}

export default Logout
