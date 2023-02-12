import React, {useState} from 'react'

import '../Styles/Basket.css'

export default function Basket(props) {
    const [BasketProducts, setBasketProducts] = useState([])

    const {products, id} = props
    
    id.map(element => {
        BasketProducts.map(prod => {
            console.log('lol')
            if(element == prod.id) {
                console.log('Already in Basket')
                return null
            } else {
                console.log('Not in Basket')
            }
        })

        // products.map(product => {
        //     if(element == product.id){
        //         setBasketProducts(prevState => [...prevState, product])
        //     }
        //     return null
        // })
    })



    

  return (
    <div className='Basket'>
        
    </div>
  )
}
