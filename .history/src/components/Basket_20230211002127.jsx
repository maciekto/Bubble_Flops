import React, {useState} from 'react'

import '../Styles/Basket.css'

export default function Basket(props) {
    const [BasketProducts, setBasketProducts] = useState([])

    const {products, id} = props
    
    id.map(element => {
        console.log(element)
        BasketProducts.map(prod => {
          
            if(element == prod.id) {
                console.log('Already in Basket')
            } else {
                products.map(product => {
                    if(element == product.id){
                        setBasketProducts(prevState => [...prevState, product])
                    }
                    return null
                })
            }
        })

        
    })



    

  return (
    <div className='Basket'>
        
    </div>
  )
}
