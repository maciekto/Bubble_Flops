import React from 'react'
import '../Styles/Hero.css'
export default function HeroCard() {
  return (
    <div className="Hero__Card Hero__Card1">
        <div className='Hero__Title'>
            {props.title}
        </div>
        <div className='Hero__Description'>
            {props.description}
        </div>
        <div className='Hero__Button'>
            Read full article...
        </div>
    </div>
  )
}
