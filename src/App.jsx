import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <Router basename='/'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<h1>Hello /</h1>} />
        <Route path='/register' element={<h1>Hello /</h1>} />
      </Routes>
    </Router>
  )
}

export default App
