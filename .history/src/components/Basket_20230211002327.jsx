import React, {useState} from 'react'

import '../Styles/Basket.css'

export default function Basket(props) {
    const [BasketProducts, setBasketProducts] = useState([])

    const {products, id} = props

    const filteredProducts = null

    id.map(id => {
        console.log(id)
    })



    

  return (
    <div className='Basket'>
        
    </div>
  )
}
