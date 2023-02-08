import React from 'react'
import './../Styles/Header.css'
import HeaderImage from './../assets/flops__beige.jpeg'
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