

import React, { useState, useEffect } from 'react'

// CSS STYLES
import './App.css'

// COMPONENTS
import Footer from './Footer/Footer'
import Nav from './Nav/Nav'

import {
  Outlet,
  useNavigate
} from "react-router-dom"



function App() {
  const navigate = useNavigate()

  useEffect(() => {
    if(window.location.pathname == '/') {
      navigate("/home")
    }
   
  })

  return (
    <div className="App">
      <Nav />
      <Outlet />
      <Footer />
      
    </div>
  )
}

export default App
