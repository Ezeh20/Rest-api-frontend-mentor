import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import React, { useContext } from 'react'
import { ThemeContext } from "./Context/ThemeContext"

const App = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={theme}>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
