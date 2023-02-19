import React, {useState} from 'react'

import '../Styles/Basket.css'
import ShoppingCart from '../assets/images//ShoppingCart.png'
export default function Basket(props) {
  const [addedProducts, setAddedProducts] = useState([])

  const {isBasketOpen, handleOpenBasket, handleCloseBasket, addedProdId} = props

  if(addedProdId == null) {

  } else {
    setAddedProducts([...addedProducts, addedProdId])
  }
  console.log(addedProducts)

  return (
    <div className={`Basket ${isBasketOpen == false ? 'Basket--Close' : 'Basket--Open'}`} onClick={handleOpenBasket}>
        {isBasketOpen == false ? 
            <img src={ShoppingCart} alt="Shopping Cart" className={'Basket__ShoppingCartIcon'}/>
        :
        <div className='Basket__Exit' onClick={handleCloseBasket}>
            &#x2715;
        </div>
        }
        
    </div>
  )
}
