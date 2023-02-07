import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import React, { useContext } from 'react'
import { ThemeContext } from "./Context/ThemeContext"
import CountryComponent from "./Component/Country-component/Country-component"
import BordersComponent from "./Component/Borders/Borders-component"


const App = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={theme}>
      <Routes>
          <Route index element={<Home />} />
          <Route path=":country" element={<CountryComponent />} />
      </Routes>
    </div>
  )
}

export default App
