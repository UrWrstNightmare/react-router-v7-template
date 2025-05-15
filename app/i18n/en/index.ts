import i18nBase from "../_base" // _base에서 기본 번역 객체를 가져옴
import { i18nEnglishExample1 } from "./namespaces/example1"
import { i18nEnglishExample2 } from "./namespaces/example2"
// 영어 전용 번역 파일들을 가져옴
const i18nEn = {
  ...i18nBase,
  example1: i18nEnglishExample1,
  example2: i18nEnglishExample2,
}
// 기본 번역 객체와 영어 전용 번역 객체를 합침
// 기본 번역을 유지하면서 영어에 특화된 번역을 적용
export default i18nEn
// 영어 번역 객체를 내보냄