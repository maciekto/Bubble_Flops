import React, {useState} from 'react'

import BasketProduct from './BasketProduct'

import '../Styles/Basket.css'
import ShoppingCart from '../assets/images//ShoppingCart.png'
export default function Basket(props) {
  const [addedProductsObject, setAddedProductsObject] = useState([])
  const [BasketProductsComponents, setBasketProductsComponents] = useState([])
  const [FullPrice, setFullPrice] = useState(0)

  const {isBasketOpen, handleOpenBasket, handleCloseBasket, addedProdId, products} = props

  countPrice = () =>  {
    addedProductsObject.forEach(product =>{
      console.log(product.price.dolar)
    })
  }

  // Take care of adding the product to the basket
  if(addedProdId == null) {
  } else {
    if(addedProductsObject.includes(addedProdId)) {

    } else {
      setAddedProductsObject([...addedProductsObject, addedProdId])
      setBasketProductsComponents([...BasketProductsComponents, <BasketProduct key={addedProdId} product={products[addedProdId]} />])
      countPrice()
    }
  }

 
  
  // Show basket if at least one product is added
  let basketDOM = undefined
  if(addedProductsObject.length == 0) {
    basketDOM = null
  } else {
    basketDOM = 
    
    <div className={`Basket ${isBasketOpen == false ? 'Basket--Close' : 'Basket--Open'}`} onClick={handleOpenBasket}>

      {isBasketOpen == false 

      ? <img src={ShoppingCart} alt="Shopping Cart" className={'Basket__ShoppingCartIcon'}/>
      : <>
          <div className='Basket__Exit' onClick={handleCloseBasket}>
              &#x2715;
          </div>
          <div className='Basket__AllProducts'>
            {BasketProductsComponents}
          </div>
          <div className='Basket__FullPrice'>
            Price: {FullPrice}$
          </div>
        </>
      }
    </div>
  }

  // Render products in the basket

  


  return (
    basketDOM
  )
}
