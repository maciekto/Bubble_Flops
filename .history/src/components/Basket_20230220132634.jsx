import React, {useState} from 'react'

import BasketProduct from './BasketProduct'

import '../Styles/Basket.css'
import ShoppingCart from '../assets/images//ShoppingCart.png'
export default function Basket(props) {
  const [addedProductsIds, setaddedProductsIds] = useState([])
  const [BasketProductsComponents, setBasketProductsComponents] = useState([])
  const [FullPrice, setFullPrice] = useState(0)

  const {isBasketOpen, handleOpenBasket, handleCloseBasket, addedProdId, products} = props


  // Take care of adding the product to the basket
  if(addedProdId == null) {

  } else {

      let arrayOfId = addedProductsIds.map(id => id.id)
      console.log(arrayOfId)
      if(arrayOfId.includes(addedProdId)) {

      } else {
          console.log('check check 4')
          setaddedProductsIds([...addedProductsIds, {
            id: addedProdId,
            amount: 1 
           }])
           setBasketProductsComponents([...BasketProductsComponents, <BasketProduct key={addedProdId} product={products[addedProdId]} count={addedProductsIds[addedProdId].amount == undefined ? undefined : addedProductsIds[addedProdId].amount}/>])
     
           setFullPrice((prevState) => {
             return prevState + products[addedProdId].price.dolar
           })
      }

          
  }
 
  
  // Show basket if at least one product is added
  let basketDOM = undefined
  if(addedProductsIds.length == 0) {
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
