import React, {useState} from 'react'

import '../Styles/Basket.css'

export default function Basket(props) {
    const [BasketProducts, setBasketProducts] = useState([])

    const {products, id} = props

    id.map(element => {
        console.log(element)
        if (products.find(product => product.id === element)) {
            console.log(element.id)
        }
    })



    

  return (
    <div className='Basket'>
        
    </div>
  )
}
