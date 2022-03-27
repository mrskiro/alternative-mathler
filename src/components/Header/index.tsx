import * as React from "react"
import {
  Flex,
  Heading,
  Icon,
  useColorMode,
  IconButton,
  Link,
  useColorModeValue,
} from "@chakra-ui/react"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"
import { GithubIcon } from "./GithubIcon"

export const Header: React.VFC = () => {
  const { toggleColorMode } = useColorMode()
  const SwitchIcon = useColorModeValue(SunIcon, MoonIcon)

  return (
    <Flex as="header" w="100%" h="40px" align="center" justify="center">
      <Flex w={"30%"} align="center" justify="space-between">
        <Link
          display="flex"
          isExternal
          aria-label="Go to GitHub page"
          href="https://github.com/purp1eeeee/alternative-mathler"
        >
          <Icon
            as={GithubIcon}
            transition="color 0.2s"
            w="16px"
            h="16px"
            _hover={{ color: "gray.600" }}
          />
        </Link>
        <Heading as="h1" fontSize="20px">
          alternative mathler
        </Heading>
        <IconButton
          w="16px"
          minW="16px"
          h="16px"
          aria-label="swich theme"
          variant="ghost"
          color="current"
          onClick={toggleColorMode}
          icon={<SwitchIcon />}
        />
      </Flex>
    </Flex>
  )
}
