import React, {useState} from 'react'

import '../Styles/Basket.css'

export default function Basket(props) {
    const [isBasketOpen, setIsBasketOpen] = useState(false)

  return (
    <div className={`Basket ${isBasketOpen == false ? '' : 'Basket__Open'}`} onClick={handleOpenBasket}>
        BASKET
    </div>
  )
}
