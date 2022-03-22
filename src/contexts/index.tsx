import * as React from "react"
import {
  ColorSchemeProvider,
  ColorScheme,
  MantineProvider,
} from "@mantine/core"

export const Providers: React.FC = (props) => {
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>("dark")
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"))

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider withNormalizeCSS theme={{ colorScheme }}>
        {props.children}
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
