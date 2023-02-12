import React, {useState} from 'react'

import '../Styles/Basket.css'

export default function Basket(props) {
    const {isBasketOpen, handleOpenBasket} = props
  return (
    <div className={`Basket ${isBasketOpen == false ? '' : 'Basket__Open'}`} onClick={handleOpenBasket}>
        {isBasketOpen == false ? 
            <div>Close Basket</div> 
        :
        <div className='Basket__Close'>
            &#x2715;
        </div>}
        
    </div>
  )
}
