import React from "react"
import ReactDOM from "react-dom"
import { MantineProvider } from "@mantine/core"
import { App } from "./App"

ReactDOM.render(
  <React.StrictMode>
    <MantineProvider withNormalizeCSS>
      <App />
    </MantineProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
