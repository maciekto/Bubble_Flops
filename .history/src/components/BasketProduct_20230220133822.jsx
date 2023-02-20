import React, {useState} from 'react'

import './../Styles/BasketProduct.css'

export default function BasketProduct(props) {
  const [productCount, setproductCount] = useState(1)

    const {product, count, handleAmountChange} = props

    function handleCounter(type) {
      if(type == 'add') {
        setproductCount( prevState=> prevState + 1)
      } else {
        setproductCount( prevState=> prevState - 1)
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
          <div>
          SUBTRACT
          </div>
          <div>
            {productCount}
          </div>
          <div>
            ADD
          </div>
        </div>
        
    </div>
  )
}
