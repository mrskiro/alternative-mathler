import * as React from "react"
import { VStack, HStack, Text } from "@chakra-ui/react"
import { Header } from "./components/Header"
import { getDesireNumber, getResultAnswers, Sign, config } from "./domain"
import { Input } from "./components/Input"

export const App = () => {
  const desireValue = getDesireNumber()
  const resultAnswers = getResultAnswers(desireValue)

  return (
    <VStack>
      <Header />
      <Text
        as="p"
        fontWeight="bold"
      >{`Find the hidden calculation that equals ${desireValue}`}</Text>

      <HStack>
        {[...Array(10).keys()].map((v) => (
          <Input key={v}>{v}</Input>
        ))}
      </HStack>
      <HStack>
        <Input>Enter</Input>
        {Object.values(Sign).map((v) => (
          <Input key={v}>{v}</Input>
        ))}
        <Input>Delete</Input>
      </HStack>
    </VStack>
  )
}
