import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { GoogleOAuthProvider } from "@react-oauth/google"
import MainContextProvider from "./contexts/MainContext"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <MainContextProvider>
    <React.StrictMode>
      <BrowserRouter>
        <GoogleOAuthProvider clientId="1098724881553-mgo34vd1q54cgn1416d5nhcp6jh7vh7c">
          <App />
        </GoogleOAuthProvider>
      </BrowserRouter>
    </React.StrictMode>
  </MainContextProvider>
)
