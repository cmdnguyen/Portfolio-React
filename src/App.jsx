// import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './components/NavBar'
import Footer from './components/Footer'
import Header from './components/Header'
// import './App.css'

function App() {

  return (
    <>
    <Header />
    <Nav />
    <main>
      <Outlet />
    </main>
    <Footer/>
    </>
  )
}

export default App
