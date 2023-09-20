// import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'
// import { ChakraProvider } from '@chakra-ui/react'

import App from './App.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children: [
      {
        index: true,
      },
      {
        path: '/About',
      },
      {
        path: '/Portfolio',
      },
      {
        path: '/Contact',
      },
      {
        path: '/Resume',
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
    // <ChakraProvider>
    // </ChakraProvider>

)
