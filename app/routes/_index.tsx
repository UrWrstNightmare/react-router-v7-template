import { ExampleComponent } from "@/features/example/components/ExampleComponent"

import type { Route } from "./+types/_index"
// Route 타입을 import
// meta() 함수에서 타입 체크용으로 사용됨 (Route.MetaArgs)

import ThemeToggle from "@/common/components/ThemeToggle"
import LanguageToggle from "@/common/components/LanguageToggle"

export function meta({}: Route.MetaArgs) { // 해당 페이지의 제목과 설명
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ]
}
// React Router의 Data Router 구조에서 페이지의 <head> 정보를 설정할 때 사용
// 이 컴포넌트를 라우터에 등록할 때 자동으로 <title>, <meta name="description">에 반영됨
{/* <title>New React Router App</title> */}
{/* <meta name="description" content="Welcome to React Router!" /> */}

export default function Home() {
  return (
    <>
      <ExampleComponent /> {/** 예시번역 */}
      <LanguageToggle /> {/**언어 토글 */}
      <ThemeToggle /> {/** 테마 토글(색상) */}
    </>
  )
}
