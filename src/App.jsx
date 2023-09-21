// import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import { chakra } from '@chakra-ui/react';
// import './App.css'

function App() {

  return (
    <>
      <chakra.header id='header'>
        <Header />
      </chakra.header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
