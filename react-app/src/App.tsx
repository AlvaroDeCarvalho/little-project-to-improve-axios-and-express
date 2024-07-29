import { BrowserRouter } from "react-router-dom"
import RoutesApp from "./routes"
import {GlobalCss} from  './styles'
import React from "react"
function App() {
  return (
    <>
      <BrowserRouter>
      <GlobalCss />
        <RoutesApp />
      </BrowserRouter>
    </>
  )
}

export default App
