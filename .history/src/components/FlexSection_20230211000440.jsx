import React from 'react'
import '../Styles/FlexSection.css'
export default function FlexSection(props) {
  return (
    <div className='FlexSection'>
        {props.children}
    </div>
  )
}
