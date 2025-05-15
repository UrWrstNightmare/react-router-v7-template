import type { I18nBase } from "@/i18n/_base" //_base 폴더의 I18nBase 타입을 가져옴

export const i18nEnglishExample1: I18nBase["example1"] = {
  //example1 네임스페이스의 번역 객체
  //I18nBase 타입에서 example1키에 해당하는 타입을 가져옴
  example: "Example translation",
  //example 키에 대한 번역 값
}
// 타입 안정성을 보장
//번역을 기능별로 모듈화하여 관리