import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

// styled-components 사용
export const ExampleComponentInner = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.background};
` //테마가 변경될 때 자동으로 업데이트
// ExampleComponentInner는 @emotion/styled로 생성된 컴포넌트로, 이미 타입이 정의되어 있음.

// 컴포넌트 정의
export const ExampleComponent = () => {
  const { t } = useTranslation("example1") // 번역 훅 사용
  return <ExampleComponentInner>{t("example")}</ExampleComponentInner> // 번역된 문자열 표시
}
// 위의 theme은 어디서 오는가?
// ThemeProvider를 통한 전달:
// ThemeProvider가 theme prop으로 테마 객체를 받음
// 이 테마는 React Context를 통해 하위 컴포넌트에 전달됨

// 스타일드 컴포넌트에서 접근:
// @emotion/styled는 자동으로 ThemeProvider의 테마에 접근
// 스타일드 컴포넌트의 props에 theme 객체가 자동으로 주입됨


// ThemeProvider가 자동으로 테마를 하위 컴포넌트에 전달
// 수동으로 props를 전달할 필요 없음