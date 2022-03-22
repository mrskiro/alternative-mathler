import React from "react"
import ReactDOM from "react-dom"
import { Providers } from "./contexts"
import { App } from "./App"

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
)
