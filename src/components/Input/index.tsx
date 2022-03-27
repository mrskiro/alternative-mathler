import * as React from "react"
import { Flex, Text } from "@chakra-ui/react"

type Props = {
  onClick: () => void
}

export const Input: React.FC<Props> = (props) => (
  <Flex
    h="50px"
    minW="40px"
    px="12px"
    align="center"
    justify="center"
    cursor="pointer"
    backgroundColor="gray.200"
    borderRadius="6px"
    _hover={{ backgroundColor: "gray.300" }}
    onClick={props.onClick}
  >
    <Text fontWeight="bold">{props.children}</Text>
  </Flex>
)
