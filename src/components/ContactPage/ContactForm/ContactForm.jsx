import React, { useState } from 'react'
import { Form } from 'react-router-dom'

import './ContactForm.css'

export default function ContactForm() {

  const [titleClass, setTitleClass] = useState('');
  const [emailClass, setEmailClass] = useState('');
  const [textareaClass, setTextareaClass] = useState('');
  const [submitClass, setSubmitClass] = useState('');

  const [titleInput, setTitleInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [textareaInput, setTextareaInput] = useState('');


  const handleSubmit = () => {

    if(emailInput !== '' && emailInput.split('').includes('@') && emailInput[emailInput.indexOf('@') + 1] !== undefined) {
      setSubmitClass('submitClass')
    }

  }

  const handleInput = (e, type) => {
    if(type == 'title') {
      setTitleInput(e.target.value)
    }
    if(type == 'email') {
      setEmailInput(e.target.value)
    }
    if(type == 'textarea') {
      setTextareaInput(e.target.value)
    }
  }

  const labelClassHandle = (type) => {
    if(type == 'title' && titleClass == '') {
      setTitleClass('Form__Span__Focus')
    } else if (titleInput == '') {
      setTitleClass('')
    }

    if(type == 'email' && emailClass == '') {
      setEmailClass('Form__Span__Focus')
    } else if (emailInput == '') {
      setEmailClass('')
    }

    if(type == 'textarea' && textareaClass == '') {
      setTextareaClass('Form__Span__Focus')
    } else if (textareaInput == '') {
      setTextareaClass('')
    }
  }

  return (
    <Form className='Form'>
        <div className='Form__Title'>Contact</div>
        <div>
          <label htmlFor="title" className='Form__Label' onFocus={() => labelClassHandle('title')} onBlur={() => labelClassHandle('title')}>
            <span className={titleClass}>Title</span>
            <input id='title' type='text' value={titleInput} onChange={(e) => handleInput(e, 'title')} />
          </label>
          <label htmlFor="email" className='Form__Label' onFocus={() => labelClassHandle('email')} onBlur={() => labelClassHandle('email')}>
            <span className={emailClass}>Email</span>
            <input id='email' type='email' value={emailInput} onChange={(e) => handleInput(e, 'email')} required/>
          </label>
        </div>
        <label htmlFor="textarea" className='Form__Label' onFocus={() => labelClassHandle('textarea')} onBlur={() => labelClassHandle('textarea')}>
          <span className={textareaClass}>Message</span>
          <textarea id='textarea' value={textareaInput} onChange={(e) => handleInput(e, 'textarea')} />
        </label>
        <input className={submitClass} type='submit' value={'Send'} onClick={handleSubmit}/>

      </Form>
  )
}
