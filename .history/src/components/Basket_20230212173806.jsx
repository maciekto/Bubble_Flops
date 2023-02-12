import React, {useState} from 'react'

import '../Styles/Basket.css'

export default function Basket(props) {
    const {isBasketOpen, handleOpenBasket, handleCloseBasket} = props

    console.log(isBasketOpen)
    const [IsBasketOpen, setIsBasketOpen] = useState(isBasketOpen)
    if(isBasketOpen !== IsBasketOpen) { 
        setIsBasketOpen(isBasketOpen)
    }

    console.log(isBasketOpen)
  return (
    <div className={`Basket ${IsBasketOpen == false ? '' : 'Basket__Open'}`} onClick={handleOpenBasket}>
        {IsBasketOpen == false ? 
            <div>Close Basket</div> 
        :
        <div className='Basket__Close' onClick={handleCloseBasket}>
            &#x2715;
        </div>}
        
    </div>
  )
}
