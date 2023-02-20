import React, {useState} from 'react'

import BasketProduct from './BasketProduct'

import '../Styles/Basket.css'
import ShoppingCart from '../assets/images//ShoppingCart.png'
export default function Basket(props) {
  const [BasketProductsIds, setBasketProductsIds] = useState([])
  const [BasketProductsComponents, setBasketProductsComponents] = useState([])
  const [FullPrice, setFullPrice] = useState(0)

  const {isBasketOpen, handleOpenBasket, handleCloseBasket, addedProdId, products} = props


  // Take care of adding the product to the basket
  if(addedProdId == null) {

  } else {

      if(BasketProductsIds.includes(addedProdId)) {

      } else {
          setBasketProductsIds([...BasketProductsIds, addedProdId])
           setBasketProductsComponents([...BasketProductsComponents, <BasketProduct key={addedProdId} id={addedProdId} product={products[addedProdId]} handleAmountChange={handleAmountChange} handleDeleteProduct={handleDeleteProduct}/>])
     
           setFullPrice((prevState) => {
             return Math.round((prevState + products[addedProdId].price.dolar) *100 ) /100
           })
      }   
  }

  function handleAmountChange(id, type) {
      products.forEach(product => {
        if(product.id == id) {
          if(type == 'add') {
            setFullPrice((prevState => {
              console.log(prevState)
              console.log(product.price)
              return Math.round((prevState + product.price.dolar)*100) /100
            }))
          } else if(type == 'substract') {
            setFullPrice((prevState => {
              console.log(prevState)
              return Math.round((prevState - product.price.dolar)*100) /100
            }))
          }
          
        } else {
        }
      })
  }

  function handleDeleteProduct(id) {
    setBasketProductsComponents(prevState => {
      let newState = prevState
      newState.forEach(component => {
        if(id == component.props.id) {
          console.log(indexOf(component))
        }
      })
      return prevState
    })
  }
  
  // Show basket if at least one product is added
  let basketDOM = undefined
  if(BasketProductsIds.length == 0) {
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
