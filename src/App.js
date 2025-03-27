import React from 'react'
import Register from './pages/Register'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import { BrowserRouter as Router,Route,Routes,Navigate } from "react-router-dom"
import './App.css'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Redirected to Login if not logged in */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}
   
export default App
