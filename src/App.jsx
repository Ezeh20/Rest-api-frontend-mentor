import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"

const App = () => {

  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  )
}

export default App
