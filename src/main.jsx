import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'
import { ThemeContextProvider } from './Context/ThemeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
      <App />
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
