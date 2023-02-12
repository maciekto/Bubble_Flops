import React, {useState} from 'react'

import '../Styles/Basket.css'

export default function Basket(props) {
    const [isBasketOpen, setIsBasketOpen] = useState(false)


    function handleOpenBasket() {
        setIsBasketOpen(true)
        console.log('sieamno')
    }
  
    function handleCloseBasket() {
        setIsBasketOpen(false)
    }

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
