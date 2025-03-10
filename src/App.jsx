import { useState } from 'react'
import './App.css'
import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Collection from './pages/Collection'
import Details from './pages/Details'
import Nav from './components/Nav'
import Cart from './components/Cart'
import Auth from './pages/Auth'
import { Toaster } from 'react-hot-toast'



function App() {



  return (
    <>
     
      <Router>
      <Toaster/>
        <Cart/>
        <Header />
        
        <Nav/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/auth' element={<Auth/>}/>
          
          
        </Routes>

      </Router>
     
    </>
  )
}

export default App
