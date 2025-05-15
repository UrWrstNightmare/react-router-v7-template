import { i18nBaseExample1 } from "./namespaces/example1"
import { i18nBaseExample2 } from "./namespaces/example2"
// namespaces 폴더의 example1, example2 모듈을 가져옴

const i18nBase = { // 가져온 번역 모듈들을 하나의 객체로 구성
  example1: i18nBaseExample1,
  example2: i18nBaseExample2,
} // 모든 언어에서 공통으로 사용되는 기본 번역 구조

export type I18nBase = typeof i18nBase // 번역 객체의 타입을 정의

export default i18nBase // 기본 번역 객체를 내보냄
// 번역 객체를 내보내면 다른 파일에서 해당 객체를 사용할 수 있음
