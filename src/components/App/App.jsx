

import React, { useState, useEffect } from 'react'

// CSS STYLES
import './App.css'

// COMPONENTS
import Footer from './Footer/Footer'
import Nav from './Nav/Nav'
import Basket from '../HomePage/Basket/Basket'

// DATA
import products from '../../assets/data/products.json'

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

  // STATES
  const [addedProdId, setaddedProdId] = useState(null)
  //let windowWidth = window.innerWidth
  // window.addEventListener('resize', () => {
  //     windowWidth = window.innerWidth
  // })

  function addToBasket(id) {
      setaddedProdId(id)
      
      // if(windowWidth < 1000) {
      //     setTimeout(() => {
      //         setIsBasketOpen(true)
      //     }, 400);
      // } else {
      //     setIsBasketOpen(true)
      // }   
    }



  return (
    <div className="App">
      <Nav />
      <Outlet context={[addToBasket, products]}/>
      <Footer />
      <Basket products={products} addedProdId={addedProdId}/>
    </div>
  )
}

export default App
