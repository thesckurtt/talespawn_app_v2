import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Game from './pages/Game'

const App = () => {
  useEffect(()=>{
    document.addEventListener('keydown', (e) => {
      if(e.key === "F11"){
        window.electronActionsAPI.fullscreen()
      }
      if(e.key === "F12"){
        window.electronActionsAPI.devTools()
      }
    })
  })
  return (
    <Router basename='/'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </Router>
  )
}

export default App
