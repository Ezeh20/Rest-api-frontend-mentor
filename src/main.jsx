import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'
import { ThemeContextProvider } from './Context/ThemeContext'
import { CountriesProvider } from './Context/Countries-context'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <ThemeContextProvider>
        <CountriesProvider>
          <App />
        </CountriesProvider>
      </ThemeContextProvider>
    </BrowserRouter>

)
