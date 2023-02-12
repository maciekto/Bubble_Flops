import React, {useState} from 'react'

import '../Styles/Basket.css'

export default function Basket(props) {
    const {isBasketOpen, handleOpenBasket, handleCloseBasket} = props
    console.log(isBasketOpen)
  return (
    <div className={`Basket ${isBasketOpen == false ? '' : 'Basket__Open'}`} onClick={handleOpenBasket}>
        {isBasketOpen == false ? 
            <div>Close Basket</div> 
        :
        <div className='Basket__Close' onClick={handleCloseBasket}>
            &#x2715;
        </div>}
        
    </div>
  )
}
