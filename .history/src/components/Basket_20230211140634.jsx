import React, {useState} from 'react'

import '../Styles/Basket.css'

export default function Basket(props) {
    const [BasketProducts, setBasketProducts] = useState([{id: 0}])

    const {products, id} = props

    BasketProducts.forEach(element => {
        console.log(element)
    });

        BasketProducts.forEach((pd) => {
            console.log('sex')
            if(pd.id === id){
                console.log('Product exists in basket')
            } else {
                products.map(product => {
                    if (product.id === id) {
                        const item = <div className='Basket__Item'>
                            <img className='Basket__Image' src={product.image} alt={product.name} />
                            <div className='Basket__Name'>{product.name}</div>
                            <div className='Basket__Price'>${product.price}</div>
                            {/* <div className='Basket__Item__Quantity'>
                                <input type='number' min='1' max='10' value={product.quantity} onChange={(e) => {
                                    const newQuantity = e.target.value
                                    const newProduct = {...product, quantity: newQuantity}
                                    setBasketProducts([...BasketProducts, newProduct])
                                }}/>
                            </div> */}
                            {/* <div className='Basket__Item__Remove'>
                                <button onClick={() => {
                                    setBasketProducts(BasketProducts.filter(product => product.id!== id))
                                }}>Remove</button>
                            </div> */}
                        </div>
                        setBasketProducts([...BasketProducts, item])
                    }
                })
            }
        })
        
        
        
    

    

  return (
    <div className='Basket'>
    </div>
  )
}
