import React from 'react'

// CSS STYLES
import './HeroCard.css'


export default function HeroCard(props) {
  
  return (
    <section className="Hero__Card">
        <h3 className='Hero__Title'>
            {props.title}
        </h3>
        <h4 className='Hero__Description'>
            {props.description}
        </h4>
        <button className='Hero__Button'>
            Read full article...
        </button>
    </section>
  )
}
