import React, {useState} from 'react'

import '../Styles/Basket.css'

export default function Basket(props) {
    const [BasketProducts, setBasketProducts] = useState([])

    const {products, id} = props

    const filteredProducts = []

    id.map(id => {
        products.map(product => {
            if (product.id === id) {
                const item = <div className='Basket__Item'>
                    <img src={product.image} alt={product.name} />
                    <div className='Basket__Item__Name'>{product.name}</div>
                    <div className='Basket__Item__Price'>${product.price}</div>
                    {/* <div className='Basket__Item__Quantity'>
                        <input type='number' min='1' max='10' value={product.quantity} onChange={(e) => {
                            const newQuantity = e.target.value
                            const newProduct = {...product, quantity: newQuantity}
                            setBasketProducts([...BasketProducts, newProduct])
                        }}/>
                    </div> */}
                    <div className='Basket__Item__Remove'>
                        <button onClick={() => {
                            setBasketProducts(BasketProducts.filter(product => product.id!== id))
                        }}>Remove</button>
                    </div>
                </div>
                filteredProducts.push(item)
            }
        })
    })

    console.log(filteredProducts)


    

  return (
    <div className='Basket'>
        
    </div>
  )
}
