import React, {useState} from 'react'

import '../Styles/Basket.css'

export default function Basket(props) {
    const [BasketProducts, setBasketProducts] = useState([])

    const {products, id} = props

    if(id != undefined) {
        id.forEach(id => {
            const prodAfterFilter = products.map(element => {
                if(element.id == id) {
                    return element
                } else {
                    return null
                }
            })
            setBasketProducts(prevState => {
                return [...prevState, prodAfterFilter]
               })
        });
       
    }

    console.log(BasketProducts)


    

  return (
    <div className='Basket'>
        
    </div>
  )
}
