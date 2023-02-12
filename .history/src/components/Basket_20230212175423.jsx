import React, {useState} from 'react'

import '../Styles/Basket.css'
import ShoppingCart from '../assets/ShoppingCart.png'
export default function Basket(props) {
    const {isBasketOpen, handleOpenBasket, handleCloseBasket} = props

  return (
    <div className={`Basket ${isBasketOpen == false ? 'Basket__Close' : 'Basket__Open'}`} onClick={handleOpenBasket}>
        {isBasketOpen == false ? 
            <img src={ShoppingCart} alt="Shopping Cart" className={`Basket__ShoppingCartIcon ${isBasketOpen == false ? 'Basket__ShoppingCartIcon--closeBasket' : ''}`}/>
        :
        <div className='Basket__Exit' onClick={handleCloseBasket}>
            &#x2715;
        </div>}
        
    </div>
  )
}
