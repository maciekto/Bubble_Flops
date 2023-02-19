import React, {useState} from 'react'

import BasketProduct from './BasketProduct'

import '../Styles/Basket.css'
import ShoppingCart from '../assets/images//ShoppingCart.png'
export default function Basket(props) {
  const [addedProducts, setAddedProducts] = useState([])
  const [BasketProducts, setBasketProducts] = useState([])

  const {isBasketOpen, handleOpenBasket, handleCloseBasket, addedProdId, products} = props


  // Take care of adding the product to the basket
  if(addedProdId == null) {
  } else {
    if(addedProducts.includes(addedProdId)) {

    } else {
      setAddedProducts([...addedProducts, addedProdId])
    }
  }

  
  // Show basket if at least one product is added
  let basketDOM = undefined
  if(addedProducts.length == 0) {
    basketDOM = null
  } else {
    basketDOM = 
    
    <div className={`Basket ${isBasketOpen == false ? 'Basket--Close' : 'Basket--Open'}`} onClick={handleOpenBasket}>
      {isBasketOpen == false ? 
          <img src={ShoppingCart} alt="Shopping Cart" className={'Basket__ShoppingCartIcon'}/>
      :
      <>
        <div className='Basket__Exit' onClick={handleCloseBasket}>
            &#x2715;
        </div>
        {BasketProducts}
      </>
      }
    </div>
  }

  // Render products in the basket
  products.forEach(element => {
    console.log(element.id)
  });


  return (
    basketDOM
  )
}
