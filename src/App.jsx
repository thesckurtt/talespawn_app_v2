import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'

const App = () => {
  return (
    <Router basename='/'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<h1>login /</h1>} />
        <Route path='/register' element={<Register />} />
        <Route path='/game' element={<h1>game /</h1>} />
      </Routes>
    </Router>
  )
}

export default App
