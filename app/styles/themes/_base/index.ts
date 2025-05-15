import { colors } from "./variables/colors" // colors 객체 가져오기
import { fonts } from "./variables/fonts" // fonts 객체 가져오기
// 모든 테마에서 공통으로 사용되는 기본 값

const baseTheme = {
  colors,
  fonts,
} // 기본 테마 객체 생성

export type ThemeType = typeof baseTheme // 테마 타입 내보내기

export default baseTheme // 기본 테마 객체 내보내기
