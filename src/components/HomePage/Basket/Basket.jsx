import React, {useState, useEffect} from 'react'

// CSS styles
import './Basket.css'

// ASSETS
import ShoppingCart from './../../../assets/images/shoppingCart.png'

// COMPONENTS
import BasketProduct from '../BasketProduct/BasketProduct'



export default function Basket(props) {
  //STATES
  const [ProductsAddedToBasket, setProductsAddedToBasket] = useState([])
  const [BasketProductsComponents, setBasketProductsComponents] = useState([])
  const [FullPrice, setFullPrice] = useState(0)

  const [isBasketOpen, setIsBasketOpen] = useState(false)

  //PROPS
  const {addedProdId, products} = props

  
  window.addEventListener('scroll', () => {
      handleCloseBasket()
  })

  function handleCloseBasket(e) {
    if(e == undefined) {
      setIsBasketOpen(false)
    } else {
      e.stopPropagation()
      setIsBasketOpen(false)
    }
      
  }
  function handleOpenBasket(e) {
    e.stopPropagation()
    setIsBasketOpen(true)
  }

  useEffect(() => {
    console.log(ProductsAddedToBasket)
    // If there is any error do not add produs with id null
    if(addedProdId == null || addedProdId == undefined) {
      console.error(`Product does not exist: ${addedProdId}`)
    } else {

      // Take the ids from the object and check if the product is already added to the basket
      let AddedToBasketIDs = ProductsAddedToBasket.map(id => id.id)
      if(AddedToBasketIDs.includes(addedProdId)) {
        // Product is already in the basket
        console.error(`Product already added to basket: ${addedProdId}`)
      } else {
        // Product does not exist in basket

        // Add BasketProduct component to basket
        setBasketProductsComponents([...BasketProductsComponents, <BasketProduct key={addedProdId} id={addedProdId} product={products[addedProdId]} handleAmountChange={handleAmountChange} amount={1} />])

        // Setting new full prive
        setFullPrice((prevState) => {
          return Math.round((prevState + products[addedProdId].price.dolar) *100 ) /100
        })

        // Update ProductAddedToBasket object with added product
        setProductsAddedToBasket([...ProductsAddedToBasket, {
          id: addedProdId,
          amount: 1,
          price: products[addedProdId].price
        }])
      }
    }
  }, [addedProdId])

  

 

  const handleAmountChange = (id, type) => {
    console.log('siemano')
      console.log(ProductsAddedToBasket)
      // products.forEach(product => {
      //   if(product.id == id) {
      //     if(type == 'add') {
      //       setFullPrice((prevState => {
      //         console.log(prevState)
      //         console.log(product.price)
      //         return Math.round((prevState + product.price.dolar)*100) /100
      //       }))
      //     } else if(type == 'substract') {
      //       setFullPrice((prevState => {
      //         console.log(prevState)
      //         return Math.round((prevState - product.price.dolar)*100) /100
      //       }))
      //     }
          
      //   } else {
      //   }
      // })
  }
  
  // Show basket if at least one product is added
  let basketDOM = undefined
  if(ProductsAddedToBasket.length == 0) {
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
