import React from 'react'

// CSS STYLES

// COMPONENTS
import FlexSection from '../HomePage/FlexSection/FlexSection'
import ProductCard from './ProductCard/ProductCard'

// DATA
import products from '../../assets/data/products.json'

export default function ProductsPage() {
  return (
    <> 
    BANGER <br />
    <FlexSection>
        <ProductCard id={0} products={products} />
        <ProductCard id={1} products={products} />
    </FlexSection>
    </>
  )
}
