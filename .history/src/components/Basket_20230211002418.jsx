import React, {useState} from 'react'

import '../Styles/Basket.css'

export default function Basket(props) {
    const [BasketProducts, setBasketProducts] = useState([])

    const {products, id} = props

    const filteredProducts = []

    id.map(id => {
        products.map(product => {
            if (product.id === id) {
                filteredProducts.push(product)
            }
        })
    })

    console.log(filteredProducts)


    

  return (
    <div className='Basket'>
        
    </div>
  )
}
