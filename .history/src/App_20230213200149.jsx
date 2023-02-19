
import './App.css'
import React, { useState } from 'react'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import FlexSection from './components/FlexSection'
import HeroCard from './components/HeroCard'
import ProductCard from './components/ProductCard'
import Flops__Beige from './assets/images/flops__beige.jpeg'
import Flops__Black from './assets/images/flops__black.png'
import Separator from './components/Separator'
import Basket from './components/Basket'

import products from './assets/data/products.json'

function App() {
  
  const [isBasketOpen, setIsBasketOpen] = useState(false)
  const [addedProdId, setaddedProdId] = useState(null)

  const heroCardContent = [
    {
      title: 'Why Bubble Flops?',
      description: `Bubble Flops are a great way to stand out and show your true self.
      They are designed in a way to get any attention possible. 
      It is almost impossible to not talking about them when you have just meet someone and trying to find topic to talk on.`
    },
    {
      title: 'Comfort and Safety',
      description: `Bubble flops have SIX diferent airbags, to ensure your safety when you accidently hit the furniture with the little finger.
      Airbags are removable to after an accident you can easily replace them with new ones.`
    },
    {
      title: 'Kids and Family',
      description: <>What about kids and family you might say.<br />
      Every inch of the Flop has been precisely enginered to shoot milions of bubbles every step.
      With this feature you really can't be bored!</>
    }
  ]

  let windowWidth = window.innerWidth
  window.addEventListener('resize', () => {
    windowWidth = window.innerWidth
  })



  
  function handleOpenBasket(e) {
      e.stopPropagation()
      setIsBasketOpen(true)
  }

  function handleCloseBasket(e) {
      e.stopPropagation()
      setIsBasketOpen(false)
  }

  function addToBasket(id) {
    setaddedProdId(id)


    if(windowWidth < 1000) {
      setTimeout(() => {
        setIsBasketOpen(true)
      }, 800);
    } else {
      setIsBasketOpen(true)
    }
    
    
  }

  return (
    <div className="App">
      <Basket isBasketOpen={isBasketOpen} handleOpenBasket={handleOpenBasket} handleCloseBasket={handleCloseBasket} products={products} addedProdId={addedProdId}/>

      <Header />
      <Separator />
      <FlexSection>
        <HeroCard title={heroCardContent[0].title} description={heroCardContent[0].description}/>
        <HeroCard title={heroCardContent[1].title} description={heroCardContent[1].description}/>
        <HeroCard title={heroCardContent[2].title} description={heroCardContent[2].description}/>
      </FlexSection>
      <Separator />
      <FlexSection>
        <ProductCard id={0} products={products} addToBasket={addToBasket}/>
        <ProductCard id={1} products={products} addToBasket={addToBasket}/>
        
      </FlexSection>
      <Footer />
    </div>
  )
}

export default App
