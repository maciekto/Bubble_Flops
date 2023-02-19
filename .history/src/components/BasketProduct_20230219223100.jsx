import React from 'react'

import './../Styles/BasketProduct.css'

export default function BasketProduct(props) {
    const {product} = props
    console.log(product)
  return (
    <div className='BasketProduct'>
        <img className='BasketProduct__Image' src={product.image} alt="" />
        <div className='BasketProduct__Name'>
            {product.name}
        </div>
        <div className='BasketProduct__Price'>
            {/* {product.price} */}
        </div>
        
    </div>
  )
}
