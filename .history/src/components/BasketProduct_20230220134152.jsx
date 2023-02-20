import React, {useState} from 'react'

import './../Styles/BasketProduct.css'

export default function BasketProduct(props) {
  const [productCount, setproductCount] = useState(1)

    const {product, count, handleAmountChange} = props

    function handleCounter(type) {
      if(type == 'add') {
        setproductCount( prevState=> prevState + 1)
       console.log(productCount + 1)
      } else if(type == 'substract') {
        if(productCount == 1) {

        } else {
          setproductCount( prevState=> prevState - 1)
          console.log(productCount - 1)
        }
        
      } else {
        console.error('error')
      }
    }

    console.log(count)
  return (
    <div className='BasketProduct'>
        <img className='BasketProduct__Image' src={product.image} alt="" />
        <div className='BasketProduct__Name'>
            {product.name}
        </div>
        <div className='BasketProduct__Price'>
            {product.price.dolar}$
        </div>
        <div className='BasketProduct__Counter'>
          <div onClick={() => handleCounter('substract')}>
          SUBTRACT
          </div>
          <div>
            {productCount}
          </div>
          <div onClick={() => handleCounter('add')}>
            ADD
          </div>
        </div>
        
    </div>
  )
}
