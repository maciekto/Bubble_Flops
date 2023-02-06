import React from 'react'
import './../Styles/Header.css'
import HeaderImage from './../assets/header.jpeg'
function Header() {
  return (
    <div className='Header'>
        <div className='Header__Title'>
            Bubble Flops
        </div>
        <div className='Header__Description'>
            For your comfort and safety
        </div>
        <img src={HeaderImage} alt="" />
    </div>
  )
}

export default Header