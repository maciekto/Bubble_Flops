import React, {useState} from 'react'

import '../Styles/Basket.css'

export default function Basket(props) {
    const [BasketProducts, setBasketProducts] = useState([{id: 0}])

    const {products, id} = props

        BasketProducts.forEach((pd) => {
            console.log('sex')
            console.log(pd)
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
                        setBasketProducts([...BasketProducts, {id: id, item: item}])
                    }
                })
            }
        })
        
        
        
    

    

  return (
    <div className='Basket'>
    </div>
  )
}
