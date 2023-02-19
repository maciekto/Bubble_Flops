import React from 'react'

export default function BasketProduct(props) {
    const {product} = props
    console.log(product)
  return (
    <div className='BasketProduct'>
        <div className='BasketProduct__Name'>
            {product.name}
        </div>
        <img className='BasketProduct__Image' src={product.image} alt="" />
    </div>
  )
}
