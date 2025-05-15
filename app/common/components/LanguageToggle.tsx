import React from "react"
import { useTranslation } from "react-i18next"

const LanguageToggle = () => { //언어 변경 토글
  const { i18n } = useTranslation() // react-i18next 라이브러리의 useTranslation 훅을 사용하여 i18n 객체를 가져옴
// i18n 객체:
// i18next의 핵심 인스턴스
// 언어 변경, 번역 관리 등 다양한 기능을 제공
// 주요 속성과 메서드:
{/**
  i18n.language        // 현재 선택된 언어 (예: "en", "ko")
  i18n.changeLanguage() // 언어 변경 메서드
  i18n.t()            // 번역 함수
  i18n.exists()       // 번역 키 존재 여부 확인
   */}


  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = event.target.value
    i18n.changeLanguage(newLang) // 선택된 언어로 변경
  }

  return (
    <select value={i18n.language} onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="ko">한국어</option>
    </select>
  )
}

export default LanguageToggle

//언어 변경 시
{/**
i18n.changeLanguage(newLang)가 호출되면
i18next 라이브러리가 내부적으로 언어를 변경하고
변경된 언어에 해당하는 번역 파일을 로드
*/}