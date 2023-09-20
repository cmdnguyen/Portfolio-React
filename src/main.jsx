// import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import './index.css'
// import { ChakraProvider } from '@chakra-ui/react'

import App from './App.jsx'
import Error from './pages/Error'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/About',
        element: <About />
      },
      {
        path: '/Portfolio',
        element: <Portfolio />
      },
      {
        path: '/Contact',
        element: <Contact />
      },
      {
        path: '/Resume',
        element: <Resume />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
      <RouterProvider router={router} />
)
