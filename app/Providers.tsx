import React from "react"

import { ThemeProvider } from "@emotion/react"
import themes, { type ThemeKeys } from "@/styles/themes"

export type ThemeKeysWithAuto = ThemeKeys | "auto"

export const SelectedThemeContext = React.createContext<{
  selectedTheme: ThemeKeysWithAuto
  setSelectedTheme: (theme: ThemeKeysWithAuto) => void
}>({
  selectedTheme: "base",
  setSelectedTheme: () => {},
})

const Providers: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const [selectedTheme, setSelectedTheme] = React.useState<ThemeKeysWithAuto>("base")

  const extractedTheme = React.useMemo(() => {
    if (selectedTheme === "auto") {
      return themes[
        window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "base"
      ]
    }

    return themes[selectedTheme]
  }, [selectedTheme])

  return (
    <SelectedThemeContext.Provider value={{ selectedTheme, setSelectedTheme }}>
      <ThemeProvider theme={extractedTheme}>{props.children}</ThemeProvider>
    </SelectedThemeContext.Provider>
  )
}

export default Providers
