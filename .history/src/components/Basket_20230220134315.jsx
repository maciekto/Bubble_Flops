import React, {useState} from 'react'

import BasketProduct from './BasketProduct'

import '../Styles/Basket.css'
import ShoppingCart from '../assets/images//ShoppingCart.png'
export default function Basket(props) {
  const [BasketProductsProperties, setBasketProductsProperties] = useState([])
  const [BasketProductsComponents, setBasketProductsComponents] = useState([])
  const [FullPrice, setFullPrice] = useState(0)

  const {isBasketOpen, handleOpenBasket, handleCloseBasket, addedProdId, products} = props


  // Take care of adding the product to the basket
  if(addedProdId == null) {

  } else {

      let arrayOfId = BasketProductsProperties.map(id => id.id)
      console.log(arrayOfId)
      if(arrayOfId.includes(addedProdId)) {

      } else {
          console.log('check check 4')
          setBasketProductsProperties([...BasketProductsProperties, {
            id: addedProdId,
            amount: 1 
           }])
           setBasketProductsComponents([...BasketProductsComponents, <BasketProduct key={addedProdId} id={addedProdId} product={products[addedProdId]} handleAmountChange={handleAmountChange}/>])
     
           setFullPrice((prevState) => {
             return prevState + products[addedProdId].price.dolar
           })
      }   
  }

  function handleAmountChange(element) {
    console.log(id, amount)
  }
 
  
  // Show basket if at least one product is added
  let basketDOM = undefined
  if(BasketProductsProperties.length == 0) {
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
