import i18n from "i18next" // 메인 국제화 라이브러리
import { initReactI18next } from "react-i18next" //i18next를 React에서 사용하도록 연결해주는 모듈

import { resources, namespaces } from "@/i18n"
// resources: 언어별 번역 JSON 객체
// namespaces: 번역에 사용될 네임스페이스 배열

import { clientEnv } from "@/env"
// clientEnv: .env에서 가져온 환경 변수 (예: 디버그 설정)

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next) // init i18next //i18next를 React와 연결
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: "ko",                // 기본 언어 (초기 언어 설정)
    resources: resources,     // ko, en 번역 객체
    ns: namespaces,           // 사용될 네임스페이스들
    defaultNS: namespaces[0], // 기본 네임스페이스
    fallbackLng: "ko",        // 언어 설정이 실패했을 경우 대체 언어
    debug: clientEnv.VITE_APP_LOG_LEVEL === "debug", // 디버깅 모드

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })

export default i18n

// 여기서 설정된 i18n 인스턴스는 이후 I18nextProvider에 전달