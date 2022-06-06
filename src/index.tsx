import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/global.css'
import GlobalStyles from './styles/GlobalStyles'
import App from './App'
import { Login } from './components/templates/Login'
import { Products } from './components/templates/Products'
import { Cart } from './components/templates/Cart'

const container = document.getElementById('app')
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home" element={<App />} />
          <Route path="login" element={<Login />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
