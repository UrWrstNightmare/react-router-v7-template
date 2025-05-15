import React from "react"

import { ThemeProvider } from "@emotion/react" //emotion기반의 테마 설정 - 실제 테마 스타일 적용
import themes, { type ThemeKeys } from "@/styles/themes" // 테마 설정

import i18n from "@/libs/i18n" // 초기화된 i18n 인스턴스 : I18nextProvider에 전달
import { I18nextProvider } from "react-i18next" //다국어 지원

// 테마 관련 타입 정의
export type ThemeKeysWithAuto = ThemeKeys | "auto" //ThemeKeys는 light | dart, auto 옵션 추가

export const SelectedThemeContext = React.createContext<{
  selectedTheme: ThemeKeysWithAuto // 테마 키 타입
  setSelectedTheme: (theme: ThemeKeysWithAuto) => void // 테마를 변경할 수 있는 함수
}>({
  selectedTheme: "light", // 초기값
  setSelectedTheme: () => {}, // 초기값 : 빈 함수
})// 현재 선택된 테마와 테마 설정 함수를 전역 컨텍스트에 제공


const Providers: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const [selectedTheme, setSelectedTheme] = React.useState<ThemeKeysWithAuto>("light")
  // 테마 상태를 관리하는 selectedTheme state를 생성

  const extractedTheme = React.useMemo(() => {
    if (selectedTheme === "auto") { //auto 모드일 때 시스템의 다크모드 설정을 확인하여 테마 선택
      return themes[
        window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      ]
    }
    return themes[selectedTheme] // 현재 선택된 테마에 따라 실제 적용될 테마 객체를 추출
  }, [selectedTheme])

  return (
    <I18nextProvider i18n={i18n}>
      <SelectedThemeContext.Provider value={{ selectedTheme, setSelectedTheme }}>
        {/** 테마 상태를 전역에서 사용할 수 있도록 컨텍스트 제공 */}

        <ThemeProvider theme={extractedTheme}>{props.children}</ThemeProvider>
        {/** 선택된 테마를 적용한 테마 프로바이더 제공 */}

      </SelectedThemeContext.Provider>
    </I18nextProvider>
  )
}

export default Providers
