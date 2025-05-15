import "react-i18next"

import type { I18nBase } from "@/i18n"

declare module "react-i18next" {
  interface CustomTypeOptions {
    resources: I18nBase
  }
}

declare module "i18next" {
  interface CustomTypeOptions {
    resources: I18nBase
  }
}
// react-i18next와 i18next의 타입을 확장
// 프로젝트의 번역 리소스 타입(I18nBase)을 적용
// 이로 인해 번역 함수(t)에서 타입 안정성을 보장