import React from 'react'
import {Link} from 'react-router-dom'

import Logo from './../../../assets/images/header--rounded.png'

import './Nav.css'

export default function Nav() {
  return (
    <nav className='Nav'>
        <Link to={`/contact`} className='Nav__Contact'>
           Contact
        </Link>
        <Link to={`/home`}>
            <img className='Nav__Logo' src={Logo} alt="" width={80}/>
        </Link>
        
        <Link to={`/products`} className='Nav__Products'>
        Products
        </Link>
    </nav>
  )
}
