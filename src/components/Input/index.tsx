import * as React from "react"
import { Flex, Text } from "@chakra-ui/react"

export const Input: React.FC = (props) => (
  <Flex
    h="50px"
    px="12px"
    align="center"
    justify="center"
    cursor="pointer"
    backgroundColor="gray.200"
    borderRadius="6px"
    _hover={{ backgroundColor: "gray.300" }}
  >
    <Text fontWeight="bold">{props.children}</Text>
  </Flex>
)
