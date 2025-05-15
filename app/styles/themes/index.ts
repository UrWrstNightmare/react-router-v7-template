import { type ThemeType as _ThemeType } from "./_base"
import darkTheme from "./dark"
import lightTheme from "./light"

export type ThemeKeys = "light" | "dark" // 테마 키 타입

const themes: Record<ThemeKeys, _ThemeType> = {
  // ThemeKeys 객체의 key 타입 : 타입의 키를 사용하여 테마 객체를 저장
  // _ThemeType 객체의 값 타입 : 타입의 값을 저장
  light: lightTheme, // 라이트 테마
  dark: darkTheme, // 다크 테마
} // 테마 객체 통합

export type ThemeType = _ThemeType // 테마 타입 내보내기

export default themes // 테마 객체 내보내기
