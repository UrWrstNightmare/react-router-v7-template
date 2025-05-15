import "@emotion/react" //emotion 내부 모듈타입 확장
import type { ThemeType } from "@/styles/themes"

declare module "@emotion/react" {
  export type Theme = ThemeType
}
  // @emotion/react의 타입을 확장하여 프로젝트의 테마 타입을 적용
  // ThemeType을 @emotion/react의 Theme 타입으로 사용하도록 설정
  // 이로 인해 스타일드 컴포넌트에서 테마 타입을 자동으로 인식