import React from 'react'

// CSS STYLES
import './ErrorPage.css'

import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error)

  return (
    <div className='ErrorPage'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message} {error.status}</i>
      </p>
    </div>
  )
}
