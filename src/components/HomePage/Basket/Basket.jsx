import React, {useState} from 'react'

// CSS styles
import './Basket.css'

// ASSETS
import ShoppingCart from '../../../assets/images//ShoppingCart.png'

// COMPONENTS
import BasketProduct from '../BasketProduct/BasketProduct'



export default function Basket(props) {
  //STATES
  const [BasketProductProperties, setBasketProductProperties] = useState([])
  const [BasketProductsComponents, setBasketProductsComponents] = useState([])
  const [FullPrice, setFullPrice] = useState(0)

  //PROPS
  const {isBasketOpen, handleOpenBasket, handleCloseBasket, addedProdId, products} = props


  // Take care of adding the product to the basket
  if(addedProdId == null) {
    // Do nothing
  } else {
      let arrayOfIds = BasketProductProperties.map(id => id.id)
      if(arrayOfIds.includes(addedProdId)) {

      } else {
          setBasketProductProperties([...BasketProductProperties, {
            id: addedProdId,
            amount: 1
          }])
           setBasketProductsComponents([...BasketProductsComponents, <BasketProduct key={addedProdId} id={addedProdId} product={products[addedProdId]} handleAmountChange={handleAmountChange} />])
     
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
  
  // Show basket if at least one product is added
  let basketDOM = undefined
  if(BasketProductProperties.length == 0) {
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
