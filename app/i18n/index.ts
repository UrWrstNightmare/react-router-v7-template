import type { I18nBase as _I18nBase } from "@/i18n/_base"
// 기본 번역 타입을 _I18nBase
import i18nKo from "./ko"
import i18nEn from "./en"
// 한국어와 영어 번역 파일을 가져옴

export const namespaces = ["example1", "example2"] 
//사용할 번역 영역 - 페이지나 도메인 단위로 번역 파일을 분리할 때 사용

export const resources = {
  ko: i18nKo,
  en: i18nEn,
} // 모든 언어의 번역을 하나의 객체로 관리
// 언어 코드(ko, en)를 키로 사용하여 각 언어의 번역에 접근

export type I18nBase = _I18nBase
// 기본 번역 타입을 내보냄

{/**
  중앙 집중식 관리:
모든 언어의 번역을 한 곳에서 관리
새로운 언어를 추가할 때 이 파일만 수정하면 됨

네임스페이스 관리:
번역 영역을 명확히 구분하여 관리
필요한 경우 새로운 네임스페이스를 쉽게 추가

타입 시스템 통합:
모든 번역이 동일한 타입 구조를 따르도록 보장
타입 안정성을 통해 오류를 미리 방지

확장성:
새로운 언어를 쉽게 추가
새로운 번역 영역을 쉽게 추가 */}