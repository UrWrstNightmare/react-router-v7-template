import "@emotion/react"
import type { ThemeType } from "@/styles/themes"

declare module "@emotion/react" {
  export type Theme = ThemeType
}
