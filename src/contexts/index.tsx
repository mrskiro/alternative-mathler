import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"

export const Providers: React.FC = (props) => {
  return <ChakraProvider>{props.children}</ChakraProvider>
}
