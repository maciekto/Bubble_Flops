import React from 'react'

// CSS styles
import './FlexSection.css'

export default function FlexSection(props) {
  return (
    <div className='FlexSection'>
        {props.children}
    </div>
  )
}
