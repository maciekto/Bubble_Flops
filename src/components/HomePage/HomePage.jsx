import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
// COMPONENTS
import Header from './Header/Header'
import FlexSection from './FlexSection/FlexSection'
import HeroCard from './HeroCard/HeroCard'
import ProductCard from '../ProductsPage/ProductCard/ProductCard'
import Separator from '../utilityPages/Separator/Separator'
import Basket from './Basket/Basket'
import ContactForm from '../ContactPage/ContactForm/ContactForm'

export default function () {
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
    const [ addToBasket, products ] = useOutletContext()


    return (
        <>
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
            <Separator />
            <ContactForm />
        </>
    )
}
