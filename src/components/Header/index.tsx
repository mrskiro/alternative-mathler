import * as React from "react"
import { createStyles, Header as MantineHeader, Text } from "@mantine/core"

export const Header: React.VFC = () => {
  const { classes } = useStyles()
  return (
    <MantineHeader height={60} className={classes.header}>
      <Text component="h1" weight={500} size="xl">
        alternative mathler
      </Text>
    </MantineHeader>
  )
}

const useStyles = createStyles(() => ({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}))
