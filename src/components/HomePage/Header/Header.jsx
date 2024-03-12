import React from 'react'

// CSS styles
import './Header.css'

// ASSETS
import HeaderImage from '../../../assets/images/flops__beige.jpeg'

// COMPONENTS

function Header() {
  return (
    <header className='Header'>
        <h1 className='Header__Title'>
            Bubble Flops
        </h1>
        <h2 className='Header__Description'>
            For your comfort and safety
        </h2>
        <img className='Header__Image' src={HeaderImage} alt="Turn on images" />
    </header>
  )
}

export default Header