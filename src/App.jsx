import React from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Checkout from './components/Checkout'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Checkout' element={<Checkout/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
