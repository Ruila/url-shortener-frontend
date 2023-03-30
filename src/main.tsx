import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import { RouterMap } from "./router"
import ModalContextProvider from "./store/provider/ModalContextProvider"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <ModalContextProvider>
      <RouterMap />
    </ModalContextProvider>
  </BrowserRouter>
)
