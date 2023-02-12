import React, {useState} from 'react'

import '../Styles/Basket.css'

export default function Basket(props) {
    const [BasketProducts, setBasketProducts] = useState([])

    const {products, id} = props

    products.forEach(product => {
        if (id.includes(product.id)) {
            setBasketProducts([...BasketProducts, product])
        }
    })


    

  return (
    <div className='Basket'>
        
    </div>
  )
}
