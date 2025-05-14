import "@emotion/react" //emotion 내부 모듈타입 확장
import type { ThemeType } from "@/styles/themes"

declare module "@emotion/react" {
  export type Theme = ThemeType
}
