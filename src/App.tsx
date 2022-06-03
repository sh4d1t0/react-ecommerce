import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<LogIn />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

function LogIn() {
  return (
    <>
      <h1>Login Page</h1>
    </>
  )
}

function Products() {
  return (
    <>
      <h1>Products Page</h1>
    </>
  )
}

function Cart() {
  return (
    <>
      <h1>Cart Shoping Page</h1>
    </>
  )
}

export default App
