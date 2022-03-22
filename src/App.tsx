import * as React from "react"
import * as Mantine from "@mantine/core"
import { Header } from "./components/Header"

export const App = () => (
  <Mantine.AppShell header={<Header />}>
    <Mantine.Button>a</Mantine.Button>
  </Mantine.AppShell>
)
