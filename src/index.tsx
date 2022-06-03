import { StrictMode } from 'react'
import ReactDom from 'react-dom'
import './styles/global.css'
import GlobalStyles from './styles/GlobalStyles'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDom.render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
)
