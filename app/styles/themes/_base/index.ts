import { colors } from "./variables/colors"
import { fonts } from "./variables/fonts"

const baseTheme = {
  colors,
  fonts,
}

export type ThemeType = typeof baseTheme

export default baseTheme
