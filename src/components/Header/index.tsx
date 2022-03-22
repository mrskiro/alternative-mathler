import * as React from "react"
import {
  createStyles,
  Header as MantineHeader,
  Text,
  ActionIcon,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core"
import { Sun, MoonStars } from "tabler-icons-react"

export const Header: React.VFC = () => {
  const { classes } = useStyles()
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  const theme = useMantineTheme()
  const isDark = colorScheme === "dark"

  return (
    <MantineHeader height={60} className={classes.header} px="md">
      <div></div>
      <Text
        component="h1"
        color={isDark ? theme.white : theme.black}
        weight={500}
        size="xl"
        variant="text"
      >
        alternative mathler
      </Text>
      <ActionIcon
        variant="default"
        onClick={() => toggleColorScheme()}
        color={isDark ? "yellow" : "blue"}
      >
        {isDark ? <Sun size={16} /> : <MoonStars size={16} />}
      </ActionIcon>
    </MantineHeader>
  )
}

const useStyles = createStyles(() => ({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}))
