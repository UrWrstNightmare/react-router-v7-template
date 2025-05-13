import baseTheme, { type ThemeType } from "./_base"
import darkTheme from "./dark"

export type ThemeKeys = "base" | "dark"

const themes: Record<ThemeKeys, ThemeType> = {
  base: baseTheme,
  dark: darkTheme,
}

export default themes
