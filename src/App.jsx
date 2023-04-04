import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Shop from './pages/shop/shop'
import Plans from './pages/plans/plans'
import Cart from './pages/cart/cart'
import { ShopContextProvider } from './context/shopContext'

export default function App() {

  return (
    <main className="App">
      <ShopContextProvider>
        <Router basename='/candyshop'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />}/> 
            <Route path='/plans' element={<Plans />}/> 
            <Route path='/cart' element={<Cart />}/> 
          </Routes>
        </Router>
      </ShopContextProvider>
    </main>
  )
}


