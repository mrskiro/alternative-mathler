import * as React from "react"
import { Flex, Text } from "@chakra-ui/react"

type Props = {
  isMatchValue: boolean
  isMatchValueAndPosition: boolean
  isAnswer: boolean
}

export const Cell: React.FC<Props> = (props) => (
  <Flex
    w="56px"
    h="40px"
    align="center"
    justify="center"
    borderRadius="4px"
    borderColor={props.children?.toString() ? "black" : "gray.200"}
    borderWidth={props.isAnswer ? "0px" : "2px"}
    backgroundColor={
      props.isMatchValueAndPosition
        ? "green.200"
        : props.isMatchValue
        ? "orange.200"
        : props.isAnswer
        ? "gray.200"
        : ""
    }
  >
    <Text fontWeight="bold">{props.children}</Text>
  </Flex>
)
