import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'
import { ThemeContextProvider } from './Context/ThemeContext'
import { CountriesProvider } from './Context/Countries-context'
import ScrollToTop from './Component/Scroll-to-top'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <CountriesProvider>
          <ScrollToTop />
          <App />
        </CountriesProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
