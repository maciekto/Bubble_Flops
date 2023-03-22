import React from 'react'

// CSS styles
import './Header.css'

// ASSETS
import HeaderImage from '../../../assets/images/flops__beige.jpeg'

// COMPONENTS

function Header() {
  return (
    <div className='Header'>
        <div className='Header__Title'>
            Bubble Flops
        </div>
        <div className='Header__Description'>
            For your comfort and safety
        </div>
        <img className='Header__Image' src={HeaderImage} alt="Turn on images" />
    </div>
  )
}

export default Header