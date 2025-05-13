import "@emotion/react"
import type { ThemeType } from "@/styles/themes/_base"

declare module "@emotion/react" {
  export type Theme = ThemeType
}
