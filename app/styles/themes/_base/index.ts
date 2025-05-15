import { colors } from "./variables/colors"
import { fonts } from "./variables/fonts"
import { breakpoints } from "./variables/breakpoints"

const baseTheme = {
  colors,
  fonts,
  breakpoints,
}

export type ThemeType = typeof baseTheme

export default baseTheme
