import React from 'react'

export default function BasketProduct(props) {
    const {product} = props
    console.log(product)
  return (
    <div className='Basket__Product'>
        <div className='Product__Name'>
            {product.name}
        </div>
        <img className={product.image} src="" alt="" />
    </div>
  )
}
