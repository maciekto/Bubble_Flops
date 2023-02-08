import React from 'react'
import '../Styles/Hero.css'
export default function HeroCard(props) {
  
  return (
    <div className="Hero__Card">
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
