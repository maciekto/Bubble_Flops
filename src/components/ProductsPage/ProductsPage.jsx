import React from 'react'
import {
  useOutletContext
} from 'react-router-dom'

// CSS STYLES

// COMPONENTS
import FlexSection from '../HomePage/FlexSection/FlexSection'
import ProductCard from './ProductCard/ProductCard'

// DATA
import products from '../../assets/data/products.json'

export default function ProductsPage() {
  const [ addToBasket, products ] = useOutletContext()

  return (
    <>
    <FlexSection>
      {
        products.map((element, index) => {
          console.log(element.id)
          return <ProductCard key={element.id} id={element.id} products={products} addToBasket={addToBasket} />
        })
      }
    </FlexSection>
    </>
  )
}
