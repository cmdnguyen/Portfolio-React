// import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import { chakra, Flex } from '@chakra-ui/react';
// import './App.css'

function App() {

  return (
    <Flex direction='column' flex='1' minH='100vh'>
      <chakra.header id='header' bg='blue.600'>
        <Header />
      </chakra.header>
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </Flex>
  )
}

export default App
