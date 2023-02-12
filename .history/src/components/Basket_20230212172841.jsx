import React, {useState} from 'react'

import '../Styles/Basket.css'

export default function Basket(props) {
    const {isBasketOpen, handleOpenBasket} = props
  return (
    <div className={`Basket ${isBasketOpen == false ? '' : 'Basket__Open'}`} onClick={handleOpenBasket}>
        BASKET
    </div>
  )
}
