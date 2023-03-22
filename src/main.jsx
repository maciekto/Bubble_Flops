import React from 'react'
import ReactDOM from 'react-dom/client'



// CSS STYLES
import './main.css'
import './Styles/animation.css'

// COMPONENTS
import App from './components/App/App'
import ContactPage from './components/ContactPage/ContactPage'
import ErrorPage from './components/utilityPages/ErrorPage/ErrorPage'
import HomePage from './components/HomePage/HomePage'
import ProductsPage from './components/ProductsPage/ProductsPage'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/contact',
        element: <ContactPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/products',
        element: <ProductsPage />
      },
      {
        path: '/home',
        element: <HomePage />
      },
      {
        path: '/basket',
        element: <div>BASKET</div>
      }
    ]
  },
  
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
