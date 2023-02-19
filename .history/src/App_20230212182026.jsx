
import './App.css'
import React, { useState } from 'react'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import FlexSection from './components/FlexSection'
import HeroCard from './components/HeroCard'
import ProductCard from './components/ProductCard'
import Flops__Beige from './assets/flops__beige.jpeg'
import Flops__Black from './assets/flops__black.png'
import Separator from './components/Separator'
import Basket from './components/Basket'


function App() {
  let windowWidth = window.innerWidth
  window.addEventListener('resize', () => {
    windowWidth = window.innerWidth
  })
  const [isBasketOpen, setIsBasketOpen] = useState(false)

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
  const products = [
    {
      id: 1,
      name: 'Bubble Flops - Beige',
      image: Flops__Beige,
      price: '99,99$'
    },
    {
      id: 2,
      name: 'Bubble Flops - Black',
      image: Flops__Black,
      price: '89,99$'
    }
  ]

  
  function handleOpenBasket(e) {
      e.stopPropagation()
      setIsBasketOpen(true)
  }

  function handleCloseBasket(e) {
      e.stopPropagation()
      setIsBasketOpen(false)
  }

  function addToBasket() {
    if(windowWidth < 1000) {
      setTimeout(() => {
        setIsBasketOpen(true)
      }, 400);
    } else {
      setIsBasketOpen(true)
    }
    
    
  }

  return (
    <div className="App">
      <Basket isBasketOpen={isBasketOpen} handleOpenBasket={handleOpenBasket} handleCloseBasket={handleCloseBasket}/>

      <Header />
      <Separator />
      <FlexSection>
        <HeroCard title={heroCardContent[0].title} description={heroCardContent[0].description}/>
        <HeroCard title={heroCardContent[1].title} description={heroCardContent[1].description}/>
        <HeroCard title={heroCardContent[2].title} description={heroCardContent[2].description}/>
      </FlexSection>
      <Separator />
      <FlexSection>
        <ProductCard id={products[0].id} name={products[0].name} image={products[0].image} price={products[0].price} addToBasket={addToBasket}/>
        <ProductCard id={products[1].id} name={products[1].name} image={products[1].image} price={products[1].price} addToBasket={addToBasket}/>
        
      </FlexSection>
      <Footer />
    </div>
  )
}

export default App