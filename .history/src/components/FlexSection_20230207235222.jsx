import React from 'react'

export default function FlexSection(props) {
    console.log(props)
  return (
    <div className='FlexSection'>
        {props.children}
    </div>
  )
}
